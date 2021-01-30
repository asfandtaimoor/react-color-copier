import React, { useState } from "react";
import "./App.css";

// Tostify
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();
// Components

function App() {
  const [colorNames] = useState([
    "#fad390",
    "#f8c291",
    "#6a89cc",
    "#82ccdd",
    "#b8e994",
    "#f6b93b",
    "#e55039",
    "#4a69bd",
    "#60a3bc",
    "#78e08f",
    "#fa983a",
    "#eb2f06",
    "#1e3799",
    "#3c6382",
    "#38ada9",
    "#e58e26",
    "#b71540",
    "#0c2461",
    "#0a3d62",
    "#079992",
  ]);

  // Copy color
  const copyColor = (e) => {
    let color = e.target.innerText;
    document.execCommand(color); //copy to clipboard
    if (navigator.clipboard) {
      navigator.clipboard.writeText(color);
      navigator.clipboard.readText();
      toast.success(`You have copied ${color} value successfully`, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
  return (
    <section>
      {colorNames.map((color) => (
        <div
          key={color}
          className="color__block"
          style={{ background: color }}
          onClick={copyColor}
        >
          <div className="color--text">
            <p>{color}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default App;
