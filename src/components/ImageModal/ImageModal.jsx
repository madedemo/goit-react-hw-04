import Modal from "react-modal";
import css from './ImageModal.module.css';
Modal.setAppElement('#root');
const ImageModal = ({ isOpen, closeModal, imageUrl }) => {
    return (
        <Modal            isOpen={isOpen}
            onRequestClose={closeModal}
            contentLabel="Example Modal"
            className={`${css.modal} ${css.image}`}
            overlayClassName={css.overlay}>
            
            <div>
                <img src={imageUrl} alt="image"/>
            </div>
        </Modal>
    )
};

export default ImageModal



