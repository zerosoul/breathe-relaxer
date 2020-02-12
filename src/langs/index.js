import { useState } from 'react';
import en from './en';
import zh from './zh';

export const dictionaryList = {
  en,
  zh
};

export const languageOptions = [
  { id: 'en', text: 'EN' },
  { id: 'zh', text: '中' }
];

export function useLang() {
  const langIdx =
    languageOptions.findIndex(lang => {
      return navigator.language.indexOf(lang.id) > -1;
    }) || 0;
  const [dicts, setDicts] = useState(dictionaryList[languageOptions[langIdx].id]);
  const [lang, setLang] = useState(languageOptions[langIdx].id);
  const changeLang = lang => {
    setLang(lang);
    setDicts(dictionaryList[lang]);
  };
  return { lang, dicts, changeLang };
}
