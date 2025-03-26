import { ThemeProvider } from "./components/theme-provider";
import { UserProvider } from "./contexts/UserContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Product from "./pages/Product";

import AboutUs from "./pages/footer/AboutUs";
import FAQ from "./pages/footer/FAQ";
import ContactUs from "./pages/footer/ContactUs";
import Terms_Conditions from "./pages/footer/Terms_Conditions";
import PrivacyPolicy from "./pages/footer/PrivacyPolicy";
import PurchasingGuide from "./pages/footer/PurchasingGuide";
import Dashboard from "./pages/admin/Dashboard";
import { Inventory } from "./pages/admin/Inventory";
import { Orders } from "./pages/admin/Orders";
import Sales from "./pages/admin/Sales";

const devUserType = "admin";

const App: React.FC = () => (
  <UserProvider initialUserType={devUserType}>
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="px-[175px]">
          <Header />
        
          <Routes>
            <Route index element={<Home />} />
            <Route path="/product" element={<Product />} />

            {/* routes ng footer ni bobby  */}
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact-us" element={<ContactUs />} />

            <Route path="/terms&conditions" element={<Terms_Conditions />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />

            <Route path="/purchasing-guide" element={<PurchasingGuide />} />

            {/* routes for admins hehe */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/orders" element={<Orders />} />
            

          </Routes>

          
            <Footer />
         
          </div>
        
      </ThemeProvider>
    </BrowserRouter>
  </UserProvider>
);

export default App;
