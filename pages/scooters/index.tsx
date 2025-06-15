import Link from "next/link";

const scooters = [
  { id: 1, name: "Honda 125", status: "frei" },
  { id: 2, name: "Vespa 150", status: "blockiert" },
  { id: 3, name: "Yamaha X", status: "vermietet" },
];

const statusColor = {
  frei: "text-green-600",
  blockiert: "text-red-500",
  vermietet: "text-yellow-500",
};

export default function ScooterOverview() {
  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Rollerübersicht</h1>
      <table className="w-full border text-sm bg-white shadow-sm rounded-md overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="text-left px-4 py-2">ID</th>
            <th className="text-left px-4 py-2">Name</th>
            <th className="text-left px-4 py-2">Status</th>
            <th className="text-left px-4 py-2">Aktion</th>
          </tr>
        </thead>
        <tbody>
          {scooters.map((scooter) => (
            <tr key={scooter.id} className="border-t">
              <td className="px-4 py-2">{scooter.id}</td>
              <td className="px-4 py-2">{scooter.name}</td>
              <td className={`px-4 py-2 font-semibold ${statusColor[scooter.status as keyof typeof statusColor]}`}>{scooter.status}</td>
              <td className="px-4 py-2">
                <Link
                  href={`/scooters/${scooter.id}`}
                  className="text-blue-600 hover:underline text-sm"
                >
                  Details öffnen
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
