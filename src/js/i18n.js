Promise.all([
    fetch("src/locales/en_translation.json").then(res => res.json()),
    fetch("src/locales/pl_translation.json").then(res => res.json())
]).then(([en, pl]) => {
    const userLang = navigator.language.startsWith("en") ? "en" : "pl";

    i18next.init({
        lng: navigator.language.startsWith("en") ? "en" : "pl",
        fallbackLng: "en",
        resources: {
            en: { translation: en },
            pl: { translation: pl }
        }
    }).then(() => {
        document.querySelector("html").lang = userLang;
        document.getElementById('cv').href = `cv_${userLang}.txt`;
        translatePage();
    })
})

function translatePage() {
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      el.innerHTML = i18next.t(key);
    });
}