# Архитектура Agency Bloom

## Компоненты

```
[Vite SPA — React 18 + TypeScript]
│
├── App.tsx — провайдеры (QueryClient, Router, Tooltip)
│
└── pages/Index.tsx
      └── ExperienceController
            ├── useExperience()     — FSM: entry→breathe→focus→acknowledge→exit
            ├── ProgressLine        — прогресс-бар (fixed top)
            ├── MetaCorner          — угловые метки («Агентность» / ● )
            ├── ScreenTransition    — анимированные переходы между экранами
            └── Экраны:
                 ├── EntryScreen       — приветствие + кнопка «Начать»
                 ├── BreatheScreen     — useBreathing() + BreathCircle анимация
                 ├── FocusScreen       — prompt + textarea (одна задача)
                 ├── AcknowledgeScreen — подтверждение + задержанная кнопка
                 └── ExitScreen        — «Можно закрывать» + «Ещё раз»
```

## Стек

- **Framework:** Vite + React 18 + TypeScript
- **UI:** shadcn/ui (Radix UI) + Tailwind CSS
- **Роутинг:** React Router DOM
- **Запросы:** TanStack Query (для будущей интеграции API)
- **Тесты:** Vitest
