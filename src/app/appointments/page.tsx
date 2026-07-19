import AppointmentForm from "@/components/AppointmentForm";
import PageHero from "@/components/PageHero";

export default function AppointmentsPage() {
  return (
    <main className="mx-auto w-full max-w-4xl space-y-10 px-4 py-10 lg:px-8">
      <PageHero title="Book Appointment" description="Choose your preferred date, time, department, and doctor. We will confirm shortly." />
      <AppointmentForm />
    </main>
  );
}
