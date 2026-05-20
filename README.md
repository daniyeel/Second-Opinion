<div align="center">
  <img src="public/logo.png" alt="Second Opinion" width="72" height="72" />
  <h1>Second Opinion</h1>
  <p><strong>Real-time AI clinical reasoning. Transparent, auditable, educational.</strong></p>

  <p>
    <a href="https://second-opinion-production.up.railway.app"><img src="https://img.shields.io/badge/Live%20Demo-Railway-6366f1?style=flat-square&logo=railway" alt="Live demo" /></a>
    <img src="https://img.shields.io/badge/Node.js-18%2B-339933?style=flat-square&logo=node.js" alt="Node.js" />
    <img src="https://img.shields.io/badge/License-MIT-blue?style=flat-square" alt="License" />
    <img src="https://img.shields.io/badge/Models-OpenRouter-ff6b35?style=flat-square" alt="OpenRouter" />
  </p>

  <p>
    <a href="https://second-opinion-production.up.railway.app">View Demo</a> ·
    <a href="#getting-started">Get Started</a> ·
    <a href="#architecture">How It Works</a>
  </p>
</div>

---

## The problem

Most AI tools in medicine return a diagnosis. Second Opinion returns the *reasoning process behind it*.

Clinical reasoning is the hardest skill to teach. A diagnosis without explanation is useless to a student and indefensible to a clinician. When an experienced physician evaluates a patient, they don't jump to a conclusion: they build a list of possibilities, weigh the evidence, revise their thinking in real time, and ask the right questions. That process has never been made visible. Until now.

## What it does

Second Opinion takes a free-text patient presentation and streams a live, structured differential diagnosis: not as a chat response, but as a typed reasoning trace with auditable steps.

| | |
|---|---|
| **Differential** | 4–6 hypotheses with live probability estimates, updated as evidence arrives |
| **Evidence** | Supporting and refuting clinical findings surfaced per hypothesis |
| **Investigations** | Recommended diagnostic workup listed for each candidate |
| **Conclusion** | Leading diagnosis with next steps for further workup |
| **Clarifying questions** | 4–5 targeted questions that would most narrow the differential |
| **Refinement** | Answer the questions and rerun. Watch the differential update. |
| **Comparison** | Run two models on the same case simultaneously, side by side |
| **PDF export** | Clinical-quality report with selectable text, identical to the on-screen view |
| **Session history** | Last 10 runs saved locally, restorable in one click, deletable per entry |
| **Dark mode** | Full dark/light theme with OS preference detection |
| **Multilingual** | Complete Simplified Chinese interface, including all model output |

Every step is visible as it happens. The model cannot output a bare answer; it must justify each decision, one structured event at a time.

---

## Architecture

### Structured output over SSE

The system prompt instructs the model to respond exclusively in **NDJSON**: one typed JSON object per line, nothing else. Seven event types are defined: `thought`, `hypothesis`, `update`, `evidence`, `tests`, `conclusion`, and `question`. The server streams these to the client over **Server-Sent Events**. The frontend parses each line the moment it arrives; hypothesis cards appear, probability bars animate, evidence tags attach, all in real time.

### Prompt engineering as a schema enforcer

The model is not asked to "think about" a diagnosis. It is given a strict output contract with required field names, sequencing rules, and cardinality constraints (e.g. 4–6 hypotheses, exactly 4–5 questions after the conclusion). Malformed lines are silently discarded server-side before reaching the client. This turns an open-ended language model into a structured reasoning engine.

### Model comparison

Two models stream in parallel via `Promise.all`, each building its own differential independently. When both complete, results sit side by side: same patient, same moment, different reasoning paths. Each pane has its own PDF export.

### Iterative refinement

After the conclusion, the user can answer the model's clarifying questions or add new clinical detail. The input is appended to the original presentation and a new reasoning run begins. The differential updates with the new information.

### PDF export

`/api/pdf` receives the rendered report HTML, spins up a headless Chromium instance via Puppeteer, and calls `page.pdf()`. The result is returned as a binary blob and opened in a new browser tab. Text is fully selectable; layout is pixel-identical to the on-screen view.

---

## Getting started

### Prerequisites

- Node.js 18+
- An [OpenRouter](https://openrouter.ai) API key

### Installation

```bash
git clone https://github.com/daniyeel/second-opinion.git
cd second-opinion
npm install
```

### Configuration

```bash
echo "OPENROUTER_API_KEY=your_key_here" > .env
```

### Run

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000).

---

## Tech stack

| Layer | Technology |
|---|---|
| Runtime | Node.js |
| Server | Express |
| Streaming | Server-Sent Events (SSE) |
| AI gateway | OpenRouter |
| PDF rendering | Puppeteer (headless Chromium) |
| Frontend | Vanilla JS (no framework, no build step) |
| Hosting | Railway |

## Models

| Model | ID | Notes |
|---|---|---|
| MiniMax M2 | `minimax/minimax-m2` | Default. Strong reasoning, low latency |
| Gemini 2.0 Flash | `google/gemini-2.0-flash-001` | Fast, reliable schema adherence |
| DeepSeek V4 Flash | `deepseek/deepseek-v4-flash:free` | Free tier. 284B MoE, 1M context |
| DeepSeek R1 | `deepseek/deepseek-r1-0528:free` | Free tier. Reasoning model, 671B, explicit chain-of-thought |
| Qwen3 235B | `qwen/qwen3-235b-a22b:free` | Free tier. Alibaba 235B MoE, 131K context |
| GPT-4o | `openai/gpt-4o` | OpenAI flagship, 128K context |

Any model on OpenRouter can be swapped in with a one-line change in `server.js`.

---

## Project structure

```
second-opinion/
├── server.js          # Express server — SSE streaming, PDF endpoint, model routing
├── public/
│   ├── index.html     # HTML skeleton and theme-init script
│   ├── style.css      # All styles — design tokens, components, dark mode, responsive
│   ├── app.js         # All client logic — i18n, streaming, rendering, PDF export
│   └── logo.png       # Brand mark
├── package.json
└── .env               # OPENROUTER_API_KEY (not committed)
```

No build step. No bundler. No framework.

## License

MIT

---

<div align="center">
  <sub>Educational use only. Not for clinical or diagnostic purposes.</sub>
</div>
# second-opinion
