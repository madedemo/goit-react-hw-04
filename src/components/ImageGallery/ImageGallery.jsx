import css from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';

const ImageGallery = ({ images }) => {

  return (
    <ul className={css.ImageGallery}>
      {images.map((image, id) => (
        <li key={id}> 
          <ImageCard image={image} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;

