import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 text-center">
      <h1 className="text-4xl font-bold text-white">404</h1>
      <p className="mt-2 text-lg text-gray-400">Page not found.</p>
      <Link href="/" className="mt-4 inline-flex min-h-[44px] items-center text-blue-400 underline hover:text-blue-300">← Back to Home</Link>
    </div>
  );
}
