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
    <select name="region" value={region} onChange={handleChange}>
      <option value="Europe">Europa</option>
      <option value="America">America</option>
      <option value="Asia">Asia</option>
      <option value="Oceania">Oceania</option>
      <option value="Africa">Africa</option>
    </select>
  )
}

export default FilterInput
