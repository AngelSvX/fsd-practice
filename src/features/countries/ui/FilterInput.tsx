import { useDispatch } from 'react-redux'
import type { AppDispatch, RootState } from '../../../app/providers/store'
import { fetchCountries } from "../model/thunks"

import type { Region } from '../model/types'
import { useSelector } from 'react-redux'

import { setRegion } from "../model/slice"

function FilterInput() {

  const dispatch = useDispatch<AppDispatch>()
  const region = useSelector((state: RootState) => state.countrie.selectedRegion)

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedRegion = e.target.value as Region
    dispatch(setRegion(selectedRegion))
    dispatch(fetchCountries(selectedRegion))
  }

  return (
    <label htmlFor="region" className='flex flex-col'>
      <span className='leading-7 text-sm text-gray-600'>Choose by Region</span>
      <select className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-2 leading-8 transition-colors duration-200 ease-in-out h-10' name="region" id='region' value={region} onChange={handleChange}>
        <option value="Europe">Europa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Oceania">Oceania</option>
        <option value="Africa">Africa</option>
      </select>
    </label>
  )
}

export default FilterInput
