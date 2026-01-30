import './Display.css'

export default function Display() {
  const user = "Shashank"
  const skills = ["HTML", "CSS", "JS", "React"]

  return (
    <section className="display">
      <h1 className="greeting">Hello, {user}!</h1>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li key={index} className="skill-item">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  )
}