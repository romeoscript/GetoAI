import React, { useState, useCallback } from 'react';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { 
  Sparkles, 
  Send, 
  Wand2, 
  Settings, 
  ChevronDown,
  X,
  Mail,
  Zap,
  Users,
  TrendingUp
} from 'lucide-react';
import ai from '../assets/ai.svg';

const Newsletter = ({ isOpen, onClose }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tone, setTone] = useState('professional');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => setIsGenerating(false), 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl w-full relative">
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
        >
          <X className="w-6 h-6" />
        </button>
        
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800">Create Your Newsletter</h2>
            <p className="text-gray-600">Generate engaging content in seconds</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Newsletter Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              placeholder="Enter your newsletter title..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Content Ideas
            </label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition h-32"
              placeholder="Enter your content ideas..."
            />
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tone
              </label>
              <div className="relative">
                <select
                  value={tone}
                  onChange={(e) => setTone(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition appearance-none"
                >
                  <option value="professional">Professional</option>
                  <option value="casual">Casual</option>
                  <option value="friendly">Friendly</option>
                  <option value="formal">Formal</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>
          </div>

          <button
            onClick={handleGenerate}
            className="w-full bg-blue-600 text-white py-4 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-blue-700 transition"
          >
            {isGenerating ? (
              <>
                <Wand2 className="w-5 h-5 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Generate Newsletter
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
    <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
      <Icon className="w-6 h-6 text-blue-600" />
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Navbar = () => (
  <nav className="bg-white/80 backdrop-blur-md fixed w-full z-50 shadow-sm">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        <div className="flex-shrink-0 flex items-center">
          <Mail className="h-8 w-8 text-blue-600" />
          <span className="ml-2 text-xl font-bold text-gray-900">Geto AI</span>
        </div>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300 flex items-center gap-2">
          <Sparkles className="w-5 h-5" />
          Get Started
        </button>
      </div>
    </div>
  </nav>
);

const GetoAI = () => {
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
  // Add custom animation classes
  const styles = `
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

  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <style>{styles}</style>
      <Navbar />
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-[#0A66C2] animate-gradient">
        {/* Grid Background */}
        <div className="absolute inset-0 animate-grid" style={{ 
          backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }} />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A66C2] via-[#0077E5] to-[#0A66C2]" />

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
                        onClick={() => setIsNewsletterOpen(true)}
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
                  <img src={ai} alt="Geto AI"  />
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

      {/* Features Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Why Choose Geto AI?
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Supercharge your newsletter creation process
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <FeatureCard
                icon={Zap}
                title="Lightning Fast"
                description="Generate complete newsletters in seconds, not hours. Save time and focus on what matters."
              />
              <FeatureCard
                icon={Users}
                title="Audience Focused"
                description="AI-powered content that resonates with your specific audience and keeps them engaged."
              />
              <FeatureCard
                icon={TrendingUp}
                title="Better Results"
                description="Increase open rates and engagement with professionally crafted newsletters."
              />
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Modal */}
      <Newsletter 
        isOpen={isNewsletterOpen} 
        onClose={() => setIsNewsletterOpen(false)} 
      />
    </div>
  );
};

export default GetoAI;