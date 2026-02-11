const translations = {
    en: {
        home: "Home",
        categories: "Categories ▼",
        electronics: "Electronics",
        fashion: "Fashion",
        products: "Products",
        welcome: "Welcome to SwiftShop",
        hero_text: "Find the best deals on premium products.",
        shop_now: "Shop Now"
    },
    hi: {
        home: "होम",
        categories: "श्रेणियाँ ▼",
        electronics: "इलेक्ट्रॉनिक्स",
        fashion: "फैशन",
        products: "उत्पाद",
        welcome: "SwiftShop में आपका स्वागत है",
        hero_text: "प्रीमियम उत्पादों पर सर्वोत्तम सौदे खोजें।",
        shop_now: "अभी खरीदें"
    }
};

function changeLanguage(lang) {
    const elements = document.querySelectorAll('[data-key]');
    elements.forEach(el => {
        const key = el.getAttribute('data-key');
        if (translations[lang][key]) {
            el.innerText = translations[lang][key];
        }
    });
    // Optional: Save preference to local storage
    localStorage.setItem('selectedLang', lang);
}

// Load saved language on page load
window.onload = () => {
    const savedLang = localStorage.getItem('selectedLang') || 'en';
    changeLanguage(savedLang);
};