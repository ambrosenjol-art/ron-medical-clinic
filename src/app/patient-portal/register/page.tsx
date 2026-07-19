export default function PatientPortalRegisterPage() {
  return (
    <main className="mx-auto w-full max-w-md px-4 py-16">
      <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
        <h1 className="text-2xl font-bold text-slate-900">Patient Registration</h1>
        <form className="mt-5 grid gap-3">
          <input className="rounded-lg border border-slate-300 p-3" placeholder="Full Name" />
          <input className="rounded-lg border border-slate-300 p-3" type="email" placeholder="Email" />
          <input className="rounded-lg border border-slate-300 p-3" type="password" placeholder="Password" />
          <button className="rounded-full bg-[#2ECC71] px-4 py-3 font-semibold text-slate-900">Create Account</button>
        </form>
      </div>
    </main>
  );
}
