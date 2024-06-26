import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";
import blogSlice from "store/slices/blogSlice";
import { RootState } from "store/slices";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ToastModal = ({ text }: { text: string }) => {
  const isShowModal = useSelector((state: RootState) => state.blog.isShowModal);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(blogSlice.actions.setIsShowModal(false));
  };
  return (
    <Modal
      open={isShowModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {text}
        </Typography>
        <button onClick={handleClose}>닫기</button>
      </Box>
    </Modal>
  );
};

export default ToastModal;
