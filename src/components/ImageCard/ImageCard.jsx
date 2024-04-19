import css from './ImageCard.module.css'

const ImageCard = ({ src ,alt, onClick }) => (
  <div>
    <img
      className={css.image}
      src={src}
      alt={alt}
      onClick={onClick}
    />
  </div>
);

export default ImageCard