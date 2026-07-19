import BrandLogo from "@/components/BrandLogo";
import Link from "next/link";

const quickLinks = [
  ["Home", "/"],
  ["Services", "/services"],
  ["Appointments", "/appointments"],
  ["Privacy Policy", "/privacy"],
  ["Terms of Service", "/terms"],
] as const;

export default function Footer() {
  return (
    <footer className="mt-20 bg-[#0B2239] text-slate-100">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <BrandLogo dark />
          <p className="mt-3 text-sm text-slate-300">Trusted care for families with modern diagnostics and compassionate professionals.</p>
        </div>
        <div>
          <h4 className="font-semibold">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            {quickLinks.map(([name, href]) => (
              <li key={href}>
                <Link href={href} className="hover:text-white">
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Emergency Numbers</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            <li>Emergency Contact 1: 0738600074</li>
            <li>Emergency Contact 2: 0725435100</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Newsletter</h4>
          <p className="mt-3 text-sm text-slate-300">Get monthly health tips and clinic updates.</p>
          <form className="mt-3 flex gap-2" aria-label="Newsletter subscription form">
            <input aria-label="Email address" className="w-full rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm placeholder:text-slate-300" placeholder="Your email" />
            <button className="rounded-md bg-[#2ECC71] px-3 py-2 text-sm font-semibold text-slate-900">Join</button>
          </form>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-slate-400">
        Copyright {new Date().getFullYear()} RON Medical Center. All rights reserved.
      </div>
    </footer>
  );
}
