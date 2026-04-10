import { useLanguage } from "../i18n/LanguageContext";

function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="tracking-wider text-center px-4 py-8 sm:px-[15%] flex items-center justify-center flex-col gap-4 bg-gray-100 dark:bg-neutral-900 text-gray-900 dark:text-white transition-colors duration-300">
      <p className="text-sm md:text-base">{t.footer.copyright}</p>
    </footer>
  );
}

export default Footer;
