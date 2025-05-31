import { Outlet } from "react-router";
import Navbar from "./components/Navbar";
import { BookProvider } from "./context/BookContext";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BookProvider>
        <Navbar></Navbar>

        <main className="min-h-[calc(100vh-100px)] mt-16">
          <Outlet></Outlet>
        </main>

        {/* <footer>Footer</footer> */}
        <Footer></Footer>
      </BookProvider>
    </>
  );
}

export default App;
