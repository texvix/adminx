export default function LastBuild() {
  const date = new Date();
  const formatted = date.toLocaleString("de-DE", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="fixed bottom-2 right-2 bg-black/80 text-white text-xs px-3 py-1 rounded-full shadow-lg z-50">
      Letzter Build: {formatted}
    </div>
  );
}
