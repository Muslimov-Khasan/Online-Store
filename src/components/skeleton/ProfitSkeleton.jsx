import React, { memo } from "react";
import "./ProfitSkeleton.scss";

function ProfitSkeleton() {
  return (
    <div className="profit__skeleton-wrapper">
      {new Array(20).fill("").map((_, inx) => (
        <div key={inx} className="profit__skeleton-item">
          <div className="profit__skeleton-line"></div>
          <div className="profit__skeleton-line"></div>
          <div className="profit__skeleton-line"></div>
        </div>
      ))}
    </div>
  );
}

export default memo(ProfitSkeleton);