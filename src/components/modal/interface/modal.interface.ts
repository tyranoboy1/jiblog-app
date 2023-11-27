export interface IModalProps {
  message: string | null;
  onConfirm: () => void;
  onHideModal: () => void;
}
