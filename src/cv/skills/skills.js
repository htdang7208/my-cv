import React from 'react';
import SkillName from './skill-name';

export default function Skills() {
  return (
    <div className="view-content">
      {/* //////////////////////////////////////////// Soft Skills */}
      <div className="skills-item">
        <div className="skills-title">
          <h4>SKILLS</h4>
          <div className="horiz-seperate"></div>
        </div>
        <SkillName name="ReactJS" power={70} />
        <SkillName name="Flutter" power={70} />
        <SkillName name="Javascript" power={60} />
        <SkillName name="Typescript" power={50} />
        <SkillName name="HTML" power={80} />
        <SkillName name="CSS" power={80} />
        <SkillName name="Bootstrap" power={80} />
        <SkillName name="Angular 8" power={50} />
        <SkillName name="VueJS" power={50} />
        <SkillName name="C++" power={50} />
        <SkillName name="ASP.Net Core" power={50} />
        <SkillName name="SQL Server" power={50} />
        <SkillName name="Git" power={70} />
        <SkillName name="Figma" power={80} />
        <SkillName name="Teamwork" power={60} />
      </div>
      {/* //////////////////////////////////////////// Hard Skills */}
    </div>
  );
}
