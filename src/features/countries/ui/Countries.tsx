import { useSelector } from "react-redux"
import type { AppDispatch, RootState } from "../../../app/providers/store"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router"
import { useEffect } from "react"
import { fetchCountries } from "../model/thunks"
import FilterInput from "./FilterInput"

function Countries() {

  const { error, loading, selectedCountrie, countrieList } = useSelector((state: RootState) => state.countrie)

  const dispatch = useDispatch<AppDispatch>()

  const navigate = useNavigate()

  useEffect(() => {
    dispatch(fetchCountries("Europe"))
  }, [])

  if (loading) { return <div>Cargando...</div> }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
      <FilterInput/>
      {countrieList.map((c) => (
        <div
          key={c.name.common}
          className="px-4 py-2 bg-black/10 rounded-xl shadow hover:shadow-lg transition flex flex-col items-center"
        >
          <h2 className="font-semibold text-lg mb-2 text-center">
            {c.name.common}
          </h2>
          <img
            className="w-32 h-20 object-contain"
            src={c.flags.png}
            alt={`${c.name.common} flag`}
          />
        </div>
      ))}
    </div>
  )
}

export default Countries
