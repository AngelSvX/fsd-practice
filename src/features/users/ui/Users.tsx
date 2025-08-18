import { useSelector } from "react-redux"
import type { AppDispatch, RootState } from "../../../app/providers/store"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { fetchUsers, fetchUser } from "../model/thunks"
import { Outlet, useNavigate } from "react-router"

function Users() {

  const { error, loading, userList } = useSelector((state: RootState) => state.user)
  const dispatch = useDispatch<AppDispatch>()

  const navigate = useNavigate()

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  if (loading) { return <p className="text-blue-950 text-2xl font-bold">Cargando...</p> }

  if (error) { return <p className="text-red-500 text-2xl font-bold">{error}</p> }

  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {userList.map((u) => {
        return (
          <li key={u.id} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md hover:bg-black/5 transition-shadow duration-200 cursor-pointer space-y-4">
            <div className="space-y-3">
              <p className="text-lg font-semibold text-gray-900">
                <span className="text-gray-600 font-normal">Nombre:</span> {u.name}
              </p>
              <p className="text-sm text-gray-700">
                <span className="font-medium text-gray-600">Usuario:</span>
                <span className="ml-1 text-blue-600">@{u.username}</span>
              </p>
            </div>
            <div>
              <button className="bg-blue-800 px-4 py-1 text-white rounded-lg" onClick={() => {
                dispatch(fetchUser(u.id))
                navigate(`/users/${u.id}`)
              }}>
                VER MAS :D
              </button>
            </div>
          </li>
        )
      })}
      <Outlet/>
    </ul>
  )
}

export default Users
