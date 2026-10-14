const site = require('../config/site');

// Generic templates. Have a professional review them for your jurisdiction.
const b = site.businessName;
const e = site.email;

const legal = {
  'privacy-policy': {
    title: 'Privacy Policy',
    description: `How ${b} collects, uses and protects your information.`,
    sections: [
      ['Who we are', `This website is operated by ${b}. You can reach us at ${e}.`],
      ['Information we collect', 'We do not require you to create an account. When you visit, we and our partners may automatically collect technical data such as IP address, browser type, pages viewed and referring URL. If you email us, we receive your email address and message.'],
      ['Cookies and advertising', 'We use cookies and similar technologies, including Google Analytics, Google Ads and Microsoft Advertising (UET), to understand site usage and measure advertising performance. These partners may use cookies to show you relevant ads on other websites. You can opt out at adssettings.google.com, account.microsoft.com/privacy/ad-settings and optout.aboutads.info.'],
      ['How we use information', 'To operate and improve the website, answer your questions, measure advertising, and comply with legal obligations. We do not sell your personal information.'],
      ['Purchases', 'Orders are processed by a third-party retailer or payment processor on its own secure checkout. Its privacy policy governs any payment and shipping information you provide there.'],
      ['Your rights', 'Depending on where you live (for example California under the CCPA/CPRA, or the EU/UK under the GDPR), you may have the right to access, correct or delete your personal data, or to opt out of targeted advertising. Contact us to make a request.'],
      ['Children', 'This website is not directed to anyone under 18 and we do not knowingly collect their data.'],
      ['Changes', 'We may update this policy from time to time. Continued use of the site means you accept the current version.'],
    ],
  },
  'terms-of-service': {
    title: 'Terms of Service',
    description: 'Terms and conditions for using this website.',
    sections: [
      ['Acceptance', 'By using this website you agree to these terms. If you do not agree, please do not use the site.'],
      ['Information only', 'Content on this site is general information and not medical advice. Always consult a qualified healthcare professional before starting any supplement, diet or exercise program.'],
      ['Purchases', 'Products are sold and fulfilled by the retailer named on the checkout page. Pricing, availability, shipping and refunds are governed by that retailer\'s terms.'],
      ['Intellectual property', `Text, graphics and design on this website belong to ${b} unless otherwise noted. Product names and trademarks belong to their respective owners.`],
      ['Limitation of liability', 'This website is provided "as is". To the extent permitted by law, we are not liable for any damages arising from your use of the site.'],
      ['Contact', `Questions about these terms: ${e}.`],
    ],
  },
  disclaimer: {
    title: 'Medical Disclaimer',
    description: 'Important health and results disclaimer.',
    sections: [
      ['FDA statement', 'These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure or prevent any disease.'],
      ['Not medical advice', 'The information on this website is for educational purposes only and is not a substitute for professional medical advice. Consult your physician before using any supplement, especially if you are pregnant, nursing, taking medication or have a medical condition.'],
      ['Individual results vary', 'Results depend on many factors including diet, activity, age and health. No specific result is promised. A healthy diet and regular exercise are recommended.'],
    ],
  },
};

if (site.affiliateMode) {
  legal['affiliate-disclosure'] = {
    title: 'Affiliate Disclosure',
    description: 'How this website earns money.',
    sections: [
      ['Our relationship', `This website contains affiliate links. If you click a link and make a purchase, ${b} may earn a commission at no extra cost to you.`],
      ['Our promise', 'This does not change the price you pay. We aim to present product information accurately and only feature products we believe are relevant to our readers.'],
      ['FTC compliance', 'This disclosure is provided in line with the U.S. Federal Trade Commission guidelines on endorsements and testimonials (16 CFR Part 255).'],
    ],
  };
}

module.exports = legal;
