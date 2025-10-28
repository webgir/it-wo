import { getCollection } from 'astro:content';

export interface CycleItem {
  title: string;
  id: string;
  summary: string;
  date: string;
}

export interface StudioCycle {
  idea?: CycleItem;
  test?: CycleItem;
  form?: CycleItem;
}

/**
 * Получает текущий активный цикл студии (v2)
 * Фильтрует записи по критериям:
 * - cycle содержит ["мысль", "тест", "форма"]
 * - version === "v2"
 */
export async function getCurrentCycle(): Promise<StudioCycle> {
  const studioEntries = await getCollection('studio');
  
  // Фильтруем записи, которые входят в цикл v2
  const cycleEntries = studioEntries.filter(entry => {
    const { cycle, version } = entry.data;
    return (
      cycle &&
      cycle.length === 3 &&
      cycle.includes('мысль') &&
      cycle.includes('тест') &&
      cycle.includes('форма') &&
      version === 'v2'
    );
  });

  const result: StudioCycle = {};

  // Находим каждый элемент цикла по типу
  for (const entry of cycleEntries) {
    const item: CycleItem = {
      title: entry.data.title,
      id: entry.data.id,
      summary: entry.data.summary,
      date: entry.data.date,
    };

    switch (entry.data.type) {
      case 'concept':
        result.idea = item;
        break;
      case 'experiment':
        result.test = item;
        break;
      case 'form':
        result.form = item;
        break;
    }
  }

  return result;
}
