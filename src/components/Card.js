export default function Card({ header, body }) {
  return (
    <div className="card card-bleed shadow-lg shadow-lg mb-5">
      <div className="card-header">
        {header}
      </div>
      <div className="card-body" style={{padding: '1.3rem'}}>
        {body}
      </div>
    </div>
  );
};