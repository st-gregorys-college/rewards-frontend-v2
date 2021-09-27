import React from "react";

export default function MeritItem({ merit, id, action }) {
  const buttonClass = action ? 'danger' : 'success';
  const meritColours = ['#7CB6E1', '#e8e9eb', '#820024'];

  return (
    <div className="list-group-item d-flex align-items-center" id={id}>
      <div className="col-auto merit-colour" style={{backgroundColor: meritColours[merit.merit_type]}}></div>
      <div className="me-auto">
        <p className="fw-bold mb-1">{merit.first_name} {merit.last_name}</p>
        <p className="fs-sm text-muted mb-0 subtext">Year {merit.year_group} · {merit.student_id}</p>
      </div>
      <button className={'btn btn-xs btn-' + buttonClass + '-soft col-auto'}>{action ? 'Unaction' : 'Action'}</button>
    </div>
  );
}