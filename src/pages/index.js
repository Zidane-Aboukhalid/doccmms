import React, { useRef } from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import { useHistory } from '@docusaurus/router';

const CATEGORIES = [
  {
    icon: '📊',
    title: 'Meters',
    desc: 'Track physical conditions and operational metrics over time. Build a precise history of any monitored variable.',
    href: '/docs/maintenance/meters/about',
  },
  {
    icon: '⚡',
    title: 'Triggers',
    desc: 'Automate workflows with time-based or condition-based rules. Set thresholds and let the system act for you.',
    href: '/docs/maintenance/triggers',
  },
  {
    icon: '🛠️',
    title: 'Work Orders',
    desc: 'Create, assign, track and complete maintenance tasks. Full lifecycle management with cost tracking.',
    href: '/docs/maintenance/work-orders',
  },
  {
    icon: '📩',
    title: 'Work Requests',
    desc: 'Allow team members and guests to submit tickets. Review, approve or decline before creating work orders.',
    href: '/docs/maintenance/work-requests',
  },
  {
    icon: '📋',
    title: 'Procedure Templates',
    desc: 'Build standardized SOPs and safety checklists with conditional logic. Attach to any work order.',
    href: '/docs/maintenance/procedure-templates',
  },
  {
    icon: '🔁',
    title: 'Regular Maintenance',
    desc: 'Schedule preventive maintenance (PM) plans to keep equipment running on time or usage intervals.',
    href: '/docs/maintenance/regular-maintenance',
  },
];

function DocCard({ icon, title, desc, href }) {
  return (
    <Link to={href} className="doc-card">
      <div className="card-icon-wrap">{icon}</div>
      <p className="card-title">{title}</p>
      <p className="card-desc">{desc}</p>
      <span className="card-arrow">Read guide →</span>
    </Link>
  );
}

export default function Home() {
  const history = useHistory();
  const searchRef = useRef(null);

  function handleSearch(e) {
    e.preventDefault();
    const q = searchRef.current?.value?.trim();
    if (!q) return;

    // Find the global search input in the navbar
    const navbarSearchInput = document.querySelector('.navbar__search-input');
    if (navbarSearchInput) {
      navbarSearchInput.focus();
      // Set value and trigger events
      const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;
      nativeInputValueSetter.call(navbarSearchInput, q);
      
      // Trigger multiple events to satisfy different plugin listeners
      navbarSearchInput.dispatchEvent(new Event('input', { bubbles: true }));
      navbarSearchInput.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }));
      navbarSearchInput.dispatchEvent(new KeyboardEvent('keyup', { key: 'Enter', bubbles: true }));
    }
  }

  return (
    <Layout
      title="Help Center"
      description="UniCMMS Help Center — step-by-step guides for work orders, assets, meters, triggers, and preventive maintenance."
    >
      <Head>
        <meta property="og:title" content="UniCMMS Help Center" />
        <meta property="og:description" content="Complete documentation for UniCMMS — your cloud-based CMMS for maintenance teams." />
      </Head>

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="hero-section">
        <div className="hero-inner">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            UniCMMS Documentation v1.0
          </div>

          <h1 className="hero-title">
            Your Complete<br /><span>Maintenance</span> Guide
          </h1>

          <p className="hero-subtitle">
            Everything your team needs to master UniCMMS — from creating your first work order to automating complex PM schedules.
          </p>

          <div className="hero-search-wrap">
            <form className="hero-search" onSubmit={(e) => e.preventDefault()}>
              <span className="hero-search-icon">🔍</span>
              <input
                ref={searchRef}
                type="text"
                placeholder={'Search documentation\u2026 (e.g. \u201ccreate work order\u201d)'}
                aria-label="Search documentation"
                id="hero-search-input"
                onChange={(e) => {
                  const val = e.target.value;
                  const navbarSearchInput = document.querySelector('.navbar__search-input');
                  if (navbarSearchInput) {
                    // This trick forces the value even if React is controlling it
                    const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;
                    nativeInputValueSetter.call(navbarSearchInput, val);
                    navbarSearchInput.dispatchEvent(new Event('input', { bubbles: true }));
                  }
                }}
                onFocus={() => {
                  // Pre-focus the hidden one to ensure the modal is ready
                  document.querySelector('.navbar__search-input')?.focus();
                  searchRef.current?.focus();
                }}
              />
              <div className="hero-search-kbd">⌘K</div>
            </form>
          </div>

          <p className="hero-hints">
            Popular:&nbsp;
            <Link to="/docs/maintenance/work-orders">Work Orders</Link>
            {' · '}
            <Link to="/docs/maintenance/meters/about">Meters</Link>
            {' · '}
            <Link to="/docs/maintenance/triggers">Triggers</Link>
            {' · '}
            <Link to="/docs/maintenance/procedure-templates">Procedures</Link>
          </p>
        </div>
      </section>

      {/* ── Stats ───────────────────────────────────────────
      <section className="stats-band">
        <div className="stats-inner">
          <div className="stat-item">
            <span className="stat-number">6<span className="stat-unit">+</span></span>
            <span className="stat-label">Core Modules</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">5</span>
            <span className="stat-label">Languages</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">50<span className="stat-unit">+</span></span>
            <span className="stat-label">Step-by-Step Guides</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">24<span className="stat-unit">/7</span></span>
            <span className="stat-label">Always Available</span>
          </div>
        </div>
      </section> */}

      {/* ── Categories ────────────────────────────────────── */}
      <section className="categories-section">
        <div className="categories-header">
          <div className="section-label">Documentation</div>
          <h2>Browse by Module</h2>
          <p>Select a module to find detailed guides, field references, and best practices.</p>
        </div>
        <div id="doc-cards" className="cards-grid">
          {CATEGORIES.map((cat) => (
            <DocCard key={cat.href} {...cat} />
          ))}
        </div>
      </section>

      {/* ── CTA Banner ────────────────────────────────────── */}
      <section className="cta-section">
        <div className="cta-inner">
          <div className="section-label" style={{marginBottom: 16}}>
            Get Started
          </div>
          <h2>New to UniCMMS?</h2>
          <p>
            Start with the introduction to understand the platform's core concepts before diving into specific modules.
          </p>
          <Link to="/docs/intro" className="cta-btn" id="cta-get-started">
            <span>👋</span>
            Read the Introduction
            <span>→</span>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
