import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CV - Muh. Fayiz Syamsuddin",
  description: "Curriculum Vitae of Muh. Fayiz Syamsuddin - Software Developer",
};

export default function CVPage() {
  return (
    <div className="min-h-screen bg-white">
      <iframe
        src="/CV - Muh. Fayiz Syamsuddin.pdf"
        width="100%"
        height="100%"
        style={{ height: "100vh", border: "none" }}
        title="CV - Muh. Fayiz Syamsuddin"
      />
    </div>
  );
}
