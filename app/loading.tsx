export default function Loading() {
  return (
    <div className="p-6 grid grid-cols-3 gap-4">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="h-32 bg-zinc-800 rounded-xl animate-pulse"
        />
      ))}
    </div>
  );
}