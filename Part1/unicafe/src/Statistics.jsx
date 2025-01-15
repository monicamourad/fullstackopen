import Text from "./Text";
import StatisticsLine from "./StatisticsLine";

const Statistics = ({ good, neutral, bad, all, avg, positive }) => {
  return (
    <div>
      <h2>statistics</h2>
      {all === 0 ? (
        <Text text="No feedback given" />
      ) : (
        <>
          <StatisticsLine text="good" value={good} />
          <StatisticsLine text="neutral" value={neutral} />
          <StatisticsLine text="bad" value={bad} />
          <StatisticsLine text="all" value={all} />
          <StatisticsLine text="average" value={avg} />
          <StatisticsLine text="positive" value={positive} />
        </>
      )}
    </div>
  );
};
export default Statistics;
