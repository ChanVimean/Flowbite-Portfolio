import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";

const App = () => {
  return (
    <div>
      <nav>
        <NavBar />
      </nav>

      <main className="px-4 md:px-16 lg:px-32">
        <Home />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
