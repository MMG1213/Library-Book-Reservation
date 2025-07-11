import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div style={{
      height: "100vh",
      background: "linear-gradient(to bottom, #f0f5f9, #dfeef5)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <h1 style={{ color: "#2a4d69", marginBottom: "20px" }}>
        Library Books Reservation
      </h1>

        <div style={{
        background: "#ffffff",
        padding: "30px",
        borderRadius: "16px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "320px",
        gap: "12px"
      }}>
        <h2 style={{ color: "#2a4d69", marginBottom: "10px" }}>Online Registration</h2>
        
        <Link to="/books" style={{ width: "100%" }}>
        <button className="dash-btn"> List of Books</button>
        </Link>
        
        <Link to="/profile" style={{ width: "100%" }}>
        <button className="dash-btn"> Profile</button>
        </Link>
        
        <Link to="/fees" style={{ width: "100%" }}>
        <button className="dash-btn"> My Due Fees</button>
        </Link>
        
        <Link to="/taken" style={{ width: "100%" }}>
        <button className="dash-btn"> Books Taken</button>
        </Link>
      </div>
      
      <style>{`
      .dash-btn {
      width: 100%;
      padding: 10px;
      border: none;
      background-color: #2a4d69;
      color: white;
      font-size: 16px;
      border-radius: 8px;
      cursor: pointer;
      transition: background-color 0.3s ease;
      }
      .dash-btn:hover {
      background-color: #1f3550;
      }
      `}</style>
    </div>
  );
}

export default Dashboard;
