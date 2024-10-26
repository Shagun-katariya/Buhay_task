import React from 'react';
import './Requirement.css'

function Requirement({ requirement, removeRequirement }) {
  return (
    <div className="requirement">
      <span>{requirement.name}</span>
      <button onClick={removeRequirement}>Delete</button>
    </div>
  );
}

export default Requirement;
