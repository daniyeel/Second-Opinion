# Second Opinion

A clinical reasoning educator that walks through differential diagnosis step by step — showing not just *what* the diagnosis is, but *why*.

## What it does

Given a patient presentation, Second Opinion streams a structured reasoning trace in real time:

- Generates 4-6 differential diagnoses with live probability estimates
- Updates probabilities as supporting and refuting evidence is surfaced
- Produces a conclusion with the leading diagnosis and next steps
- Asks clarifying questions to guide further workup
- Exports a clinical-quality PDF report (text-selectable, Puppeteer-rendered)
- Supports English and Simplified Chinese

The output schema is strictly structured (NDJSON) so every reasoning step is auditable — not a black-box answer, but a transparent trace a clinician or student can follow.

## Demo

Try it live: [second-opinion-production.up.railway.app](https://second-opinion-production.up.railway.app)

## Tech stack

- **Backend**: Node.js, Express, Server-Sent Events for streaming
- **AI**: [OpenRouter](https://openrouter.ai) — default model is MiniMax M2, with Gemini 2.0 Flash and Claude 3.5 Haiku available
- **PDF**: Puppeteer (headless Chrome) renders the report server-side
- **Frontend**: Vanilla JS, no framework, no build step

## Running locally

```bash
# 1. Clone
git clone https://github.com/daniyeel/Second-Opinion.git
cd Second-Opinion

# 2. Install dependencies (first run downloads Chromium for Puppeteer)
npm install

# 3. Add your OpenRouter API key
echo "OPENROUTER_API_KEY=your_key_here" > .env

# 4. Start
npm start
```

Open [http://localhost:3000](http://localhost:3000).

Get an API key at [openrouter.ai](https://openrouter.ai).

## Why this exists

Most AI tools in medicine return an answer. Second Opinion returns a *reasoning process* — one that can be audited, questioned, and refined. The goal is education: showing how a clinician thinks, not replacing the clinician.

> Educational demonstration only. Not medical advice. All scenarios are synthetic.
