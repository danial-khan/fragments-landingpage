"use client";

const Loader = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full backdrop-blur-sm flex items-center justify-center z-50">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-secondary border-opacity-75"></div>
    </div>
  );
};

export default Loader;
