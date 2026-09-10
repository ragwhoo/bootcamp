"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground min-h-screen">
        <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
          <h1 className="mb-2 text-4xl font-bold">Something went wrong</h1>
          <p className="mb-6 text-gray-400">
            An unexpected error occurred. Please try again.
          </p>
          <button
            onClick={reset}
            className="rounded-lg bg-white px-6 py-3 font-medium text-gray-900 transition-colors hover:bg-gray-100"
          >
            Try Again
          </button>
        </div>
      </body>
    </html>
  );
}
