# Second Opinion

> Most AI tools in medicine return an answer. Second Opinion returns a *reasoning process*.

## The problem

Clinical reasoning is the hardest skill to teach in medicine. A diagnosis without explanation offers nothing to a student — or to a clinician who needs to defend it. Existing AI tools give you an output. They don't show their work.

## What Second Opinion does

Given a patient presentation, Second Opinion streams a structured differential diagnosis in real time — not as a chat response, but as a live reasoning trace with auditable steps:

- Surfaces 4-6 hypotheses with probability estimates that update as evidence is weighed
- Shows which clinical features support or refute each hypothesis
- Produces a conclusion with a leading diagnosis and recommended workup
- Asks focused clarifying questions that would most change the differential
- Exports a clinical-quality PDF report with selectable text

Every step is transparent. The model can't just output an answer — it must justify it in a defined schema, one event at a time.

## Live demo

[second-opinion-production.up.railway.app](https://second-opinion-production.up.railway.app)

## Technical approach

Responses are streamed as NDJSON over Server-Sent Events. Each line is a typed event (`hypothesis`, `evidence`, `update`, `conclusion`, `question`) that the frontend renders incrementally. The output schema is enforced via prompt engineering — the model is constrained to produce structured reasoning, not free text.

PDF export is handled server-side by Puppeteer, producing a document a clinician could hand to a student.

Default model is **MiniMax M2** via OpenRouter, with Gemini 2.0 Flash and Claude 3.5 Haiku available. Full Simplified Chinese support is built in.

## Stack

Node.js · Express · SSE · Puppeteer · OpenRouter · Vanilla JS
