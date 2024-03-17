import React from "react";
import "../styles/Resume.css";
import Education from "./Resume/Education";
import Skills from "./Resume/Skills";
import Working from "./Resume/Workingexperience";
import { Link, Element } from "react-scroll";

function Resume() {
  return (
    <div>
      <nav className='navigation'>
        <Link
          activeClass='active'
          to='Education'
          spy={true}
          smooth={true}
          duration={500}
        >
          Education
        </Link>
        <Link
          activeClass='active'
          to='Skills'
          spy={true}
          smooth={true}
          duration={500}
        >
          Skills
        </Link>
        <Link
          activeClass='active'
          to='Working'
          spy={true}
          smooth={true}
          duration={500}
        >
          Working Experience
        </Link>
        {/* 可以根据需要添加更多链接 */}
      </nav>
      <Element name='Education' className='element'>
        <Education />
      </Element>
      <Element name='Skills' className='element'>
        <Skills />
      </Element>
      <Element name='Working' className='element'>
        <Working />
      </Element>
      {/* 根据需要添加更多Element组件 */}
    </div>
  );
}

export default Resume;
