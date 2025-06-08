import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import Link from "next/link";

const dummyScooterData = {
  1: {
    name: "Honda 125",
    status: "frei",
    speed: "95 km/h",
    bookings: 12,
  },
  2: {
    name: "Vespa 150",
    status: "blockiert",
    speed: "85 km/h",
    bookings: 8,
  },
  3: {
    name: "Yamaha X",
    status: "vermietet",
    speed: "100 km/h",
    bookings: 19,
  },
};

const statusColor = {
  frei: "text-green-600",
  blockiert: "text-red-500",
  vermietet: "text-yellow-500",
};

export default function ScooterDetail() {
  const router = useRouter();
  const { id } = router.query;

  const scooter = dummyScooterData[id as keyof typeof dummyScooterData];

  if (!scooter) {
    return (
      <Layout>
        <div className="text-center py-10 text-red-500 text-lg font-semibold">
          Kein Roller mit dieser ID gefunden.
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="mb-6">
        <Link
          href="/scooters"
          className="text-blue-600 hover:underline text-sm"
        >
          ← Zurück zur Übersicht
        </Link>
      </div>
      <h1 className="text-2xl font-bold mb-4">{scooter.name} – Detailansicht</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="text-gray-500">Status</div>
          <div className={`text-lg font-bold ${statusColor[scooter.status as keyof typeof statusColor]}`}>
            {scooter.status}
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="text-gray-500">Max. Geschwindigkeit</div>
          <div className="text-lg font-bold">{scooter.speed}</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="text-gray-500">Anzahl Buchungen</div>
          <div className="text-lg font-bold">{scooter.bookings}</div>
        </div>
      </div>
    </Layout>
  );
}
