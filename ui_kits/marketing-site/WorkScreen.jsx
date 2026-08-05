const { Eyebrow, Badge, CaseStudyCard, StatBlock } = window.GeocommerceDesignSystem_0dc456;

const CASES = [
  { category: 'Beauty / Redesign', title: 'Premium skincare redesign on Shopify', excerpt: 'A complete visual and structural overhaul focusing on tactile UI and editorial pacing.', filter: 'Redesign' },
  { category: 'Growth / Optimization', title: 'CRO-led PDP and conversion optimization', excerpt: 'Systematic iterative testing and UI refinements resulting in a 34% increase.', filter: 'CRO' },
  { category: 'Fashion / Migration', title: 'Shopify migration with storefront performance', excerpt: 'Transitioning from legacy infrastructure to a headless Shopify build.', filter: 'Migration' },
  { category: 'Wellness / Redesign', title: 'Subscription-first storefront rebuild', excerpt: 'Recurring purchase flows rebuilt around retention, not acquisition.', filter: 'Redesign' },
  { category: 'Home / Optimization', title: 'Collection merchandising overhaul', excerpt: 'Faceted browsing and merchandising rules across a 2,400-SKU catalogue.', filter: 'CRO' },
  { category: 'Food / Migration', title: 'Legacy platform move to Shopify Plus', excerpt: 'Zero-downtime cutover with full SEO parity on launch day.', filter: 'Migration' },
];

function WorkScreen() {
  const [filter, setFilter] = React.useState('All');
  const filters = ['All', 'Redesign', 'CRO', 'Migration'];
  const shown = filter === 'All' ? CASES : CASES.filter((c) => c.filter === filter);
  return (
    <>
      <Section tight>
        <Eyebrow rule>Selected work</Eyebrow>
        <h1 style={{ fontSize: '56px', maxWidth: '20ch', marginBottom: '24px' }}>Redesigns, CRO programmes, builds and migrations</h1>
        <p style={{ font: 'var(--text-lead)', color: 'var(--text-muted)', maxWidth: '60ch' }}>
          Delivered for ambitious ecommerce brands looking to scale through technical excellence and user-centric design.
        </p>
        <div style={{ display: 'flex', gap: '10px', marginTop: '40px' }}>
          {filters.map((fl) => (
            <button key={fl} onClick={() => setFilter(fl)} style={{
              padding: '8px 18px', borderRadius: 'var(--radius-pill)', cursor: 'pointer',
              font: 'var(--text-label)', fontSize: '13px',
              background: filter === fl ? 'var(--surface-brand)' : 'transparent',
              color: filter === fl ? 'var(--text-on-brand)' : 'var(--ink-700)',
              border: '1px solid ' + (filter === fl ? 'var(--surface-brand)' : 'var(--border-subtle)'),
              transition: 'var(--transition-control)',
            }}>{fl}</button>
          ))}
        </div>
      </Section>
      <Section tight style={{ paddingTop: 0 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '32px 32px' }}>
          {shown.map((c) => <CaseStudyCard key={c.title} {...c} />)}
        </div>
      </Section>
      <Section tone="inverse" tight>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '32px' }}>
          <StatBlock tone="inverse" value="34%" label="Peak PDP conversion lift" />
          <StatBlock tone="inverse" value="8–12 wk" label="Typical redesign runway" />
          <StatBlock tone="inverse" value="0" label="Migrations with traffic loss" />
        </div>
      </Section>
    </>
  );
}

Object.assign(window, { WorkScreen });
