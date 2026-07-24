const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
const languageToggle = document.querySelector('.language-toggle');
const titleElement = document.querySelector('title');
const descriptionElement = document.querySelector('meta[name="description"]');

const translations = {
  '关于我们': 'About us',
  '服务能力': 'Services',
  '资源网络': 'Network',
  '案例方向': 'Work scenarios',
  '联系合作': 'Contact us',
  '让品牌跨越语言，': 'Make brands travel beyond language,',
  '在世界被真正理解。': 'and be truly understood worldwide.',
  'Twinforge Limited 是专注海外市场的整合营销伙伴。我们以本地洞察、创意内容和高效执行，连接品牌、创作者、媒体与消费者。': 'Twinforge Limited is an integrated marketing partner focused on overseas markets. Through local insight, creative content, and efficient delivery, we connect brands, creators, media, and consumers.',
  '探索服务': 'Explore services',
  '开启合作对话': 'Start a conversation',
  '日本': 'Japan',
  '英国': 'United Kingdom',
  '欧美': 'Europe & North America',
  '东南亚': 'Southeast Asia',
  '多语种市场': 'Multilingual markets',
  '专业的品效整合能力，': 'Integrated marketing expertise',
  '聚焦海外市场。': 'for overseas growth.',
  '我们拥有丰富的海外数字营销及品牌合作经验，了解当地用户、媒体与平台生态，为品牌提供兼顾认知扩散与转化效率的本地化解决方案。': 'With extensive overseas digital-marketing and brand-partnership experience, we understand local audiences, media, and platform ecosystems. We create localized solutions that build awareness and support conversion.',
  '服务覆盖互联网、游戏、3C、消费品牌等多元行业，合作经验涉及米哈游、网易等品牌。我们以一对一项目管理、高效沟通与快速响应，陪伴客户把市场洞察转化为真正能落地的传播行动。': 'Our experience spans internet services, games, 3C, and consumer brands, including collaborations with companies such as miHoYo and NetEase. One-to-one project management, clear communication, and rapid response turn market insight into action.',
  '从品牌定位、内容营销和 KOL 合作，到数字广告、线下资源与影像制作，团队能够协同规划、执行与复盘，让每一次出海沟通更有价值。': 'From brand positioning, content marketing, and KOL partnerships to digital ads, offline resources, and video production, our team plans, delivers, and reviews together to make every overseas communication more valuable.',
  '团队实力': 'Team strength',
  '具备海外数字营销与品牌合作经验，熟悉当地用户与媒体生态。': 'Overseas digital-marketing and brand-partnership experience, with a strong understanding of local audiences and media ecosystems.',
  '多元行业': 'Cross-industry experience',
  '覆盖游戏、3C、消费品牌等领域，拥有多项目复合经验。': 'Experience across games, 3C, consumer brands, and other sectors, built through complex multi-project delivery.',
  '客户服务': 'Client service',
  '一对一项目管理，高效沟通与执行，快速响应客户需求。': 'One-to-one project management, efficient execution, and rapid responses to client needs.',
  '为海外增长，组合恰到好处的力量。': 'The right mix of capabilities for overseas growth.',
  '达人合作': 'Creator partnerships',
  '与 KOL / KOC 营销': '& KOL / KOC marketing',
  '整合各国网红资源、创作者偏好与内容趋势，覆盖筛选、策略、商业沟通、项目执行及数据复盘的完整链路。': 'We combine creator resources, audience preferences, and content trends across markets, covering selection, strategy, commercial coordination, delivery, and performance review.',
  '合作咨询': 'Talk to us',
  '品牌认知扩散': 'Brand awareness',
  '与社区运营': '& community operations',
  '围绕英国、日本及其他语种市场的 SNS 与平台社区，覆盖 X、Discord、YouTube、Facebook 等渠道，规划内容策略、日常运营与创意制作，扩大品牌认知。': 'Across SNS and platform communities in the UK, Japan, and other language markets, we plan strategy, daily operations, and creative production for channels including X, Discord, YouTube, and Facebook.',
  '海外资源整合': 'Local resource integration',
  '与媒体对接': '& media relations',
  '对接 OOH、线下活动、游戏媒体、艺人及 Cosplayer 等创意人才合作，以及新闻稿、Banner 采购和媒体关系维护，形成多维传播组合。': 'We coordinate OOH, offline events, gaming media, artists, cosplayers, creative talent, press releases, banner buying, and media relationships to create a multidimensional communications mix.',
  '影像拍摄': 'Video production',
  '与后期制作': '& post-production',
  '提供 WebCM、UA 短视频、Web 综艺等内容的创意策划、拍摄制作与后期支持，适配不同媒介和投放场景。': 'We provide creative development, filming, and post-production for WebCM, UA short videos, web variety content, and more—tailored to different media and campaign contexts.',
  '我们用的不是翻译，': 'We offer more than translation:',
  '而是理解与行动。': 'we bring understanding and action.',
  '而是': 'we bring',
  '理解与行动。': 'understanding and action.',
  '长期耕耘海外市场，让我们能将品牌策略准确转化为更自然、更有效的当地沟通。': 'Long-term work in overseas markets helps us turn brand strategy into communication that feels natural and works locally.',
  '语言能力': 'Language capability',
  '多语言人才覆盖英语、日语、中文、韩语、俄语、德语及西班牙语，降低跨市场沟通成本。': 'Multilingual talent covering English, Japanese, Chinese, Korean, Russian, German, and Spanish reduces friction across markets.',
  '日本語': 'Japanese',
  '中文': 'Chinese',
  '海外理解': 'Overseas understanding',
  '长期关注日本、欧美、东南亚等市场，熟悉本地用户、内容平台与媒介语境。': 'Long-term attention to Japan, Europe and North America, Southeast Asia, and more gives us fluency in local audiences, platforms, and media contexts.',
  '复合经验': 'Integrated experience',
  '从 SNS 运营、数字广告到插画师、达人、活动及合作企划，以多维度方式推动品牌认知扩散。': 'From SNS operations and digital ads to illustrators, creators, events, and partnership planning, we expand awareness through multiple dimensions.',
  '企划执行': 'Planning & delivery',
  '结合品牌定位、市场洞察与本地化运营经验，提供从创意企划到交付复盘的一站式支持。': 'We combine brand positioning, market insight, and localized operations to provide end-to-end support from creative planning to post-campaign review.',
  '从本地资源，': 'From local resources',
  '连接到全球影响力。': 'to global influence.',
  '我们持续拓展各国 MCN 与全球 KOL 的直联资源，并在日本市场积累了线下 OOH、游戏媒体、艺人事务所和本土拍摄团队等合作网络。': 'We continue to expand direct links with MCNs and KOLs around the world. In Japan, our network includes offline OOH, gaming media, talent agencies, and local production teams.',
  '全球': 'Global',
  '各国 MCN、KOL / KOC 与自由创作者资源': 'MCNs, KOLs / KOCs, and independent creators across markets',
  '日本': 'Japan',
  'OOH、游戏媒体、艺人事务所与本土拍摄团队': 'OOH, gaming media, talent agencies, and local production teams',
  '区域': 'Regional',
  '日本、英国、欧美、东南亚及其他语种市场资源整合': 'Integrated resources across Japan, the UK, Europe and North America, Southeast Asia, and other language markets',
  '合作网络涵盖事务所所属 KOL / KOC 与自由创作者，可按商品、游戏、时尚、美容等不同需求提供合适的选角与推广建议。图中仅展示部分合作单位。': 'Our network includes agency-represented KOLs / KOCs and independent creators. We recommend suitable talent and promotion approaches for products, games, fashion, beauty, and more. The graphic shows only a selection of partners.',
  '让合适的创意，': 'Put the right creative',
  '在合适的市场发生。': 'in the right market.',
  '以下展示的是我们可支持的典型传播场景与行业案例方向；具体项目以客户授权及实际合作方案为准。': 'The following are typical communications scenarios and industry-reference directions we can support. Specific projects are subject to client authorization and the final collaboration plan.',
  '达人合作场景': 'Creator partnership scenarios',
  '面向游戏、二次元、消费品牌等品类，结合创作者影响力、内容偏好和市场语境，设计 KOL / KOC 协作节奏；行业观察可参考《COA》《原神》等内容生态。': 'For games, anime-related IP, consumer brands, and more, we design KOL / KOC collaboration rhythms around creator influence, content preferences, and local context. Industry references include creator ecosystems such as COA and Genshin Impact.',
  '城市曝光场景': 'City visibility scenarios',
  '整合近期城市地标、线下活动与本地媒体资源，让线上话题与线下可见度形成连续的品牌记忆。': 'We connect recent landmark placements, offline events, and local media to turn online discussion and offline visibility into lasting brand memory.',
  '品牌影像场景': 'Brand video scenarios',
  '围绕周年节点、角色合作、真人出镜与策略型产品传播，完成 WebCM、UA 短视频及系列内容制作；可延展至《放置少女》周年、Efun《ゆうゆう機空団》及《三国志·战略版》一类内容方向。': 'For anniversaries, character collaborations, live-action appearances, and strategy-product campaigns, we produce WebCM, UA short videos, and serial content. This can extend to directions such as the anniversary of Idle Angels, Efun’s Yuyuu Airship Group, and Three Kingdoms: Strategic Edition.',
  '准备好走向': 'Ready to reach',
  '更广阔的市场？': 'a wider market?',
  '告诉我们您的品牌与目标市场，让 Twinforge 为您找到更适合的海外传播与增长路径。': 'Tell us about your brand and target market, and let Twinforge find a more suitable path for overseas communications and growth.',
  '直线 / 传真': 'Direct line / Fax',
  '传真：': 'Fax: ',
  '传真：(852) 2521 1478': 'Fax: (852) 2521 1478',
  '电子邮箱': 'Email',
  '办公地址': 'Office address',
  '香港灣仔駱克道300號浙江興業大廈12楼A室': 'Flat/Rm A, 12/F, ZJ 300, 300 Lockhart Road, Wan Chai, Hong Kong',
  '返回顶部': 'Back to top',
  '返回顶部 ↗': 'Back to top ↗',
  '菜单': 'Menu',
  '关闭': 'Close'
};

const textNodes = [];
const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
  acceptNode(node) {
    return ['SCRIPT', 'STYLE'].includes(node.parentElement?.tagName)
      ? NodeFilter.FILTER_REJECT
      : NodeFilter.FILTER_ACCEPT;
  }
});

while (walker.nextNode()) {
  textNodes.push({ node: walker.currentNode, zh: walker.currentNode.nodeValue });
}

const translate = (value) => Object.entries(translations)
  .sort(([left], [right]) => right.length - left.length)
  .reduce((result, [zh, en]) => result.replaceAll(zh, en), value);

const applyLanguage = (language) => {
  textNodes.forEach(({ node, zh }) => {
    node.nodeValue = language === 'en' ? translate(zh) : zh;
  });

  document.documentElement.lang = language === 'en' ? 'en' : 'zh-CN';
  titleElement.textContent = language === 'en'
    ? 'Twinforge Limited | Overseas Integrated Marketing Partner'
    : 'Twinforge Limited | 专业的海外整合营销伙伴';
  descriptionElement.setAttribute('content', language === 'en'
    ? 'Twinforge Limited provides overseas integrated marketing, content communications, and localized operations services.'
    : 'Twinforge Limited 专注海外市场的整合营销、内容传播与本地化运营服务。');

  nav.setAttribute('aria-label', language === 'en' ? 'Primary navigation' : '主导航');
  toggle.setAttribute('aria-label', language === 'en' ? 'Open menu' : '展开菜单');
  languageToggle.textContent = language === 'en' ? '中文' : 'EN';
  languageToggle.setAttribute('aria-label', language === 'en' ? 'Switch to Chinese' : 'Switch to English');
  languageToggle.setAttribute('aria-pressed', String(language === 'en'));

  try {
    localStorage.setItem('twinforge-language', language);
  } catch {
    // Language switching remains available when browser storage is unavailable.
  }
};

toggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  const language = document.documentElement.lang === 'en' ? 'en' : 'zh';
  toggle.setAttribute('aria-expanded', String(open));
  toggle.textContent = open ? (language === 'en' ? 'Close' : '关闭') : (language === 'en' ? 'Menu' : '菜单');
});

document.querySelectorAll('nav a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle?.setAttribute('aria-expanded', 'false');
    toggle.textContent = document.documentElement.lang === 'en' ? 'Menu' : '菜单';
  });
});

languageToggle?.addEventListener('click', () => {
  const nextLanguage = document.documentElement.lang === 'en' ? 'zh' : 'en';
  applyLanguage(nextLanguage);
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.textContent = nextLanguage === 'en' ? 'Menu' : '菜单';
});

try {
  if (localStorage.getItem('twinforge-language') === 'en') applyLanguage('en');
} catch {
  // Chinese remains the default when browser storage is unavailable.
}
