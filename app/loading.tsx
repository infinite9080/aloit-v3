export default function Loading() {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        background: "linear-gradient(135deg, #0f172a 0%, #1E013A 50%, #00224A 100%)",
      }}
    >
      <div className="flex flex-col items-center gap-4">
        {/* Spinner */}
        <div className="relative w-16 h-16">
          <div
            className="absolute inset-0 rounded-full border-4 border-white/10"
          />
          <div
            className="absolute inset-0 rounded-full border-4 border-transparent border-t-neoncyan animate-spin"
          />
          <div
            className="absolute inset-2 rounded-full border-4 border-transparent border-t-darkpurple animate-spin"
            style={{ animationDirection: "reverse", animationDuration: "0.8s" }}
          />
        </div>
        <p className="text-white/70 text-sm font-medium">Loading...</p>
      </div>
    </div>
  );
}
