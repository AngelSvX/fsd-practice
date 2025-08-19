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
    <label htmlFor="region" className='flex flex-col space-y-2'>
      <span className='text-sm font-medium text-gray-700'>Choose by Region</span>
      <select className='w-1/5 h-10 rounded border-1 border-gray-300 shadow-sm sm:text-sm pl-3' name="region" id='region' value={region} onChange={handleChange}>
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
