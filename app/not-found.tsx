import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[var(--background)] flex items-center justify-center">
      <div className="container-main max-w-xl text-center py-32">
        <p className="text-6xl font-black text-blue-400 mb-4">404</p>
        <h1 className="text-3xl font-bold text-white mb-4">Page Not Found</h1>
        <p className="text-gray-300 text-lg mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="btn-primary py-3 px-6">Go Home</Link>
          <Link href="/find-botox-near-me" className="py-3 px-6 rounded-full border border-white/20 text-white font-semibold hover:bg-white/5 transition-all">
            Find Botox Near Me
          </Link>
        </div>
      </div>
    </main>
  );
}
