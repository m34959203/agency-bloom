# Как внести вклад в Agency Bloom

## Принципы

- Коммиты по стандарту Conventional Commits, описание на русском
- Ветки: `feat/`, `fix/`, `chore/`, `docs/`
- PR с описанием «что сделано» и «как проверить»

## Быстрый старт

```bash
git clone https://github.com/m34959203/agency-bloom.git
cd agency-bloom
npm install
npm run dev
```

## Структура проекта

- `src/components/screens/` — экраны флоу (Entry, Breathe, Focus, Acknowledge, Exit)
- `src/components/experience/` — переиспользуемые UI-компоненты практики
- `src/hooks/` — логика состояния (useExperience, useBreathing)
- `src/pages/` — роутинг страниц

## Стандарт коммитов

```
feat: добавить экран «Благодарность»
fix: исправить сброс таймера дыхания при повторном запуске
docs: обновить описание архитектуры
chore: обновить shadcn/ui до последней версии
```

Вопросы: открывай issue или пиши [@m34959203](https://github.com/m34959203).
