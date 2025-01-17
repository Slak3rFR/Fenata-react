import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./assets/components/Navbar";
import Cart from "./assets/components/Cartwidget";
import ItemListContainer from "./assets/components/ItemListContainer";
import ItemDetailContainer from "./assets/components/ItemDetailContainer";
import NotFound from "./assets/components/NotFound";
import FlexContainer from "./assets/components/FlexContainer";
import Footer from "./assets/components/Footer";

function App() {
  const [cartCount, setCartCount] = useState(0);
  const handleAddToCart = () => {
    setCartCount(cartCount + 1); 
  };
  const handleRemoveFromCart = () => {
    setCartCount(cartCount > 0 ? cartCount - 1 : 0); 
  };

  return (
    <FlexContainer>
    <BrowserRouter>
      <Navbar cartCount={cartCount} />
      <main className="mt-16">
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Cart onAddToCart={handleAddToCart} onRemoveFromCart={handleRemoveFromCart} />
      </main>
      <Footer>
      </Footer>
    </BrowserRouter>
    </FlexContainer>
  );
}

export default App;
