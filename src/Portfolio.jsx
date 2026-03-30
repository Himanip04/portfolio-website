import React, { useEffect, useMemo, useState } from "react";

const PROFILE_PATH = "/profile.jpg";

const projects = [
  {
    title: "User Profile & Job Portal Application",
    desc:
      "Built a full-stack recruitment platform with authentication, job search filters, profile management, and notifications.",
    tech: "React Native · Spring Boot · PostgreSQL · MongoDB",
  },
  {
    title: "3D Demo App & Collaboration Tool",
    desc:
      "Created a collaboration experience with group and direct chat, interactive UI, and productivity-focused workflows.",
    tech: "React · Tailwind CSS · HTML",
  },
  {
    title: "Task Management Web Application",
    desc:
      "Implemented role-based access, auth flows, pagination, and create/edit task features with admin controls.",
    tech: "React · Material UI/Shadcn · Axios · Node.js · MongoDB",
  },
  {
    title: "Job Listing Portal",
    desc:
      "Added advanced filtering, search, sorting, infinite scroll, and CSV/PDF exports for a paginated jobs API.",
    tech: "Next.js · TypeScript · Tailwind CSS · shadcn/ui",
  },
  {
    title: "Dynamic Form Builder & Submissions System",
    desc:
      "Developed backend-driven dynamic forms with validation, submission handling, and server-side sortable tables.",
    tech: "React · TanStack Query/Form/Table · Tailwind CSS · Node.js",
  },
];

const slides = [
  {
    id: "intro",
    title: "Himani Pant",
    subtitle: "Full Stack Developer",
    body: "2+ years of experience building scalable web and mobile applications with React, React Native, Java, and Spring Boot.",
  },
  {
    id: "experience",
    title: "Experience",
    subtitle: "Associate Developer — Evon Technologies",
    body: "Jul 2023 – Aug 2025 · Delivered new product features, streamlined engineering workflows, and improved software quality through testing and debugging.",
    bullets: [
      "Contributed to feature development that improved product functionality.",
      "Reduced project delivery time by improving implementation workflows.",
      "Lowered error rates with thorough testing and debugging practices.",
    ],
  },
  {
    id: "projects",
    title: "Project Highlights",
    subtitle: "Selected work across web and mobile",
  },
  {
    id: "education",
    title: "Education",
    subtitle: "Academic Background",
    bullets: [
      "B.Tech in Computer Science · Uttarakhand Technical University (2020–2023)",
      "Diploma in Computer Science & Engineering · UBTER (2017–2020)",
    ],
  },
  {
    id: "skills",
    title: "Skills",
    subtitle: "Core technologies",
    bullets: [
      "Frontend: React.js, React Native, JavaScript, Tailwind CSS",
      "Backend: Java, Spring Boot, Node.js",
      "Databases: PostgreSQL, MongoDB",
      "Tools: Git, Agile delivery, debugging & optimization",
    ],
  },
  {
    id: "contact",
    title: "Contact",
    subtitle: "Let’s connect",
    bullets: [
      "Email: himanipant333@gmail.com",
      "Phone: +91-9193538464",
      "Location: Dehradun, India",
      "GitHub: github.com/Himanip04",
      "LinkedIn: linkedin.com/in/himani-pant-982a67223",
    ],
  },
];

export default function PortfolioSlides() {
  const [dark, setDark] = useState(() => {
    try {
      const savedTheme = localStorage.getItem("hp_theme");
      return savedTheme !== null ? JSON.parse(savedTheme) : true;
    } catch {
      return true;
    }
  });
  const [index, setIndex] = useState(0);

  const total = slides.length;

  const activeSlide = useMemo(() => slides[index], [index]);

  useEffect(() => {
    localStorage.setItem("hp_theme", JSON.stringify(dark));
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const goTo = (nextIndex) => setIndex(Math.max(0, Math.min(total - 1, nextIndex)));

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "ArrowRight" || e.key === "PageDown") goTo(index + 1);
      if (e.key === "ArrowLeft" || e.key === "PageUp") goTo(index - 1);
      if (e.key === "Home") goTo(0);
      if (e.key === "End") goTo(total - 1);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [index, total]);

  return (
    <div className={`slide-app ${dark ? "theme-dark" : "theme-light"}`}>
      <header className="deck-header">
        <p className="deck-progress">
          Slide {index + 1} / {total}
        </p>
        <div className="deck-controls">
          <button onClick={() => goTo(index - 1)} disabled={index === 0}>
            Previous
          </button>
          <button onClick={() => goTo(index + 1)} disabled={index === total - 1}>
            Next
          </button>
          <button onClick={() => setDark(!dark)}>{dark ? "Light" : "Dark"} Mode</button>
        </div>
      </header>

      <main className="slide-stage" aria-live="polite">
        <section key={activeSlide.id} className="slide-card">
          {activeSlide.id === "intro" && (
            <img src={PROFILE_PATH} alt="Himani Pant" className="avatar" />
          )}

          <h1>{activeSlide.title}</h1>
          {activeSlide.subtitle && <h2>{activeSlide.subtitle}</h2>}
          {activeSlide.body && <p className="lead">{activeSlide.body}</p>}

          {activeSlide.bullets && (
            <ul>
              {activeSlide.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}

          {activeSlide.id === "projects" && (
            <div className="project-grid">
              {projects.map((project) => (
                <article key={project.title}>
                  <h3>{project.title}</h3>
                  <p>{project.desc}</p>
                  <p className="tech">{project.tech}</p>
                </article>
              ))}
            </div>
          )}
        </section>
      </main>

      <nav className="dot-nav" aria-label="Slide selection">
        {slides.map((slide, dotIndex) => (
          <button
            key={slide.id}
            aria-label={`Go to ${slide.title}`}
            onClick={() => goTo(dotIndex)}
            className={dotIndex === index ? "active" : ""}
          />
        ))}
      </nav>
    </div>
  );
}
