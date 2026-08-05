const { Button, ArrowLink, Logo } = window.GeocommerceDesignSystem_0dc456;

function SiteHeader({ page, onNavigate }) {
  const nav = ['Work', 'Services', 'About', 'Insights', 'Contact'];
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 20, background: 'rgba(247,247,242,.86)',
      backdropFilter: 'blur(14px)', borderBottom: '1px solid var(--border-hairline)',
    }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 32px', height: '78px', display: 'flex', alignItems: 'center', gap: '40px' }}>
        <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('home'); }} style={{ textDecoration: 'none' }}>
          <Logo size={30} src="../../assets/logo-mark.png" />
        </a>
        <nav style={{ display: 'flex', gap: '30px', marginLeft: 'auto' }}>
          {nav.map((n) => {
            const key = n.toLowerCase();
            const active = page === key;
            return (
              <a key={n} href="#" onClick={(e) => { e.preventDefault(); onNavigate(key); }}
                style={{
                  font: 'var(--text-label)', color: active ? 'var(--text-brand)' : 'var(--ink-800)',
                  textDecoration: 'none', paddingBottom: '3px',
                  borderBottom: '1px solid ' + (active ? 'var(--green-600)' : 'transparent'),
                }}>{n}</a>
            );
          })}
        </nav>
        <Button size="sm" onClick={() => onNavigate('contact')}>Book a Consultation</Button>
      </div>
    </header>
  );
}

function SiteFooter({ onNavigate }) {
  return (
    <footer style={{ background: 'var(--green-900)', color: 'rgba(247,247,242,.7)', padding: '80px 32px 40px' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '48px' }}>
        <div>
          <Logo size={30} tone="inverse" src="../../assets/logo-mark.png" />
          <p style={{ margin: '20px 0 0', font: 'var(--text-small)', color: 'rgba(247,247,242,.62)', maxWidth: '34ch' }}>
            High-end editorial Shopify experiences for brands who demand bespoke craftsmanship and tactical execution.
          </p>
        </div>
        {[
          { h: 'Agency', items: ['Work', 'Services', 'About', 'Insights', 'Contact'] },
          { h: 'UK', items: ['Unit 3, George Street', 'Lincoln — LN5 8LG', 'hello@geocommerce.co.uk', '+44 7361 904470'] },
          { h: 'India', items: ['C-28, Lane No.1', '22 Godam Ind. Area', 'Jaipur — 302006', 'hello@geocommerce.co'] },
        ].map((col) => (
          <div key={col.h}>
            <div style={{ font: 'var(--text-label)', fontSize: '12px', letterSpacing: 'var(--tracking-eyebrow)', textTransform: 'uppercase', color: 'var(--shell-000)', marginBottom: '16px' }}>{col.h}</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '9px' }}>
              {col.items.map((i) => <span key={i} style={{ font: 'var(--text-small)', fontSize: '13px', color: 'rgba(247,247,242,.62)' }}>{i}</span>)}
            </div>
          </div>
        ))}
      </div>
      <div style={{ maxWidth: 'var(--container-max)', margin: '56px auto 0', paddingTop: '24px', borderTop: '1px solid rgba(247,247,242,.12)', display: 'flex', justifyContent: 'space-between', font: 'var(--text-small)', fontSize: '12px', color: 'rgba(247,247,242,.45)' }}>
        <span>© 2026 Geocommerce</span>
        <span>Privacy policy · Terms of service</span>
      </div>
    </footer>
  );
}

function Section({ children, tone = 'page', tight = false, style, ...rest }) {
  const bg = { page: 'var(--surface-page)', sunken: 'var(--surface-sunken)', inverse: 'var(--green-900)' }[tone];
  return (
    <section style={{ background: bg, padding: (tight ? '80px' : '128px') + ' 32px', ...style }} {...rest}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>{children}</div>
    </section>
  );
}

Object.assign(window, { SiteHeader, SiteFooter, Section });
