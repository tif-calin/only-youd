import Question from '../bank/question';
import fuzzysort from 'fuzzysort';

const QueriedList = ({ list, query }) => {
  const sorted = fuzzysort.go(query, list).map(r => r.target);

  return (
    <ul>
      {sorted.map(item =>
        <Question key={item} question={item} />
      )}
    </ul>
  );
};

export default QueriedList;
