import React, {useState} from 'react'
import Button from '@mui/material/Button';
import { MdDashboard, MdMessage,MdNotificationsActive   } from "react-icons/md";
import { FaAngleRight, FaCartArrowDown, FaProductHunt, FaUser } from "react-icons/fa";
import { FiSettings, FiUser } from "react-icons/fi";

import Products from "../components/products/Products.jsx"
function Home() {
  const [selectedCategory, setSelectedCategory] = useState("dashboard");
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);

  return (
    <section className="container-fluid">
    <div className='row'>
    <div className='col-2 sideBar min-vh-100 '>
        <Button className={`dashboardBtn ${selectedCategory === "dashboard" ? "active" : ""}`} onClick={() => setSelectedCategory("dashboard")} > <MdDashboard />  dashboard </Button>

        <Button 
        className={`dashboardBtn ${selectedCategory === "products" ? "active" : ""}`} 
        onClick={() => {
          setSelectedCategory("products");
          setIsProductsDropdownOpen(!isProductsDropdownOpen);
        }} > 
        <FaProductHunt /> 
        Products  
        <span className='flex items-center ml-auto '><FaAngleRight  /></span>
        </Button>
        {isProductsDropdownOpen && (
    <div className="dropdownMenu">
      <Button onClick={() => setSelectedCategory("productDetails")}>Product Details</Button>
      <Button onClick={() => setSelectedCategory("categories")}>Categories</Button>
      <Button onClick={() => setSelectedCategory("createProduct")}>Create Product</Button>
    </div>
  )}

        <Button className={`dashboardBtn ${selectedCategory === "orders" ? "active" : ""}`} onClick={() => setSelectedCategory("orders")} >   <FaCartArrowDown /> Orders    <span className='flex items-center ml-auto '><FaAngleRight  /></span></Button>
        <Button className={`dashboardBtn ${selectedCategory === "messages" ? "active" : ""}`} onClick={() => setSelectedCategory("messages")} > <MdMessage />  Messages <span className='flex items-center ml-auto '><FaAngleRight  /></span></Button>
        <Button className={`dashboardBtn ${selectedCategory === "notifications" ? "active" : ""}`} onClick={() => setSelectedCategory("notifications")} > <MdNotificationsActive  />  Notifications <span className='flex items-center ml-auto '><FaAngleRight  /></span></Button>
        <Button className={`dashboardBtn ${selectedCategory === "settings" ? "active" : ""}`} onClick={() => setSelectedCategory("settings")} > <FiSettings />  Settings <span className='flex items-center ml-auto '><FaAngleRight  /></span></Button>
        <Button className={`dashboardBtn ${selectedCategory === "login" ? "active" : ""}`} onClick={() => setSelectedCategory("login")} > <FaUser />  Login </Button>
        <Button className={`dashboardBtn ${selectedCategory === "signup" ? "active" : ""}`} onClick={() => setSelectedCategory("signup")} > <FaUser />  Signup </Button>

      </div>

    <div className='col-10'>
        {selectedCategory === "products" && <Products />}
        {selectedCategory === "settings" && <div>settings Page</div>}
        {selectedCategory === "orders" && <div>Orders Page</div>}
        {selectedCategory === "messages" && <div>messages Page</div>}
        {selectedCategory === "notifications" && <div>notifications Page</div>}
        
    </div>
    
    </div>
    </section>
  )
}

export default Home