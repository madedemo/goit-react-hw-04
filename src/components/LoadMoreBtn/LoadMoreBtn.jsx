import css from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ handleClick }) => {

  return (
    <div className={css.buttonwrapper}>
    <button onClick={handleClick} className={css.button}>
      Load more
    </button>
    </div>
  );
};

export default LoadMoreBtn ;