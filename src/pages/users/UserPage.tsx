import { useParams } from "react-router"
import User from "../../features/users/ui/User"
import { useEffect } from "react";
import { fetchUser } from "../../features/users/model/thunks";
import { useDispatch } from "react-redux";
import type { AppDispatch, RootState } from "../../app/providers/store";
import { useSelector } from "react-redux";

function UserPage() {

  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const { loading, selectedUser, error } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    if (id) {
      dispatch(fetchUser(Number(id)));
    }
  }, [id, dispatch]);

  if (loading) return <p className="text-blue-950 text-2xl font-bold">Cargando usuario...</p>;
  if (error) return <p className="text-red-500 text-2xl font-bold">{error}</p>;
  if (!selectedUser) return <p className="text-gray-500">No se encontró usuario</p>;

  return (
    <User />
  )
}

export default UserPage
