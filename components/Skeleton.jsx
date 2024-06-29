import { Fragment } from "react";

export function Skeleton({ short, inline }) {
  return (
    <div
      className="skeleton"
      style={{
        width: short ? "15em" : undefined,
        display: inline ? "inline-block" : undefined,
      }}
    />
  );
}

export function SkeletonButton() {
  return <div className="skeleton skeleton-btn" />;
}

export function SkeletonInput() {
  return <div className="skeleton skeleton-input" />;
}

export function SkeletonList({ amount, children }) {
  return (
    <div className="space-y-2">
      {Array.from({ length: amount }).map((_, i) => (
        <Fragment key={i}>{children}</Fragment>
      ))}
    </div>
  );
}
