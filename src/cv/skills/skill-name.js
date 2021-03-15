import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDotCircle } from '@fortawesome/free-solid-svg-icons';

export default function SkillName(props) {
  return (
    <div className="skills sub-objective pl-0">
      <span>
        <FontAwesomeIcon icon={faDotCircle} />
      </span>
      <div className="skill-review">
        <p>{props.name}:</p>
        <div className="power">
          <div className={`power-index power-index-${props.power}`}>
            <span>{props.power}%</span>
          </div>
          <span className="full-power">100%</span>
        </div>
      </div>
    </div>
  );
}
