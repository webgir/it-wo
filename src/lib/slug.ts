const RU_MAP: Record<string, string> = {
  '\u0430': 'a', // Cyrillic a
  '\u0431': 'b', // Cyrillic be
  '\u0432': 'v', // Cyrillic ve
  '\u0433': 'g', // Cyrillic ge
  '\u0434': 'd', // Cyrillic de
  '\u0435': 'e', // Cyrillic ie
  '\u0451': 'yo', // Cyrillic io
  '\u0436': 'zh', // Cyrillic zhe
  '\u0437': 'z', // Cyrillic ze
  '\u0438': 'i', // Cyrillic i
  '\u0439': 'y', // Cyrillic short i
  '\u043a': 'k', // Cyrillic ka
  '\u043b': 'l', // Cyrillic el
  '\u043c': 'm', // Cyrillic em
  '\u043d': 'n', // Cyrillic en
  '\u043e': 'o', // Cyrillic o
  '\u043f': 'p', // Cyrillic pe
  '\u0440': 'r', // Cyrillic er
  '\u0441': 's', // Cyrillic es
  '\u0442': 't', // Cyrillic te
  '\u0443': 'u', // Cyrillic u
  '\u0444': 'f', // Cyrillic ef
  '\u0445': 'h', // Cyrillic kha
  '\u0446': 'c', // Cyrillic tse
  '\u0447': 'ch', // Cyrillic che
  '\u0448': 'sh', // Cyrillic sha
  '\u0449': 'sch', // Cyrillic shcha
  '\u044a': '', // Cyrillic hard sign
  '\u044b': 'y', // Cyrillic y
  '\u044c': '', // Cyrillic soft sign
  '\u044d': 'e', // Cyrillic e
  '\u044e': 'yu', // Cyrillic yu
  '\u044f': 'ya', // Cyrillic ya
};

function transliterate(input: string): string {
  return Array.from(input)
    .map((char) => RU_MAP[char.toLowerCase()] ?? char)
    .join('');
}

export function slugifyTag(input: string): string {
  if (!input) return '';

  const transliterated = transliterate(String(input).normalize('NFKD'));
  return transliterated
    .toLowerCase()
    .replace(/[\u0300-\u036f]/g, '') // drop combining marks introduced by NFKD
    .replace(/[^a-z0-9\s-]/g, ' ')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}
