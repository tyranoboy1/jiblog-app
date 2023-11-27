import { createContext, useContext, useState } from "react";
import {
  IModalContextData,
  IModalContextProps,
} from "context/interface/context.interface";

const ModalContext = createContext<IModalContextData>({
  modalMessage: null,
  isModalShow: false,
  showModal: () => {},
  hideModal: () => {},
  onConfirm: () => {},
});

export const useModal = () => useContext(ModalContext);

export const ModalContextProvider = ({ children }: IModalContextProps) => {
  const [modalMessage, setModalMessage] = useState<string | null>(null);
  const [isModalShow, setIsModalShow] = useState<boolean>(false);
  const [onConfirm, setOnConfirm] = useState<() => void>(() => {});

  const showModal = (message: string, onConfirmAction: () => void) => {
    setModalMessage(message);
    setIsModalShow(true);
    setOnConfirm(() => onConfirmAction);
  };
  const hideModal = () => {
    setModalMessage(null);
    setIsModalShow(false);
  };

  return (
    <ModalContext.Provider
      value={{ modalMessage, isModalShow, showModal, hideModal, onConfirm }}
    >
      {children}
    </ModalContext.Provider>
  );
};
export default ModalContext;
