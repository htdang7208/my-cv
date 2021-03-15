import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDotCircle } from '@fortawesome/free-solid-svg-icons';

export default function Education() {
  return (
    <div className="view-content">
      <div className="education-item">
        <div>
          <h4>UNIVERSITY OF SCIENCE</h4>
          <span className="item-date">09/2015 - 07/2021</span>
          <div className="horiz-seperate"></div>
        </div>
        <div className="sub-objective pl-0">
          <span>
            <FontAwesomeIcon icon={faDotCircle} />
          </span>
          <p>
            Major: <span className="sub-item">Software Engineering</span>
          </p>
        </div>

        <div className="sub-objective pl-0">
          <span>
            <FontAwesomeIcon icon={faDotCircle} />
          </span>
          <p>
            Expected graduation: <span className="sub-item">07/2021</span>
          </p>
        </div>
      </div>
    </div>
  );
}
