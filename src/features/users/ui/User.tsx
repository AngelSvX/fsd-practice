import { useSelector } from 'react-redux'
import type { RootState } from '../../../app/providers/store'

function User() {

  const { selectedUser } = useSelector((state: RootState) => state.user);

  return (
    <div>
      <p className="text-lg font-semibold text-gray-900">
        <span className="text-gray-600 font-normal">Nombre:</span> {selectedUser!.name}
      </p>
      <p className="text-sm text-gray-700">
        <span className="font-medium text-gray-600">Usuario:</span>
        <span className="ml-1 text-blue-600">@{selectedUser!.username}</span>
      </p>
      <p className="text-sm text-gray-700">
        <span className="font-medium text-gray-600">Email:</span>
        <span className="ml-1 text-blue-500 hover:text-blue-700">{selectedUser!.email}</span>
      </p>
      <p className="text-sm text-gray-700">
        <span className="font-medium text-gray-600">Ciudad:</span>
        <span className="ml-1">{selectedUser!.address.city}</span>
      </p>
      <p className="text-sm text-gray-700">
        <span className="font-medium text-gray-600">Teléfono:</span>
        <span className="ml-1 font-mono">{selectedUser!.phone}</span>
      </p>
    </div>
  )
}

export default User
