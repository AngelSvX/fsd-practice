import { Link, useLocation } from "react-router-dom";
import { menuItems } from "../model/menuItems";

export const Sidebar = () => {
  const { pathname } = useLocation();

  console.log(pathname)

  return (
    <aside className="w-64 h-screen bg-gray-900 text-white p-4 fixed">
      <h2 className="text-xl font-bold mb-6">Mi App</h2>
      <nav>
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`block px-4 py-2 rounded-lg ${pathname === item.path ? "bg-gray-700" : "hover:bg-gray-800"
                  }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};