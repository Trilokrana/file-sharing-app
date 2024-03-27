import React from "react";

const ProgressBar = ({ progress }) => {
  const progressStyle = {
    width: `${progress}%`,
    transition: "width 0.2s ease-in-out", 
  };

  return (
    <div className="mt-8">
      <div>
        <span id="ProgressLabel" className="sr-only">
          Loading
        </span>
        <span
          role="progressbar"
          aria-labelledby="ProgressLabel"
          aria-valuenow={progress} // Dynamic value for aria-valuenow
          className="relative block rounded-full bg-gray-200"
        >
          <span className="absolute inset-0 flex items-center justify-center text-[10px]/4">
            {progress > 0 && <span className="text-white">{`${Number(progress).toFixed(0)}%`}</span>}
          </span>
          <span
            className="block h-4 rounded-full bg-indigo-600 text-center text-[10px]/4"
            style={progressStyle} 
          >
            {/* Moved the percentage inside the dynamic width element */}
          </span>
        </span>
      </div>
    </div>
  );
};

export default ProgressBar;
