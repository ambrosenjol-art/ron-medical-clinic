"use client";

import { useInView, useMotionValue, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Props = {
  value: number;
  label: string;
  suffix?: string;
};

export default function AnimatedCounter({ value, label, suffix = "+" }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, value, {
      duration: 1.4,
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });
    return controls.stop;
  }, [count, inView, value]);

  return (
    <div ref={ref} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-sky-100">
      <p className="text-3xl font-bold text-[#0077B6]">{display}{suffix}</p>
      <p className="mt-2 text-sm text-slate-600">{label}</p>
    </div>
  );
}
