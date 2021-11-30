import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import { Rating } from "@mui/material";

function App() {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [value, setValue] = React.useState(2);

  return (
    <div>
      <h1>give feedback </h1>
      <Button variant="outlined">Outlined</Button>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      <h1>statistics</h1>
    </div>
  );
}

export default App;
