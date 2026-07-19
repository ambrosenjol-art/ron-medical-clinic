import Link from "next/link";

type Doctor = {
  name: string;
  qualification: string;
  specialty: string;
  experience: string;
  bio: string;
};

export default function DoctorCard({ doctor }: { doctor: Doctor }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="h-44 rounded-xl bg-gradient-to-br from-slate-200 to-slate-100" aria-label={`${doctor.name} profile photo placeholder`} />
      <h3 className="mt-4 text-xl font-semibold text-slate-900">{doctor.name}</h3>
      <p className="text-sm font-medium text-[#0077B6]">{doctor.qualification}</p>
      <p className="mt-2 text-sm text-slate-600">{doctor.specialty} • {doctor.experience}</p>
      <p className="mt-3 text-sm text-slate-600">{doctor.bio}</p>
      <Link href="/appointments" className="mt-4 inline-block rounded-full border border-[#0077B6] px-4 py-2 text-sm font-semibold text-[#0077B6] hover:bg-[#0077B6] hover:text-white">
        Book Appointment
      </Link>
    </article>
  );
}
