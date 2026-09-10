export function Callout({ title, children, variant = "info" }: { title: string; children: React.ReactNode; variant?: "info" | "note" | "warning" }) {
  const variants = {
    info: "border-l-blue bg-blue/30",
    note: "border-l-mint bg-mint/30",
    warning: "border-l-peach bg-peach/30",
  };

  return (
    <div className={`my-4 rounded-r-lg border-l-4 ${variants[variant]} p-4`}>
      <h4 className="mb-1 font-semibold text-black">{title}</h4>
      <div className="text-sm text-gray-700">{children}</div>
    </div>
  );
}
