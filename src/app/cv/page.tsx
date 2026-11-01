import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Download, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Resume / CV",
  description:
    "Curriculum Vitae of Muh. Fayiz Syamsuddin — Full-Stack Developer, Backend & AI Engineer",
};

const CV_FILE_PATH = "/CV - Muh. Fayiz Syamsuddin.pdf";

export default function CVPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Top Action Header */}
      <header className="h-14 border-b border-border/70 bg-card/80 backdrop-blur-md px-4 sm:px-6 flex items-center justify-between sticky top-0 z-20">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Portfolio</span>
          </Link>
          <span className="text-border hidden sm:inline">|</span>
          <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono text-foreground">
            <FileText className="h-3.5 w-3.5 text-primary" />
            CV - Muh. Fayiz Syamsuddin.pdf
          </span>
        </div>

        <a
          href={CV_FILE_PATH}
          download="CV - Muh. Fayiz Syamsuddin.pdf"
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          <Download className="h-3.5 w-3.5" />
          <span>Download PDF</span>
        </a>
      </header>

      {/* PDF Viewer */}
      <div className="flex-1 w-full bg-zinc-900">
        <iframe
          src={CV_FILE_PATH}
          className="w-full h-[calc(100vh-3.5rem)] border-none"
          title="CV - Muh. Fayiz Syamsuddin"
        />
      </div>
    </div>
  );
}