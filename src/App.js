// 1. Pehle Libraries (React, Router, etc.)
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserAuthContextProvider } from "./Context/UserAuthContext";
import ProtectedRoute from "./components/ProtectedRoutes";

// 2. Phir CSS
import "./App.css";

// 3. Phir Screens/Pages
import Home from './screens/Home/Home';
import About from './screens/About/About';
import Contact from './screens/Contact/Contact';
import Rooms from './screens/Rooms/Rooms';
import SingleRoom from "./screens/Rooms/SingleRoom";

// 4. Phis Components
import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Booknow from './components/Booking/Booknow';
import MyBookings from './components/Booking/MyBookings';
import MyFooter from './components/Footer/MyFooter';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="App flex flex-col min-h-screen">
      <BrowserRouter>
        <UserAuthContextProvider>
          <Navbar/>
          <ScrollToTop />
          <main className="flex-grow">
            <Routes>
              <Route path="/" index element={<Home/>} />
              <Route path="/rooms" element={<Rooms/>} />
              <Route path="/about" element={<About />} />
              <Route path="/booknow/:roomType" element={<ProtectedRoute><Booknow /></ProtectedRoute>} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/singleRoom/:roomType" element={<SingleRoom />} />
              <Route path="/mybookings" element={<MyBookings/>} />
            </Routes>
          </main>
          <MyFooter />
        </UserAuthContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;