import React, { useEffect, useState } from 'react';
import { shuffle } from '../../lib/utils';
import styles from './bank.module.scss'
import Question from './question';
import Toolbar from './toolbar';

const Bank = ({ bank }) => {
  const [bankState, setBankState] = useState(bank);
  const [querySortLimit, setQuerySortLimit] = useState({
    query: '',
    sort: 'abc',
    limit: -1,
  });

  const handleBankReorder = order => {
    const newQSL = { ...querySortLimit, ...order };
    setQuerySortLimit(newQSL);

    reorderBank(newQSL);
  };

  const reorderBank = (qsl) => {
    const { query, sort, limit } = qsl;
    
    // query
    let newBank = query 
      ? [...bank.filter(q => q.toLowerCase().includes(query.toLowerCase()))]
      : [...bank]
    ;

    // sort
    if (sort === 'abc') newBank = newBank.sort((a, b) => a.localeCompare(b));
    else if (sort === 'length') newBank = newBank.sort((a, b) => a.length - b.length);
    else newBank = shuffle(newBank);
    
    // limit
    setBankState(limit > 0 ? newBank.slice(0, limit) : newBank);
  };

  return (<>
    <Toolbar
      handleBankReorder={handleBankReorder}
    />

    <ul className={styles.bank}>
      {bankState.map((question) => 
        <Question 
          key={question} 
          question={question}
        >{question}</Question>
      )}
    </ul>
  </>);
};

const MemoizedBank = React.memo(Bank);

export default Bank;
export { MemoizedBank };
