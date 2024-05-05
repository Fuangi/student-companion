import { useNavigate } from "react-router-dom";
import { useState } from "react";
import AuthLayout from "./AuthLayout";
// import { Signup } from "../forms";

function Modal() {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  function handleCloseModal() {
    setShowModal(false);
    navigate("/");
  }

  return (
    <div className="modal-background" onClick={handleCloseModal}>
      <div className="modal-body">
        <div className="close-modal">
          <button onClick={handleCloseModal}>X</button>
        </div>
        <div className="modal-content">
          <AuthLayout />
        </div>
      </div>
    </div>
  );
}

export default Modal;
