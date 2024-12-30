import React, { useEffect, useState } from "react";
import "./App.css";
import TestI from "./Components/TestI";
import PDF from "./Components/TestI";

function App() {
  const [responseText, setResponseText] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [input, setInput] = useState("");

  const API = "AIzaSyCuKd0jQ5TCMQ-xegrjB1vHN1yd4JjHAmQ";
  const requestBody = {
    contents: [
      {
        parts: [
          {
            text: input,
          },
        ],
      },
    ],
  };

  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${API}`;

  const fetchData = () => {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => response.json())
      .then((data) => {
        // Check if response contains the necessary structure
        if (
          data.candidates &&
          data.candidates[0] &&
          data.candidates[0].content.parts[0]
        ) {
          const extractedText = data.candidates[0].content.parts[0].text;
          setResponseText(extractedText); // Store the extracted text in state
        } else {
          setError("Unexpected response structure");
        }
        setLoading(false); // Set loading to false when data is processed
      })
      .catch((error) => {
        console.error("Error:", error);
        setError("Failed to fetch data");
        setLoading(false); // Set loading to false when an error occurs
      });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    fetchData();
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          rows={10}
          cols={50}
          placeholder="Type your prompt here..."
        />
        <br />
        <button type="submit">Get Response</button>
      </form>
      <h1>API Response:</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : (
        <div>
          <p>{responseText}</p> {/* Display the extracted response text */}
        </div>
      )}
      <PDF />
    </div>
  );
}

export default App;
