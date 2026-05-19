# Second Opinion

> Most AI tools in medicine return an answer. Second Opinion returns a *reasoning process*.

## The problem

Clinical reasoning is the hardest skill to teach in medicine. A diagnosis without explanation offers nothing to a student — or to a clinician who needs to defend it. Existing AI tools give you an output. They don't show their work.

When a seasoned clinician looks at a patient, they don't jump to a conclusion. They build a list of possibilities, weigh the evidence, update their thinking in real time, and ask the right questions. That process is what Second Opinion makes visible.

## What it does

Given a patient presentation, Second Opinion streams a structured differential diagnosis in real time — not as a chat response, but as a live reasoning trace with auditable steps:

- Generates 4-6 differential diagnoses with live probability estimates
- Animates probability bars as hypotheses are added and revised
- Surfaces supporting and refuting clinical evidence per hypothesis
- Lists recommended diagnostic investigations for each candidate
- Produces a conclusion with the leading diagnosis and next steps
- Asks 2-3 focused clarifying questions that would most narrow the differential
- Supports iterative refinement — answer the questions, rerun, watch the differential update
- Exports a clinical-quality PDF report with selectable text
- Compare two models side by side on the same case
- Full session history — last 10 runs saved locally, restorable in one click
- Dark and light mode with OS preference detection
- Full Simplified Chinese interface

Every step is visible as it happens. The model cannot output a bare answer — it must justify it, one structured event at a time.

## Live demo

[second-opinion-production.up.railway.app](https://second-opinion-production.up.railway.app)

## How it works

### Structured output over SSE

The backend instructs the model to respond exclusively in NDJSON — one typed JSON object per line. Each line is one of seven event types:

| Type | Purpose |
|---|---|
| `thought` | A natural-language reasoning step (1-2 sentences) |
| `hypothesis` | A new differential candidate with an initial probability |
| `update` | A probability revision for an existing hypothesis |
| `evidence` | A clinical finding that supports or refutes a hypothesis |
| `tests` | Recommended diagnostic investigations for a hypothesis |
| `conclusion` | Summary of the leading diagnosis and next steps |
| `question` | A clarifying question that would most narrow the differential |

The server streams this to the client over Server-Sent Events. The frontend parses each line as it arrives and renders it incrementally — hypothesis cards appear, probability bars animate, evidence tags attach — all live, as the model reasons.

### Prompt engineering as a schema enforcer

The model is given a strict output contract: field names, allowed types, required sequencing. The system prompt defines the schema, the allowed event order, and exact constraints (e.g. 4-6 hypotheses, exactly 2-3 questions after the conclusion). Malformed lines are discarded server-side before they reach the client.

### Model comparison

Two models can be run on the same case simultaneously. Each pane streams independently, building its own differential in parallel. When both complete, the results sit side by side — same patient, same moment, different reasoning paths. Each pane has its own PDF export.

### Iterative refinement

After the conclusion, a refine panel appears. The user can answer the model's clarifying questions or add any additional clinical detail. That input is appended to the original presentation and a new reasoning run begins. Each iteration brings the diagnosis closer.

### PDF export

Clicking Save PDF sends the rendered report HTML to a `/api/pdf` endpoint. The server renders it via Puppeteer and returns a binary blob, opened in a new browser tab. Text is fully selectable and layout is identical to what is shown on screen.

### Session history

Every completed run is saved to `localStorage` (capped at 10 sessions). The history panel shows each session with its timestamp, model, and leading diagnosis. Any session can be restored in one click — hypotheses, evidence, conclusion, and the full reasoning log are all rebuilt without re-running the model.

### Internationalisation

Full Simplified Chinese support is built in. The language instruction is injected into both the system prompt and the user message, constraining all text values in the JSON output to Chinese while keeping field names and type values in English. All dynamic UI labels are translated through a centralised key-value system.

## Technical stack

| Layer | Technology |
|---|---|
| Runtime | Node.js |
| Server | Express |
| Streaming | Server-Sent Events (SSE) |
| AI gateway | OpenRouter |
| PDF rendering | Puppeteer (headless Chrome) |
| Frontend | Vanilla JS, no framework, no build step |
| Hosting | Railway |

### Models

| Model | ID |
|---|---|
| MiniMax M2 (default) | `minimax/minimax-m2` |
| Gemini 2.0 Flash | `google/gemini-2.0-flash-001` |
| DeepSeek V4 Flash | `deepseek/deepseek-v4-flash:free` |

Any model accessible via OpenRouter can be swapped in with a one-line change in `server.js`.

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
