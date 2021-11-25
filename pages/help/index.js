import utilStyles from '../../styles/utils.module.scss';

const HelpPage = () => {
  return (
    <div>
      <h2 className={utilStyles.pagetitle}>Help</h2>

      <form>
        <span>add a question</span>
        <input type="text" />
        <button type="submit">add</button>
      </form>
    </div>
  );
};

export default HelpPage;
