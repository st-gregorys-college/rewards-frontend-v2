import React from "react";

export default function LowestPointsItem({ student }) {
    const currentYear = new Date().getFullYear();

    return (
        <div className="list-group-item d-flex align-items-center">
          <div className="me-auto">
              <p className="fw-bold mb-1 name">{student.first_name} {student.last_name}</p>
              <p className="fs-sm text-muted mb-0 subtext">Year {student.year_group} · Total {student.points.total}</p>
          </div>
          <div className="badge badge-lg badge-rounded-circle bg-success-soft ms-4 points">{currentYear} Points: {student.points[currentYear]}</div>
        </div>
    );
}