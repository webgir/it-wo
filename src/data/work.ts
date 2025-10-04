import jobIconRaw from '../assets/icons/job-title-icon.svg?raw';
import companyIconRaw from '../assets/icons/company-icon.svg?raw';
import locationIconRaw from '../assets/icons/location-icon.svg?raw';
import { sanitizeToOutline } from '../lib/svg';

export const workIcons = {
  job: sanitizeToOutline(jobIconRaw, 15),
  company: sanitizeToOutline(companyIconRaw, 15),
  location: sanitizeToOutline(locationIconRaw, 15),
};

export const work = [
  {
    title: "Ведущий инженер-разработчик",
    company: "Acme Cloud",
    region: "США",
    description:
      "Руководил проектированием и внедрением мультиарендной платформы, разбил монолит на сервисы, сократил p95-задержку на 40 %, определил SLO и дежурства, наставлял младших инженеров.",
    technologies: [
      "TypeScript",
      "Node.js",
      "React",
      "PostgreSQL",
      "Redis",
      "AWS",
      "Docker",
      "Kubernetes",
      "Terraform",
      "GraphQL",
    ],
  },
  {
    title: "Ведущий инженер (Staff Software Engineer)",
    company: "FinchPay",
    region: "Глобально",
    description:
      "Разработал событийно-ориентированные платёжные сервисы с идемпотентностью и повторными попытками, внедрил Kafka для асинхронной обработки, реализовал версионирование API и систему наблюдаемости с логированием и трассировкой.",
    technologies: [
      "TypeScript",
      "NestJS",
      "Kafka",
      "PostgreSQL",
      "Redis",
      "gRPC",
      "OpenTelemetry",
      "AWS",
    ],
  },
  {
    title: "Старший фронтенд-инженер",
    company: "Insight Analytics",
    region: "Европа",
    description:
      "Отвечал за дизайн-систему и стратегию SSR/ISR, улучшил показатели Core Web Vitals (LCP/INP) до зелёных зон, создал доступные UI-компоненты с тестами и Storybook-покрытием.",
    technologies: [
      "React",
      "Next.js",
      "Astro",
      "Tailwind CSS",
      "Playwright",
      "Vitest",
    ],
  },
  {
    title: "Инженер-разработчик",
    company: "LaunchPad",
    region: "Бразилия",
    description:
      "Создавал MVP-продукты под ключ: проектировал REST/GraphQL API, настроил CI/CD с предпросмотрами, внедрил feature-флаги и мигрировал данные в Postgres.",
    technologies: [
      "Node.js",
      "Express",
      "GraphQL",
      "Supabase",
      "PostgreSQL",
      "GitHub Actions",
      "Docker",
    ],
  },
];

export type WorkItem = (typeof work)[number];
