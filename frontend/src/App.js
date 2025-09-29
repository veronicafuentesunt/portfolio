import React, { useEffect, useState } from "react";
import ProjectCard from "./components/ProjectCard";

function App() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
  fetch("/projects")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => setProjects(data))
      .catch((err) => {
        console.error("Failed to fetch projects:", err);
        setError(err.message || "Failed to fetch");
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>Veronica Fuentes – Portfolio</h1>
      <p>Welcome to my coding journey: projects, experiments, and learning milestones.</p>
      <div style={{ marginTop: "1rem" }}>
        {loading && <p>Loading projects…</p>}
        {error && <p style={{ color: "crimson" }}>Error: {error}</p>}
        {!loading && !error && (
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            {projects.map((p, i) => (
              <ProjectCard key={i} title={p.title} description={p.description} link={p.link} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;