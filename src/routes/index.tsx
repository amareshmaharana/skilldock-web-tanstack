import { createFileRoute, Link } from "@tanstack/react-router";
import { Bot, Terminal } from "lucide-react";
import SkillCard from "#/components/SkillCard";
import { createServerFn } from "@tanstack/react-start";
import { getSkills } from "#/dataconnect-generated";
import { dataConnect } from "#/lib/firebase";
import { usePostHog } from "posthog-js/react";

const getSkillsFn = createServerFn({ method: "GET" }).handler(async () => {
  try {
    const { data } = await getSkills(dataConnect, {
      searchTerm: "",
      limit: 10,
    });

    return data.skills;
  } catch (error) {
    console.error("Error fetching skills:", error);
    return [];
  }
});

export const Route = createFileRoute("/")({
	component: App,
	loader: () => getSkillsFn(),
});

function App() {
  const posthog = usePostHog();

  const skills = Route.useLoaderData();
  // const skills = Array.isArray(loaderData) ? loaderData : loaderData?.skills ?? [];

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
          <Link
            to="/skills"
            className="btn-primary"
            onClick={() => posthog.capture("browse_registry_clicked")}
          >
            <Terminal size="16" />
            <span>Browse Registry</span>
          </Link>

          <Link
            to="/skills/new-skill"
            className="btn-secondary"
            onClick={() => posthog.capture("publish_skill_clicked")}
          >
            <Bot size="16" />
            <span>Publish Skill</span>
          </Link>
        </div>
      </section>

      {/* ++++++++ LATEST ++++++++ */}
      <section className="latest">
        <div className="space-y-2 text-center">
          <h2 className="text-4xl">
            Latest <span className="text-gradient">Innovations</span>
          </h2>

          <p>
            {" "}
            Discover the latest innovations in AI agent capabilities and stay
            up-to-date with the newest additions to our registry.
          </p>
        </div>

        <div>
          {skills.length > 0 ? (
            <div className="skills-grid">
              {skills.map((skill) => (
                <SkillCard key={skill.id} {...skill} />
              ))}
            </div>
          ) : (
            <p className="text-center font-bold">You got nothing to see here about the innovations.</p>
          )}
        </div>
      </section>
    </div>
  );
}
