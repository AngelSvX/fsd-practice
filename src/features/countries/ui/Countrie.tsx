import { useSelector } from "react-redux"
import type { RootState } from "../../../app/providers/store"

function Countrie() {
  const { selectedCountrie } = useSelector((state: RootState) => state.countrie);

  if (!selectedCountrie) {
    return <p className="text-center text-gray-500">No hay país seleccionado.</p>;
  }

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-2xl p-6 mt-6">

      <div className="flex justify-center">
        <img
          src={selectedCountrie.flags.png}
          alt={selectedCountrie.flags.alt}
          className="w-40 h-28 object-cover rounded-md border"
        />
      </div>

      <h2 className="text-3xl font-bold text-center mt-4">
        {selectedCountrie.name.common}
      </h2>
      <p className="text-center text-gray-600 italic">
        {selectedCountrie.name.official}
      </p>

      <div className="mt-6 grid grid-cols-2 gap-4">
        <div>
          <h3 className="font-semibold text-gray-700">Capital</h3>
          <p>{selectedCountrie.capital?.join(", ") || "N/A"}</p>
        </div>

        <div>
          <h3 className="font-semibold text-gray-700">Región</h3>
          <p>{selectedCountrie.region}</p>
        </div>

        <div>
          <h3 className="font-semibold text-gray-700">Subregión</h3>
          <p>{selectedCountrie.subregion}</p>
        </div>

        <div>
          <h3 className="font-semibold text-gray-700">Independiente</h3>
          <p>{selectedCountrie.independent ? "Sí" : "No"}</p>
        </div>

        <div>
          <h3 className="font-semibold text-gray-700">Dato de Bandera</h3>
          <p>{selectedCountrie.flags.alt}</p>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="font-semibold text-gray-700">Idiomas</h3>
        <p className="text-sm text-gray-600">
          {Object.values(selectedCountrie.languages || {}).join(", ") || "N/A"}
        </p>
      </div>

      <div className="mt-6">
        <h3 className="font-semibold text-gray-700">Moneda</h3>
        <ul className="list-disc list-inside text-sm text-gray-600">
          {selectedCountrie.currencies &&
            Object.entries(selectedCountrie.currencies).map(([code, currency]) => (
              <li key={code}>
                {currency.name} ({currency.symbol})
              </li>
            ))}
        </ul>
      </div>

      <div className="mt-6">
        <h3 className="font-semibold text-gray-700">Fronteras</h3>
        {selectedCountrie.borders?.length > 0 ? (
          <div className="flex flex-wrap gap-2 mt-2">
            {selectedCountrie.borders.map((border) => (
              <span
                key={border}
                className="px-3 py-1 text-sm bg-gray-200 rounded-full"
              >
                {border}
              </span>
            ))}
          </div>
        ) : (
          <p className="text-sm text-gray-500">No tiene fronteras</p>
        )}
      </div>
    </div>
  );
}

export default Countrie
