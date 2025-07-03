
import { useEffect, useRef } from 'react';
import { Github, Instagram, Linkedin, Youtube, Send, MessageCircle, Zap } from 'lucide-react';

const Index = () => {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Criar partículas flutuantes
    const createParticles = () => {
      if (!particlesRef.current) return;
      
      for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'absolute bg-blue-400 rounded-full opacity-30 animate-pulse';
        particle.style.cssText = `
          width: ${Math.random() * 4 + 2}px;
          height: ${Math.random() * 4 + 2}px;
          top: ${Math.random() * 100}vh;
          left: ${Math.random() * 100}vw;
          animation-duration: ${Math.random() * 4 + 2}s;
          animation-delay: ${Math.random() * 2}s;
        `;
        particlesRef.current.appendChild(particle);
      }
    };

    const animateCounters = () => {
      const counters = document.querySelectorAll('.counter');
      counters.forEach((counter) => {
        const target = parseInt(counter.getAttribute('data-target') || '0');
        const increment = target / 150;
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
        
        setTimeout(updateCounter, Math.random() * 3000);
      });
    };

    // Animação de circuitos robóticos
    const createCircuits = () => {
      const circuits = document.querySelectorAll('.circuit-line');
      circuits.forEach((circuit, index) => {
        setTimeout(() => {
          circuit.classList.add('animate-pulse');
        }, index * 500);
      });
    };

    createParticles();
    animateCounters();
    createCircuits();

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
      bgGlow: 'shadow-blue-500/30',
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
      bgGlow: 'shadow-blue-400/30',
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
      bgGlow: 'shadow-gray-600/30',
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
      bgGlow: 'shadow-blue-600/30',
      link: 'https://linkedin.com/company/hypertech',
      icon: Linkedin
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 relative overflow-hidden">
      {/* Partículas de fundo aprimoradas */}
      <div ref={particlesRef} className="fixed inset-0 pointer-events-none z-10"></div>
      
      {/* Efeitos de fundo robóticos aprimorados */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-2xl animate-pulse delay-500"></div>
      </div>

      {/* Grid lines robóticas aprimoradas */}
      <div className="fixed inset-0 opacity-15 pointer-events-none z-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.4) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}></div>
        
        {/* Linhas de circuito */}
        <div className="circuit-line absolute top-1/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-50"></div>
        <div className="circuit-line absolute top-3/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-50"></div>
        <div className="circuit-line absolute left-1/4 top-0 w-0.5 h-full bg-gradient-to-b from-transparent via-blue-400 to-transparent opacity-50"></div>
        <div className="circuit-line absolute left-3/4 top-0 w-0.5 h-full bg-gradient-to-b from-transparent via-blue-400 to-transparent opacity-50"></div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto p-6">
        
        {/* Header do Perfil aprimorado */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="relative inline-block mb-8">
            {/* Avatar robótico aprimorado */}
            <div className="relative w-40 h-40 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 rounded-full animate-spin slow"></div>
              <div className="absolute inset-3 bg-black rounded-full flex items-center justify-center border-4 border-blue-500">
                <div className="text-5xl font-bold text-blue-400 animate-pulse">HT</div>
              </div>
              
              {/* Elementos robóticos aprimorados */}
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-blue-500 rounded-full animate-pulse flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-blue-400 rounded-full animate-pulse delay-500"></div>
              <div className="absolute top-1/2 -right-8 w-4 h-4 bg-blue-300 rounded-full animate-ping delay-1000"></div>
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-blue-300 rounded-full animate-ping delay-1500"></div>
              
              {/* Anel orbital */}
              <div className="absolute inset-0 border-2 border-blue-400/30 rounded-full animate-spin" style={{ animationDuration: '10s' }}></div>
            </div>
          </div>
          
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 mb-6 animate-pulse">
            HYPERTECH
          </h1>
          
          <p className="text-gray-300 text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
            🤖 Clube de Tecnologia Robótica • Inovação • Futuro • IA • Desenvolvimento 🚀
          </p>
          
          {/* Estatísticas gerais aprimoradas */}
          <div className="flex justify-center gap-12 mb-10">
            <div className="bg-black/60 backdrop-blur-lg rounded-xl p-6 border-2 border-blue-500/40 shadow-2xl shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-500 hover:scale-105">
              <div className="text-blue-400 text-3xl font-bold counter" data-target="127">0</div>
              <div className="text-gray-400 text-sm">MEMBROS ATIVOS</div>
              <div className="w-full h-1 bg-black/60 rounded-full mt-2 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full animate-pulse" style={{ width: '85%' }}></div>
              </div>
            </div>
            <div className="bg-black/60 backdrop-blur-lg rounded-xl p-6 border-2 border-blue-500/40 shadow-2xl shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-500 hover:scale-105">
              <div className="text-blue-400 text-3xl font-bold counter" data-target="89">0</div>
              <div className="text-gray-400 text-sm">PROJETOS FINALIZADOS</div>
              <div className="w-full h-1 bg-black/60 rounded-full mt-2 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full animate-pulse" style={{ width: '92%' }}></div>
              </div>
            </div>
            <div className="bg-black/60 backdrop-blur-lg rounded-xl p-6 border-2 border-blue-500/40 shadow-2xl shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-500 hover:scale-105">
              <div className="text-blue-400 text-3xl font-bold counter" data-target="45">0</div>
              <div className="text-gray-400 text-sm">ROBÔS CONSTRUÍDOS</div>
              <div className="w-full h-1 bg-black/60 rounded-full mt-2 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full animate-pulse" style={{ width: '78%' }}></div>
              </div>
            </div>
          </div>

          {/* Status online aprimorado */}
          <div className="flex items-center justify-center gap-3 mb-12">
            <div className="w-4 h-4 bg-blue-400 rounded-full animate-ping"></div>
            <span className="text-blue-400 text-lg font-semibold tracking-wider">SISTEMA ONLINE • CONECTADO</span>
            <div className="w-4 h-4 bg-blue-400 rounded-full animate-ping"></div>
          </div>
        </div>

        {/* Cards de redes sociais em grid horizontal */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-blue-400 mb-8 animate-pulse">REDES SOCIAIS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {socialData.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <div 
                  key={social.platform}
                  className={`
                    bg-black/70 backdrop-blur-xl rounded-2xl p-6 
                    border-2 ${social.borderColor} 
                    shadow-2xl ${social.bgGlow} hover:shadow-2xl
                    transition-all duration-700 hover:scale-110 
                    hover:-translate-y-4 group relative overflow-hidden
                    animate-fade-in
                  `}
                  style={{ animationDelay: `${index * 0.3}s` }}
                >
                  {/* Efeito de circuito no fundo */}
                  <div className="absolute top-0 right-0 w-24 h-24 opacity-10">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="2" fill="none" className="text-blue-400 animate-spin" style={{ animationDuration: '8s' }}/>
                      <circle cx="30" cy="30" r="10" stroke="currentColor" strokeWidth="1" fill="none" className="text-blue-400 animate-pulse"/>
                      <line x1="40" y1="40" x2="50" y2="50" stroke="currentColor" strokeWidth="1" className="text-blue-400"/>
                      <circle cx="70" cy="70" r="5" stroke="currentColor" strokeWidth="1" fill="none" className="text-blue-400 animate-ping"/>
                    </svg>
                  </div>

                  <div className="flex flex-col items-center text-center mb-6">
                    <div className={`p-4 rounded-2xl bg-gradient-to-r ${social.color} shadow-xl relative mb-4 group-hover:animate-bounce`}>
                      <IconComponent className="w-8 h-8 text-white" />
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
                    </div>
                    <h3 className="text-white font-bold text-xl mb-2">{social.platform}</h3>
                    <div className="text-blue-400 font-bold text-lg bg-blue-400/10 px-4 py-2 rounded-full border border-blue-400/30 animate-pulse">
                      {social.growth}
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    {/* Seguidores */}
                    <div className="bg-black/50 rounded-xl p-4 border border-blue-500/30 text-center">
                      <div className="text-2xl font-bold text-blue-400 counter" data-target={social.followers}>
                        0
                      </div>
                      <div className="text-gray-400 text-sm">SEGUIDORES</div>
                    </div>
                    
                    {/* Engajamento */}
                    <div className="bg-black/50 rounded-xl p-4 border border-blue-500/30 text-center">
                      <div className="text-2xl font-bold text-blue-400">{social.engagement}%</div>
                      <div className="text-gray-400 text-sm">ENGAJAMENTO</div>
                    </div>
                  </div>

                  {/* Barra de progresso robótica */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                      <span className="text-gray-400 text-sm">ATIVIDADE</span>
                    </div>
                    <div className="h-3 bg-black/60 rounded-full border border-blue-500/30 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full transition-all duration-3000 ease-out relative"
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
                      text-white text-center font-bold rounded-xl 
                      hover:shadow-2xl hover:shadow-blue-500/50 
                      transition-all duration-500 transform hover:scale-105
                      border border-blue-500/50 relative overflow-hidden
                      group-hover:animate-pulse
                    `}
                  >
                    <span className="relative z-10">ACESSAR {social.platform.toUpperCase()}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-1000"></div>
                  </a>
                </div>
              );
            })}
          </div>
        </div>

        {/* Seção de Mensagens */}
        <div className="bg-black/70 backdrop-blur-xl rounded-2xl p-8 border-2 border-blue-500/40 shadow-2xl shadow-blue-500/20 mb-12">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-4 mb-4">
              <MessageCircle className="w-8 h-8 text-blue-400 animate-bounce" />
              <h2 className="text-3xl font-bold text-blue-400">ENVIE SUA MENSAGEM</h2>
              <MessageCircle className="w-8 h-8 text-blue-400 animate-bounce" />
            </div>
            <p className="text-gray-300 text-lg">Entre em contato conosco! Queremos ouvir suas ideias sobre tecnologia e robótica.</p>
          </div>

          <form className="max-w-2xl mx-auto space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-blue-400 font-semibold mb-2">NOME</label>
                <input 
                  type="text" 
                  className="w-full p-4 bg-black/60 border-2 border-blue-500/30 rounded-xl text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none transition-all duration-300 hover:border-blue-500/50"
                  placeholder="Seu nome completo"
                />
              </div>
              <div>
                <label className="block text-blue-400 font-semibold mb-2">EMAIL</label>
                <input 
                  type="email" 
                  className="w-full p-4 bg-black/60 border-2 border-blue-500/30 rounded-xl text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none transition-all duration-300 hover:border-blue-500/50"
                  placeholder="seu@email.com"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-blue-400 font-semibold mb-2">ASSUNTO</label>
              <input 
                type="text" 
                className="w-full p-4 bg-black/60 border-2 border-blue-500/30 rounded-xl text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none transition-all duration-300 hover:border-blue-500/50"
                placeholder="Assunto da mensagem"
              />
            </div>
            
            <div>
              <label className="block text-blue-400 font-semibold mb-2">MENSAGEM</label>
              <textarea 
                rows={6}
                className="w-full p-4 bg-black/60 border-2 border-blue-500/30 rounded-xl text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none transition-all duration-300 hover:border-blue-500/50 resize-none"
                placeholder="Escreva sua mensagem aqui... Conte-nos sobre seus projetos, ideias ou como podemos colaborar!"
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full py-4 px-8 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 transform hover:scale-105 border border-blue-500/50 relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                <Send className="w-5 h-5" />
                ENVIAR MENSAGEM
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-1000"></div>
            </button>
          </form>
        </div>

        {/* Footer robótico */}
        <div className="text-center pb-8">
          <div className="flex justify-center items-center gap-4 text-blue-400 text-lg mb-4">
            <div className="w-3 h-3 bg-blue-400 rounded-full animate-ping"></div>
            <span>HYPERTECH © 2024 • TECNOLOGIA AVANÇADA • FUTURO HOJE</span>
            <div className="w-3 h-3 bg-blue-400 rounded-full animate-ping"></div>
          </div>
          <div className="text-gray-400 text-sm">
            Construindo o futuro com tecnologia e inovação 🚀
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
