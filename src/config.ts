// Site configuration constants
export const config = {
    // Attributed App Store links (AppsFlyer OneLink, reusing the Nx2O template with
    // web campaign params so web installs are separable from the in-app share loop).
    // NOTE: the `web` sub-link under Nx2O must be created in the AppsFlyer dashboard
    // (default redirect -> App Store id6756401226, no deep_link_value=referral) before
    // these resolve. pid/campaign are carried as query params below.
    oneLinkBase: 'https://dragify.onelink.me/Nx2O/web',
    // Landing-page CTAs (Header, Hero)
    appStoreUrl: 'https://dragify.onelink.me/Nx2O/web?pid=web&c=landing_page',
    // Drag name generator CTA
    nameGenAppUrl: 'https://dragify.onelink.me/Nx2O/web?pid=web&c=name_generator',
    // Canonical App Store URL — used for structured-data installUrl (schema wants the
    // real store URL, not the tracker) and as the app-argument for the Smart App Banner.
    appStoreUrlRaw: 'https://apps.apple.com/us/app/dragify-drag-queen-face-swap/id6756401226',

    // App Store numeric id (Smart App Banner)
    appStoreId: '6756401226',

    // Formspree endpoint for contact form
    formEndpoint: 'https://formspree.io/f/mykzqjwg',

    // Support email
    supportEmail: 'support@dragifyapp.com',

    // Brand colors
    colors: {
        gradientStart: '#064AAD',
        gradientEnd: '#CA6BE5'
    },

    // Typography
    fonts: {
        heading: 'Shrikhand',
        text: 'Fuscia'
    }
} as const;
