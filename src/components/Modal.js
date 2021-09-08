import { Modal } from 'react-bootstrap';

export default function ModalComponent({ title, body, footer, onShow, onClose }) {
  return (
    <Modal centered size="lg" show={onShow} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{body}</Modal.Body>
      <Modal.Footer>
        <button className="btn btn-sm btn-secondary" onClick={onClose}>Close</button>
        {footer}
      </Modal.Footer>
    </Modal>
    );
};