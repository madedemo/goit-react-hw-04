import './App.css';
import{ useState, useEffect } from 'react';
import SearchBar from './SearchBar/SearchBar';
import SearchHeader from './SearchHeader/SearchHeader';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import { searchPhotos } from '../components/services/api';

function App() {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (!query) {
      return;
    }
    const getPhotos = async () => {
      setLoading(true);
      try {
        const data = await searchPhotos(query, page);
        setImages(data);
        setError(null);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };
    getPhotos();
  },[query, page]);

  const handleSearch = async (query) => {
    setQuery(query);
    setPage(1);
  }

  return (
    <div>
      <SearchHeader>
        <SearchBar onSubmit={handleSearch} />
      </SearchHeader>
      {error && <p>Oops, something went wrong.</p>}
      {loading ? <Loader /> : <ImageGallery images={images} />}
    </div>
  );
}


export default App;
