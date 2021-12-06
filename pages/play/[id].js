import { useRouter } from 'next/dist/client/router';
import utilStyles from '../../styles/utils.module.scss';
import styles from '../../styles/pages/Game.module.scss';

/*
 0. if game is already ended:   show ResultScreen
 1. if game is not started:     show StartScreen
 2. if game is started:         show GameScreen
  2.1. if member, watch it
  2.2. if not member, join it

CONDITIONS:
to login:
 - username must be unique

to start:
 - there must be at least 3 players
*/

const GamePage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className={styles.container}>
      <h2 className={utilStyles.pagetitle}>Game {id}</h2>

      <form className={styles.userform}>
        <input 
          placeholder="Username"
          type="text" 
        />
        <button type="submit">Join</button>
      </form>

      <span>Current players: 0</span>
      <button 
        type="submit"
        disabled
      >Start Game</button>
    </div>
  );
};

export default GamePage;
