import { useState } from 'react';
import styles from './bank.module.scss';

const Toolbar = props => {
  const { handleBankReorder } = props;

  const [sortBy, setSortBy] = useState('abc');
  const [showAll, setShowAll] = useState(true);
  const [howMany, setHowMany] = useState(4);

  const handleChange = e => {
    const { name, value } = e.target;
    
    switch (name) {
      case 'search':
        handleBankReorder({ query: value.trim() });
        break;
      case 'how-many':
        if (value === 'all') {
          setShowAll(true);

          handleBankReorder({ limit: -1 });
        }
        else if (value === 'n') {
          setShowAll(false);

          handleBankReorder({ limit: parseInt(howMany) });
        }
        else {
          setShowAll(false);
          setHowMany(value);

          handleBankReorder({ limit: parseInt(value) });
        }
        break;
      case 'sort-by':
        setSortBy(value);

        handleBankReorder({ sort: value });
        break;
    }
  };

  const handleRandomize = () => {
    setSortBy('random');
    handleBankReorder({ sort: 'random' });
  };

  return (
    <form 
      className={styles.toolbar}
    >
      <fieldset name="search">
        <span>search</span>
        <input 
          type="search" 
          name="search"
          placeholder="What is the most amazing..." 
          onChange={handleChange}
        />
      </fieldset>

      <fieldset name="how-many">
        <span>show</span>
        <label htmlFor="how-many-all">
          <input 
            type="radio" 
            id="how-many-all" 
            name="how-many" 
            value="all" 
            checked={showAll} 
            onChange={handleChange}
          />
          <span>all</span>
        </label>
        <label htmlFor="how-many-n">
          <input 
            type="radio" 
            id="how-many-n" 
            name="how-many" 
            value="n" 
            checked={!showAll} 
            onChange={handleChange}
          />
          <input 
            type="number" 
            id="how-many-n" 
            name="how-many" 
            defaultValue="4" 
            min="1"
            max="10"
            disabled={!howMany}
            onChange={handleChange}
          />
        </label>
      </fieldset>

      <fieldset name="sort-by">
        <span>sort</span>
        <select 
          name="sort-by"
          onChange={handleChange}
          value={sortBy}
        >
          <option value="abc">alphabetical</option>
          <option value="length">length</option>
          <option value="random" disabled defaultChecked>random</option>
        </select>
        <button type="button" onClick={handleRandomize}>randomize</button>
      </fieldset>
    </form>
  );
};

export default Toolbar;
