import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useEffect } from "react";
import { useStateValue } from "./Stateprovider";
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './Orders';
import Footer from './Footer';


const promise = loadStripe(
  'pk_test_51Lxd8NHSPTnbVvPji06DcFMbKLCNXTSSiUBXSIagw4Sn2FQW4PEFFe3SbBIzMWl2RX7qC2hvMSwlf5euFByg9M4Z00gGhusMtW' 
);


function App() {
  const [{ }, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      // console.log("THE USER IS >>> ", authUser);
      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []); 
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
          path="/login"
            element={
            <>
            <Login />
            <Footer />
            </>
            } 
            />
          <Route
          path="/" 
          element={
          <>
          <Header />
          <Home />
          <Footer />
          </>
        } 
          />
          <Route
          path="/checkout" 
          element={
          <>
          <Header />
          <Checkout />
          <Footer />
          </>
        }
        />
            <Route 
            path="/Orders"
              element={
                <>
              <Header />
              <Orders />
              <Footer />
              </>
            }
            />
            <Route
          path="/payment"
              element={
                <>
                <Header />
                <Elements stripe={promise}>
                  <Payment />
                  </Elements>
                  <Footer />
            </>
              }
              />
          
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;