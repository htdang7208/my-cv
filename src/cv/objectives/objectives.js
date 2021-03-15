import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye, faDotCircle } from '@fortawesome/free-solid-svg-icons';

export default function Objectives() {
  return (
    <div className="objectives">
      <div className="item-title">
        <div className="fontawesome-icon">
          <FontAwesomeIcon icon={faBullseye} />
        </div>
        <h3>OBJECTIVES</h3>
      </div>
      <div className="sub-objective">
        <span>
          <FontAwesomeIcon icon={faDotCircle} />
        </span>
        <p>
          The purpose of mind is attempt to become a master front-end through
          environment working.
        </p>
      </div>
      <div className="sub-objective">
        <span>
          <FontAwesomeIcon icon={faDotCircle} />
        </span>
        <p>
          Additionally, In the future, I want to keep learning more about
          Back-end to become a Full-stack Developer.
        </p>
      </div>
    </div>
  );
}
