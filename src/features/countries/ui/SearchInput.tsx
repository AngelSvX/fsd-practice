import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import type { AppDispatch, RootState } from "../../../app/providers/store"
import { useEffect, useState } from "react"
import { setCountries } from '../model/slice'

function SearchInput() {

  const dispatch = useDispatch<AppDispatch>()
  const { countrieList } = useSelector((state: RootState) => state.countrie)

  const [value, setValue] = useState<string>("")

  const handleChange = () => {

    const countrieListFiltered = countrieList.filter((c) =>
      c.name.common.includes(value)
    )

    dispatch(setCountries(countrieListFiltered))
  }

  useEffect(() => {
    handleChange()
  }, [value]);


  return (
    <label htmlFor="full-name">
      <span className="leading-7 text-sm text-gray-600">Countrie Name</span>
      <input value={value} onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setValue(e.target.value) }} type="text" id="full-name" name="full-name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out h-10" />
    </label>
  )
}

export default SearchInput
