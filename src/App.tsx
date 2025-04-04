import { ThemeProvider } from "./components/theme-provider";
import { UserProvider } from "./contexts/UserContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";

import AboutUs from "./pages/footer/AboutUs";
import FAQ from "./pages/footer/FAQ";
import ContactUs from "./pages/footer/ContactUs";
import Terms_Conditions from "./pages/footer/Terms_Conditions";
import PrivacyPolicy from "./pages/footer/PrivacyPolicy";
import PurchasingGuide from "./pages/footer/PurchasingGuide";
import Dashboard from "./pages/admin/Dashboard";
import Inventory from "./pages/admin/Inventory";
import Orders from "./pages/admin/Orders";
import Sales from "./pages/admin/Sales";
import TestView from "./pages/Test";
import Search from "./pages/Search";
import PackageView from "./pages/Package";
import PackageDetail from "./pages/PackageDetail";
import Checkout from "./pages/Checkout";
import Unauthorized from "./pages/Unauthorized";
import NotFound from "./pages/NotFound";

const App: React.FC = () => (
  <UserProvider>
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="sm:px-[175px] md:px-[100px] lg:px-[175px]  ">
          <Header />

          <Routes>
            <Route index element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/pc-builds" element={<PackageView />} />

            <Route path="/product" element={<ProductDetail />} />
            <Route path="/build" element={<PackageDetail />} />
            <Route path="/checkout" element={<Checkout />} />

            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/terms&conditions" element={<Terms_Conditions />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/purchasing-guide" element={<PurchasingGuide />} />
            <Route path="/unauthorized" element={<Unauthorized />} />
            
            {/* Protected Admin Routes */}
            <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/inventory" element={<Inventory />} />
              <Route path="/sales" element={<Sales />} />
              <Route path="/orders" element={<Orders />} />
            </Route>
            
            <Route path="/test" element={<TestView />} />
            
            {/* 404 Route - This should always be the last route */}
            <Route path="*" element={<NotFound />} />
          </Routes>

          <Footer />
        </div>
        {/* Global styles for brand logos animation speeds */}
        <style>
          {`
            .brand-logos {
              animation-duration: 10s;
            }
            @media (max-width: 768px) {
              .brand-logos {
                animation-duration: 15s;
              }
            }
          `}
        </style>
      </ThemeProvider>
    </BrowserRouter>
  </UserProvider>
);

export default App;
