import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from './components/Navbar/NavBar'
import Eror404 from "./components/Eror404/Eror404";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./components/Home/Home";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Footer from "./components/Footer/Footer";
import Cart from "./components/Cart/Cart";
import SearchProvider from './context/SearchContext'
import ProductsSearch from "./components/ProductsSearch/ProductsSearch";
import CartProvider from "./context/CartContext";

const App = () => {
    return (
      <CartProvider>
        <SearchProvider>
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/item/:itemId" element={<ItemDetailContainer />} />
              <Route path="/category/:categoryName" element={<ItemListContainer />} />
              <Route path="/category" element={<ItemListContainer />} />
              <Route path="*" element={<Eror404 />} />
              <Route path="/search" element={<ProductsSearch />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </SearchProvider>
      </CartProvider>
    );
}
export default App;