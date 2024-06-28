import skills from "/public/skills.json";
import AOS from "aos";
import { useEffect } from "react";

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const handleAnimateProgress = () => {
    const progressBars = document.querySelectorAll(".skills__progress--bar");
    progressBars.forEach((bar) => {
      bar.style.width = bar.dataset.progression;
    });
  };

  return (
    <div className="skills" id="skills">
      <div className="skills__presentation">
        <h2>
          <span>&#47;&#47;</span> SKILLS
        </h2>
        <div className="button__container">
          <button className="button__click" onClick={handleAnimateProgress}>
            PUSH ME
          </button>
        </div>
      </div>
      <div className="skills__details">
        <ul>
          {skills.map((skill) => (
            <div key={skill.id}>
              <li >{skill.name}</li>
              <div className="skills__details--progress">
                <div className="skills__progress">
                  <div
                    className="skills__progress--bar"
                    style={{ width: 0 }}
                    data-progression={skill.progression}
                  ></div>
                </div>
                <p data-aos="fade-left">{skill.progression}</p>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
