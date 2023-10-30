import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <header className="bg-yellow-600 p-3 flex flex-row justify-between items-center text-white text-lg">
      <h3 className="font-bold">Tugas Todo List</h3>
      <nav>
        <ul className="flex flex-row gap-3 p-2 font-semibold">
          <NavLink to={'/'}>Home</NavLink>
          <NavLink to={'/todo'}>Todo</NavLink>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
