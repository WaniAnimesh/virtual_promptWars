# Election Compass - India

## Overview
Election Compass is an interactive, civic-tech web application designed to simplify the Indian election process for voters. It breaks down complex electoral procedures into easy-to-understand stages, provides targeted voter checklists based on user personas, and features a smart AI assistant to answer personalized queries.

---

## 1. Chosen Vertical
**GovTech / Civic Tech & Education**
The application aims to improve civic engagement and voter awareness by demystifying the Election Commission of India's (ECI) processes. It serves as an accessible educational tool for first-time voters, senior citizens, and relocated voters.

---

## 2. Approach and Logic
The core philosophy is "simplification without losing accuracy."
- **Structured Learning:** The election process is divided into a chronological timeline (Announcement, Registration, Campaign, Polling, Results).
- **Persona-Driven Guidance:** Instead of a generic checklist, the app introduces **Voter Personas** (e.g., First-Time Voter, Senior Citizen 85+, Relocated Voter). This allows the application to provide logical, context-aware decision-making paths. For example, a senior citizen is guided towards Form 12D for home voting, while a relocated voter is guided to Form 8.
- **Interactive AI Support:** A smart assistant powered by Google's Gemini models handles edge cases and specific user questions that aren't covered in the static UI, ensuring dynamic and real-world usability.

---

## 3. How the Solution Works
- **Frontend Architecture:** Built with React, TypeScript, and Tailwind CSS. The app uses a responsive, sidebar-based layout tailored for both desktop and mobile exploration.
- **State Management:** React hooks (`useState`) manage the active views (Overview, Timeline, Checklist, State Info, Assistant) and modal states for persona-specific steps.
- **Data Layer:** Election rules, state-by-state nuances, and FAQ data are structured cleanly in a central `electionData.ts` file. 
- **Smart Assistant:** The `AssistantChat` component communicates with the `geminiService.ts`. When a user asks a question, the service injects the local `electionData` into the system prompt. This context-grounding ensures the AI provides accurate, India-specific electoral information rather than generic global election data.

---

## 4. Effective Use of Google Services
**Google Gemini AI (`@google/genai` SDK):** 
The application deeply integrates the Gemini 2.5 Flash model to act as a domain-specific expert. 
- **Contextual Grounding:** We pass the structured election stages and state-specific rules directly into the Gemini prompt context.
- **Prompt Engineering:** The model is strictly instructed to answer based on the Election Commission of India's rules, correcting common misconceptions (e.g., clarifying that India does not have online voting, only postal ballots for specific groups). This demonstrates building a smart, dynamic assistant with logical constraints based on user context.

---

## 5. Assumptions Made
1. **Target Audience:** The user is an Indian citizen navigating the Election Commission of India (ECI) guidelines.
2. **Connectivity:** The user has an active internet connection to communicate with the Gemini API.
3. **Environment:** The app is running in an environment where `GEMINI_API_KEY` is securely injected into the build/runtime environment.
4. **Generalization:** While the app covers specific states (Maharashtra, UP, Delhi, etc.), election rules can occasionally have micro-level or localized changes. The app assumes the ECI's general overarching rules apply unless specified.

---

## 6. Alignment with Evaluation Focus Areas
- **Code Quality:** The codebase is heavily modularized into functional React components (`Overview`, `TimelineView`, `VoterChecklist`, `AssistantChat`). TypeScript ensures type safety and maintainability.
- **Security:** API keys are never hardcoded. The Gemini API key is securely loaded via environment variables (`process.env.GEMINI_API_KEY`). The assistant is sandboxed via prompt engineering to stay on topic.
- **Efficiency:** The app uses conditional rendering to ensure only the active view is loaded into the DOM. The Gemini service uses the fast `gemini-2.5-flash` model for optimal response times. We use Tailwind for utility-based, low-overhead styling.
- **Accessibility:** 
  - The UI uses high-contrast colors (`#01696f` on light backgrounds).
  - Semantic HTML elements.
  - Clear, legible typography using the 'Satoshi' font.
  - Mobile-responsive design with touch-friendly targets.
- **Testing (Manual Validation):** The modular data structure allows for easy unit testing of the AI context generation. UI transitions and responsive layouts have been validated across screen sizes.
