import '@fontsource-variable/inter'
import './globals.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <head>
        <meta name="yandex-verification" content="c87508a373002a36" />
        <title>La Casino (Ля Казино) Официальный Сайт и Рабочее Зеркало — Играть Онлайн</title>
        <meta
          name="description"
          content="Официальный сайт La Casino (Ля Казино) и актуальное рабочее зеркало для игры онлайн. До 225% бонуса и 1000 FS, моментальные выплаты, честные слоты и топовые выигрыши."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://la31casino.vercel.app/" />
        <meta name="theme-color" content="#ff1493" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="La Casino (Ля Казино) Официальный Сайт — Рабочее Зеркало Онлайн" />
        <meta
          property="og:description"
          content="Играйте онлайн в La Casino (Ля Казино) через официальный сайт и рабочее зеркало. Быстрый вывод выигрышей, щедрые бонусы до 225% и лицензионные автоматы."
        />
        <meta property="og:url" content="https://la31casino.vercel.app/" />
        <meta property="og:site_name" content="La Casino" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="La Casino (Ля Казино) Официальный Сайт и Зеркало" />
        <meta
          name="twitter:description"
          content="Актуальное зеркало и вход на официальный сайт La Casino. Играйте в Ля Казино онлайн с бонусами на депозиты."
        />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/icon.svg" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
