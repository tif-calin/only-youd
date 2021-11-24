import styles from './bank.module.scss';

const Question = props => {
  const { question } = props;

  return (
    <li className={styles.question}>
      {question}
    </li>
  );
};

export default Question;
