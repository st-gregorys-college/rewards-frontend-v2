import React from "react";

export default function Card({ header, body }) {
  return (
    <div className="card card-bleed shadow-lg shadow-lg mb-5">
      {
        header ? <div className="card-header">{header}</div> : ''
      }
      <div className="card-body" style={{padding: 20}}>
        {body}
      </div>
    </div>
  );
}