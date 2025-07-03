
import { useEffect, useRef } from 'react';
import { Github, Instagram, Linkedin, Youtube } from 'lucide-react';

const Index = () => {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Criar partículas flutuantes
    const createParticles = () => {
      if (!particlesRef.current) return;
      
      for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'absolute bg-blue-400 rounded-full opacity-30 animate-pulse';
        particle.style.cssText = `
          width: ${Math.random() * 3 + 1}px;
          height: ${Math.random() * 3 + 1}px;
          top: ${Math.random() * 100}vh;
          left: ${Math.random() * 100}vw;
          animation-duration: ${Math.random() * 3 + 2}s;
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

    createParticles();
    animateCounters();

    return () => {
      if (particlesRef.current) {
        particlesRef.current.innerHTML = '';
      }
    };
  }, []);

  const socialData = [
    {
      platform: 'Instagram',
      followers: 15420,
      engagement: 85,
      growth: '+12.3%',
      color: 'from-blue-500 to-blue-700',
      borderColor: 'border-blue-500',
      link: 'https://instagram.com/hypertech',
      icon: Instagram
    },
    {
      platform: 'YouTube',
      followers: 8930,
      engagement: 92,
      growth: '+24.7%',
      color: 'from-blue-400 to-blue-600',
      borderColor: 'border-blue-400',
      link: 'https://youtube.com/@hypertech',
      icon: Youtube
    },
    {
      platform: 'GitHub',
      followers: 5670,
      engagement: 78,
      growth: '+18.9%',
      color: 'from-gray-600 to-black',
      borderColor: 'border-gray-600',
      link: 'https://github.com/hypertech',
      icon: Github
    },
    {
      platform: 'LinkedIn',
      followers: 3240,
      engagement: 67,
      growth: '+8.4%',
      color: 'from-blue-600 to-blue-800',
      borderColor: 'border-blue-600',
      link: 'https://linkedin.com/company/hypertech',
      icon: Linkedin
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 relative overflow-hidden">
      {/* Partículas de fundo */}
      <div ref={particlesRef} className="fixed inset-0 pointer-events-none z-10"></div>
      
      {/* Efeitos de fundo robóticos */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Grid lines robóticas */}
      <div className="fixed inset-0 opacity-10 pointer-events-none z-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-20 max-w-4xl mx-auto p-6">
        
        {/* Header do Perfil */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="relative inline-block mb-6">
            {/* Avatar robótico */}
            <div className="relative w-32 h-32 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full animate-spin"></div>
              <div className="absolute inset-2 bg-black rounded-full flex items-center justify-center border-2 border-blue-500">
                <div className="text-4xl font-bold text-blue-400">HT</div>
              </div>
              {/* Elementos robóticos */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-blue-400 rounded-full animate-pulse delay-500"></div>
            </div>
          </div>
          
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 mb-4">
            HYPERTECH
          </h1>
          
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Clube de Tecnologia Robótica • Inovação • Futuro • IA
          </p>
          
          {/* Estatísticas gerais */}
          <div className="flex justify-center gap-8 mb-8">
            <div className="bg-black/50 backdrop-blur-lg rounded-lg p-4 border border-blue-500/30">
              <div className="text-blue-400 text-2xl font-bold counter" data-target="127">0</div>
              <div className="text-gray-400 text-sm">Membros</div>
            </div>
            <div className="bg-black/50 backdrop-blur-lg rounded-lg p-4 border border-blue-500/30">
              <div className="text-blue-400 text-2xl font-bold counter" data-target="89">0</div>
              <div className="text-gray-400 text-sm">Projetos</div>
            </div>
            <div className="bg-black/50 backdrop-blur-lg rounded-lg p-4 border border-blue-500/30">
              <div className="text-blue-400 text-2xl font-bold counter" data-target="45">0</div>
              <div className="text-gray-400 text-sm">Robôs</div>
            </div>
          </div>

          {/* Status online */}
          <div className="flex items-center justify-center gap-2">
            <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
            <span className="text-blue-400 text-sm font-semibold">SISTEMA ONLINE</span>
          </div>
        </div>

        {/* Cards de redes sociais em coluna */}
        <div className="space-y-6">
          {socialData.map((social, index) => {
            const IconComponent = social.icon;
            return (
              <div 
                key={social.platform}
                className={`
                  bg-black/60 backdrop-blur-lg rounded-xl p-6 
                  border-2 ${social.borderColor} 
                  shadow-2xl hover:shadow-blue-500/50 
                  transition-all duration-500 hover:scale-105 
                  hover:-translate-y-2 group relative overflow-hidden
                `}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Efeito de circuito no fundo */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="1" fill="none" className="text-blue-400"/>
                    <circle cx="30" cy="30" r="10" stroke="currentColor" strokeWidth="1" fill="none" className="text-blue-400"/>
                    <line x1="40" y1="40" x2="50" y2="50" stroke="currentColor" strokeWidth="1" className="text-blue-400"/>
                  </svg>
                </div>

                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`p-4 rounded-xl bg-gradient-to-r ${social.color} shadow-lg relative`}>
                      <IconComponent className="w-8 h-8 text-white" />
                      {/* LED indicator */}
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-xl">{social.platform}</h3>
                      <p className="text-gray-400 text-sm">REDE SOCIAL</p>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-blue-400 font-bold text-lg bg-blue-400/10 px-3 py-1 rounded-full border border-blue-400/30">
                      {social.growth}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  {/* Seguidores */}
                  <div className="bg-black/40 rounded-lg p-4 border border-blue-500/20 text-center">
                    <div className="text-2xl font-bold text-blue-400 counter" data-target={social.followers}>
                      0
                    </div>
                    <div className="text-gray-400 text-xs">SEGUIDORES</div>
                  </div>
                  
                  {/* Engajamento */}
                  <div className="bg-black/40 rounded-lg p-4 border border-blue-500/20 text-center">
                    <div className="text-2xl font-bold text-blue-400">{social.engagement}%</div>
                    <div className="text-gray-400 text-xs">ENGAJAMENTO</div>
                  </div>
                  
                  {/* Status */}
                  <div className="bg-black/40 rounded-lg p-4 border border-blue-500/20 text-center">
                    <div className="text-2xl font-bold text-green-400">ATIVO</div>
                    <div className="text-gray-400 text-xs">STATUS</div>
                  </div>
                </div>

                {/* Barra de progresso robótica */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                    <span className="text-gray-400 text-sm">NÍVEL DE ATIVIDADE</span>
                  </div>
                  <div className="h-3 bg-black/60 rounded-full border border-blue-500/30 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full transition-all duration-2000 ease-out relative"
                      style={{ width: `${social.engagement}%` }}
                    >
                      <div className="absolute inset-0 bg-blue-400/50 animate-pulse rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Botão de acesso */}
                <a
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    block w-full py-4 px-6 bg-gradient-to-r ${social.color} 
                    text-white text-center font-bold rounded-lg 
                    hover:shadow-lg hover:shadow-blue-500/50 
                    transition-all duration-300 transform hover:scale-105
                    border border-blue-500/50 relative overflow-hidden
                  `}
                >
                  <span className="relative z-10">ACESSAR {social.platform.toUpperCase()}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-1000"></div>
                </a>
              </div>
            );
          })}
        </div>

        {/* Footer robótico */}
        <div className="text-center mt-12 pb-8">
          <div className="flex justify-center items-center gap-2 text-blue-400 text-sm">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <span>HYPERTECH © 2024 • TECNOLOGIA AVANÇADA</span>
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
