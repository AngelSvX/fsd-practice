import { useSelector } from "react-redux"
import type { AppDispatch, RootState } from "../../../app/providers/store"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router"
import { useEffect } from "react"
import { fetchCountries } from "../model/thunks"

function Countries() {

  const { error, loading, selectedCountrie, countrieList } = useSelector((state: RootState) => state.countrie)

  const dispatch = useDispatch<AppDispatch>()

  const navigate = useNavigate()

  useEffect(() => {
    dispatch(fetchCountries("Asia"))
  }, [dispatch])

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
      {countrieList.map((c) => (
        <div
          key={c.name.common}
          className="p-4 bg-white rounded-xl shadow hover:shadow-lg transition"
        >
          <h2 className="font-semibold text-lg">{c.name.common}</h2>
          <img src={c.flags.png} alt="" />
        </div>
      ))}
    </div>
  )
}

export default Countries
