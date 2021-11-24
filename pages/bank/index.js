import { MemoizedBank } from '../../components/bank/bank';
import styles from '../../styles/pages/Bank.module.scss';

const baseURL = process.env.NODE_ENV === 'production'
  ? 'https://only-youd.vercel.app'
  : 'http://localhost:3000'
;

const BankPage = props => {
  const { bank } = props;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Question Bank</h2>
      <p>{bank.length} questions</p>

      <MemoizedBank 
        bank={bank}
      />
    </div>
  );
};

const getStaticProps = async () => {
  console.log('Fetching questions...', baseURL);
  const bank = await fetch(`${baseURL}/api/bank`).then(res => res.json());

  return {
    props: {
      bank
    }
  };
};

export default BankPage;
export { getStaticProps };