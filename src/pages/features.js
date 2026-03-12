import React from 'react';
import Layout from '@theme/Layout';

export default function FeaturesPage() {
  return (
    <Layout title="Features" description="UniCMMS Features">
      {/* Had l-page kamla m-sayba b Tailwind CSS classes */}
      <main className="bg-slate-50 py-20 px-6 min-h-screen">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
              Advanced <span className="text-teal-600">CMMS Features</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Everything you need to manage your maintenance operations in one powerful platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature Card 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center text-2xl mb-6">
                ⚡
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Instant Work Orders</h3>
              <p className="text-slate-600 leading-relaxed">
                Create and assign work orders in seconds. Track progress in real-time with automated notifications.
              </p>
              <button className="mt-6 text-teal-600 font-semibold hover:text-teal-700 inline-flex items-center gap-2">
                Learn more <span>→</span>
              </button>
            </div>

            {/* Feature Card 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-2xl mb-6">
                📊
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Asset Intelligence</h3>
              <p className="text-slate-600 leading-relaxed">
                Monitor asset health and performance. Predict failures before they happen with smart analytics.
              </p>
              <button className="mt-6 text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center gap-2">
                Learn more <span>→</span>
              </button>
            </div>

            {/* Feature Card 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-2xl mb-6">
                📱
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Mobile Excellence</h3>
              <p className="text-slate-600 leading-relaxed">
                Access your entire maintenance system from any device. Complete offline support for field teams.
              </p>
              <button className="mt-6 text-purple-600 font-semibold hover:text-purple-700 inline-flex items-center gap-2">
                Learn more <span>→</span>
              </button>
            </div>
          </div>

          <div className="mt-20 bg-teal-600 rounded-3xl p-10 text-white text-center shadow-2xl shadow-teal-200">
            <h2 className="text-3xl font-bold mb-4 text-white">Ready to streamline your maintenance?</h2>
            <p className="text-teal-50 mb-8 max-w-xl mx-auto opacity-90">
              Join hundreds of teams who have transformed their operations with UniCMMS.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-teal-600 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition-colors">
                Get Started Free
              </button>
              <button className="bg-teal-700 text-white border border-teal-500 px-8 py-4 rounded-xl font-bold hover:bg-teal-800 transition-colors">
                Book a Demo
              </button>
            </div>
          </div>

        </div>
      </main>
    </Layout>
  );
}
