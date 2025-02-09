import React, { useCallback } from 'react';
import { Sparkles } from 'lucide-react';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import ai from '../../assets/Ai.svg';

const Hero = ({ onGetStarted }) => {
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  const particlesConfig = {
    particles: {
      number: {
        value: 100,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: "#ffffff"
      },
      opacity: {
        value: 0.3,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: true,
          speed: 2,
          size_min: 0.1,
          sync: false
        }
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.2,
        width: 1
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "grab"
        },
        onclick: {
          enable: true,
          mode: "push"
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 140,
          line_linked: {
            opacity: 0.5
          }
        },
        push: {
          particles_nb: 4
        }
      }
    },
    retina_detect: true
  };

  return (
    <div className="relative overflow-hidden bg-[#0A66C2]">
      {/* Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesConfig}
        className="absolute inset-0"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A66C2]/80 via-[#0077E5]/80 to-[#0A66C2]/80 animate-gradient" />

      {/* Grid Overlay */}
      <div className="absolute inset-0" style={{ 
        backgroundImage: `
          radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px',
      }}>
        <div className="absolute inset-0 animate-glow" style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative pb-8 sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32 pt-24">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <main className="mt-10 max-w-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20">
              <div className="sm:text-center lg:text-left">
                <div className="text-sm inline-flex items-center bg-white/10 text-white rounded-full px-4 py-1 mb-4 animate-fade-in-up">
                  <span className="mr-2">✨</span>
                  Powered by AI
                </div>
                <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl animate-fade-in-up-delay-1">
                  <span className="block">Transform your</span>
                  <span className="block text-sky-200">Newsletter Game</span>
                </h1>
                <p className="mt-3 text-base text-sky-100 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 animate-fade-in-up-delay-2">
                  Create engaging newsletters in seconds with the power of AI. Stand out in your reader's inbox with personalized, compelling content.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start animate-fade-in-up-delay-2">
                  <div className="rounded-md shadow">
                    <button
                      onClick={onGetStarted}
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-sky-50 md:py-4 md:text-lg md:px-10 transition-all duration-300"
                    >
                      <Sparkles className="w-5 h-5 mr-2" />
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            </main>
            
            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 flex items-center justify-center mt-8 lg:mt-0">
              <div className="relative w-72 h-72 animate-bounce-slow">
                <div className="absolute inset-0 flex items-center justify-center">
                  <img src={ai} alt="Geto AI" className="object-contain" />
                </div>
                
                {/* Chat Bubble */}
                <div className="absolute -top-12 -right-8 bg-white p-4 rounded-xl shadow-lg animate-float">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;