
function Pagination({ page, totalPages, onPageChange }) {
  const pages = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  return (
    <nav className="directory-pagination" aria-label="Student pages">
      <ul className="pagination pagination-sm mb-0">
        <li className={`page-item ${page === 1 ? "disabled" : ""}`}>
          <button
            className="page-link"
            disabled={page === 1}
            onClick={() => onPageChange(page - 1)}
          >
            Previous
          </button>
        </li>

        {pages.map((number) => (
          <li
            key={number}
            className={`page-item ${page === number ? "active" : ""}`}
          >
            <button
              className="page-link"
              aria-current={page === number ? "page" : undefined}
              onClick={() => onPageChange(number)}
            >
              {number}
            </button>
          </li>
        ))}

        <li
          className={`page-item ${page === totalPages ? "disabled" : ""}`}
        >
          <button
            className="page-link"
            disabled={page === totalPages}
            onClick={() => onPageChange(page + 1)}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
