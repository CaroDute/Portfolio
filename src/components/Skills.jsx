import skills from "/public/skills.json";

const Skills = () => {

  const radius = 200;
  const centerX = 600;
  const centerY = 250;
  const angleIncrement = (2 * Math.PI) / skills.length;

  return (
    <div className="skills" id="skills">
      <div className="skills__presentation">
        <h2>
          <span>&#47;&#47;</span> SKILLS
        </h2>
      </div>
      <div className="skills__details">
        <div className="skills__details--images">
          {skills.map((skill, index) => (
            <div key={skill.id}>
              <img
                key={index}
                src={skill.img}
                alt={skill.name}
                style={{ animationDelay: `${index * 2}s` }}
              />
              {/* <p className="skills__details--name">{skill.name}</p> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
