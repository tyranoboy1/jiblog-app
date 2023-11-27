import { IModalProps } from "components/modal/interface/modal.interface";
import "components/modal/styles/modal.css";
import { IoClose } from "react-icons/io5";

/** Modal */
const Modal = (props: IModalProps) => {
  const { message, onConfirm, onHideModal } = props;

  return (
    <div>
      <div className="modal_box">
        <div className="modal_content">
          <IoClose className="popup_exit" onClick={onHideModal} />
          {message}
          <button className="popup_btn" onClick={onConfirm}>
            확인
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
