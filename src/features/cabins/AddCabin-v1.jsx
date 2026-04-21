import { useState } from "react";

import CreateCabinForm from "./CreateCabinForm";

import Button from "../../ui/Button";
import Modal from "../../ui/Modal-v1";

function AddCabin() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleClose = () => setIsOpenModal(false);

  return (
    <div>
      <Button onClick={() => setIsOpenModal((show) => !show)}>
        Add new cabin
      </Button>
      {isOpenModal && (
        <Modal onClose={handleClose}>
          <CreateCabinForm onCloseModal={handleClose} />
        </Modal>
      )}
    </div>
  );
}

export default AddCabin;
