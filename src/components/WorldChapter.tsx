import type { ReactNode } from "react";

type WorldChapterProps = {
  children: ReactNode;
  className: string;
  id: string;
  image: string;
  labelledBy: string;
};

export function WorldChapter({
  children,
  className,
  id,
  image,
  labelledBy,
}: WorldChapterProps) {
  return (
    <section
      className={`world-chapter ${className}`}
      id={id}
      aria-labelledby={labelledBy}
    >
      <div
        className="chapter-scene"
        style={{ backgroundImage: `url(${image})` }}
        aria-hidden="true"
      />
      <div className="chapter-panels">{children}</div>
    </section>
  );
}

