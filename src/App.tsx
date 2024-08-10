import React, { useState } from "react";
import FormModal from "./FormModal";
import Modal from "./Modal";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const modalOpenHandler = () => setIsOpen(true);
  const onClose = () => {
    setIsOpen(false);
  };
  return (
    <div className="p-6">
      <button
        onClick={modalOpenHandler}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Open Modal
      </button>
      {isOpen && (
        <Modal isOpen={isOpen} onClose={onClose}>
          <FormModal />
        </Modal>
      )}
    </div>
  );
}

export default App;
