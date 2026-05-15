import { Link } from "@tanstack/react-router";
import {
  ArrowBigUp,
  ArrowUpRight,
  Bookmark,
  Check,
  Copy,
  MessageSquare,
} from "lucide-react";
import { useState } from "react";
// import { usePostHog } from "@posthog/react";

interface SkillCardProps {
  skill: SkillRecord;
}

const SkillCard = ({ skill }: SkillCardProps) => {
  const [copied, setCopied] = useState(false);
//   const posthog = usePostHog();

  const category = skill.tags[0] ?? "General";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(skill.installCommand);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      // posthog.capture("install_command_copied", {
      //   skill_title: skill.title,
      //   skill_category: category,
      //   install_command: skill.installCommand,
      // });
    } catch {
      setCopied(false);
    }
  };

  return (
    <article className="skill-card">
      <Link
        to="/skills"
        tabIndex={-1}
        aria-label={`Open ${skill.title}`}
        className="overlay"
      />

      <div className="chrome">
        <div className="chrome-bar">
          <div className="lights">
            <div className="light red" />
            <div className="light amber" />
            <div className="light green" />
          </div>
          <div className="host">registry.sh</div>
        </div>
      </div>

      <div className="body">
        <div className="meta">
          <div className="author">
            <img
              src="/logo512.png"
              alt={`${skill.title} logo`}
              className="avatar"
            />
            <div className="author-copy">
              <p>{skill.authorEmail}</p>
              <p>
                {skill.createdAt
                  ? new Date(skill.createdAt).toLocaleDateString()
                  : "Unknown date"}
              </p>
            </div>
          </div>

          <p className="category">{skill.category}</p>
        </div>

        <div className="summary">
          <Link to="/skills" className="title-link">
            <h3>{skill.title}</h3>
          </Link>

          <p>{skill.description}</p>
        </div>

        <div className="command">
          <div className="command-copy">
            <span>{">_"}</span>
            <p>{skill.installCommand}</p>
          </div>
          <button
            type="button"
            className="copy"
            onClick={handleCopy}
            aria-label="Copy install command"
          >
            {copied ? <Check size={16} /> : <Copy size={16} />}
          </button>
        </div>

        <div className="footer">
          <div className="stats">
            <button type="button" className="upvote" disabled>
              <ArrowBigUp size={16} fill="currentColor" />
              <span>{skill.tags.length}</span>
            </button>

            <div className="comments">
              <MessageSquare size={14} />
              <span>{skill.authorEmail ? 1 : 0}</span>
            </div>
          </div>

          <div className="actions">
            <Link
              to="/skills"
              className="open"
              title={`Open ${skill.title}`}
            //   onClick={() =>
            //     posthog.capture("skill_opened", {
            //       skill_title: skill.title,
            //       skill_category: skill.category,
            //     })
            //   }
            >
              <span>Open</span>
              <ArrowUpRight size={14} />
            </Link>

            <button
              type="button"
              className="save"
              aria-label="Saved state"
              disabled
            >
              <Bookmark size={16} />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default SkillCard;
