import React, { useRef } from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import { translate } from '@docusaurus/Translate';

/* ── Card color map ─────────────────────────────────────────── */
const CARD_COLORS = [
  '#0ea5e9', // blue
  '#f59e0b', // amber
  '#46beb8', // teal
  '#8b5cf6', // purple
  '#ec4899', // pink
  '#10b981', // green
  '#f97316', // orange
  '#6366f1', // indigo
  '#14b8a6', // cyan
  '#e11d48', // rose
];

/* ────────────────────────────────────────────────────────────────
   CATEGORIES — add any new module here as a new object.
   Fields:
     icon      → emoji shown on the card
     titleId   → i18n key for the card title
     titleMsg  → default English title (fallback)
     descId    → i18n key for the card description
     descMsg   → default English description (fallback)
     href      → link to the module's landing / about page
───────────────────────────────────────────────────────────────── */
const CATEGORIES = [

  /* ── MAINTENANCE ──────────────────────── */
  {
    icon: '🔧',
    titleId: 'homepage.card.maintenance.title',
    titleMsg: 'Maintenance',
    descId: 'homepage.card.maintenance.desc',
    descMsg:
      'Work Orders, Work Requests, Regular Maintenance, Procedure Templates, Meters & Triggers — everything your team needs to manage and automate all maintenance operations.',
    href: '/docs/maintenance',
  },


  /* ── PARTS & SUPPLIES ────────────────── */
  {
    icon: '🔩',
    titleId: 'homepage.card.parts.title',
    titleMsg: 'Parts & Supplies',
    descId: 'homepage.card.parts.desc',
    descMsg:
      'Manage spare parts inventory, track stock levels, and link parts consumption to work orders automatically.',
    href: '/docs/parts-and-supplies',
  },

  /* ── PROCUREMENT ─────────────────────── */
  {
    icon: '🛒',
    titleId: 'homepage.card.procurement.title',
    titleMsg: 'Procurement',
    descId: 'homepage.card.procurement.desc',
    descMsg:
      'Create purchase orders, track vendors, and manage the full procurement lifecycle for maintenance supplies.',
    href: '/docs/procurement',
  },

  /* ── DASHBOARD ───────────────────────── */
  {
    icon: '📈',
    titleId: 'homepage.card.dashboard.title',
    titleMsg: 'Dashboard',
    descId: 'homepage.card.dashboard.desc',
    descMsg:
      'Monitor KPIs, track open work orders, and gain real-time visibility into your maintenance operations.',
    href: '/docs/dashboard',
  },

  /* ── ASSETS ──────────────────────────── */
  {
    icon: '🏭',
    titleId: 'homepage.card.assets.title',
    titleMsg: 'Assets',
    descId: 'homepage.card.assets.desc',
    descMsg:
      'Register, organize and monitor all your equipment and facilities. Link work orders, meters, and cost history to each asset.',
    href: '/docs/assets',
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
    message: 'Your Complete UniCMMS Guide',
  });
  const heroSubtitle = translate({
    id: 'homepage.hero.subtitle',
    message:
      'Everything your team needs to master UniCMMS — from creating your first work order to automating complex PM schedules, managing inventory, and tracking procurement.',
  });
  const searchPlaceholder = translate({
    id: 'homepage.hero.searchPlaceholder',
    message: 'Search documentation… (e.g. "create work order")',
  });
  const popularLabel = translate({ id: 'homepage.hero.popular', message: 'Popular:' });
  const sectionLabel = translate({
    id: 'homepage.categories.sectionLabel',
    message: 'Documentation',
  });
  const browseTitle = translate({
    id: 'homepage.categories.title',
    message: 'Browse by Module',
  });
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
  const partsLabel = translate({ id: 'homepage.hints.parts', message: 'Parts & Supplies' });
  const dashboardLabel = translate({ id: 'homepage.hints.dashboard', message: 'Dashboard' });

  /* Highlight "UniCMMS" in the hero title */
  const titleParts = heroTitle.split('UniCMMS');

  return (
    <Layout
      title="Help Center"
      description="UniCMMS Help Center — step-by-step guides for work orders, assets, meters, triggers, preventive maintenance, parts, procurement, and more."
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
                <span className="hero-title-accent">UniCMMS</span>
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
            <Link to="/docs/maintenance/work-orders/about">{workOrdersLabel}</Link>
            {' · '}
            <Link to="/docs/maintenance/meters/about">{metersLabel}</Link>
            {' · '}
            <Link to="/docs/parts-and-supplies">{partsLabel}</Link>
            {' · '}
            <Link to="/docs/dashboard">{dashboardLabel}</Link>
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
            <DocCard key={cat.href} {...cat} color={CARD_COLORS[i % CARD_COLORS.length]} />
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
