import { MemoizedBank } from '../../components/bank/bank';
import questions from '../../data/questions';
import styles from '../../styles/pages/Bank.module.scss';
import utilStyles from '../../styles/utils.module.scss';

const baseURL = process.env.NODE_ENV === 'production'
  ? 'https://only-youd.vercel.app'
  : 'http://localhost:3000'
;

const BankPage = props => {
  const { bank } = props;

  return (
    <div className={styles.container}>
      <h2 className={utilStyles.pagetitle}>Question Bank</h2>

      <MemoizedBank 
        bank={bank}
      />

      <p>{bank.length} total questions</p>
    </div>
  );
};

const getStaticProps = async () => {
  let bank;
  try {
    const res = await fetch(`${baseURL}/api/bank`);
    bank = (await res.json())?.map(q => q.question) || [];
  } catch (error) {
    console.error(error);
    bank = questions;
  }

  bank = JSON.parse(JSON.stringify(bank));

  return {
    props: {
      bank
    }
  };
};

export default BankPage;
export { getStaticProps };
