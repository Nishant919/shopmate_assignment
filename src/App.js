import './App.css';
import { ProductRoutes } from "./AllRoutes/ProductRoutes";
import { Header, Footer } from './Components';

function App() {
  return (
    <>
      <Header />
      <ProductRoutes />
      <Footer />
    </>
  );
}

export default App;
