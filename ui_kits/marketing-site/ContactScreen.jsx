const { Eyebrow, Button, Input, Select, Textarea, Checkbox, Card, Badge } = window.GeocommerceDesignSystem_0dc456;

function ContactScreen() {
  const [sent, setSent] = React.useState(false);
  return (
    <Section>
      <div style={{ display: 'grid', gridTemplateColumns: '0.85fr 1.15fr', gap: '80px', alignItems: 'start' }}>
        <div>
          <Eyebrow rule>Project inquiry</Eyebrow>
          <h2 style={{ fontSize: '44px', marginBottom: '20px' }}>Planning a Shopify redesign, CRO project, or growth-focused rebuild?</h2>
          <p style={{ font: 'var(--text-lead)', color: 'var(--text-muted)' }}>
            Tell us what you want to improve, and we'll help shape the right next step for your store.
          </p>
          <div style={{ display: 'flex', gap: '10px', marginTop: '28px', flexWrap: 'wrap' }}>
            <Badge tone="brand" dot>Replies in one business day</Badge>
            <Badge tone="outline">UK &amp; India</Badge>
          </div>
        </div>
        <Card surface="raised" padding="lg" elevation="md">
          {sent ? (
            <div style={{ padding: '40px 0', textAlign: 'center' }}>
              <h4 style={{ marginBottom: '10px' }}>Thanks — we've got it.</h4>
              <p style={{ font: 'var(--text-base)', color: 'var(--text-muted)', margin: '0 0 24px' }}>A strategist will reply within one business day.</p>
              <Button variant="secondary" onClick={() => setSent(false)}>Send another</Button>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <Input label="Name" placeholder="Your name" />
              <Input label="Work email" type="email" placeholder="you@brand.com" />
              <Input label="Store URL" placeholder="brand.myshopify.com" />
              <Select label="Budget" options={['Select a range', 'Under $10k', '$10k–$25k', '$25k–$60k', '$60k+']} />
              <div style={{ gridColumn: '1 / -1' }}>
                <Select label="What do you need?" options={['Storefront redesign', 'CRO programme', 'Shopify Plus build', 'Migration', 'Something else']} />
              </div>
              <div style={{ gridColumn: '1 / -1' }}>
                <Textarea label="What do you want to improve?" rows={4} placeholder="PDP conversion, checkout drop-off, page speed…" />
              </div>
              <div style={{ gridColumn: '1 / -1' }}>
                <Checkbox label="Send me the quarterly Shopify CRO teardown" />
              </div>
              <div style={{ gridColumn: '1 / -1' }}>
                <Button size="lg" fullWidth onClick={() => setSent(true)} iconRight="→">Send inquiry</Button>
              </div>
            </div>
          )}
        </Card>
      </div>
    </Section>
  );
}

Object.assign(window, { ContactScreen });
