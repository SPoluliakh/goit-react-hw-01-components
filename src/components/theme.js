export const theme = Object.freeze({
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },
  fontSizes: {
    xs: 12,
    s: 14,
    m: 16,
    ml: 24,
    l: 32,
    xl: 64,
  },
  fontWeights: {
    normal: 400,
    medium: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    text: '#000',
    statsText: '#ff9',
    background: '#fff',
    primary: '#07c',
    secondary: '#30c',
    muted: '#f6f6f6',
    profile: 'yellow',
    profileList: 'rgba(255, 213, 0, 0.73)',
    statsTitle: '#00000099',
    online: 'green',
    offline: 'red',
  },
  radii: {
    none: '0',
    normal: '10px',
    round: '50%',
  },
  borders: {
    none: 'none',
    normal: '1px dashed grey',
  },
  shadows: {
    boxShadow: '#ff9 0px 0px 20px',
  },
});
