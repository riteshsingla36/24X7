import Homepage from "./pages/Homepage";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProductDetails from "./pages/ProductDetails";
import ProductsList from "./pages/ProductsList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./user/Profile";
import CartDetails from "./user/CartDetails";
import Orders from "./user/Orders";
import OrderDetails from "./user/OrderDetails";
import ProtectedRoutes from "./components/ProtectedRoutes";
import ManageUsers from "./admin/ManageUsers";
import ManageProducts from "./admin/ManageProducts";
import ManageOrders from "./admin/ManageOrders";
import AdminOrderDetails from "./admin/AdminOrderDetails";
import Analytics from "./admin/Analytics";
import Chats from "./admin/Chats";
import CreateProduct from "./admin/CreateProduct";
import EditProduct from "./admin/EditProduct";
import EditUser from "./admin/EditUser";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RoutesWithUserChatComponent from "./components/RoutesWithUserChatComponent"
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route element={<RoutesWithUserChatComponent />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/products-list" element={<ProductsList />} />
          <Route path="/product-details" element={<ProductDetails />} />
          <Route path="*" element="Page not found 404" />

          <Route element={<ProtectedRoutes admin={false} />}>
            <Route path="/user/profile" element={<Profile />} />
            <Route path="/user/cart-details" element={<CartDetails />} />
            <Route path="/user/orders" element={<Orders />} />
            <Route path="/user/order-details" element={<OrderDetails />} />
          </Route>

        </Route>

        <Route element={<ProtectedRoutes admin={true} />}>
          <Route path="/admin/users" element={<ManageUsers />} />
          <Route path="/admin/products" element={<ManageProducts />} />
          <Route path="/admin/orders" element={<ManageOrders />} />
          <Route path="/admin/order-details" element={<AdminOrderDetails />} />
          <Route path="/admin/analytics" element={<Analytics />} />
          <Route path="/admin/chats" element={<Chats />} />
          <Route path="/admin/create-product" element={<CreateProduct />} />
          <Route path="/admin/edit-product" element={<EditProduct />} />
          <Route path="/admin/edit-user" element={<EditUser />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
