import Styles from "../styles/Sections.module.css";
import {
  aboutHighlights,
  skillGroups,
  competencies,
  strengths,
  projects,
  experience,
  contact,
} from "../data/portfolio";

export default function Sections() {
  return (
    <div className={Styles.sections}>
      <section className={Styles.about} id="about">
        <p className={Styles.kicker}>A LITTLE ABOUT ME</p>
        <h2>Curious by nature. Always learning.</h2>
        <p className={Styles.lead}>
          I&apos;m an AI-assisted developer based in Manila, Philippines, with
          hands-on experience building web and mobile applications. I use AI
          coding tools to speed up development, implement features, troubleshoot
          issues, and turn ideas into working apps.
        </p>
        <p className={Styles.lead}>
          I&apos;m comfortable across frontend development, backend integration,
          APIs, databases, and version control, and I like understanding how
          things work and building experiences that feel simple and intuitive.
        </p>
        <dl className={Styles.facts}>
          {aboutHighlights.map((fact) => (
            <div key={fact.label}>
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className={Styles.stack} id="stack">
        <p className={Styles.kicker}>TOOLS I WORK WITH</p>
        <h2>Tech stack</h2>
        <div className={Styles.skillGroups}>
          {skillGroups.map((group) => (
            <div key={group.title} className={Styles.skillGroup}>
              <h3>{group.title}</h3>
              <div className={Styles.skills}>
                {group.items.map((item) => <span key={item}>{item}</span>)}
              </div>
            </div>
          ))}
        </div>

        <h3 className={Styles.subheading}>What I can do</h3>
        <ul className={Styles.chipList}>
          {competencies.map((item) => <li key={item}>{item}</li>)}
        </ul>

        <h3 className={Styles.subheading}>How I work</h3>
        <ul className={Styles.chipList}>
          {strengths.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>

      <section className={Styles.projects} id="projects">
        <p className={Styles.kicker}>SELECTED WORK</p>
        <h2>Projects</h2>
        <p className={Styles.projectsIntro}>
          A collection of things I&apos;ve designed, developed, and built.
        </p>

        <div className={Styles.projectGrid}>
          {projects.map((project) => (
            <article key={project.title} className={Styles.projectCard}>
              <span className={Styles.projectType}>{project.type}</span>
              <h3>{project.title}</h3>
              <span className={Styles.projectSubtitle}>{project.subtitle}</span>
              <p>{project.description}</p>
              <ul className={Styles.projectHighlights}>
                {project.highlights.map((point) => <li key={point}>{point}</li>)}
              </ul>
              <div className={Styles.projectTags}>
                {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
              <a href={project.href} target="_blank" rel="noreferrer">
                {project.linkLabel}
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className={Styles.experience} id="experience">
        <p className={Styles.kicker}>WHERE I&apos;VE WORKED</p>
        <h2>Experience</h2>
        <p className={Styles.projectsIntro}>
          Before moving into development, I spent years in roles built on
          accuracy, structure, and steady delivery, and those habits carry into
          how I build.
        </p>
        <ol className={Styles.timeline}>
          {experience.map((job) => (
            <li key={job.role} className={Styles.job}>
              <h3>{job.role}</h3>
              <span className={Styles.company}>{job.company}</span>
              <ul>
                {job.points.map((point) => <li key={point}>{point}</li>)}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      <section className={Styles.contact} id="contact">
        <p className={Styles.kicker}>HAVE AN IDEA?</p>
        <h2>Let&apos;s make something useful.</h2>
        <p>
          Want to collaborate or talk about a project? Send me a message or find
          me on GitHub.
        </p>
        <div className={Styles.contactLinks}>
          <a href={`mailto:${contact.email}`}>
            Email me <span aria-hidden="true">↗</span>
          </a>
          <a
            className={Styles.secondaryLink}
            href={contact.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub <span aria-hidden="true">↗</span>
          </a>
        </div>
        <p className={Styles.contactDetails}>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
          <span aria-hidden="true"> · </span>
          <a href={`tel:${contact.phoneHref}`}>{contact.phone}</a>
        </p>
      </section>

      <footer className={Styles.footer}>
        <span>© {new Date().getFullYear()} Matthew Cho</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </div>
  );
}
