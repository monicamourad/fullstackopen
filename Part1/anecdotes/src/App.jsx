import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];
  const initialVotes = new Array(anecdotes.length).fill(0);

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(initialVotes);

  const getRandomAnecdote = (max, selectedAnecdote) => {
    let rand;
    do {
      rand = Math.floor(Math.random() * max);
    } while (rand === selectedAnecdote);
    return rand;
  };

  const handleVote = () => {
    const newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes);
  };

  const getTopVotedAnecdote = () => {
    const topVote = Math.max(...votes);
    return votes.indexOf(topVote);
  };

  return (
    <>
    <h2>Anecdote of the day</h2>
      <div>{anecdotes[selected]}</div>
      <div>has {votes[selected]} votes</div>
      <button onClick={handleVote}>vote</button>
      <button
        onClick={() =>
          setSelected(getRandomAnecdote(anecdotes.length - 1, selected))
        }
      >
        next anecdote
      </button>
      <h2>Anecdote with most votes</h2>
      <div>{anecdotes[getTopVotedAnecdote()]}</div>
    </>
  );
};

export default App;
