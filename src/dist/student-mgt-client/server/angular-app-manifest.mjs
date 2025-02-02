
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/home",
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/home"
  },
  {
    "renderMode": 2,
    "route": "/login"
  },
  {
    "renderMode": 2,
    "route": "/profile"
  },
  {
    "renderMode": 2,
    "route": "/signup"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 470, hash: 'bab6f307b48a009ab237ed312ef20d424f1af178b9bdae9bb3638aa96f80926d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 983, hash: 'df69fdbd4d1471d970be0b946d6e364847fc2a7349939389793ae99094aac838', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 3740, hash: '61f7f680201705e14392acf9f46eee4928a7c336ce891b6554eeb1b47de2e023', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'profile/index.html': {size: 3757, hash: 'b8db733f416276582fef6131dd1aa5d313d6908a12ea9447dee96e1124c859ef', text: () => import('./assets-chunks/profile_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 5943, hash: 'c55705fd6edc39896babd41070d142d66c79bff489dd9f4c1c93e8947b142641', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'signup/index.html': {size: 6647, hash: 'c9cb044b999e055937126bfd5cadbe3a9c871335c2e956632f5558695eb092c0', text: () => import('./assets-chunks/signup_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
