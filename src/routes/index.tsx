import { createFileRoute, Link } from "@tanstack/react-router";
import { Bot, Terminal } from "lucide-react";
import SkillCard from "#/components/SkillCard";
import dummySkills from "#/lib/dummy-skill";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <div id="home">
      {/* ++++++++ HERO ++++++++ */}
      <section className="hero">
        <div className="copy">
          <h1>
            Pioneering the global hub <br />
            <span className="text-gradient">for AI agent capabilities.</span>
          </h1>

          <p>
            We’re building a global hub for discovering, sharing, and showcasing
            AI agent capabilities - connecting developers and creators through
            agentic AI skills, workflows, and innovations.
          </p>
        </div>

        <div className="actions">
          <Link to="/skills" className="btn-primary">
            <Terminal size="16" />
            <span>Browse Registry</span>
          </Link>

          <Link to="/skills/new-skill" className="btn-secondary">
            <Bot size="16" />
            <span>Publish Skill</span>
          </Link>
        </div>
      </section>

      {/* ++++++++ LATEST ++++++++ */}
      <section className="latest">
        <div className="space-y-2">
          <h2>
            Latest <span className="text-gradient">Innovations</span>
          </h2>

          <p>
            {" "}
            Discover the latest innovations in AI agent capabilities and stay
            up-to-date with the newest additions to our registry.
          </p>
        </div>

        <div>
          {dummySkills.length > 0 ? (
            <div className="skills-grid">
              {dummySkills.map((skill) => (
                <SkillCard key={skill.id} skill={skill} />
              ))}
            </div>
          ) : (
            <p>You got nothing to see here about the innovations.</p>
          )}
        </div>
      </section>
    </div>
  );
}
