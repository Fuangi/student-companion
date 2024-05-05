import { Outlet, useNavigate } from "react-router-dom";

function Modal({ closeModal, openedModal, children }) {
  const navigate = useNavigate();
  // const location = useLocation();
  // const [auth, setAuth] = useState((location.pathname = "/authentication"));

  return (
    <div
      className="modal-background"
      onClick={() => {
        closeModal(false);
        navigate("/");
      }}
    >
      <div className="modal-body">
        <div className="close-modal">
          <button
            onClick={() => {
              closeModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="modal-content">
          {/* <AuthNav /> */}
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Modal;
