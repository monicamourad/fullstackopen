import { useState } from "react";
import Button from "./Button";
import Text from "./Text";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const all = good + neutral + bad;
  const avg = (good - bad) / all;
  const positive = (good/all)*100;

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <h2>statistics</h2>
      <Text text={`good ${good}`} />
      <Text text={`neutral ${neutral}`} />
      <Text text={`bad ${bad}`} />
      <Text text={`all ${all}`} />
      <Text text={`average ${avg || 0}`} />
      <Text text={`positive ${positive || 0} %`} />

    </div>
  );
};

export default App;
