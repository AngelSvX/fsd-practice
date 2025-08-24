import { useSelector } from "react-redux"
import type { AppDispatch, RootState } from "../../../app/providers/store"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router"
import { useEffect } from "react"
import { fetchCountries, fetchCountrie } from "../model/thunks"
import FilterInput from "./FilterInput"
import LoaderMessage from "../../../shared/ui/Loader/LoaderMessage"
import ErrorMessage from "../../../shared/ui/ErrorMessage/ErrorMessage"
import SearchInput from "./SearchInput"

function Countries() {

  const navigate = useNavigate()
  const { error, loading, countrieList, isFilterCountries, filteredCountries } = useSelector((state: RootState) => state.countrie)

  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(fetchCountries("Europe"))
  }, [])

  if (loading) { return <LoaderMessage message="Cargando datos..." /> }

  if (error) { return <ErrorMessage message={error} /> }

  return (
    <div className="flex flex-col ">
      <div className="pl-4 w-full grid grid-cols-6 space-x-4">
        <FilterInput />
        <SearchInput />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
        {
          isFilterCountries ? (
            filteredCountries!.map((c) => (
              <div
                key={c.name.common}
                className="px-4 py-2 bg-black/10 rounded-xl shadow hover:shadow-lg transition flex flex-col items-center"
                onClick={() => {
                  dispatch(fetchCountrie(c.name.common))
                  navigate(`/countrie/${c.name.common}`)
                }}
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
            ))

          )
            :
            (
              countrieList.map((c) => (
                <div
                  key={c.name.common}
                  className="px-4 py-2 bg-black/10 rounded-xl shadow hover:shadow-lg transition flex flex-col items-center"
                  onClick={() => {
                    dispatch(fetchCountrie(c.name.common))
                    navigate(`/countrie/${c.name.common}`)
                  }}
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
              ))
            )
        }
      </div>
    </div>
  )
}

export default Countries
