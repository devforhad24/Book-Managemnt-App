import { Outlet } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar";
import { BookProvider } from "./context/BookContext";

function App() {
  return (
    <>
      <BookProvider>
        <Navbar />
        <main className="min-h-[calc(100vh-100px)] mt-16">
          <Outlet />
        </main>
        <footer>Footer</footer>
      </BookProvider>
    </>
  );
}

export default App;
