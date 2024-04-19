import './App.css';
import { useState, useEffect } from 'react';
import SearchBar from './SearchBar/SearchBar';
import SearchHeader from './SearchHeader/SearchHeader';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn';
import searchPhotos from '../components/services/api';
import ImageModal from './ImageModal/ImageModal';

function App() {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  useEffect(() => {
    if (!query) {
      return;
    }
    const getPhotos = async () => {
      setLoading(true);
      try {
        const data = await searchPhotos(query, page);
        setImages(prevImages => [...prevImages, ...data]);
        setError(null);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };
    getPhotos();
  }, [query, page]);

  const handleSearch = async (query) => {
    setQuery(query);
    setPage(1);
    setImages([]);
  };

  const handlePage =  () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
    setIsOpenModal(true);
  }

  const closeModal = () => {
    setSelectedImage(null);
    setIsOpenModal(false);
  }

  return (
    <div>
      <SearchHeader>
        <SearchBar onSubmit={handleSearch} />
      </SearchHeader>
      {error && <p>{error.message}</p>}
      {images.length > 0 && (<ImageGallery images={images} onImageClick={handleImageClick} />)}
      {images.length > 0 && !loading && (<LoadMoreBtn onClick={handlePage} />
      )}
      {loading && <Loader />}
      <ImageModal
        imageUrl={selectedImage}
        isOpen={isOpenModal}
        closeModal={closeModal} />
    </div>
  );
}

export default App;


