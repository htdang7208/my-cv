import React, { useState } from 'react';
import ProjectExperience from './project-experience/project-experience';
import Education from './education/education';
import WorkingExperience from './working-experience/working-experience';
import Profile from './profile/profile';
import Brands from './brands/brands';
import Objectives from './objectives/objectives';
import NavsLink from './navs-link/navs-link';
import Skills from './skills/skills';
import './css/cv.css';
import Backdrop from './backdrop/backdrop';

export default function CV() {
  const [linkActive, setLinkActive] = useState(1);
  console.log('link: ', linkActive);
  return (
    <div className="cv">
      <div className="cv-container">
        <Backdrop />
        <div className="cv-content">
          <Profile className="cv-content-left" />
          <div className="cv-content-right">
            <Brands />
            <Objectives />
            <div className="content">
              <NavsLink index={linkActive} onChange={setLinkActive} />

              {linkActive === 1 ? <Education id="education" /> : null}
              {linkActive === 2 ? (
                <ProjectExperience id="project-experience" />
              ) : null}
              {linkActive === 3 ? (
                <WorkingExperience id="working-experience" />
              ) : null}
              {linkActive === 4 ? <Skills id="skills" /> : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
