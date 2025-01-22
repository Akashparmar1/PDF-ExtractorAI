import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState({
    name: "",
    phone: "",
    address: "",
    role: "",
  });
  const [loading, setLoading] = useState(false);

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setLoading(true);

    const formData = new FormData();
    formData.append("pdf", file);

    try {
      // This is where the POST request is made
      const response = await axios.post("https://pdf-extractorai-1.onrender.com/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      
      // Assuming the response contains the extracted data
      setData(response.data.data);
    } catch (error) {
      alert("Failed to process the PDF. Please try again.");
    } finally {
      setLoading(false);
      // console.log(response.data);
    }
  };

  return (
    <div className="app">
      <div className="container">
        <h1>PDF ExtractorAI</h1>
        <label className="upload-btn">
          Upload PDF
          <input type="file" onChange={handleUpload} />
        </label>
        {loading && <p>Processing your file...</p>}
        <form className="form">
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              value={data.name}
              placeholder="Name.....ext"
              style={{ backgroundColor: "#F5EFFF" }}
              readOnly
            />
          </div>
          <div className="form-group">
            <label>Phone Number:</label>
            <input
              type="text"
              value={data.phone}
              placeholder="Number......ext"
              style={{ backgroundColor: "#E5D9F2" }}
              readOnly
            />
          </div>
          <div className="form-group.....ext">
            <label>Address:</label>
            <textarea
              value={data.address}
              placeholder="Address.....ext"
              style={{ backgroundColor: "#CDC1FF" }}
              readOnly
            />
          </div>
          <div className="form-group">
            <label>Role:</label>
            <input
              type="text"
              value={data.role}
              placeholder="Role.......ext"
              style={{ backgroundColor: "#f8f8f1" }}
              readOnly
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
