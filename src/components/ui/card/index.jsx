import React from 'react';
import "./style.css";

export default function Card({ img, firstText, secondText, children }) {
  return (
    <div className="card">
      <div>
        <img src={img} alt="" />
      </div>
      <h4>{firstText}</h4>
      <p>{secondText}</p>
      {children}
    </div>
  );
}
