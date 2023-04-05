import ReactDom from "react-dom";
import { AiOutlineClose } from "react-icons/ai";
import "../styles/cart.css";

function Modal({ children, open, close }) {
  if (!open) return null;
  return ReactDom.createPortal(
    <>
      <div className="overlay" />
      <div className="modal">
        {children}
        <button onClick={close} className="closemodal">
          <AiOutlineClose />
        </button>
      </div>
    </>,
    document.getElementById("portal")
  );
}

export default Modal;
