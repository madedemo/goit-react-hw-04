import css from './SearchBar.module.css';
import toast from "react-hot-toast";
import { useState } from "react";

const SearchBar = ({ onSubmit }) => {
    const [query, setQuery] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!query.trim()) {
            toast.error('Please enter a search query');
          return;
        }
      onSubmit(query);
    }

  return (
      <form className={css.searchBar} onSubmit={handleSubmit}>
        <input
          type="text"
          className={css.searchInput}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className={css.searchButton}>Search</button>
      </form>
  )
}

export default SearchBar