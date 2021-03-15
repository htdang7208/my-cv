import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDotCircle } from '@fortawesome/free-solid-svg-icons';

export default function WorkingExperience() {
  return (
    <div className="view-content">
      {/* ////////////////////////////////////////////////////////////////// */}
      <div className="working-item">
        <div className="project-title">
          <h4>INTERN AT EPLATFORM SOLUTIONS COMPANY</h4>
          <span className="item-date">05/2019 - 08/2019</span>
          <div className="horiz-seperate"></div>
        </div>
        <div className="sub-objective pl-0">
          <span>
            <FontAwesomeIcon icon={faDotCircle} />
          </span>
          <p>
            Position: <span>Front-end developer</span>
          </p>
        </div>
        <div className="sub-objective pl-0">
          <span>
            <FontAwesomeIcon icon={faDotCircle} />
          </span>
          <p>
            Work:{' '}
            <span>
              Design user interface for product of company based on the old
              version.
            </span>
          </p>
        </div>
        <div className="sub-objective pl-0">
          <span>
            <FontAwesomeIcon icon={faDotCircle} />
          </span>
          <p>
            Languages: <span className="sub-item">VueJS</span>
            <span className="sub-item">HTML</span>
            <span className="sub-item">CSS</span>
            <span className="sub-item">Bootstrap</span>
            <span className="sub-item">Javascript</span>
          </p>
        </div>
      </div>
      {/* ////////////////////////////////////////////////////////////////// */}
      <div className="working-item">
        <div className="project-title">
          <h4>INTERN AT ISC QUANG TRUNG</h4>
          <span className="item-date">12/2018 - 03/2019</span>
          <div className="horiz-seperate"></div>
        </div>
        <div className="sub-objective pl-0">
          <span>
            <FontAwesomeIcon icon={faDotCircle} />
          </span>
          <p>
            Position: <span>Trainee</span>
          </p>
        </div>
        <div className="sub-objective pl-0">
          <span>
            <FontAwesomeIcon icon={faDotCircle} />
          </span>
          <p>
            Description:{' '}
            <span>
              I was trained the knowledge about front-end and back-end.
            </span>
          </p>
        </div>
        <div className="sub-lv2">
          <p>
            - Front-end, using:
            <span className="sub-item">HTML5</span>
            <span className="sub-item">CSS3</span>
            <span className="sub-item">Bootstrap 4</span>
            <span className="sub-item">Angular 6</span>
          </p>
          <p>
            - Back-end, using:
            <span className="sub-item">ASP.Net Core 2.1</span>
            <span className="sub-item">SQL Server</span>
          </p>
        </div>
        <div className="sub-objective pl-0">
          <span>
            <FontAwesomeIcon icon={faDotCircle} />
          </span>
          <p>
            Product:{' '}
            <span>
              Website support admin manage their trainee. Some features:
            </span>
          </p>
        </div>
        <div className="sub-lv2">
          <p>
            <span className="sub-item">Manage trainees</span>
            <span className="sub-item">Manage schedules</span>
            <span className="sub-item">Manage member companies</span>
            <span className="sub-item">
              Manage trainees were completed the program then checking to refund
              money.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
