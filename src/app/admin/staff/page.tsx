"use client";
import { useEffect, useState } from "react";

const ROLES = ["ADMIN", "DOCTOR", "NURSE", "RECEPTIONIST", "LAB_TECH", "PHARMACIST", "ACCOUNTANT"] as const;
type Role = (typeof ROLES)[number];

const ROLE_LABELS: Record<Role, string> = {
  ADMIN: "Administrator",
  DOCTOR: "Doctor",
  NURSE: "Nurse",
  RECEPTIONIST: "Receptionist",
  LAB_TECH: "Laboratory Technician",
  PHARMACIST: "Pharmacist",
  ACCOUNTANT: "Accountant",
};

const ROLE_COLORS: Record<Role, string> = {
  ADMIN: "bg-purple-100 text-purple-700",
  DOCTOR: "bg-blue-100 text-blue-700",
  NURSE: "bg-emerald-100 text-emerald-700",
  RECEPTIONIST: "bg-yellow-100 text-yellow-700",
  LAB_TECH: "bg-orange-100 text-orange-700",
  PHARMACIST: "bg-pink-100 text-pink-700",
  ACCOUNTANT: "bg-slate-100 text-slate-700",
};

type StaffMember = {
  id: string;
  fullName: string;
  email: string;
  role: Role;
  createdAt: string;
};

export default function AdminStaffPage() {
  const [staff, setStaff] = useState<StaffMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({ fullName: "", email: "", password: "", role: "DOCTOR" as Role });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  async function loadStaff() {
    setLoading(true);
    const res = await fetch("/api/staff");
    const data = await res.json();
    if (data.ok) setStaff(data.staff);
    setLoading(false);
  }

  useEffect(() => { loadStaff(); }, []);

  async function handleAdd(e: React.FormEvent) {
    e.preventDefault();
    setError(""); setSuccess(""); setSubmitting(true);
    try {
      const res = await fetch("/api/staff", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!data.ok) {
        setError(data.message);
      } else {
        setSuccess(`${form.fullName} added successfully.`);
        setForm({ fullName: "", email: "", password: "", role: "DOCTOR" });
        loadStaff();
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  async function handleDelete(id: string, name: string) {
    if (!confirm(`Remove ${name} from staff?`)) return;
    await fetch(`/api/staff?id=${id}`, { method: "DELETE" });
    loadStaff();
  }

  return (
    <main className="mx-auto w-full max-w-5xl space-y-8 px-4 py-10 lg:px-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Staff Management</h1>
        <p className="mt-1 text-sm text-slate-500">Add, view and remove clinic staff members and their roles.</p>
      </div>

      {/* Add Staff Form */}
      <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
        <h2 className="mb-4 text-lg font-semibold text-slate-800">Add New Staff Member</h2>
        {error && <div className="mb-3 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">{error}</div>}
        {success && <div className="mb-3 rounded-lg bg-emerald-50 px-4 py-3 text-sm text-emerald-700">{success}</div>}
        <form onSubmit={handleAdd} className="grid gap-3 sm:grid-cols-2">
          <input
            className="rounded-lg border border-slate-300 p-3 focus:border-[#0077B6] focus:outline-none"
            placeholder="Full Name"
            value={form.fullName}
            onChange={e => setForm(f => ({ ...f, fullName: e.target.value }))}
            required
          />
          <input
            className="rounded-lg border border-slate-300 p-3 focus:border-[#0077B6] focus:outline-none"
            placeholder="Work Email"
            type="email"
            value={form.email}
            onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
            required
          />
          <input
            className="rounded-lg border border-slate-300 p-3 focus:border-[#0077B6] focus:outline-none"
            placeholder="Password (min 8 characters)"
            type="password"
            value={form.password}
            onChange={e => setForm(f => ({ ...f, password: e.target.value }))}
            minLength={8}
            required
          />
          <select
            className="rounded-lg border border-slate-300 p-3 focus:border-[#0077B6] focus:outline-none"
            value={form.role}
            onChange={e => setForm(f => ({ ...f, role: e.target.value as Role }))}
          >
            {ROLES.map(r => (
              <option key={r} value={r}>{ROLE_LABELS[r]}</option>
            ))}
          </select>
          <div className="sm:col-span-2">
            <button
              type="submit"
              disabled={submitting}
              className="rounded-full bg-[#0077B6] px-6 py-3 font-semibold text-white disabled:opacity-60"
            >
              {submitting ? "Adding…" : "Add Staff Member"}
            </button>
          </div>
        </form>
      </section>

      {/* Staff List */}
      <section className="rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 overflow-hidden">
        <div className="border-b border-slate-100 px-6 py-4">
          <h2 className="text-lg font-semibold text-slate-800">Current Staff ({staff.length})</h2>
        </div>
        {loading ? (
          <p className="px-6 py-8 text-sm text-slate-500">Loading staff…</p>
        ) : staff.length === 0 ? (
          <p className="px-6 py-8 text-sm text-slate-500">No staff members added yet. Use the form above to add your first staff member.</p>
        ) : (
          <div className="divide-y divide-slate-100">
            {staff.map(member => (
              <div key={member.id} className="flex items-center justify-between gap-4 px-6 py-4">
                <div className="min-w-0">
                  <p className="font-medium text-slate-900 truncate">{member.fullName}</p>
                  <p className="text-sm text-slate-500 truncate">{member.email}</p>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <span className={`rounded-full px-3 py-1 text-xs font-semibold ${ROLE_COLORS[member.role]}`}>
                    {ROLE_LABELS[member.role]}
                  </span>
                  <button
                    onClick={() => handleDelete(member.id, member.fullName)}
                    className="rounded-lg px-3 py-1.5 text-xs font-medium text-red-600 hover:bg-red-50"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
