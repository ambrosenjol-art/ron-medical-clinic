import { NextResponse } from "next/server";

type RateEntry = {
  count: number;
  resetAt: number;
};

type SecurityOptions = {
  scope: string;
  maxRequests: number;
  windowMs: number;
};

const globalRateStore = globalThis as unknown as {
  __rateStore?: Map<string, RateEntry>;
};

const rateStore = globalRateStore.__rateStore ?? new Map<string, RateEntry>();
if (!globalRateStore.__rateStore) {
  globalRateStore.__rateStore = rateStore;
}

function allowedOrigins() {
  const configured = process.env.NEXT_PUBLIC_SITE_URL;
  const defaults = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    "https://www.ronmedicalcenter.com",
  ];

  const origins = new Set(defaults);

  if (configured) {
    try {
      origins.add(new URL(configured).origin);
    } catch {
      // Ignore invalid env values and continue with defaults.
    }
  }

  return origins;
}

function getClientIp(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() || "unknown";
  }

  const realIp = request.headers.get("x-real-ip");
  if (realIp) {
    return realIp;
  }

  return "unknown";
}

function isOriginAllowed(request: Request) {
  const secFetchSite = request.headers.get("sec-fetch-site");
  if (secFetchSite === "cross-site") {
    return false;
  }

  const origin = request.headers.get("origin");
  if (!origin) {
    return true;
  }

  return allowedOrigins().has(origin);
}

function isWithinRateLimit(request: Request, options: SecurityOptions) {
  const now = Date.now();
  const key = `${options.scope}:${getClientIp(request)}`;
  const existing = rateStore.get(key);

  if (!existing || existing.resetAt <= now) {
    rateStore.set(key, { count: 1, resetAt: now + options.windowMs });
    return { allowed: true, retryAfterSeconds: 0 };
  }

  if (existing.count >= options.maxRequests) {
    const retryAfterSeconds = Math.max(1, Math.ceil((existing.resetAt - now) / 1000));
    return { allowed: false, retryAfterSeconds };
  }

  existing.count += 1;
  rateStore.set(key, existing);
  return { allowed: true, retryAfterSeconds: 0 };
}

export function enforceApiSecurity(request: Request, options: SecurityOptions) {
  if (!isOriginAllowed(request)) {
    return NextResponse.json(
      { ok: false, message: "Blocked by origin policy" },
      { status: 403 },
    );
  }

  const rate = isWithinRateLimit(request, options);
  if (!rate.allowed) {
    return NextResponse.json(
      { ok: false, message: "Too many requests. Please try again shortly." },
      {
        status: 429,
        headers: {
          "Retry-After": String(rate.retryAfterSeconds),
        },
      },
    );
  }

  return null;
}
