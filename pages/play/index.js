import utilStyles from '../../styles/utils.module.scss';
import styles from '../../styles/pages/Play.module.scss';

const PlayPage = () => {
  return (
    <div className={styles.container}>
      <h2 className={utilStyles.pagetitle}>Play</h2>

      <section>
        {/* <h3>Create a new game</h3> */}
        <form className={styles.form}>
          {/* <fieldset>
            <legend>publicity</legend>
            <label>
              <input type="radio" name="publicity" value="public" />
              <span>public</span>
            </label>
            <label>
              <input type="radio" name="publicity" value="private" />
              <span>private</span>
            </label>
          </fieldset> */}

          <button className={utilStyles.cardbutton} type="submit">Create New Game</button>
        </form>
      </section>
    </div>
  );
};

export default PlayPage;
