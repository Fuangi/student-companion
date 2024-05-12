import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import AuthLayout from "./AuthLayout";
// import { Signup } from "../forms";

function Modal({ children, prevLocation }) {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  console.log(location);
  function handleCloseModal(prevLocation) {
    setShowModal(false);

    navigate(prevLocation);
  }

  return (
    <div className="modal-background">
      <div className="modal-body">
        <div className="close-modal">
          <button
            onClick={() => handleCloseModal(prevLocation)}
            style={{ color: `${showModal ? "black" : ""}` }}
          >
            X
          </button>
        </div>
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
}

export default Modal;
