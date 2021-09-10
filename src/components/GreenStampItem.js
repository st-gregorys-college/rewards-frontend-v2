import { useState } from "react";

export default function GreenStampItem({ student, click }) {
  const { first_name, last_name, student_id } = student;
  const number_of_green_stamps = 40;
  const last_green_stamp_date = 'Fri Jun - 09:40AM';

  return (
    <div className="list-group-item d-flex align-items-center">
      <div className="col-auto" style={{cursor: 'pointer'}} onClick={() => click(student)}>
        <p className="fw-bold mb-1">{first_name} {last_name}</p>
        <p className="fs-sm text-muted mb-0">{student_id} · {last_green_stamp_date}</p>
      </div>
      <div className="badge badge-lg badge-rounded-circle bg-success-soft ms-6 me-auto">
        Green Stamps: {number_of_green_stamps}
      </div>
      <div className="col-auto">
        <div className="d-flex align-items-center">
          <button className="btn btn-sm btn-primary col-auto" disabled>-</button>
          <input type="text" className="form-control form-control-sm me-auto text-center" disabled value="0" />
          <button className="btn btn-sm btn-primary col-auto">+</button>
        </div>
      </div>
    </div>
  );
};