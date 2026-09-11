"use client";

export default function AuthError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="text-foreground mb-2 text-4xl font-bold">Something went wrong</h1>
      <p className="text-muted-foreground mb-6">
        An unexpected error occurred. Please try again.
      </p>
      <button
        onClick={reset}
        className="bg-primary text-primary-foreground rounded-lg px-6 py-3 font-medium transition-colors hover:opacity-90"
      >
        Try Again
      </button>
    </div>
  );
}
