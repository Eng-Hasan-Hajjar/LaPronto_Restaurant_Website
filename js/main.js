'use strict';

/* La Pronto — static restaurant website.
   The menu prices are transcribed from the supplied printed menu photos.
   IMPORTANT: confirm current prices, daily clock times and WhatsApp eligibility before publishing. */

const CONTACT_NUMBER = '+905364561322';
const translations = {
  tr: {
    cartLabel:'Sepet',viewCart:'Sepeti Gör',addToCart:'Sepete ekle',removeItem:'Ürünü kaldır',cartTitle:'Sipariş sepetiniz',cartSubtitle:'Beğendiklerini seç, WhatsApp üzerinden siparişini ilet.',cartEmpty:'Sepetin henüz boş.',cartEmptyNote:'Menüden sevdiğin ürünleri ekleyebilirsin.',continueShopping:'Menüye Dön',cartTotal:'Toplam',cartItems:'ürün',cartSingle:'Tek sipariş',cartClear:'Sepeti Temizle',cartName:'Adınız (isteğe bağlı)',cartNamePlaceholder:'Adınızı yazın',cartNotes:'Sipariş notu (isteğe bağlı)',cartNotesPlaceholder:'Özel istekleriniz...',sendWhatsapp:'WhatsApp’tan Sipariş Gönder',whatsappNote:'WhatsApp açılır ve sipariş mesajı hazırlanır. Göndermek için WhatsApp’ta Gönder’e dokunun. Fiyatlar ve sipariş restoran tarafından onaylanır.',cartConfirmClear:'Sepetinizdeki tüm ürünler silinsin mi?',orderHello:'Merhaba La Pronto! Sipariş vermek istiyorum:',orderName:'İsim',orderNotes:'Not',orderTotal:'Toplam',orderPriceDisclaimer:'Fiyatlar ve sipariş müsaitliği restoran tarafından onaylanacaktır.',qtyIncrease:'Adedi artır',qtyDecrease:'Adedi azalt',cartAdded:'Sepete eklendi',orderItems:'Sipariş ürünleri',
    skip:'İçeriğe geç', topCall:'Sipariş için arayın', navHome:'Ana Sayfa', navPopular:'Favoriler',navMenu:'Menü',navAbout:'Hakkımızda',navContact:'İletişim', callNow:'Hemen Ara',
    heroEyebrow:"İSTANBUL'UN LEZZET DURAĞI",heroLine1:'Lezzet her',heroLine2:'ısırıkta.',heroDescription:'Çıtır tavuklar, bol malzemeli burgerler ve doyurucu tabaklar. Canın ne çekiyorsa burada!',exploreMenu:'Menüyü Keşfet',orderCall:'Telefonla Sipariş',heroFootnote:"Karagümrük'ün kalbinde, tam istediğin lezzet.",
    favoritesEyebrow:'BİZDEN SEÇMELER',favoritesHeading1:'Lezzeti ',favoritesHeading2:'keşfet.',favoritesIntro:'İlk bakışta iştah açan, ilk lokmada mutlu eden seçenekler.',fullMenu:'Tüm menüyü gör',favoriteTag:'Öne çıkan',from:'Başlayan',featuredPortion:'Tabak',featuredPieces:'4 parça + garnitür',featuredBurger:'Burger',
    statementKicker:'CANIN ÇEKTİ Mİ?',statementLine1:'Çıtır çıtır.',statementLine2:'Tam kıvamında.',
    menuEyebrow:'LEZZET HARİTASI',menuHeading1:'Bütün ',menuHeading2:'menümüz.',menuIntro:'Lezzetleri seç, sepetine ekle ve WhatsApp üzerinden siparişini ilet.',categories:'KATEGORİLER',needHelp:'Karar veremedin mi?',giveCall:'Bizi hemen ara.',searchPlaceholder:'Yemek ara...',searchLabel:'Menüde ara',results:'ürün',emptyHeading:'Sonuç bulunamadı',emptyText:'Başka bir yemek adı deneyin.',pricesNote:'Fiyatlar gönderilen basılı menüden alınmıştır. Sipariş vermeden önce güncel fiyatı telefonla doğrulayın.',portion:'Porsiyon',sandwich:'Sandviç',single:'Fiyat',categorySub:'seçenek',
    aboutEyebrow:'BİZİ TANIYIN',aboutHeading1:'Güzel yemek.',aboutHeading2:'Güzel anlar.',aboutBody:"La Pronto'da burgerlerden çıtır tavuğa, bol soslu tabaklardan sandviçlere kadar farklı lezzetler bir arada. Fatih Karagümrük'teki adresimizde menümüzü keşfedin.",chipBurger:'Burger çeşitleri',chipBroasted:'Broasted tavuk',chipSandwich:'Sandviçler',findUs:'Bizi burada bul',
    postersEyebrow:'ORİJİNAL MENÜ',postersHeading1:'Basılı ',postersHeading2:'menümüz.',postersText:'Menünün orijinal görsellerini de inceleyebilirsiniz. Büyütmek için görsele dokunun.',
    contactEyebrow:'BİZİ ZİYARET ET',contactHeading1:'Lezzetin ',contactHeading2:'adresine gel.',contactLede:"La Pronto'ya uğra, sevdiğin lezzeti seç!",addressLabel:'Adres',phoneLabel:'Telefon',openingLabel:'Çalışma saatleri ve tatil günleri',hoursPending:'Salı – Pazar: Açık • Pazartesi: Kapalı. Günlük çalışma saatleri için lütfen arayın.',directions:'Yol Tarifi Al',openMaps:'HARİTADA AÇ',footerText:"İyi yemek, iyi hisler. Karagümrük'te görüşürüz.",footerLocation:'Karagümrük · Fatih · İstanbul',backTop:'Yukarı dön'
  },
  ar: {
    cartLabel:'السلة',viewCart:'عرض السلة',addToCart:'أضف للسلة',removeItem:'إزالة المنتج',cartTitle:'سلة طلباتك',cartSubtitle:'اختر وجباتك وأرسل طلبك إلى المطعم عبر واتساب.',cartEmpty:'السلة فارغة حاليًا.',cartEmptyNote:'يمكنك إضافة وجباتك المفضلة من قائمة الطعام.',continueShopping:'متابعة التسوق',cartTotal:'المجموع',cartItems:'منتج',cartSingle:'طلب واحد',cartClear:'إفراغ السلة',cartName:'الاسم (اختياري)',cartNamePlaceholder:'اكتب اسمك',cartNotes:'ملاحظات الطلب (اختياري)',cartNotesPlaceholder:'أي طلبات خاصة...',sendWhatsapp:'إرسال الطلب عبر واتساب',whatsappNote:'سيفتح واتساب مع رسالة طلب جاهزة؛ اضغط إرسال داخل واتساب لإتمام الإرسال. الأسعار وتوفّر الوجبات وتأكيد الطلب لدى المطعم.',cartConfirmClear:'هل تريد حذف جميع المنتجات من السلة؟',orderHello:'مرحبًا La Pronto! أود طلب ما يلي:',orderName:'الاسم',orderNotes:'ملاحظات',orderTotal:'المجموع',orderPriceDisclaimer:'الأسعار وتوفر الأصناف وتأكيد الطلب خاضعة لتأكيد المطعم.',qtyIncrease:'زيادة الكمية',qtyDecrease:'تقليل الكمية',cartAdded:'تمت الإضافة للسلة',orderItems:'منتجات الطلب',
    skip:'انتقل إلى المحتوى',topCall:'للطلب اتصل بنا',navHome:'الرئيسية',navPopular:'أطباق مميزة',navMenu:'قائمة الطعام',navAbout:'من نحن',navContact:'تواصل معنا',callNow:'اتصل الآن',
    heroEyebrow:'نكهات مميزة في قلب إسطنبول',heroLine1:'الطعم في',heroLine2:'كل لقمة.',heroDescription:'دجاج مقرمش، برغر شهي، وأطباق غنية بالنكهات. كل ما تشتهيه في مكان واحد!',exploreMenu:'استكشف القائمة',orderCall:'اطلب عبر الهاتف',heroFootnote:'في قلب كاراغومروك، إسطنبول.',
    favoritesEyebrow:'اختيارات مميزة',favoritesHeading1:'اكتشف ',favoritesHeading2:'النكهة.',favoritesIntro:'أطباق تشهي العين من أول نظرة والطعم من أول لقمة.',fullMenu:'شاهد القائمة الكاملة',favoriteTag:'طبق مميز',from:'ابتداءً من',featuredPortion:'وجبة',featuredPieces:'4 قطع مع الإضافات',featuredBurger:'برغر',
    statementKicker:'جائع؟',statementLine1:'قرمشة رائعة.',statementLine2:'وطعم لا يُقاوم.',
    menuEyebrow:'عالم من النكهات',menuHeading1:'قائمة ',menuHeading2:'الطعام.',menuIntro:'اختر وجباتك، أضفها إلى السلة، ثم أرسل الطلب عبر واتساب.',categories:'الأقسام',needHelp:'محتار ماذا تختار؟',giveCall:'اتصل بنا الآن.',searchPlaceholder:'ابحث عن وجبة...',searchLabel:'ابحث في القائمة',results:'صنف',emptyHeading:'لا توجد نتائج',emptyText:'جرّب البحث عن اسم وجبة أخرى.',pricesNote:'الأسعار من صور القائمة المرسلة. يُرجى تأكيد السعر الحالي عبر الهاتف قبل الطلب.',portion:'وجبة',sandwich:'سندويش',single:'السعر',categorySub:'اختيار',
    aboutEyebrow:'تعرّف علينا',aboutHeading1:'أكل طيب.',aboutHeading2:'وأوقات أجمل.',aboutBody:'في La Pronto تجد البرغر والدجاج المقرمش والأطباق الغنية بالصوصات والسندويشات الشهية. اكتشف قائمتنا في كاراغومروك بمنطقة الفاتح في إسطنبول.',chipBurger:'أنواع البرغر',chipBroasted:'دجاج بروستد',chipSandwich:'السندويشات',findUs:'اعرف موقعنا',
    postersEyebrow:'القائمة الأصلية',postersHeading1:'صور ',postersHeading2:'المنيو.',postersText:'يمكنك مشاهدة صور قائمة الطعام الأصلية. اضغط على أي صورة لتكبيرها.',
    contactEyebrow:'تفضل بزيارتنا',contactHeading1:'عنوان ',contactHeading2:'النكهة.',contactLede:'زورنا في La Pronto واختر وجبتك المفضلة!',addressLabel:'العنوان',phoneLabel:'رقم الهاتف',openingLabel:'ساعات العمل وأيام العطلة',hoursPending:'من الثلاثاء إلى الأحد: مفتوح • الاثنين: عطلة. للاستفسار عن ساعات العمل اليومية يرجى الاتصال.',directions:'الاتجاهات على الخريطة',openMaps:'افتح الخريطة',footerText:'أكل طيب، ومزاج أطيب. نراك في كاراغومروك.',footerLocation:'كاراغومروك · الفاتح · إسطنبول',backTop:'العودة للأعلى'
  },
  en: {
    cartLabel:'Cart',viewCart:'View cart',addToCart:'Add to cart',removeItem:'Remove item',cartTitle:'Your order cart',cartSubtitle:'Pick your favorites and send your order via WhatsApp.',cartEmpty:'Your cart is empty.',cartEmptyNote:'Add a few favorites from the menu to get started.',continueShopping:'Back to menu',cartTotal:'Total',cartItems:'items',cartSingle:'One order',cartClear:'Clear cart',cartName:'Your name (optional)',cartNamePlaceholder:'Enter your name',cartNotes:'Order notes (optional)',cartNotesPlaceholder:'Any special requests...',sendWhatsapp:'Send Order via WhatsApp',whatsappNote:'WhatsApp will open with your prepared order. Tap Send in WhatsApp to send it. Prices, availability and the order are subject to restaurant confirmation.',cartConfirmClear:'Remove every item from your cart?',orderHello:'Hello La Pronto! I would like to order:',orderName:'Name',orderNotes:'Notes',orderTotal:'Total',orderPriceDisclaimer:'Prices, item availability and the order are subject to restaurant confirmation.',qtyIncrease:'Increase quantity',qtyDecrease:'Decrease quantity',cartAdded:'Added to cart',orderItems:'Order items',
    skip:'Skip to content',topCall:'Call to order',navHome:'Home',navPopular:'Favorites',navMenu:'Menu',navAbout:'About Us',navContact:'Contact',callNow:'Call Now',
    heroEyebrow:'YOUR FLAVOR STOP IN ISTANBUL',heroLine1:'Flavor in',heroLine2:'every bite.',heroDescription:'Crispy chicken, loaded burgers, and satisfying plates. Whatever you crave, it’s on the menu!',exploreMenu:'Explore the Menu',orderCall:'Order by Phone',heroFootnote:'Right in the heart of Karagümrük, Istanbul.',
    favoritesEyebrow:'HANDPICKED FAVORITES',favoritesHeading1:'Meet your ',favoritesHeading2:'cravings.',favoritesIntro:'Mouthwatering picks made to catch your eye and tempt your tastebuds.',fullMenu:'See the full menu',favoriteTag:'Featured',from:'From',featuredPortion:'Plate',featuredPieces:'4 pieces + sides',featuredBurger:'Burger',
    statementKicker:'FEELING HUNGRY?',statementLine1:'Extra crispy.',statementLine2:'Just right.',
    menuEyebrow:'A WORLD OF FLAVOR',menuHeading1:'Explore our ',menuHeading2:'menu.',menuIntro:'Choose your favorites, add to your cart, and send your order through WhatsApp.',categories:'CATEGORIES',needHelp:'Can’t decide?',giveCall:'Give us a call.',searchPlaceholder:'Search dishes...',searchLabel:'Search the menu',results:'items',emptyHeading:'No results found',emptyText:'Try another dish name.',pricesNote:'Prices were transcribed from the supplied printed menu images. Please confirm current prices by phone before ordering.',portion:'Plate',sandwich:'Sandwich',single:'Price',categorySub:'choices',
    aboutEyebrow:'GET TO KNOW US',aboutHeading1:'Good food.',aboutHeading2:'Good moments.',aboutBody:'From burgers and crispy chicken to saucy plates and satisfying sandwiches, La Pronto has something for every craving. Explore our menu at our Fatih Karagümrük location.',chipBurger:'Burgers',chipBroasted:'Broasted chicken',chipSandwich:'Sandwiches',findUs:'Find our location',
    postersEyebrow:'ORIGINAL MENU',postersHeading1:'The printed ',postersHeading2:'menu.',postersText:'Want to see the original menu sheets? Tap either image to zoom in.',
    contactEyebrow:'COME SAY HELLO',contactHeading1:'Find your ',contactHeading2:'happy place.',contactLede:'Visit La Pronto and pick your favorite bite!',addressLabel:'Address',phoneLabel:'Phone',openingLabel:'Opening hours & closing days',hoursPending:'Tuesday–Sunday: Open • Monday: Closed. Please call to confirm daily opening hours.',directions:'Get Directions',openMaps:'OPEN IN MAPS',footerText:'Good food, good mood. See you in Karagümrük.',footerLocation:'Karagümrük · Fatih · Istanbul',backTop:'Back to top'
  }
};

const categories = [
  {id:'all',icon:'✳',name:{tr:'Tüm Ürünler',ar:'كل الأصناف',en:'All Items'}},
  {id:'broasted',icon:'◉',name:{tr:'Broasted',ar:'البروستد',en:'Broasted Chicken'}},
  {id:'fastfood',icon:'✺',name:{tr:'Fast Food',ar:'وجبات سريعة',en:'Fast Food'}},
  {id:'burgers',icon:'◈',name:{tr:'Burger',ar:'البرغر',en:'Burgers'}},
  {id:'sucuk',icon:'◇',name:{tr:'Sucuk',ar:'السجق',en:'Sucuk'}},
  {id:'fries',icon:'▤',name:{tr:'Patates',ar:'البطاطا',en:'Fries'}},
  {id:'salads',icon:'❋',name:{tr:'Salatalar',ar:'السلطات',en:'Salads'}}
];

// p = plate/portion price in Turkish lira; s = sandwich price; price = single listed price.
const menu = [
  {id:'broast8',category:'broasted',price:740,n:{tr:'Broasted Tavuk — 8 Adet',ar:'فروج بروستد 8 قطع',en:'Broasted Chicken — 8 Pieces'},notes:{tr:'Patates, mayonez ve turşu ile',ar:'بطاطا + مايونيز + مخلل',en:'With fries, mayonnaise and pickles'}},
  {id:'broast4',category:'broasted',price:370,n:{tr:'Broasted Tavuk — 4 Adet',ar:'وجبة بروستد 4 قطع',en:'Broasted Chicken — 4 Pieces'},notes:{tr:'Patates, mayonez ve turşu ile',ar:'بطاطا + مايونيز + مخلل',en:'With fries, mayonnaise and pickles'}},
  {id:'drumstick4',category:'broasted',price:325,n:{tr:'Baget — 4 Adet',ar:'وجبة دبابيس 4 قطع',en:'Chicken Drumsticks — 4 Pieces'}},
  {id:'krispy',category:'fastfood',p:345,s:200,n:{tr:'Krispy',ar:'كريسبي',en:'Crispy Chicken'}},
  {id:'escalope',category:'fastfood',p:345,s:200,n:{tr:'Escalope',ar:'سكالوب',en:'Escalope'}},
  {id:'milano',category:'fastfood',p:370,s:215,n:{tr:'Milano',ar:'ميلانو',en:'Milano'}},
  {id:'fransesko',category:'fastfood',p:370,s:215,n:{tr:'Fransesko',ar:'فرانسيسكو',en:'Francesco'}},
  {id:'paris',category:'fastfood',p:370,s:215,n:{tr:'Paris',ar:'باريس',en:'Paris'}},
  {id:'baharatli',category:'fastfood',p:345,s:200,n:{tr:'Baharatlı Tavuk',ar:'سبايسي',en:'Spicy Chicken'}},
  {id:'fabita',category:'fastfood',p:370,s:215,n:{tr:'Fabita',ar:'فاهيتا',en:'Fajita'}},
  {id:'meksikano',category:'fastfood',p:370,s:215,n:{tr:'Meksikano',ar:'مكسيكانو',en:'Mexicano'}},
  {id:'tavuksis',category:'fastfood',p:345,s:200,n:{tr:'Tavuk Şiş',ar:'شيش طاووق',en:'Chicken Shish'}},
  {id:'tavuksisozel',category:'fastfood',p:370,s:215,n:{tr:'Tavuk Şiş Özel',ar:'شيش طاووق سبيشال',en:'Special Chicken Shish'}},
  {id:'supersubrim',category:'fastfood',p:370,s:215,n:{tr:'Süper Subrim',ar:'سوبر سوبريم',en:'Super Supreme'}},
  {id:'zinger',category:'fastfood',p:370,s:215,n:{tr:'Zinger (Cheddar ve Salam)',ar:'زنجر مع تشيدر وسلامي',en:'Zinger (Cheddar & Salami)'}},
  {id:'twister',category:'fastfood',p:370,s:215,n:{tr:'Twister (Cheddar ve Salam)',ar:'تويستر مع تشيدر وسلامي',en:'Twister (Cheddar & Salami)'}},
  {id:'cordonbleu',category:'fastfood',p:425,n:{tr:'Cordon Bleu',ar:'كوردون بلو',en:'Cordon Bleu'}},
  {id:'grill',category:'fastfood',p:370,n:{tr:'Tavuk Izgara Biftek',ar:'شرحات دجاج بالحمض والثوم',en:'Grilled Chicken Steak'}},
  {id:'grillextra',category:'fastfood',p:425,n:{tr:'Tavuk Izgara Biftek Extra',ar:'شرحات دجاج بشاميل وجبنة',en:'Grilled Chicken Steak Extra'}},
  {id:'beefburger',category:'burgers',price:250,n:{tr:'Et Burger',ar:'برغر لحم',en:'Beef Burger'}},
  {id:'beefcheese',category:'burgers',price:270,n:{tr:'Et Burger Peynirli',ar:'تشيز برغر لحم',en:'Cheeseburger'}},
  {id:'beefegg',category:'burgers',price:290,n:{tr:'Et Burger (Yumurta + Peynir)',ar:'برغر لحم (بيض + جبنة)',en:'Beef Burger (Egg + Cheese)'}},
  {id:'chickenburger',category:'burgers',price:200,n:{tr:'Tavuk Burger',ar:'برغر دجاج',en:'Chicken Burger'}},
  {id:'chickencheese',category:'burgers',price:215,n:{tr:'Tavuk Burger Peynirli',ar:'تشيز برغر دجاج',en:'Chicken Cheeseburger'}},
  {id:'chickenegg',category:'burgers',price:230,n:{tr:'Tavuk Burger (Yumurta + Peynir)',ar:'برغر دجاج (بيض + جبنة)',en:'Chicken Burger (Egg + Cheese)'}},
  {id:'chickenpane',category:'burgers',price:200,n:{tr:'Tavuk Burger Pane',ar:'برغر دجاج بانيه',en:'Breaded Chicken Burger'}},
  {id:'chickenpanecheese',category:'burgers',price:215,n:{tr:'Cheese Tavuk Burger Pane',ar:'تشيز برغر دجاج بانيه',en:'Cheesy Breaded Chicken Burger'}},
  {id:'sucukbread',category:'sucuk',price:250,n:{tr:'Ekmek Arası Sucuk',ar:'سجق صمون',en:'Sucuk Sandwich'}},
  {id:'sucukwrap',category:'sucuk',price:250,n:{tr:'Sucuklu Dürüm',ar:'سجق خبز سياحي',en:'Sucuk Wrap'}},
  {id:'sucukcheese',category:'sucuk',price:270,n:{tr:'Ekmek Arası Kaşarlı Sucuk',ar:'سجق مع جبنة',en:'Sucuk & Cheese Sandwich'}},
  {id:'sucukegg',category:'sucuk',price:270,n:{tr:'Ekmek Arası Yumurtalı Sucuk',ar:'سجق مع بيض',en:'Sucuk & Egg Sandwich'}},
  {id:'sucukmix',category:'sucuk',price:290,n:{tr:'Ekmek Arası Mix Sucuk',ar:'سجق مع بيض وجبنة',en:'Mixed Sucuk Sandwich'}},
  {id:'frybread',category:'fries',price:130,n:{tr:'Patates Ekmek Arası',ar:'سندويشة بطاطا',en:'French Fries Sandwich'}},
  {id:'frycheese',category:'fries',price:150,n:{tr:'Patates Ekmek Arası (Peynirli)',ar:'سندويشة بطاطا بالجبنة',en:'Cheesy Fries Sandwich'}},
  {id:'frymax',category:'fries',price:170,n:{tr:'Patates Ekmek Arası Max',ar:'سندويشة بطاطا ماكس',en:'Max Fries Sandwich'}},
  {id:'fries',category:'fries',price:170,n:{tr:'Patates Kızartması Tabağı',ar:'صحن بطاطا',en:'French Fries Plate'}},
  {id:'friesdouble',category:'fries',price:220,n:{tr:'Patates Kızartması Double',ar:'صحن بطاطا دبل',en:'Double French Fries Plate'}},
  {id:'caesar',category:'salads',price:200,n:{tr:'Sezer Salatası',ar:'سلطة سيزر',en:'Caesar Salad'}},
  {id:'coleslaw',category:'salads',price:175,n:{tr:'Kolslow Salatası',ar:'سلطة كول سلو',en:'Coleslaw Salad'}}
];

// Food photography comes only from the original images sent by the restaurant.
const featured = [
  {id:'paris',asset:'paris.webp',sub:'featuredPortion'},
  {id:'broast4',asset:'broasted.webp',sub:'featuredPieces'},
  {id:'beefburger',asset:'beef-burger.webp',sub:'featuredBurger'},
  {id:'chickenburger',asset:'chicken-burger.webp',sub:'featuredBurger'},
  {id:'meksikano',asset:'meksikano.webp',sub:'featuredPortion'},
  {id:'cordonbleu',asset:'cordon-bleu.webp',sub:'featuredPortion'}
];

let currentLang = 'tr';
let currentCategory = 'all';
const getText = (key) => translations[currentLang][key] || translations.tr[key] || key;
const getName = (obj) => obj[currentLang] || obj.tr;
const formatPrice = (value) => `${value} ₺`;
const normalize = (value) => String(value || '').toLocaleLowerCase().normalize('NFD').replace(/[\u0300-\u036f\u064B-\u065F\u0640]/g,'').replace(/ı/g,'i').replace(/ş/g,'s').replace(/ğ/g,'g').replace(/ç/g,'c').replace(/ö/g,'o').replace(/ü/g,'u');

function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const val = translations[lang][el.dataset.i18n];
    if (typeof val === 'string') el.textContent = val;
  });
  const search = document.querySelector('#menu-search');
  search.placeholder = getText('searchPlaceholder');
  search.setAttribute('aria-label',getText('searchLabel'));
  document.querySelectorAll('.lang-btn').forEach(b => {
    const active = b.dataset.lang === lang;
    b.classList.toggle('active',active);
    b.setAttribute('aria-pressed',String(active));
  });
  document.title = lang === 'ar' ? 'لا برونتو | مطعم وجبات سريعة – إسطنبول' : 'La Pronto | Fast Food · İstanbul';
  document.querySelector('meta[name="description"]').content = lang === 'ar'
    ? 'مطعم La Pronto في كاراغومروك، الفاتح، إسطنبول. استعرض المنيو والأسعار باللغات العربية والتركية والإنجليزية.'
    : lang === 'en' ? 'La Pronto Fast Food in Karagümrük, Fatih, Istanbul. Explore burgers, crispy chicken, sandwiches and the complete menu with prices.'
    : 'La Pronto Fast Food, Karagümrük Fatih İstanbul. Burger, broasted tavuk, sandviç ve güncel fiyat teyidi için telefon.';
  renderCategories();
  renderFeatured();
  renderMenu();
  renderCart();
  document.querySelector('#menu-search').placeholder = getText('searchPlaceholder');
  document.querySelector('#cart-customer').placeholder = getText('cartNamePlaceholder');
  document.querySelector('#cart-notes').placeholder = getText('cartNotesPlaceholder');
  document.querySelector('#cart-open').setAttribute('aria-label',getText('viewCart'));
  document.querySelector('#cart-close').setAttribute('aria-label',getText('continueShopping'));
  try { localStorage.setItem('lapronto-lang',lang); } catch(e) {}
}

function renderCategories(){
  const holder = document.querySelector('#category-filters');
  holder.replaceChildren();
  categories.forEach(cat => {
    const count = cat.id === 'all' ? menu.length : menu.filter(i=>i.category===cat.id).length;
    const b = document.createElement('button');
    b.type='button';b.className='category-btn'+(currentCategory===cat.id?' active':'');
    b.dataset.category=cat.id;
    b.setAttribute('aria-pressed',String(currentCategory===cat.id));
    const icon = document.createElement('span');icon.className='cat-icon';icon.textContent=cat.icon;
    const name = document.createElement('span');name.textContent=getName(cat.name);
    const tally = document.createElement('span');tally.className='cat-count';tally.textContent=count;
    b.append(icon,name,tally);
    b.addEventListener('click',()=>{currentCategory=cat.id;renderCategories();renderMenu();});
    holder.appendChild(b);
  });
}

function priceMarkup(item){
  const priceOption=(variant,price,word,featuredVariant=false) => {
    const label = `${getText('addToCart')} — ${getName(item.n)}, ${word}`;
    const button = `<button type="button" class="menu-add-btn" data-add-id="${item.id}" data-add-variant="${variant}" aria-label="${label}" title="${getText('addToCart')}">+</button>`;
    return `<span class="menu-buy-option"><span class="price-tag ${variant==='portion'||variant==='single'?'primary':''}"><small>${word}</small><strong>${formatPrice(price)}</strong></span>${button}</span>`;
  };
  if(item.price!==undefined) return priceOption('single',item.price,getText('single'));
  let markup='';
  if(item.s!==undefined) markup+=priceOption('sandwich',item.s,getText('sandwich'));
  if(item.p!==undefined) markup+=priceOption('portion',item.p,getText('portion'));
  return markup;
}
function renderMenu(){
  const q=normalize(document.querySelector('#menu-search').value.trim());
  const match = menu.filter(item => (currentCategory === 'all'||item.category===currentCategory) &&
    (!q || Object.values(item.n).some(v=>normalize(v).includes(q)) ||
     (item.notes&&Object.values(item.notes).some(v=>normalize(v).includes(q))) ||
     normalize(getName(categories.find(c=>c.id===item.category).name)).includes(q)));
  const results = document.querySelector('#menu-results');
  results.replaceChildren();
  const template = document.createElement('template');
  categories.filter(c=>c.id!=='all').forEach(cat => {
    const items = match.filter(item=>item.category===cat.id);
    if(!items.length) return;
    const section=document.createElement('section');section.className='menu-group';
    const cap=document.createElement('div');cap.className='menu-group-title';
    const left=document.createElement('div');left.className='group-title-main';
    const icon=document.createElement('div');icon.className='group-title-icon';icon.textContent=cat.icon;
    const t=document.createElement('div');
    const h=document.createElement('h3');h.textContent=getName(cat.name);
    const sub=document.createElement('div');sub.className='group-subtitle';sub.textContent=getText('categorySub');
    t.append(h,sub);left.append(icon,t);
    const badge=document.createElement('span');badge.className='group-count';badge.textContent=items.length+' '+getText('results');
    cap.append(left,badge);section.appendChild(cap);
    const rows=document.createElement('div');rows.className='menu-rows';
    for(const item of items){
      const row=document.createElement('div');row.className='menu-row';
      const label=document.createElement('div');label.className='menu-row-text';
      const name=document.createElement('div');name.className='menu-row-name';name.textContent=getName(item.n);
      label.appendChild(name);
      if(item.notes){const desc=document.createElement('div');desc.className='menu-row-description';desc.textContent=getName(item.notes);label.appendChild(desc);}
      const prices=document.createElement('div');prices.className='menu-prices';
      template.innerHTML=priceMarkup(item);prices.append(...template.content.childNodes);
      row.append(label,prices);rows.appendChild(row);
    }
    section.appendChild(rows);results.appendChild(section);
  });
  document.querySelector('#item-count').textContent=match.length+' '+getText('results');
  document.querySelector('#menu-empty').hidden=match.length!==0;
}
function renderFeatured(){
  const parent=document.querySelector('#featured-grid');parent.replaceChildren();
  for(const item of featured){
    const food=menu.find(x=>x.id===item.id);
    const price=food.p ?? food.price ?? food.s;
    const card=document.createElement('article');card.className='featured-card';
    const photo=document.createElement('div');photo.className='featured-image';
    const img=document.createElement('img');img.src='assets/'+item.asset;img.alt=getName(food.n);img.loading='lazy';
    const badge=document.createElement('span');badge.className='featured-tag';badge.textContent=getText('favoriteTag');
    photo.append(img,badge);
    const detail=document.createElement('div');detail.className='featured-detail';
    const title=document.createElement('h3');title.textContent=getName(food.n);
    const subtitle=document.createElement('p');subtitle.textContent=getText(item.sub);
    const bottom=document.createElement('div');bottom.className='featured-card-bottom';
    const from=document.createElement('span');from.className='from-price';
    const l=document.createElement('small');l.textContent=getText('from');const value=document.createElement('span');value.textContent=formatPrice(price);from.append(l,value);
    const link=document.createElement('a');link.href='#menu';link.className='featured-circle';link.setAttribute('aria-label',getText('fullMenu'));link.textContent='↗';
    link.addEventListener('click',()=>{currentCategory=food.category;document.querySelector('#menu-search').value='';renderCategories();renderMenu();});
    bottom.append(from,link);detail.append(title,subtitle,bottom);card.append(photo,detail);parent.appendChild(card);
  }
}

// Each cart entry is a menu item + its exact variant, so sandwich and plate never mix.
// Only allowed IDs / variants are restored from localStorage.
let cart = [];
const MAX_PER_ITEM = 99;
function getVariantPrice(item, variant){
  if(variant==='single' && Number.isFinite(item.price)) return item.price;
  if(variant==='sandwich' && Number.isFinite(item.s)) return item.s;
  if(variant==='portion' && Number.isFinite(item.p)) return item.p;
  return null;
}
function restoreCart(){
  try {
    const parsed = JSON.parse(localStorage.getItem('lapronto-cart') || '[]');
    if (!Array.isArray(parsed)) return;
    cart = parsed.filter(line => {
      const food = menu.find(x => x.id === line.id);
      return food && getVariantPrice(food,line.variant)!==null && Number.isInteger(line.qty) && line.qty>0 && line.qty<=MAX_PER_ITEM;
    }).map(({id,variant,qty}) => ({id,variant,qty}));
  } catch(e) {cart=[];}
}
function persistCart(){
  try {localStorage.setItem('lapronto-cart',JSON.stringify(cart));}catch(e){}
}
function cartData(){
  return cart.map(line=> {
    const item=menu.find(x=>x.id===line.id);
    const unitPrice=getVariantPrice(item,line.variant);
    return {...line,item,unitPrice,total:unitPrice*line.qty};
  });
}
function cartVariantText(variant){
  return getText(variant==='single'?'cartSingle':variant==='portion'?'portion':'sandwich');
}
function addCartItem(id,variant){
  const food=menu.find(x=>x.id===id);
  if(!food || getVariantPrice(food,variant)===null)return;
  const existing=cart.find(line=>line.id===id&&line.variant===variant);
  if(existing)existing.qty=Math.min(MAX_PER_ITEM,existing.qty+1);
  else cart.push({id,variant,qty:1});
  persistCart();renderCart();
  const notice=document.querySelector('#cart-notice');
  notice.textContent = `${getName(food.n)} — ${getText('cartAdded')}`;
}
function changeCartQty(id,variant,diff){
  const idx=cart.findIndex(line=>line.id===id&&line.variant===variant);
  if(idx<0)return;
  cart[idx].qty = Math.min(MAX_PER_ITEM,cart[idx].qty+diff);
  if(cart[idx].qty<=0)cart.splice(idx,1);
  persistCart();renderCart();
}
function cartWhatsAppMessage(){
  const lines=cartData();
  const count=lines.reduce((sum,line)=>sum+line.qty,0);
  const total=lines.reduce((sum,line)=>sum+line.total,0);
  const userName=document.querySelector('#cart-customer').value.trim();
  const userNotes=document.querySelector('#cart-notes').value.trim();
  const result=[`*${getText('orderHello')}*`,''];
  lines.forEach((line,index)=> {
    result.push(`${index+1}. ${getName(line.item.n)} (${cartVariantText(line.variant)})`);
    result.push(`   ${line.qty} × ${formatPrice(line.unitPrice)} = ${formatPrice(line.total)}`);
  });
  result.push('',`*${getText('orderTotal')}: ${formatPrice(total)}*`);
  if(userName)result.push(`${getText('orderName')}: ${userName}`);
  if(userNotes)result.push(`${getText('orderNotes')}: ${userNotes}`);
  result.push('',getText('orderPriceDisclaimer'));
  return result.join('\n');
}
function updateWhatsAppLink(){
  const link=document.querySelector('#cart-whatsapp');
  if(cart.length===0){
    link.removeAttribute('href');link.setAttribute('aria-disabled','true');link.setAttribute('tabindex','-1');
  }else{
    link.href=`https://wa.me/${CONTACT_NUMBER.replace(/\D/g,'')}?text=${encodeURIComponent(cartWhatsAppMessage())}`;
    link.setAttribute('aria-disabled','false');link.removeAttribute('tabindex');
  }
}
function renderCart(){
  const holder=document.querySelector('#cart-products');
  holder.replaceChildren();
  const entries=cartData();
  const count=entries.reduce((sum,line)=>sum+line.qty,0);
  const total=entries.reduce((sum,line)=>sum+line.total,0);
  document.querySelector('#cart-count').textContent=count;
  document.querySelector('#cart-floating-count').textContent=count;
  document.querySelector('#cart-total').textContent=formatPrice(total);
  document.querySelector('#cart-floating').hidden=count===0;
  document.querySelector('#cart-open').setAttribute('aria-label',`${getText('viewCart')} (${count})`);
  if(!entries.length){
    const empty=document.createElement('div');empty.className='cart-empty-state';
    empty.innerHTML='<span aria-hidden="true">◌</span>';
    const heading=document.createElement('h3');heading.textContent=getText('cartEmpty');
    const text=document.createElement('p');text.textContent=getText('cartEmptyNote');
    empty.append(heading,text);holder.appendChild(empty);
  }else{
    entries.forEach(line=>{
      const row=document.createElement('article');row.className='cart-item';
      const copy=document.createElement('div');copy.className='cart-item-text';
      const title=document.createElement('h3');title.textContent=getName(line.item.n);
      const variant=document.createElement('span');variant.textContent=cartVariantText(line.variant);
      const unit=document.createElement('small');unit.textContent=`${formatPrice(line.unitPrice)} × ${line.qty}`;
      copy.append(title,variant,unit);
      const actions=document.createElement('div');actions.className='cart-item-actions';
      const total=document.createElement('strong');total.textContent=formatPrice(line.total);total.dir='ltr';
      const qty=document.createElement('div');qty.className='cart-qty';
      for(const [direction,label] of [[-1,getText('qtyDecrease')],[1,getText('qtyIncrease')]]){
        const b=document.createElement('button');b.type='button';b.textContent=direction===-1?'−':'+';
        b.setAttribute('aria-label',`${label}: ${getName(line.item.n)}`);
        b.addEventListener('click',()=>changeCartQty(line.id,line.variant,direction));
        if(direction===-1)qty.append(b);
        else { const n=document.createElement('span');n.textContent=line.qty;qty.append(n,b); }
      }
      const remove=document.createElement('button');remove.type='button';remove.className='cart-remove';
      remove.textContent='✕';remove.title=getText('removeItem');remove.setAttribute('aria-label',`${getText('removeItem')}: ${getName(line.item.n)}`);
      remove.addEventListener('click',()=>changeCartQty(line.id,line.variant,-line.qty));
      actions.append(total,qty,remove);row.append(copy,actions);holder.appendChild(row);
    });
  }
  document.querySelector('#cart-clear').disabled=count===0;
  document.querySelector('.cart-extras').hidden=count===0;
  updateWhatsAppLink();
}
function openCart(){
  const dlg=document.querySelector('#cart-dialog');
  if(!dlg.open)dlg.showModal();
}
function closeCart(){document.querySelector('#cart-dialog').close();}
document.querySelector('#cart-open').addEventListener('click',openCart);
document.querySelector('#cart-floating').addEventListener('click',openCart);
document.querySelector('#cart-close').addEventListener('click',closeCart);
document.querySelector('#cart-continue').addEventListener('click',()=>{closeCart();document.querySelector('#menu').scrollIntoView({behavior:'smooth'});});
document.querySelector('#cart-clear').addEventListener('click',()=>{
  if(cart.length && window.confirm(getText('cartConfirmClear'))){cart=[];persistCart();renderCart();}
});
document.querySelector('#cart-dialog').addEventListener('click',event=>{
  if(event.target===event.currentTarget)closeCart();
});
for(const input of document.querySelectorAll('#cart-customer,#cart-notes'))input.addEventListener('input',updateWhatsAppLink);
document.querySelector('#cart-whatsapp').addEventListener('click',event=>{
  if(cart.length===0){event.preventDefault();return;}
  // The customer must press Send in WhatsApp; wa.me cannot send automatically.
});
document.querySelector('#menu-results').addEventListener('click',e=>{
  const b=e.target.closest('.menu-add-btn');
  if(!b)return;
  addCartItem(b.dataset.addId,b.dataset.addVariant);
  b.classList.add('just-added');
  setTimeout(()=>{if(b.isConnected)b.classList.remove('just-added');},600);
});
restoreCart();

// Language switches; current setting is persisted only in this browser.
document.querySelectorAll('.lang-btn').forEach(b => b.addEventListener('click',()=>setLanguage(b.dataset.lang)));
document.querySelector('#menu-search').addEventListener('input',renderMenu);
const nav=document.querySelector('#site-nav'), navToggle=document.querySelector('.menu-toggle');
navToggle.addEventListener('click',()=>{
  const open=nav.classList.toggle('open');navToggle.setAttribute('aria-expanded',String(open));
  navToggle.setAttribute('aria-label',open?'Close navigation':'Open navigation');
});
nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{
  nav.classList.remove('open');navToggle.setAttribute('aria-expanded','false');
}));
const dialog=document.querySelector('#poster-dialog'),dialogImg=document.querySelector('#dialog-image');
document.querySelectorAll('[data-poster]').forEach(b=>b.addEventListener('click',()=>{
  const type=b.dataset.poster;
  dialogImg.src=type==='one'?'assets/menu-one.webp':'assets/menu-two.webp';
  dialogImg.alt=type==='one'?'La Pronto original menu – page 1':'La Pronto original menu – page 2';
  if(typeof dialog.showModal==='function') dialog.showModal();
}));
dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close();});
document.querySelector('#year').textContent=new Date().getFullYear();
try { currentLang=localStorage.getItem('lapronto-lang') || 'tr'; } catch(e) { currentLang='tr'; }
setLanguage(translations[currentLang]?currentLang:'tr');
