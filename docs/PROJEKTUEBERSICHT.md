# Обзор проекта: Toyger Stories

## Технологии

- **React 19** + **TypeScript 5.9**
- **Vite 7** (сборка и dev-сервер)
- **Tailwind CSS 3.4** + **shadcn/ui** (компоненты)
- **React Router 7** (маршрутизация: `/`, `/impressum`, `/privacy`)
- **Lucide React** (иконки)
- Шрифты: Cormorant Garamond (заголовки), Inter (основной текст)

## Структура проекта

```
app/
├── public/
│   ├── images/          ← оригинальные фотографии кошек
│   ├── ai-images/       ← новые фотографии (котята, портрет, семья)
│   └── _redirects       ← SPA-redirect для Netlify/Cloudflare
├── src/
│   ├── sections/        ← все секции главной страницы
│   ├── pages/           ← отдельные страницы (Impressum, Privacy)
│   ├── components/ui/   ← shadcn/ui компоненты
│   ├── hooks/           ← кастомные хуки (тема, анимации скролла)
│   ├── i18n/            ← переводы и i18n-контекст
│   ├── lib/             ← утилиты
│   ├── App.tsx          ← корневой компонент с маршрутами
│   ├── main.tsx         ← точка входа
│   ├── index.css        ← глобальные стили + CSS-переменные тем
│   └── App.css          ← (пустой, не используется)
├── dist/                ← собранный готовый сайт
├── docs/                ← документация
├── index.html           ← HTML-точка входа
├── vite.config.ts       ← конфигурация Vite
├── tailwind.config.js   ← конфигурация Tailwind
└── package.json         ← зависимости и скрипты
```

## Где что менять

### Тексты
Все тексты на трёх языках (RU, EN, UKR) находятся в одном файле:
```
src/i18n/translations.ts
```

### Фотографии
- Оригинальные: `public/images/`
- Новые (котята, портрет, семья): `public/ai-images/`

Чтобы добавить новую фотографию:
1. Положить файл в `public/images/` или `public/ai-images/`
2. Добавить запись в соответствующую секцию (например, `Gallery.tsx`)
3. Добавить описание в `translations.ts`

### Секции главной страницы
Каждая секция — отдельный файл в `src/sections/`:

| Файл | Секция |
|------|--------|
| Hero.tsx | Главный экран |
| About.tsx | О странице |
| Gallery.tsx | Галерея с фильтрами |
| Philosophy.tsx | Атмосфера |
| BreedStory.tsx | Знакомьтесь: Toyger |
| WhyToyger.tsx | Почему привлекает внимание |
| BreedInfo.tsx | Карточки о породе |
| Temperament.tsx | Характер и темперамент |
| FunFacts.tsx | Интересные факты |
| Moments.tsx | Фотомоменты |
| KittenMoments.tsx | Котята Toyger |
| DailyLife.tsx | Повседневная жизнь |
| WhoFits.tsx | Кому подойдёт |
| BreedFAQ.tsx | FAQ о породе |
| FAQ.tsx | Общие вопросы |
| FutureUpdates.tsx | Продолжение истории |
| Contact.tsx | Контактная форма |

### Порядок секций
Определяется в `App.tsx` в компоненте `HomePage`.

### Impressum / Privacy
```
src/pages/Impressum.tsx
src/pages/Privacy.tsx
```

## Команды

| Команда | Действие |
|---------|----------|
| `npm install` | Установить зависимости |
| `npm run dev` | Запустить dev-сервер |
| `npm run build` | Собрать для публикации |
| `npm run preview` | Просмотреть собранную версию |
| `npm run lint` | Проверить код линтером |

## Заметки

- Контактная форма не отправляет данные на сервер — она только имитирует отправку.
  Для реальной отправки нужно подключить бэкенд (Formspree, Netlify Forms и т.д.)
- Тёмная тема и выбранный язык сохраняются в localStorage
- Сайт полностью статический, Node.js для работы не нужен
