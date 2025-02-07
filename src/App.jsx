import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./assets/components/Navbar";
import ItemListContainer from "./assets/components/ItemListContainer";
import { CartContextProvider } from './assets/context/cartContextProvider';
import ItemDetailContainer from "./assets/components/ItemDetailContainer";
import FlexContainer from "./assets/components/FlexContainer";
import CartContainer from "./assets/components/CartContainer";
import FormCheckout from "./assets/components/FormCheckout";
import Footer from "./assets/components/Footer";
import AboutUs from './assets/components/AboutUs';
import Contact from './assets/components/Contact';
import OrderConfirmation from "./assets/components/OrderConfirmation";

function App() {
  return (
    <>
      <CartContextProvider>
        <BrowserRouter>
          <FlexContainer>
            <Navbar />
            <main className="mt-16">
              <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/category/:categoryId" element={<ItemListContainer />} />
                <Route path="/item/:id" element={<ItemDetailContainer />} />
                <Route path="/cart" element={<CartContainer />} />
                <Route path="/category/nosotros" element={<AboutUs />} />
                <Route path="/category/contacto" element={<Contact />} />
                <Route path="/order-confirmation/:orderId" element={<OrderConfirmation />} />
                <Route path="/FormCheckout" element={<FormCheckout/>}/>
              </Routes>
            </main>
          </FlexContainer>
        </BrowserRouter>
      </CartContextProvider>
      <Footer/>
    </>
  );
}

export default App;
