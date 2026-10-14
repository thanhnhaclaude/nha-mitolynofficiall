// All marketing copy lives here so it can be edited without touching templates.
// Advertising compliance (Google Ads / Microsoft Ads health policies):
//  - Use "supports", "may help", "designed to" — never "cures", "guaranteed weight loss",
//    specific pounds-in-days promises, or before/after claims.
//  - Prices and guarantee terms MUST match the vendor's checkout page. Verify before launch.

module.exports = {
  painPoints: [
    { icon: 'battery', title: 'Tired by 3 PM, every day', text: 'You sleep, you drink the coffee, and you still drag yourself through the afternoon.' },
    { icon: 'scale', title: 'The scale refuses to move', text: 'You eat less, you walk more, and the number barely changes. It feels unfair, because it is.' },
    { icon: 'heart', title: 'You miss feeling like yourself', text: 'Clothes that used to fit, energy you used to have, confidence you used to feel.' },
  ],

  mechanism: {
    heading: 'It may not be your willpower. It may be your cells.',
    paragraphs: [
      'Inside almost every cell in your body are tiny structures called mitochondria. Their job is to turn the food you eat into the energy you use. Scientists often call them the "powerhouses" of the cell.',
      'With age, stress, poor sleep and processed food, mitochondrial function can decline. When that happens, more of what you eat may be stored instead of burned for energy, which can leave you feeling sluggish and stuck.',
      'Mitolyn was formulated around this idea: support healthy mitochondrial function with six plant-based ingredients, so your body can do what it was designed to do.',
    ],
  },

  ingredients: [
    { name: 'Maqui Berry', latin: 'Aristotelia chilensis', color: '#5b2a86', benefit: 'Rich in anthocyanin antioxidants that help protect cells from oxidative stress and support healthy blood sugar levels already within the normal range.' },
    { name: 'Rhodiola', latin: 'Rhodiola rosea', color: '#d9a21b', benefit: 'A well-known adaptogen traditionally used to help the body handle everyday stress and support mental and physical energy.' },
    { name: 'Haematococcus', latin: 'Haematococcus pluvialis (astaxanthin)', color: '#c8412b', benefit: 'A microalgae source of astaxanthin, a potent antioxidant that supports cellular health and recovery.' },
    { name: 'Amla', latin: 'Phyllanthus emblica', color: '#7aa63a', benefit: 'Indian gooseberry, naturally high in vitamin C, traditionally used to support metabolism and healthy digestion.' },
    { name: 'Theobroma Cacao', latin: 'Theobroma cacao', color: '#6b3f26', benefit: 'Cocoa flavanols that support healthy circulation and a positive mood.' },
    { name: 'Schisandra', latin: 'Schisandra chinensis', color: '#b3263e', benefit: 'A berry valued in traditional herbalism for supporting liver health, focus and stamina.' },
  ],

  benefits: [
    { icon: 'flame', title: 'Supports a healthy metabolism', text: 'Helps your body use the calories you eat for energy.' },
    { icon: 'bolt', title: 'Supports natural, all-day energy', text: 'No jitters and no crash. Energy that starts in your cells, not in a coffee cup.' },
    { icon: 'shield', title: 'Antioxidant cellular support', text: 'Helps protect your cells against everyday oxidative stress.' },
    { icon: 'sparkle', title: 'Supports mood and focus', text: 'Adaptogens that help you stay calm and clear-headed.' },
  ],

  quality: [
    { icon: 'leaf', label: '100% plant-based' },
    { icon: 'check', label: 'Non-GMO' },
    { icon: 'check', label: 'Gluten-free' },
    { icon: 'factory', label: 'GMP-certified facility' },
    { icon: 'flag', label: 'Made in the USA' },
    { icon: 'pill', label: 'Easy-to-swallow capsules' },
  ],

  // VERIFY these against the vendor checkout before going live.
  packages: [
    { id: '1', name: 'Try It', bottles: 1, supply: '30-day supply', price: 79, total: 79, oldPrice: 99, shipping: '+ shipping', bonus: false, popular: false },
    { id: '6', name: 'Best Value', bottles: 6, supply: '180-day supply', price: 49, total: 294, oldPrice: 594, shipping: 'Free US shipping', bonus: true, popular: true },
    { id: '3', name: 'Most Popular', bottles: 3, supply: '90-day supply', price: 59, total: 177, oldPrice: 297, shipping: '+ shipping', bonus: true, popular: false },
  ],
  guaranteeDays: 180,

  steps: [
    { title: 'Take 1 capsule a day', text: 'With a glass of water, ideally in the morning with breakfast.' },
    { title: 'Stay consistent', text: 'Natural supplements work best with steady daily use over several weeks.' },
    { title: 'Pair with healthy habits', text: 'Balanced meals, movement you enjoy and good sleep make every effort count.' },
  ],

  // Only add REAL, verifiable customer reviews (with permission). Fabricated or
  // edited testimonials violate FTC rules and Google/Microsoft Ads policies.
  // The reviews section stays hidden while this list is empty.
  // Example: { name: 'Jane D.', location: 'Austin, TX', rating: 5, text: '...' }
  reviews: [],

  faqs: [
    { q: 'What is Mitolyn?', a: 'Mitolyn is a once-daily dietary supplement made with six plant-based ingredients chosen to support healthy mitochondrial function, metabolism and natural energy.' },
    { q: 'How do I take it?', a: 'Take one capsule per day with a glass of water. Do not exceed the recommended serving.' },
    { q: 'How long until I notice a difference?', a: 'Everyone is different. Most people give a natural supplement 2 to 3 months of consistent use to judge how it works for them, which is why the multi-bottle packages are the most popular.' },
    { q: 'Are there side effects?', a: 'Mitolyn is made from plant-based ingredients and is generally well tolerated. If you are pregnant, nursing, taking medication or have a medical condition, talk to your doctor before use.' },
    { q: 'Is there a money-back guarantee?', a: 'Yes. Every order is covered by a 180-day money-back guarantee. If you are not satisfied, contact customer support within 180 days of purchase for a refund of the product price, even if the bottles are empty.' },
    { q: 'How fast is shipping?', a: 'Orders inside the US usually arrive in 5 to 7 business days. International orders typically take 10 to 15 business days, depending on customs.' },
    { q: 'Is this a subscription?', a: 'No. It is a one-time payment with no hidden fees and no automatic rebilling.' },
    { q: 'Where can I buy genuine Mitolyn?', a: 'To make sure you get the authentic product, the guarantee and the current price, order only through the order buttons on this website.' },
  ],
};
