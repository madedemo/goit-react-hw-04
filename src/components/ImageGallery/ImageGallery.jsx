import css from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';

const ImageGallery = ({ images, setDataForModal, setIsOpen }) => {
  if (!images || images.length === 0) {
    return null;
  }

  return (
    <ul className={css.ImageGallery}>
      {images.map((image) => (
        <li key={image.id}>
          <ImageCard image={image} setDataForModal={setDataForModal} setIsOpen={setIsOpen} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;

