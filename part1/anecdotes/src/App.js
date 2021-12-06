import React, { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients",
  ];

  const [selected, setSelected] = useState(0);
  const [vote, setVote] = useState([]);
  const [maxVote, setMaxVote] = useState({
    index: 0,
    numberOfVote: 0,
  });

  const handleOnVote = () => {
    const copy = [...vote];
    copy[selected] = (copy[selected] || 0) + 1;
    if (copy[selected] > maxVote.numberOfVote) {
      setMaxVote({ index: selected, numberOfVote: copy[selected] });
    }
    setVote(copy);
  };

  return (
    <div style={{ margin: "20px" }}>
      <h1>Anecdotes of the day</h1>
      <div>{anecdotes[selected]}</div>
      <div>has {vote[selected] || 0} vote</div>

      <button onClick={handleOnVote}>vote</button>
      <button
        onClick={() => {
          const random = Math.floor(Math.random() * anecdotes.length);
          setSelected(random);
        }}
      >
        next anecdotes
      </button>
      <h1>Anecdotes with the most votes </h1>
      <div>{anecdotes[maxVote.index]}</div>
      <div>has {maxVote.numberOfVote} vote</div>
    </div>
  );
};

export default App;
