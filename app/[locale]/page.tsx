import LanguageSwitcher from '@/components/language-switcher';
import {useTranslations} from 'next-intl';

export default function HomePage() {
  const t = useTranslations();

  return (
    <main className="p-8 max-w-3xl mx-auto">
      <LanguageSwitcher/>
      <h1 className="text-4xl font-bold mb-4">{t('greeting')}</h1>
      <p className="text-lg mb-6">{t('welcome')}</p>

      <section className="bg-gray-100 p-6 rounded-2xl shadow-md">
        <p className="mb-4 text-gray-700">{t('description')}</p>
        <h2 className="text-2xl font-semibold mb-2">{t('cta')}</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-800">
          <li>{t('feature1')}</li>
          <li>{t('feature2')}</li>
          <li>{t('feature3')}</li>
        </ul>
      </section>
    </main>
  );
}
