const enNavbar = {
  hideOnScroll: true,
  title: "COK AI",
  logo: {
    alt: "COK AI",
    src: "img/logo.svg",
  },
  items: [
    {
      href: 'https://www.producthunt.com/posts/cok.ai?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-chatgpt&#0045;shortcut',
      label: 'Find on Product Hunt',
      target: '_blank',
      position: 'left',
    },
    {
      to: "https://www.cok.ai/en/feedback",
      label: "Feedback",
      position: "left",
    },
    { type: "localeDropdown", position: "right" },
    {
      href: "https://github.com/privacyrepo/cok.ai",
      position: "right",
      className: "header-github-link",
    },
    {
      href: "https://discord.gg/PZTQfJ4GjX",
      position: "right",
      className: "header-discord-link",
    },
  ],
};

module.exports = enNavbar;
