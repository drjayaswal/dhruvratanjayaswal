import Link from "next/link";

export default function Footer() {
  return (
    <footer className="px-10 py-4 bg-[#0B2D72]">
      <div className="flex items-center justify-between gap-8">
        <div className="sm:flex hidden text-sm text-white/50">
          <Link href="/DhruvRatanJayaswal_CV.pdf">Resume</Link>
        </div>
        <div className="flex flex-row gap-6">
          <Link
            href="mailto:mrdhruv.professional@gmail.com"
            className="text-sm text-white/60 hover:text-white transition-colors"
          >
            Gmail
          </Link>
          <Link
            href="https://github.com/drjayaswal"
            className="text-sm text-white/60 hover:text-white transition-colors"
          >
            GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/drjayaswal"
            className="text-sm text-white/60 hover:text-white transition-colors"
          >
            LinkedIn
          </Link>
          <Link
            href="/"
            className="text-sm text-white/60 hover:text-white transition-colors"
          >
            Home
          </Link>
          <Link
            href="/connect"
            className="text-sm text-white/60 hover:text-white transition-colors"
          >
            Connect
          </Link>
          <Link
            href="/projects"
            className="text-sm text-white/60 hover:text-white transition-colors"
          >
            Projects
          </Link>
        </div>
      </div>
    </footer>
  );
}
