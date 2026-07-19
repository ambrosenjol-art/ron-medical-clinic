export default function StaffLoginPage() {
  return (
    <main className="mx-auto w-full max-w-md px-4 py-16">
      <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
        <h1 className="text-2xl font-bold text-slate-900">Staff Login</h1>
        <p className="mt-2 text-sm text-slate-600">Roles planned: Administrator, Doctor, Nurse, Receptionist, Laboratory Technician, Pharmacist, Accountant.</p>
        <form className="mt-5 grid gap-3">
          <input className="rounded-lg border border-slate-300 p-3" placeholder="Work Email" />
          <input className="rounded-lg border border-slate-300 p-3" type="password" placeholder="Password" />
          <button className="rounded-full bg-[#0077B6] px-4 py-3 font-semibold text-white">Login</button>
        </form>
      </div>
    </main>
  );
}
