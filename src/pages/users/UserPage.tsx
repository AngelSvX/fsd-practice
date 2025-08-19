import { useParams } from "react-router"
import User from "../../features/users/ui/User"
import { useEffect } from "react";
import { fetchUser } from "../../features/users/model/thunks";
import { useDispatch } from "react-redux";
import type { AppDispatch, RootState } from "../../app/providers/store";
import { useSelector } from "react-redux";
import LoaderMessage from "../../shared/ui/Loader/LoaderMessage";
import ErrorMessage from "../../shared/ui/ErrorMessage/ErrorMessage";

function UserPage() {

  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    if (id) {
      dispatch(fetchUser(Number(id)));
    }
  }, [dispatch, id]);

  if (loading) return <LoaderMessage message="Cargando datos..." />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <User />
  )
}

export default UserPage
