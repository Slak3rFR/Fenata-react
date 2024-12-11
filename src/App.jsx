import { useState } from "react";
import Navbar from "./assets/components/Navbar";
import Cart from "./assets/components/Cart";
import WelcomeSection from "./assets/components/WelcomeSection";

function App() {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount(cartCount + 1); 
  };

  const handleRemoveFromCart = () => {
    setCartCount(cartCount > 0 ? cartCount - 1 : 0); 
  };

  return (
    <div>
      <Navbar cartCount={cartCount} />
      <main className="mt-16">
        <WelcomeSection />
        <Cart onAddToCart={handleAddToCart} onRemoveFromCart={handleRemoveFromCart} />
      </main>
    </div>
  );
}

export default App;