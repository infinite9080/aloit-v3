import Link from "next/link";

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{
        background: "linear-gradient(135deg, #0f172a 0%, #1E013A 50%, #00224A 100%)",
      }}
    >
      <div className="max-w-md w-full text-center">
        {/* 404 Number */}
        <div className="relative mb-6">
          <h1
            className="text-9xl font-black text-transparent bg-clip-text"
            style={{
              backgroundImage: "linear-gradient(135deg, #60a5fa, #241A24)",
            }}
          >
            404
          </h1>
          {/* Glowing orb effect */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full blur-3xl -z-10"
            style={{ background: "rgba(96, 165, 250, 0.2)" }}
          />
        </div>

        <h2 className="text-2xl font-bold text-white mb-2">Page Not Found</h2>
        <p className="text-white/70 mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-neoncyan text-white font-semibold py-3 px-6 rounded-full hover:bg-blue-600 transition-all duration-300 transform hover:scale-105"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Go Home
          </Link>
          <Link
            href="/our-services"
            className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white font-semibold py-3 px-6 rounded-full hover:bg-white/20 transition-all duration-300"
          >
            Our Services
          </Link>
        </div>
      </div>
    </div>
  );
}
