const zhNavbar = {
  hideOnScroll: true,
  title: "COK AI",
  logo: {
    alt: "COK AI",
    src: "img/logo.svg",
  },
  items: [
    {
      to: "https://newzone.top/posts/2023-02-27-chatgpt_shortcuts.html",
      label: "COK AI 原理说明",
      position: "left",
    },
    {
      type: 'dropdown',
      label: '其他工具',
      position: 'left',
      items: [
        {
          label: "Chrome 扩展版",
          href: "https://chrome.google.com/webstore/detail/cok.ai/blcgeoojgdpodnmnhfpohphdhfncblnj",
        },
        {
          label: 'IMGPrompt',
          href: 'https://prompt.newzone.top/',
        },
        {
          label: '文字处理',
          href: 'https://tools.newzone.top/',
        },
        {
          label: '工具收藏',
          href: 'https://nav.newzone.top',
        },
        {
          label: 'Find on Product Hunt',
          href: 'https://www.producthunt.com/posts/cok.ai?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-chatgpt&#0045;shortcut',
        },
      ],
    },
    {
      to: "https://www.cok.ai/feedback",
      label: "反馈",
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

module.exports = zhNavbar;
