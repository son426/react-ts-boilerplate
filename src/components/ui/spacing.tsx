import React from "react";

interface SpacingProps {
  size: number;
}

const Spacing: React.FC<SpacingProps> = ({ size }) => {
  return <div style={{ height: size }} className="w-full flex-shrink-0" />;
};

export default Spacing;
