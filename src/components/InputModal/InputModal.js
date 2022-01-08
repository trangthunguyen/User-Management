import { Modal, Form, Input, Button } from "antd";
import "./InputModal.scss";

const InputModal = (props) => {
  const {
    createMode,
    handleCreateUser,
    handleCancelModel,
    userEdit,
    handleEditUser,
  } = props;

  const UserSubmit = (value) => {
    handleCancelModel();
    if (userEdit) {
      handleEditUser(value, userEdit.id);
    } else {
      handleCreateUser(value);
    }
  };

  return (
    <Modal
      visible={createMode || userEdit}
      onCancel={() => {
        handleCancelModel();
      }}
      footer={[]}
      destroyOnClose={true}
    >
      <Form
        name="basic"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 18 }}
        onFinish={UserSubmit}
        initialValues={userEdit || { name: "", email: "", city: "" }}
      >
        <h2>{userEdit ? "Edit user" : "Create user"}</h2>

        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please input the name" }]}
        >
          <Input className="inp-text" />
        </Form.Item>

        <Form.Item
          label="City"
          name="city"
          rules={[{ required: true, message: "Please input the city" }]}
        >
          <Input className="inp-text" />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            { type: "email", message: "The input is not valid E-mail!" },
            { required: true, message: "Please input the email" },
          ]}
        >
          <Input className="inp-text" />
        </Form.Item>

        <div className="btn-form">
          <Button
            className="btn-form-foot"
            onClick={() => {
              handleCancelModel();
            }}
          >
            Cancel
          </Button>
          <Button className="btn-form-foot" type="primary" htmlType="submit">
            {userEdit ? "Save" : "Add"}
          </Button>
        </div>
      </Form>
    </Modal>
  );
};

export default InputModal;
