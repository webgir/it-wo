# Core Web Vitals - Рекомендации для IT-WO

## Что такое Core Web Vitals

Core Web Vitals - это набор метрик, которые Google использует для оценки пользовательского опыта:

1. **LCP (Largest Contentful Paint)** - < 2.5с
   - Время загрузки основного контента
   
2. **FID (First Input Delay)** - < 100мс
   - Время реакции на первое взаимодействие
   
3. **CLS (Cumulative Layout Shift)** - < 0.1
   - Стабильность визуального контента

## Текущие оптимизации

### ✅ Реализовано
- WebP формат для изображений
- Lazy loading для карточек
- Eager loading для hero изображений
- Минимальный JavaScript (Astro Islands)
- Статическая генерация сайта
- Оптимизированные шрифты (preload)

### 🔄 Требует мониторинга
- Фактические значения LCP, FID, CLS
- Производительность на мобильных устройствах
- Размер JavaScript бандла

## Инструменты для мониторинга

1. **Google PageSpeed Insights**
   - https://pagespeed.web.dev/
   - Проверяйте каждую важную страницу

2. **Google Search Console**
   - Раздел "Core Web Vitals"
   - Показывает проблемы по всему сайту

3. **Chrome DevTools**
   - Performance tab
   - Lighthouse audit

4. **Web Vitals Extension**
   - https://chrome.google.com/webstore/detail/web-vitals

## Чек-лист оптимизации

### Для улучшения LCP:
- [x] Оптимизация изображений (WebP)
- [x] Preload критических ресурсов (шрифты)
- [x] Минимизация render-blocking ресурсов
- [ ] CDN для статических ресурсов
- [ ] Кэширование на стороне сервера

### Для улучшения FID:
- [x] Минимальный JavaScript
- [x] Code splitting (Astro Islands)
- [ ] Отложенная загрузка некритического JS
- [x] Оптимизация третьих библиотек

### Для улучшения CLS:
- [x] Размеры изображений заданы (width/height)
- [x] Предзагрузка шрифтов
- [ ] Резервирование места под динамический контент
- [x] Стабильные размеры карточек

## Рекомендации по контенту

1. **Hero изображения**: Eager loading, качество 85%, WebP
2. **Карточки постов**: Lazy loading, качество 80%, WebP
3. **Максимальный размер изображения**: 1200x630 для OG, 640x360 для превью
4. **Шрифты**: Preload только критических (atkinson-regular, atkinson-bold)

## Следующие шаги

1. Запустить Lighthouse audit для главной страницы
2. Проверить топ-10 блог постов через PageSpeed Insights
3. Настроить мониторинг в Google Search Console
4. Создать дашборд для отслеживания метрик
5. Оптимизировать страницы с низкими показателями

## Целевые значения для IT-WO

- **LCP**: < 2.0с (отлично)
- **FID**: < 50мс (отлично)
- **CLS**: < 0.05 (отлично)
- **Mobile Performance Score**: > 90
- **Desktop Performance Score**: > 95

## Полезные ссылки

- [Web.dev - Core Web Vitals](https://web.dev/vitals/)
- [Astro Performance Guide](https://docs.astro.build/en/guides/performance/)
- [Google Search Central - Page Experience](https://developers.google.com/search/docs/appearance/page-experience)
