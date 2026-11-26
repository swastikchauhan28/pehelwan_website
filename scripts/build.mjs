import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

// All copy is reviewed, static source content. No visitor input is rendered by this builder.
const root = join(fileURLToPath(new URL('../', import.meta.url)), 'public');
const pages = ['home', 'machine', 'technology', 'journey', 'contact'];
const labels = {
  en: { home: 'Home', machine: 'The machine', technology: 'Technology', journey: 'Our journey', contact: 'Contact', menu: 'Menu', enquire: 'Enquire now', brand: 'by MAMA Agricultural Robotics', company: 'Shanik AG Private Limited', language: 'मराठी', footer: 'Pehelwan is a project of MAMA Agricultural Robotics by Shanik AG Private Limited.', back: 'Back to MAMA' },
  mr: { home: 'मुख्यपृष्ठ', machine: 'यंत्र', technology: 'तंत्रज्ञान', journey: 'आमचा प्रवास', contact: 'संपर्क', menu: 'मेनू', enquire: 'चौकशी करा', brand: 'मामा ॲग्रिकल्चरल रोबोटिक्सकडून', company: 'शानिक एजी प्रायव्हेट लिमिटेड', language: 'English', footer: 'Pehelwan हा शानिक एजी प्रायव्हेट लिमिटेडच्या मामा ॲग्रिकल्चरल रोबोटिक्सचा प्रकल्प आहे.', back: 'मामा वेबसाइट' },
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
      description: 'Meet Pehelwan, MAMA Agricultural Robotics’ compact electric tractor for work between crop rows.',
      eyebrow: 'A new ground system from MAMA',
      heading: 'Made for the space between.',
      lead: 'Pehelwan is a compact electric tractor shaped by the rows, turns and daily work of Indian farms.',
      image: 'pehelwan-hero.webp',
      alt: 'Pehelwan compact electric tractor photographed outdoors',
      imageNote: 'Current engineering build · final design may change',
      body: `
        <section class="section intro-grid" aria-labelledby="home-question"><div class="wrap intro-layout"><div class="reveal"><p class="kicker">The question</p><h2 id="home-question">What if the machine fit the field?</h2></div><div class="reveal"><p class="large-copy">The team spent time with farmers through drone spraying work. They heard how narrow rows, turning space and nearby service shape what a machine must do.</p><p>Pehelwan carries those observations into electric ground machinery.</p>${button('/journey/', 'Read our journey', true)}</div></div></section>
        <section class="section signal-section" aria-labelledby="home-machine"><div class="wrap signal-grid"><div class="reveal"><p class="kicker">The machine</p><h2 id="home-machine">Compact outside.<br>Considered inside.</h2><p>From the chassis to steering and attachment points, the current design aims to make useful work possible in tighter spaces.</p>${button('/machine/', 'Explore the machine')}</div><div class="signal-board reveal"><div><strong>3.1–3.2 <small>ft</small></strong><span>Current width</span></div><div><strong>4 <small>ft</small></strong><span>Target crop rows</span></div><div><strong>10 <small>kWh</small></strong><span>Battery design</span></div><p>Company-reported design figures, November 2026. Final specifications may change.</p></div></div></section>
        <section class="section idea-section"><div class="wrap idea-grid"><div class="reveal"><p class="kicker">Beyond motion</p><h2>Engineering with a view ahead.</h2></div><div class="reveal"><p>Vision AI, GPS guided sowing and targeted weeding are part of the team’s development roadmap. The machine’s mechanical design and Indian technology stack are taking shape alongside them.</p>${button('/technology/', 'Explore the technology', true)}</div></div></section>
        <section class="section close-section"><div class="wrap reveal"><p class="kicker">Start a conversation</p><h2>Tell us what your field needs.</h2><p>Share your crop, row spacing and the job you want a compact electric tractor to do.</p>${button('/contact/', 'Get in touch')}</div></section>`,
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
        <section class="section close-section"><div class="wrap reveal"><p class="kicker">Your application</p><h2>Tell us the job.</h2><p>The team can learn more from your crop, row spacing and intended implements.</p>${button('/contact/', 'Enquire about Pehelwan')}</div></section>`,
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
        <section class="section roadmap-section"><div class="wrap"><div class="section-heading reveal"><p class="kicker">Vision AI roadmap</p><h2>See. Understand. Act.</h2><p>Three connected areas guide the team’s work. Each requires field testing before any commercial claim can be made.</p></div><div class="roadmap-list"><article class="reveal"><span class="roadmap-index">01</span><div><h3>Autonomous navigation</h3><p>Research into how the machine can perceive its path and move through the field.</p></div><span class="status">In development</span></article><article class="reveal"><span class="roadmap-index">02</span><div><h3>Plant detection and health data</h3><p>Using visual information to identify plants and collect observations that may help growers understand crop conditions.</p></div><span class="status">In development</span></article><article class="reveal"><span class="roadmap-index">03</span><div><h3>Targeted weeding</h3><p>Vision guided micro spray is planned to treat weeds more precisely.</p></div><span class="status">Planned</span></article></div></div></section>
        <section class="section systems-section"><div class="wrap systems-grid"><div class="reveal"><p class="kicker">Precision work</p><h2>Place the seed where it belongs.</h2></div><div class="reveal"><p>GPS based sowing is part of the development roadmap. The aim is to connect location information with the implement doing the work.</p><p>Final accuracy, supported crops and operating conditions will depend on field validation.</p></div></div></section>
        <section class="section build-section"><div class="wrap"><div class="section-heading reveal"><p class="kicker">Built around local capability</p><h2>Indian engineering, component by component.</h2></div><div class="build-grid"><article class="reveal"><h3>Mostly Indian technology stack</h3><p>The team is building much of Pehelwan’s hardware and software capability in India.</p></article><article class="reveal"><h3>Custom battery pack</h3><p>A pack tailored to the machine is in the making. The current 10 kWh figure is a design reference, not a validated operating time.</p></article></div></div></section>
        <section class="section close-section"><div class="wrap reveal"><p class="kicker">Follow the work</p><h2>From the roadmap to the field.</h2><p>See the current machine and the work that led here.</p><div class="button-row">${button('/machine/', 'See the machine')}${button('/journey/', 'Read the journey', true)}</div></div></section>`,
    },
    journey: {
      title: 'Our journey | Pehelwan',
      description: 'Follow MAMA’s work from drone spraying and farmer conversations to the development of Pehelwan.',
      eyebrow: 'Pehelwan / our journey',
      heading: 'Built from conversations in the field.',
      lead: 'Before the tractor, the team worked with farmers through agricultural drones and spraying. What they heard shaped the next machine.',
      image: 'mama-farm-drone-group-2026.jpg',
      alt: 'MAMA team and farmers standing together with an agricultural drone',
      imageNote: 'MAMA team and growers · field work',
      body: `
        <section class="section timeline-section"><div class="wrap"><div class="section-heading reveal"><p class="kicker">How the work progressed</p><h2>One step led to the next.</h2></div><div class="timeline"><article class="reveal"><time datetime="2023">2023</time><div><h3>Drone spraying began</h3><p>MAMA started agricultural drone work and built a service relationship with growers. Timely work and support close to home came up again and again.</p></div></article><article class="reveal"><time datetime="2024-04">April 2024</time><div><h3>Ten days on the road</h3><p>A trip from Pune to Yavatmal took the team into farmers’ fields to hear where equipment fell short.</p></div></article><article class="reveal"><time datetime="2026">2026</time><div><h3>Pehelwan took shape</h3><p>The team applied those lessons to a compact electric ground machine, with design work focused on narrow crop rows, steering and useful implements.</p></div></article></div><figure class="journey-road reveal">${picture('pehelwan-road-view.webp', 'Pehelwan electric tractor on a paved road')}<figcaption>Pehelwan on the road · current engineering build</figcaption></figure></div></section>
        <section class="section founder-section"><div class="wrap founder-grid"><div class="reveal">${picture('founder-field-session.webp', 'MAMA founder Dheeraj Borde speaking with farmers at a field session')}</div><div class="reveal"><p class="kicker">Farming roots</p><h2>Problems close to home.</h2><p>Founder Dheeraj Borde grew up in a farming family. The company’s work began with problems he knew firsthand and has continued through regular contact with people working in the field.</p><p>Pehelwan is one result of listening, building and returning to test the ideas.</p></div></div></section>
        <section class="section close-section"><div class="wrap reveal"><p class="kicker">The next chapter</p><h2>Help shape what comes next.</h2><p>Tell us what a compact electric tractor would need to do on your farm.</p>${button('/contact/', 'Talk to the team')}</div></section>`,
    },
    contact: {
      title: 'Contact | Pehelwan',
      description: 'Contact the Pehelwan team about the electric tractor, field requirements, updates and collaboration.',
      eyebrow: 'Pehelwan / contact',
      heading: 'Start with your field.',
      lead: 'Tell the team where you farm, your row spacing and the work you want Pehelwan to handle.',
      image: null,
      body: `
        <section class="section contact-section"><div class="wrap contact-grid"><div class="reveal"><p class="kicker">Send an enquiry</p><h2>Give us the details that matter.</h2><p>Use MAMA’s existing enquiry form and select Pehelwan updates. Please include your district, crop, row spacing and intended task. The form is hosted by MAMA Agricultural Robotics.</p>${button('https://www.mamaapp.live/contact?interest=tractor', 'Open enquiry form')}<p class="form-note">The form opens on mamaapp.live. Please avoid sharing sensitive personal or financial information.</p></div><aside class="contact-card reveal"><p class="kicker">Call the team</p><a class="phone-link" href="tel:+919322418319">+91 93224 18319</a><a class="phone-link" href="tel:+919834512803">+91 98345 12803</a><div class="contact-divider"></div><p class="kicker">Office</p><address>STPI, T-17, Opp. Garware Stadium,<br>MIDC, Chikalthana,<br>Chhatrapati Sambhajinagar, Maharashtra</address></aside></div></section>
        <section class="section contact-prompts"><div class="wrap"><p class="kicker reveal">Useful starting points</p><div class="prompt-grid"><article class="reveal"><h3>For farmers</h3><p>What are your crop and row spacing? Which job takes the most time today?</p></article><article class="reveal"><h3>For partners</h3><p>Tell us about the implement, research or field trial you would like to discuss.</p></article><article class="reveal"><h3>For updates</h3><p>Ask about testing progress and future availability. No sales date has been announced.</p></article></div></div></section>`,
    },
  },
  mr: {
    home: {
      title: 'Pehelwan | पीक ओळींमधील कामासाठी इलेक्ट्रिक ट्रॅक्टर',
      description: 'मामा ॲग्रिकल्चरल रोबोटिक्सचा Pehelwan इलेक्ट्रिक ट्रॅक्टर आणि त्यामागील काम जाणून घ्या.',
      eyebrow: 'मामाची नवी जमिनीवरील यंत्रणा',
      heading: 'दोन ओळींमधल्या कामासाठी.',
      lead: 'Pehelwan हा भारतीय शेतीतील पीक ओळी, वळणे आणि रोजचे काम लक्षात घेऊन बनवला जाणारा छोटा इलेक्ट्रिक ट्रॅक्टर आहे.',
      image: 'pehelwan-hero.webp',
      alt: 'बाहेर छायाचित्रित केलेला Pehelwan इलेक्ट्रिक ट्रॅक्टर',
      imageNote: 'सध्याची अभियांत्रिकी रचना · अंतिम स्वरूप बदलू शकते',
      body: `
        <section class="section intro-grid" aria-labelledby="home-question"><div class="wrap intro-layout"><div class="reveal"><p class="kicker">मूळ प्रश्न</p><h2 id="home-question">यंत्र शेताला अनुरूप असेल तर?</h2></div><div class="reveal"><p class="large-copy">ड्रोन फवारणीच्या कामातून टीम शेतकऱ्यांबरोबर राहिली. अरुंद पीक ओळी, वळण्यासाठीची जागा आणि जवळ मिळणारी सेवा किती महत्त्वाची आहे हे समजले.</p><p>त्या अनुभवातून Pehelwan चे काम सुरू झाले.</p>${button('/marathi/journey/', 'आमचा प्रवास वाचा', true)}</div></div></section>
        <section class="section signal-section" aria-labelledby="home-machine"><div class="wrap signal-grid"><div class="reveal"><p class="kicker">यंत्र</p><h2 id="home-machine">बाहेरून छोटे.<br>आतून विचारपूर्वक.</h2><p>सध्याच्या रचनेत चेसिस, स्टीयरिंग आणि अवजारे जोडण्याची व्यवस्था कमी जागेतील कामासाठी विकसित केली जात आहे.</p>${button('/marathi/machine/', 'यंत्र पाहा')}</div><div class="signal-board reveal"><div><strong>३.१–३.२ <small>फूट</small></strong><span>सध्याची रुंदी</span></div><div><strong>४ <small>फूट</small></strong><span>लक्ष्यित पीक ओळी</span></div><div><strong>१० <small>kWh</small></strong><span>बॅटरी रचना</span></div><p>नोव्हेंबर २०२६ मधील कंपनीने दिलेली रचनेची माहिती. अंतिम तपशील बदलू शकतात.</p></div></div></section>
        <section class="section idea-section"><div class="wrap idea-grid"><div class="reveal"><p class="kicker">पुढचा विचार</p><h2>शेतातील कामासाठी तंत्रज्ञान.</h2></div><div class="reveal"><p>व्हिजन AI, GPS आधारित पेरणी आणि लक्ष्यित तण नियंत्रण यावर टीम काम करत आहे. यंत्ररचना आणि भारतीय तंत्रज्ञानाची जोडही त्याचबरोबर विकसित होत आहे.</p>${button('/marathi/technology/', 'तंत्रज्ञान पाहा', true)}</div></div></section>
        <section class="section close-section"><div class="wrap reveal"><p class="kicker">संवाद सुरू करा</p><h2>तुमच्या शेताची गरज सांगा.</h2><p>तुमचे पीक, ओळींमधील अंतर आणि ट्रॅक्टरकडून अपेक्षित काम आम्हाला कळवा.</p>${button('/marathi/contact/', 'संपर्क करा')}</div></section>`,
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
        <section class="section close-section"><div class="wrap reveal"><p class="kicker">तुमचा उपयोग</p><h2>कशासाठी यंत्र हवे?</h2><p>तुमचे पीक, ओळींमधील अंतर आणि वापरायची अवजारे टीमला सांगा.</p>${button('/marathi/contact/', 'Pehelwan बद्दल चौकशी करा')}</div></section>`,
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
        <section class="section roadmap-section"><div class="wrap"><div class="section-heading reveal"><p class="kicker">व्हिजन AI योजना</p><h2>पाहा. समजा. काम करा.</h2><p>टीमच्या कामाचे तीन भाग. वापराविषयी दावा करण्यापूर्वी प्रत्येकाची शेतात चाचणी आवश्यक आहे.</p></div><div class="roadmap-list"><article class="reveal"><span class="roadmap-index">०१</span><div><h3>स्वयंचलित मार्गक्रमण</h3><p>यंत्राला मार्ग दिसावा आणि शेतातून चालता यावे यासाठी संशोधन.</p></div><span class="status">विकास सुरू</span></article><article class="reveal"><span class="roadmap-index">०२</span><div><h3>रोपांची ओळख आणि आरोग्य माहिती</h3><p>दृश्य माहिती वापरून रोपे ओळखणे आणि पिकांच्या स्थितीबद्दल निरीक्षणे गोळा करणे.</p></div><span class="status">विकास सुरू</span></article><article class="reveal"><span class="roadmap-index">०३</span><div><h3>लक्ष्यित तण नियंत्रण</h3><p>व्हिजन AI च्या मदतीने तणांवर नेमकी सूक्ष्म फवारणी करण्याचे नियोजन.</p></div><span class="status">नियोजनात</span></article></div></div></section>
        <section class="section systems-section"><div class="wrap systems-grid"><div class="reveal"><p class="kicker">नेमके काम</p><h2>बियाणे योग्य जागी पेरा.</h2></div><div class="reveal"><p>GPS आधारित पेरणी विकास योजनेचा भाग आहे. स्थानाची माहिती आणि पेरणी करणारे अवजार यांची जोड देणे हा उद्देश आहे.</p><p>अचूकता, समर्थित पिके आणि कामाची परिस्थिती शेतातील चाचणीनंतरच स्पष्ट होईल.</p></div></div></section>
        <section class="section build-section"><div class="wrap"><div class="section-heading reveal"><p class="kicker">स्थानिक क्षमता</p><h2>भारतीय अभियांत्रिकी, भागागणिक.</h2></div><div class="build-grid"><article class="reveal"><h3>प्रामुख्याने भारतीय तंत्रज्ञान</h3><p>Pehelwan चे बरेचसे हार्डवेअर आणि सॉफ्टवेअर भारतात विकसित करण्यावर टीम काम करत आहे.</p></article><article class="reveal"><h3>खास बॅटरी पॅक</h3><p>यंत्रासाठी वेगळा पॅक तयार होत आहे. सध्याचा १० kWh आकडा रचनेचा संदर्भ आहे; सिद्ध झालेला कामाचा कालावधी नाही.</p></article></div></div></section>
        <section class="section close-section"><div class="wrap reveal"><p class="kicker">कामाचा पुढचा टप्पा</p><h2>कल्पनेपासून शेतापर्यंत.</h2><p>सध्याचे यंत्र आणि इथवरचा प्रवास पाहा.</p><div class="button-row">${button('/marathi/machine/', 'यंत्र पाहा')}${button('/marathi/journey/', 'प्रवास वाचा', true)}</div></div></section>`,
    },
    journey: {
      title: 'आमचा प्रवास | Pehelwan',
      description: 'ड्रोन फवारणी, शेतकऱ्यांशी संवाद आणि Pehelwan च्या विकासापर्यंत मामाचा प्रवास.',
      eyebrow: 'Pehelwan / आमचा प्रवास',
      heading: 'शेतातील संवादातून घडलेले यंत्र.',
      lead: 'ट्रॅक्टरच्या आधी टीमने कृषी ड्रोन आणि फवारणीच्या माध्यमातून शेतकऱ्यांबरोबर काम केले. तिथे ऐकलेल्या गरजांतून पुढची दिशा मिळाली.',
      image: 'mama-farm-drone-group-2026.jpg',
      alt: 'कृषी ड्रोनसोबत उभे असलेले मामा टीमचे सदस्य आणि शेतकरी',
      imageNote: 'मामा टीम आणि शेतकरी · शेतातील काम',
      body: `
        <section class="section timeline-section"><div class="wrap"><div class="section-heading reveal"><p class="kicker">काम कसे पुढे गेले</p><h2>एक पाऊल, मग दुसरे.</h2></div><div class="timeline"><article class="reveal"><time datetime="2023">२०२३</time><div><h3>ड्रोन फवारणी सुरू</h3><p>मामाने कृषी ड्रोनचे काम सुरू केले आणि शेतकऱ्यांशी सेवेचे नाते बांधले. वेळेवर काम आणि घराजवळ मदत यांचे महत्त्व वारंवार समोर आले.</p></div></article><article class="reveal"><time datetime="2024-04">एप्रिल २०२४</time><div><h3>दहा दिवसांचा प्रवास</h3><p>पुणे ते यवतमाळ या प्रवासात टीमने शेतात जाऊन यंत्रसामग्री कुठे कमी पडते ते ऐकले.</p></div></article><article class="reveal"><time datetime="2026">२०२६</time><div><h3>Pehelwan आकाराला आला</h3><p>त्या अनुभवातून अरुंद पीक ओळी, स्टीयरिंग आणि उपयुक्त अवजारे लक्षात घेऊन इलेक्ट्रिक शेतयंत्रावर काम सुरू झाले.</p></div></article></div><figure class="journey-road reveal">${picture('pehelwan-road-view.webp', 'रस्त्यावर उभा असलेला Pehelwan इलेक्ट्रिक ट्रॅक्टर')}<figcaption>रस्त्यावरचा Pehelwan · सध्याची अभियांत्रिकी रचना</figcaption></figure></div></section>
        <section class="section founder-section"><div class="wrap founder-grid"><div class="reveal">${picture('founder-field-session.webp', 'शेतकऱ्यांसमोर बोलताना मामाचे संस्थापक धीरज बोर्डे')}</div><div class="reveal"><p class="kicker">शेतीशी नाते</p><h2>घराशी जोडलेले प्रश्न.</h2><p>संस्थापक धीरज बोर्डे शेतकरी कुटुंबात वाढले. जवळून माहिती असलेल्या प्रश्नांपासून कंपनीचे काम सुरू झाले आणि शेतातील लोकांशी संवादातून ते पुढे जात आहे.</p><p>ऐकणे, तयार करणे आणि पुन्हा चाचणी करणे यांतून Pehelwan घडत आहे.</p></div></div></section>
        <section class="section close-section"><div class="wrap reveal"><p class="kicker">पुढचा टप्पा</p><h2>पुढची दिशा ठरवायला मदत करा.</h2><p>तुमच्या शेतात छोट्या इलेक्ट्रिक ट्रॅक्टरकडून काय काम अपेक्षित आहे ते सांगा.</p>${button('/marathi/contact/', 'टीमशी बोला')}</div></section>`,
    },
    contact: {
      title: 'संपर्क | Pehelwan',
      description: 'Pehelwan ट्रॅक्टर, शेतातील गरजा, अपडेट आणि सहकार्याबद्दल टीमशी संपर्क करा.',
      eyebrow: 'Pehelwan / संपर्क',
      heading: 'तुमच्या शेतापासून सुरुवात करा.',
      lead: 'तुमचा जिल्हा, पीक, ओळींमधील अंतर आणि Pehelwan कडून अपेक्षित काम टीमला सांगा.',
      image: null,
      body: `
        <section class="section contact-section"><div class="wrap contact-grid"><div class="reveal"><p class="kicker">चौकशी पाठवा</p><h2>कामाची उपयुक्त माहिती द्या.</h2><p>मामाच्या विद्यमान फॉर्ममध्ये Pehelwan विषय निवडा. तुमचा जिल्हा, पीक, ओळींमधील अंतर आणि अपेक्षित काम लिहा. हा फॉर्म मामा ॲग्रिकल्चरल रोबोटिक्सच्या वेबसाइटवर आहे.</p>${button('https://www.mamaapp.live/marathi/contact?interest=tractor', 'चौकशी फॉर्म उघडा')}<p class="form-note">फॉर्म mamaapp.live वर उघडेल. संवेदनशील वैयक्तिक किंवा आर्थिक माहिती पाठवू नका.</p></div><aside class="contact-card reveal"><p class="kicker">टीमला फोन करा</p><a class="phone-link" href="tel:+919322418319">+91 93224 18319</a><a class="phone-link" href="tel:+919834512803">+91 98345 12803</a><div class="contact-divider"></div><p class="kicker">कार्यालय</p><address>STPI, T-17, गरवारे स्टेडियमसमोर,<br>MIDC, चिकलठाणा,<br>छत्रपती संभाजीनगर, महाराष्ट्र</address></aside></div></section>
        <section class="section contact-prompts"><div class="wrap"><p class="kicker reveal">सुरुवातीला काय सांगावे</p><div class="prompt-grid"><article class="reveal"><h3>शेतकऱ्यांसाठी</h3><p>तुमचे पीक कोणते? ओळींमधील अंतर किती? कोणत्या कामाला सर्वाधिक वेळ लागतो?</p></article><article class="reveal"><h3>सहकाऱ्यांसाठी</h3><p>तुम्हाला कोणत्या अवजार, संशोधन किंवा शेतातील चाचणीबद्दल बोलायचे आहे?</p></article><article class="reveal"><h3>अपडेटसाठी</h3><p>चाचणी आणि पुढील उपलब्धतेबद्दल विचारा. विक्रीची तारीख जाहीर झालेली नाही.</p></article></div></div></section>`,
    },
  },
};

function header(lang, page) {
  const t = labels[lang];
  const links = pages.map(item => `<a href="${pathFor(lang, item)}"${item === page ? ' aria-current="page"' : ''}>${t[item]}</a>`).join('');
  return `<a class="skip-link" href="#main">${lang === 'mr' ? 'मुख्य मजकुराकडे जा' : 'Skip to content'}</a><header class="site-header"><div class="wrap header-inner"><a class="wordmark" href="${pathFor(lang, 'home')}" aria-label="Pehelwan ${t.home}"><strong>PEHELWAN</strong><small>${t.brand}</small></a><nav class="desktop-nav" aria-label="${lang === 'mr' ? 'मुख्य नेव्हिगेशन' : 'Main navigation'}">${links}</nav><div class="header-actions"><a class="language-switch" href="${pathFor(opposite(lang), page)}" lang="${opposite(lang)}" hreflang="${opposite(lang)}">${t.language}</a><a class="header-enquire" href="${pathFor(lang, 'contact')}">${t.enquire}</a><details class="mobile-menu"><summary>${t.menu}</summary><nav aria-label="${lang === 'mr' ? 'मोबाइल नेव्हिगेशन' : 'Mobile navigation'}">${links}</nav></details></div></div></header>`;
}

function footer(lang, page) {
  const t = labels[lang];
  const links = pages.map(item => `<a href="${pathFor(lang, item)}">${t[item]}</a>`).join('');
  return `<footer class="site-footer"><div class="wrap footer-main"><div><strong class="footer-wordmark">PEHELWAN</strong><p>${t.footer}</p></div><nav aria-label="${lang === 'mr' ? 'पादलेख नेव्हिगेशन' : 'Footer navigation'}">${links}</nav></div><div class="wrap footer-bottom"><span>© ${new Date().getFullYear()} ${t.company}</span><a href="https://www.mamaapp.live/">${t.back}</a></div></footer>${page === 'contact' ? '' : `<a class="floating-enquiry" href="${pathFor(lang, 'contact')}">${t.enquire}</a>`}`;
}

function hero(lang, page, c) {
  const home = page === 'home';
  const action = page === 'contact' ? 'https://www.mamaapp.live/' + (lang === 'mr' ? 'marathi/' : '') + 'contact?interest=tractor' : pathFor(lang, 'contact');
  const actionText = page === 'contact' ? (lang === 'mr' ? 'चौकशी फॉर्म उघडा' : 'Open enquiry form') : labels[lang].enquire;
  return `<section class="page-hero${home ? ' home-hero' : ''}${c.image ? '' : ' text-hero'}"><div class="wrap hero-grid"><div class="hero-copy"><p class="kicker">${c.eyebrow}</p><h1>${c.heading}</h1><p class="hero-lead">${c.lead}</p><div class="hero-actions">${button(action, actionText)}${home ? button(pathFor(lang, 'machine'), lang === 'mr' ? 'यंत्र पाहा' : 'See the machine', true) : ''}</div></div>${c.image ? `<figure class="hero-visual">${picture(c.image, c.alt, 'hero-image')}<figcaption>${c.imageNote}</figcaption></figure>` : `<div class="contact-graphic" aria-hidden="true"><span>PEHELWAN</span><i></i></div>`}</div></section>`;
}

function document(lang, page) {
  const c = content[lang][page];
  const url = `https://pehelwan.live${pathFor(lang, page)}`;
  const alternate = `https://pehelwan.live${pathFor(opposite(lang), page)}`;
  const social = c.image ? `<meta property="og:image" content="https://pehelwan.live${asset(c.image)}">` : '';
  return `<!doctype html><html lang="${lang}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="theme-color" content="#101719"><title>${escapeHtml(c.title)}</title><meta name="description" content="${escapeHtml(c.description)}"><link rel="canonical" href="${url}"><link rel="alternate" hreflang="${opposite(lang)}" href="${alternate}"><link rel="alternate" hreflang="${lang}" href="${url}"><link rel="icon" type="image/svg+xml" href="/assets/favicon.svg"><link rel="stylesheet" href="/assets/site.css"><meta property="og:type" content="website"><meta property="og:title" content="${escapeHtml(c.title)}"><meta property="og:description" content="${escapeHtml(c.description)}"><meta property="og:url" content="${url}">${social}</head><body data-page="${page}">${header(lang, page)}<main id="main">${hero(lang, page, c)}${c.body}</main>${footer(lang, page)}<script src="/assets/site.js" defer></script></body></html>`;
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
console.log('Generated 10 Pehelwan pages, sitemap.xml and robots.txt');
