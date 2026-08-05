const { Button, ArrowLink, Badge, Eyebrow, Card, StatBlock, ServiceCard, CaseStudyCard, ProcessStep, Testimonial, LogoWall } = window.GeocommerceDesignSystem_0dc456;

function HomeScreen({ onNavigate }) {
  return (
    <>
      <Section>
        <div style={{ display: 'grid', gridTemplateColumns: '1.05fr .95fr', gap: '64px', alignItems: 'center' }}>
          <div>
            <Eyebrow>Shopify design, development, and CRO</Eyebrow>
            <h1 style={{ fontSize: '68px', marginBottom: '24px' }}>
              We build Shopify experiences that <em style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--green-600)' }}>convert</em> better
            </h1>
            <p style={{ font: 'var(--text-lead)', color: 'var(--text-muted)', maxWidth: '54ch', marginBottom: '32px' }}>
              Geocommerce helps ecommerce brands grow through premium Shopify design, development, CRO, and performance-focused execution. From redesigns and storefront optimization to Shopify Plus builds and migrations.
            </p>
            <div style={{ display: 'flex', gap: '14px' }}>
              <Button size="lg" onClick={() => onNavigate('contact')}>Start Your Project</Button>
              <Button size="lg" variant="secondary" onClick={() => onNavigate('work')} iconRight="→">View Case Studies</Button>
            </div>
            <div style={{ display: 'flex', gap: '48px', marginTop: '56px', paddingTop: '28px', borderTop: '1px solid var(--border-hairline)' }}>
              <StatBlock size="sm" value="150+" label="Plus stores launched" />
              <StatBlock size="sm" value="+24%" label="Avg conversion lift" />
              <StatBlock size="sm" value="$500M+" label="Merchant GMV" />
            </div>
          </div>
          <div style={{
            aspectRatio: '4 / 5', borderRadius: 'var(--radius-xl)', background: 'linear-gradient(160deg,var(--green-700),var(--green-900))',
            display: 'grid', placeItems: 'center', boxShadow: 'var(--shadow-lg)', position: 'relative', overflow: 'hidden',
          }}>
            <img src="../../assets/logo-mark.png" alt="" style={{ width: '46%', opacity: .95 }} />
            <span style={{ position: 'absolute', bottom: '26px', left: '28px', font: 'var(--text-small)', fontSize: '12px', letterSpacing: 'var(--tracking-eyebrow)', textTransform: 'uppercase', color: 'rgba(247,247,242,.5)' }}>Hero image placeholder</span>
          </div>
        </div>
      </Section>

      <Section tone="sunken" tight>
        <Eyebrow>Trusted by ambitious ecommerce brands</Eyebrow>
        <LogoWall columns={6} logos={['Stillersafe', 'Suntannd', 'Plentum', 'Mulya', 'Rococo', 'Cleansource']} />
        <div style={{ display: 'flex', gap: '10px', marginTop: '40px', flexWrap: 'wrap' }}>
          {['Shopify-focused expertise', 'Unified design + dev', 'Conversion-led execution', 'Premium storefront delivery'].map((c) => <Badge key={c} tone="outline">{c}</Badge>)}
        </div>
      </Section>

      <Section>
        <Eyebrow rule>Our expertise</Eyebrow>
        <h2 style={{ maxWidth: '18ch', marginBottom: '20px' }}>How we help brands grow on Shopify</h2>
        <p style={{ font: 'var(--text-lead)', color: 'var(--text-muted)', maxWidth: '62ch', marginBottom: '56px' }}>
          From premium redesigns to CRO improvements and Shopify Plus execution, Geocommerce helps brands create stronger shopping experiences and better conversion journeys.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '20px' }}>
          <ServiceCard index="01" category="Design" title="Shopify redesigns that improve conversion" body="Focus on premium design, UX clarity, storytelling, and stronger brand presentation." href="#" />
          <ServiceCard index="02" category="Optimization" title="CRO-led storefront optimization" body="Product page improvements, collection UX, merchandising, mobile experience, and better purchase journeys." href="#" />
          <ServiceCard index="03" category="Engineering" title="Shopify development for scaling brands" body="Robust execution, scalable storefronts, performance, and deep Shopify expertise." href="#" />
          <ServiceCard index="04" category="Strategy" title="Migration and rebuilds without growth disruption" body="Moving to Shopify or rebuilding stores while protecting user experience, brand quality, and sales continuity." href="#" />
        </div>
      </Section>

      <Section tone="inverse" tight>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '32px' }}>
          <StatBlock tone="inverse" value="+24%" label="Avg conversion lift" />
          <StatBlock tone="inverse" value="150+" label="Plus stores launched" />
          <StatBlock tone="inverse" value="3.2s" label="Avg load time" />
          <StatBlock tone="inverse" value="$500M+" label="Merchant GMV optimized" />
        </div>
      </Section>

      <Section>
        <Eyebrow rule>Selected Shopify engagements</Eyebrow>
        <h2 style={{ maxWidth: '22ch', marginBottom: '56px' }}>A look at redesigns, CRO improvements, builds, and migrations</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '32px' }}>
          <CaseStudyCard category="Beauty / Redesign" title="Premium skincare redesign on Shopify" excerpt="A complete visual and structural overhaul focusing on tactile UI." />
          <CaseStudyCard category="Growth / Optimization" title="CRO-led PDP and conversion optimization" excerpt="Systematic iterative testing and UI refinements resulting in a 34% increase." />
          <CaseStudyCard category="Fashion / Migration" title="Shopify migration with storefront performance" excerpt="Transitioning from legacy infrastructure to a headless Shopify build." />
        </div>
      </Section>

      <Section tone="sunken">
        <Eyebrow rule>Our methodology</Eyebrow>
        <h2 style={{ maxWidth: '20ch', marginBottom: '48px' }}>A structured approach to better Shopify growth</h2>
        <div>
          {[
            ['01', 'Discovery and growth audit', 'We analyze your current metrics and identify key opportunities for Shopify growth, establishing the strategic foundation for all subsequent work.'],
            ['02', 'UX strategy and wireframing', 'Defining the user journey and high-level structure to ensure maximum conversion potential through friction-less digital architecture.'],
            ['03', 'Design direction and storefront planning', 'Creating a bespoke visual language that elevates your brand and engages shoppers with high-fidelity, polished aesthetics.'],
            ['04', 'Shopify development and QA', 'Robust, high-performance Liquid development and rigorous quality assurance so your store scales without technical debt.'],
            ['05', 'Launch support', 'Seamless transition to your new storefront with full performance monitoring and strategic SEO protection for zero traffic loss.'],
            ['06', 'CRO and continuous improvement', 'Ongoing testing and data-led optimization for long-term growth and technical scalability.'],
          ].map(([n, t, b], i) => <ProcessStep key={n} number={n} title={t} body={b} active={i === 0} />)}
        </div>
      </Section>

      <Section tone="inverse">
        <Eyebrow tone="inverse" rule>Partner success story</Eyebrow>
        <Testimonial tone="inverse"
          quote="“Geocommerce didn't just redesign our store; they reimagined our entire customer journey on Shopify Plus. The collaboration was seamless, the design is world-class, and the impact on our conversion rate was immediate and measurable.”"
          name="Founder" role="Premium D2C fashion brand" />
      </Section>

      <Section>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '48px', alignItems: 'center' }}>
          <div>
            <h3 style={{ marginBottom: '14px' }}>Ready for a refined approach?</h3>
            <p style={{ font: 'var(--text-lead)', color: 'var(--text-muted)', margin: 0, maxWidth: '52ch' }}>
              We don't just build stores; we engineer growth engines for the world's most ambitious Shopify Plus brands.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '14px' }}>
            <Button size="lg" onClick={() => onNavigate('contact')} iconRight="→">Start Your Project</Button>
            <Button size="lg" variant="secondary" onClick={() => onNavigate('work')}>View Case Studies</Button>
          </div>
        </div>
      </Section>
    </>
  );
}

Object.assign(window, { HomeScreen });
