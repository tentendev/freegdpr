# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Install dependencies
npm install

# Run development server (port 3000)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Environment Setup

Set `OPENROUTER_API_KEY` in `.env.local` to your OpenRouter API key.

## Architecture

**FreeGDPR** is a React + TypeScript SPA that generates AI-powered privacy policies using OpenRouter (xiaomi/mimo-v2-flash:free model).

### Core Flow

1. User fills multi-step form (`App.tsx` manages steps 0-3)
2. Form data stored in `PolicyFormData` interface (`types.ts`)
3. On submit, `generatePrivacyPolicyStream()` streams Gemini response
4. `PolicyResult` component renders markdown with copy/download/share options

### Key Files

- `App.tsx` - Main component with form wizard, state management, and page routing
- `types.ts` - `PolicyFormData` interface and `AppType` enum defining all form fields
- `services/geminiService.ts` - OpenRouter API integration with streaming response
- `components/PolicyResult.tsx` - Generated policy display with markdown rendering

### State Management

- Form data persists to `localStorage` under key `freegdpr_form_data`
- `GenerationStatus` enum tracks: `'idle' | 'generating' | 'success' | 'error'`
- AI thinking animation cycles through `aiThinkingSteps` during generation

### Styling

Uses Tailwind CSS with custom `brand-*` color classes. All styles are inline via Tailwind utilities.
