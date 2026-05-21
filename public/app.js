      const TRANSLATIONS = {
        en: {
          brandTag: "Clinical AI reasoning",
          savePDF: "Save PDF",
          heroTitle: "Watch an AI work through a differential.",
          heroSubtitle: "Describe a patient. Watch the AI reason through it, step by step.",
          feat1Title: "Describe the case.",
          feat1Body: " Type a free-text patient presentation, or choose one of the built-in presets.",
          feat2Title: "Watch the reasoning unfold.",
          feat2Body: " The model surfaces candidate diagnoses, weighs supporting and refuting evidence, and continuously updates its differential as new information arrives — exactly as a clinician reasons through a case.",
          feat3Title: "Refine and interrogate.",
          feat3Body: " Answer the model's clarifying questions or add new clinical findings. The model reruns its reasoning with the updated information.",
          inputLabel: "Patient presentation",
          inputPlaceholder: "Describe a patient presentation...",
          exampleCases: "Example cases", modelLabel: "Model:",
          beginReasoning: "Begin reasoning", beginReasoningAria: "Begin reasoning",
          runAgain: "Run again", statusReasoning: "Reasoning", statusComplete: "Complete",
          reasoningEllipsis: "Reasoning…",
          leadingDiagnosis: "Leading diagnosis",
          historyEmpty: "No sessions yet.<br>Complete a reasoning run to save it here.",
          historyBtn: "History", sessionHistory: "Session History",
          clearHistory: "Clear all", clearHistoryConfirm: "Clear all history?",
          clearHistoryYes: "Yes, clear", clearHistoryCancel: "Cancel",
          compareBtn: "Compare", singleBtn: "Single",
          refineDiagnosis: "Refine Diagnosis",
          refinePlaceholder: "Answer the questions above, or add new clinical findings...",
          refinePlaceholderNoQ: "Add new clinical findings to refine the differential...",
          refineHint: "Your answers will be appended to the presentation for a new reasoning run.",
          refineBtn: "Refine",
          showTrace: "Show full reasoning trace", hideTrace: "Hide full reasoning trace",
          logNewHyp: "New hypothesis", logProbUpdate: "Probability update",
          logSupporting: "Supporting evidence", logRefuting: "Refuting evidence",
          logReasoning: "Reasoning", logInvestigations: "Investigations", logError: "Error",
          disclaimer: "Educational use only. Not for clinical or diagnostic purposes.",
          pdfBrandTag: "Clinical AI Reasoning",
          pdfPatientPres: "Patient Presentation", pdfDifferential: "Differential Diagnosis",
          pdfDate: "Date", pdfModel: "Model",
          pdfDisclaimer: "Educational use only. Not for clinical or diagnostic purposes.",
          s_chest_pain: "47-year-old, chest pain, SOB, family history of CAD",
          s_headache: "29-year-old, sudden severe headache, neck stiffness",
          s_abdominal: "22-year-old, RLQ abdominal pain, fever, anorexia",
          s_fatigue: "34-year-old, fatigue, weight gain, cold intolerance",
          s_dyspnea: "68-year-old, progressive dyspnea, leg swelling",
        },
        zh: {
          brandTag: "临床AI推理",
          savePDF: "保存PDF",
          heroTitle: "观察AI如何完成鉴别诊断。",
          heroSubtitle: "描述一位患者，观察AI逐步完成推理。",
          feat1Title: "描述病例。",
          feat1Body: " 输入自由文本格式的患者病情描述，或从内置预设案例中选择一个。",
          feat2Title: "观察推理过程。",
          feat2Body: " 模型提出候选诊断，权衡支持和反对证据，并随着信息不断更新鉴别诊断——完全模拟临床医生的推理方式。",
          feat3Title: "细化与质疑。",
          feat3Body: " 回答模型提出的澄清问题，或补充新的临床发现。模型将根据更新后的信息重新推理。",
          inputLabel: "患者病情",
          inputPlaceholder: "描述患者病情...",
          exampleCases: "预设案例", modelLabel: "模型：",
          beginReasoning: "开始推理", beginReasoningAria: "开始推理",
          runAgain: "重新推理", statusReasoning: "推理中", statusComplete: "完成",
          reasoningEllipsis: "推理中…",
          leadingDiagnosis: "首要诊断",
          historyEmpty: "暂无会话记录。<br>完成一次推理后将自动保存至此。",
          historyBtn: "历史", sessionHistory: "会话历史",
          clearHistory: "清除全部", clearHistoryConfirm: "清除全部历史记录？",
          clearHistoryYes: "确认清除", clearHistoryCancel: "取消",
          compareBtn: "对比", singleBtn: "单模型",
          refineDiagnosis: "完善诊断",
          refinePlaceholder: "回答上述问题，或补充新的临床发现...",
          refinePlaceholderNoQ: "补充新的临床发现以完善鉴别诊断...",
          refineHint: "您的回答将附加到病情描述中，用于新一轮推理。",
          refineBtn: "完善",
          showTrace: "显示完整推理记录", hideTrace: "隐藏完整推理记录",
          logNewHyp: "新假设", logProbUpdate: "概率更新",
          logSupporting: "支持证据", logRefuting: "反对证据",
          logReasoning: "推理", logInvestigations: "检查项目", logError: "错误",
          disclaimer: "仅供教育用途，不用于临床或诊断目的。",
          pdfBrandTag: "临床AI推理",
          pdfPatientPres: "患者病情", pdfDifferential: "鉴别诊断",
          pdfDate: "日期", pdfModel: "模型",
          pdfDisclaimer: "仅供教育用途，不用于临床或诊断目的。",
          s_chest_pain: "47岁，胸痛，气短，冠心病家族史",
          s_headache: "29岁，突发剧烈头痛，颈项强直",
          s_abdominal: "22岁，右下腹痛，发热，厌食",
          s_fatigue: "34岁，疲劳，体重增加，畏寒",
          s_dyspnea: "68岁，进行性呼吸困难，双腿水肿",
          sp_chest_pain: "患者47岁，主诉胸骨后压榨性胸痛，向左臂放射，伴气短及大汗淋漓。症状于静息状态下40分钟前出现。父亲52岁时曾患心肌梗死。现吸烟者，既往无心脏病史。",
          sp_headache: "患者29岁，突发'平生最剧烈头痛'，数秒内达峰，伴畏光及颈项强直。否认外伤史，既往无类似头痛发作。生命体征平稳。",
          sp_abdominal: "患者22岁，腹痛18小时，始于脐周，后转移至右下腹。低热，伴恶心、厌食。麦氏点压痛阳性。",
          sp_fatigue: "患者34岁，进行性乏力3个月，非自愿体重增加7公斤，畏寒，便秘，皮肤干燥。有自身免疫病家族史。",
          sp_dyspnea: "患者68岁，进行性劳力性呼吸困难2周，端坐呼吸（现需3个枕头），双下肢水肿。既往高血压及心房颤动病史。",
        },
      };

      // theme
      document.getElementById("theme-icon").textContent =
        document.documentElement.getAttribute("data-theme") === "dark" ? "☽" : "☀";

      document.getElementById("theme-toggle").addEventListener("click", () => {
        const isDark = document.documentElement.getAttribute("data-theme") === "dark";
        const next = isDark ? "light" : "dark";
        if (next === "dark") {
          document.documentElement.setAttribute("data-theme", "dark");
        } else {
          document.documentElement.removeAttribute("data-theme");
        }
        document.getElementById("theme-icon").textContent = next === "dark" ? "☽" : "☀";
        localStorage.setItem("so_theme", next);
      });

      let currentLang = localStorage.getItem("so_lang") || "en";

      function t(key, ...args) {
        const val = (TRANSLATIONS[currentLang] || TRANSLATIONS.en)[key]
                 ?? TRANSLATIONS.en[key] ?? key;
        return typeof val === "function" ? val(...args) : val;
      }

      let scenariosCache = [];

      function renderScenarios(list) {
        scenariosCache = list;
        presetsList.innerHTML = "";
        list.forEach((s) => {
          const btn = document.createElement("button");
          btn.className = "preset-item";
          btn.setAttribute("role", "listitem");
          btn.textContent = t("s_" + s.id) || s.label;
          btn.addEventListener("click", () => {
            inputEl.value = TRANSLATIONS[currentLang]?.["sp_" + s.id] || s.presentation;
            autoresizeTextarea();
            updateCharCount();
            togglePresetsDrawer(false);
            inputEl.focus();
          });
          presetsList.appendChild(btn);
        });
      }

      function applyTranslations() {
        document.documentElement.lang = currentLang === "zh" ? "zh-Hans" : "en";
        document.querySelectorAll("[data-i18n]").forEach(el => {
          el.textContent = t(el.dataset.i18n);
        });
        document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
          el.placeholder = t(el.dataset.i18nPlaceholder);
        });
        document.querySelectorAll("[data-i18n-aria]").forEach(el => {
          el.setAttribute("aria-label", t(el.dataset.i18nAria));
        });
        if (scenariosCache.length) renderScenarios(scenariosCache);
        const toggleLabel = document.querySelector(".compare-toggle-label");
        if (toggleLabel) toggleLabel.textContent = compareMode ? t("singleBtn") : t("compareBtn");
      }

      function setLanguage(code) {
        const isSwitch = code !== currentLang;
        currentLang = code;
        localStorage.setItem("so_lang", code);
        document.querySelectorAll(".lang-btn").forEach(btn => {
          btn.classList.toggle("active", btn.dataset.lang === code);
        });
        applyTranslations();
        if (isSwitch) {
          inputEl.value = "";
          autoresizeTextarea();
          updateCharCount();
        }
      }

      // state
      const hypotheses = new Map();
      let currentRunActive = false;
      let hasCompletedRun = false;
      let basePresentation = "";
      let refinementsList = [];
      let lastPresentation = "";
      let lastConclusion = "";
      let pendingQuestions = [];
      let thoughtsLog = [];
      let selectedModel = "";
      let liveThoughtTimer = null;

      // dom refs
      const inputEl = document.getElementById("input");
      const inputCard = document.getElementById("input-card");
      const submitBtn = document.getElementById("submit");
      const presetsToggle = document.getElementById("presets-toggle");
      const presetsDrawer = document.getElementById("presets-drawer");
      const presetsList = document.getElementById("presets-list");
      const thoughtStream = document.getElementById("thought-stream");
      const thoughtStatus = document.getElementById("thought-status");
      const thoughtStatusText = document.getElementById("thought-status-text");
      const liveThoughtEl = document.getElementById("live-thought");
      const liveThoughtTextEl = liveThoughtEl.querySelector(".live-thought-text");
      const differentialEl = document.getElementById("differential");
      const conclusionTextEl = document.getElementById("conclusion-text");
      const refineAreaEl = document.getElementById("refine-area");
      const logSection = document.getElementById("log-section");
      const logToggle = document.getElementById("log-toggle");
      const logContent = document.getElementById("log-content");
      const postConclusionActions = document.getElementById("post-conclusion-actions");
      const refinementDisplayEl = document.getElementById("refinement-display");
      let pdfBtn = null;
      const modelSelect = document.getElementById("model-select");

      // helpers
      function escapeHtml(s) {
        if (s == null) return "";
        return String(s)
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;");
      }

      const TITLE_LOWER = new Set(['a','an','the','of','with','and','or','for','in','on','at','to','by']);
      function toTitleCase(str) {
        if (!str) return str;
        return str.replace(/(\w+)/g, (word, _m, offset) => {
          if (word.length > 1 && word === word.toUpperCase()) return word; // preserve abbreviations
          if (offset > 0 && TITLE_LOWER.has(word.toLowerCase())) return word.toLowerCase();
          return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }).replace(/\bType a\b/g, "Type A");
      }


      function autoresizeTextarea() {
        inputEl.style.height = "auto";
        inputEl.style.height = Math.min(inputEl.scrollHeight, 240) + "px";
      }

      function buildFullPresentation() {
        let full = basePresentation;
        refinementsList.forEach(r => { full += "\n\nAdditional clinical information provided:\n" + r; });
        return full;
      }

      function renderRefinementDisplay() {
        refinementDisplayEl.innerHTML = "";
        const multi = refinementsList.length > 1;
        refinementsList.forEach((r, i) => {
          const block = document.createElement("div");
          block.className = "refinement-block";
          const label = multi ? `Additional Findings · ${i + 1}` : "Additional Findings";
          block.innerHTML = `<div class="refinement-block-label">${label}</div>
            <div class="refinement-block-text">${escapeHtml(r)}</div>`;
          refinementDisplayEl.appendChild(block);
        });
      }

      // thought stream
      function showThoughtStream() {
        thoughtStream.classList.remove("hidden");
        thoughtStatus.classList.remove("done");
        thoughtStatusText.textContent = t("statusReasoning");
      }

      // fade out current thought, swap text, fade back in
      function setLiveThought(text) {
        liveThoughtEl.style.opacity = "0";
        if (liveThoughtTimer) { clearTimeout(liveThoughtTimer); liveThoughtTimer = null; }
        liveThoughtTimer = setTimeout(() => {
          liveThoughtTextEl.textContent = text;
          liveThoughtEl.style.opacity = "1";
          liveThoughtTimer = null;
        }, 250);
      }

      function hideLiveThought() {
        liveThoughtEl.style.opacity = "0";
        liveThoughtTimer = setTimeout(() => {
          liveThoughtEl.classList.add("hidden");
          liveThoughtTimer = null;
        }, 300);
      }

      function addThought(text) {
        thoughtsLog.push(text);
        setLiveThought(text);
      }

      function markThoughtStreamDone() {
        thoughtStatus.style.display = "";
        thoughtStatus.classList.add("done");
        thoughtStatusText.textContent = t("statusComplete");
      }

      // live top-3 differential with FLIP reordering and animated probability bars
      function renderDifferential() {
        const sorted = [...hypotheses.entries()]
          .sort((a, b) => b[1].probability - a[1].probability)
          .slice(0, 3);
        if (sorted.length === 0) {
          differentialEl.classList.add("hidden");
          return;
        }
        differentialEl.classList.remove("hidden");

        const oldRects = new Map();
        differentialEl.querySelectorAll(".diff-row").forEach(el => {
          oldRects.set(el.dataset.id, el.getBoundingClientRect());
        });

        const existing = new Map();
        differentialEl.querySelectorAll(".diff-row").forEach(el => existing.set(el.dataset.id, el));
        const frag = document.createDocumentFragment();
        sorted.forEach(([id, h], i) => {
          let row = existing.get(id);
          if (!row) {
            row = document.createElement("div");
            row.className = "diff-row";
            row.dataset.id = id;
            row.innerHTML = `
              <span class="diff-rank"></span>
              <span class="diff-label"></span>
              <span class="diff-pct"></span>
              <div class="diff-bar"><div class="diff-bar-fill"></div></div>`;
          }
          row.classList.toggle("leading", i === 0);
          row.querySelector(".diff-rank").textContent = `#${i + 1}`;
          row.querySelector(".diff-label").textContent = h.label;
          const pct = Math.round(h.probability * 100);
          row.querySelector(".diff-pct").textContent = `${pct}%`;
          // rAF ensures the row is in the DOM before the width transition fires
          requestAnimationFrame(() => {
            row.querySelector(".diff-bar-fill").style.width = `${pct}%`;
          });
          frag.appendChild(row);
        });
        differentialEl.innerHTML = "";
        differentialEl.appendChild(frag);

        differentialEl.querySelectorAll(".diff-row").forEach(el => {
          const old = oldRects.get(el.dataset.id);
          if (!old) return;
          const next = el.getBoundingClientRect();
          const dy = old.top - next.top;
          if (Math.abs(dy) < 1) return;
          el.animate(
            [{ transform: `translateY(${dy}px)` }, { transform: "translateY(0)" }],
            { duration: 450, easing: "cubic-bezier(0.16, 1, 0.3, 1)" }
          );
        });
      }

      function addHypothesis(evt) {
        hypotheses.set(evt.id, {
          label: evt.label,
          probability: evt.probability,
          confidence: evt.confidence || "medium",
          reasoning: evt.reasoning,
          prior_basis: evt.prior_basis,
          key_finding: evt.key_finding,
          evidence: [],
          tests: [],
        });
        renderDifferential();
      }

      function updateHypothesis(id, probability, confidence) {
        if (!hypotheses.has(id)) return;
        const h = hypotheses.get(id);
        h.probability = probability;
        if (confidence) h.confidence = confidence;
        renderDifferential();
      }

      function addEvidence(id, finding, direction) {
        if (!hypotheses.has(id)) return;
        hypotheses.get(id).evidence.push({ finding, direction });
      }

      function addTests(id, tests) {
        if (!hypotheses.has(id)) return;
        hypotheses.get(id).tests = tests;
      }

      function addConclusion(text) {
        lastConclusion = text;
        renderDifferential();
        conclusionTextEl.innerHTML = "";
        const label = document.createElement("div");
        label.className = "conclusion-label";
        label.textContent = "Clinical Summary";
        const p = document.createElement("div");
        p.className = "thought-conclusion";
        p.textContent = text;
        conclusionTextEl.appendChild(label);
        conclusionTextEl.appendChild(p);
      }

      function renderRefinePanel(questions) {
        refineAreaEl.innerHTML = "";
        const panel = document.createElement("div");
        panel.className = "refine-panel";
        panel.setAttribute("aria-label", "Refine diagnosis with additional information");

        const qHtml = questions
          .map((q) => `<div class="refine-question-item">${escapeHtml(q)}</div>`)
          .join("");

        panel.innerHTML = `
          <div class="refine-panel-label">${t("refineDiagnosis")}</div>
          ${qHtml ? `<div class="refine-questions">${qHtml}</div>` : ""}
          <textarea
            class="refine-textarea"
            placeholder="${qHtml ? t("refinePlaceholder") : t("refinePlaceholderNoQ")}"
            aria-label="${t("inputLabel")}"
          ></textarea>
          <div class="refine-footer">
            <span class="refine-hint">${t("refineHint")}</span>
            <button class="submit-btn">${t("refineBtn")}</button>
          </div>
        `;

        panel.querySelector(".submit-btn").addEventListener("click", () => {
          const answers = panel.querySelector(".refine-textarea").value.trim();
          if (!answers) return;
          refinementsList.push(answers);
          renderRefinementDisplay();
          refineAreaEl.innerHTML = "";
          runReasoning();
        });

        refineAreaEl.appendChild(panel);
      }

      // log
      function appendLog(type, label, body, extraClass = "") {
        const div = document.createElement("div");
        div.className = `log-item ${type} ${extraClass}`;
        div.innerHTML = `
          <div class="log-item-label">${escapeHtml(label)}</div>
          <div>${escapeHtml(body)}</div>
        `;
        logContent.appendChild(div);
      }

      // event handler for NDJSON events from the SSE stream
      function handleEvent(evt) {
        switch (evt.type) {
          case "thought":
            addThought(evt.text);
            appendLog("thought", t("logReasoning"), evt.text);
            break;
          case "hypothesis":
            addHypothesis(evt);
            appendLog(
              "hypothesis",
              t("logNewHyp"),
              `${evt.label} (${Math.round(evt.probability * 100)}%, ${evt.confidence || "medium"} confidence) — ${evt.reasoning || ""}`
            );
            break;
          case "update":
            updateHypothesis(evt.id, evt.probability, evt.confidence);
            const h = hypotheses.get(evt.id);
            appendLog(
              "update",
              t("logProbUpdate"),
              `${h ? h.label : evt.id} → ${Math.round(evt.probability * 100)}%. ${evt.reasoning || ""}`
            );
            break;
          case "evidence":
            addEvidence(evt.id, evt.finding, evt.direction);
            appendLog(
              "evidence",
              evt.direction === "supports" ? t("logSupporting") : t("logRefuting"),
              evt.finding,
              evt.direction
            );
            break;
          case "tests":
            addTests(evt.id, Array.isArray(evt.tests) ? evt.tests : []);
            break;
          case "question":
            if (evt.text) pendingQuestions.push(evt.text);
            break;
          case "conclusion":
            addConclusion(evt.text);
            markThoughtStreamDone();
            hideLiveThought();
            currentRunActive = false;
            saveToHistory();
            break;
          case "error":
            appendLog("error", t("logError"), evt.text);
            thoughtStatusText.textContent = t("logError");
            thoughtStatus.classList.add("done");
            currentRunActive = false;
            inputCard.classList.remove("dimmed");
            break;
        }
      }

      // run
      function resetRunState() {
        hypotheses.clear();
        lastConclusion = "";
        pendingQuestions = [];
        logContent.innerHTML = "";
        thoughtsLog = [];
        if (liveThoughtTimer) { clearTimeout(liveThoughtTimer); liveThoughtTimer = null; }
        liveThoughtEl.classList.add("hidden");
        liveThoughtEl.style.opacity = "1";
        thoughtStatus.style.display = "";
        differentialEl.innerHTML = "";
        differentialEl.classList.add("hidden");
        conclusionTextEl.innerHTML = "";
        refineAreaEl.innerHTML = "";
        logSection.classList.add("hidden");
        postConclusionActions.style.display = "none";
        postConclusionActions.innerHTML = "";
        pdfBtn = null;
        renderRefinementDisplay();
      }

      async function runReasoning() {
        const text = inputEl.value.trim();
        if (text.length < 20) {
          inputEl.focus();
          inputCard.style.borderColor = "var(--refutes)";
          setTimeout(() => (inputCard.style.borderColor = ""), 1000);
          return;
        }

        // Fresh run if textarea changed — clear any prior refinements
        if (text !== basePresentation) {
          basePresentation = text;
          refinementsList = [];
          renderRefinementDisplay();
        }

        if (compareMode) {
          lastPresentation = buildFullPresentation();
          await runComparison(lastPresentation);
          return;
        }

        lastPresentation = buildFullPresentation();
        resetRunState();
        currentRunActive = true;
        submitBtn.disabled = true;
        submitBtn.querySelector("span").textContent = t("reasoningEllipsis");
        inputCard.classList.add("dimmed");
        document.querySelector(".hero").classList.add("hidden");
        thoughtStatus.style.display = "none"; // hidden while live-thought is active
        showThoughtStream();
        liveThoughtEl.classList.remove("hidden");
        liveThoughtEl.style.opacity = "1";
        liveThoughtTextEl.textContent = t("reasoningEllipsis");

        try {
          const response = await fetch("/api/reason", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ customPresentation: text, model: selectedModel || undefined, language: currentLang }),
          });

          if (!response.ok || !response.body) {
            const errBody = await response.json().catch(() => ({}));
            throw new Error(errBody.error || `HTTP ${response.status}`);
          }

          const reader = response.body.getReader();
          const decoder = new TextDecoder();
          let buf = "";

          while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            buf += decoder.decode(value, { stream: true });

            // parse SSE frames: each ends with double newline
            let idx;
            while ((idx = buf.indexOf("\n\n")) !== -1) {
              const block = buf.slice(0, idx).trim();
              buf = buf.slice(idx + 2);
              if (!block.startsWith("data:")) continue;
              const payload = block.slice(5).trim();
              if (payload === "[DONE]") {
                hasCompletedRun = true;
                renderRefinePanel(pendingQuestions);
                postConclusionActions.innerHTML = "";
                pdfBtn = document.createElement("button");
                pdfBtn.className = "pdf-action-btn";
                pdfBtn.textContent = t("savePDF");
                pdfBtn.addEventListener("click", exportToPDF);
                postConclusionActions.appendChild(pdfBtn);
                postConclusionActions.style.display = "block";
                logSection.classList.remove("hidden");
                toggleLog(false);
                submitBtn.disabled = false;
                submitBtn.querySelector("span").textContent = t("runAgain");
                return;
              }
              try {
                const evt = JSON.parse(payload);
                handleEvent(evt);
              } catch (e) {
                console.warn("Bad event:", payload);
              }
            }
          }
        } catch (err) {
          handleEvent({ type: "error", text: err.message });
        } finally {
          submitBtn.disabled = false;
          submitBtn.querySelector("span").textContent = hasCompletedRun ? t("runAgain") : t("beginReasoning");
          inputCard.classList.remove("dimmed");
        }
      }

      // export
      async function exportToPDF(opts = {}) {
        const activeBtn = opts.btn || pdfBtn;
        if (!activeBtn) return;
        const activeHyps = opts.hyps || hypotheses;
        const activeConclusion = opts.conclusion !== undefined ? opts.conclusion : lastConclusion;
        const activeTLog = opts.tLog || thoughtsLog;
        const activeModelLabel = opts.modelLbl || (modelSelect.options[modelSelect.selectedIndex]?.text || selectedModel);

        const sorted = [...activeHyps.entries()].sort((a, b) => b[1].probability - a[1].probability).slice(0, 3);
        const now = new Date();
        const locale = currentLang === "zh" ? "zh-CN" : "en-GB";
        const dateStr = now.toLocaleDateString(locale, { day: "numeric", month: "long", year: "numeric" });
        const tzAbbr = (() => {
          try {
            const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
            return new Intl.DateTimeFormat("en-US", { timeZoneName: "short", timeZone: tz })
              .formatToParts(now).find(p => p.type === "timeZoneName")?.value || "";
          } catch { return ""; }
        })();
        const timeStr = now.toLocaleTimeString(locale, { hour: "2-digit", minute: "2-digit" })
          + (tzAbbr ? " " + tzAbbr : "");

        // split all refinement passes out of the presentation string
        const activePresentation = opts.presentation || lastPresentation;
        const REFINE_MARKER = "\n\nAdditional clinical information provided:\n";
        const parts = activePresentation.split(REFINE_MARKER);
        const activePres = parts[0];
        const refinementPasses = parts.slice(1).filter(r => r.trim().length > 0);

        const hypsHtml = sorted.map(([id, h], i) => {
          const pct = Math.round(h.probability * 100);
          const conf = h.confidence || "medium";
          const evidenceHtml = (h.evidence || []).length > 0
            ? `<div class="pv-evidence">${(h.evidence || []).map(ev =>
                `<div class="pv-evidence-item ${ev.direction === "supports" ? "pv-supports" : "pv-refutes"}">${
                  ev.direction === "supports" ? "+" : "&minus;"
                }&nbsp;${escapeHtml(ev.finding)}</div>`
              ).join("")}</div>`
            : "";
          return `
            <div class="pv-hyp">
              <div class="pv-hyp-header">
                <span class="pv-rank">${i + 1}.</span>
                <span class="pv-hyp-name">${escapeHtml(toTitleCase(h.label))}</span>
                <span class="pv-hyp-meta">${pct}%&nbsp;&middot;&nbsp;${escapeHtml(conf)} conf.</span>
              </div>
              ${h.reasoning ? `<div class="pv-reasoning">${escapeHtml(h.reasoning)}</div>` : ""}
              ${evidenceHtml}
            </div>`;
        }).join("");


        const refinementHtml = refinementPasses.length > 0
          ? `<section class="pv-section">
              <div class="pv-section-title">Refinement</div>
              ${refinementPasses.map((r, i) => `
                <div class="pv-refinement-pass">
                  <div class="pv-refinement-pass-label">${refinementPasses.length > 1 ? `Additional Findings · ${i + 1}` : "Additional Findings"}</div>
                  <div class="pv-presentation" style="margin-top:2pt;font-style:italic;">${escapeHtml(r)}</div>
                </div>`).join("")}
              <div class="pv-refinement-note">The differential shown reflects the updated reasoning.</div>
            </section>`
          : "";

        // filter out empty, whitespace-only, or dash-only thought entries
        const filteredTLog = activeTLog.filter(txt =>
          txt && txt.trim().replace(/[–—\-\s]/g, "").length > 0
        );

        const leading = sorted.length > 0 ? sorted[0][1] : null;
        const leadingPct = leading ? Math.round(leading.probability * 100) : 0;
        const leadingConf = leading?.confidence || "medium";
        const conclusionHtml = activeConclusion ? `
          <section class="pv-section pv-conclusion-section">
            <div class="pv-conclusion-box">
              <div class="pv-conclusion-label">Leading Diagnosis</div>
              ${leading ? `<div class="pv-conclusion-name">${escapeHtml(toTitleCase(leading.label))}</div>
              <div class="pv-conclusion-meta">${leadingPct}% &middot; ${escapeHtml(leadingConf)} conf.</div>` : ""}
              <div class="pv-conclusion-text">${escapeHtml(activeConclusion)}</div>
            </div>
          </section>` : "";

        const pvHtml = `
          <div class="pv-root">
            <header class="pv-header">
              <div class="pv-header-left">
                <img src="/logo.png" class="pv-logo" alt="Second Opinion" />
                <div>
                  <div class="pv-brand-name">Second Opinion</div>
                  <div class="pv-brand-tag">${t("pdfBrandTag")}</div>
                </div>
              </div>
              <div class="pv-header-right">
                <div class="pv-meta-item">
                  <span class="pv-meta-label">${t("pdfDate")}</span>
                  <span class="pv-meta-value">${dateStr} &middot; ${timeStr}</span>
                </div>
                <div class="pv-meta-item">
                  <span class="pv-meta-label">${t("pdfModel")}</span>
                  <span class="pv-meta-value">${escapeHtml(activeModelLabel)}</span>
                </div>
              </div>
            </header>
            <div class="pv-accent-bar"></div>

            <section class="pv-section">
              <div class="pv-section-title">${t("pdfPatientPres")}</div>
              <div class="pv-presentation">${escapeHtml(activePres)}</div>
            </section>

            ${conclusionHtml}

            <section class="pv-section pv-differential-section">
              <div class="pv-section-title">${t("pdfDifferential")}</div>
              ${hypsHtml}
            </section>


            ${refinementHtml}

            ${filteredTLog.length > 0 ? `
            <section class="pv-section pv-reasoning-section">
              <div class="pv-section-title">Reasoning Log</div>
              ${filteredTLog.map(tt => `<div class="pv-thought-item">${escapeHtml(tt)}</div>`).join("")}
            </section>` : ""}

          </div>`;

        const prevText = activeBtn.textContent;
        activeBtn.textContent = "Generating…";
        activeBtn.disabled = true;

        try {
          const cssText = await fetch("/style.css").then(r => r.text());
          const origin = window.location.origin;
          const fullHtml = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<base href="${origin}/">
<title>Second Opinion — Clinical Reasoning Report</title>
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet" />
<style>${cssText}</style>
<style>body{margin:0;background:#fff}#print-view{display:block!important}</style>
</head>
<body>
<div id="print-view">${pvHtml}</div>
</body>
</html>`;

          const resp = await fetch("/api/pdf", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ html: fullHtml }),
          });
          if (!resp.ok) {
            const err = await resp.json().catch(() => ({ error: resp.statusText }));
            throw new Error(err.error || resp.statusText);
          }
          const blob = await resp.blob();
          window.open(URL.createObjectURL(blob), "_blank");
        } catch (err) {
          alert("PDF generation failed: " + err.message);
        } finally {
          activeBtn.textContent = prevText;
          activeBtn.disabled = false;
        }
      }

      // compare
      let compareMode = false;
      const modelSelectB = document.getElementById("model-select-b");

      function toggleCompare() {
        compareMode = !compareMode;
        document.getElementById("compare-toggle").classList.toggle("active", compareMode);
        document.querySelector(".compare-toggle-label").textContent = compareMode ? t("singleBtn") : t("compareBtn");
        document.getElementById("model-selector-b").style.display = compareMode ? "inline-flex" : "none";
        if (!compareMode) {
          document.getElementById("cmp-layout").classList.remove("visible");
          document.body.classList.remove("compare-active");
        }
      }

      function createComparePane(container, modelId, modelLabel) {
        container.innerHTML = `
          <div class="cmp-pane-header">
            <span class="cmp-model-name">${escapeHtml(modelLabel)}</span>
            <span class="cmp-status-dot"></span>
            <span class="cmp-status-text">Waiting…</span>
          </div>
          <div class="cmp-body">
            <div class="cmp-thoughts"></div>
            <div class="cmp-cards"></div>
            <div class="cmp-conclusion" style="display:none"></div>
            <div class="cmp-post-actions" style="display:none"></div>
          </div>`;

        const statusText = container.querySelector(".cmp-status-text");
        const thoughtsDiv = container.querySelector(".cmp-thoughts");
        const cardsDiv = container.querySelector(".cmp-cards");
        const conclusionDiv = container.querySelector(".cmp-conclusion");
        const postActionsDiv = container.querySelector(".cmp-post-actions");
        const paneState = { hyps: new Map(), conclusion: "", thoughtsLog: [] };

        function renderPaneCards() {
          const sorted = [...paneState.hyps.entries()].sort((a, b) => b[1].probability - a[1].probability);
          const leadingId = sorted[0]?.[0];
          cardsDiv.innerHTML = "";
          sorted.forEach(([id, h]) => {
            const pct = Math.round(h.probability * 100);
            const div = document.createElement("div");
            div.className = "cmp-card" + (id === leadingId ? " leading" : "");
            div.innerHTML = `
              <div class="cmp-card-header">
                <span class="cmp-card-name">${escapeHtml(h.label)}</span>
                <span class="cmp-card-prob">${pct}%</span>
              </div>
              <div class="cmp-card-bar"><div class="cmp-card-bar-fill" style="width:${pct}%"></div></div>
              ${h.reasoning ? `<div class="cmp-card-reasoning">${escapeHtml(h.reasoning)}</div>` : ""}`;
            cardsDiv.appendChild(div);
          });
        }

        function handlePaneEvent(evt) {
          switch (evt.type) {
            case "thought":
              paneState.thoughtsLog.push(evt.text);
              const tDiv = document.createElement("div");
              tDiv.className = "cmp-thought";
              tDiv.textContent = evt.text;
              thoughtsDiv.appendChild(tDiv);
              // fade older thoughts to keep focus on latest
              thoughtsDiv.querySelectorAll(".cmp-thought").forEach((el, i, arr) => {
                el.style.opacity = i < arr.length - 3 ? "0.3" : "1";
              });
              break;
            case "hypothesis":
              paneState.hyps.set(evt.id, {
                label: evt.label, probability: evt.probability,
                confidence: evt.confidence || "medium", reasoning: evt.reasoning || "",
              });
              renderPaneCards();
              break;
            case "update":
              if (paneState.hyps.has(evt.id)) {
                paneState.hyps.get(evt.id).probability = evt.probability;
                if (evt.confidence) paneState.hyps.get(evt.id).confidence = evt.confidence;
                renderPaneCards();
              }
              break;
            case "conclusion":
              paneState.conclusion = evt.text;
              const sorted = [...paneState.hyps.entries()].sort((a, b) => b[1].probability - a[1].probability);
              const leading = sorted[0]?.[1];
              pushToHistory({
                id: Date.now(), timestamp: Date.now(),
                presentation: lastPresentation,
                modelId: modelId,
                modelLabel: modelLabel,
                conclusion: evt.text,
                leadingLabel: leading?.label || "",
                leadingProbability: leading?.probability || 0,
                hypotheses: sorted.map(([id, h]) => ({ id, ...h })),
                thoughtsLog: [...paneState.thoughtsLog],
              });
              conclusionDiv.style.display = "";
              conclusionDiv.innerHTML = `
                <div class="cmp-conclusion-label">${t("leadingDiagnosis")}</div>
                ${leading ? `<div class="cmp-conclusion-leading">${escapeHtml(leading.label)} — ${Math.round(leading.probability * 100)}%</div>` : ""}
                <div class="cmp-conclusion-text">${escapeHtml(evt.text)}</div>`;
              postActionsDiv.innerHTML = "";
              postActionsDiv.style.display = "flex";
              const paneBtn = document.createElement("button");
              paneBtn.className = "pdf-action-btn";
              paneBtn.textContent = t("savePDF");
              paneBtn.addEventListener("click", () => exportToPDF({
                btn: paneBtn,
                hyps: paneState.hyps,
                conclusion: paneState.conclusion,
                tLog: paneState.thoughtsLog,
                modelLbl: modelLabel,
              }));
              postActionsDiv.appendChild(paneBtn);
              container.classList.add("done");
              statusText.textContent = t("statusComplete");
              break;
            case "error":
              container.classList.add("error");
              statusText.textContent = "Error";
              break;
          }
        }

        async function run(presentation) {
          container.classList.remove("done", "error");
          statusText.textContent = t("reasoningEllipsis");
          paneState.hyps.clear(); paneState.conclusion = ""; paneState.thoughtsLog = [];
          thoughtsDiv.innerHTML = ""; cardsDiv.innerHTML = "";
          conclusionDiv.style.display = "none"; conclusionDiv.innerHTML = "";
          postActionsDiv.style.display = "none"; postActionsDiv.innerHTML = "";
          try {
            const resp = await fetch("/api/reason", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ customPresentation: presentation, model: modelId, language: currentLang }),
            });
            if (!resp.ok || !resp.body) throw new Error(`HTTP ${resp.status}`);
            const reader = resp.body.getReader();
            const decoder = new TextDecoder();
            let buf = "";
            while (true) {
              const { done, value } = await reader.read();
              if (done) break;
              buf += decoder.decode(value, { stream: true });
              let idx;
              while ((idx = buf.indexOf("\n\n")) !== -1) {
                const block = buf.slice(0, idx).trim();
                buf = buf.slice(idx + 2);
                if (!block.startsWith("data:")) continue;
                const payload = block.slice(5).trim();
                if (payload === "[DONE]") return;
                try { handlePaneEvent(JSON.parse(payload)); } catch(e) {}
              }
            }
          } catch (err) {
            container.classList.add("error");
            statusText.textContent = "Error: " + err.message;
          }
        }

        return { run };
      }

      async function runComparison(presentation) {
        const layout = document.getElementById("cmp-layout");
        const paneA = document.getElementById("cmp-pane-a");
        const paneB = document.getElementById("cmp-pane-b");
        thoughtStream.classList.add("hidden");
        logSection.classList.add("hidden");
        postConclusionActions.style.display = "none";
        document.body.classList.add("compare-active");
        layout.classList.add("visible");
        const modelAId = selectedModel;
        const modelALabel = modelSelect.options[modelSelect.selectedIndex]?.text || modelAId;
        const modelBId = modelSelectB.value;
        const modelBLabel = modelSelectB.options[modelSelectB.selectedIndex]?.text || modelBId;
        const instA = createComparePane(paneA, modelAId, modelALabel);
        const instB = createComparePane(paneB, modelBId, modelBLabel);
        submitBtn.disabled = true;
        submitBtn.querySelector("span").textContent = t("reasoningEllipsis");
        inputCard.classList.add("dimmed");
        document.querySelector(".hero").classList.add("hidden");
        await Promise.all([instA.run(presentation), instB.run(presentation)]);
        hasCompletedRun = true;
        submitBtn.disabled = false;
        submitBtn.querySelector("span").textContent = t("runAgain");
        inputCard.classList.remove("dimmed");
      }

      // history
      const HISTORY_KEY = "so_history";
      const HISTORY_MAX = 10;

      function pushToHistory(record) {
        const history = getHistory();
        history.unshift(record);
        if (history.length > HISTORY_MAX) history.length = HISTORY_MAX;
        try { localStorage.setItem(HISTORY_KEY, JSON.stringify(history)); } catch(e) {}
      }

      function saveToHistory() {
        if (!lastConclusion || hypotheses.size === 0) return;
        const sorted = [...hypotheses.entries()].sort((a, b) => b[1].probability - a[1].probability);
        const leading = sorted[0]?.[1];
        pushToHistory({
          id: Date.now(), timestamp: Date.now(),
          presentation: lastPresentation,
          modelId: selectedModel,
          modelLabel: modelSelect.options[modelSelect.selectedIndex]?.text || selectedModel,
          conclusion: lastConclusion,
          leadingLabel: leading?.label || "",
          leadingProbability: leading?.probability || 0,
          hypotheses: sorted.map(([id, h]) => ({ id, ...h })),
          thoughtsLog: [...thoughtsLog],
        });
      }

      function getHistory() {
        try { return JSON.parse(localStorage.getItem(HISTORY_KEY) || "[]"); } catch { return []; }
      }

      function deleteHistoryItem(id) {
        const updated = getHistory().filter(r => r.id !== id);
        try { localStorage.setItem(HISTORY_KEY, JSON.stringify(updated)); } catch(e) {}
        renderHistoryPanel();
      }

      function clearAllHistory() {
        document.getElementById("history-clear-btn").style.display = "none";
        document.getElementById("history-confirm-row").classList.remove("hidden");
      }

      function resetHistoryConfirm() {
        document.getElementById("history-confirm-row").classList.add("hidden");
        const clearBtn = document.getElementById("history-clear-btn");
        if (getHistory().length > 0) clearBtn.style.display = "";
      }

      function renderHistoryPanel() {
        const list = document.getElementById("history-list");
        const clearBtn = document.getElementById("history-clear-btn");
        const history = getHistory();
        if (clearBtn) clearBtn.style.display = history.length > 0 ? "" : "none";
        if (history.length === 0) {
          list.innerHTML = `<div class="history-empty">${t("historyEmpty")}</div>`;
          return;
        }
        const locale = currentLang === "zh" ? "zh-CN" : "en-GB";
        list.innerHTML = history.map(r => {
          const d = new Date(r.timestamp);
          const dateStr = d.toLocaleDateString(locale, { day: "numeric", month: "short" }) + " · " +
                          d.toLocaleTimeString(locale, { hour: "2-digit", minute: "2-digit" });
          const pct = Math.round(r.leadingProbability * 100);
          const snippet = r.presentation.length > 110 ? r.presentation.slice(0, 110) + "…" : r.presentation;
          return `<div class="history-item" data-id="${r.id}">
            <div class="history-item-top">
              <span class="history-item-leading">${escapeHtml(r.leadingLabel)}</span>
              <span class="history-item-prob">${pct}%</span>
              <button class="history-item-delete" data-id="${r.id}" aria-label="Delete" title="Delete">✕</button>
            </div>
            <div class="history-item-meta">${escapeHtml(dateStr)} · ${escapeHtml(r.modelLabel)}</div>
            <div class="history-item-snippet">${escapeHtml(snippet)}</div>
          </div>`;
        }).join("");
        list.querySelectorAll(".history-item-delete").forEach(btn => {
          btn.addEventListener("click", (e) => {
            e.stopPropagation();
            deleteHistoryItem(Number(btn.dataset.id));
          });
        });
        list.querySelectorAll(".history-item").forEach(item => {
          item.addEventListener("click", () => {
            const id = Number(item.dataset.id);
            const record = getHistory().find(r => r.id === id);
            if (record) restoreFromHistory(record);
            document.getElementById("history-panel").classList.add("hidden");
          });
        });
      }

      function restoreFromHistory(record) {
        if (compareMode) toggleCompare();
        const MARKER = "\n\nAdditional clinical information provided:\n";
        const parts = record.presentation.split(MARKER);
        basePresentation = parts[0];
        refinementsList = parts.slice(1);
        inputEl.value = basePresentation;
        autoresizeTextarea();
        updateCharCount();
        renderRefinementDisplay();
        const opt = Array.from(modelSelect.options).find(o => o.value === record.modelId);
        if (opt) { modelSelect.value = record.modelId; selectedModel = record.modelId; }
        resetRunState();
        lastPresentation = record.presentation;
        lastConclusion = record.conclusion;
        thoughtsLog = [...record.thoughtsLog];
        record.hypotheses.forEach(h => {
          hypotheses.set(h.id, {
            label: h.label, probability: h.probability,
            confidence: h.confidence || "medium", reasoning: h.reasoning,
            prior_basis: h.prior_basis, key_finding: h.key_finding,
            evidence: h.evidence || [], tests: h.tests || [],
          });
        });
        addConclusion(record.conclusion);
        // rebuild reasoning trace from stored data
        record.thoughtsLog.forEach(text => appendLog("thought", t("logReasoning"), text));
        record.hypotheses.forEach(h => {
          appendLog("hypothesis", t("logNewHyp"),
            `${h.label} (${Math.round(h.probability * 100)}%) — ${h.reasoning || ""}`);
          (h.evidence || []).forEach(ev =>
            appendLog("evidence",
              ev.direction === "supports" ? t("logSupporting") : t("logRefuting"),
              ev.finding, ev.direction)
          );
        });
        showThoughtStream();
        markThoughtStreamDone();
        renderRefinePanel([]);
        logSection.classList.remove("hidden");
        toggleLog(false);
        postConclusionActions.innerHTML = "";
        pdfBtn = document.createElement("button");
        pdfBtn.className = "pdf-action-btn";
        pdfBtn.textContent = t("savePDF");
        pdfBtn.addEventListener("click", exportToPDF);
        postConclusionActions.appendChild(pdfBtn);
        postConclusionActions.style.display = "block";
      }

      // models & presets
      async function loadModels() {
        try {
          const res = await fetch("/api/models");
          const list = await res.json();
          modelSelect.innerHTML = "";
          modelSelectB.innerHTML = "";
          list.forEach((m) => {
            const opt = document.createElement("option");
            opt.value = m.id;
            opt.textContent = m.label;
            modelSelect.appendChild(opt);
            modelSelectB.appendChild(opt.cloneNode(true));
          });
          selectedModel = list[0]?.id || "";
          if (list.length > 1) modelSelectB.value = list[1].id;
        } catch (e) {
          console.error("Failed to load models", e);
        }
      }

      async function loadPresets() {
        try {
          const res = await fetch("/api/scenarios");
          const list = await res.json();
          renderScenarios(list);
        } catch (e) {
          console.error("Failed to load presets", e);
        }
      }

      function togglePresetsDrawer(force) {
        const isOpen = presetsDrawer.classList.contains("open");
        const next = typeof force === "boolean" ? force : !isOpen;
        presetsDrawer.classList.toggle("open", next);
        presetsToggle.setAttribute("aria-expanded", next ? "true" : "false");
        presetsToggle.querySelector(".preset-chip-icon").textContent = next ? "▾" : "▸";
      }

      function toggleLog(force) {
        const isOpen = logContent.classList.contains("open");
        const next = typeof force === "boolean" ? force : !isOpen;
        logContent.classList.toggle("open", next);
        logToggle.setAttribute("aria-expanded", next ? "true" : "false");
        const count = logContent.children.length;
        const countSuffix = count > 0 ? ` · ${count} steps` : "";
        logToggle.querySelector("span:last-child").textContent =
          (next ? t("hideTrace") : t("showTrace")) + countSuffix;
      }

      // input
      function updateCharCount() {}

      inputEl.addEventListener("input", () => {
        autoresizeTextarea();
        updateCharCount();
      });

      inputEl.addEventListener("keydown", (e) => {
        if ((e.metaKey || e.ctrlKey) && e.key === "Enter") {
          e.preventDefault();
          if (!submitBtn.disabled) runReasoning();
        } else if (e.key === "Escape" && !currentRunActive) {
          inputEl.value = "";
          autoresizeTextarea();
          updateCharCount();
        }
      });

      submitBtn.addEventListener("click", runReasoning);
      modelSelect.addEventListener("change", () => { selectedModel = modelSelect.value; });
      presetsToggle.addEventListener("click", () => togglePresetsDrawer());
      logToggle.addEventListener("click", () => toggleLog());

      document.getElementById("compare-toggle").addEventListener("click", toggleCompare);

      document.getElementById("history-btn").addEventListener("click", (e) => {
        e.stopPropagation();
        const panel = document.getElementById("history-panel");
        if (panel.classList.contains("hidden")) {
          renderHistoryPanel();
          panel.classList.remove("hidden");
        } else {
          panel.classList.add("hidden");
        }
      });
      document.getElementById("history-close-btn").addEventListener("click", () => {
        resetHistoryConfirm();
        document.getElementById("history-panel").classList.add("hidden");
      });
      document.getElementById("history-clear-btn").addEventListener("click", clearAllHistory);
      document.getElementById("history-confirm-yes").addEventListener("click", () => {
        try { localStorage.removeItem(HISTORY_KEY); } catch(e) {}
        document.getElementById("history-confirm-row").classList.add("hidden");
        renderHistoryPanel();
      });
      document.getElementById("history-confirm-cancel").addEventListener("click", resetHistoryConfirm);
      document.addEventListener("click", (e) => {
        const panel = document.getElementById("history-panel");
        if (!panel.classList.contains("hidden") &&
            !panel.contains(e.target) &&
            !document.getElementById("history-btn").contains(e.target)) {
          resetHistoryConfirm();
          panel.classList.add("hidden");
        }
      });

      // init
      document.querySelectorAll(".lang-btn").forEach(btn => {
        btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
      });

      inputEl.value = "";
      setLanguage(currentLang);
      loadPresets();
      loadModels();
      autoresizeTextarea();
      updateCharCount();
      inputEl.focus();
