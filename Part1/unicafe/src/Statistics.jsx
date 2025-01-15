import Text from "./Text";

const Statistics = ({ good, neutral, bad, all, avg, positive }) => (
  <>
    <h2>statistics</h2>
    <Text text={`good ${good}`} />
    <Text text={`neutral ${neutral}`} />
    <Text text={`bad ${bad}`} />
    <Text text={`all ${all}`} />
    <Text text={`average ${avg || 0}`} />
    <Text text={`positive ${positive || 0} %`} />
  </>
);
export default Statistics;
