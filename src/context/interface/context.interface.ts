import { ReactNode } from "react";

/** context 하위 컴포넌트 적용 */
export interface IAuthContextProps {
  children: ReactNode;
}

export interface IThemeContextProps {
  children: ReactNode;
}
export interface IModalContextProps {
  children: ReactNode;
}

export interface IModalContextData {
  modalMessage: string | null;
  isModalShow: boolean;
  showModal: (content: string, onConfirm: () => void) => void;
  hideModal: () => void;
  onConfirm: () => void;
}
