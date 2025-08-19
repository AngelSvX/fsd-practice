import { useParams } from "react-router"
import Countrie from "../../features/countries/ui/Countrie"
import { useDispatch } from "react-redux"
import type { AppDispatch, RootState } from "../../app/providers/store"
import { useSelector } from "react-redux"
import { useEffect } from "react"
import { fetchCountrie } from "../../features/countries/model/thunks"
import ErrorMessage from "../../shared/ui/ErrorMessage/ErrorMessage"
import LoaderMessage from "../../shared/ui/Loader/LoaderMessage"

function CountriePage() {

  const { id } = useParams<{id: string}>()
  const dispatch = useDispatch<AppDispatch>()
  const { loading, error } = useSelector((state : RootState) => state.countrie)

  useEffect(() => {
    if(id){
      dispatch(fetchCountrie(id))
    }
  }, [dispatch, id])

  if(loading) return <LoaderMessage message="Cargando datos..." />
  if(error) return <ErrorMessage message={error} />

  return (
    <Countrie/>
  )
}

export default CountriePage
