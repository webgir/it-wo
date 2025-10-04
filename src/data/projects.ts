import PhoenixIcon from '../assets/logos/Phoenix-logo.svg?raw';
import N8nIcon from '../assets/logos/N8n-logo.svg?raw';
import SupabaseIcon from '../assets/logos/Supabase-logo.svg?raw';
import PosthogIcon from '../assets/logos/posthog-logo.svg?raw';
import PythonIcon from '../assets/logos/Python-logo.svg?raw';
import TailwindIcon from '../assets/logos/Tailwind-logo.svg?raw';

export const projects = [
	{
		title: "Оркестратор автоматизации рабочих процессов (n8n)",
		techStack: "n8n • Node.js • TypeScript • PostgreSQL",
		description: "Событийно-ориентированные сценарии для синхронизации данных, уведомлений и автоматизации внутренних процессов. Кастомные узлы, управление секретами, повторные попытки и метрики.",
		ctaText: "Посмотреть репозиторий →",
		ctaLink: "#",
		icon: N8nIcon
	},
	{
		title: "SaaS API-стартер (Авторизация, Биллинг, RBAC)",
		techStack: "Node.js • TypeScript • PostgreSQL • Supabase • Stripe",
		description: "Готовый к продакшену REST/GraphQL API с JWT-аутентификацией, ролевым доступом, подписками через Stripe и ограничением частоты запросов.",
		ctaText: "Получить исходники < / >",
		ctaLink: "#",
		icon: SupabaseIcon
	},
	{
		title: "Сервис чата в реальном времени",
		techStack: "Phoenix • WebSockets • Redis • Docker",
		description: "Низкая задержка, каналы, статус присутствия и управление нагрузкой. Включает нагрузочные тесты и рекомендации по горизонтальному масштабированию.",
		ctaText: "Демо →",
		ctaLink: "#",
		icon: PhoenixIcon
	},
	{
		title: "Пайплайн продуктовой аналитики",
		techStack: "Node.js • PostHog • PostgreSQL • ClickHouse",
		description: "Сбор, пакетирование и воспроизведение событий; свойства пользователей, когортный анализ, дашборды для воронок, удержания и анализа функций.",
		ctaText: "Кейс →",
		ctaLink: "#",
		icon: PosthogIcon
	},
	{
		title: "Загрузка данных и ETL-процессы",
		techStack: "Python • Airflow • PostgreSQL • S3",
		description: "Регулярное извлечение, преобразование и загрузка данных с миграцией схем, проверками качества и партиционированными таблицами для аналитики.",
		ctaText: "Посмотреть репозиторий →",
		ctaLink: "#",
		icon: PythonIcon
	},
	{
		title: "Дизайн-система",
		techStack: "React • TypeScript • Tailwind CSS • Storybook",
		description: "Доступный UI-кит с токенами, темизацией и тестированием. Публикуется как версионированный пакет с changelog и документацией.",
		ctaText: "Документация →",
		ctaLink: "#",
		icon: TailwindIcon
	},
];
