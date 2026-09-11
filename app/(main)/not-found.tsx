import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 text-center">
      <h1 className="text-foreground text-4xl font-bold">404</h1>
      <p className="text-muted-foreground mt-2 text-lg">Page not found.</p>
      <Link href="/" className="text-primary mt-4 inline-flex min-h-[44px] items-center underline hover:opacity-80">← Back to Home</Link>
    </div>
  );
}
