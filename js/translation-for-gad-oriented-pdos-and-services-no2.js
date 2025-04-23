// Translation object with English/Tagalog pairs
const translations = {
    // Heading titles
    "Filipinos Leaving the Country with Au Pair Visa" : "Filipinos Leaving the Country with Au Pair Visa (Tagalog)",
    "IMPORTANT ADVISORY ON AU PAIR VISA HOLDERS" : "MAHALAGANG PAALALA SA MGA AU PAIR VISA HOLDERS",
    "IMPORTANT ANNOUNCEMENT" : "MAHALAGANG ANUNSYO",
    "PUBLIC ADVISORY" : "PAMPUBLIKONG PAALALA",
    "CFO ADVISORY" : "PAALALA NG CFO",
    "PHILIPPINE EMBASSY PARIS DOES NOT PROCESS AU-PAIR CONTRACT VERIFICATION / AUTHENTICATION" : "HINDI NAGPROPROSESO NG AU-PAIR CONTRACT VERIFICATION / AUTHENTICATION ANG EMBAHADA NG PILIPINAS SA PARIS",
    "PUBLIC ADVISORY NO. 11-2017: SUSPENSION OF THE DEPLOYMENT OF FILIPINO AU PAIRS TO SWITZERLAND" : "PAMPUBLIKONG PAALALA BLG. 11-2017: PANSAMANTALANG PAGSUSPENDE NG PAGPADALA NG MGA PILIPINONG AU PAIRS SA SWITZERLAND",
    
    // Section titles
    "COUNTRY FAMILIARIZATION SEMINAR (CFS) FOR AU PAIRS": "SEMINAR SA PAGKILALA NG BANSA (CFS) PARA SA MGA AU PAIRS",
    "I. What is the Country Familiarization Seminar (CFS) for Au Pairs?": "I. Ano ang Seminar sa Pagkilala ng Bansa (CFS) para sa mga Au Pairs?",
    "II. Requirements for Registration": "II. Mga Kinakailangan sa Pagpaparehistro",
    "III. How to Make an Online Appointment": "III. Paano Gumawa ng Online na Appointment",
    "IV. Schedule of Country Familiarization Seminar": "IV. Iskedyul ng Seminar sa Pagkilala ng Bansa",
    "V. FLYER": "V. POLYETO",
    
    // Content paragraphs for I.
    "* No need to photocopy any registration document" : "* Hindi na kailangan ipa-photocopy and anumang dokumento",
    "* No need to submit ID photos" : "* Hindi na kailangan magsumite ng mga retratong ID",
    "The following are required for registration of an Au Pair:" : "Ang mga sumusunod ay kinakailangan para sa pagpaparehistro ng isang Au Pair:",
    "1. Original and valid passport;" : "1. Orihinal at balidong pasaporte;",
    "2. Original copy of visa;" : "2. Orihinal na kopya ng visa;",
    "3. One (1) valid identification card with photograph;" : "3. Isang (1) balidong pagkakakilanlan na may litrato;",
    "4. Original and photocopy of contract of engagement or letter of undertaking to engage, duly authenticated/notarized by Philippine Embassy/Consulate in the European country of destination;" : "4. Orihinal at photocopy ng kontrata ng pakikipag-ugnayan o liham ng pangako upang makipag-ugnayan, na maayos na pinatunayan/notarized ng Embahada/Konsulado ng Pilipinas sa bansang Europeo na patutunguhan;",
    "5. Payment of Php400.00 registration fee and;" : "5. Bayad na Php400.00 para sa pagpaparehistro at;",
    "6. Attendance in the Country Familiarization Seminar (CFS)" : "6. Pagdalo sa Seminar sa Pagkilala ng Bansa (CFS)",
    "Primary IDs" : "Mga Pangunahing ID",
    "Secondary IDs" : "Mga Sekondaryang ID",

    // Content paragraphs for II.

    
    // Add more translations as needed
    "Click here to register and print your temporary of-cors certificate:": "I-click dito para magparehistro at i-print ang iyong pansamantalang sertipiko ng of-cors",
    "Country Familiarization Seminar (CFS) Program for Au Pair" : "Programa ng Seminar sa Pagkilala ng Bansa (CFS) para sa mga Au Pair",
    
    // Buttons and links
    "Basahin ang mga impormasyon sa Tagalog" : "Read information in English",
    "Click here for a copy of the Flyer": "I-click dito para sa kopya ng Polyeto",
    "Basahin ang mga impormasyon sa Tagalog": "Read information in English"
    };

    // Enhanced translation function
    function translateCFS() {
    // Find all elements that might contain translatable text
    const elements = document.querySelectorAll("h2, h3, h4, p, li, a");
    
    // Check if we're currently showing translations
    const isCurrentlyTranslated = document.body.classList.contains("tagalog-mode");
    
    // Toggle the translation state
    document.body.classList.toggle("tagalog-mode");
    
    elements.forEach(function(element) {
        // Skip elements without text content
        if (!element.textContent.trim()) return;
        
        // Store original text if we're translating for the first time
        if (!element.hasAttribute("data-original-text") && !isCurrentlyTranslated) {
        element.setAttribute("data-original-text", element.textContent);
        }
        
        if (!isCurrentlyTranslated) {
        // Translate to Tagalog
        const originalText = element.textContent;
        if (translations[originalText]) {
            element.textContent = translations[originalText];
        }
        } else {
        // Revert to original English
        if (element.hasAttribute("data-original-text")) {
            element.textContent = element.getAttribute("data-original-text");
        }
        }
    });
        
    // Add a visual indicator of language mode
    const languageIndicator = document.getElementById("language-indicator") || 
        createLanguageIndicator();
    languageIndicator.textContent = isCurrentlyTranslated ? "English" : "Tagalog";
    }

    // Create a language indicator element
    function createLanguageIndicator() {
    const indicator = document.createElement("div");
    indicator.id = "language-indicator";
    indicator.className = "fixed top-4 right-4 bg-violet-900 text-white px-3 py-1 rounded-full text-sm";
    document.body.appendChild(indicator);
    return indicator;
    }

    // Add CSS for translation effects
    const style = document.createElement("style");
    style.textContent = `
    .tagalog-mode .translated {
        animation: fade-in 0.5s ease-in-out;
    }
    
    @keyframes fade-in {
        from { opacity: 0.5; }
        to { opacity: 1; }
    }
    
    #language-indicator {
        z-index: 100;
        box-shadow: 0 2px 5px rgba(0,0,0,0.2);
    }
    `;
    document.head.appendChild(style);