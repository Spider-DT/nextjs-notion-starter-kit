module.exports = {
  // where it all starts -- the site's root Notion page (required) 要分享的Notion页ID
  rootNotionPageId: '2fcb50f12fb948d6929d9f36ec5f5180',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Learn Share Write',
  domain: 'https://www.notion.so/2fcb50f12fb948d6929d9f36ec5f5180',
  author: 'Bravemen',

  // open graph metadata (optional)
  description: 'Personal site of Bravemen in learning progress',
  socialImageTitle: 'Learn Share Write',
  socialImageSubtitle: 'Hello World! 👋',

  // social usernames (optional) 待更新为微信公众号或B站账号
  twitter: 'transitive_bs',
  github: 'transitive-bullshit',
  linkedin: 'fisch2',

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults  1.页面默认图标2.页面默认封面  需上传到图床，获取链接
  defaultPageIcon:null,
  defaultPageCover:null,
  defaultPageCoverPosition: 0.1862,

  // image CDN host to proxy all image requests through (optional)
  // NOTE: this requires you to set up an external image proxy
  imageCDNHost: null,

  // Utteranc.es comments via GitHub issue comments (optional)
  utterancesGitHubRepo: 'Spider-DT/transitivebullsh.it',

  // whether or not to enable support for LQIP preview images (optional)
  // NOTE: this requires you to set up Google Firebase and add the environment
  // variables specified in .env.example
  isPreviewImageSupportEnabled: true,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  pageUrlAdditions: {
    '/the-social-audio-revolution': 'c4deaf33cc924ad7a5b9f69c6ae04a01'
  }
}
