
function Breadcrumb() {
  return (
    <nav className="directory-breadcrumb" aria-label="breadcrumb">
      <ol className="breadcrumb mb-0">
        <li className="breadcrumb-item">
          <a href="#home">Home</a>
        </li>
        <li className="breadcrumb-item">
          <a href="#students">Students</a>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          Directory
        </li>
      </ol>
    </nav>
  );
}

export default Breadcrumb;
