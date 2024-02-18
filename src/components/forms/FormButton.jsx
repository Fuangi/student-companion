function FormButton({ onClick, children }) {
  return (
    <button onClick={onClick} className="form-btn">
      {children}
    </button>
  );
}

export default FormButton;
