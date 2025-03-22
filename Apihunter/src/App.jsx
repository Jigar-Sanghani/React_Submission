import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [apiUrl, setApiUrl] = useState("");
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleApiTest = async () => {
    if (!apiUrl) return toast.error("Please enter an API URL!");

    setLoading(true);
    try {
      const res = await axios.get(apiUrl);
      setResponse(res.data);
      toast.success("API Fetched Successfully!");
    } catch (error) {
      toast.error("Error fetching API");
    }
    setLoading(false);
  };

  return (
    <div className="container">
      <h2>🔥 API Hunter</h2>
      <ToastContainer />

      <div className="api-test">
        <input
          type="text"
          placeholder="Enter API URL (e.g. https://jsonplaceholder.typicode.com/posts)"
          onChange={(e) => setApiUrl(e.target.value)}
        />
        <button onClick={handleApiTest} disabled={loading}>
          {loading ? "Loading..." : "Test API"}
        </button>
      </div>

      <div className="response">
        {response && <pre>{JSON.stringify(response, null, 2)}</pre>}
      </div>
    </div>
  );
};

export default App;
