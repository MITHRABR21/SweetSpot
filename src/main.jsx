import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App.jsx";
import Cakes from "./pages/Cakes.jsx";
import IceCreams from "./pages/IceCreams.jsx";
import Sundaes from "./pages/Sundaes.jsx";
import Falooda from "./pages/Falooda.jsx";
import OrderSuccess from "./pages/OrderSuccess.jsx";

import "./index.css";

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<App />} />

        <Route
          path="/cakes"
          element={<Cakes />}
        />

        <Route
          path="/icecreams"
          element={<IceCreams />}
        />

        <Route
          path="/sundaes"
          element={<Sundaes />}
        />

        <Route
          path="/falooda"
          element={<Falooda />}
        />

        <Route
          path="/order-success"
          element={<OrderSuccess />}
        />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);