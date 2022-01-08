import { Modal } from "antd";
import "./ConfirmModal.scss";

const ConfirmModal = (props) => {
  const { idUserDelete, handleDeleteUser, handleCancelDelete } = props;
  const confirmDelete = () => {
    handleDeleteUser(idUserDelete);
    handleCancelDelete();
  };

  return (
    <Modal
      visible={idUserDelete}
      okText="OK"
      onOk={confirmDelete}
      onCancel={() => {
        handleCancelDelete();
      }}
    >
      Do you want to delete this user?
    </Modal>
  );
};

export default ConfirmModal;
