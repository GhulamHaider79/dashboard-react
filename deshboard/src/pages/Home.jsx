import React, { useState } from 'react'
import Button from '@mui/material/Button';
import { GoDotFill } from "react-icons/go";
import { MdDashboard, MdMessage, MdNotificationsActive } from "react-icons/md";
import { FaAngleRight, FaCartArrowDown, FaProductHunt, FaUser } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";

import Products from "../components/products/Products.jsx"
import Dashboard from '../components/dashboard/Dashboard.jsx';
function Home() {
  const [selectedCategory, setSelectedCategory] = useState("dashboard");
  const [selectedSubCategory, setSelectedSubCategory] = useState("productDetails");
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);

  return (
    <section className="container-fluid">
      <div className='row'>
        {/* left side sidebar */}
        <div className='col-2 sideBar min-vh-100 '>
          <Button
            className={`dashboardBtn ${selectedCategory === "dashboard" ? "active" : ""}`}
            onClick={() => setSelectedCategory("dashboard")} >
            <MdDashboard />
            dashboard
          </Button>

          <Button
            className={`dashboardBtn ${selectedCategory === "products" ? "active" : ""}`}
            onClick={() => {
              setSelectedCategory("products");
              setSelectedSubCategory("productDetails")
              setIsProductsDropdownOpen(!isProductsDropdownOpen);
            }} >
            <FaProductHunt />
            Products
            <span className='flex items-center ml-auto '><FaAngleRight /></span>
          </Button>
          {isProductsDropdownOpen && (
            <div className="dropdownMenu">
              <Button
                className={`dashboardBtn productDropdownBtn ${selectedSubCategory === "productDetails" ? "active" : ""}`}
                onClick={() => setSelectedSubCategory("productDetails")}><GoDotFill />Product Details</Button>
              <Button
                className={`dashboardBtn productDropdownBtn ${selectedSubCategory === "categories" ? "active" : ""}`}
                onClick={() => setSelectedSubCategory("categories")}><GoDotFill />Categories</Button>
              <Button
                className={`dashboardBtn productDropdownBtn ${selectedSubCategory === "createProduct" ? "active" : ""}`}
                onClick={() => setSelectedSubCategory("createProduct")}><GoDotFill />Create Product</Button>
            </div>
          )}

          <Button className={`dashboardBtn ${selectedCategory === "orders" ? "active" : ""}`} onClick={() => setSelectedCategory("orders")} >   <FaCartArrowDown /> Orders    <span className='flex items-center ml-auto '><FaAngleRight /></span></Button>
          <Button className={`dashboardBtn ${selectedCategory === "messages" ? "active" : ""}`} onClick={() => setSelectedCategory("messages")} > <MdMessage />  Messages <span className='flex items-center ml-auto '><FaAngleRight /></span></Button>
          <Button className={`dashboardBtn ${selectedCategory === "notifications" ? "active" : ""}`} onClick={() => setSelectedCategory("notifications")} > <MdNotificationsActive />  Notifications <span className='flex items-center ml-auto '><FaAngleRight /></span></Button>
          <Button className={`dashboardBtn ${selectedCategory === "settings" ? "active" : ""}`} onClick={() => setSelectedCategory("settings")} > <IoMdSettings />  Settings <span className='flex items-center ml-auto '><FaAngleRight /></span></Button>
          <Button className={`dashboardBtn ${selectedCategory === "login" ? "active" : ""}`} onClick={() => setSelectedCategory("login")} > <FaUser />  Login </Button>
          <Button className={`dashboardBtn ${selectedCategory === "signup" ? "active" : ""}`} onClick={() => setSelectedCategory("signup")} > <FaUser />  Signup </Button>

        </div>
        {/* Right side content */}
        <div className='col-10'>
        {selectedCategory === "dashboard" && <Dashboard />}
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