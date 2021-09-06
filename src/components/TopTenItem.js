export default function TopTenItem({ place, sup: supText, name, year, house, points }) {
  return (
    <div className="list-group-item d-flex align-items-center">
      <div className="col-auto place">{place}<sup>{supText}</sup></div>
      <div className="me-auto">
          <p className="fw-bold mb-1 name">{name}</p>
          <p className="fs-sm text-muted mb-0 subtext">Year {year} · {house}</p>
      </div>
      <div className="badge badge-lg badge-rounded-circle bg-success-soft ms-4 points">Points {points}</div>
    </div>
  );
};