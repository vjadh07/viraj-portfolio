import type { CSSProperties, ReactNode } from "react";

type PaperProps = {
  children: ReactNode;
  className?: string;
  tilt?: number;
};

export function Paper({ children, className = "", tilt = 0 }: PaperProps) {
  return (
    <div
      className={`paper ${className}`}
      style={{ "--tilt": `${tilt}deg` } as CSSProperties}
    >
      {children}
    </div>
  );
}

export function Tape({ className = "" }: { className?: string }) {
  return <span className={`tape ${className}`} aria-hidden="true" />;
}

export function CloudScrap({ className = "" }: { className?: string }) {
  return (
    <span className={`cloud-scrap ${className}`} aria-hidden="true">
      <span />
    </span>
  );
}

