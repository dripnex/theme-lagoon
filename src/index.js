/**
 * Lagoon — satellite Dripnex theme.
 * Token layer only. Same contract as a community theme repo.
 * Must be CommonJS.
 *
 * Good vibes lagoon. Turquoise water paper.
 */

const TOKENS = {
  '--bg-base': '#e6f7fa',
  '--bg-surface': '#d5eef3',
  '--bg-elevated': '#f3fbfd',
  '--bg-inset': '#c2e4eb',
  '--bg-hover': 'rgba(20, 48, 56, 0.05)',
  '--bg-active': 'rgba(20, 48, 56, 0.09)',
  '--text-primary': '#143038',
  '--text-secondary': 'rgba(20, 48, 56, 0.74)',
  '--text-muted': 'rgba(20, 48, 56, 0.52)',
  '--text-faint': 'rgba(20, 48, 56, 0.34)',
  '--border': 'rgba(20, 48, 56, 0.12)',
  '--border-subtle': 'rgba(20, 48, 56, 0.07)',
  '--border-strong': 'rgba(20, 48, 56, 0.18)',
  '--accent': '#1a9bb5',
  '--accent-hover': '#157f96',
  '--accent-muted': 'rgba(26, 155, 181, 0.2)',
  '--accent-subtle': 'rgba(26, 155, 181, 0.1)',
  '--glass-bg': 'rgba(230, 247, 250, 0.92)',
  '--glass-border': 'rgba(20, 48, 56, 0.1)',
  '--glass-bg-menu': 'rgba(243, 251, 253, 0.96)',
  '--glass-border-menu': 'rgba(20, 48, 56, 0.1)',
  '--status-active': '#1a9bb5',
  '--status-on-hold': '#d4a04a',
  '--status-completed': '#5a9a62',
  '--status-dropped': '#c45a5a',
};

module.exports = {
  id: 'theme-lagoon',
  name: 'Lagoon',
  version: '0.1.0',
  description: "Good vibes lagoon. Turquoise water paper.",

  activate(context) {
    const remove = context.registerTheme({
      id: 'dripnex-lagoon',
      name: 'Lagoon',
      description: "Good vibes lagoon. Turquoise water paper.",
      author: 'Dripnex',
      colorScheme: 'light',
      tokens: TOKENS,
    });

    return {
      dispose() {
        remove();
      },
    };
  },
};
