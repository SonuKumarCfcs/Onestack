import * as RNLocalize from 'react-native-localize';
import i18n from 'i18n-js';
import en_US from "./en_US";
import en from "./en";
import it from "./it";




const locales = RNLocalize.getLocales();
console.log("Local==>>",locales)
if (Array.isArray(locales)) {
    i18n.locale = locales[0].languageTag;
  }
  
  i18n.fallbacks = true;
  i18n.translations = {
    en,en_US,it
  };
  
  export function strings(name, params = {}) {
    return i18n.t(name, params);
  }
  export default i18n;




