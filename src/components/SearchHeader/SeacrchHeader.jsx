import css from './SearchHeader.module.css'

const SeacrchHeader = ({children}) => {
  return (
    <div className={css.searchHeader}>
      <div>
        <h1>Find Images</h1>
        {children}
      </div>
    </div>
  );
};


export default SeacrchHeader