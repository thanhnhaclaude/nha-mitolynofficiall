require('dotenv').config({ path: require('path').join(__dirname, '..', '.env') });

const env = (key, fallback = '') => (process.env[key] || fallback).trim();

module.exports = {
  url: env('SITE_URL', 'http://localhost:3000').replace(/\/$/, ''),
  name: env('SITE_NAME', 'Mitolyn'),
  email: env('CONTACT_EMAIL', 'support@example.com'),
  businessName: env('BUSINESS_NAME', 'Your Business Name'),
  businessAddress: env('BUSINESS_ADDRESS', ''),
  orderUrl: env('ORDER_URL', '#pricing'),
  affiliateMode: env('AFFILIATE_MODE', 'true') === 'true',
  year: new Date().getFullYear(),
  tracking: {
    gtm: env('GTM_ID'),
    ga4: env('GA4_ID'),
    adsId: env('GOOGLE_ADS_ID'),
    adsLabel: env('GOOGLE_ADS_CONVERSION_LABEL'),
    uet: env('BING_UET_ID'),
  },
  verification: {
    google: env('GOOGLE_SITE_VERIFICATION'),
    bing: env('BING_SITE_VERIFICATION'),
  },
};

// Social share image: drop a 1200x630 PNG at public/img/og-image.png to enable it.
module.exports.ogImage = require('fs').existsSync(require('path').join(__dirname, '..', 'public', 'img', 'og-image.png'))
  ? '/img/og-image.png'
  : '';
