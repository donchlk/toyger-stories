# Развёртывание сайта Toyger Stories

## Локальный запуск (для разработки)

Требуется: Node.js 20+

```
cd app
npm install
npm run dev
```

Сайт откроется по адресу: http://localhost:5173

## Сборка для публикации

```
cd app
npm run build
```

Готовый сайт появится в папке `app/dist/`.
Именно эту папку нужно загружать на хостинг.

## Предварительный просмотр сборки

```
cd app
npm run preview
```

## Размещение на хостинге

### Netlify

1. Зайти на https://app.netlify.com
2. Перетащить папку `app/dist/` в окно загрузки (Sites → Drag & Drop)
3. Готово — сайт получит ссылку вида `https://xxxxx.netlify.app`

Или через подключение Git-репозитория:
- Build command: `npm run build`
- Publish directory: `dist`
- Base directory: `app`

### Cloudflare Pages

1. Зайти на https://dash.cloudflare.com → Pages
2. Создать проект → загрузить папку `app/dist/`
3. Или подключить Git-репозиторий:
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Root directory: `app`

### Vercel

1. Зайти на https://vercel.com
2. Подключить репозиторий или загрузить проект
3. Framework Preset: Vite
4. Root Directory: `app`
5. Output Directory: `dist`

### Любой статический хостинг

Просто загрузить содержимое папки `app/dist/` на сервер.
Файл `_redirects` обеспечивает корректную работу внутренних страниц на Netlify/Cloudflare.
Файл `404.html` обеспечивает корректную работу на хостингах с поддержкой пользовательских 404.

## Важные замечания

- Сайт полностью статический, Node.js-сервер для работы НЕ нужен
- Все изображения уже включены в сборку
- Сайт работает на русском, английском и украинском языках
- Тёмная/светлая тема переключается автоматически
