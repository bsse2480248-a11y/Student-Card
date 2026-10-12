
import { useState } from "react";

function StudentCard({ student, onDelete }) {
  const [views, setViews] = useState(0);
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="card student-card h-100">
      <div className="student-avatar" aria-hidden="true">
        <svg viewBox="0 0 100 100" role="img">
          <circle cx="50" cy="30" r="22" fill="currentColor" />
          <path
            d="M10 96 C10 66 30 55 50 55 S90 66 90 96 Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="card-body">
        <h2 className="student-name">{student.name}</h2>

        <div className="student-info">
          <p>ID: {student.id}</p>
          <p>Major: {student.major}</p>
          <p>Year: {student.year}</p>
          <p>GPA: {student.gpa.toFixed(1)}</p>
        </div>

        {showDetails && (
          <div className="student-details">
            <p><strong>Department:</strong> {student.major}</p>
            <p><strong>Year:</strong> {student.year}</p>
            <p><strong>Profile Views:</strong> {views}</p>
          </div>
        )}

        <div className="student-actions">
          <button
            className="btn btn-sm btn-outline-primary"
            onClick={() => setViews((previous) => previous + 1)}
          >
            View Profile
          </button>

          <button
            className="btn btn-sm btn-outline-danger"
            onClick={() => onDelete(student.id)}
          >
            Delete
          </button>
        </div>

        <button
          className="btn btn-sm btn-outline-secondary details-button"
          onClick={() => setShowDetails((previous) => !previous)}
          aria-expanded={showDetails}
        >
          {showDetails ? "Hide Details" : "Show Details"}
        </button>
      </div>
    </div>
  );
}

export default StudentCard;
