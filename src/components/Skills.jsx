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
    <div className="skills">
      <div className="skills__presentation">
        <h2>
          <span>&#47;&#47;</span> SKILLS
        </h2>
        <div>
        <button className="button__click" onClick={handleAnimateProgress}>
          PUSH ME
        </button>
        </div>
      </div>
      <ul>
        {skills.map((skill) => (
          <li key={skill.id}>
            {skill.name}
            <div className="skills__progress">
              <div
                className="skills__progress--bar"
                style={{ width: 0 }}
                data-progression={skill.progression}
              ></div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
