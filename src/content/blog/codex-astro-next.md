---
title: "Как Codex помогает перенести проект между Astro и Next.js"
description: "Опыт пошаговой миграции компонентов, когда Codex держит в фокусе архитектуру, а разработчик принимает ключевые решения."
pubDate: 2025-10-17
heroImage: https://it-wo.ru/images/blog/ai/codex-astro-next/computer-cotex.jpg
category: frontend
tags:
  - Astro
  - Next.js
  - Codex
  - AI
  - Refactoring
slug: codex-astro-next
---

Иногда сидишь над проектом, смотришь на дерево папок — и кажется, что оно растёт само.  
Компоненты множатся, как кролики.  
Импорты лезут из всех щелей.  
А `Header` вдруг затаил обиду на `Layout` и теперь оба делают вид, что они не знакомы.

Ты открываешь консоль — там всё как на дне рождения у sysadmin’а: весело, но с тревогой.

И вот в такие минуты Codex появляется — не с мечом, не на коне,  
а тихо, как тот самый старший разработчик, который не орёт, а понимает.  
И говорит:

> «А давай-ка аккуратно.»

<br>

---

<br>

### Codex: не фокусник, а нормальный парень

<br>

Codex не обещает чудес.  
Он не зовёт тебя в Долину Искусственного Разума, где всё красиво и по best practice.

Он просто сидит рядом.  
Условно, в тапочках.  
И если ты после полуночи забыл закрыть тег или вставил импорт в функцию —  
он поправит. Без осуждения. Без возгласа “Что это за ад?!”.

Он не волшебник.  
Он просто никогда не пьёт энергетики и не идёт спать злым.

<br>

---

<br>

### Как Codex читает твой проект

<br>


Codex видит не файл. Он видит **пейзаж**.

Ты открыл `PostCard.astro`,  
а он уже вспомнил, что где-то рядом живёт `PostMeta.astro`,  
а ещё `FormattedDate.astro`,  
а ещё ты забыл импортировать `Image` из `astro:assets`.

И он — не в панике. Он просто добавил.  
И тихо сказал:

> “Кстати, тег бы закрыть. Это не угроза, просто факт.”

Вот бы в жизни люди так общались.

<br>

---

<br>

### Первая практика: рефакторинг в Astro

<br>


Ты уже четвёртый день откладываешь:

> “Надо бы вынести повторяющийся блок… ну завтра.”

Codex замечает.  
Молча.  
Создаёт `PostMeta.astro`, чётко чинит импорты.

И вот структура уже как у взрослого — аккуратная, минималистичная,  
и ты начинаешь подозревать, что, возможно, не всё так плохо в этом мире.

Он не просто чинит. Он учит.  
Как дед, который не читает лекцию, а показывает, как правильно держать нож, чтобы не порезаться.

<br>

---

<br>

### Вторая практика: компонент в Next.js


<br>


Ты пишешь в комментарии:

```
// Create a responsive product card with image, title and price using Tailwind.
```


<br>


А Codex сидит, кивает и как будто шепчет:

> “Сейчас сделаем, не волнуйся.”

Через несколько секунд у тебя — готовый компонент.  
И адаптив есть. И dark mode.  
И `gap-4`, `rounded-md`, `hover:scale-105` — всё, как любит фронтендер, у которого отпуск через три недели.

Он чувствует, что ты работаешь в **Next.js**.  
Знает, что у тебя **Tailwind**.  
И пишет так, как будто вы вместе когда-то собирали стартап.

<br>

---

<br>

### Третья практика: оптимизация, или «тут бы прибраться»

<br>


Codex любит чистоту.  
Такую, как в комнате перед приездом мамы.

Он говорит:

- “Может, `dynamic import` сюда вставим?”
    
- “`useEffect` у тебя крутится по кругу — это ты хотел, или просто мысли путаются?”
    

Причём всё — с уважением.

> “Я не говорю, что это ошибка. Возможно, это смелый ход. Просто обратил внимание.”

Вот бы люди в интернете так обсуждали код.  
Или хотя бы новости.

<br>

---

<br>


### Codex как переводчик с программистского на человеческий


<br>

Ты смотришь на `handleCacheUpdate`.  
Пытаешься вспомнить, что ты там делал два дня назад.  
Ничего. Пустота.

Пишешь Codex’у:

> “Поясни, что это делает.”

Он не грубит, не шутит про твою память.  
Он пишет:

> “Эта функция обновляет кэш после изменений и сообщает клиенту.”

Добавляет комментарий.  
Спокойно.  
Как будто бы он не AI, а просто хороший коллега с понятным почерком.

<br>

---

<br>

### Командная польза, или “Codex сказал — и спор затих”

<br>


Codex стал аргументом.  
Раньше:

> “А давай так, я где-то читал…”

Теперь:

> “Codex предложил вот так.”

И все такие:

> “А, ну тогда да.”

Новички читают его подсказки и перестают бояться проекта.  
Тимлид не рыдает на ревью.  
А проект, кажется, даже стал вести себя прилично.

---

### Codex как наставник без часов и кофе

Он не тянет тебя за руку.  
Он просто рядом.

Как тот мудрый сеньор, у которого нет настроения объяснять в десятый раз —  
но он всё равно объяснит. Только мягче.

Он не заменяет опыт — он делает его **менее болезненным**.

---

<br>

### Финал: Codex — не бог, не гений, не волшебник. Просто вежливый интеллект


<br>


Codex не маг.  
Он не читает мысли.  
Но если ты ошибся — он поправит.  
Если ты забыл — он вспомнит.  
Если ты психуешь в 2:47 ночи — он не ответит “сам дурак”, а просто подскажет, что запятая в другом месте.

Пока мы спорим, можно ли доверять ИИ,  
Codex просто чинит импорты и не спрашивает, почему ты снова забыл `return`.

Я выбираю работать с ним.  
Хотя бы потому, что он ни разу не сказал:

> “Ну я же говорил.”

<br>
<br>

### Связанное чтение

- [Сознание соавторства с ИИ: почему Codex усиливает разработчика](/blog/co)
- [Codex и VS Code: быстрый старт и рабочие сценарии](/blog/codex-vscode-introduction)
- [Codex глазами дизайнера интерфейсов](/blog/codex-dizainer-ai-sozdaet-interfeisy)
> [!failure]- Failure 
>   InsufficientQuotaError: 429 You exceeded your current quota, please check your   plan and billing details. For more information on this error, read the docs:   https://platform.openai.com/docs/guides/error-codes/api-errors.
>   
>   Troubleshooting URL: https://js.langchain.com/docs/troubleshooting/errors/MODE  L_RATE_LIMIT/
>   
>   - plugin:obsidian-textgenerator-plugin:60 Object.i5n [as onFailedAttempt]
>     plugin:obsidian-textgenerator-plugin:60:53283
>   
>   - plugin:obsidian-textgenerator-plugin:22 XZ.eval [as _fn]
>     plugin:obsidian-textgenerator-plugin:22:66613
>   
>  
> [!failure]- Failure 
>   InsufficientQuotaError: 429 You exceeded your current quota, please check your   plan and billing details. For more information on this error, read the docs:   https://platform.openai.com/docs/guides/error-codes/api-errors.
>   
>   Troubleshooting URL: https://js.langchain.com/docs/troubleshooting/errors/MODE  L_RATE_LIMIT/
>   
>   - plugin:obsidian-textgenerator-plugin:60 Object.i5n [as onFailedAttempt]
>     plugin:obsidian-textgenerator-plugin:60:53283
>   
>   - plugin:obsidian-textgenerator-plugin:22 XZ.eval [as _fn]
>     plugin:obsidian-textgenerator-plugin:22:66613
>   
>  
> [!failure]- Failure 
>   TypeError: Failed to fetch
>   
>   - plugin:obsidian-textgenerator-plugin:571 yhI
>     plugin:obsidian-textgenerator-plugin:571:10081
>   
>   - yhI.next
>   
>   - plugin:obsidian-textgenerator-plugin:572 orn
>     plugin:obsidian-textgenerator-plugin:572:155
>   
>   - orn.next
>   
>   - plugin:obsidian-textgenerator-plugin:572 xMe._streamResponseChunks
>     plugin:obsidian-textgenerator-plugin:572:6143
>   
>   - plugin:obsidian-textgenerator-plugin:572 async xMe._call
>     plugin:obsidian-textgenerator-plugin:572:6567
>   
>   - async Promise.all
>   
>   - plugin:obsidian-textgenerator-plugin:542 async xMe._generate
>     plugin:obsidian-textgenerator-plugin:542:40538
>   
>   - plugin:obsidian-textgenerator-plugin:542 async xMe._generateUncached
>     plugin:obsidian-textgenerator-plugin:542:38022
>   
>   - plugin:obsidian-textgenerator-plugin:542 async xMe.invoke
>     plugin:obsidian-textgenerator-plugin:542:35825
>   
>  

> [!failure]- Failure 
>   TypeError: Failed to fetch
>   
>   - plugin:obsidian-textgenerator-plugin:571 yhI
>     plugin:obsidian-textgenerator-plugin:571:10081
>   
>   - yhI.next
>   
>   - plugin:obsidian-textgenerator-plugin:572 orn
>     plugin:obsidian-textgenerator-plugin:572:155
>   
>   - orn.next
>   
>   - plugin:obsidian-textgenerator-plugin:572 xMe._streamResponseChunks
>     plugin:obsidian-textgenerator-plugin:572:6143
>   
>   - plugin:obsidian-textgenerator-plugin:572 async xMe._call
>     plugin:obsidian-textgenerator-plugin:572:6567
>   
>   - async Promise.all
>   
>   - plugin:obsidian-textgenerator-plugin:542 async xMe._generate
>     plugin:obsidian-textgenerator-plugin:542:40538
>   
>   - plugin:obsidian-textgenerator-plugin:542 async xMe._generateUncached
>     plugin:obsidian-textgenerator-plugin:542:38022
>   
>   - plugin:obsidian-textgenerator-plugin:542 async xMe.invoke
>     plugin:obsidian-textgenerator-plugin:542:35825
>   
>  

> [!failure]- Failure 
>   TypeError: Failed to fetch
>   
>   - plugin:obsidian-textgenerator-plugin:571 yhI
>     plugin:obsidian-textgenerator-plugin:571:10081
>   
>   - yhI.next
>   
>   - plugin:obsidian-textgenerator-plugin:572 orn
>     plugin:obsidian-textgenerator-plugin:572:155
>   
>   - orn.next
>   
>   - plugin:obsidian-textgenerator-plugin:572 xMe._streamResponseChunks
>     plugin:obsidian-textgenerator-plugin:572:6143
>   
>   - plugin:obsidian-textgenerator-plugin:572 async xMe._call
>     plugin:obsidian-textgenerator-plugin:572:6567
>   
>   - async Promise.all
>   
>   - plugin:obsidian-textgenerator-plugin:542 async xMe._generate
>     plugin:obsidian-textgenerator-plugin:542:40538
>   
>   - plugin:obsidian-textgenerator-plugin:542 async xMe._generateUncached
>     plugin:obsidian-textgenerator-plugin:542:38022
>   
>   - plugin:obsidian-textgenerator-plugin:542 async xMe.invoke
>     plugin:obsidian-textgenerator-plugin:542:35825
>   
>  

> [!failure]- Failure 
>   TypeError: Failed to fetch
>   
>   - plugin:obsidian-textgenerator-plugin:571 yhI
>     plugin:obsidian-textgenerator-plugin:571:10081
>   
>   - yhI.next
>   
>   - plugin:obsidian-textgenerator-plugin:572 orn
>     plugin:obsidian-textgenerator-plugin:572:155
>   
>   - orn.next
>   
>   - plugin:obsidian-textgenerator-plugin:572 xMe._streamResponseChunks
>     plugin:obsidian-textgenerator-plugin:572:6143
>   
>   - plugin:obsidian-textgenerator-plugin:572 async xMe._call
>     plugin:obsidian-textgenerator-plugin:572:6567
>   
>   - async Promise.all
>   
>   - plugin:obsidian-textgenerator-plugin:542 async xMe._generate
>     plugin:obsidian-textgenerator-plugin:542:40538
>   
>   - plugin:obsidian-textgenerator-plugin:542 async xMe._generateUncached
>     plugin:obsidian-textgenerator-plugin:542:38022
>   
>   - plugin:obsidian-textgenerator-plugin:542 async xMe.invoke
>     plugin:obsidian-textgenerator-plugin:542:35825
>   
>  
