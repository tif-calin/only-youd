import { useRouter } from 'next/dist/client/router';
import utilStyles from '../../styles/utils.module.scss';

const GamePage = () => {
  const router = useRouter();

  const { id } = router.query;

  fetch('/api/socketio').finally(() => {
    console.log('socketio is ready');
  });

  return (
    <div>
      <h2 className={utilStyles.pagetitle}>Game {id}</h2>
    </div>
  );
};

export default GamePage;
