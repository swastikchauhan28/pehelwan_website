import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

// All copy is reviewed, static source content. No visitor input is rendered by this builder.
const root = join(fileURLToPath(new URL('../', import.meta.url)), 'public');
const pages = ['home', 'machine', 'technology', 'contact'];
const labels = {
  en: { home: 'Home', machine: 'The machine', technology: 'Technology', contact: 'Company', menu: 'Menu', brand: 'by Shanik AG Private Limited', company: 'Shanik AG Private Limited', language: 'मराठी', footer: 'Pehelwan by Shanik AG Private Limited.', back: 'Back to MAMA' },
  mr: { home: 'मुख्यपृष्ठ', machine: 'यंत्र', technology: 'तंत्रज्ञान', contact: 'कंपनी', menu: 'मेनू', brand: 'by Shanik AG Private Limited', company: 'Shanik AG Private Limited', language: 'English', footer: 'Pehelwan by Shanik AG Private Limited.', back: 'मामा वेबसाइट' },
};

const pathFor = (lang, page) => `${lang === 'mr' ? '/marathi' : ''}${page === 'home' ? '/' : `/${page}/`}`;
const opposite = lang => lang === 'en' ? 'mr' : 'en';
const escapeHtml = value => String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
const asset = name => `/assets/${name}`;
const picture = (file, alt, className = '') => `<img class="${className}" src="${asset(file)}" alt="${escapeHtml(alt)}" loading="${className === 'hero-image' ? 'eager' : 'lazy'}"${className === 'hero-image' ? ' fetchpriority="high"' : ''} decoding="async">`;
const button = (href, text, secondary = false) => `<a class="button${secondary ? ' button-quiet' : ''}" href="${href}">${escapeHtml(text)}</a>`;

const content = {
  en: {
    home: {
      title: 'Pehelwan | Electric farming, closer to the crop',
      description: 'Meet Pehelwan by Shanik AG Private Limited, a compact electric tractor for work between crop rows.',
      eyebrow: 'Pehelwan / Electric farming, imagined in India',
      heading: 'A new kind<br>of <em>strength.</em>',
      lead: 'Electric at its core. Indian farming at its heart. Meet Pehelwan, a compact tractor with a vision for intelligent field work.',
      image: 'pehelwan-hero.webp',
      alt: 'Pehelwan compact electric tractor photographed outdoors',
      imageNote: 'Current engineering build · final design may change',
      body: `
        ${engineeringViewer('en')}
        ${fieldConcept('en')}
        ${farmerStory('en')}
        <section class="section close-section"><div class="wrap reveal"><p class="kicker">Discover Pehelwan</p><h2>A closer look at the machine.</h2><p>Explore the steering, electric drive and attachments behind its compact form.</p>${button('/machine/', 'Inside Pehelwan')}</div></section>`,
    },
    machine: {
      title: 'The machine | Pehelwan',
      description: 'Explore Pehelwan’s current electric tractor design, steering, gearbox, linkage, road test and company-reported dimensions.',
      eyebrow: 'Pehelwan / the machine',
      heading: 'A tractor designed around the row.',
      lead: 'The current Pehelwan build puts electric drive into a narrow chassis intended for work where conventional machinery needs more room.',
      image: 'pehelwan-outdoor-wide.webp',
      alt: 'Wide view of Pehelwan electric tractor outdoors beneath trees',
      imageNote: 'Current engineering build · final design may change',
      body: `
        <section class="section engineering-section"><div class="wrap"><div class="section-heading reveal"><p class="kicker">Machine innovation</p><h2>Every turn matters.</h2><p>The team is developing the parts of a tractor that make space, control and attachments work together.</p></div><div class="feature-list"><article class="reveal"><span>Steering</span><h3>Quadra steer</h3><p>Four-wheel steering is designed to help manoeuvre in tight spaces. The team describes this as a first for Indian agriculture; independent industry verification is pending.</p></article><article class="reveal"><span>Drive</span><h3>Multi-speed gearbox</h3><p>A gearbox designed to provide different working speeds for different tasks.</p></article><article class="reveal"><span>Implements</span><h3>Custom three-point linkage</h3><p>A purpose-built connection for the attachments the team is developing.</p></article><article class="reveal"><span>Control</span><h3>Remote or steering</h3><p>The design includes operation by remote and by steering wheel. Field use and availability remain subject to testing.</p></article></div></div></section>
        <section class="section film-section" aria-labelledby="road-test"><div class="wrap"><div class="section-heading reveal"><p class="kicker">Road test</p><h2 id="road-test">See Pehelwan move.</h2><p>Footage from a team road run, displayed at half speed.</p></div><figure class="film-frame reveal"><video data-road-video muted loop playsinline preload="none" poster="${asset('pehelwan-road-run-poster.webp')}" aria-label="Pehelwan electric tractor moving during a road test"><source src="${asset('pehelwan-road-run.webm')}" type="video/webm"><source src="${asset('pehelwan-road-run.mp4')}" type="video/mp4"></video><figcaption>Road test footage. Final design, certification and operating capability may change.</figcaption></figure></div></section>
        <section class="section number-section"><div class="wrap"><p class="kicker reveal">Design reference / November 2026</p><h2 class="reveal">Sized for the work.</h2><div class="number-grid"><article class="reveal"><strong>3.1–3.2 ft</strong><h3>Current width</h3><p>A narrow chassis intended to move between crop rows.</p></article><article class="reveal"><strong>4 ft</strong><h3>Target row spacing</h3><p>The spacing used to guide the current layout.</p></article><article class="reveal"><strong>10 kWh</strong><h3>Battery design</h3><p>Operating time still needs field validation.</p></article></div><div class="price-note reveal"><span>Target price</span><strong>Below ₹4.5 lakh</strong><p>This is a target, not a confirmed customer price. Sales timing and final specifications are unconfirmed.</p></div></div></section>
        <section class="section close-section"><div class="wrap reveal"><p class="kicker">The next layer</p><h2>From engineering to intelligence.</h2><p>Discover the vision AI and precision farming roadmap.</p>${button('/technology/', 'Explore the roadmap')}</div></section>`,
    },
    technology: {
      title: 'Technology | Pehelwan',
      description: 'Learn about Pehelwan’s vision AI roadmap, GPS guided sowing, targeted weeding and Indian engineering approach.',
      eyebrow: 'Pehelwan / technology',
      heading: 'A machine that learns the field.',
      lead: 'The roadmap brings machine design, perception and precision work together. These capabilities are in development and are not offered as finished features.',
      image: 'pehelwan-outdoor-close.webp',
      alt: 'Close view of the Pehelwan tractor chassis, wheels and electrical components',
      imageNote: 'Current engineering build · final design may change',
      body: `
        ${technologySequence('en')}
        <section class="section build-section"><div class="wrap"><div class="section-heading reveal"><p class="kicker">Built around local capability</p><h2>Indian engineering, component by component.</h2></div><div class="build-grid"><article class="reveal"><h3>Mostly Indian technology stack</h3><p>The team is building much of Pehelwan’s hardware and software capability in India.</p></article><article class="reveal"><h3>Custom battery pack</h3><p>A pack tailored to the machine is in the making. The current 10 kWh figure is a design reference, not a validated operating time.</p></article></div></div></section>
        <section class="section close-section"><div class="wrap reveal"><p class="kicker">Follow the work</p><h2>From the roadmap to the field.</h2><p>Explore the current machine and the company behind it.</p><div class="button-row">${button('/machine/', 'See the machine')}${button('/contact/', 'About the company', true)}</div></div></section>`,
    },
    contact: {
      title: 'Company | Pehelwan',
      description: 'Pehelwan by Shanik AG Private Limited: Indian engineering rooted in farming.',
      eyebrow: 'Pehelwan / the company',
      heading: 'Built from<br><em>field experience.</em>',
      lead: 'Agricultural drone work put our team alongside farmers. What we learned there now shapes Pehelwan, our compact electric tractor.',
      image: 'farmer-field-discussion.jpg',
      alt: 'Team member speaking with a group of farmers during a field discussion',
      imageNote: 'A conversation with farmers · the field shapes the work',
      body: `<section class="section contact-section"><div class="wrap contact-grid"><div class="reveal"><p class="kicker">Shanik AG Private Limited</p><h2>Engineering starts with listening.</h2><p>The team’s agricultural drone work brought it close to farmers and their everyday needs. Pehelwan builds on that experience through mechanical design, electric drive and a roadmap for intelligent field work.</p>${button('/machine/', 'Explore Pehelwan', true)}</div><aside class="contact-card reveal"><p class="kicker">Where we work</p><h3>Chhatrapati Sambhajinagar, Maharashtra</h3><address>STPI, T-17, Opp. Garware Stadium,<br>MIDC, Chikalthana</address></aside></div></section>`,
    },
  },
  mr: {
    home: {
      title: 'Pehelwan | पीक ओळींमधील कामासाठी इलेक्ट्रिक ट्रॅक्टर',
      description: 'Shanik AG Private Limited चा Pehelwan इलेक्ट्रिक ट्रॅक्टर आणि त्यामागील काम जाणून घ्या.',
      eyebrow: 'Pehelwan / भारतीय शेतीसाठी इलेक्ट्रिक यंत्र',
      heading: 'शेतीची ताकद.<br><em>नव्या रूपात.</em>',
      lead: 'इलेक्ट्रिक तंत्रज्ञान. केंद्रस्थानी भारतीय शेतकरी. बुद्धिमान शेतीकामाची दिशा घेऊन घडणारा छोटा ट्रॅक्टर — Pehelwan.',
      image: 'pehelwan-hero.webp',
      alt: 'बाहेर छायाचित्रित केलेला Pehelwan इलेक्ट्रिक ट्रॅक्टर',
      imageNote: 'सध्याची अभियांत्रिकी रचना · अंतिम स्वरूप बदलू शकते',
      body: `
        ${engineeringViewer('mr')}
        ${fieldConcept('mr')}
        ${farmerStory('mr')}
        <section class="section close-section"><div class="wrap reveal"><p class="kicker">Pehelwan जाणून घ्या</p><h2>यंत्र जवळून पाहा.</h2><p>छोट्या रचनेमागील स्टीयरिंग, इलेक्ट्रिक ड्राइव्ह आणि अवजारांची माहिती जाणून घ्या.</p>${button('/marathi/machine/', 'Pehelwan ची रचना')}</div></section>`,
    },
    machine: {
      title: 'यंत्र | Pehelwan',
      description: 'Pehelwan ची सध्याची रचना, स्टीयरिंग, गिअरबॉक्स, जोडणी, रस्त्यावरील चाचणी आणि मोजमाप पाहा.',
      eyebrow: 'Pehelwan / यंत्र',
      heading: 'पीक ओळी लक्षात घेऊन बनवलेला ट्रॅक्टर.',
      lead: 'जिथे नेहमीच्या यंत्राला जास्त जागा लागते, तिथल्या कामासाठी सध्याच्या Pehelwan रचनेत अरुंद चेसिस आणि इलेक्ट्रिक ड्राइव्ह आहे.',
      image: 'pehelwan-outdoor-wide.webp',
      alt: 'झाडांखाली उभ्या Pehelwan इलेक्ट्रिक ट्रॅक्टरचे विस्तृत दृश्य',
      imageNote: 'सध्याची अभियांत्रिकी रचना · अंतिम स्वरूप बदलू शकते',
      body: `
        <section class="section engineering-section"><div class="wrap"><div class="section-heading reveal"><p class="kicker">यंत्रातील नवकल्पना</p><h2>प्रत्येक वळण महत्त्वाचे.</h2><p>कमी जागा, नियंत्रण आणि अवजारे यांचा विचार करून यंत्राचे भाग विकसित केले जात आहेत.</p></div><div class="feature-list"><article class="reveal"><span>स्टीयरिंग</span><h3>Quadra steer</h3><p>कमी जागेत वळण्यासाठी चार चाकांचे स्टीयरिंग नियोजित आहे. भारतीय शेतीतील पहिले असल्याचा दावा टीमचा आहे; स्वतंत्र पडताळणी बाकी आहे.</p></article><article class="reveal"><span>ड्राइव्ह</span><h3>बहुगती गिअरबॉक्स</h3><p>वेगवेगळ्या कामांसाठी वेग निवडता यावा म्हणून तयार केलेली रचना.</p></article><article class="reveal"><span>अवजारे</span><h3>खास तीन बिंदू जोडणी</h3><p>विकसित होत असलेल्या अवजारांसाठी तयार केलेली जोडणी.</p></article><article class="reveal"><span>नियंत्रण</span><h3>रिमोट किंवा स्टीयरिंग</h3><p>रिमोट आणि स्टीयरिंग व्हील या दोन्ही मार्गांनी नियंत्रणाची रचना आहे. वापर आणि उपलब्धता चाचणीवर अवलंबून आहे.</p></article></div></div></section>
        <section class="section film-section" aria-labelledby="road-test"><div class="wrap"><div class="section-heading reveal"><p class="kicker">रस्त्यावरील चाचणी</p><h2 id="road-test">Pehelwan चालताना पाहा.</h2><p>टीमच्या रस्त्यावरील चाचणीचे अर्ध्या वेगाने दाखवलेले दृश्य.</p></div><figure class="film-frame reveal"><video data-road-video muted loop playsinline preload="none" poster="${asset('pehelwan-road-run-poster.webp')}" aria-label="रस्त्यावरील चाचणीत चालणारा Pehelwan इलेक्ट्रिक ट्रॅक्टर"><source src="${asset('pehelwan-road-run.webm')}" type="video/webm"><source src="${asset('pehelwan-road-run.mp4')}" type="video/mp4"></video><figcaption>रस्त्यावरील चाचणी. अंतिम रचना, प्रमाणपत्रे आणि कार्यक्षमता बदलू शकतात.</figcaption></figure></div></section>
        <section class="section number-section"><div class="wrap"><p class="kicker reveal">रचनेचा संदर्भ / नोव्हेंबर २०२६</p><h2 class="reveal">कामाला अनुरूप आकार.</h2><div class="number-grid"><article class="reveal"><strong>३.१–३.२ फूट</strong><h3>सध्याची रुंदी</h3><p>पीक ओळींमधून जाण्यासाठी अरुंद चेसिस.</p></article><article class="reveal"><strong>४ फूट</strong><h3>लक्ष्यित अंतर</h3><p>सध्याची रचना ठरवताना वापरलेले ओळींमधील अंतर.</p></article><article class="reveal"><strong>१० kWh</strong><h3>बॅटरी रचना</h3><p>कामाचा कालावधी शेतात अजून तपासावा लागेल.</p></article></div><div class="price-note reveal"><span>लक्ष्यित किंमत</span><strong>₹४.५ लाखांपेक्षा कमी</strong><p>ही निश्चित विक्री किंमत नाही. विक्रीची तारीख आणि अंतिम तपशील अद्याप निश्चित नाहीत.</p></div></div></section>
        <section class="section close-section"><div class="wrap reveal"><p class="kicker">पुढची दिशा</p><h2>अभियांत्रिकीतून बुद्धिमान यंत्राकडे.</h2><p>व्हिजन AI आणि अचूक शेतीकामाच्या पुढील वाटचालीबद्दल जाणून घ्या.</p>${button('/marathi/technology/', 'तंत्रज्ञानाची दिशा')}</div></section>`,
    },
    technology: {
      title: 'तंत्रज्ञान | Pehelwan',
      description: 'Pehelwan चे व्हिजन AI, GPS आधारित पेरणी, लक्ष्यित तण नियंत्रण आणि भारतीय तंत्रज्ञानाबद्दल जाणून घ्या.',
      eyebrow: 'Pehelwan / तंत्रज्ञान',
      heading: 'शेत समजून घेणारे यंत्र.',
      lead: 'यंत्ररचना, दृश्य माहिती आणि नेमके काम यांची सांगड घालण्याचे नियोजन आहे. ही वैशिष्ट्ये विकसित होत आहेत; तयार उत्पादन म्हणून उपलब्ध नाहीत.',
      image: 'pehelwan-outdoor-close.webp',
      alt: 'Pehelwan चेसिस, चाके आणि विद्युत भागांचे जवळून दृश्य',
      imageNote: 'सध्याची अभियांत्रिकी रचना · अंतिम स्वरूप बदलू शकते',
      body: `
        ${technologySequence('mr')}
        <section class="section build-section"><div class="wrap"><div class="section-heading reveal"><p class="kicker">स्थानिक क्षमता</p><h2>भारतीय अभियांत्रिकी, भागागणिक.</h2></div><div class="build-grid"><article class="reveal"><h3>प्रामुख्याने भारतीय तंत्रज्ञान</h3><p>Pehelwan चे बरेचसे हार्डवेअर आणि सॉफ्टवेअर भारतात विकसित करण्यावर टीम काम करत आहे.</p></article><article class="reveal"><h3>खास बॅटरी पॅक</h3><p>यंत्रासाठी वेगळा पॅक तयार होत आहे. सध्याचा १० kWh आकडा रचनेचा संदर्भ आहे; सिद्ध झालेला कामाचा कालावधी नाही.</p></article></div></div></section>
        <section class="section close-section"><div class="wrap reveal"><p class="kicker">कामाचा पुढचा टप्पा</p><h2>कल्पनेपासून शेतापर्यंत.</h2><p>सध्याचे यंत्र आणि त्यामागील कंपनी जाणून घ्या.</p><div class="button-row">${button('/marathi/machine/', 'यंत्र पाहा')}${button('/marathi/contact/', 'कंपनीबद्दल', true)}</div></div></section>`,
    },
    contact: {
      title: 'कंपनी | Pehelwan',
      description: 'Shanik AG Private Limited चा Pehelwan: शेतीच्या अनुभवातून घडणारी भारतीय अभियांत्रिकी.',
      eyebrow: 'Pehelwan / कंपनी',
      heading: 'शेतातील अनुभवातून<br><em>घडतोय Pehelwan.</em>',
      lead: 'कृषी ड्रोनच्या कामातून आमच्या टीमला शेतकऱ्यांसोबत काम करण्याची संधी मिळाली. त्या अनुभवातून Pehelwan हा कॉम्पॅक्ट इलेक्ट्रिक ट्रॅक्टर घडत आहे.',
      image: 'farmer-field-discussion.jpg',
      alt: 'शेतकऱ्यांच्या गटाशी संवाद साधणारा टीममधील सदस्य',
      imageNote: 'शेतकऱ्यांशी संवाद · कामाला दिशा देणारा अनुभव',
      body: `<section class="section contact-section"><div class="wrap contact-grid"><div class="reveal"><p class="kicker">Shanik AG Private Limited</p><h2>ऐकण्यातून अभियांत्रिकीची सुरुवात.</h2><p>कृषी ड्रोनच्या कामामुळे टीमला शेतकरी आणि त्यांच्या रोजच्या गरजा जवळून समजल्या. त्या अनुभवावर Pehelwan ची यांत्रिक रचना, इलेक्ट्रिक ड्राइव्ह आणि बुद्धिमान शेतीकामाची पुढील दिशा उभी आहे.</p>${button('/marathi/machine/', 'Pehelwan जाणून घ्या', true)}</div><aside class="contact-card reveal"><p class="kicker">आमचे ठिकाण</p><h3>छत्रपती संभाजीनगर, महाराष्ट्र</h3><address>STPI, T-17, गरवारे स्टेडियमसमोर,<br>MIDC, चिकलठाणा</address></aside></div></section>`,
    },
  },
};

function header(lang, page) {
  const t = labels[lang];
  const links = pages.map(item => `<a href="${pathFor(lang, item)}"${item === page ? ' aria-current="page"' : ''}>${t[item]}</a>`).join('');
  return `<a class="skip-link" href="#main">${lang === 'mr' ? 'मुख्य मजकुराकडे जा' : 'Skip to content'}</a><header class="site-header"><div class="wrap header-inner"><a class="wordmark" href="${pathFor(lang, 'home')}" aria-label="Pehelwan ${t.home}"><span class="brand-mark" aria-hidden="true"></span><span class="brand-name"><strong>PEHELWAN</strong><small>${t.brand}</small></span></a><nav class="desktop-nav" aria-label="${lang === 'mr' ? 'मुख्य नेव्हिगेशन' : 'Main navigation'}">${links}</nav><div class="header-actions"><a class="language-switch" href="${pathFor(opposite(lang), page)}" lang="${opposite(lang)}" hreflang="${opposite(lang)}">${t.language}</a><details class="mobile-menu"><summary>${t.menu}</summary><nav aria-label="${lang === 'mr' ? 'मोबाइल नेव्हिगेशन' : 'Mobile navigation'}">${links}</nav></details></div></div></header>`;
}

function footer(lang, page) {
  const t = labels[lang];
  const links = pages.map(item => `<a href="${pathFor(lang, item)}">${t[item]}</a>`).join('');
  return `<footer class="site-footer"><div class="wrap footer-main"><div><img class="footer-logo" src="/assets/pehelwan-logo.jpg" alt="${lang === 'mr' ? 'Pehelwan लोगो' : 'Pehelwan logo'}" width="1536" height="1024" loading="lazy" decoding="async"><p>${t.footer}</p></div><nav aria-label="${lang === 'mr' ? 'पादलेख नेव्हिगेशन' : 'Footer navigation'}">${links}</nav></div><div class="wrap footer-bottom"><span>© ${new Date().getFullYear()} ${t.company}</span><a href="https://www.mamaapp.live/">${t.back}</a></div></footer>`;
}

function hero(lang, page, c) {
  const home = page === 'home';
  if (home) return productHero(lang, c);
  const next = { home: 'machine', machine: 'technology', technology: 'machine', contact: 'machine' }[page];
  const action = pathFor(lang, next);
  const actionText = labels[lang][next];
  return `<section class="page-hero${page === 'contact' ? ' company-hero' : ''}${c.image ? '' : ' text-hero'}"><div class="wrap hero-grid"><div class="hero-copy"><p class="kicker">${c.eyebrow}</p><h1>${c.heading}</h1><p class="hero-lead">${c.lead}</p><div class="hero-actions">${button(action, actionText)}</div></div>${c.image ? `<figure class="hero-visual">${picture(c.image, c.alt, 'hero-image')}<figcaption>${c.imageNote}</figcaption></figure>` : `<div class="contact-graphic" aria-hidden="true"><span>PEHELWAN</span><i></i></div>`}</div></section>`;
}



function productHero(lang, c) {
  const mr = lang === 'mr';
  const specs = mr ? [['3.1–3.2','फूट','सध्याची रुंदी'],['4','फूट','पीक ओळींचे लक्ष्य'],['10','kWh','बॅटरीची रचना'],['4','','चाकांचे स्टीयरिंग']] : [['3.1–3.2','ft','Current width'],['4','ft','Target row spacing'],['10','kWh','Battery design'],['4','','Wheel steering']];
  return `<section class="launch-hero"><div class="wrap launch-grid"><div class="launch-copy"><p class="kicker"><span class="section-number">01 /</span> ${mr ? 'इलेक्ट्रिक यंत्र · भारतीय अभियांत्रिकी' : 'Electric machinery · Indian engineering'}</p><h1>${mr ? 'शेताची ताकद.<br><em>नवे तंत्रज्ञान.</em><br>हा आहे Pehelwan.' : 'Built for the soil.<br><em>Ready for a</em><br>new way of farming.'}</h1><p class="launch-lead">${mr ? 'अरुंद पीक ओळींसाठी कॉम्पॅक्ट इलेक्ट्रिक ट्रॅक्टर. चार चाकांचे स्टीयरिंग, रिमोट नियंत्रणाची रचना आणि स्वायत्त शेतीकडे वाटचाल.' : 'A compact electric tractor for the spaces between crop rows. Four-wheel steering, a remote-control design and a path towards autonomous farming.'}</p><div class="hero-actions">${button(pathFor(lang,'machine'), mr ? 'यंत्र जाणून घ्या ↗' : 'Explore Pehelwan ↗')}${button('#engineering',mr ? 'रचना पाहा ↓' : 'Discover the systems ↓',true)}</div><p class="origin-note"><span aria-hidden="true"></span>${mr ? 'महाराष्ट्रात घडणारे. भारतीय शेतीसाठी.' : 'Engineered in Maharashtra. For Indian farms.'}</p></div><figure class="launch-visual"><div class="visual-topline"><span>PEHELWAN / 01</span><span>${mr ? 'इलेक्ट्रिक प्लॅटफॉर्म' : 'ELECTRIC PLATFORM'}</span></div>${picture(c.image,c.alt,'hero-image')}<div class="image-label"><span class="image-cross" aria-hidden="true">+</span><span>${mr ? 'क्वाड्रा स्टीयर' : 'Quadra steer'}<small>${mr ? 'चार चाकांच्या स्टीयरिंगची रचना' : 'Four-wheel steering design'}</small></span></div><figcaption>${c.imageNote}</figcaption></figure></div><div class="wrap launch-specs reveal">${specs.map(([value,unit,label],i)=>`<div><strong>${i ? `<span data-count="${value}">${mr ? new Intl.NumberFormat('mr-IN').format(Number(value)):value}</span>` : value}<small>${unit}</small></strong><span>${label}</span></div>`).join('')}</div><p class="wrap design-note">${mr ? 'कंपनीने दिलेले रचनेचे आकडे · नोव्हेंबर २०२६ · अंतिम तपशील बदलू शकतात' : 'Company-reported design figures · November 2026 · Final specifications may change'}</p></section>`;
}

function engineeringViewer(lang) {
  const mr = lang === 'mr';
  const items = mr ? [
    ['drive','इलेक्ट्रिक ड्राइव्ह','कॉम्पॅक्ट रचनेत इलेक्ट्रिक शक्ती आणि वेगवेगळ्या कामांसाठी बहुगती गिअरबॉक्स.'],
    ['steer','क्वाड्रा स्टीयर','मर्यादित जागेत वळण्यासाठी चार चाकांच्या स्टीयरिंगची रचना.'],
    ['linkage','अवजारांची जोडणी','वेगवेगळ्या शेतीकामांसाठी विकसित होत असलेली खास तीन बिंदू जोडणी.'],
    ['control','नियंत्रणाचे दोन मार्ग','रिमोट किंवा स्टीयरिंग व्हीलने नियंत्रणाची रचना. वापराची क्षमता चाचणीवर अवलंबून आहे.']
  ] : [
    ['drive','Electric at the core','Electric drive in a compact chassis, with a multi-speed gearbox designed around different working tasks.'],
    ['steer','Four wheels. A different turn.','Quadra steer is designed to help the machine manoeuvre where turning space is limited.'],
    ['linkage','A connection to the work','A custom three-point linkage for the implements the team is developing.'],
    ['control','Two ways to take control','The design includes remote operation and a steering wheel. Operating capability remains subject to testing.']
  ];
  return `<section class="section engineering-viewer" id="engineering"><div class="wrap"><div class="viewer-heading"><p class="kicker">${mr ? 'Pehelwan ची रचना' : 'Inside the architecture'}</p><h2>${mr ? 'प्रत्येक भागामागे<br>एक विचार.' : 'Purpose in<br>every part.'}</h2><p>${mr ? 'यंत्राच्या कल्पना जाणून घेण्यासाठी भाग निवडा.' : 'Open a system to explore the thinking behind the machine.'}</p></div><div class="engineering-console"><div class="system-list">${items.map(([id,title,text],i) => `<details name="engineering" data-system="${id}"${i===0?' open':''}><summary>${title}<span aria-hidden="true">+</span></summary><p>${text}</p></details>`).join('')}</div><figure class="machine-schematic"><div class="schematic-grid" aria-hidden="true"><div class="turn-radius"></div><div class="tractor-plan"><i class="wheel front left"></i><i class="wheel front right"></i><div class="chassis"><span class="battery-cell"></span><b>P</b><span class="gear-lines"></span></div><i class="wheel rear left"></i><i class="wheel rear right"></i><span class="linkage"></span></div></div><figcaption>${mr ? 'रचनेचे संकल्पनात्मक चित्र · मोजमापानुसार नाही' : 'Architecture concept · schematic, not to scale'}</figcaption></figure></div></div></section>`;
}

function farmerStory(lang) {
  const mr = lang === 'mr';
  const steps = mr ? [
    ['शेतकरी केंद्रस्थानी', 'पहिले ऐकले. मग घडवले.', 'MAMA च्या ड्रोन फवारणीच्या कामातून टीमचा शेतकऱ्यांशी संबंध आला. वेळेवर काम आणि जवळची सेवा किती महत्त्वाची आहे, हे त्या संवादातून समजले.'],
    ['शेताने दिलेली दिशा', 'ओळींमधली जागा. वळणामागचा विचार.', 'पीक ओळींमधील अंतर आणि वळण्यासाठीची मर्यादित जागा यामुळे यंत्राची रचना बदलते. Pehelwan चे अरुंद चेसिस आणि चार चाकांचे स्टीयरिंग ही त्या गरजांकडे पाहण्याची दिशा आहे.'],
    ['पुढचे पाऊल', 'अनुभव शेताचा. अभियांत्रिकी भारताची.', 'बहुगती गिअरबॉक्स, खास अवजार-जोडणी आणि इलेक्ट्रिक ड्राइव्ह. प्रत्यक्ष यंत्राच्या या कामासोबत व्हिजन AI आणि GPS आधारित शेतीकामाचा आराखडा पुढे जात आहे.']
  ] : [
    ['The people behind the purpose', 'Listen first. Build from there.', 'MAMA’s drone spraying work brought the team into conversations with farmers. Timely work and service close to home kept coming up. Those conversations became the starting point for Pehelwan.'],
    ['The field sets the brief', 'Between the rows. Around the turns.', 'Crop spacing and turning room change what a machine needs to do. Pehelwan’s narrow chassis and four-wheel steering design respond to that everyday reality.'],
    ['An Indian engineering story', 'Field experience becomes engineering.', 'A multi-speed gearbox. A custom implement linkage. Electric drive. Alongside the physical machine, the team is working towards vision AI and GPS guided field tasks.']
  ];
  return `<section class="farmer-story section" id="farmers"><div class="wrap story-layout"><div class="story-visual"><p class="kicker">${mr ? 'ही गोष्ट शेतातून सुरू होते' : 'The field came first'}</p><h2>${mr ? 'तंत्रज्ञान पुढचे.<br><em>विचार शेतकऱ्याचा.</em>' : 'Before the technology,<br><em>there was a conversation.</em>'}</h2><figure class="farmer-evidence">${picture('farmers-training.jpeg',mr ? 'कृषी ड्रोन प्रशिक्षणानंतर शेतकरी आणि MAMA टीम' : 'Farmers and the MAMA team after agricultural drone training')}<figcaption>${mr ? 'शेतकऱ्यांसोबतचा अनुभव · MAMA चे कृषी ड्रोन काम' : 'Experience alongside farmers · MAMA agricultural drone work'}</figcaption></figure><p class="story-intro">${mr ? 'चांगले यंत्र घडवण्यासाठी, रोज शेतात काम करणाऱ्या माणसांचे ऐकणे गरजेचे आहे.' : 'The most useful machine starts with understanding the people who will work with it.'}</p></div><div class="story-steps">${steps.map(([label, title, text]) => `<article class="story-step reveal"><p class="kicker">${label}</p><h3>${title}</h3><p>${text}</p></article>`).join('')}<div class="story-link">${button('#engineering', mr ? 'यंत्राची रचना पाहा' : 'Explore the engineering', true)}</div></div></div></section>`;
}

function chapters(lang) {
  const items = lang === 'mr'
    ? [['machine', 'यंत्राची रचना', 'इलेक्ट्रिक ड्राइव्ह · क्वाड्रा स्टीयर'], ['technology', 'पुढील तंत्रज्ञान', 'व्हिजन AI · GPS · अचूक शेती'], ['contact', 'आमची कंपनी', 'Shanik AG Private Limited']]
    : [['machine', 'The engineering', 'Electric drive · Quadra steer'], ['technology', 'The intelligence', 'Vision AI · GPS · Precision work'], ['contact', 'The company', 'Shanik AG Private Limited']];
  return `<nav class="chapter-strip wrap" aria-label="${lang === 'mr' ? 'Pehelwan जाणून घ्या' : 'Explore Pehelwan'}">${items.map(([page, title, detail]) => `<a href="${pathFor(lang, page)}"><strong>${title}</strong><span>${detail}</span></a>`).join('')}</nav>`;
}

function perceptionSteps(lang) {
  const mr = lang === 'mr';
  const steps = mr ? [
    ['see','01 / ओळखा','व्हिजन AI','कॅमेऱ्याच्या मदतीने पीक आणि तण ओळखण्याची दिशा. वनस्पतींच्या आरोग्याची माहिती गोळा करण्याचेही नियोजन.'],
    ['plan','02 / मार्ग ठरवा','GPS मार्ग नियोजन','पीक ओळींनुसार मार्ग ठरवणे आणि स्थानाची माहिती पेरणीच्या कामाशी जोडणे.'],
    ['act','03 / काम करा','लक्ष्यित मायक्रो स्प्रे','ओळखलेल्या तणावर अचूक फवारणी करण्याचे नियोजन. प्रत्यक्ष क्षमता शेतातील चाचण्यांवर अवलंबून आहे.']
  ] : [
    ['see','01 / Perceive','Vision AI','Identify crops and weeds using visual information, with plant-health observations as part of the roadmap.'],
    ['plan','02 / Plan','GPS path planning','Use crop rows to inform a route, and connect location information with the sowing implement.'],
    ['act','03 / Act','Targeted micro spray','The planned next step: direct treatment towards detected weeds. Capability depends on field validation.']
  ];
  return `<div class="perception-steps">${steps.map(([id,label,title,text],i)=>`<details name="perception" data-phase="${id}"${i===0?' open':''}><summary>${label}</summary><div><h3>${title}</h3><p>${text}</p></div></details>`).join('')}</div>`;
}

function fieldConcept(lang) {
  const mr = lang === 'mr';
  return `<section class="section field-concept" id="intelligence" data-field-concept><div class="wrap concept-grid"><div class="reveal"><p class="kicker">${mr ? 'स्वायत्त शेतीची दिशा' : 'Towards autonomous farming'}</p><h2>${mr ? 'प्रत्येक ओळीची<br>समज असलेले यंत्र.' : 'A new way to<br><em>read the field.</em>'}</h2><p>${mr ? 'पीक ओळ ओळखणे, मार्ग ठरवणे आणि गरजेच्या ठिकाणी काम करणे. व्हिजन AI आणि GPS यांना यंत्राच्या कामाशी जोडण्याची ही पुढील दिशा आहे.' : 'Recognise the crop. Understand the path. Work where it matters. The roadmap connects vision AI and GPS with the machine doing the work.'}</p>${button(pathFor(lang, 'technology'), mr ? 'AI ची पुढील दिशा' : 'Inside the AI roadmap', true)}</div><div class="perception-console reveal">${perceptionSteps(lang)}<figure class="field-diagram"><div class="field-map" aria-hidden="true"><div class="crop-rows">${Array.from({length: 5}, () => '<span>' + '<i></i>'.repeat(7) + '</span>').join('')}</div><div class="planned-path"></div><div class="field-machine"><i></i><b>P</b><i></i></div><div class="vision-cone"></div></div><figcaption><strong>${mr ? 'ओळखा · मार्ग ठरवा · काम करा' : 'Perceive · Navigate · Act'}</strong><span>${mr ? 'संकल्पनात्मक चित्र · प्रत्यक्ष यंत्राची माहिती नाही' : 'Concept illustration · not live machine data'}</span></figcaption></figure></div></div></section>`;
}

function technologySequence(lang) {
  const mr = lang === 'mr';
  const illustrations = [
    `<svg viewBox="0 0 320 210" aria-hidden="true" focusable="false"><path class="tech-grid" d="M0 42H320M0 84H320M0 126H320M0 168H320M53 0V210M106 0V210M159 0V210M212 0V210M265 0V210"/><path class="tech-leaf" d="M72 157q-25-25 0-49 25 24 0 49Zm0 0v26m102-84q-25-25 0-49 25 24 0 49Zm0 0v26m90 70q-25-25 0-49 25 24 0 49Zm0 0v25"/><rect class="tech-scan-beam" x="14" y="24" width="292" height="38" rx="3"/><path class="tech-focus" d="M154 49h-14v14m34-14h14v14m-48 16v14h14m34-14v14h-14"/><circle class="tech-focus-dot" cx="164" cy="72" r="5"/></svg>`,
    `<svg viewBox="0 0 320 210" aria-hidden="true" focusable="false"><path class="tech-grid" d="M0 42H320M0 84H320M0 126H320M0 168H320M53 0V210M106 0V210M159 0V210M212 0V210M265 0V210"/><path class="tech-terrain" d="M25 166q52-22 95-4t82-18 93-30M25 112q52-22 95-4t82-18 93-30M25 58q52-22 95-4t82-18 93-30"/><path class="tech-route" d="M40 159C78 156 66 106 113 107s36 55 82 36 39-75 85-76"/><circle class="tech-waypoint" cx="40" cy="159" r="6"/><circle class="tech-waypoint" cx="113" cy="107" r="6"/><circle class="tech-waypoint" cx="195" cy="143" r="6"/><circle class="tech-waypoint" cx="280" cy="67" r="8"/></svg>`,
    `<svg viewBox="0 0 320 210" aria-hidden="true" focusable="false"><path class="tech-grid" d="M0 42H320M0 84H320M0 126H320M0 168H320M53 0V210M106 0V210M159 0V210M212 0V210M265 0V210"/><path class="tech-spray-head" d="M130 29h60v18h-60zm13 18h34l-8 28h-18z"/><path class="tech-spray-cone" d="M160 75 87 168h146Z"/><circle class="tech-drop tech-drop-a" cx="132" cy="101" r="4"/><circle class="tech-drop tech-drop-b" cx="160" cy="112" r="4"/><circle class="tech-drop tech-drop-c" cx="187" cy="100" r="4"/><circle class="tech-target" cx="160" cy="164" r="20"/><circle class="tech-target-core" cx="160" cy="164" r="5"/><path class="tech-leaf" d="M80 183q-21-22 0-41 21 19 0 41m160 0q-21-22 0-41 21 19 0 41"/></svg>`
  ];
  const stages = mr ? [
    ['०१ / पाहणी', 'विकास सुरू', 'दृश्यातून माहिती', 'पीक आणि तण ओळखणे, तसेच रोपांच्या आरोग्याविषयी निरीक्षणे गोळा करणे, या दिशेने काम सुरू आहे.'],
    ['०२ / मार्ग', 'विकास सुरू', 'पुढचा मार्ग', 'पीक ओळींची माहिती वापरून यंत्राचा मार्ग ठरवण्यावर संशोधन सुरू आहे.'],
    ['०३ / कृती', 'नियोजनात', 'नेमक्या ठिकाणी काम', 'ओळखलेल्या तणावर सूक्ष्म फवारणी करण्याचे नियोजन आहे. प्रत्यक्ष क्षमता शेतातील चाचण्यांवर अवलंबून आहे.']
  ] : [
    ['01 / Observe', 'In development', 'A closer look at each plant', 'Research into recognising crops and weeds, with visual observations that may help describe plant health.'],
    ['02 / Navigate', 'In development', 'Find the way through', 'Research into using crop-row information to plan how the machine moves through a field.'],
    ['03 / Treat', 'Planned', 'Work at the right spot', 'Targeted micro spray is planned for detected weeds. Actual capability depends on field validation.']
  ];
  const sowingDiagram = `<svg viewBox="0 0 400 160" aria-hidden="true" focusable="false"><path class="tech-grid" d="M0 40H400M0 80H400M0 120H400M50 0V160M100 0V160M150 0V160M200 0V160M250 0V160M300 0V160M350 0V160"/><path class="tech-sow-row" d="M35 80H365"/><path class="tech-sow-line" d="M35 80H365"/><circle class="tech-sow-seed" cx="75" cy="80" r="5"/><circle class="tech-sow-seed" cx="125" cy="80" r="5"/><circle class="tech-sow-seed" cx="175" cy="80" r="5"/><circle class="tech-sow-seed" cx="225" cy="80" r="5"/><circle class="tech-sow-seed" cx="275" cy="80" r="5"/><circle class="tech-sow-seed" cx="325" cy="80" r="5"/><path class="tech-sow-arrow" d="m350 67 15 13-15 13"/></svg>`;
  return `<section class="section technology-sequence"><div class="wrap"><div class="technology-sequence-intro reveal"><div><p class="kicker">${mr ? 'व्हिजन AI ची दिशा' : 'Vision AI roadmap'}</p><h2>${mr ? 'शेताकडे पाहण्याची<br><em>नवी पद्धत.</em>' : 'Intelligence begins<br><em>with observation.</em>'}</h2></div><p>${mr ? 'दृश्य माहितीपासून मार्ग आणि नेमक्या कामापर्यंत — या तीन कल्पना विकसित होत आहेत. प्रत्यक्ष वापरासाठी शेतातील चाचणी आवश्यक आहे.' : 'From visual information to a path and a precise action: three connected ideas under development, each requiring field validation.'}</p></div><div class="technology-sequence-grid">${stages.map(([step,status,title,description],i)=>`<article class="tech-stage reveal"><div class="tech-stage-top"><span>${step}</span><span class="tech-stage-status">${status}</span></div><div class="tech-stage-visual">${illustrations[i]}</div><div class="tech-stage-copy"><h3>${title}</h3><p>${description}</p></div></article>`).join('')}</div><div class="tech-sowing reveal"><div class="tech-sowing-copy"><p class="kicker">${mr ? '०४ / GPS आधारित पेरणी · विकास सुरू' : '04 / GPS sowing · In development'}</p><h3>${mr ? 'बियाण्याचा मार्गही विचारपूर्वक.' : 'Position informs the work.'}</h3><p>${mr ? 'स्थानाची माहिती पेरणीच्या अवजाराशी जोडण्याचे काम सुरू आहे. अचूकता, समर्थित पिके आणि वापराची परिस्थिती शेतातील चाचण्यांनंतरच स्पष्ट होईल.' : 'The team aims to connect location information with the sowing implement. Accuracy, supported crops and operating conditions depend on field validation.'}</p></div><div class="tech-sowing-visual">${sowingDiagram}</div></div><p class="technology-sequence-note">${mr ? 'संकल्पनात्मक चित्रे · प्रत्यक्ष यंत्राची माहिती किंवा सिद्ध क्षमता नाही' : 'Concept illustrations · not live machine data or validated capability'}</p></div></section>`;
}

function document(lang, page) {
  const c = content[lang][page];
  const url = `https://pehelwan.live${pathFor(lang, page)}`;
  const alternate = `https://pehelwan.live${pathFor(opposite(lang), page)}`;
  const social = c.image ? `<meta property="og:image" content="https://pehelwan.live${asset(c.image)}">` : '';
  return `<!doctype html><html lang="${lang}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="theme-color" content="#101211"><title>${escapeHtml(c.title)}</title><meta name="description" content="${escapeHtml(c.description)}"><link rel="canonical" href="${url}"><link rel="alternate" hreflang="${opposite(lang)}" href="${alternate}"><link rel="alternate" hreflang="${lang}" href="${url}"><link rel="icon" type="image/jpeg" href="/assets/pehelwan-logo.jpg"><link rel="stylesheet" href="/assets/site.css?v=pehelwan-product-7"><meta property="og:type" content="website"><meta property="og:title" content="${escapeHtml(c.title)}"><meta property="og:description" content="${escapeHtml(c.description)}"><meta property="og:url" content="${url}">${social}</head><body data-page="${page}"><div class="reading-progress" aria-hidden="true"></div>${header(lang, page)}<main id="main">${hero(lang, page, c)}${c.body}</main>${footer(lang, page)}<script src="/assets/site.js?v=pehelwan-product-7" defer></script></body></html>`;
}

for (const lang of ['en', 'mr']) {
  for (const page of pages) {
    const directory = join(root, lang === 'mr' ? 'marathi' : '', page === 'home' ? '' : page);
    await mkdir(directory, { recursive: true });
    await writeFile(join(directory, 'index.html'), document(lang, page), 'utf8');
  }
}

const urls = ['en', 'mr'].flatMap(lang => pages.map(page => `  <url><loc>https://pehelwan.live${pathFor(lang, page)}</loc></url>`)).join('\n');
await writeFile(join(root, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`, 'utf8');
await writeFile(join(root, 'robots.txt'), 'User-agent: *\nAllow: /\nSitemap: https://pehelwan.live/sitemap.xml\n', 'utf8');
console.log(`Generated ${pages.length * 2} Pehelwan pages, sitemap.xml and robots.txt`);
