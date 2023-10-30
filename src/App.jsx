import Navbar from './component/navbar';
import Todo from './pages/todo';
import Home from './pages/home';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />

      <main
        className="h-screen"
        style={{
          backgroundSize: 'cover',
          backgroundImage: 'url("public/pexels.jpg")',
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<Todo />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
