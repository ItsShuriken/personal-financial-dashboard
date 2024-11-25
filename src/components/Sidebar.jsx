import { Link } from 'react-router-dom';

const Sidebar = () => (
  <aside className="bg-gray-900 text-white w-64 p-4">
    <ul className="space-y-4">
      <li>
        <Link to="/" className="block text-sm hover:bg-gray-700 p-2 rounded">
          Dashboard
        </Link>
      </li>
      <li>
        <Link to="/transactions" className="block text-sm hover:bg-gray-700 p-2 rounded">
          Transactions
        </Link>
      </li>
      <li>
        <Link to="/budget-setup" className="block text-sm hover:bg-gray-700 p-2 rounded">
          Budget Setup
        </Link>
      </li>
    </ul>
  </aside>
);

export default Sidebar;