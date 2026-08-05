const { Eyebrow, ServiceCard, Accordion, Badge, Button, Card } = window.GeocommerceDesignSystem_0dc456;

function ServicesScreen({ onNavigate }) {
  return (
    <>
      <Section tight>
        <Eyebrow rule>Services</Eyebrow>
        <h1 style={{ fontSize: '56px', maxWidth: '18ch', marginBottom: '24px' }}>Design, development and CRO under one roof</h1>
        <p style={{ font: 'var(--text-lead)', color: 'var(--text-muted)', maxWidth: '60ch' }}>
          Every engagement is scoped around a measurable outcome: a higher conversion rate, a faster storefront, or a migration that protects the revenue you already have.
        </p>
      </Section>
      <Section tight style={{ paddingTop: 0 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '20px' }}>
          <ServiceCard index="01" category="Design" title="Storefront redesign" body="Premium design, UX clarity, storytelling, and stronger brand presentation." href="#" />
          <ServiceCard index="02" category="Optimization" title="CRO programme" body="PDP and collection improvements, merchandising, and mobile purchase journeys." href="#" />
          <ServiceCard index="03" category="Engineering" title="Shopify & Plus development" body="Liquid, Hydrogen and APIs. Scalable storefronts built for performance." href="#" />
          <ServiceCard index="04" category="Strategy" title="Migration and rebuild" body="Move to Shopify without disrupting traffic, rankings or sales continuity." surface="inverse" href="#" />
        </div>
      </Section>
      <Section tone="sunken">
        <div style={{ display: 'grid', gridTemplateColumns: '0.8fr 1.2fr', gap: '64px' }}>
          <div>
            <Eyebrow rule>Common questions</Eyebrow>
            <h3 style={{ maxWidth: '14ch' }}>What working with us looks like</h3>
          </div>
          <Accordion items={[
            { q: 'How long does a storefront redesign take?', a: 'Most redesigns run 8–12 weeks from discovery to launch, depending on catalogue size and the number of custom templates.' },
            { q: 'Do you work on Shopify Plus?', a: 'Yes. Plus builds, migrations, checkout extensibility and ongoing CRO programmes are the majority of our work.' },
            { q: 'Can you take over an existing theme?', a: 'We audit the theme first, then either extend it or rebuild the sections that block conversion. We will tell you honestly which is cheaper.' },
            { q: 'What happens after launch?', a: 'Launch support covers performance monitoring and SEO protection, then a continuous CRO cycle if you want one.' },
          ]} />
        </div>
      </Section>
      <Section tight>
        <Card surface="brand" padding="lg">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '40px' }}>
            <div>
              <h3 style={{ color: 'var(--shell-000)', marginBottom: '10px' }}>Planning a redesign or rebuild?</h3>
              <p style={{ margin: 0, font: 'var(--text-lead)', color: 'rgba(247,247,242,.82)' }}>Tell us what you want to improve and we'll shape the right next step.</p>
            </div>
            <Button variant="inverse" size="lg" onClick={() => onNavigate('contact')} iconRight="→">Get in touch</Button>
          </div>
        </Card>
      </Section>
    </>
  );
}

Object.assign(window, { ServicesScreen });
