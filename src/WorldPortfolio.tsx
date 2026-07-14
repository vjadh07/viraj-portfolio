import {
  ArrowDownRight,
  ArrowUpRight,
  Camera,
  Code,
  FilmSlate,
  GithubLogo,
  Heart,
  MusicNotes,
  Needle,
  Scissors,
  TerminalWindow,
  TShirt,
} from "@phosphor-icons/react";
import { Paper, Tape } from "./components/CollagePieces";
import { SiteNav } from "./components/SiteNav";
import { WorldChapter } from "./components/WorldChapter";
import {
  clothingSlots,
  codeProjects,
  movies,
  personalPhotos,
  profile,
  songs,
  stylePrinciples,
  techGroups,
} from "./data/portfolio";

function PhotoPlaceholder({
  title,
  note,
  kind,
}: {
  title: string;
  note: string;
  kind: "clothing" | "personal";
}) {
  return (
    <figure className="photo-slot">
      <div className="photo-slot__frame">
        {kind === "clothing" ? (
          <TShirt aria-hidden="true" />
        ) : (
          <Camera aria-hidden="true" />
        )}
        <span>Add your photo</span>
      </div>
      <figcaption>
        <strong>{title}</strong>
        <span>{note}</span>
      </figcaption>
    </figure>
  );
}

export function WorldPortfolio() {
  return (
    <main className="world-portfolio" id="home">
      <a className="skip-link" href="#projects">
        Skip to projects
      </a>
      <SiteNav />

      <WorldChapter
        id="code"
        className="chapter-code"
        image="/assets/meadow-world.jpg"
        labelledBy="code-title"
      >
        <div className="chapter-panel code-intro-panel">
          <Paper className="code-hero-paper" tilt={-1.2}>
            <Tape className="tape-wide" />
            <p className="chapter-kicker">Computer science</p>
            <h1 id="code-title">{profile.name}</h1>
            <h2>{profile.codeTitle}</h2>
            <p>{profile.codeIntro}</p>
            <a className="chapter-cta" href="#projects">
              See projects <ArrowDownRight aria-hidden="true" />
            </a>
          </Paper>

          <Paper className="code-side-note" tilt={3.2}>
            <Code aria-hidden="true" />
            <p>Software can be rigorous and still feel personal.</p>
          </Paper>
        </div>

        <div className="chapter-panel code-project-panel" id="projects">
          <Paper className="project-ledger" tilt={0.4}>
            <div className="paper-heading">
              <TerminalWindow aria-hidden="true" />
              <div>
                <h2>Things I build</h2>
                <p>Replace these prompts with your three strongest CS projects.</p>
              </div>
            </div>

            <div className="code-project-list">
              {codeProjects.map((project, index) => (
                <article className={`code-project code-project-${index + 1}`} key={project.title}>
                  <div>
                    <p className="project-stack">{project.stack}</p>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <a href="#contact">
                      {project.linkLabel} <ArrowUpRight aria-hidden="true" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </Paper>
        </div>

        <div className="chapter-panel code-toolkit-panel">
          <Paper className="toolkit-paper" tilt={-1.5}>
            <GithubLogo aria-hidden="true" />
            <h2>The working toolkit</h2>
            <div className="toolkit-groups">
              {techGroups.map((group) => (
                <section key={group.title}>
                  <h3>{group.title}</h3>
                  <ul>
                    {group.items.map((item, itemIndex) => (
                      <li key={`${group.title}-${itemIndex}`}>{item}</li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </Paper>
        </div>
      </WorldChapter>

      <WorldChapter
        id="clothing"
        className="chapter-clothing"
        image="/assets/alpine-world.jpg"
        labelledBy="clothing-title"
      >
        <div className="chapter-panel clothing-intro-panel">
          <Paper className="clothing-title-paper" tilt={0.9}>
            <Tape className="tape-side" />
            <TShirt aria-hidden="true" />
            <h2 id="clothing-title">What I wear is part of what I design.</h2>
            <p>{profile.clothingIntro}</p>
          </Paper>

          <div className="clothing-arrow" aria-hidden="true">
            <Needle />
          </div>
        </div>

        <div className="chapter-panel clothing-gallery-panel">
          <Paper className="clothing-gallery-paper" tilt={-0.6}>
            <div className="paper-heading clothing-heading">
              <Scissors aria-hidden="true" />
              <div>
                <h2>Looks, pieces, process</h2>
                <p>Your photos will turn this chapter into a real visual diary.</p>
              </div>
            </div>
            <div className="clothing-photo-grid">
              {clothingSlots.map((slot) => (
                <PhotoPlaceholder key={slot.title} {...slot} kind="clothing" />
              ))}
            </div>
          </Paper>
        </div>

        <div className="chapter-panel style-notes-panel">
          <Paper className="style-notes-paper" tilt={1.1}>
            <h2>Why clothing keeps my attention</h2>
            <div className="style-principles">
              {stylePrinciples.map((principle) => (
                <article key={principle.title}>
                  <h3>{principle.title}</h3>
                  <p>{principle.body}</p>
                </article>
              ))}
            </div>
          </Paper>
        </div>
      </WorldChapter>

      <WorldChapter
        id="life"
        className="chapter-life"
        image="/assets/garden-sunset-world.jpg"
        labelledBy="life-title"
      >
        <div className="chapter-panel life-intro-panel">
          <Paper className="life-title-paper" tilt={-1.1}>
            <Heart weight="fill" aria-hidden="true" />
            <h2 id="life-title">The rest of the picture</h2>
            <p>{profile.lifeIntro}</p>
          </Paper>
        </div>

        <div className="chapter-panel life-gallery-panel">
          <div className="life-photo-wall">
            {personalPhotos.map((slot, index) => (
              <Paper
                className={`life-photo-paper life-photo-paper-${index + 1}`}
                tilt={index === 1 ? 1.8 : -1.3}
                key={slot.title}
              >
                <PhotoPlaceholder {...slot} kind="personal" />
              </Paper>
            ))}
          </div>
        </div>

        <div className="chapter-panel favorites-panel">
          <Paper className="music-paper" tilt={-2.1}>
            <MusicNotes aria-hidden="true" />
            <h2>Current rotation</h2>
            <ol>
              {songs.map((song) => (
                <li key={song}>{song}</li>
              ))}
            </ol>
          </Paper>

          <Paper className="movies-paper" tilt={1.9}>
            <FilmSlate aria-hidden="true" />
            <h2>Films I keep close</h2>
            <ul>
              {movies.map((movie) => (
                <li key={movie}>{movie}</li>
              ))}
            </ul>
          </Paper>
        </div>

        <div className="chapter-panel contact-panel" id="contact">
          <Paper className="contact-paper-unified" tilt={-0.5}>
            <h2>There’s more to add.</h2>
            <p>
              Send the real projects, clothing photos, songs, movies, and moments. This structure is ready for them.
            </p>
            <a className="chapter-cta life-cta" href={`mailto:${profile.email}`}>
              {profile.email} <ArrowUpRight aria-hidden="true" />
            </a>
          </Paper>
        </div>
      </WorldChapter>
    </main>
  );
}
