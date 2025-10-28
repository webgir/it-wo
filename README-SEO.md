# IT-WO - SEO Оптимизированный Astro Блог

Технологический блог на Astro с полной SEO оптимизацией, структурированными данными и отличной производительностью.

🌐 **Сайт**: https://it-wo.ru

## 🎯 SEO Особенности

### ✅ Реализовано
- **Структурированные данные**: Article, Organization, WebSite, BreadcrumbList
- **Open Graph**: полная поддержка для всех соцсетей
- **Twitter Cards**: оптимизированные превью
- **Sitemap**: автоматическая генерация с приоритетами
- **Robots.txt**: настроен для индексации
- **Канонические URL**: на всех страницах
- **404 страница**: русскоязычная с noindex
- **Оптимизация изображений**: WebP, lazy/eager loading
- **Core Web Vitals**: оптимизировано для высоких показателей
- **Мобильная оптимизация**: responsive design
- **Производительность**: статическая генерация, минимальный JS

### 📊 Метрики и Аналитика
- Yandex.Metrika (ID: 104544855)
- Google Search Console (требует настройки)
- Yandex.Webmaster (требует настройки)

## 📁 Документация

- [SEO Чек-лист](./SEO-CHECKLIST.md) - полный список выполненных и требуемых задач
- [Core Web Vitals](./CORE-WEB-VITALS.md) - рекомендации по производительности
- [Настройка поисковых систем](./SEARCH-ENGINES-SETUP.md) - инструкции по Google и Yandex

## 🚀 Быстрый старт

```bash
# Установка зависимостей
npm install

# Запуск dev сервера
npm run dev

# Сборка для продакшена
npm run build

# Предпросмотр сборки
npm run preview
```

## 📝 Создание контента

### Новый блог-пост

Создайте файл в `src/content/blog/`:

```markdown
---
title: "Заголовок статьи"
description: "Краткое описание до 160 символов"
pubDate: 2025-10-26
heroImage: https://it-wo.ru/images/blog/example.png
category: frontend
tags:
  - javascript
  - astro
slug: url-friendly-slug
author: "Ваше имя"
---

Содержимое статьи в Markdown...
```

### Обязательные поля
- `title` - заголовок (оптимально 50-60 символов)
- `description` - для meta description (до 160 символов)
- `pubDate` - дата публикации
- `category` - одна категория
- `tags` - массив тегов
- `slug` - URL-friendly идентификатор

### Рекомендуемые поля
- `heroImage` - изображение для превью (1200x630px)
- `author` - автор статьи
- `updatedDate` - дата обновления (если есть)

## 🎨 Оптимизация изображений

### Hero изображения (главное изображение поста)
- Размер: 1200x630px
- Формат: WebP
- Качество: 85%
- Loading: eager

### Превью карточек
- Размер: 640x360px
- Формат: WebP
- Качество: 80%
- Loading: lazy

### Использование
```astro
import { Image } from 'astro:assets';

<Image 
  src={heroImage} 
  alt="Описательный alt-текст"
  width={1200}
  height={630}
  loading="eager"
  format="webp"
  quality={85}
/>
```

## 🔍 SEO Лучшие практики

### Заголовки
- H1: только один на странице, содержит главное ключевое слово
- H2-H3: логическая иерархия, описательные
- Длина H1: 50-60 символов для title tag

### Meta описания
- Длина: 150-160 символов
- Включайте призыв к действию
- Уникальные для каждой страницы

### URL
- Используйте транслитерацию для кириллицы
- Короткие и описательные
- Без спецсимволов и пробелов

### Изображения
- Всегда добавляйте alt-текст
- Описывайте содержимое, не повторяйте title
- Оптимизируйте размер и формат

## 📈 Мониторинг SEO

### Регулярные проверки
1. **Еженедельно**
   - Yandex.Metrika посещаемость
   - Search Console ошибки

2. **Ежемесячно**
   - Core Web Vitals
   - Анализ поисковых запросов
   - Проверка индексации

3. **Ежеквартально**
   - Полный SEO аудит
   - Обновление старого контента
   - Анализ конкурентов

### Инструменты
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [Google Search Console](https://search.google.com/search-console)
- [Yandex.Webmaster](https://webmaster.yandex.ru)
- [Rich Results Test](https://search.google.com/test/rich-results)

## 🛠 Технологии

- **Astro 5** - статический генератор сайтов
- **Tailwind CSS 4** - utility-first CSS
- **MDX** - Markdown с компонентами
- **Remark TOC** - автоматическое оглавление
- **Sitemap** - автогенерация карты сайта

## 📦 Структура проекта

```
/
├── public/              # Статические файлы
│   ├── robots.txt      # Конфигурация для роботов
│   └── fonts/          # Веб-шрифты
├── src/
│   ├── components/     # Astro компоненты
│   │   ├── BaseHead.astro  # SEO мета-теги
│   │   └── ui/         # UI компоненты
│   ├── content/
│   │   └── blog/       # Markdown статьи
│   ├── layouts/        # Шаблоны страниц
│   │   └── BlogPost.astro  # Шаблон статьи
│   ├── pages/          # Роуты сайта
│   └── styles/         # Глобальные стили
├── SEO-CHECKLIST.md    # Чек-лист SEO задач
├── CORE-WEB-VITALS.md  # Руководство по CWV
└── SEARCH-ENGINES-SETUP.md  # Настройка поисковиков
```

## 🚨 Важные файлы для SEO

- `src/components/BaseHead.astro` - все мета-теги и OG
- `src/layouts/BlogPost.astro` - структурированные данные для статей
- `public/robots.txt` - правила для поисковых роботов
- `astro.config.mjs` - настройки sitemap
- `src/consts.ts` - глобальные SEO константы

## 📞 Поддержка

Если возникли вопросы:
1. Проверьте документацию в папке проекта
2. Откройте issue на GitHub
3. Проверьте [Astro документацию](https://docs.astro.build)

## 📄 Лицензия

MIT

---

**Создано для IT-WO** | SEO оптимизация по [руководству](./info-seo.txt)
