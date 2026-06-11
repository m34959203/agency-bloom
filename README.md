# Agency Bloom — Микро-практика агентности

[![Build](https://img.shields.io/github/actions/workflow/status/m34959203/agency-bloom/ci.yml?branch=main)](https://github.com/m34959203/agency-bloom/actions)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Stack](https://img.shields.io/badge/stack-React%20%2B%20Vite%20%2B%20TypeScript-black)]()

> 3-минутная интерактивная практика для преодоления ступора и возврата чувства контроля: дыхание → фокусировка → действие.

## Проблема

Когда задач слишком много — наступает ступор. Человек знает, что надо работать, но не может начать. Классические тайм-менеджмент-инструменты не помогают в момент паралича — нужно что-то немедленное.

## Решение

Минималистичный веб-сервис «Агентность» проводит пользователя через 3 экрана за 3 минуты:
1. **Дыхание** — 3 цикла дыхания для снижения тревоги
2. **Фокус** — один вопрос: «Что можно сделать за пять минут?»
3. **Итог** — подтверждение выбора и выход к действию

## Архитектура

```
[ExperienceController]
  ├── EntryScreen       — вход, кнопка «Начать»
  ├── BreatheScreen     — анимированный дыхательный круг (3 цикла)
  ├── FocusScreen       — поле ввода одной задачи
  ├── AcknowledgeScreen — подтверждение
  └── ExitScreen        — выход / «Ещё раз»
```

Состояние управляется через `useExperience` hook, прогресс — `ProgressLine`.

## Quick Start

```bash
git clone https://github.com/m34959203/agency-bloom.git
cd agency-bloom
npm install
npm run dev
```

Открой http://localhost:8080.

## Стек

- **Frontend:** React 18, TypeScript, Vite
- **UI:** shadcn/ui, Radix UI, Tailwind CSS
- **Состояние:** React hooks (без внешнего стейт-менеджера)
- **Тесты:** Vitest

## Roadmap

- [x] 3-экранный флоу (дыхание → фокус → итог)
- [x] Анимированный дыхательный круг
- [x] Прогресс-бар
- [ ] Сохранение истории задач (localStorage)
- [ ] Кастомные дыхательные паттерны
- [ ] PWA для офлайн-использования
- [ ] Telegram Mini App версия

## Лицензия

[MIT](LICENSE)
