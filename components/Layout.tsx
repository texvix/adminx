import Link from "next/link";
import LastBuild from "@/components/LastBuild"; // ⬅️ Richtig für den "components"-Ordner mit Alias

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 relative">
      <header className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Texvix Admin</h1>
        <nav className="space-x-4">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/dashboard" className="hover:underline">Dashboard</Link>
        </nav>
      </header>
      <main className="p-6">{children}</main>

      <LastBuild /> {/* Unten rechts eingeblendet */}
    </div>
  );
}
