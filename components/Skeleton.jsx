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
    <div className="px-3 grid gap-3 grid-cols-[repeat(auto-fill,minmax(400px,1fr))]  ">
      {Array.from({ length: amount }).map((_, i) => (
        <Fragment key={i}>{children}</Fragment>
      ))}
    </div>
  );
}
