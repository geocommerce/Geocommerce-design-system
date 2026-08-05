/* @ds-bundle: {"format":4,"namespace":"GeocommerceDesignSystem_0dc456","components":[{"name":"ArrowLink","sourcePath":"components/core/ArrowLink.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Accordion","sourcePath":"components/marketing/Accordion.jsx"},{"name":"CaseStudyCard","sourcePath":"components/marketing/CaseStudyCard.jsx"},{"name":"LogoWall","sourcePath":"components/marketing/LogoWall.jsx"},{"name":"ProcessStep","sourcePath":"components/marketing/ProcessStep.jsx"},{"name":"ServiceCard","sourcePath":"components/marketing/ServiceCard.jsx"},{"name":"StatBlock","sourcePath":"components/marketing/StatBlock.jsx"},{"name":"Testimonial","sourcePath":"components/marketing/Testimonial.jsx"}],"sourceHashes":{"components/core/ArrowLink.jsx":"914cedcffc3d","components/core/Badge.jsx":"ac571714b809","components/core/Button.jsx":"ddbfe9dec4a3","components/core/Card.jsx":"318cf1c9034b","components/core/Eyebrow.jsx":"6c33a5ebfbb5","components/core/Logo.jsx":"ab1589c9a531","components/forms/Checkbox.jsx":"d8bc05db1cf5","components/forms/Input.jsx":"d2ffcd2d92a4","components/forms/Select.jsx":"923562bc105d","components/forms/Textarea.jsx":"6999a52a90bf","components/marketing/Accordion.jsx":"a491c2fb1fab","components/marketing/CaseStudyCard.jsx":"f98f44cbbef9","components/marketing/LogoWall.jsx":"23a81137342d","components/marketing/ProcessStep.jsx":"66fad09ffcc9","components/marketing/ServiceCard.jsx":"9ba90da01f9e","components/marketing/StatBlock.jsx":"aa3a223c9ca2","components/marketing/Testimonial.jsx":"5c8cb9470f03","ui_kits/marketing-site/ContactScreen.jsx":"d8462386980e","ui_kits/marketing-site/HomeScreen.jsx":"ec4de8ed8b8a","ui_kits/marketing-site/ServicesScreen.jsx":"f3a057fd3beb","ui_kits/marketing-site/SiteChrome.jsx":"7b9268ba0cc9","ui_kits/marketing-site/WorkScreen.jsx":"5483de428bd2"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.GeocommerceDesignSystem_0dc456 = window.GeocommerceDesignSystem_0dc456 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/ArrowLink.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ArrowLink({
  href = '#',
  tone = 'brand',
  size = 'md',
  children,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const colors = {
    brand: 'var(--text-brand)',
    ink: 'var(--ink-900)',
    inverse: 'var(--shell-000)'
  };
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      color: colors[tone],
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--weight-medium)',
      fontSize: size === 'sm' ? '13px' : '15px',
      letterSpacing: '0.01em',
      textDecoration: 'none',
      borderBottom: '1px solid ' + (hover ? 'currentColor' : 'transparent'),
      paddingBottom: '2px',
      transition: 'border-color var(--duration-base) var(--ease-standard)'
    }
  }, rest), children, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      transform: hover ? 'translateX(4px)' : 'none',
      transition: 'transform var(--duration-base) var(--ease-standard)'
    }
  }, "\u2192"));
}
Object.assign(__ds_scope, { ArrowLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ArrowLink.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const tones = {
  neutral: {
    background: 'var(--shell-100)',
    color: 'var(--ink-700)',
    border: 'var(--border-hairline)'
  },
  brand: {
    background: 'var(--green-100)',
    color: 'var(--green-800)',
    border: 'var(--green-200)'
  },
  solid: {
    background: 'var(--surface-brand)',
    color: 'var(--text-on-brand)',
    border: 'var(--surface-brand)'
  },
  outline: {
    background: 'transparent',
    color: 'var(--ink-800)',
    border: 'var(--border-subtle)'
  },
  inverse: {
    background: 'rgba(247,247,242,.12)',
    color: 'var(--shell-000)',
    border: 'rgba(247,247,242,.24)'
  }
};
function Badge({
  tone = 'neutral',
  dot = false,
  children,
  ...rest
}) {
  const t = tones[tone];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '7px',
      padding: '5px 13px',
      borderRadius: 'var(--radius-pill)',
      background: t.background,
      color: t.color,
      border: '1px solid ' + t.border,
      fontFamily: 'var(--font-body)',
      fontSize: '12px',
      fontWeight: 'var(--weight-medium)',
      letterSpacing: '0.02em',
      whiteSpace: 'nowrap'
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: '6px',
      height: '6px',
      borderRadius: '50%',
      background: 'currentColor'
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizes = {
  sm: {
    height: 'var(--control-height-sm)',
    padding: '0 18px',
    fontSize: '13px'
  },
  md: {
    height: 'var(--control-height-md)',
    padding: '0 26px',
    fontSize: '14px'
  },
  lg: {
    height: 'var(--control-height-lg)',
    padding: '0 34px',
    fontSize: '15px'
  }
};
const variants = {
  primary: {
    background: 'var(--surface-brand)',
    color: 'var(--text-on-brand)',
    border: '1px solid var(--surface-brand)'
  },
  secondary: {
    background: 'transparent',
    color: 'var(--ink-900)',
    border: '1px solid var(--ink-900)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--ink-800)',
    border: '1px solid transparent'
  },
  inverse: {
    background: 'var(--shell-000)',
    color: 'var(--green-900)',
    border: '1px solid var(--shell-000)'
  }
};
const hovers = {
  primary: {
    background: 'var(--green-700)',
    borderColor: 'var(--green-700)',
    boxShadow: 'var(--shadow-brand)'
  },
  secondary: {
    background: 'var(--ink-900)',
    color: 'var(--shell-000)'
  },
  ghost: {
    background: 'var(--shell-100)'
  },
  inverse: {
    background: 'var(--green-100)',
    borderColor: 'var(--green-100)'
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  href,
  disabled = false,
  iconRight,
  iconLeft,
  fullWidth = false,
  onClick,
  children,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const style = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    font: 'var(--text-label)',
    fontFamily: 'var(--font-body)',
    fontWeight: 'var(--weight-medium)',
    letterSpacing: '0.01em',
    borderRadius: 'var(--radius-control)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    width: fullWidth ? '100%' : undefined,
    transition: 'var(--transition-control)',
    opacity: disabled ? 0.4 : 1,
    transform: press && !disabled ? 'scale(0.98)' : 'scale(1)',
    ...sizes[size],
    ...variants[variant],
    ...(hover && !disabled ? hovers[variant] : null)
  };
  const Tag = href ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onClick: disabled ? undefined : onClick,
    disabled: !href ? disabled : undefined,
    style: style,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false)
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const surfaces = {
  raised: {
    background: 'var(--surface-raised)',
    border: '1px solid var(--border-hairline)',
    color: 'var(--text-body)'
  },
  sunken: {
    background: 'var(--surface-sunken)',
    border: '1px solid transparent',
    color: 'var(--text-body)'
  },
  outline: {
    background: 'transparent',
    border: '1px solid var(--border-hairline)',
    color: 'var(--text-body)'
  },
  inverse: {
    background: 'var(--surface-inverse)',
    border: '1px solid rgba(247,247,242,.10)',
    color: 'rgba(247,247,242,.78)'
  },
  brand: {
    background: 'var(--surface-brand)',
    border: '1px solid var(--surface-brand)',
    color: 'rgba(247,247,242,.82)'
  }
};
function Card({
  surface = 'raised',
  padding = 'md',
  interactive = false,
  elevation = 'sm',
  children,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const pads = {
    none: '0',
    sm: 'var(--space-5)',
    md: 'var(--space-8)',
    lg: 'var(--space-12)'
  };
  const shadows = {
    none: 'var(--shadow-none)',
    sm: 'var(--shadow-sm)',
    md: 'var(--shadow-md)',
    lg: 'var(--shadow-lg)'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      borderRadius: 'var(--radius-card)',
      padding: pads[padding],
      overflow: 'hidden',
      boxShadow: interactive && hover ? 'var(--shadow-md)' : shadows[elevation],
      transform: interactive && hover ? 'translateY(-3px)' : 'none',
      cursor: interactive ? 'pointer' : undefined,
      transition: 'transform var(--duration-base) var(--ease-standard), box-shadow var(--duration-base) var(--ease-standard)',
      ...surfaces[surface]
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Eyebrow({
  tone = 'muted',
  rule = false,
  children,
  ...rest
}) {
  const colors = {
    muted: 'var(--text-muted)',
    brand: 'var(--text-brand)',
    inverse: 'rgba(247,247,242,.68)'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      marginBottom: 'var(--space-5)'
    }
  }, rest), rule && /*#__PURE__*/React.createElement("span", {
    style: {
      width: '28px',
      height: '1px',
      background: 'currentColor',
      color: colors[tone],
      opacity: .5
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-small)',
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--weight-medium)',
      fontSize: 'var(--size-eyebrow)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: colors[tone]
    }
  }, children));
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Logo({
  size = 32,
  showWordmark = true,
  tone = 'ink',
  src = '../../assets/logo-mark.png',
  ...rest
}) {
  const colors = {
    ink: 'var(--ink-900)',
    brand: 'var(--green-600)',
    inverse: 'var(--shell-000)'
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px'
    }
  }, rest), /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "Geocommerce",
    width: size,
    height: size,
    style: {
      width: size,
      height: size,
      objectFit: 'contain'
    }
  }), showWordmark && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-medium)',
      fontSize: size * 0.66,
      letterSpacing: '-0.02em',
      color: colors[tone]
    }
  }, "Geocommerce"));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled,
  ...rest
}) {
  const [inner, setInner] = React.useState(!!defaultChecked);
  const isOn = checked !== undefined ? checked : inner;
  const toggle = () => {
    if (disabled) return;
    if (checked === undefined) setInner(!isOn);
    onChange && onChange(!isOn);
  };
  return /*#__PURE__*/React.createElement("label", _extends({
    onClick: toggle,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '11px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .45 : 1,
      font: 'var(--text-base)',
      fontSize: '15px',
      color: 'var(--text-body)'
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: '20px',
      height: '20px',
      flex: '0 0 20px',
      display: 'grid',
      placeItems: 'center',
      borderRadius: 'var(--radius-xs)',
      background: isOn ? 'var(--surface-brand)' : 'var(--surface-raised)',
      border: '1px solid ' + (isOn ? 'var(--surface-brand)' : 'var(--border-subtle)'),
      color: 'var(--shell-000)',
      fontSize: '12px',
      lineHeight: 1,
      transition: 'var(--transition-control)'
    }
  }, isOn ? '✓' : ''), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  hint,
  error,
  type = 'text',
  tone = 'light',
  id,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inverse = tone === 'inverse';
  const fieldId = id || 'in-' + React.useId();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      font: 'var(--text-label)',
      color: inverse ? 'rgba(247,247,242,.8)' : 'var(--text-heading)'
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    type: type,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      height: 'var(--control-height-md)',
      padding: '0 16px',
      borderRadius: 'var(--radius-sm)',
      font: 'var(--text-base)',
      fontSize: '15px',
      color: inverse ? 'var(--shell-000)' : 'var(--text-heading)',
      background: inverse ? 'rgba(247,247,242,.06)' : 'var(--surface-raised)',
      border: '1px solid ' + (error ? 'var(--accent-critical)' : focus ? 'var(--border-brand)' : inverse ? 'rgba(247,247,242,.2)' : 'var(--border-subtle)'),
      boxShadow: focus ? 'var(--ring-focus)' : 'none',
      outline: 'none',
      transition: 'var(--transition-control)'
    }
  }, rest)), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-small)',
      fontSize: '13px',
      color: error ? 'var(--accent-critical)' : inverse ? 'rgba(247,247,242,.55)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  label,
  hint,
  options = [],
  tone = 'light',
  id,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inverse = tone === 'inverse';
  const fieldId = id || 'sel-' + React.useId();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      font: 'var(--text-label)',
      color: inverse ? 'rgba(247,247,242,.8)' : 'var(--text-heading)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: fieldId,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      height: 'var(--control-height-md)',
      padding: '0 40px 0 16px',
      appearance: 'none',
      borderRadius: 'var(--radius-sm)',
      font: 'var(--text-base)',
      fontSize: '15px',
      color: inverse ? 'var(--shell-000)' : 'var(--text-heading)',
      background: inverse ? 'rgba(247,247,242,.06)' : 'var(--surface-raised)',
      border: '1px solid ' + (focus ? 'var(--border-brand)' : inverse ? 'rgba(247,247,242,.2)' : 'var(--border-subtle)'),
      boxShadow: focus ? 'var(--ring-focus)' : 'none',
      outline: 'none',
      transition: 'var(--transition-control)'
    }
  }, rest), options.map(o => typeof o === 'string' ? /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o) : /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: '16px',
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      color: 'var(--text-muted)',
      fontSize: '11px'
    }
  }, "\u25BC")), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-small)',
      fontSize: '13px',
      color: 'var(--text-muted)'
    }
  }, hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Textarea({
  label,
  hint,
  error,
  rows = 5,
  tone = 'light',
  id,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inverse = tone === 'inverse';
  const fieldId = id || 'ta-' + React.useId();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      font: 'var(--text-label)',
      color: inverse ? 'rgba(247,247,242,.8)' : 'var(--text-heading)'
    }
  }, label), /*#__PURE__*/React.createElement("textarea", _extends({
    id: fieldId,
    rows: rows,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      padding: '14px 16px',
      borderRadius: 'var(--radius-sm)',
      resize: 'vertical',
      font: 'var(--text-base)',
      fontSize: '15px',
      color: inverse ? 'var(--shell-000)' : 'var(--text-heading)',
      background: inverse ? 'rgba(247,247,242,.06)' : 'var(--surface-raised)',
      border: '1px solid ' + (error ? 'var(--accent-critical)' : focus ? 'var(--border-brand)' : inverse ? 'rgba(247,247,242,.2)' : 'var(--border-subtle)'),
      boxShadow: focus ? 'var(--ring-focus)' : 'none',
      outline: 'none',
      transition: 'var(--transition-control)'
    }
  }, rest)), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-small)',
      fontSize: '13px',
      color: error ? 'var(--accent-critical)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/marketing/Accordion.jsx
try { (() => {
function Accordion({
  items = [],
  defaultOpen = 0,
  ...rest
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  return /*#__PURE__*/React.createElement("div", rest, items.map((it, i) => {
    const isOpen = open === i;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        borderTop: '1px solid var(--border-hairline)'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setOpen(isOpen ? -1 : i),
      style: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 'var(--space-6)',
        padding: 'var(--space-6) 0',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        textAlign: 'left',
        font: 'var(--text-h6)',
        fontFamily: 'var(--font-body)',
        color: isOpen ? 'var(--text-brand)' : 'var(--text-heading)',
        transition: 'color var(--duration-base) var(--ease-standard)'
      }
    }, it.q, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '20px',
        lineHeight: 1,
        transform: isOpen ? 'rotate(45deg)' : 'none',
        transition: 'transform var(--duration-base) var(--ease-standard)'
      }
    }, "+")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateRows: isOpen ? '1fr' : '0fr',
        transition: 'grid-template-rows var(--duration-base) var(--ease-standard)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '0 0 var(--space-6)',
        font: 'var(--text-base)',
        color: 'var(--text-muted)',
        maxWidth: '68ch'
      }
    }, it.a))));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/marketing/CaseStudyCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function CaseStudyCard({
  image,
  category,
  title,
  excerpt,
  href = '#',
  ratio = '4 / 3',
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: ratio,
      borderRadius: 'var(--radius-media)',
      overflow: 'hidden',
      background: 'var(--shell-100)'
    }
  }, image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transform: hover ? 'scale(1.04)' : 'scale(1)',
      transition: 'transform var(--duration-slow) var(--ease-standard)'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      display: 'grid',
      placeItems: 'center',
      color: 'var(--text-faint)',
      font: 'var(--text-small)'
    }
  }, "Image")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-5)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--size-eyebrow)',
      fontWeight: 'var(--weight-medium)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, category), /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: 'var(--space-3) 0 var(--space-2)',
      font: 'var(--text-h6)',
      color: 'var(--text-heading)'
    }
  }, title), excerpt && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 var(--space-4)',
      font: 'var(--text-small)',
      color: 'var(--text-muted)'
    }
  }, excerpt), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(__ds_scope.ArrowLink, {
    href: href,
    size: "sm"
  }, "View Case Study")));
}
Object.assign(__ds_scope, { CaseStudyCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/CaseStudyCard.jsx", error: String((e && e.message) || e) }); }

// components/marketing/LogoWall.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function LogoWall({
  logos = [],
  columns = 6,
  tone = 'light',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(' + columns + ', 1fr)',
      gap: 'var(--space-8) var(--space-10)',
      alignItems: 'center'
    }
  }, rest), logos.map((l, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      height: '34px',
      display: 'grid',
      placeItems: 'center',
      font: 'var(--text-label)',
      letterSpacing: '0.04em',
      textTransform: 'uppercase',
      color: tone === 'inverse' ? 'rgba(247,247,242,.55)' : 'var(--text-faint)',
      opacity: .85
    }
  }, typeof l === 'string' && /\.(svg|png|jpg|webp|avif)/.test(l) ? /*#__PURE__*/React.createElement("img", {
    src: l,
    alt: "",
    style: {
      maxHeight: '34px',
      width: 'auto',
      filter: 'grayscale(1)',
      opacity: .7
    }
  }) : l)));
}
Object.assign(__ds_scope, { LogoWall });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/LogoWall.jsx", error: String((e && e.message) || e) }); }

// components/marketing/ProcessStep.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ProcessStep({
  number,
  title,
  body,
  active = false,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'grid',
      gridTemplateColumns: '64px 1fr',
      gap: 'var(--space-6)',
      padding: 'var(--space-8) 0',
      borderTop: '1px solid var(--border-hairline)'
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--size-h5)',
      fontWeight: 'var(--weight-light)',
      color: active ? 'var(--text-brand)' : 'var(--text-faint)',
      lineHeight: 1.2
    }
  }, number), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", {
    style: {
      margin: '0 0 var(--space-2)',
      font: 'var(--text-h6)',
      color: 'var(--text-heading)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--text-base)',
      color: 'var(--text-muted)',
      maxWidth: '58ch'
    }
  }, body)));
}
Object.assign(__ds_scope, { ProcessStep });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/ProcessStep.jsx", error: String((e && e.message) || e) }); }

// components/marketing/ServiceCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ServiceCard({
  index,
  category,
  title,
  body,
  href,
  surface = 'raised',
  ...rest
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.Card, _extends({
    surface: surface,
    padding: "lg",
    interactive: !!href,
    elevation: "sm"
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--size-eyebrow)',
      fontWeight: 'var(--weight-medium)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: surface === 'inverse' ? 'rgba(247,247,242,.6)' : 'var(--text-muted)'
    }
  }, category, index ? ' / ' + index : ''), /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: 'var(--space-5) 0 var(--space-3)',
      font: 'var(--text-h5)',
      letterSpacing: 'var(--tracking-heading)',
      color: surface === 'inverse' ? 'var(--shell-000)' : 'var(--text-heading)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--text-base)',
      color: surface === 'inverse' ? 'rgba(247,247,242,.72)' : 'var(--text-muted)'
    }
  }, body), href && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.ArrowLink, {
    href: href,
    tone: surface === 'inverse' ? 'inverse' : 'brand',
    size: "sm"
  }, "Explore")));
}
Object.assign(__ds_scope, { ServiceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/ServiceCard.jsx", error: String((e && e.message) || e) }); }

// components/marketing/StatBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function StatBlock({
  value,
  label,
  tone = 'ink',
  align = 'left',
  size = 'md',
  ...rest
}) {
  const colors = {
    ink: 'var(--ink-900)',
    brand: 'var(--green-600)',
    inverse: 'var(--shell-000)'
  };
  const labelColors = {
    ink: 'var(--text-muted)',
    brand: 'var(--text-muted)',
    inverse: 'rgba(247,247,242,.62)'
  };
  const sizes = {
    sm: 'var(--size-h4)',
    md: 'var(--size-h3)',
    lg: 'var(--size-h2)'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      textAlign: align
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-medium)',
      fontSize: sizes[size],
      lineHeight: 'var(--leading-tight)',
      letterSpacing: 'var(--tracking-heading)',
      color: colors[tone]
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-2)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--size-eyebrow)',
      fontWeight: 'var(--weight-medium)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: labelColors[tone]
    }
  }, label));
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/StatBlock.jsx", error: String((e && e.message) || e) }); }

// components/marketing/Testimonial.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Testimonial({
  quote,
  name,
  role,
  avatar,
  tone = 'light',
  ...rest
}) {
  const inverse = tone === 'inverse';
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: {
      margin: 0,
      maxWidth: '860px'
    }
  }, rest), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      font: 'var(--text-h4)',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-light)',
      letterSpacing: 'var(--tracking-heading)',
      lineHeight: 1.32,
      color: inverse ? 'var(--shell-000)' : 'var(--text-heading)',
      textWrap: 'pretty'
    }
  }, quote), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)',
      marginTop: 'var(--space-8)'
    }
  }, avatar && /*#__PURE__*/React.createElement("img", {
    src: avatar,
    alt: "",
    style: {
      width: '44px',
      height: '44px',
      borderRadius: '50%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-label)',
      color: inverse ? 'var(--shell-000)' : 'var(--text-heading)'
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-small)',
      fontSize: '13px',
      color: inverse ? 'rgba(247,247,242,.6)' : 'var(--text-muted)'
    }
  }, role))));
}
Object.assign(__ds_scope, { Testimonial });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/Testimonial.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/ContactScreen.jsx
try { (() => {
const {
  Eyebrow,
  Button,
  Input,
  Select,
  Textarea,
  Checkbox,
  Card,
  Badge
} = window.GeocommerceDesignSystem_0dc456;
function ContactScreen() {
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '0.85fr 1.15fr',
      gap: '80px',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    rule: true
  }, "Project inquiry"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: '44px',
      marginBottom: '20px'
    }
  }, "Planning a Shopify redesign, CRO project, or growth-focused rebuild?"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-lead)',
      color: 'var(--text-muted)'
    }
  }, "Tell us what you want to improve, and we'll help shape the right next step for your store."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '10px',
      marginTop: '28px',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "brand",
    dot: true
  }, "Replies in one business day"), /*#__PURE__*/React.createElement(Badge, {
    tone: "outline"
  }, "UK & India"))), /*#__PURE__*/React.createElement(Card, {
    surface: "raised",
    padding: "lg",
    elevation: "md"
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '40px 0',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      marginBottom: '10px'
    }
  }, "Thanks \u2014 we've got it."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-base)',
      color: 'var(--text-muted)',
      margin: '0 0 24px'
    }
  }, "A strategist will reply within one business day."), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => setSent(false)
  }, "Send another")) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '20px'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Name",
    placeholder: "Your name"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Work email",
    type: "email",
    placeholder: "you@brand.com"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Store URL",
    placeholder: "brand.myshopify.com"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Budget",
    options: ['Select a range', 'Under $10k', '$10k–$25k', '$25k–$60k', '$60k+']
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1'
    }
  }, /*#__PURE__*/React.createElement(Select, {
    label: "What do you need?",
    options: ['Storefront redesign', 'CRO programme', 'Shopify Plus build', 'Migration', 'Something else']
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1'
    }
  }, /*#__PURE__*/React.createElement(Textarea, {
    label: "What do you want to improve?",
    rows: 4,
    placeholder: "PDP conversion, checkout drop-off, page speed\u2026"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1'
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    label: "Send me the quarterly Shopify CRO teardown"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    fullWidth: true,
    onClick: () => setSent(true),
    iconRight: "\u2192"
  }, "Send inquiry"))))));
}
Object.assign(window, {
  ContactScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/ContactScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/HomeScreen.jsx
try { (() => {
const {
  Button,
  ArrowLink,
  Badge,
  Eyebrow,
  Card,
  StatBlock,
  ServiceCard,
  CaseStudyCard,
  ProcessStep,
  Testimonial,
  LogoWall
} = window.GeocommerceDesignSystem_0dc456;
function HomeScreen({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.05fr .95fr',
      gap: '64px',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Shopify design, development, and CRO"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: '68px',
      marginBottom: '24px'
    }
  }, "We build Shopify experiences that ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'italic',
      fontWeight: 300,
      color: 'var(--green-600)'
    }
  }, "convert"), " better"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-lead)',
      color: 'var(--text-muted)',
      maxWidth: '54ch',
      marginBottom: '32px'
    }
  }, "Geocommerce helps ecommerce brands grow through premium Shopify design, development, CRO, and performance-focused execution. From redesigns and storefront optimization to Shopify Plus builds and migrations."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '14px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => onNavigate('contact')
  }, "Start Your Project"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary",
    onClick: () => onNavigate('work'),
    iconRight: "\u2192"
  }, "View Case Studies")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '48px',
      marginTop: '56px',
      paddingTop: '28px',
      borderTop: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement(StatBlock, {
    size: "sm",
    value: "150+",
    label: "Plus stores launched"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    size: "sm",
    value: "+24%",
    label: "Avg conversion lift"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    size: "sm",
    value: "$500M+",
    label: "Merchant GMV"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '4 / 5',
      borderRadius: 'var(--radius-xl)',
      background: 'linear-gradient(160deg,var(--green-700),var(--green-900))',
      display: 'grid',
      placeItems: 'center',
      boxShadow: 'var(--shadow-lg)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-mark.png",
    alt: "",
    style: {
      width: '46%',
      opacity: .95
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      bottom: '26px',
      left: '28px',
      font: 'var(--text-small)',
      fontSize: '12px',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: 'rgba(247,247,242,.5)'
    }
  }, "Hero image placeholder")))), /*#__PURE__*/React.createElement(Section, {
    tone: "sunken",
    tight: true
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Trusted by ambitious ecommerce brands"), /*#__PURE__*/React.createElement(LogoWall, {
    columns: 6,
    logos: ['Stillersafe', 'Suntannd', 'Plentum', 'Mulya', 'Rococo', 'Cleansource']
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '10px',
      marginTop: '40px',
      flexWrap: 'wrap'
    }
  }, ['Shopify-focused expertise', 'Unified design + dev', 'Conversion-led execution', 'Premium storefront delivery'].map(c => /*#__PURE__*/React.createElement(Badge, {
    key: c,
    tone: "outline"
  }, c)))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(Eyebrow, {
    rule: true
  }, "Our expertise"), /*#__PURE__*/React.createElement("h2", {
    style: {
      maxWidth: '18ch',
      marginBottom: '20px'
    }
  }, "How we help brands grow on Shopify"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-lead)',
      color: 'var(--text-muted)',
      maxWidth: '62ch',
      marginBottom: '56px'
    }
  }, "From premium redesigns to CRO improvements and Shopify Plus execution, Geocommerce helps brands create stronger shopping experiences and better conversion journeys."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2,1fr)',
      gap: '20px'
    }
  }, /*#__PURE__*/React.createElement(ServiceCard, {
    index: "01",
    category: "Design",
    title: "Shopify redesigns that improve conversion",
    body: "Focus on premium design, UX clarity, storytelling, and stronger brand presentation.",
    href: "#"
  }), /*#__PURE__*/React.createElement(ServiceCard, {
    index: "02",
    category: "Optimization",
    title: "CRO-led storefront optimization",
    body: "Product page improvements, collection UX, merchandising, mobile experience, and better purchase journeys.",
    href: "#"
  }), /*#__PURE__*/React.createElement(ServiceCard, {
    index: "03",
    category: "Engineering",
    title: "Shopify development for scaling brands",
    body: "Robust execution, scalable storefronts, performance, and deep Shopify expertise.",
    href: "#"
  }), /*#__PURE__*/React.createElement(ServiceCard, {
    index: "04",
    category: "Strategy",
    title: "Migration and rebuilds without growth disruption",
    body: "Moving to Shopify or rebuilding stores while protecting user experience, brand quality, and sales continuity.",
    href: "#"
  }))), /*#__PURE__*/React.createElement(Section, {
    tone: "inverse",
    tight: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: '32px'
    }
  }, /*#__PURE__*/React.createElement(StatBlock, {
    tone: "inverse",
    value: "+24%",
    label: "Avg conversion lift"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    tone: "inverse",
    value: "150+",
    label: "Plus stores launched"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    tone: "inverse",
    value: "3.2s",
    label: "Avg load time"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    tone: "inverse",
    value: "$500M+",
    label: "Merchant GMV optimized"
  }))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(Eyebrow, {
    rule: true
  }, "Selected Shopify engagements"), /*#__PURE__*/React.createElement("h2", {
    style: {
      maxWidth: '22ch',
      marginBottom: '56px'
    }
  }, "A look at redesigns, CRO improvements, builds, and migrations"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: '32px'
    }
  }, /*#__PURE__*/React.createElement(CaseStudyCard, {
    category: "Beauty / Redesign",
    title: "Premium skincare redesign on Shopify",
    excerpt: "A complete visual and structural overhaul focusing on tactile UI."
  }), /*#__PURE__*/React.createElement(CaseStudyCard, {
    category: "Growth / Optimization",
    title: "CRO-led PDP and conversion optimization",
    excerpt: "Systematic iterative testing and UI refinements resulting in a 34% increase."
  }), /*#__PURE__*/React.createElement(CaseStudyCard, {
    category: "Fashion / Migration",
    title: "Shopify migration with storefront performance",
    excerpt: "Transitioning from legacy infrastructure to a headless Shopify build."
  }))), /*#__PURE__*/React.createElement(Section, {
    tone: "sunken"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    rule: true
  }, "Our methodology"), /*#__PURE__*/React.createElement("h2", {
    style: {
      maxWidth: '20ch',
      marginBottom: '48px'
    }
  }, "A structured approach to better Shopify growth"), /*#__PURE__*/React.createElement("div", null, [['01', 'Discovery and growth audit', 'We analyze your current metrics and identify key opportunities for Shopify growth, establishing the strategic foundation for all subsequent work.'], ['02', 'UX strategy and wireframing', 'Defining the user journey and high-level structure to ensure maximum conversion potential through friction-less digital architecture.'], ['03', 'Design direction and storefront planning', 'Creating a bespoke visual language that elevates your brand and engages shoppers with high-fidelity, polished aesthetics.'], ['04', 'Shopify development and QA', 'Robust, high-performance Liquid development and rigorous quality assurance so your store scales without technical debt.'], ['05', 'Launch support', 'Seamless transition to your new storefront with full performance monitoring and strategic SEO protection for zero traffic loss.'], ['06', 'CRO and continuous improvement', 'Ongoing testing and data-led optimization for long-term growth and technical scalability.']].map(([n, t, b], i) => /*#__PURE__*/React.createElement(ProcessStep, {
    key: n,
    number: n,
    title: t,
    body: b,
    active: i === 0
  })))), /*#__PURE__*/React.createElement(Section, {
    tone: "inverse"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "inverse",
    rule: true
  }, "Partner success story"), /*#__PURE__*/React.createElement(Testimonial, {
    tone: "inverse",
    quote: "\u201CGeocommerce didn't just redesign our store; they reimagined our entire customer journey on Shopify Plus. The collaboration was seamless, the design is world-class, and the impact on our conversion rate was immediate and measurable.\u201D",
    name: "Founder",
    role: "Premium D2C fashion brand"
  })), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr auto',
      gap: '48px',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      marginBottom: '14px'
    }
  }, "Ready for a refined approach?"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-lead)',
      color: 'var(--text-muted)',
      margin: 0,
      maxWidth: '52ch'
    }
  }, "We don't just build stores; we engineer growth engines for the world's most ambitious Shopify Plus brands.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '14px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => onNavigate('contact'),
    iconRight: "\u2192"
  }, "Start Your Project"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary",
    onClick: () => onNavigate('work')
  }, "View Case Studies")))));
}
Object.assign(window, {
  HomeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/ServicesScreen.jsx
try { (() => {
const {
  Eyebrow,
  ServiceCard,
  Accordion,
  Badge,
  Button,
  Card
} = window.GeocommerceDesignSystem_0dc456;
function ServicesScreen({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Section, {
    tight: true
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    rule: true
  }, "Services"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: '56px',
      maxWidth: '18ch',
      marginBottom: '24px'
    }
  }, "Design, development and CRO under one roof"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-lead)',
      color: 'var(--text-muted)',
      maxWidth: '60ch'
    }
  }, "Every engagement is scoped around a measurable outcome: a higher conversion rate, a faster storefront, or a migration that protects the revenue you already have.")), /*#__PURE__*/React.createElement(Section, {
    tight: true,
    style: {
      paddingTop: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2,1fr)',
      gap: '20px'
    }
  }, /*#__PURE__*/React.createElement(ServiceCard, {
    index: "01",
    category: "Design",
    title: "Storefront redesign",
    body: "Premium design, UX clarity, storytelling, and stronger brand presentation.",
    href: "#"
  }), /*#__PURE__*/React.createElement(ServiceCard, {
    index: "02",
    category: "Optimization",
    title: "CRO programme",
    body: "PDP and collection improvements, merchandising, and mobile purchase journeys.",
    href: "#"
  }), /*#__PURE__*/React.createElement(ServiceCard, {
    index: "03",
    category: "Engineering",
    title: "Shopify & Plus development",
    body: "Liquid, Hydrogen and APIs. Scalable storefronts built for performance.",
    href: "#"
  }), /*#__PURE__*/React.createElement(ServiceCard, {
    index: "04",
    category: "Strategy",
    title: "Migration and rebuild",
    body: "Move to Shopify without disrupting traffic, rankings or sales continuity.",
    surface: "inverse",
    href: "#"
  }))), /*#__PURE__*/React.createElement(Section, {
    tone: "sunken"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '0.8fr 1.2fr',
      gap: '64px'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    rule: true
  }, "Common questions"), /*#__PURE__*/React.createElement("h3", {
    style: {
      maxWidth: '14ch'
    }
  }, "What working with us looks like")), /*#__PURE__*/React.createElement(Accordion, {
    items: [{
      q: 'How long does a storefront redesign take?',
      a: 'Most redesigns run 8–12 weeks from discovery to launch, depending on catalogue size and the number of custom templates.'
    }, {
      q: 'Do you work on Shopify Plus?',
      a: 'Yes. Plus builds, migrations, checkout extensibility and ongoing CRO programmes are the majority of our work.'
    }, {
      q: 'Can you take over an existing theme?',
      a: 'We audit the theme first, then either extend it or rebuild the sections that block conversion. We will tell you honestly which is cheaper.'
    }, {
      q: 'What happens after launch?',
      a: 'Launch support covers performance monitoring and SEO protection, then a continuous CRO cycle if you want one.'
    }]
  }))), /*#__PURE__*/React.createElement(Section, {
    tight: true
  }, /*#__PURE__*/React.createElement(Card, {
    surface: "brand",
    padding: "lg"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '40px'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      color: 'var(--shell-000)',
      marginBottom: '10px'
    }
  }, "Planning a redesign or rebuild?"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--text-lead)',
      color: 'rgba(247,247,242,.82)'
    }
  }, "Tell us what you want to improve and we'll shape the right next step.")), /*#__PURE__*/React.createElement(Button, {
    variant: "inverse",
    size: "lg",
    onClick: () => onNavigate('contact'),
    iconRight: "\u2192"
  }, "Get in touch")))));
}
Object.assign(window, {
  ServicesScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/ServicesScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/SiteChrome.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Button,
  ArrowLink,
  Logo
} = window.GeocommerceDesignSystem_0dc456;
function SiteHeader({
  page,
  onNavigate
}) {
  const nav = ['Work', 'Services', 'About', 'Insights', 'Contact'];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      background: 'rgba(247,247,242,.86)',
      backdropFilter: 'blur(14px)',
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 32px',
      height: '78px',
      display: 'flex',
      alignItems: 'center',
      gap: '40px'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate('home');
    },
    style: {
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    size: 30,
    src: "../../assets/logo-mark.png"
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: '30px',
      marginLeft: 'auto'
    }
  }, nav.map(n => {
    const key = n.toLowerCase();
    const active = page === key;
    return /*#__PURE__*/React.createElement("a", {
      key: n,
      href: "#",
      onClick: e => {
        e.preventDefault();
        onNavigate(key);
      },
      style: {
        font: 'var(--text-label)',
        color: active ? 'var(--text-brand)' : 'var(--ink-800)',
        textDecoration: 'none',
        paddingBottom: '3px',
        borderBottom: '1px solid ' + (active ? 'var(--green-600)' : 'transparent')
      }
    }, n);
  })), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    onClick: () => onNavigate('contact')
  }, "Book a Consultation")));
}
function SiteFooter({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--green-900)',
      color: 'rgba(247,247,242,.7)',
      padding: '80px 32px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '2fr 1fr 1fr 1fr',
      gap: '48px'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Logo, {
    size: 30,
    tone: "inverse",
    src: "../../assets/logo-mark.png"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '20px 0 0',
      font: 'var(--text-small)',
      color: 'rgba(247,247,242,.62)',
      maxWidth: '34ch'
    }
  }, "High-end editorial Shopify experiences for brands who demand bespoke craftsmanship and tactical execution.")), [{
    h: 'Agency',
    items: ['Work', 'Services', 'About', 'Insights', 'Contact']
  }, {
    h: 'UK',
    items: ['Unit 3, George Street', 'Lincoln — LN5 8LG', 'hello@geocommerce.co.uk', '+44 7361 904470']
  }, {
    h: 'India',
    items: ['C-28, Lane No.1', '22 Godam Ind. Area', 'Jaipur — 302006', 'hello@geocommerce.co']
  }].map(col => /*#__PURE__*/React.createElement("div", {
    key: col.h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-label)',
      fontSize: '12px',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--shell-000)',
      marginBottom: '16px'
    }
  }, col.h), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '9px'
    }
  }, col.items.map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      font: 'var(--text-small)',
      fontSize: '13px',
      color: 'rgba(247,247,242,.62)'
    }
  }, i)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '56px auto 0',
      paddingTop: '24px',
      borderTop: '1px solid rgba(247,247,242,.12)',
      display: 'flex',
      justifyContent: 'space-between',
      font: 'var(--text-small)',
      fontSize: '12px',
      color: 'rgba(247,247,242,.45)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Geocommerce"), /*#__PURE__*/React.createElement("span", null, "Privacy policy \xB7 Terms of service")));
}
function Section({
  children,
  tone = 'page',
  tight = false,
  style,
  ...rest
}) {
  const bg = {
    page: 'var(--surface-page)',
    sunken: 'var(--surface-sunken)',
    inverse: 'var(--green-900)'
  }[tone];
  return /*#__PURE__*/React.createElement("section", _extends({
    style: {
      background: bg,
      padding: (tight ? '80px' : '128px') + ' 32px',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto'
    }
  }, children));
}
Object.assign(window, {
  SiteHeader,
  SiteFooter,
  Section
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/SiteChrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/WorkScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Eyebrow,
  Badge,
  CaseStudyCard,
  StatBlock
} = window.GeocommerceDesignSystem_0dc456;
const CASES = [{
  category: 'Beauty / Redesign',
  title: 'Premium skincare redesign on Shopify',
  excerpt: 'A complete visual and structural overhaul focusing on tactile UI and editorial pacing.',
  filter: 'Redesign'
}, {
  category: 'Growth / Optimization',
  title: 'CRO-led PDP and conversion optimization',
  excerpt: 'Systematic iterative testing and UI refinements resulting in a 34% increase.',
  filter: 'CRO'
}, {
  category: 'Fashion / Migration',
  title: 'Shopify migration with storefront performance',
  excerpt: 'Transitioning from legacy infrastructure to a headless Shopify build.',
  filter: 'Migration'
}, {
  category: 'Wellness / Redesign',
  title: 'Subscription-first storefront rebuild',
  excerpt: 'Recurring purchase flows rebuilt around retention, not acquisition.',
  filter: 'Redesign'
}, {
  category: 'Home / Optimization',
  title: 'Collection merchandising overhaul',
  excerpt: 'Faceted browsing and merchandising rules across a 2,400-SKU catalogue.',
  filter: 'CRO'
}, {
  category: 'Food / Migration',
  title: 'Legacy platform move to Shopify Plus',
  excerpt: 'Zero-downtime cutover with full SEO parity on launch day.',
  filter: 'Migration'
}];
function WorkScreen() {
  const [filter, setFilter] = React.useState('All');
  const filters = ['All', 'Redesign', 'CRO', 'Migration'];
  const shown = filter === 'All' ? CASES : CASES.filter(c => c.filter === filter);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Section, {
    tight: true
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    rule: true
  }, "Selected work"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: '56px',
      maxWidth: '20ch',
      marginBottom: '24px'
    }
  }, "Redesigns, CRO programmes, builds and migrations"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-lead)',
      color: 'var(--text-muted)',
      maxWidth: '60ch'
    }
  }, "Delivered for ambitious ecommerce brands looking to scale through technical excellence and user-centric design."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '10px',
      marginTop: '40px'
    }
  }, filters.map(fl => /*#__PURE__*/React.createElement("button", {
    key: fl,
    onClick: () => setFilter(fl),
    style: {
      padding: '8px 18px',
      borderRadius: 'var(--radius-pill)',
      cursor: 'pointer',
      font: 'var(--text-label)',
      fontSize: '13px',
      background: filter === fl ? 'var(--surface-brand)' : 'transparent',
      color: filter === fl ? 'var(--text-on-brand)' : 'var(--ink-700)',
      border: '1px solid ' + (filter === fl ? 'var(--surface-brand)' : 'var(--border-subtle)'),
      transition: 'var(--transition-control)'
    }
  }, fl)))), /*#__PURE__*/React.createElement(Section, {
    tight: true,
    style: {
      paddingTop: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: '32px 32px'
    }
  }, shown.map(c => /*#__PURE__*/React.createElement(CaseStudyCard, _extends({
    key: c.title
  }, c))))), /*#__PURE__*/React.createElement(Section, {
    tone: "inverse",
    tight: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: '32px'
    }
  }, /*#__PURE__*/React.createElement(StatBlock, {
    tone: "inverse",
    value: "34%",
    label: "Peak PDP conversion lift"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    tone: "inverse",
    value: "8\u201312 wk",
    label: "Typical redesign runway"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    tone: "inverse",
    value: "0",
    label: "Migrations with traffic loss"
  }))));
}
Object.assign(window, {
  WorkScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/WorkScreen.jsx", error: String((e && e.message) || e) }); }

__ds_ns.ArrowLink = __ds_scope.ArrowLink;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.CaseStudyCard = __ds_scope.CaseStudyCard;

__ds_ns.LogoWall = __ds_scope.LogoWall;

__ds_ns.ProcessStep = __ds_scope.ProcessStep;

__ds_ns.ServiceCard = __ds_scope.ServiceCard;

__ds_ns.StatBlock = __ds_scope.StatBlock;

__ds_ns.Testimonial = __ds_scope.Testimonial;

})();
