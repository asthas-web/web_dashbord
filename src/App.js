import React from "react";
import Dashboard from "./components/Dashboard/dashboard";
import Header from "./components/Navbar/header";
import Sidebar from "./components/Sidebar/sidebar";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "#f2f2f2" }}>
      <Header />

      <Sidebar />
      <div>
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
