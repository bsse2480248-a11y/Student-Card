
function Alert({ message, onClose }) {
  return (
    <div
      className="alert alert-info directory-alert alert-dismissible fade show"
      role="status"
    >
      <strong>Success!</strong> {message}

      <button
        type="button"
        className="btn-close"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  );
}

export default Alert;
