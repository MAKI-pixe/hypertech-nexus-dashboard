
import { useEffect, useRef } from 'react';
import { Github, Instagram, Linkedin, Youtube } from 'lucide-react';

const Index = () => {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animação de partículas flutuantes
    const createParticles = () => {
      if (!particlesRef.current) return;
      
      for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
          position: fixed;
          width: ${Math.random() * 4 + 1}px;
          height: ${Math.random() * 4 + 1}px;
          background: rgba(0, 255, 255, 0.8);
          border-radius: 50%;
          pointer-events: none;
          top: ${Math.random() * 100}vh;
          left: ${Math.random() * 100}vw;
          animation: float ${Math.random() * 3 + 2}s ease-in-out infinite alternate;
          z-index: 1;
        `;
        particlesRef.current.appendChild(particle);
      }
    };

    // Animação de contadores
    const animateCounters = () => {
      const counters = document.querySelectorAll('.counter');
      counters.forEach((counter) => {
        const target = parseInt(counter.getAttribute('data-target') || '0');
        const increment = target / 100;
        let current = 0;
        
        const updateCounter = () => {
          if (current < target) {
            current += increment;
            counter.textContent = Math.floor(current).toLocaleString();
            requestAnimationFrame(updateCounter);
          } else {
            counter.textContent = target.toLocaleString();
          }
        };
        
        setTimeout(updateCounter, Math.random() * 2000);
      });
    };

    // Animação de barras de progresso
    const animateProgress = () => {
      const progressBars = document.querySelectorAll('.progress-bar');
      progressBars.forEach((bar, index) => {
        const percentage = parseInt(bar.getAttribute('data-percentage') || '0');
        setTimeout(() => {
          (bar as HTMLElement).style.strokeDashoffset = `${450 - (450 * percentage) / 100}`;
        }, index * 500);
      });
    };

    // Scroll reveal animation
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1
    });

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    createParticles();
    animateCounters();
    animateProgress();

    return () => {
      if (particlesRef.current) {
        particlesRef.current.innerHTML = '';
      }
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const socialData = [
    {
      platform: 'Instagram',
      followers: 15420,
      engagement: 8.5,
      growth: '+12.3%',
      color: 'from-pink-500 to-rose-500',
      link: 'https://instagram.com/hypertech',
      icon: Instagram
    },
    {
      platform: 'YouTube',
      followers: 8930,
      engagement: 12.8,
      growth: '+24.7%',
      color: 'from-red-500 to-red-600',
      link: 'https://youtube.com/@hypertech',
      icon: Youtube
    },
    {
      platform: 'GitHub',
      followers: 5670,
      engagement: 15.2,
      growth: '+18.9%',
      color: 'from-gray-700 to-gray-900',
      link: 'https://github.com/hypertech',
      icon: Github
    },
    {
      platform: 'LinkedIn',
      followers: 3240,
      engagement: 9.7,
      growth: '+8.4%',
      color: 'from-blue-600 to-blue-700',
      link: 'https://linkedin.com/company/hypertech',
      icon: Linkedin
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Partículas flutuantes */}
      <div ref={particlesRef} className="fixed inset-0 pointer-events-none z-10"></div>
      
      {/* Gradientes radiais animados */}
      <div className="fixed inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Grid principal */}
      <div className="relative z-20 grid grid-cols-1 lg:grid-cols-4 gap-6 p-6 min-h-screen">
        
        {/* Painel lateral - Perfil */}
        <div className="lg:col-span-1 reveal">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 h-fit sticky top-6">
            <div className="text-center">
              {/* Avatar animado */}
              <div className="relative w-24 h-24 mx-auto mb-4">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full animate-spin"></div>
                <div className="absolute inset-1 bg-slate-800 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">HT</span>
                </div>
              </div>
              
              {/* Nome do clube */}
              <h1 className="text-2xl font-bold text-white mb-2 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                HYPERTECH
              </h1>
              
              {/* Bio */}
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                Clube de Tecnologia voltado para inovação, programação e desenvolvimento futurista. 
                Conectando mentes brilhantes no universo tech.
              </p>
              
              {/* Estatísticas gerais */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-black/20 rounded-lg p-3 border border-cyan-500/20">
                  <div className="text-cyan-400 text-xl font-bold counter" data-target="50">0</div>
                  <div className="text-gray-400 text-xs">Membros</div>
                </div>
                <div className="bg-black/20 rounded-lg p-3 border border-purple-500/20">
                  <div className="text-purple-400 text-xl font-bold counter" data-target="150">0</div>
                  <div className="text-gray-400 text-xs">Projetos</div>
                </div>
              </div>

              {/* Status online */}
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-sm">Online agora</span>
              </div>
            </div>
          </div>
        </div>

        {/* Cards de redes sociais */}
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
          {socialData.map((social, index) => {
            const IconComponent = social.icon;
            return (
              <div 
                key={social.platform}
                className={`reveal bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-2xl hover:shadow-${social.platform.toLowerCase()}/20 transition-all duration-500 hover:scale-105 hover:-translate-y-2 group`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Header do card */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${social.color} shadow-lg`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg">{social.platform}</h3>
                      <p className="text-gray-400 text-sm">Social Media</p>
                    </div>
                  </div>
                  <div className="text-green-400 font-bold text-sm bg-green-400/10 px-2 py-1 rounded-full">
                    {social.growth}
                  </div>
                </div>

                {/* Estatísticas principais */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-black/20 rounded-lg p-4 border border-white/10">
                    <div className="text-2xl font-bold text-white counter" data-target={social.followers}>
                      0
                    </div>
                    <div className="text-gray-400 text-sm">Seguidores</div>
                  </div>
                  <div className="bg-black/20 rounded-lg p-4 border border-white/10">
                    <div className="text-2xl font-bold text-white">{social.engagement}%</div>
                    <div className="text-gray-400 text-sm">Engajamento</div>
                  </div>
                </div>

                {/* Gráfico circular de engajamento */}
                <div className="relative w-20 h-20 mx-auto mb-6">
                  <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 150 150">
                    <circle
                      cx="75"
                      cy="75"
                      r="70"
                      stroke="rgba(255,255,255,0.1)"
                      strokeWidth="6"
                      fill="none"
                    />
                    <circle
                      cx="75"
                      cy="75"
                      r="70"
                      stroke="url(#gradient)"
                      strokeWidth="6"
                      fill="none"
                      strokeLinecap="round"
                      strokeDasharray="450"
                      strokeDashoffset="450"
                      className="progress-bar transition-all duration-2000 ease-out"
                      data-percentage={social.engagement * 6}
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#06b6d4" />
                        <stop offset="100%" stopColor="#8b5cf6" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{social.engagement}%</span>
                  </div>
                </div>

                {/* Gráfico de crescimento */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className="text-gray-400 text-sm">Crescimento mensal</span>
                  </div>
                  <div className="h-12 bg-black/20 rounded-lg p-2 border border-white/10 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-cyan-400/20 to-purple-500/20 rounded animate-pulse"></div>
                  </div>
                </div>

                {/* Botão Ver Perfil */}
                <a
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full py-3 px-4 bg-gradient-to-r ${social.color} text-white text-center font-bold rounded-xl hover:shadow-lg hover:shadow-${social.platform.toLowerCase()}/50 transition-all duration-300 transform hover:scale-105`}
                >
                  Ver Perfil
                </a>
              </div>
            );
          })}
        </div>
      </div>

      {/* Estilos adicionais */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .particle {
          box-shadow: 0 0 6px currentColor;
        }
        
        .reveal {
          opacity: 0;
          transform: translateY(50px);
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .reveal.revealed {
          opacity: 1;
          transform: translateY(0);
        }
        
        .counter {
          transition: all 0.3s ease;
        }
        
        @media (max-width: 768px) {
          .grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default Index;
