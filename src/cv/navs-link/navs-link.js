import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBriefcase,
  faCog,
  faUserGraduate,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';

export default function NavsLink({ index, onChange }) {
  const handleChange = (index) => {
    if (onChange) {
      onChange(index);
    }
  };
  return (
    <nav>
      <div className="vert-seperate"></div>
      {/* EDUCATION */}
      <div className="navitem">
        {/* {index === 1 ? <div className="nav-item-triangle-left"></div> : null} */}
        <div className="fontawesome-icon">
          <FontAwesomeIcon icon={faUserGraduate} />
        </div>
        <h3
          onClick={() => handleChange(1)}
          className={index === 1 ? 'active' : ''}
        >
          <a href="#education">EDUCATION</a>
        </h3>
      </div>
      {/* PROJECT EXPERIENCE */}
      <div className="navitem">
        {/* {index === 2 ? <div className="nav-item-triangle-left"></div> : null} */}
        <div className="fontawesome-icon">
          <FontAwesomeIcon icon={faUsers} />
        </div>
        <h3
          onClick={() => handleChange(2)}
          className={index === 2 ? 'active' : ''}
        >
          <a href="#project-experience">PROJECT EXPERIENCE</a>
        </h3>
      </div>
      {/* WORKING EXPERIENCE */}
      <div className="navitem">
        {/* {index === 3 ? <div className="nav-item-triangle-left"></div> : null} */}
        <div className="fontawesome-icon">
          <FontAwesomeIcon icon={faBriefcase} />
        </div>
        <h3
          onClick={() => handleChange(3)}
          className={index === 3 ? 'active' : ''}
        >
          <a href="#working-experience">WORKING EXPERIENCE</a>
        </h3>
      </div>
      {/* SKILLS */}
      <div className="navitem">
        {/* {index === 4 ? <div className="nav-item-triangle-left"></div> : null} */}
        <div className="fontawesome-icon">
          <FontAwesomeIcon icon={faCog} />
        </div>
        <h3
          onClick={() => handleChange(4)}
          className={index === 4 ? 'active' : ''}
        >
          <a href="#working-experience">SKILLS</a>
        </h3>
      </div>
    </nav>
  );
}
