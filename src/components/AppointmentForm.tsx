"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

type FormValues = {
  patientName: string;
  phoneNumber: string;
  email: string;
  date: string;
  time: string;
  department: string;
  doctor: string;
  reason: string;
};

export default function AppointmentForm() {
  const [success, setSuccess] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    const response = await fetch("/api/appointments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = (await response.json()) as { message?: string };

    if (response.ok) {
      setSuccess(true);
      setResponseMessage(
        result.message || "Appointment booked successfully. Our team will contact you shortly.",
      );
      reset();
      return;
    }

    setSuccess(false);
    setResponseMessage("");
    alert("Could not book appointment now. Please try again.");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
      <input className="rounded-lg border border-slate-300 p-3" placeholder="Patient Name" {...register("patientName", { required: true })} aria-invalid={!!errors.patientName} />
      <input className="rounded-lg border border-slate-300 p-3" placeholder="Phone Number" {...register("phoneNumber", { required: true })} aria-invalid={!!errors.phoneNumber} />
      <input className="rounded-lg border border-slate-300 p-3" type="email" placeholder="Email" {...register("email", { required: true })} aria-invalid={!!errors.email} />
      <div className="grid gap-4 sm:grid-cols-2">
        <input className="rounded-lg border border-slate-300 p-3" type="date" {...register("date", { required: true })} />
        <input className="rounded-lg border border-slate-300 p-3" type="time" {...register("time", { required: true })} />
      </div>
      <input className="rounded-lg border border-slate-300 p-3" placeholder="Department" {...register("department", { required: true })} />
      <input className="rounded-lg border border-slate-300 p-3" placeholder="Doctor" {...register("doctor", { required: true })} />
      <textarea className="min-h-28 rounded-lg border border-slate-300 p-3" placeholder="Reason for Visit" {...register("reason", { required: true })} />
      <button type="submit" disabled={isSubmitting} className="rounded-full bg-[#0077B6] px-5 py-3 font-semibold text-white hover:bg-[#005f90] disabled:opacity-60">
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
      {success ? <p className="text-sm font-medium text-emerald-600">{responseMessage}</p> : null}
    </form>
  );
}
