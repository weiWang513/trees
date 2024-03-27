import { Modal } from "antd";
import './index.scss'

const SModal = ({ child, isModalOpen, width, onCancel }: any) => {
  return (
    <Modal
      open={isModalOpen}
      footer={null}
      closeIcon={null}
      onCancel={onCancel}
      width={width || 700}
      centered
    >
      {child}
    </Modal>
  );
};

export default SModal;
