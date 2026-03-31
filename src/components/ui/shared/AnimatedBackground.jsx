import React from "react";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0 bg-black">
      <video
        autoPlay={true}
        loop={true}
        muted={true}
        playsInline={true}
        className="absolute inset-0 w-full h-full object-cover opacity-100" 
      >
        <source src="/background.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/20" />
    </div>
  );
}