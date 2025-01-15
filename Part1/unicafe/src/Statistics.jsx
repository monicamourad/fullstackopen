import Text from "./Text";

const Statistics = ({ good, neutral, bad, all, avg, positive }) => {
  return (
    <>
      <h2>statistics</h2>
      {all === 0 ? (
        <Text text="No feedback given" />
      ) : (
        <>
          <Text text={`good ${good}`} />
          <Text text={`neutral ${neutral}`} />
          <Text text={`bad ${bad}`} />
          <Text text={`all ${all}`} />
          <Text text={`average ${avg || 0}`} />
          <Text text={`positive ${positive || 0} %`} />
        </>
      )}
    </>
  );
};
export default Statistics;
