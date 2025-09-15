import React from "react";

interface TopProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
}

const Top: React.FC<TopProps> = ({ title, subtitle }) => {
  return (
    <div>
      {typeof title === "string" ? (
        <h2 className="text-xl font-bold text-gray-900 whitespace-pre-wrap leading-tight ">
          {title}
        </h2>
      ) : (
        title
      )}

      {subtitle && (
        <p className="mt-2 text-sm text-base text-gray-500">{subtitle}</p>
      )}
    </div>
  );
};

export default Top;
