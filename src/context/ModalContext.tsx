import { createContext, useContext, useState } from "react";
import {
  IModalContextData,
  IModalContextProps,
} from "context/interface/context.interface";

/** 모달 Context 객체 생성 */
const ModalContext = createContext<IModalContextData>({
  modalMessage: null,
  isModalShow: false,
  showModal: () => {},
  hideModal: () => {},
  onConfirm: () => {},
});

/** ModalContext를 사용하기 위한 커스텀 훅  => 커스텀 훅을 통해 모달 상태 접근 */
export const useModal = () => useContext(ModalContext);

export const ModalContextProvider = ({ children }: IModalContextProps) => {
  /** 모달 메세지, 표시 여부, 확인 콜백 함수에 대한 상태 관리 */
  const [modalMessage, setModalMessage] = useState<string | null>(null);
  const [isModalShow, setIsModalShow] = useState<boolean>(false);
  const [onConfirm, setOnConfirm] = useState<() => void>(() => {});

  /** 모달을 보여주는 함수 */
  const showModal = (message: string, onConfirmAction: () => void) => {
    setModalMessage(message);
    setIsModalShow(true);
    setOnConfirm(() => onConfirmAction);
  };
  /** 모달을 숨기는 함수 */
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
