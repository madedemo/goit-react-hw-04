import css from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ handlePage }) => {
  return (
    <button onClick={handlePage} className={css.button}>
      Load more
    </button>
  );
};

export default LoadMoreBtn ;