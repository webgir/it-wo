// src/lib/slug.ts
const RU_MAP: Record<string, string> = {
  а:'a', б:'b', в:'v', г:'g', д:'d', е:'e', ё:'yo', ж:'zh', з:'z', и:'i', й:'i',
  к:'k', л:'l', м:'m', н:'n', о:'o', п:'p', р:'r', с:'s', т:'t', у:'u', ф:'f',
  х:'h', ц:'c', ч:'ch', ш:'sh', щ:'sch', ъ:'', ы:'y', ь:'', э:'e', ю:'yu', я:'ya'
};

export function slugifyTag(input: string): string {
  const s = String(input ?? '')
    .toLowerCase()
    .trim()
    // транслитерация кириллицы
    .replace(/[а-яё]/g, ch => RU_MAP[ch] ?? '')
    // допускаем латиницу, цифры, пробел и дефис
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')     // пробелы → дефисы
    .replace(/-+/g, '-')      // схлопываем дефисы
    .replace(/^-|-$/g, '');   // убираем крайние дефисы
  return s; // пустые строки дальше фильтруем в getStaticPaths()
}
