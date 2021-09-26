export default function TopTenItem({ place, sup: supText, student, click }) {
  return (
    <div className="list-group-item d-flex align-items-center" onClick={() => click(student)}>
      <div className="col-auto place">{place}<sup>{supText}</sup></div>
      <div className="me-auto">
          <p className="fw-bold mb-1 name">{student.first_name } {student.last_name}</p>
          <p className="fs-sm text-muted mb-0 subtext">Year {student.year_group} · {student.house}</p>
      </div>
      <div className="badge badge-lg badge-rounded-circle bg-success-soft ms-4 points">Points {student.points}</div>
    </div>
  );
}