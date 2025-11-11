"use client"

export function RoboticsBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* CSS 3D Robotics Background */}
      <div className="absolute inset-0 opacity-15">
        {/* Central rotating sphere */}
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2"
          style={{
            width: "300px",
            height: "300px",
            transform: "translate(-50%, -50%) perspective(1000px)",
            animation: "spin-slow 20s linear infinite",
          }}
        >
          <div
            className="w-full h-full border-2 border-primary rounded-full"
            style={{ boxShadow: "0 0 30px rgba(0, 255, 0, 0.4)" }}
          />
          <div
            className="absolute inset-0 border border-primary rounded-full"
            style={{
              transform: "rotateX(70deg)",
              boxShadow: "0 0 20px rgba(0, 255, 0, 0.3)",
            }}
          />
        </div>

        {/* Orbital nodes */}
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            width: "400px",
            height: "400px",
            animation: "spin-slow-reverse 25s linear infinite",
          }}
        >
          <div
            className="absolute w-3 h-3 bg-primary rounded-full"
            style={{
              top: "0",
              left: "50%",
              transform: "translate(-50%, -50%)",
              boxShadow: "0 0 15px rgba(0, 255, 0, 0.7)",
            }}
          />
          <div
            className="absolute w-3 h-3 bg-primary rounded-full"
            style={{
              bottom: "0",
              left: "50%",
              transform: "translate(-50%, 50%)",
              boxShadow: "0 0 15px rgba(0, 255, 0, 0.7)",
            }}
          />
          <div
            className="absolute w-3 h-3 bg-primary rounded-full"
            style={{
              top: "50%",
              left: "0",
              transform: "translate(-50%, -50%)",
              boxShadow: "0 0 15px rgba(0, 255, 0, 0.7)",
            }}
          />
          <div
            className="absolute w-3 h-3 bg-primary rounded-full"
            style={{
              top: "50%",
              right: "0",
              transform: "translate(50%, -50%)",
              boxShadow: "0 0 15px rgba(0, 255, 0, 0.7)",
            }}
          />
        </div>

        {/* Background grid effect */}
        <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.08 }}>
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" className="text-primary" />
        </svg>

        {/* Secondary nodes */}
        <div
          className="absolute bottom-1/4 right-1/4"
          style={{
            animation: "pulse 4s ease-in-out infinite",
          }}
        >
          <div className="w-2 h-2 bg-primary rounded-full" style={{ boxShadow: "0 0 12px rgba(0, 255, 0, 0.5)" }} />
        </div>
        <div
          className="absolute top-1/3 right-1/3"
          style={{
            animation: "pulse 5s ease-in-out infinite 1s",
          }}
        >
          <div className="w-2 h-2 bg-primary rounded-full" style={{ boxShadow: "0 0 12px rgba(0, 255, 0, 0.5)" }} />
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: translate(-50%, -50%) perspective(1000px) rotateX(0deg) rotateY(0deg);
          }
          to {
            transform: translate(-50%, -50%) perspective(1000px) rotateX(360deg) rotateY(360deg);
          }
        }

        @keyframes spin-slow-reverse {
          from {
            transform: rotateZ(0deg);
          }
          to {
            transform: rotateZ(-360deg);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  )
}
