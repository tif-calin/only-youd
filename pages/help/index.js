import { useState } from 'react';
import QueriedList from '../../components/help/queriedList';
import styles from '../../styles/pages/Help.module.scss';
import utilStyles from '../../styles/utils.module.scss';

const baseURL = process.env.NODE_ENV === 'production'
  ? 'https://only-youd.vercel.app'
  : 'http://localhost:3000'
;

const HelpPage = ({ bank }) => {
  const [input, setInput] = useState('');

  const handleTextInputChange = e => {
    e.target.value = e.target.value.trimStart();

    setInput(e.target.value.trim());
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (!input) return;

    const resp = await fetch(`${baseURL}/api/bank`, { method: 'POST', body: input });
    console.log(resp);

    setInput('');
  };

  return (
    <div className={styles.container}>
      <h2 className={utilStyles.pagetitle}>Help</h2>

      <form className={styles.form}>
        <h3>Suggest a question!</h3>
        <input type="text" placeholder={bank[0]} onChange={handleTextInputChange} />
        <button onClick={handleSubmit} type="submit">Submit</button>
      </form>

      <div>
        <h3>Similar questions:</h3>
        <QueriedList list={bank} query={input} />
      </div>
    </div>
  );
};

const getStaticProps = async () => {
  let bank;

  try {
    const res = await fetch(`${baseURL}/api/questions`);
    const data = await res.json();
    bank = data?.map(q => q.question) || [];
  } catch (error) {
    console.error(error);
    bank = [];
  }

  bank = JSON.parse(JSON.stringify(bank));

  return {
    props: {
      bank
    }
  };
};

export default HelpPage;
export { getStaticProps };
