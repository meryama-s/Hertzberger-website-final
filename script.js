'use strict';

/* ── TRANSLATIONS ────────────────────────────────────── */
const T = {
  en: {
    age_title:"Age Verification", age_desc:"This website is intended for adults of legal drinking age only. Please confirm your age to continue.", age_question:"Are you 18 years of age or older?", age_yes:"Yes, I am 18+", age_no:"No, Exit", age_legal:"By entering you agree to our Terms of Use. HERTZBERGER promotes responsible drinking.",
    modal_title:"Choose a Catalog", modal_desc:"Choose the collection you would like to download.",
    cf_name:"Full Name *", cf_company:"Company Name *", cf_email:"Email Address *", cf_phone:"Phone Number *", cf_country:"Country *", cf_country_select:"Select your country", cf_submit:"Download Catalog", cf_success:"Thank you! Your catalog download will begin shortly.", err_required:"This field is required", err_email:"Enter a valid email address",
    nav_home:"Home", nav_about:"About", nav_services:"Services", nav_suppliers:"Suppliers", nav_products:"Products", nav_catalog:"Catalog", nav_contact:"Contact", nav_cta:"Contact Us",
    hero_eyebrow:"Importation & Distribution", hero_subtitle:"Importation & Distribution of Premium Beverages", hero_desc:"Your trusted partner in sourcing and distributing the world's finest alcoholic beverages. From exclusive vintages to premium spirits, we bring excellence to every market we serve.", hero_btn1:"Contact Us", hero_btn2:"Explore Catalog", scroll:"Scroll Down",
    tick1:"Premium Importation", tick2:"Global Distribution", tick3:"Trusted Partners", tick4:"Premium Spirits", tick5:"Fine Wines", tick6:"Expert Logistics",
    about_tag:"About HERTZBERGER", about_title:"A Legacy of <span class='red'>Premium</span> Distribution", about_p1:"Founded with a passion for premium beverages, HERTZBERGER has grown into a trusted leader in the importation and distribution industry. We bridge the gap between the world's most renowned producers and the markets that demand quality.", about_p2:"Our expertise spans across wines, spirits, champagnes, and specialty beverages — each carefully sourced and handled with the highest standards of professionalism and care.", badge_years:"Years of Excellence",
    mission_title:"Our Mission", mission_text:"To be the most reliable and premium beverage distribution partner, delivering excellence from source to shelf.", vision_title:"Our Vision", vision_text:"To redefine the standards of premium beverage importation across global markets through trust, innovation, and expertise.",
    stat_years:"Years Experience", stat_partners:"Partners", stat_brands:"Premium Brands", stat_countries:"Countries",
    services_tag:"What We Do", services_title:"Our <span class='red'>Services</span>", services_sub:"End-to-end beverage solutions — from sourcing and importation to logistics, marketing, and delivery.",
    svc1_title:"Importation", svc1_desc:"We handle the complete importation process — from sourcing premium products from international suppliers to customs clearance and compliance.", svc2_title:"Distribution", svc2_desc:"Reliable and efficient distribution across all channels — hotels, restaurants, retailers, and specialty stores — with guaranteed delivery standards.", svc3_title:"Logistics", svc3_desc:"State-of-the-art warehousing, inventory management, cold-chain solutions, and real-time tracking ensuring products arrive in perfect condition.", svc4_title:"Marketing Support", svc4_desc:"Strategic brand activation, promotional events, point-of-sale marketing, and campaign management to maximize brand visibility in every market.", svc5_title:"Supplier Management", svc5_desc:"Building long-term relationships with premium international suppliers, managing contracts, quality control, and exclusive distribution agreements.",
    suppliers_tag:"Our Partners", suppliers_title:"Trusted <span class='red'>Suppliers</span>", suppliers_sub:"We partner exclusively with world-class producers who share our commitment to quality and excellence.",
    products_tag:"Our Portfolio", products_title:"Premium <span class='red'>Products</span>", products_sub:"A curated selection of the world's finest wines, spirits, champagnes, and specialty beverages.", pf_all:"All", pf_wine:"Wines", pf_spirits:"Spirits", pf_champagne:"Champagne", pf_beer:"Beer", view_details:"View Details",
    catalog_tag:"Our Catalog", catalog_title:"Explore Our <span class='red'>Full Range</span>", catalog_desc:"Download our comprehensive product catalog to discover our complete portfolio of premium beverages, brands, and availability for your market.", catalog_btn_text:"Download Catalog",
    gallery_tag:"Our World", gallery_title:"Gallery & <span class='red'>Showcase</span>", gal1:"Premium Collection", gal2:"Warehouse", gal3:"Distribution", gal4:"Events", gal5:"Our Team",
    contact_tag:"Get In Touch", contact_title:"Let's <span class='red'>Work Together</span>", contact_sub:"Whether you're a supplier, retailer, or business partner — we're ready to build a relationship.",
    ci_addr_label:"Address", ci_addr:"El gharb street villa Brêment, Mohammedia, Morocco", ci_phone_label:"Phone", ci_phone:"+212 609 626 352", ci_email_label:"Email", ci_email:"contact@hertzberger.com", ci_hours_label:"Hours", ci_hours:"Mon – Fri: 8:00 AM – 6:00 PM", map_label:"Google Maps — bed Here",
    cf_c_name:"Full Name *", cf_c_email:"Email *", cf_c_phone:"Phone", cf_c_subject:"Subject", cf_select:"Select subject", cf_opt1:"Importation Inquiry", cf_opt2:"Distribution Partnership", cf_opt3:"Become a Supplier", cf_opt4:"Other", cf_c_message:"Message *", cf_submit_c:"Send Message", cf_success_msg:"Message sent! We'll be in touch shortly.",
    footer_desc:"Premium importation and distribution of alcoholic beverages. Connecting world-class producers with discerning markets.", footer_nav:"Navigation", footer_services:"Services", footer_contact:"Contact", footer_copy:"© 2025 HERTZBERGER Luxury Brands. All rights reserved. Please drink responsibly.", footer_privacy:"Privacy Policy", footer_terms:"Terms of Use",
  },
  fr: {
    age_title:"Vérification d'Âge", age_desc:"Ce site est réservé aux adultes en âge légal de consommer de l'alcool. Veuillez confirmer votre âge.", age_question:"Avez-vous 18 ans ou plus ?", age_yes:"Oui, j'ai 18+", age_no:"Non, Quitter", age_legal:"En entrant, vous acceptez nos Conditions d'utilisation. HERTZBERGER promeut une consommation responsable.",
    modal_title:"Choisissez un Catalogue", modal_desc:"Choisissez la collection que vous souhaitez télécharger.",
    cf_name:"Nom Complet *", cf_company:"Nom de l'Entreprise *", cf_email:"Adresse Email *", cf_phone:"Téléphone *", cf_country:"Pays *", cf_country_select:"Sélectionnez votre pays", cf_submit:"Télécharger le Catalogue", cf_success:"Merci ! Le téléchargement va commencer.", err_required:"Ce champ est obligatoire", err_email:"Entrez une adresse email valide",
    nav_home:"Accueil", nav_about:"À Propos", nav_services:"Services", nav_suppliers:"Fournisseurs", nav_products:"Produits", nav_catalog:"Catalogue", nav_contact:"Contact", nav_cta:"Contactez-Nous",
    hero_eyebrow:"Importation & Distribution", hero_subtitle:"Importation & Distribution de Boissons Premium", hero_desc:"Votre partenaire de confiance pour l'approvisionnement et la distribution des meilleures boissons alcoolisées. Des millésimes exclusifs aux spiritueux premium, nous apportons l'excellence.", hero_btn1:"Contactez-Nous", hero_btn2:"Explorer le Catalogue", scroll:"Défiler",
    tick1:"Importation Premium", tick2:"Distribution Mondiale", tick3:"Partenaires de Confiance", tick4:"Spiritueux Premium", tick5:"Vins Fins", tick6:"Logistique Experte",
    about_tag:"À Propos de HERTZBERGER", about_title:"Un Héritage de Distribution <span class='red'>Premium</span>", about_p1:"Fondée avec une passion pour les boissons premium, HERTZBERGER est devenue un leader de confiance dans l'importation et la distribution. Nous comblons le fossé entre les producteurs les plus renommés et les marchés exigeants.", about_p2:"Notre expertise couvre les vins, spiritueux, champagnes et boissons spéciales — chacun soigneusement sourcé avec les plus hauts standards de professionnalisme.", badge_years:"Années d'Excellence",
    mission_title:"Notre Mission", mission_text:"Être le partenaire de distribution de boissons le plus fiable et premium, offrant l'excellence de la source à l'étagère.", vision_title:"Notre Vision", vision_text:"Redéfinir les standards de l'importation de boissons premium à l'échelle mondiale grâce à la confiance, l'innovation et l'expertise.",
    stat_years:"Années d'Expérience", stat_partners:"Partenaires", stat_brands:"Marques Premium", stat_countries:"Pays",
    services_tag:"Ce Que Nous Faisons", services_title:"Nos <span class='red'>Services</span>", services_sub:"Solutions boissons complètes — de l'approvisionnement à la livraison, en passant par la logistique et le marketing.",
    svc1_title:"Importation", svc1_desc:"Nous gérons le processus d'importation complet — de l'approvisionnement au dédouanement et à la conformité.", svc2_title:"Distribution", svc2_desc:"Distribution fiable sur tous les canaux — hôtels, restaurants, détaillants — avec des normes de livraison garanties.", svc3_title:"Logistique", svc3_desc:"Entreposage de pointe, gestion des stocks et chaîne du froid pour des produits en parfait état.", svc4_title:"Support Marketing", svc4_desc:"Activation de marque stratégique, événements promotionnels et gestion de campagnes pour maximiser la visibilité.", svc5_title:"Gestion Fournisseurs", svc5_desc:"Relations à long terme avec des fournisseurs premium, gestion des contrats et accords exclusifs.",
    suppliers_tag:"Nos Partenaires", suppliers_title:"Fournisseurs de <span class='red'>Confiance</span>", suppliers_sub:"Nous collaborons exclusivement avec des producteurs de classe mondiale partageant notre engagement envers la qualité.",
    products_tag:"Notre Portfolio", products_title:"Produits <span class='red'>Premium</span>", products_sub:"Une sélection curatée des meilleurs vins, spiritueux, champagnes et boissons spéciales.", pf_all:"Tout", pf_wine:"Vins", pf_spirits:"Spiritueux", pf_champagne:"Champagne", pf_beer:"Bière", view_details:"Voir Détails",
    catalog_tag:"Notre Catalogue", catalog_title:"Explorez Notre <span class='red'>Gamme Complète</span>", catalog_desc:"Téléchargez notre catalogue complet pour découvrir notre portfolio de boissons premium.", catalog_btn_text:"Télécharger le Catalogue",
    gallery_tag:"Notre Monde", gallery_title:"Galerie & <span class='red'>Vitrine</span>", gal1:"Collection Premium", gal2:"Entrepôt", gal3:"Distribution", gal4:"Événements", gal5:"Notre Équipe",
    contact_tag:"Contactez-Nous", contact_title:"Travaillons <span class='red'>Ensemble</span>", contact_sub:"Que vous soyez fournisseur, détaillant ou partenaire — nous sommes prêts.",
    ci_addr_label:"Adresse", ci_addr:"Rue El gharb villa Brêment Mohammedia, Maroc", ci_phone_label:"Téléphone", ci_phone:"+212 609 626 352", ci_email_label:"Email", ci_email:"contact@hertzberger.com", ci_hours_label:"Horaires", ci_hours:"Lun – Ven: 8h00 – 18h00", map_label:"Google Maps — Insérez l'intégration ici",
    cf_c_name:"Nom Complet *", cf_c_email:"Email *", cf_c_phone:"Téléphone", cf_c_subject:"Sujet", cf_select:"Sélectionner", cf_opt1:"Demande d'Importation", cf_opt2:"Partenariat de Distribution", cf_opt3:"Devenir Fournisseur", cf_opt4:"Autre", cf_c_message:"Message *", cf_submit_c:"Envoyer", cf_success_msg:"Message envoyé ! Nous vous contacterons prochainement.",
    footer_desc:"Importation et distribution premium de boissons alcoolisées. Connecter les meilleurs producteurs aux marchés exigeants.", footer_nav:"Navigation", footer_services:"Services", footer_contact:"Contact", footer_copy:"© 2025 HERTZBERGER Luxury Brands. Tous droits réservés. À consommer avec modération.", footer_privacy:"Confidentialité", footer_terms:"Conditions",
  },
  ar: {
    age_title:"التحقق من السن", age_desc:"هذا الموقع مخصص للبالغين في سن القانوني للشرب فقط. يرجى تأكيد عمرك للمتابعة.", age_question:"هل أنت في سن 18 أو أكبر؟", age_yes:"نعم، أنا 18+", age_no:"لا، الخروج", age_legal:"بدخولك فإنك توافق على شروط الاستخدام. HERTZBERGER تروج للشرب المسؤول.",
    modal_title:"اختر كتالوجاً", modal_desc:"اختر المجموعة التي ترغب في تحميلها.",
    cf_name:"الاسم الكامل *", cf_company:"اسم الشركة *", cf_email:"البريد الإلكتروني *", cf_phone:"رقم الهاتف *", cf_country:"الدولة *", cf_country_select:"اختر دولتك", cf_submit:"تحميل الكتالوج", cf_success:"شكراً! سيبدأ تحميل الكتالوج قريباً.", err_required:"هذا الحقل مطلوب", err_email:"أدخل عنوان بريد إلكتروني صحيح",
    nav_home:"الرئيسية", nav_about:"من نحن", nav_services:"الخدمات", nav_suppliers:"الموردون", nav_products:"المنتجات", nav_catalog:"الكتالوج", nav_contact:"اتصل بنا", nav_cta:"اتصل بنا",
    hero_eyebrow:"الاستيراد والتوزيع", hero_subtitle:"استيراد وتوزيع المشروبات المميزة", hero_desc:"شريكك الموثوق في مصادر وتوزيع أجود المشروبات الكحولية في العالم. من الخمور الحصرية إلى المشروبات الروحية المميزة، نحقق التميز في كل سوق.", hero_btn1:"اتصل بنا", hero_btn2:"استعراض الكتالوج", scroll:"مرر للأسفل",
    tick1:"استيراد مميز", tick2:"توزيع عالمي", tick3:"شركاء موثوقون", tick4:"مشروبات روحية فاخرة", tick5:"خمور فاخرة", tick6:"لوجستيات خبيرة",
    about_tag:"عن HERTZBERGER", about_title:"إرث من التوزيع <span class='red'>المميز</span>", about_p1:"تأسست بشغف للمشروبات المميزة، نمت HERTZBERGER لتصبح رائدة موثوقة في صناعة الاستيراد والتوزيع. نحن نجسر الفجوة بين أبرز المنتجين في العالم والأسواق التي تطلب الجودة.", about_p2:"تمتد خبرتنا عبر النبيذ والمشروبات الروحية والشمبانيا والمشروبات الخاصة — كل منها مُختار بعناية ومُعالج بأعلى معايير الاحترافية.", badge_years:"سنوات التميز",
    mission_title:"مهمتنا", mission_text:"أن نكون الشريك الأكثر موثوقية وتميزاً في توزيع المشروبات، نقدم التميز من المصدر إلى الرف.", vision_title:"رؤيتنا", vision_text:"إعادة تعريف معايير استيراد المشروبات المميزة عبر الأسواق العالمية من خلال الثقة والابتكار والخبرة.",
    stat_years:"سنوات الخبرة", stat_partners:"الشركاء", stat_brands:"العلامات المميزة", stat_countries:"الدول",
    services_tag:"ما نقدمه", services_title:"<span class='red'>خدماتنا</span>", services_sub:"حلول شاملة للمشروبات — من التوريد والاستيراد إلى اللوجستيات والتسويق والتسليم.",
    svc1_title:"الاستيراد", svc1_desc:"نتولى عملية الاستيراد الكاملة — من توريد المنتجات المميزة إلى التخليص الجمركي والامتثال.", svc2_title:"التوزيع", svc2_desc:"توزيع موثوق وفعال عبر جميع القنوات — الفنادق والمطاعم وتجار التجزئة — بمعايير تسليم مضمونة.", svc3_title:"اللوجستيات", svc3_desc:"مستودعات متطورة وإدارة المخزون وحلول سلسلة التبريد والتتبع الفوري.", svc4_title:"دعم التسويق", svc4_desc:"تفعيل العلامة التجارية الاستراتيجي والفعاليات الترويجية وإدارة الحملات.", svc5_title:"إدارة الموردين", svc5_desc:"بناء علاقات طويلة الأمد مع الموردين الدوليين المميزين وإدارة العقود والاتفاقيات الحصرية.",
    suppliers_tag:"شركاؤنا", suppliers_title:"موردون <span class='red'>موثوقون</span>", suppliers_sub:"نتشارك حصرياً مع منتجين من الدرجة العالمية يشاركوننا التزامنا بالجودة.",
    products_tag:"محفظتنا", products_title:"منتجات <span class='red'>مميزة</span>", products_sub:"تشكيلة مختارة من أجود النبيذ والمشروبات الروحية والشمبانيا في العالم.", pf_all:"الكل", pf_wine:"نبيذ", pf_spirits:"مشروبات روحية", pf_champagne:"شمبانيا", pf_beer:"بيرة", view_details:"عرض التفاصيل",
    catalog_tag:"كتالوجنا", catalog_title:"استكشف <span class='red'>مجموعتنا الكاملة</span>", catalog_desc:"حمّل كتالوج منتجاتنا الشامل لاكتشاف محفظتنا الكاملة من المشروبات المميزة.", catalog_btn_text:"تحميل الكتالوج",
    gallery_tag:"عالمنا", gallery_title:"المعرض و<span class='red'>الواجهة</span>", gal1:"المجموعة المميزة", gal2:"المستودع", gal3:"التوزيع", gal4:"الفعاليات", gal5:"فريقنا",
    contact_tag:"تواصل معنا", contact_title:"لنعمل <span class='red'>معاً</span>", contact_sub:"سواء كنت موردًا أو تاجر تجزئة أو شريكًا — نحن مستعدون لبناء علاقة.",
    ci_addr_label:"العنوان", ci_addr:"شارع الغرب، فيلا بريمانت، المحمدية، المغرب", ci_phone_label:"الهاتف", ci_phone:"+212 609 626 352", ci_email_label:"البريد الإلكتروني", ci_email:"contact@hertzberger.com", ci_hours_label:"ساعات العمل", ci_hours:"الاثنين – الجمعة: 8:00 ص – 6:00 م", map_label:"خريطة جوجل — أدرج التضمين هنا",
    cf_c_name:"الاسم الكامل *", cf_c_email:"البريد الإلكتروني *", cf_c_phone:"الهاتف", cf_c_subject:"الموضوع", cf_select:"اختر الموضوع", cf_opt1:"استفسار الاستيراد", cf_opt2:"شراكة التوزيع", cf_opt3:"كن موردًا", cf_opt4:"أخرى", cf_c_message:"الرسالة *", cf_submit_c:"إرسال الرسالة", cf_success_msg:"تم إرسال الرسالة! سنتواصل معك قريباً.",
    footer_desc:"استيراد وتوزيع مميز للمشروبات الكحولية. ربط منتجي الدرجة العالمية بالأسواق المتطلبة.", footer_nav:"التنقل", footer_services:"الخدمات", footer_contact:"التواصل", footer_copy:"© 2025 HERTZBERGER Luxury Brands. جميع الحقوق محفوظة. يُرجى الشرب بمسؤولية.", footer_privacy:"سياسة الخصوصية", footer_terms:"شروط الاستخدام",
  }
};

/* Updated company positioning and catalogue access text. */
Object.assign(T.en, {
  modal_title:'Request Our Catalogues', modal_desc:'Please share your details to access our catalogues.', cf_submit:'Access Catalogues', catalog_access:'Thank you. Your details have been sent successfully.', catalog_spirits:'Spirits', catalog_wines:'Wines', catalog_download:'Download PDF', catalog_soon:'Coming soon',
  hero_desc:'Your trusted partner for importing and distributing the world\'s finest alcoholic beverages across Morocco. We bring exceptional international brands to the Moroccan market.',
  about_p1:'Founded with a passion for premium beverages, HERTZBERGER is a trusted Moroccan importer and distributor. We connect renowned international producers with the Moroccan market, bringing exceptional brands into the Kingdom of Morocco.',
  about_p2:'Our expertise spans wines, spirits, champagnes, and specialty beverages — each carefully sourced from around the world, imported into Morocco, and handled with the highest standards of professionalism and care.',
  svc1_desc:'We manage the complete importation process — sourcing premium products internationally, customs clearance, compliance, and bringing them into Morocco.',
  cookie_text:'We use essential cookies to remember your preferences. You can learn more in our Privacy Policy.', cookie_more:'Privacy Policy', cookie_decline:'Reject', cookie_accept:'Accept', privacy_consent:'I agree that my details may be used to respond to my request.'
});
Object.assign(T.fr, {
  modal_title:'Demander Nos Catalogues', modal_desc:'Veuillez partager vos coordonnées pour accéder à nos catalogues.', cf_submit:'Accéder aux Catalogues', catalog_access:'Merci. Vos informations ont été envoyées avec succès.', catalog_spirits:'Spiritueux', catalog_wines:'Vins', catalog_download:'Télécharger le PDF', catalog_soon:'Bientôt disponible',
  hero_desc:'Votre partenaire de confiance pour l’importation et la distribution des meilleures boissons alcoolisées au Maroc. Nous apportons des marques internationales d’exception au marché marocain.',
  about_p1:'Fondée avec une passion pour les boissons premium, HERTZBERGER est un importateur et distributeur marocain de confiance. Nous relions des producteurs internationaux reconnus au marché marocain et apportons des marques d’exception au Royaume du Maroc.',
  about_p2:'Notre expertise couvre les vins, spiritueux, champagnes et boissons spéciales — soigneusement sélectionnés à travers le monde, importés au Maroc et gérés avec les plus hauts standards de professionnalisme.',
  svc1_desc:'Nous gérons l’importation complète — de l’approvisionnement international au dédouanement, à la conformité et à l’arrivée des produits au Maroc.',
  cookie_text:'Nous utilisons des cookies essentiels pour mémoriser vos préférences. Consultez notre Politique de confidentialité.', cookie_more:'Confidentialité', cookie_decline:'Refuser', cookie_accept:'Accepter', privacy_consent:'J’accepte que mes données soient utilisées pour répondre à ma demande.'
});
Object.assign(T.ar, {
  modal_title:'اطلب كتالوجاتنا', modal_desc:'يرجى مشاركة بياناتك للوصول إلى كتالوجاتنا.', cf_submit:'الوصول إلى الكتالوجات', catalog_access:'شكراً. تم إرسال بياناتك بنجاح.', catalog_spirits:'المشروبات الروحية', catalog_wines:'النبيذ', catalog_download:'تحميل PDF', catalog_soon:'قريباً',
  hero_desc:'شريكك الموثوق لاستيراد وتوزيع أجود المشروبات الكحولية في المغرب. نوفر علامات عالمية استثنائية للسوق المغربي.',
  about_p1:'تأسست HERTZBERGER بشغف للمشروبات المميزة، وهي مستورد وموزع مغربي موثوق. نربط المنتجين الدوليين المرموقين بالسوق المغربي ونقدم علامات استثنائية إلى المملكة المغربية.',
  about_p2:'تمتد خبرتنا عبر النبيذ والمشروبات الروحية والشمبانيا والمشروبات الخاصة — يتم اختيارها بعناية من أنحاء العالم واستيرادها إلى المغرب بأعلى معايير الاحترافية والعناية.',
  svc1_desc:'نتولى عملية الاستيراد الكاملة — من التوريد الدولي للمنتجات المميزة إلى التخليص الجمركي والامتثال وإدخالها إلى المغرب.',
  cookie_text:'نستخدم ملفات تعريف الارتباط الضرورية لتذكر تفضيلاتك. يمكنك معرفة المزيد في سياسة الخصوصية.', cookie_more:'سياسة الخصوصية', cookie_decline:'رفض', cookie_accept:'قبول', privacy_consent:'أوافق على استخدام بياناتي للرد على طلبي.'
});

const LANG_FLAGS  = { en:'🇬🇧', fr:'🇫🇷', ar:'🇲🇦' };
const LANG_LABELS = { en:'EN',   fr:'FR',   ar:'AR'  };
let currentLang = 'en';

function detectLang() {
  const saved = localStorage.getItem('hertzberger_lang');
  if (saved && T[saved]) return saved;
  const browser = (navigator.language || 'en').split('-')[0];
  return T[browser] ? browser : 'en';
}

function applyLang(lang) {
  const t = T[lang];
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });
  const flagEl = document.getElementById('langFlag');
  const codeEl = document.getElementById('langCode');
  if (flagEl) flagEl.textContent = LANG_FLAGS[lang];
  if (codeEl) codeEl.textContent = LANG_LABELS[lang];
  document.querySelectorAll('.lang-opt').forEach(opt => opt.classList.toggle('active', opt.dataset.lang === lang));
  document.querySelectorAll('[data-mlang]').forEach(btn => btn.classList.toggle('active', btn.dataset.mlang === lang));
}

function setLang(lang) {
  if (!T[lang]) return;
  currentLang = lang;
  localStorage.setItem('hertzberger_lang', lang);
  applyLang(lang);
  closeLangDropdown();
}

//LOADER
function initLoader() {
  const loader = document.getElementById('loader');
  const done = () => {
    loader.classList.add('hidden');
    document.body.classList.remove('no-scroll');
    document.getElementById('heroBg')?.classList.add('zoomed');
  };
  window.addEventListener('load', () => setTimeout(done, 2800));
  setTimeout(done, 4500); // hard fallback
}

//gate age
function initAgeGate() {
  const gate = document.getElementById('age-gate');
  if (!gate) return;
  if (!sessionStorage.getItem('hz_age_ok')) gate.classList.add('show');
  document.getElementById('ageYes').addEventListener('click', () => {
    sessionStorage.setItem('hz_age_ok', '1');
    gate.classList.remove('show');
  });
  document.getElementById('ageNo').addEventListener('click', () => { window.location.href = 'about:blank'; });
}

function initCookieConsent() {
  const banner = document.getElementById('cookieBanner');
  if (!banner || localStorage.getItem('hz_cookie_consent')) return;
  banner.hidden = false;
  const save = value => { localStorage.setItem('hz_cookie_consent', value); banner.hidden = true; };
  document.getElementById('cookieAccept')?.addEventListener('click', () => save('accepted'));
  document.getElementById('cookieDecline')?.addEventListener('click', () => save('declined'));
}

//navbar
function initNavbar() {
  const nav = document.getElementById('navbar');
  const scrollTopBtn = document.getElementById('scrollTop');
  const update = () => {
    const scrolled = window.scrollY > 60;
    nav.classList.toggle('transparent', !scrolled);
    nav.classList.toggle('solid', scrolled);
    scrollTopBtn?.classList.toggle('show', window.scrollY > 400);
    updateActiveLink();
  };
  window.addEventListener('scroll', update, { passive: true });
  update();
}

function updateActiveLink() {
  const sections = ['home','about','services','suppliers','products','catalog','gallery','contact'];
  const y = window.scrollY + 120;
  sections.forEach(id => {
    const sec = document.getElementById(id);
    if (!sec) return;
    const top = sec.offsetTop, bot = top + sec.offsetHeight;
    document.querySelectorAll(`.nav-link[href="#${id}"]`).forEach(a => a.classList.toggle('active', y >= top && y < bot));
  });
}

//nav bar mobile
function initMobileNav() {
  const btn = document.getElementById('hamburger');
  const nav = document.getElementById('mobileNav');
  if (!btn || !nav) return;
  btn.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    btn.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', open);
    document.body.classList.toggle('no-scroll', open);
  });
  nav.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      e.stopImmediatePropagation();
      const target = link.getAttribute('href');
      closeMobileNav();
      requestAnimationFrame(() => smoothScroll(target));
    });
  });
}
function closeMobileNav() {
  document.getElementById('mobileNav')?.classList.remove('open');
  const btn = document.getElementById('hamburger');
  btn?.classList.remove('open');
  btn?.setAttribute('aria-expanded','false');
  document.body.classList.remove('no-scroll');
}

//langue dropdown
function initLangSelector() {
  const sel = document.getElementById('langSelector');
  const btn = document.getElementById('langBtn');
  if (!sel || !btn) return;
  btn.addEventListener('click', e => { e.stopPropagation(); const open = sel.classList.toggle('open'); btn.setAttribute('aria-expanded', open); });
  document.querySelectorAll('.lang-opt').forEach(opt => {
    opt.addEventListener('click', () => setLang(opt.dataset.lang));
    opt.addEventListener('keydown', e => { if(e.key==='Enter'||e.key===' ') setLang(opt.dataset.lang); });
  });
  document.addEventListener('click', closeLangDropdown);
}
function closeLangDropdown() {
  document.getElementById('langSelector')?.classList.remove('open');
  document.getElementById('langBtn')?.setAttribute('aria-expanded','false');
}

//smooth scroll
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 88;
      window.scrollTo({ top: target.offsetTop - navH, behavior:'smooth' });
    });
  });
  document.getElementById('scrollTop')?.addEventListener('click', () => window.scrollTo({ top:0, behavior:'smooth' }));
}
function smoothScroll(sel) {
  const t = document.querySelector(sel);
  if (!t) return;
  const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 88;
  window.scrollTo({ top: t.offsetTop - navH, behavior:'smooth' });
}

//reveal
function initReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold:0.12, rootMargin:'0px 0px -40px 0px' });
  document.querySelectorAll('.reveal,.reveal-left,.reveal-right').forEach(el => obs.observe(el));
}

//counter
function initCounters() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target, target = +el.dataset.target, dur = 2000;
      let start;
      (function step(ts){
        if(!start) start = ts;
        const p = Math.min((ts-start)/dur, 1);
        const ease = 1 - Math.pow(1-p, 3);
        el.textContent = Math.floor(ease * target);
        if (p < 1) requestAnimationFrame(step);
        else el.textContent = target;
      })(performance.now());
      obs.unobserve(el);
    });
  }, { threshold:0.5 });
  document.querySelectorAll('.stat-num[data-target]').forEach(el => obs.observe(el));
}

//products filter
function initProductFilters() {
  const btns = document.querySelectorAll('.pf-btn');
  const cards = document.querySelectorAll('.product-card');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const f = btn.dataset.filter;
      cards.forEach(c => c.classList.toggle('hidden', f !== 'all' && c.dataset.category !== f));
    });
  });
}

//catalog modal
function initCatalogModal() {
  const modal    = document.getElementById('catalog-modal');
  const openBtn  = document.getElementById('openCatalogModal');
  const closeBtn = document.getElementById('modalClose');
  const overlay  = document.getElementById('modalOverlay');
  const form = document.getElementById('catalogForm');
  const access = document.getElementById('catalogAccess');
  if (!modal) return;

  const open  = () => { modal.classList.add('show'); document.body.classList.add('no-scroll'); };
  const close = () => { modal.classList.remove('show'); document.body.classList.remove('no-scroll'); };

  openBtn?.addEventListener('click', open);
  closeBtn?.addEventListener('click', close);
  overlay?.addEventListener('click', close);
  document.addEventListener('keydown', e => { if(e.key==='Escape') close(); });
  form?.addEventListener('submit', async e => {
    e.preventDefault();
    if (!form.reportValidity()) return;
    const button = form.querySelector('[type="submit"]');
    const original = button.innerHTML;
    button.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i>';
    button.disabled = true;
    try {
      const response = await fetch('https://formsubmit.co/ajax/hertzberger.contact@gmail.com', {
        method: 'POST', headers: { Accept: 'application/json' }, body: new FormData(form)
      });
      if (!response.ok) throw new Error('Catalog request failed');
      form.hidden = true;
      access.hidden = false;
    } catch (error) {
      alert('Unable to send your request right now. Please try again later.');
    } finally {
      button.innerHTML = original;
      button.disabled = false;
    }
  });

}

//contact form
function initContactForm() {
  const form = document.getElementById('contactForm');
  const suc  = document.getElementById('cfSuccess');
  if (!form) return;
  form.addEventListener('submit', async e => {
    e.preventDefault();
    if (!form.reportValidity()) return;
    const btn = form.querySelector('[type="submit"]');
    const orig = btn.innerHTML;
    btn.innerHTML='<i class="fa-solid fa-spinner fa-spin"></i>'; btn.disabled=true;
    try {
      const response = await fetch('https://formsubmit.co/ajax/hertzberger.contact@gmail.com', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form)
      });
      if (!response.ok) throw new Error('Form submission failed');
      suc?.classList.add('show');
      form.reset();
      setTimeout(()=>suc?.classList.remove('show'), 5000);
    } catch (error) {
      alert('Unable to send your message right now. Please try again later.');
    } finally {
      btn.innerHTML=orig; btn.disabled=false;
    }
  });
}



//init
document.addEventListener('DOMContentLoaded', () => {
  currentLang = detectLang();
  applyLang(currentLang);
  initLoader();
  initAgeGate();
  initCookieConsent();
  initNavbar();
  initMobileNav();
  initLangSelector();
  initSmoothScroll();
  initReveal();
  initCounters();
  initProductFilters();
  initCatalogModal();
  initContactForm();
});


const premiumImages = [

    "media/vyrovcollection.jpg",
    "media/vyrovC.jpg",
    "media/vyrovC2.jpg",
    "media/whiteCollection.jpg",
    "media/blackCollection.jpg",
    "media/colorCollection.jpg",


];

const premiumSlider = document.getElementById("premiumSlider");

let currentImage = 0;

setInterval(() => {

    premiumSlider.style.opacity = 0;

    setTimeout(() => {

        currentImage = (currentImage + 1) % premiumImages.length;

        premiumSlider.src = premiumImages[currentImage];

        premiumSlider.style.opacity = 1;

    }, 400);

}, 4000);

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

premiumSlider.addEventListener("click", () => {

    lightbox.classList.add("active");

    lightboxImg.src = premiumSlider.src;

});

document.querySelector(".close").addEventListener("click", () => {

    lightbox.classList.remove("active");

});

lightbox.addEventListener("click", (e) => {

    if(e.target === lightbox){

        lightbox.classList.remove("active");

    }

});
