import ProductDetails from "./pages/ProductDetails/ProductDetails";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<ProductDetails/>} />
      <Route exact path="/NotFound" element={<PageNotFound/>} />
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
