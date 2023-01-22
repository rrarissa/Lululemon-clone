import './App.css';
import Header from "./components/Header";
import LeftFilter from "./components/LeftFilter"
import Product from "./components/Product";
import Footer from "./components/Footer";

function App() {
  return (
      <div>
     <Header />
      <LeftFilter />
          <Product />
          <Footer />
      </div>
  );
}

export default App;
