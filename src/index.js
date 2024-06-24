import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// questo codice ci collega al div con id "root" nell'index.html, crea il riferimento nel DOM dell'elemento principale della nostra App
const root = ReactDOM.createRoot(document.getElementById("root"));
// <App />  è il nostro componente principale, dove verranno renderizzate tutti i sotto componenti
root.render(<App />);
