"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

type ContactValues = {
  fullName: string;
  email: string;
  phone: string;
  message: string;
};

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const { register, handleSubmit, reset, formState: { isSubmitting } } = useForm<ContactValues>();

  const onSubmit = async (data: ContactValues) => {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = (await response.json()) as { message?: string };

    if (response.ok) {
      setSent(true);
      setResponseMessage(result.message || "Message sent successfully. We will get back to you soon.");
      reset();
      return;
    }

    setSent(false);
    setResponseMessage("");
    alert("Message failed to send. Please try again.");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
      <input className="rounded-lg border border-slate-300 p-3" placeholder="Full Name" {...register("fullName", { required: true })} />
      <input className="rounded-lg border border-slate-300 p-3" type="email" placeholder="Email" {...register("email", { required: true })} />
      <input className="rounded-lg border border-slate-300 p-3" placeholder="Phone" {...register("phone", { required: true })} />
      <textarea className="min-h-32 rounded-lg border border-slate-300 p-3" placeholder="Message" {...register("message", { required: true })} />
      <button disabled={isSubmitting} className="rounded-full bg-[#0077B6] px-5 py-3 font-semibold text-white hover:bg-[#005f90] disabled:opacity-60">
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
      {sent ? <p className="text-sm font-medium text-emerald-600">{responseMessage}</p> : null}
    </form>
  );
}
