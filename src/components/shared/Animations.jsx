export const styles = `
  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(-10deg); }
    50% { transform: translateY(-15px) rotate(5deg); }
  }
  .animate-float {
    animation: float 3s ease-in-out infinite;
  }
  .animate-bounce-slow {
    animation: bounce 4s infinite;
  }
  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
  }
  @keyframes gradient-shift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  .animate-gradient {
    background-size: 400% 400%;
    animation: gradient-shift 15s ease infinite;
  }
  @keyframes fade-in-up {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  .animate-fade-in-up {
    animation: fade-in-up 0.8s ease-out forwards;
  }
  .animate-fade-in-up-delay-1 {
    animation: fade-in-up 0.8s ease-out 0.2s forwards;
    opacity: 0;
  }
  .animate-fade-in-up-delay-2 {
    animation: fade-in-up 0.8s ease-out 0.4s forwards;
    opacity: 0;
  }
  @keyframes grid-pulse {
    0%, 100% { opacity: 0.08; }
    50% { opacity: 0.16; }
  }
  @keyframes circuit-flow {
    0% { stroke-dashoffset: 1000; }
    100% { stroke-dashoffset: 0; }
  }
  .animate-circuit {
    stroke-dasharray: 100;
    animation: circuit-flow 20s linear infinite;
  }
  @keyframes glow {
    0%, 100% { filter: brightness(1) blur(2px); }
    50% { filter: brightness(1.2) blur(4px); }
  }
  .animate-glow {
    animation: glow 3s ease-in-out infinite;
  }
`;