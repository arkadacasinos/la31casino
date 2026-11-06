export default function HomePage() {
  const REF_URL = 'https://lunar-silver-glow.com/?serial=61365830&creative_id=9330'

  return (
    <div className="min-h-screen flex flex-col bg-[#0b0611] text-white">
      {/* Top Notification Banner */}
      <a href={REF_URL} className="x4v7-topbanner group no-underline">
        <span className="flex items-center gap-1.5 justify-center">
          <span aria-hidden="true">📢</span>
          <span>Зарегистрируйся сейчас и забери свой бонус!</span>
        </span>
        <span
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white text-lg font-bold"
          aria-hidden="true"
        >
          ×
        </span>
      </a>

      {/* Main Header / Navigation */}
      <header className="x4v7-topbar">
        <div className="x4v7-header-inner">
          <div className="flex items-center gap-3 md:gap-6">
            {/* Mobile Hamburger Link opening CSS :target drawer */}
            <a
              href="#x4v7-menu"
              className="lg:hidden p-1.5 text-gray-300 hover:text-white rounded focus:outline-none"
              aria-label="Открыть меню"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </a>

            {/* Logo */}
            <a href={REF_URL} className="x4v7-logo">
              <span className="text-[#ff1493] tracking-tighter font-extrabold flex items-center">
                <span>Л</span>
                <span className="inline-block transform -rotate-12 text-[#ff2a85]">Я</span>
              </span>
              <span className="text-white italic text-lg font-black tracking-tight ml-0.5">Casino</span>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 ml-2">
              <a href={REF_URL} className="x4v7-nav-link">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 12v10H4V12" />
                  <path d="M2 7h20v5H2z" />
                  <path d="M12 22V7" />
                  <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
                  <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
                </svg>
                Бонусы
              </a>
              <a href={REF_URL} className="x4v7-nav-link">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
                Казино
              </a>
              <a href={REF_URL} className="x4v7-nav-link">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
                  <rect x="2" y="6" width="14" height="12" rx="2" />
                </svg>
                Live Казино
              </a>
            </nav>
          </div>

          {/* Header Right Actions */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <a
              href={REF_URL}
              className="p-1.5 text-gray-300 hover:text-white rounded-full transition-colors hidden sm:inline-flex"
              aria-label="Поиск"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </a>
            <a href={REF_URL} className="x4v7-btn-login">
              Вход
            </a>
            <a href={REF_URL} className="x4v7-btn-reg">
              Регистрация
            </a>
          </div>
        </div>
      </header>

      {/* Mobile Pure CSS Drawer */}
      <aside id="x4v7-menu" className="x4v7-mobile-drawer">
        <a href="#!" className="x4v7-drawer-scrim" aria-label="Закрыть меню"></a>
        <div className="x4v7-drawer-panel">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <span className="font-extrabold text-lg text-[#ff1493]">ЛЯ Casino</span>
            <a href="#!" className="text-gray-400 hover:text-white text-xl p-1 font-bold" aria-label="Закрыть">
              ✕
            </a>
          </div>
          <nav className="flex flex-col gap-2 mt-2">
            <a href={REF_URL} className="x4v7-nav-link text-base py-2">
              🎁 Бонусы
            </a>
            <a href={REF_URL} className="x4v7-nav-link text-base py-2">
              🎰 Казино
            </a>
            <a href={REF_URL} className="x4v7-nav-link text-base py-2">
              🎲 Live Казино
            </a>
            <a href={REF_URL} className="x4v7-nav-link text-base py-2">
              ⚡ Рабочее Зеркало
            </a>
            <a href={REF_URL} className="x4v7-nav-link text-base py-2">
              📱 Мобильная Версия
            </a>
          </nav>
          <div className="mt-auto flex flex-col gap-2 pt-4 border-t border-white/10">
            <a href={REF_URL} className="x4v7-btn-reg text-center py-2.5">
              Быстрая Регистрация
            </a>
            <a href={REF_URL} className="x4v7-btn-login text-center py-2.5">
              Вход в Аккаунт
            </a>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-[1280px] mx-auto px-3 sm:px-4 py-3 sm:py-4">
        {/* FIRST SCREEN / HERO SECTION */}
        <section aria-label="Приветственный бонус" className="mb-4">
          <div className="x4v7-hero-card">
            {/* Background Graphic Asset matching Screen 2 */}
            <div
              className="absolute inset-0 bg-cover bg-center md:bg-right"
              style={{
                backgroundImage: 'url(/hero-clean.jpg)',
              }}
            />
            {/* Soft gradient overlay for text readability on all viewports */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0b0611]/90 via-[#0b0611]/60 to-transparent" />

            {/* Hero Copy Content */}
            <div className="relative z-10 max-w-xl p-6 sm:p-8 md:p-10 flex flex-col items-start">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-black uppercase tracking-tight text-white leading-tight mb-2 sm:mb-3">
                МОЩНЫЙ СТАРТ:
              </h1>
              <p className="text-base sm:text-lg md:text-xl font-bold text-gray-200 mb-6 max-w-md leading-snug">
                до 225% + 1000 ФС на четыре депозита
              </p>
              <a href={REF_URL} className="x4v7-hero-cta">
                Зарегаться!
              </a>
            </div>
          </div>
        </section>

        {/* TOP PAYOUTS WIDGET / RIBBON */}
        <section aria-label="Топ выплаты игрокам" className="x4v7-payouts-panel mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-3">
            <div className="flex items-center gap-1.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-gray-300">
              <span>ТОП Выплаты</span>
              <span className="text-[#ff2a85]">💥</span>
            </div>
            <div className="text-lg sm:text-xl font-black text-white tracking-tight">19 214 270 RUB</div>
          </div>

          {/* Horizontal Scroller for Payout Chips */}
          <div className="flex items-center gap-2.5 overflow-x-auto pb-1.5 scrollbar-thin scrollbar-thumb-white/10">
            {/* Item 1 */}
            <a href={REF_URL} className="x4v7-payout-chip shrink-0">
              <span className="w-8 h-8 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 font-extrabold text-xs flex items-center justify-center shrink-0">
                x4,3
              </span>
              <div className="flex flex-col text-xs leading-tight">
                <span className="text-gray-400 font-mono text-[10px]">ID 80……36</span>
                <span className="text-white font-extrabold text-[13px] flex items-center gap-0.5">
                  6 500 RUB <span className="text-emerald-400 text-[11px]">↗</span>
                </span>
                <span className="text-gray-400 text-[10px]">1 507 RUB депозит</span>
              </div>
            </a>

            {/* Item 2 */}
            <a href={REF_URL} className="x4v7-payout-chip shrink-0">
              <span className="w-8 h-8 rounded-full bg-amber-950/80 border border-amber-500/40 text-amber-400 font-extrabold text-xs flex items-center justify-center shrink-0">
                x6,3
              </span>
              <div className="flex flex-col text-xs leading-tight">
                <span className="text-gray-400 font-mono text-[10px]">ID 98……71</span>
                <span className="text-white font-extrabold text-[13px] flex items-center gap-0.5">
                  8 390 RUB <span className="text-emerald-400 text-[11px]">↗</span>
                </span>
                <span className="text-gray-400 text-[10px]">1 324 RUB депозит</span>
              </div>
            </a>

            {/* Item 3 */}
            <a href={REF_URL} className="x4v7-payout-chip shrink-0">
              <span className="w-8 h-8 rounded-full bg-rose-950/80 border border-rose-500/40 text-rose-400 font-extrabold text-xs flex items-center justify-center shrink-0">
                x5,2
              </span>
              <div className="flex flex-col text-xs leading-tight">
                <span className="text-gray-400 font-mono text-[10px]">ID 21……89</span>
                <span className="text-white font-extrabold text-[13px] flex items-center gap-0.5">
                  3 203 RUB <span className="text-emerald-400 text-[11px]">↗</span>
                </span>
                <span className="text-gray-400 text-[10px]">616 RUB депозит</span>
              </div>
            </a>

            {/* Item 4 */}
            <a href={REF_URL} className="x4v7-payout-chip shrink-0">
              <span className="w-8 h-8 rounded-full bg-teal-950/80 border border-teal-500/40 text-teal-400 font-extrabold text-xs flex items-center justify-center shrink-0">
                x3,2
              </span>
              <div className="flex flex-col text-xs leading-tight">
                <span className="text-gray-400 font-mono text-[10px]">ID 60……48</span>
                <span className="text-white font-extrabold text-[13px] flex items-center gap-0.5">
                  5 500 RUB <span className="text-emerald-400 text-[11px]">↗</span>
                </span>
                <span className="text-gray-400 text-[10px]">1 717 RUB депозит</span>
              </div>
            </a>

            {/* Item 5 */}
            <a href={REF_URL} className="x4v7-payout-chip shrink-0">
              <span className="w-8 h-8 rounded-full bg-blue-950/80 border border-blue-500/40 text-blue-400 font-extrabold text-xs flex items-center justify-center shrink-0">
                x10,4
              </span>
              <div className="flex flex-col text-xs leading-tight">
                <span className="text-gray-400 font-mono text-[10px]">ID 92……96</span>
                <span className="text-white font-extrabold text-[13px] flex items-center gap-0.5">
                  5 300 RUB <span className="text-emerald-400 text-[11px]">↗</span>
                </span>
                <span className="text-gray-400 text-[10px]">510 RUB депозит</span>
              </div>
            </a>

            {/* Item 6 */}
            <a href={REF_URL} className="x4v7-payout-chip shrink-0">
              <span className="w-8 h-8 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 font-extrabold text-xs flex items-center justify-center shrink-0">
                x3,2
              </span>
              <div className="flex flex-col text-xs leading-tight">
                <span className="text-gray-400 font-mono text-[10px]">ID 37……62</span>
                <span className="text-white font-extrabold text-[13px] flex items-center gap-0.5">
                  8 000 RUB <span className="text-emerald-400 text-[11px]">↗</span>
                </span>
                <span className="text-gray-400 text-[10px]">2 505 RUB депозит</span>
              </div>
            </a>
          </div>
        </section>

        {/* SEO TEXT BLOCK / ПРОСТЫНЯ ТЕКСТА 300-400 СЛОВ */}
        <article className="x4v7-seo-container" id="seo-info">
          <header className="border-b border-white/10 pb-3 mb-5">
            <span className="text-xs uppercase tracking-widest text-[#ff2a85] font-bold">
              Информационный портал
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-white mt-1">
              La Casino (Ля Казино) — Официальный Сайт и Рабочее Зеркало Онлайн
            </h2>
          </header>

          <section id="section-official">
            <h2 className="x4v7-seo-h2">
              La Casino официальный сайт и преимущества клуба Ля Казино
            </h2>
            <p className="x4v7-seo-p">
              Современный игровой портал <span className="x4v7-keyword-tag">La Casino официальный сайт</span> открывает
              пользователям круглосуточный доступ к сертифицированным слотам, рулетке и столам с живыми дилерами.
              Выбирая проверенный <span className="x4v7-keyword-tag">La Casino официальный</span> ресурс, игроки получают
              надежную защиту личных данных, мгновенный вывод средств и щедрый приветственный пакет бонусов на первые
              четыре депозита. Бренд <span className="x4v7-keyword-tag">La Casino</span> давно завоевал доверие ценителей
              азарта благодаря прозрачным условиям и регулярным турнирам. На платформе{' '}
              <span className="x4v7-keyword-tag">Ля Казино официальный сайт</span> каждый зарегистрированный гость может
              испытать удачу как в классических аппаратах, так и в современных новинках от топовых провайдеров.
            </p>
          </section>

          <section id="section-mirror">
            <h2 className="x4v7-seo-h2">
              Актуальное La Casino зеркало и безопасный доступ в Ля Казино онлайн
            </h2>
            <p className="x4v7-seo-p">
              В случаях временных сетевых ограничений или плановых технических работ всегда доступно надежное{' '}
              <span className="x4v7-keyword-tag">La Casino зеркало</span>, полностью повторяющее функционал, баланс и
              каталог игр основного ресурса. Свежее <span className="x4v7-keyword-tag">Ля Казино зеркало рабочее</span>{' '}
              позволяет совершать мгновенный вход в личный кабинет без повторной регистрации и использования сторонних
              программ. Переходя через проверенное <span className="x4v7-keyword-tag">Ля Казино зеркало</span>, вы
              сохраняете все накопленные баллы лояльности и активные бонусы. На портале{' '}
              <span className="x4v7-keyword-tag">Ля Казино онлайн</span> безопасность транзакций гарантируется
              современным шифрованием, а служба поддержки готова оперативно подсказать свежие адреса зеркал в любое время
              суток.
            </p>
          </section>

          <section id="section-play">
            <h2 className="x4v7-seo-h2">
              Как в La Casino играть и выигрывать: Ля Казино официальный вход
            </h2>
            <p className="x4v7-seo-p">
              Чтобы начать в <span className="x4v7-keyword-tag">La Casino играть</span> на реальные средства или
              протестировать аппараты в бесплатном демонстрационном режиме, достаточно пройти быструю регистрацию за
              несколько кликов. Официальный статус клуба <span className="x4v7-keyword-tag">La Казино</span> подтверждает
              высокий процент отдачи лицензионных слотов и честные выплаты. Если вы предпочитаете комфортную мобильную
              игру, выбирайте опцию в <span className="x4v7-keyword-tag">Ля Казино играть</span> со смартфона с
              адаптивным интерфейсом. Достаточно посетить надежный{' '}
              <span className="x4v7-keyword-tag">Ля Казино официальный</span> сайт, подтвердить аккаунт, активировать до
              225% бонуса и 1000 фриспинов на депозит и приступить к увлекательным игровым раундам прямо сейчас.
            </p>
          </section>

          <section id="section-features">
            <h2 className="x4v7-seo-h2">
              Мобильное Ля Казино зеркало рабочее и преимущества La Casino
            </h2>
            <p className="x4v7-seo-p">
              Качественный сервис и быстрая загрузка страниц делают клуб идеальным выбором как для новичков, так и для
              опытных игроков. Работая через свежее <span className="x4v7-keyword-tag">Ля Казино зеркало рабочее</span>,
              каждый пользователь имеет непрерывный доступ к кассе, акциям и сотням сертифицированных слотов. Проверенная
              платформа <span className="x4v7-keyword-tag">Ля Казино официальный сайт</span> обеспечивает прозрачность всех
              ставок и моментальные переводы на популярные платежные системы. Играйте в{' '}
              <span className="x4v7-keyword-tag">La Casino</span> и побеждайте с лучшими условиями в рунете!
            </p>
          </section>

          {/* Quick CTA inside SEO content */}
          <div className="mt-6 p-4 rounded-lg bg-[#180e24] border border-[#ff1493]/30 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div>
              <div className="font-extrabold text-white text-base">Готовы сорвать куш в La Casino?</div>
              <div className="text-gray-300 text-xs mt-0.5">
                Зарегистрируйтесь за 15 секунд и заберите стартовый бонус до 225% + 1000 FS!
              </div>
            </div>
            <a href={REF_URL} className="x4v7-btn-reg whitespace-nowrap text-sm px-6 py-2.5">
              Играть Сейчас
            </a>
          </div>
        </article>
      </main>

      {/* Floating Chat Support Badge */}
      <a href={REF_URL} className="x4v7-floating-chat" aria-label="Служба поддержки">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 10H6v-2h12v2zm0-3H6V7h12v2z" />
        </svg>
      </a>

      {/* Footer with SEO Hashtags and Navigation */}
      <footer className="x4v7-footer">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-white/10 pb-6">
            <a href={REF_URL} className="x4v7-logo">
              <span className="text-[#ff1493] font-black">ЛЯ</span>
              <span className="text-white italic text-lg font-black ml-1">Casino</span>
            </a>
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-gray-400">
              <a href={REF_URL} className="hover:text-[#ff2a85] transition-colors">
                Правила и условия
              </a>
              <a href={REF_URL} className="hover:text-[#ff2a85] transition-colors">
                Политика конфиденциальности
              </a>
              <a href={REF_URL} className="hover:text-[#ff2a85] transition-colors">
                Ответственная игра
              </a>
              <a href={REF_URL} className="hover:text-[#ff2a85] transition-colors">
                Контакты
              </a>
            </div>
          </div>

          {/* Hashtags based on user's keywords */}
          <div className="flex flex-col gap-2.5">
            <span className="text-xs uppercase tracking-wider text-gray-400 font-semibold">
              Быстрый поиск по разделам:
            </span>
            <div className="flex flex-wrap gap-2">
              <a href="#section-official" className="x4v7-hashtag">
                #LaCasino
              </a>
              <a href="#section-mirror" className="x4v7-hashtag">
                #LaCasinoЗеркало
              </a>
              <a href="#section-play" className="x4v7-hashtag">
                #LaCasinoИграть
              </a>
              <a href="#section-official" className="x4v7-hashtag">
                #LaCasinoОфициальный
              </a>
              <a href="#section-official" className="x4v7-hashtag">
                #LaCasinoОфициальныйСайт
              </a>
              <a href="#section-official" className="x4v7-hashtag">
                #LaКазино
              </a>
              <a href="#section-official" className="x4v7-hashtag">
                #ЛяКазино
              </a>
              <a href="#section-mirror" className="x4v7-hashtag">
                #ЛяКазиноЗеркало
              </a>
              <a href="#section-mirror" className="x4v7-hashtag">
                #ЛяКазиноЗеркалоРабочее
              </a>
              <a href="#section-play" className="x4v7-hashtag">
                #ЛяКазиноИграть
              </a>
              <a href="#section-mirror" className="x4v7-hashtag">
                #ЛяКазиноОнлайн
              </a>
              <a href="#section-official" className="x4v7-hashtag">
                #ЛяКазиноОфициальный
              </a>
              <a href="#section-official" className="x4v7-hashtag">
                #ЛяКазиноОфициальныйСайт
              </a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500 pt-2">
            <div>© 2026 La Casino (Ля Казино). Все права защищены. 18+</div>
            <div className="text-[11px] text-gray-600">
              Лицензионные игровые автоматы и безопасные транзакции.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
