import { useState } from "react";
import Button from "./Button";
import Text from "./Text";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <h3>statistics</h3>
      <Text text={`good ${good}`} />
      <Text text={`neutral ${neutral}`} />
      <Text text={`bad ${bad}`} />
    </div>
  );
};

export default App;
