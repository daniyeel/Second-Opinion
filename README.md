# Second Opinion

> Most AI tools in medicine return an answer. Second Opinion returns a *reasoning process*.

## The problem

Clinical reasoning is the hardest skill to teach in medicine. A diagnosis without explanation offers nothing to a student — or to a clinician who needs to defend it. Existing AI tools give you an output. They don't show their work.

When a seasoned clinician looks at a patient, they don't jump to a conclusion. They build a list of possibilities, weigh the evidence, update their thinking in real time, and ask the right questions. That process is what Second Opinion makes visible.

## What it does

Given a patient presentation, Second Opinion streams a structured differential diagnosis in real time — not as a chat response, but as a live reasoning trace with auditable steps:

- Generates 4-6 differential diagnoses with live probability estimates
- Updates probabilities as supporting and refuting evidence is surfaced
- Produces a conclusion with the leading diagnosis and recommended next steps
- Asks focused clarifying questions that would most change the differential
- Exports a clinical-quality PDF report with selectable text

Every step is visible as it happens. The model cannot output a bare answer — it must justify it, one structured event at a time.

## Live demo

[second-opinion-production.up.railway.app](https://second-opinion-production.up.railway.app)

## How it works

### Structured output over SSE

The backend sends a strict prompt instructing the model to respond exclusively in NDJSON — one typed JSON object per line, nothing else. Each line is one of seven event types:

| Type | Purpose |
|---|---|
| `thought` | A natural-language reasoning step (1-2 sentences) |
| `hypothesis` | A new differential candidate with an initial probability |
| `update` | A probability revision for an existing hypothesis |
| `evidence` | A clinical finding that supports or refutes a hypothesis |
| `tests` | Recommended diagnostic investigations for a hypothesis |
| `conclusion` | Summary of the leading diagnosis and next steps |
| `question` | A clarifying question that would most narrow the differential |

The server streams this to the client over **Server-Sent Events**. The frontend parses each line as it arrives and renders it incrementally — hypothesis cards appear, probability bars animate, evidence tags attach — all live, as the model reasons.

### Why NDJSON over SSE

SSE gives us a persistent, low-overhead unidirectional stream without WebSockets. NDJSON lets us parse each token-complete line independently as soon as the model emits it — no waiting for the full response. The combination means the UI reacts within milliseconds of each reasoning step being generated.

### Prompt engineering as a schema enforcer

The model is not asked to "think about" a diagnosis. It is given a strict output contract: field names, allowed types, required sequencing. The system prompt defines the schema, the allowed event order, and the exact constraints (e.g. 4-6 hypotheses, exactly 2-3 questions after the conclusion). If the model deviates, malformed lines are discarded server-side before they reach the client.

This turns an open-ended language model into something closer to a structured reasoning engine.

### PDF export

Clicking Save PDF sends the rendered report HTML to a `/api/pdf` endpoint. The server spins up a headless Chromium instance via **Puppeteer**, loads the HTML with all its CSS, and calls `page.pdf()`. The resulting binary is returned to the client as a blob, which is opened in a new browser tab. Text is fully selectable. Layout is identical to what you see on screen.

### Iterative refinement

After the conclusion, a refine panel appears. The user can answer the model's clarifying questions or add any additional clinical detail. That input is appended to the original presentation and a new reasoning run begins — the differential updates with the new information. Each iteration brings the diagnosis closer.

## Technical stack

| Layer | Technology |
|---|---|
| Runtime | Node.js |
| Server | Express |
| Streaming | Server-Sent Events (SSE) |
| AI gateway | OpenRouter |
| Default model | MiniMax M2 |
| PDF rendering | Puppeteer (headless Chrome) |
| Frontend | Vanilla JS, no framework, no build step |
| Hosting | Railway |

### Model selection

Three models are available via OpenRouter:

- **MiniMax M2** (default) — strong reasoning, low latency, cost-efficient
- **Gemini 2.0 Flash** — fast, reliable schema adherence
- **Claude 3.5 Haiku** — precise and concise

The architecture is model-agnostic. Any model accessible via OpenRouter can be swapped in with a one-line change.

### Internationalisation

Full Simplified Chinese support is built in. The language instruction is injected into both the system prompt and the user message, constraining all text values in the JSON output to Chinese while keeping field names and type values in English. The UI switches language via `localStorage`.

## Running locally

```bash
git clone https://github.com/daniyeel/Second-Opinion.git
cd Second-Opinion
npm install
echo "OPENROUTER_API_KEY=your_key_here" > .env
npm start
```

Open [http://localhost:3000](http://localhost:3000). Get an API key at [openrouter.ai](https://openrouter.ai).

---

> Educational demonstration only. Not medical advice. All scenarios are synthetic.
