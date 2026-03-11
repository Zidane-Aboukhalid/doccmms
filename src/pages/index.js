import React, { useRef } from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import { translate } from '@docusaurus/Translate';

/* ── Card color map ─────────────────────────────────────────── */
const CARD_COLORS = ['#0ea5e9', '#f59e0b', '#46beb8', '#8b5cf6', '#ec4899', '#10b981'];

/* ── Categories (translated) ────────────────────────────────── */
const CATEGORIES = [
  {
    icon: '📊',
    titleId: 'homepage.card.meters.title',
    titleMsg: 'Meters',
    descId: 'homepage.card.meters.desc',
    descMsg:
      'Track physical conditions and operational metrics over time. Build a precise history of any monitored variable.',
    href: '/docs/maintenance/meters/about',
  },
  {
    icon: '⚡',
    titleId: 'homepage.card.triggers.title',
    titleMsg: 'Triggers',
    descId: 'homepage.card.triggers.desc',
    descMsg:
      'Automate workflows with time-based or condition-based rules. Set thresholds and let the system act for you.',
    href: '/docs/maintenance/triggers',
  },
  {
    icon: '🛠️',
    titleId: 'homepage.card.workorders.title',
    titleMsg: 'Work Orders',
    descId: 'homepage.card.workorders.desc',
    descMsg:
      'Create, assign, track and complete maintenance tasks. Full lifecycle management with cost tracking.',
    href: '/docs/maintenance/work-orders',
  },
  {
    icon: '📩',
    titleId: 'homepage.card.workrequests.title',
    titleMsg: 'Work Requests',
    descId: 'homepage.card.workrequests.desc',
    descMsg:
      'Allow team members and guests to submit tickets. Review, approve or decline before creating work orders.',
    href: '/docs/maintenance/work-requests',
  },
  {
    icon: '📋',
    titleId: 'homepage.card.procedures.title',
    titleMsg: 'Procedure Templates',
    descId: 'homepage.card.procedures.desc',
    descMsg:
      'Build standardized SOPs and safety checklists with conditional logic. Attach to any work order.',
    href: '/docs/maintenance/procedure-templates',
  },
  {
    icon: '🔁',
    titleId: 'homepage.card.pm.title',
    titleMsg: 'Regular Maintenance',
    descId: 'homepage.card.pm.desc',
    descMsg:
      'Schedule preventive maintenance (PM) plans to keep equipment running on time or usage intervals.',
    href: '/docs/maintenance/regular-maintenance',
  },
];

function DocCard({ icon, titleId, titleMsg, descId, descMsg, href, color }) {
  const title = translate({ id: titleId, message: titleMsg });
  const desc = translate({ id: descId, message: descMsg });
  const readGuide = translate({ id: 'homepage.card.readGuide', message: 'Read guide' });

  return (
    <Link to={href} className="doc-card" style={{ '--card-accent': color }}>
      <div className="card-icon-wrap" style={{ background: `${color}18` }}>
        <span className="card-icon-emoji">{icon}</span>
      </div>
      <div className="card-body">
        <p className="card-title">{title}</p>
        <p className="card-desc">{desc}</p>
      </div>
      <span className="card-arrow">
        <span className="card-arrow-text">{readGuide}</span>
        <span className="card-arrow-icon">→</span>
      </span>
    </Link>
  );
}

export default function Home() {
  const searchRef = useRef(null);

  const heroTitle = translate({
    id: 'homepage.hero.title',
    message: 'Your Complete Maintenance Guide',
  });
  const heroSubtitle = translate({
    id: 'homepage.hero.subtitle',
    message:
      'Everything your team needs to master UniCMMS — from creating your first work order to automating complex PM schedules.',
  });
  const searchPlaceholder = translate({
    id: 'homepage.hero.searchPlaceholder',
    message: 'Search documentation… (e.g. "create work order")',
  });
  const popularLabel = translate({ id: 'homepage.hero.popular', message: 'Popular:' });
  const sectionLabel = translate({ id: 'homepage.categories.sectionLabel', message: 'Documentation' });
  const browseTitle = translate({ id: 'homepage.categories.title', message: 'Browse by Module' });
  const browseSubtitle = translate({
    id: 'homepage.categories.subtitle',
    message: 'Select a module to find detailed guides, field references, and best practices.',
  });
  const ctaSectionLabel = translate({ id: 'homepage.cta.sectionLabel', message: 'Get Started' });
  const ctaTitle = translate({ id: 'homepage.cta.title', message: 'New to UniCMMS?' });
  const ctaSubtitle = translate({
    id: 'homepage.cta.subtitle',
    message:
      "Start with the introduction to understand the platform's core concepts before diving into specific modules.",
  });
  const ctaBtn = translate({ id: 'homepage.cta.button', message: 'Read the Introduction' });
  const workOrdersLabel = translate({ id: 'homepage.hints.workOrders', message: 'Work Orders' });
  const metersLabel = translate({ id: 'homepage.hints.meters', message: 'Meters' });
  const triggersLabel = translate({ id: 'homepage.hints.triggers', message: 'Triggers' });
  const proceduresLabel = translate({ id: 'homepage.hints.procedures', message: 'Procedures' });

  /* Highlight "Maintenance" in the English title */
  const titleParts = heroTitle.split('Maintenance');

  return (
    <Layout
      title="Help Center"
      description="UniCMMS Help Center — step-by-step guides for work orders, assets, meters, triggers, and preventive maintenance."
    >
      <Head>
        <meta property="og:title" content="UniCMMS Help Center" />
        <meta
          property="og:description"
          content="Complete documentation for UniCMMS — your cloud-based CMMS for maintenance teams."
        />
      </Head>

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="hero-section">
        <div className="hero-glow hero-glow-1" />
        <div className="hero-glow hero-glow-2" />
        <div className="hero-glow hero-glow-3" />

        <div className="hero-inner">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            UniCMMS Documentation v1.0
          </div>

          <h1 className="hero-title">
            {titleParts.length > 1 ? (
              <>
                {titleParts[0]}
                <span className="hero-title-accent">Maintenance</span>
                {titleParts[1]}
              </>
            ) : (
              <span className="hero-title-accent">{heroTitle}</span>
            )}
          </h1>

          <p className="hero-subtitle">{heroSubtitle}</p>

          <div className="hero-search-wrap">
            <form className="hero-search" onSubmit={(e) => e.preventDefault()}>
              <span className="hero-search-icon">🔍</span>
              <input
                ref={searchRef}
                type="text"
                placeholder={searchPlaceholder}
                aria-label="Search documentation"
                id="hero-search-input"
                onChange={(e) => {
                  const val = e.target.value;
                  const navbarInput = document.querySelector('.navbar__search-input');
                  if (navbarInput) {
                    const setter = Object.getOwnPropertyDescriptor(
                      window.HTMLInputElement.prototype,
                      'value'
                    ).set;
                    setter.call(navbarInput, val);
                    navbarInput.dispatchEvent(new Event('input', { bubbles: true }));
                  }
                }}
                onFocus={() => {
                  document.querySelector('.navbar__search-input')?.focus();
                  searchRef.current?.focus();
                }}
              />
              <div className="hero-search-kbd">⌘K</div>
            </form>
          </div>

          <p className="hero-hints">
            {popularLabel}&nbsp;
            <Link to="/docs/maintenance/work-orders">{workOrdersLabel}</Link>
            {' · '}
            <Link to="/docs/maintenance/meters/about">{metersLabel}</Link>
            {' · '}
            <Link to="/docs/maintenance/triggers">{triggersLabel}</Link>
            {' · '}
            <Link to="/docs/maintenance/procedure-templates">{proceduresLabel}</Link>
          </p>
        </div>
      </section>

      {/* ── Categories ──────────────────────────────────────────── */}
      <section className="categories-section">
        <div className="categories-header">
          <div className="section-label">{sectionLabel}</div>
          <h2>{browseTitle}</h2>
          <p>{browseSubtitle}</p>
        </div>
        <div id="doc-cards" className="cards-grid">
          {CATEGORIES.map((cat, i) => (
            <DocCard key={cat.href} {...cat} color={CARD_COLORS[i]} />
          ))}
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────── */}
      <section className="cta-section">
        <div className="cta-glow" />
        <div className="cta-inner">
          <div className="section-label" style={{ marginBottom: 16 }}>
            {ctaSectionLabel}
          </div>
          <h2>{ctaTitle}</h2>
          <p>{ctaSubtitle}</p>
          <Link to="/docs/intro" className="cta-btn" id="cta-get-started">
            <span>👋</span>
            {ctaBtn}
            <span>→</span>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
