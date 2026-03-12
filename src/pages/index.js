import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Translate, { translate } from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { 
  Rocket, 
  HelpCircle, 
  ShieldCheck, 
  BookOpen, 
  Newspaper, 
  Users, 
  Video, 
  RefreshCw, 
  Zap,
  ArrowRight,
  ArrowLeft,
  ExternalLink
} from 'lucide-react';

const ResourceCard = ({ icon: Icon, title, desc, to, colorClass, iconColor, isRtl }) => (
  <Link 
    to={to} 
    className="group relative flex flex-col p-8 rounded-3xl transition-all duration-300 bg-white hover:bg-slate-50 border border-slate-200 hover:border-teal-500/50 hover:shadow-[0_20px_50px_rgba(70,190,184,0.15)] no-underline hover:no-underline text-inherit hover:text-inherit overflow-hidden"
  >
    {/* Background Glow Effect - Flipped for RTL */}
    <div className={`absolute ${isRtl ? '-left-4' : '-right-4'} -top-4 w-32 h-32 blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-full ${colorClass}`} />
    
    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-slate-100 group-hover:scale-110 transition-transform duration-300 bg-white relative z-10`}>
      <Icon size={28} className={`${iconColor} transition-colors`} />
    </div>
    
    <div className={`flex flex-col relative z-10 ${isRtl ? 'text-right' : 'text-left'}`}>
      <h3 className="text-xl font-bold m-0 text-slate-900 leading-tight mb-3 flex items-center gap-2">
        {title}
        {isRtl ? (
          <ArrowLeft size={18} className="opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-teal-600" />
        ) : (
          <ArrowRight size={18} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-teal-600" />
        )}
      </h3>
      <p className="text-slate-600 m-0 leading-relaxed text-sm md:text-base font-medium opacity-90">{desc}</p>
    </div>
  </Link>
);

export default function Home() {
  const { i18n } = useDocusaurusContext();
  const isRtl = i18n.currentLocale === 'ar';

  const mainResources = [
    {
      icon: Rocket,
      title: translate({ id: 'homepage.resources.gettingStarted.title', message: 'Getting Started' }),
      desc: translate({ id: 'homepage.resources.gettingStarted.desc', message: 'Launch UniCMMS in minutes with our quickstart guide.' }),
      to: '/docs/intro',
      colorClass: 'bg-blue-400',
      iconColor: 'text-blue-600',
    },
    {
      icon: HelpCircle,
      title: translate({ id: 'homepage.resources.faq.title', message: 'Common FAQ' }),
      desc: translate({ id: 'homepage.resources.faq.desc', message: 'Find quick answers to the most frequently asked questions.' }),
      to: '/docs/intro',
      colorClass: 'bg-amber-400',
      iconColor: 'text-amber-600',
    },
    {
      icon: ShieldCheck,
      title: translate({ id: 'homepage.resources.security.title', message: 'Security' }),
      desc: translate({ id: 'homepage.resources.security.desc', message: 'Learn about our enterprise-grade protection and compliance.' }),
      to: '/docs/intro',
      colorClass: 'bg-emerald-400',
      iconColor: 'text-emerald-600',
    },
    {
      icon: BookOpen,
      title: translate({ id: 'homepage.resources.helpCenter.title', message: 'Help Center' }),
      desc: translate({ id: 'homepage.resources.helpCenter.desc', message: 'Dive into our complete documentation for all modules.' }),
      to: '/help-center',
      colorClass: 'bg-teal-400',
      iconColor: 'text-teal-600',
    },
    {
      icon: Newspaper,
      title: translate({ id: 'homepage.resources.blog.title', message: 'Latest Blogs' }),
      desc: translate({ id: 'homepage.resources.blog.desc', message: 'Insights, trends, and maintenance best practices.' }),
      to: '/docs/intro',
      colorClass: 'bg-indigo-400',
      iconColor: 'text-indigo-600',
    },
    {
      icon: Users,
      title: translate({ id: 'homepage.resources.support.title', message: 'Support Team' }),
      desc: translate({ id: 'homepage.resources.support.desc', message: 'Need more help? Talk directly to our expert support team.' }),
      to: '/docs/intro',
      colorClass: 'bg-rose-400',
      iconColor: 'text-rose-600',
    },
    {
      icon: Video,
      title: translate({ id: 'homepage.resources.video.title', message: 'Video Training' }),
      desc: translate({ id: 'homepage.resources.video.desc', message: 'Step-by-step visual tutorials for every feature.' }),
      to: '/docs/intro',
      colorClass: 'bg-purple-400',
      iconColor: 'text-purple-600',
    },
    {
      icon: RefreshCw,
      title: translate({ id: 'homepage.resources.releases.title', message: 'Releases' }),
      desc: translate({ id: 'homepage.resources.releases.desc', message: "Stay updated with our latest features and improvements." }),
      to: '/docs/intro',
      colorClass: 'bg-orange-400',
      iconColor: 'text-orange-600',
    },
    {
      icon: Zap,
      title: translate({ id: 'homepage.resources.ai.title', message: 'AI Assistance' }),
      desc: translate({ id: 'homepage.resources.ai.desc', message: 'Leverage smart AI to optimize your maintenance flow.' }),
      to: '/docs/intro',
      colorClass: 'bg-cyan-400',
      iconColor: 'text-cyan-600',
    },
  ];

  return (
    <Layout 
      title={translate({ id: 'homepage.title', message: 'Resources Portal' })}
      description={translate({ id: 'homepage.description', message: 'UniCMMS Resources and Professional Support Portal' })}
    >
      <main className="relative min-h-screen bg-[#f8fafc] overflow-hidden" dir={isRtl ? 'rtl' : 'ltr'}>
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
          <div className="absolute top-[-5%] left-[-5%] w-[45%] h-[45%] bg-teal-100/40 rounded-full blur-[120px]" />
          <div className="absolute bottom-[5%] right-[-5%] w-[35%] h-[35%] bg-blue-100/40 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
          
          {/* Hero Section */}
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-teal-200 text-teal-700 text-xs font-bold tracking-widest uppercase mb-8 shadow-sm animate-fade-in">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal-500"></span>
              </span>
              <Translate id="homepage.hero.portalLabel">Support & Resources Portal</Translate>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tight leading-[1.05]">
              <Translate
                id="homepage.hero.title"
                values={{
                  helpPart: <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-700">
                    <Translate id="homepage.hero.title.helpPart">help you</Translate>
                  </span>
                }}
              >
                {'How can we {helpPart} today?'}
              </Translate>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed font-semibold max-w-2xl mx-auto">
              <Translate id="homepage.hero.subtitle">
                Explore our comprehensive resource hub. From detailed technical guides to real-time support, everything you need is just a click away.
              </Translate>
            </p>
          </div>

          {/* Grid Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {mainResources.map((res, idx) => (
              <ResourceCard key={idx} {...res} isRtl={isRtl} />
            ))}
          </div>

          {/* Bottom CTA Section */}
          <div className="bg-slate-900 rounded-[40px] p-12 md:p-20 text-white relative overflow-hidden shadow-2xl border border-white/5">
            <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-teal-400 via-transparent to-transparent" />
            <div className={`relative z-10 flex flex-col lg:row items-center justify-between gap-12 ${isRtl ? 'lg:flex-row-reverse text-right' : 'lg:flex-row text-left'}`}>
              <div className="max-w-2xl text-center lg:text-inherit">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white">
                  <Translate id="homepage.cta.title">Can't find what you're looking for?</Translate>
                </h2>
                <p className="text-slate-300 text-xl font-medium">
                  <Translate id="homepage.cta.subtitle">Our experts are ready to help you optimize your UniCMMS experience. Reach out anytime.</Translate>
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-5 shrink-0 w-full lg:w-auto font-bold uppercase tracking-wide">
                <Link to="/docs/intro" className="px-10 py-5 bg-teal-500 hover:bg-teal-400 text-white rounded-2xl transition-all shadow-xl shadow-teal-500/25 text-center no-underline hover:no-underline flex-1 lg:flex-none text-white whitespace-nowrap">
                  <Translate id="homepage.cta.contact">Contact Support</Translate>
                </Link>
                <Link to="https://app.unicmms.com" className="px-10 py-5 bg-white/10 hover:bg-white/20 text-white rounded-2xl transition-all backdrop-blur-md border border-white/20 text-center no-underline hover:no-underline flex items-center justify-center gap-2 flex-1 lg:flex-none text-white whitespace-nowrap">
                  <Translate id="homepage.cta.app">Open Application</Translate> <ExternalLink size={20} />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </main>
    </Layout>
  );
}
