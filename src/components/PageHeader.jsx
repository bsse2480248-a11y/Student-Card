
function PageHeader({ onAddStudent }) {
  return (
    <div className="page-header">
      <h1>Page Header</h1>

      <button
        className="btn btn-primary btn-sm"
        onClick={onAddStudent}
      >
        + Add New Student
      </button>
    </div>
  );
}

export default PageHeader;
