import React, { useState } from 'react';
import { 
  Calendar, 
  CheckCircle, 
  Star, 
  Users, 
  Zap, 
  Shield, 
  Smartphone, 
  TrendingUp,
  Clock,
  Target,
  Award,
  ArrowRight,
  Play,
  Check,
  X,
  Menu
} from 'lucide-react';

export const LandingPage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<'basic' | 'pro' | 'premium'>('pro');

  const features = [
    {
      icon: <Target className="h-8 w-8 text-blue-500" />,
      title: "Organização Inteligente",
      description: "Sistema avançado de categorização e priorização que se adapta ao seu estilo de vida"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-green-500" />,
      title: "Análise de Progresso",
      description: "Relatórios detalhados e insights sobre sua produtividade e evolução diária"
    },
    {
      icon: <Clock className="h-8 w-8 text-purple-500" />,
      title: "Gestão de Tempo",
      description: "Estimativas precisas de tempo e cronômetro integrado para máxima eficiência"
    },
    {
      icon: <Smartphone className="h-8 w-8 text-orange-500" />,
      title: "Multiplataforma",
      description: "Acesse suas tarefas em qualquer dispositivo com sincronização em tempo real"
    },
    {
      icon: <Shield className="h-8 w-8 text-red-500" />,
      title: "Dados Seguros",
      description: "Criptografia de ponta e backup automático para proteger suas informações"
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-500" />,
      title: "Interface Rápida",
      description: "Design otimizado para velocidade com carregamento instantâneo"
    }
  ];

  const testimonials = [
    {
      name: "Maria Silva",
      role: "Empresária",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      content: "Revolucionou minha produtividade! Consegui organizar minha rotina e aumentar minha eficiência em 300%.",
      rating: 5
    },
    {
      name: "João Santos",
      role: "Desenvolvedor",
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      content: "A melhor ferramenta de produtividade que já usei. Interface intuitiva e recursos poderosos.",
      rating: 5
    },
    {
      name: "Ana Costa",
      role: "Estudante",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      content: "Me ajudou a equilibrar estudos, trabalho e vida pessoal. Indispensável no meu dia a dia!",
      rating: 5
    }
  ];

  const plans = [
    {
      id: 'basic',
      name: 'Básico',
      price: 'Grátis',
      period: '',
      description: 'Perfeito para começar',
      features: [
        'Até 10 tarefas por dia',
        'Categorização básica',
        'Modo escuro/claro',
        'Suporte por email'
      ],
      notIncluded: [
        'Relatórios avançados',
        'Sincronização na nuvem',
        'Suporte prioritário'
      ],
      cta: 'Começar Grátis',
      popular: false
    },
    {
      id: 'pro',
      name: 'Profissional',
      price: 'R$ 19,90',
      period: '/mês',
      description: 'Para profissionais produtivos',
      features: [
        'Tarefas ilimitadas',
        'Todas as categorias',
        'Relatórios detalhados',
        'Sincronização na nuvem',
        'Backup automático',
        'Suporte prioritário'
      ],
      notIncluded: [
        'Integração com calendários',
        'API personalizada'
      ],
      cta: 'Começar Teste Grátis',
      popular: true
    },
    {
      id: 'premium',
      name: 'Premium',
      price: 'R$ 39,90',
      period: '/mês',
      description: 'Para equipes e empresas',
      features: [
        'Todos os recursos Pro',
        'Integração com calendários',
        'API personalizada',
        'Análise avançada de dados',
        'Suporte 24/7',
        'Consultoria personalizada'
      ],
      notIncluded: [],
      cta: 'Falar com Vendas',
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-blue-600 rounded-lg">
                <Calendar className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">RotinaPro</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Recursos</a>
              <a href="#testimonials" className="text-gray-600 hover:text-blue-600 transition-colors">Depoimentos</a>
              <a href="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors">Preços</a>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Começar Agora
              </button>
            </div>

            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-2 space-y-2">
              <a href="#features" className="block py-2 text-gray-600">Recursos</a>
              <a href="#testimonials" className="block py-2 text-gray-600">Depoimentos</a>
              <a href="#pricing" className="block py-2 text-gray-600">Preços</a>
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg mt-2">
                Começar Agora
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Star className="h-4 w-4 mr-2" />
                Mais de 50.000 usuários satisfeitos
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Transforme sua
                <span className="text-blue-600 block">rotina diária</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                O aplicativo mais completo para organizar suas tarefas, aumentar sua produtividade 
                e alcançar seus objetivos pessoais e profissionais.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-200 flex items-center justify-center group">
                  Começar Teste Grátis
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold hover:border-gray-400 transition-colors flex items-center justify-center">
                  <Play className="mr-2 h-5 w-5" />
                  Ver Demo
                </button>
              </div>
              
              <div className="flex items-center space-x-6 text-sm text-gray-500">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Teste grátis por 14 dias
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Sem cartão de crédito
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-900">Hoje - 15 Jan</h3>
                    <div className="text-sm text-green-600 font-medium">85% completo</div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-gray-700 line-through">Exercícios matinais</span>
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Saúde</span>
                    </div>
                    
                    <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                      <div className="w-5 h-5 border-2 border-blue-500 rounded-full"></div>
                      <span className="text-gray-700">Reunião com cliente</span>
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Trabalho</span>
                    </div>
                    
                    <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg">
                      <div className="w-5 h-5 border-2 border-purple-500 rounded-full"></div>
                      <span className="text-gray-700">Estudar React</span>
                      <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">Estudo</span>
                    </div>
                  </div>
                  
                  <div className="bg-gray-100 rounded-lg p-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>Progresso do dia</span>
                      <span>6/7 tarefas</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">50K+</div>
              <div className="text-gray-600">Usuários Ativos</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">2M+</div>
              <div className="text-gray-600">Tarefas Concluídas</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">98%</div>
              <div className="text-gray-600">Satisfação</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">4.9★</div>
              <div className="text-gray-600">Avaliação</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Recursos que fazem a diferença
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Desenvolvido com as melhores práticas de produtividade e design moderno 
              para oferecer a melhor experiência possível.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              O que nossos usuários dizem
            </h2>
            <p className="text-xl text-gray-600">
              Milhares de pessoas já transformaram suas rotinas
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl hover:bg-gray-100 transition-colors duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Escolha o plano ideal para você
            </h2>
            <p className="text-xl text-gray-600">
              Comece grátis e evolua conforme suas necessidades
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <div key={plan.id} className={`bg-white rounded-2xl shadow-lg p-8 relative ${
                plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Mais Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                </div>
                
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                  {plan.notIncluded.map((feature, index) => (
                    <div key={index} className="flex items-center opacity-50">
                      <X className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-500">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-200 ${
                  plan.popular 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Pronto para transformar sua rotina?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Junte-se a milhares de pessoas que já revolucionaram sua produtividade
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
              Começar Teste Grátis
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Falar com Vendas
            </button>
          </div>
          <p className="text-blue-200 text-sm mt-4">
            14 dias grátis • Sem cartão de crédito • Cancele quando quiser
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="p-2 bg-blue-600 rounded-lg">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold">RotinaPro</span>
              </div>
              <p className="text-gray-400">
                O aplicativo mais completo para organizar sua rotina diária e aumentar sua produtividade.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Produto</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Recursos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Preços</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integrações</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Sobre</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Carreiras</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Suporte</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Central de Ajuda</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentação</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacidade</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 RotinaPro. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};