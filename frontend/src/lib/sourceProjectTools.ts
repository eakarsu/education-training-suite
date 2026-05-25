export const sourceProjectTools = [
  {
    "id": "ai-education-suite-source-workflow",
    "title": "AI Education Suite Source Workflow",
    "category": "Source Project Coverage",
    "description": "Source-derived workflow coverage extracted from AIEducationSuite.",
    "defaultPrompt": "Use the extracted routes, APIs, prompts, and tool files from AIEducationSuite to identify missing merged-suite capabilities and next implementation steps.",
    "inputLabel": "AI Education Suite source context",
    "outputLabel": "AI Education Suite source analysis",
    "signals": [
      "server/services/openrouter",
      "server/services/email",
      "server/routes/agenticTutor",
      "server/routes/aiAdvanced",
      "server/routes/aiNew",
      "server/routes/classroomAgents",
      "server/middleware/aiRateLimiter",
      "server/__tests__/aiAdvanced.test"
    ]
  },
  {
    "id": "ai-education-suite-ai-tools",
    "title": "AI Education Suite AI Tools",
    "category": "Source AI Tools",
    "description": "AI/API/prompt coverage extracted from AIEducationSuite.",
    "defaultPrompt": "Review AIEducationSuite AI prompts, APIs, and tool files. Convert them into concrete AI cards, inputs, outputs, and audit actions for this merged suite.",
    "inputLabel": "AI Education Suite AI prompt or tool context",
    "outputLabel": "AI Education Suite AI tool response",
    "signals": [
      "server/services/openrouter.js",
      "server/services/email.js",
      "server/routes/agenticTutor.js",
      "server/routes/aiAdvanced.js",
      "server/routes/aiNew.js",
      "server/routes/classroomAgents.js",
      "server/middleware/aiRateLimiter.js",
      "server/__tests__/aiAdvanced.test.js"
    ]
  },
  {
    "id": "ai-education-suite-agentic-tutor-gb8km-exact-ai",
    "title": "AI Education Suite: Agentic Tutor",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/agenticTutor.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Agentic Tutor\" from AIEducationSuite. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Agentic Tutor donor inputs",
    "outputLabel": "Agentic Tutor AI response",
    "signals": [
      "Level",
      "Messages = []",
      "Subject"
    ]
  },
  {
    "id": "ai-education-suite-ai-advanced-1tlhh5-exact-ai",
    "title": "AI Education Suite: AI Advanced",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/aiAdvanced.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Advanced\" from AIEducationSuite. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Advanced donor inputs",
    "outputLabel": "AI Advanced AI response",
    "signals": [
      "Conversation Id",
      "Date Range",
      "Message",
      "Subject"
    ]
  },
  {
    "id": "ai-education-suite-ai-new-1l6olc-exact-ai",
    "title": "AI Education Suite: AI New",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/aiNew.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI New\" from AIEducationSuite. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI New donor inputs",
    "outputLabel": "AI New AI response",
    "signals": [
      "Date Range",
      "Difficulty",
      "Essay Id",
      "Learning Path Id",
      "Max Recommendations",
      "Num Questions",
      "Source Content",
      "Subject"
    ]
  },
  {
    "id": "ai-education-suite-classroom-agents-1lnbtb-exact-ai",
    "title": "AI Education Suite: Classroom Agents",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/classroomAgents.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Classroom Agents\" from AIEducationSuite. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Classroom Agents donor inputs",
    "outputLabel": "Classroom Agents AI response",
    "signals": [
      "Learning Style",
      "Question",
      "Student Level",
      "Student Response",
      "Subject",
      "Topic"
    ]
  },
  {
    "id": "ai-education-suite-ai-tools-1977ko-exact-ai",
    "title": "AI Education Suite: AI Tools",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/AITools.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Tools\" from AIEducationSuite. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Tools donor inputs",
    "outputLabel": "AI Tools AI response",
    "signals": [
      "Difficulty",
      "End",
      "Learning Path Id",
      "Max Recommendations",
      "Num Questions",
      "Source Content",
      "Start",
      "Subject"
    ]
  },
  {
    "id": "ai-education-suite-verify-email-5epccd-exact-ai",
    "title": "AI Education Suite: Verify Email",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/VerifyEmail.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Verify Email\" from AIEducationSuite. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Verify Email donor inputs",
    "outputLabel": "Verify Email AI response",
    "signals": [
      "client/src/pages/VerifyEmail.js"
    ]
  },
  {
    "id": "ai-language-learning-companion-source-workflow",
    "title": "AI Language Learning Companion Source Workflow",
    "category": "Source Project Coverage",
    "description": "Source-derived workflow coverage extracted from AILanguageLearningCompanion.",
    "defaultPrompt": "Use the extracted routes, APIs, prompts, and tool files from AILanguageLearningCompanion to identify missing merged-suite capabilities and next implementation steps.",
    "inputLabel": "AI Language Learning Companion source context",
    "outputLabel": "AI Language Learning Companion source analysis",
    "signals": [
      "server/services/openrouter",
      "server/routes/ai",
      "server/routes/dailyLesson",
      "server/routes/gap-ai-grammar-correction",
      "server/routes/gap-ai-idiom-explanation",
      "server/routes/gap-ai-personalized-lesson-plan",
      "server/routes/gap-ai-pronunciation-feedback",
      "server/routes/gap-ai-tutor-response"
    ]
  },
  {
    "id": "ai-language-learning-companion-ai-tools",
    "title": "AI Language Learning Companion AI Tools",
    "category": "Source AI Tools",
    "description": "AI/API/prompt coverage extracted from AILanguageLearningCompanion.",
    "defaultPrompt": "Review AILanguageLearningCompanion AI prompts, APIs, and tool files. Convert them into concrete AI cards, inputs, outputs, and audit actions for this merged suite.",
    "inputLabel": "AI Language Learning Companion AI prompt or tool context",
    "outputLabel": "AI Language Learning Companion AI tool response",
    "signals": [
      "server/services/openrouter.js",
      "server/routes/ai.js",
      "server/routes/dailyLesson.js",
      "server/routes/gap-ai-grammar-correction.js",
      "server/routes/gap-ai-idiom-explanation.js",
      "server/routes/gap-ai-personalized-lesson-plan.js",
      "server/routes/gap-ai-pronunciation-feedback.js",
      "server/routes/gap-ai-tutor-response.js"
    ]
  },
  {
    "id": "ai-language-learning-companion-ai-j615h1-exact-ai",
    "title": "AI Language Learning Companion: AI",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/ai.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI\" from AILanguageLearningCompanion. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI donor inputs",
    "outputLabel": "AI AI response",
    "signals": [
      "Available Minutes = 30",
      "Goals",
      "Idiom",
      "Language = 'Spanish'",
      "Learner Native Language = 'English'",
      "Level = 'Beginner'",
      "Phrase",
      "Text"
    ]
  },
  {
    "id": "ai-language-learning-companion-daily-lesson-1819yb-exact-ai",
    "title": "AI Language Learning Companion: Daily Lesson",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/dailyLesson.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Daily Lesson\" from AILanguageLearningCompanion. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Daily Lesson donor inputs",
    "outputLabel": "Daily Lesson AI response",
    "signals": [
      "Language"
    ]
  },
  {
    "id": "ai-language-learning-companion-gap-ai-grammar-correction-1z022c-exact-ai",
    "title": "AI Language Learning Companion: Gap AI Grammar Correction",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/gap-ai-grammar-correction.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap AI Grammar Correction\" from AILanguageLearningCompanion. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap AI Grammar Correction donor inputs",
    "outputLabel": "Gap AI Grammar Correction AI response",
    "signals": [
      "Context",
      "Input"
    ]
  },
  {
    "id": "ai-language-learning-companion-gap-ai-idiom-explanation-1uj3lj-exact-ai",
    "title": "AI Language Learning Companion: Gap AI Idiom Explanation",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/gap-ai-idiom-explanation.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap AI Idiom Explanation\" from AILanguageLearningCompanion. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap AI Idiom Explanation donor inputs",
    "outputLabel": "Gap AI Idiom Explanation AI response",
    "signals": [
      "Context",
      "Input"
    ]
  },
  {
    "id": "ai-language-learning-companion-gap-ai-personalized-lesson-plan-18zvct-exact-ai",
    "title": "AI Language Learning Companion: Gap AI Personalized Lesson Plan",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/gap-ai-personalized-lesson-plan.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap AI Personalized Lesson Plan\" from AILanguageLearningCompanion. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap AI Personalized Lesson Plan donor inputs",
    "outputLabel": "Gap AI Personalized Lesson Plan AI response",
    "signals": [
      "Context",
      "Input"
    ]
  },
  {
    "id": "ai-language-learning-companion-gap-ai-pronunciation-feedback-wzz5e0-exact-ai",
    "title": "AI Language Learning Companion: Gap AI Pronunciation Feedback",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/gap-ai-pronunciation-feedback.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap AI Pronunciation Feedback\" from AILanguageLearningCompanion. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap AI Pronunciation Feedback donor inputs",
    "outputLabel": "Gap AI Pronunciation Feedback AI response",
    "signals": [
      "Context",
      "Input"
    ]
  },
  {
    "id": "ai-language-learning-companion-gap-ai-tutor-response-1xlzh2-exact-ai",
    "title": "AI Language Learning Companion: Gap AI Tutor Response",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/gap-ai-tutor-response.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap AI Tutor Response\" from AILanguageLearningCompanion. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap AI Tutor Response donor inputs",
    "outputLabel": "Gap AI Tutor Response AI response",
    "signals": [
      "Context",
      "Input"
    ]
  },
  {
    "id": "ai-language-learning-companion-ai-tools-page-uo1rbq-exact-ai",
    "title": "AI Language Learning Companion: AI Tools Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/AIToolsPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Tools Page\" from AILanguageLearningCompanion. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Tools Page donor inputs",
    "outputLabel": "AI Tools Page AI response",
    "signals": [
      "client/src/pages/AIToolsPage.js"
    ]
  },
  {
    "id": "ai-language-learning-companion-daily-lesson-79h4vr-exact-ai",
    "title": "AI Language Learning Companion: Daily Lesson",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/DailyLesson.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Daily Lesson\" from AILanguageLearningCompanion. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Daily Lesson donor inputs",
    "outputLabel": "Daily Lesson AI response",
    "signals": [
      "client/src/pages/DailyLesson.js"
    ]
  },
  {
    "id": "ai-language-learning-companion-gap-agentic-amr2uz-exact-ai",
    "title": "AI Language Learning Companion: Gap Agentic",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/GapAgentic.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap Agentic\" from AILanguageLearningCompanion. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap Agentic donor inputs",
    "outputLabel": "Gap Agentic AI response",
    "signals": [
      "client/src/pages/GapAgentic.jsx"
    ]
  },
  {
    "id": "ai-language-learning-companion-gap-ai-grammar-correction-sjgv01-exact-ai",
    "title": "AI Language Learning Companion: Gap AI Grammar Correction",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/GapAiGrammarCorrection.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap AI Grammar Correction\" from AILanguageLearningCompanion. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap AI Grammar Correction donor inputs",
    "outputLabel": "Gap AI Grammar Correction AI response",
    "signals": [
      "client/src/pages/GapAiGrammarCorrection.jsx"
    ]
  },
  {
    "id": "ai-language-learning-companion-gap-ai-idiom-explanation-1q5i5g-exact-ai",
    "title": "AI Language Learning Companion: Gap AI Idiom Explanation",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/GapAiIdiomExplanation.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap AI Idiom Explanation\" from AILanguageLearningCompanion. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap AI Idiom Explanation donor inputs",
    "outputLabel": "Gap AI Idiom Explanation AI response",
    "signals": [
      "client/src/pages/GapAiIdiomExplanation.jsx"
    ]
  },
  {
    "id": "ai-language-learning-companion-gap-ai-personalized-lesson-plan-b189zl-exact-ai",
    "title": "AI Language Learning Companion: Gap AI Personalized Lesson Plan",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/GapAiPersonalizedLessonPlan.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap AI Personalized Lesson Plan\" from AILanguageLearningCompanion. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap AI Personalized Lesson Plan donor inputs",
    "outputLabel": "Gap AI Personalized Lesson Plan AI response",
    "signals": [
      "client/src/pages/GapAiPersonalizedLessonPlan.jsx"
    ]
  },
  {
    "id": "ai-language-learning-companion-gap-ai-pronunciation-feedback-hwdbt2-exact-ai",
    "title": "AI Language Learning Companion: Gap AI Pronunciation Feedback",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/GapAiPronunciationFeedback.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap AI Pronunciation Feedback\" from AILanguageLearningCompanion. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap AI Pronunciation Feedback donor inputs",
    "outputLabel": "Gap AI Pronunciation Feedback AI response",
    "signals": [
      "client/src/pages/GapAiPronunciationFeedback.jsx"
    ]
  },
  {
    "id": "ai-language-learning-companion-gap-ai-tutor-response-1dbu6g-exact-ai",
    "title": "AI Language Learning Companion: Gap AI Tutor Response",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/GapAiTutorResponse.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap AI Tutor Response\" from AILanguageLearningCompanion. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap AI Tutor Response donor inputs",
    "outputLabel": "Gap AI Tutor Response AI response",
    "signals": [
      "client/src/pages/GapAiTutorResponse.jsx"
    ]
  },
  {
    "id": "ai-learning-development-path-source-workflow",
    "title": "AI Learning Development Path Source Workflow",
    "category": "Source Project Coverage",
    "description": "Source-derived workflow coverage extracted from AILearningDevelopmentPath.",
    "defaultPrompt": "Use the extracted routes, APIs, prompts, and tool files from AILearningDevelopmentPath to identify missing merged-suite capabilities and next implementation steps.",
    "inputLabel": "AI Learning Development Path source context",
    "outputLabel": "AI Learning Development Path source analysis",
    "signals": [
      "backend/src/services/openrouter",
      "frontend/src/pages/AIToolsPage",
      "frontend/src/pages/ComplianceTrainings",
      "frontend/src/pages/GapAgentic",
      "frontend/src/pages/GapTrainingEffectivenessAnalyzer",
      "frontend/src/pages/TrainingEvents",
      "frontend/src/components/AIResponse",
      "backend/src/routes/ai"
    ]
  },
  {
    "id": "ai-learning-development-path-ai-tools",
    "title": "AI Learning Development Path AI Tools",
    "category": "Source AI Tools",
    "description": "AI/API/prompt coverage extracted from AILearningDevelopmentPath.",
    "defaultPrompt": "Review AILearningDevelopmentPath AI prompts, APIs, and tool files. Convert them into concrete AI cards, inputs, outputs, and audit actions for this merged suite.",
    "inputLabel": "AI Learning Development Path AI prompt or tool context",
    "outputLabel": "AI Learning Development Path AI tool response",
    "signals": [
      "backend/src/services/openrouter.js",
      "frontend/src/pages/AIToolsPage.js",
      "frontend/src/pages/ComplianceTrainings.js",
      "frontend/src/pages/GapAgentic.jsx",
      "frontend/src/pages/GapTrainingEffectivenessAnalyzer.jsx",
      "frontend/src/pages/TrainingEvents.js",
      "frontend/src/components/AIResponse.js",
      "backend/src/routes/ai.js"
    ]
  },
  {
    "id": "ai-learning-development-path-ai-tools-page-kxx281-exact-ai",
    "title": "AI Learning Development Path: AI Tools Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIToolsPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Tools Page\" from AILearningDevelopmentPath. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Tools Page donor inputs",
    "outputLabel": "AI Tools Page AI response",
    "signals": [
      "frontend/src/pages/AIToolsPage.js"
    ]
  },
  {
    "id": "ai-learning-development-path-compliance-trainings-19tj3g-exact-ai",
    "title": "AI Learning Development Path: Compliance Trainings",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/ComplianceTrainings.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Compliance Trainings\" from AILearningDevelopmentPath. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Compliance Trainings donor inputs",
    "outputLabel": "Compliance Trainings AI response",
    "signals": [
      "frontend/src/pages/ComplianceTrainings.js"
    ]
  },
  {
    "id": "ai-learning-development-path-gap-agentic-h0nlt8-exact-ai",
    "title": "AI Learning Development Path: Gap Agentic",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/GapAgentic.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap Agentic\" from AILearningDevelopmentPath. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap Agentic donor inputs",
    "outputLabel": "Gap Agentic AI response",
    "signals": [
      "frontend/src/pages/GapAgentic.jsx"
    ]
  },
  {
    "id": "ai-learning-development-path-gap-training-effectiveness-analyzer-no7ihb-exact-ai",
    "title": "AI Learning Development Path: Gap Training Effectiveness Analyzer",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/GapTrainingEffectivenessAnalyzer.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap Training Effectiveness Analyzer\" from AILearningDevelopmentPath. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap Training Effectiveness Analyzer donor inputs",
    "outputLabel": "Gap Training Effectiveness Analyzer AI response",
    "signals": [
      "frontend/src/pages/GapTrainingEffectivenessAnalyzer.jsx"
    ]
  },
  {
    "id": "ai-learning-development-path-training-events-6vuham-exact-ai",
    "title": "AI Learning Development Path: Training Events",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/TrainingEvents.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Training Events\" from AILearningDevelopmentPath. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Training Events donor inputs",
    "outputLabel": "Training Events AI response",
    "signals": [
      "frontend/src/pages/TrainingEvents.js"
    ]
  },
  {
    "id": "ai-learning-development-path-ai-1lp99l-exact-ai",
    "title": "AI Learning Development Path: AI",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/src/routes/ai.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI\" from AILearningDevelopmentPath. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI donor inputs",
    "outputLabel": "AI AI response",
    "signals": [
      "Department",
      "Employee Id",
      "Fiscal Period",
      "Plan",
      "Priorities",
      "Role Title",
      "Total Budget Usd",
      "Urgency Months"
    ]
  },
  {
    "id": "ai-learning-development-path-career-coach-agent-hfcrsc-exact-ai",
    "title": "AI Learning Development Path: Career Coach Agent",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/src/routes/career-coach-agent.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Career Coach Agent\" from AILearningDevelopmentPath. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Career Coach Agent donor inputs",
    "outputLabel": "Career Coach Agent AI response",
    "signals": [
      "backend/src/routes/career-coach-agent.js"
    ]
  },
  {
    "id": "ai-learning-development-path-gap-training-effectiveness-analyzer-5nxr2y-exact-ai",
    "title": "AI Learning Development Path: Gap Training Effectiveness Analyzer",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/src/routes/gap-training-effectiveness-analyzer.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap Training Effectiveness Analyzer\" from AILearningDevelopmentPath. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap Training Effectiveness Analyzer donor inputs",
    "outputLabel": "Gap Training Effectiveness Analyzer AI response",
    "signals": [
      "Context",
      "Input"
    ]
  },
  {
    "id": "ai-multi-agent-classroom-source-workflow",
    "title": "AI Multi Agent Classroom Source Workflow",
    "category": "Source Project Coverage",
    "description": "Source-derived workflow coverage extracted from AIMultiAgentClassroom.",
    "defaultPrompt": "Use the extracted routes, APIs, prompts, and tool files from AIMultiAgentClassroom to identify missing merged-suite capabilities and next implementation steps.",
    "inputLabel": "AI Multi Agent Classroom source context",
    "outputLabel": "AI Multi Agent Classroom source analysis",
    "signals": [
      "frontend/src/pages/AITools",
      "frontend/src/pages/customViews/AgentStudentHeatmap",
      "backend/src/routes/ai"
    ]
  },
  {
    "id": "ai-multi-agent-classroom-ai-tools",
    "title": "AI Multi Agent Classroom AI Tools",
    "category": "Source AI Tools",
    "description": "AI/API/prompt coverage extracted from AIMultiAgentClassroom.",
    "defaultPrompt": "Review AIMultiAgentClassroom AI prompts, APIs, and tool files. Convert them into concrete AI cards, inputs, outputs, and audit actions for this merged suite.",
    "inputLabel": "AI Multi Agent Classroom AI prompt or tool context",
    "outputLabel": "AI Multi Agent Classroom AI tool response",
    "signals": [
      "frontend/src/pages/AITools.js",
      "frontend/src/pages/customViews/AgentStudentHeatmap.jsx",
      "backend/src/routes/ai.js"
    ]
  },
  {
    "id": "ai-multi-agent-classroom-ai-tools-1elhgc-exact-ai",
    "title": "AI Multi Agent Classroom: AI Tools",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AITools.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Tools\" from AIMultiAgentClassroom. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Tools donor inputs",
    "outputLabel": "AI Tools AI response",
    "signals": [
      "frontend/src/pages/AITools.js"
    ]
  },
  {
    "id": "ai-multi-agent-classroom-agent-student-heatmap-14ujiq-exact-ai",
    "title": "AI Multi Agent Classroom: Agent Student Heatmap",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/customViews/AgentStudentHeatmap.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Agent Student Heatmap\" from AIMultiAgentClassroom. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Agent Student Heatmap donor inputs",
    "outputLabel": "Agent Student Heatmap AI response",
    "signals": [
      "frontend/src/pages/customViews/AgentStudentHeatmap.jsx"
    ]
  },
  {
    "id": "ai-multi-agent-classroom-ai-1lp99l-exact-ai",
    "title": "AI Multi Agent Classroom: AI",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/src/routes/ai.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI\" from AIMultiAgentClassroom. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI donor inputs",
    "outputLabel": "AI AI response",
    "signals": [
      "Answers",
      "Attempt Id",
      "Current Level",
      "Period",
      "Position",
      "Session Id",
      "Student Id",
      "Student Message"
    ]
  },
  {
    "id": "ai-music-school-academy-manager-source-workflow",
    "title": "AI Music School Academy Manager Source Workflow",
    "category": "Source Project Coverage",
    "description": "Source-derived workflow coverage extracted from AIMusicSchoolAcademyManager.",
    "defaultPrompt": "Use the extracted routes, APIs, prompts, and tool files from AIMusicSchoolAcademyManager to identify missing merged-suite capabilities and next implementation steps.",
    "inputLabel": "AI Music School Academy Manager source context",
    "outputLabel": "AI Music School Academy Manager source analysis",
    "signals": [
      "frontend/src/main",
      "frontend/src/pages/AIEnsembleAssignment",
      "frontend/src/pages/AIEventPromotion",
      "frontend/src/pages/AILessonPlan",
      "frontend/src/pages/AIMarketingCampaign",
      "frontend/src/pages/AIParentSummary",
      "frontend/src/pages/AIPracticeEvaluation",
      "frontend/src/pages/AIPracticePlan"
    ]
  },
  {
    "id": "ai-music-school-academy-manager-ai-tools",
    "title": "AI Music School Academy Manager AI Tools",
    "category": "Source AI Tools",
    "description": "AI/API/prompt coverage extracted from AIMusicSchoolAcademyManager.",
    "defaultPrompt": "Review AIMusicSchoolAcademyManager AI prompts, APIs, and tool files. Convert them into concrete AI cards, inputs, outputs, and audit actions for this merged suite.",
    "inputLabel": "AI Music School Academy Manager AI prompt or tool context",
    "outputLabel": "AI Music School Academy Manager AI tool response",
    "signals": [
      "frontend/src/main.jsx",
      "frontend/src/pages/AIEnsembleAssignment.jsx",
      "frontend/src/pages/AIEventPromotion.jsx",
      "frontend/src/pages/AILessonPlan.jsx",
      "frontend/src/pages/AIMarketingCampaign.jsx",
      "frontend/src/pages/AIParentSummary.jsx",
      "frontend/src/pages/AIPracticeEvaluation.jsx",
      "frontend/src/pages/AIPracticePlan.jsx"
    ]
  },
  {
    "id": "ai-music-school-academy-manager-ai-ensemble-assignment-fjpsnd-exact-ai",
    "title": "AI Music School Academy Manager: AI Ensemble Assignment",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIEnsembleAssignment.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Ensemble Assignment\" from AIMusicSchoolAcademyManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Ensemble Assignment donor inputs",
    "outputLabel": "AI Ensemble Assignment AI response",
    "signals": [
      "Candidate Student Ids",
      "Ensemble Id"
    ]
  },
  {
    "id": "ai-music-school-academy-manager-ai-event-promotion-yrjt1a-exact-ai",
    "title": "AI Music School Academy Manager: AI Event Promotion",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIEventPromotion.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Event Promotion\" from AIMusicSchoolAcademyManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Event Promotion donor inputs",
    "outputLabel": "AI Event Promotion AI response",
    "signals": [
      "Audience",
      "Channels",
      "Event Date",
      "Event Name",
      "Event Type"
    ]
  },
  {
    "id": "ai-music-school-academy-manager-ai-lesson-plan-rth4nu-exact-ai",
    "title": "AI Music School Academy Manager: AI Lesson Plan",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AILessonPlan.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Lesson Plan\" from AIMusicSchoolAcademyManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Lesson Plan donor inputs",
    "outputLabel": "AI Lesson Plan AI response",
    "signals": [
      "Teacher Id"
    ]
  },
  {
    "id": "ai-music-school-academy-manager-ai-marketing-campaign-lgj5i3-exact-ai",
    "title": "AI Music School Academy Manager: AI Marketing Campaign",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIMarketingCampaign.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Marketing Campaign\" from AIMusicSchoolAcademyManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Marketing Campaign donor inputs",
    "outputLabel": "AI Marketing Campaign AI response",
    "signals": [
      "frontend/src/pages/AIMarketingCampaign.jsx"
    ]
  },
  {
    "id": "ai-music-school-academy-manager-ai-parent-summary-fcufip-exact-ai",
    "title": "AI Music School Academy Manager: AI Parent Summary",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIParentSummary.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Parent Summary\" from AIMusicSchoolAcademyManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Parent Summary donor inputs",
    "outputLabel": "AI Parent Summary AI response",
    "signals": [
      "frontend/src/pages/AIParentSummary.jsx"
    ]
  },
  {
    "id": "ai-music-school-academy-manager-ai-practice-evaluation-1p5cnh-exact-ai",
    "title": "AI Music School Academy Manager: AI Practice Evaluation",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIPracticeEvaluation.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Practice Evaluation\" from AIMusicSchoolAcademyManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Practice Evaluation donor inputs",
    "outputLabel": "AI Practice Evaluation AI response",
    "signals": [
      "Duration Minutes",
      "Notes",
      "Piece",
      "Recording Transcript",
      "Student Id"
    ]
  },
  {
    "id": "ai-music-school-academy-manager-ai-practice-plan-6wdert-exact-ai",
    "title": "AI Music School Academy Manager: AI Practice Plan",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIPracticePlan.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Practice Plan\" from AIMusicSchoolAcademyManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Practice Plan donor inputs",
    "outputLabel": "AI Practice Plan AI response",
    "signals": [
      "frontend/src/pages/AIPracticePlan.jsx"
    ]
  },
  {
    "id": "ai-music-school-academy-manager-ai-progress-report-1r8kwc-exact-ai",
    "title": "AI Music School Academy Manager: AI Progress Report",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIProgressReport.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Progress Report\" from AIMusicSchoolAcademyManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Progress Report donor inputs",
    "outputLabel": "AI Progress Report AI response",
    "signals": [
      "frontend/src/pages/AIProgressReport.jsx"
    ]
  },
  {
    "id": "ai-music-school-academy-manager-ai-recital-program-xyrwep-exact-ai",
    "title": "AI Music School Academy Manager: AI Recital Program",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIRecitalProgram.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Recital Program\" from AIMusicSchoolAcademyManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Recital Program donor inputs",
    "outputLabel": "AI Recital Program AI response",
    "signals": [
      "frontend/src/pages/AIRecitalProgram.jsx"
    ]
  },
  {
    "id": "ai-music-school-academy-manager-ai-retention-risk-123r7d-exact-ai",
    "title": "AI Music School Academy Manager: AI Retention Risk",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIRetentionRisk.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Retention Risk\" from AIMusicSchoolAcademyManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Retention Risk donor inputs",
    "outputLabel": "AI Retention Risk AI response",
    "signals": [
      "Student Id"
    ]
  },
  {
    "id": "ai-music-school-academy-manager-ai-schedule-makeup-1sq0dr-exact-ai",
    "title": "AI Music School Academy Manager: AI Schedule Makeup",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIScheduleMakeup.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Schedule Makeup\" from AIMusicSchoolAcademyManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Schedule Makeup donor inputs",
    "outputLabel": "AI Schedule Makeup AI response",
    "signals": [
      "frontend/src/pages/AIScheduleMakeup.jsx"
    ]
  },
  {
    "id": "ai-music-school-academy-manager-ai-skill-assessment-1n2hjs-exact-ai",
    "title": "AI Music School Academy Manager: AI Skill Assessment",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AISkillAssessment.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Skill Assessment\" from AIMusicSchoolAcademyManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Skill Assessment donor inputs",
    "outputLabel": "AI Skill Assessment AI response",
    "signals": [
      "frontend/src/pages/AISkillAssessment.jsx"
    ]
  },
  {
    "id": "ai-music-school-academy-manager-ai-student-matching-120h3p-exact-ai",
    "title": "AI Music School Academy Manager: AI Student Matching",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIStudentMatching.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Student Matching\" from AIMusicSchoolAcademyManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Student Matching donor inputs",
    "outputLabel": "AI Student Matching AI response",
    "signals": [
      "frontend/src/pages/AIStudentMatching.jsx"
    ]
  },
  {
    "id": "ai-music-school-academy-manager-gap-agentic-h0nlt8-exact-ai",
    "title": "AI Music School Academy Manager: Gap Agentic",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/GapAgentic.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap Agentic\" from AIMusicSchoolAcademyManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap Agentic donor inputs",
    "outputLabel": "Gap Agentic AI response",
    "signals": [
      "frontend/src/pages/GapAgentic.jsx"
    ]
  },
  {
    "id": "ai-music-school-academy-manager-waiting-list-6k5lk0-exact-ai",
    "title": "AI Music School Academy Manager: Waiting List",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/WaitingList.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Waiting List\" from AIMusicSchoolAcademyManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Waiting List donor inputs",
    "outputLabel": "Waiting List AI response",
    "signals": [
      "Student Name *",
      "Email",
      "Instrument",
      "Parent Name",
      "Phone",
      "Preferred Day",
      "Preferred Time",
      "Priority"
    ]
  },
  {
    "id": "ai-music-school-academy-manager-ai-1lp99l-exact-ai",
    "title": "AI Music School Academy Manager: AI",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/src/routes/ai.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI\" from AIMusicSchoolAcademyManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI donor inputs",
    "outputLabel": "AI AI response",
    "signals": [
      "Audience",
      "Campaign Type",
      "Candidate Student Ids",
      "Channels",
      "Duration Minutes",
      "Ensemble Id",
      "Event Date",
      "Event Name"
    ]
  },
  {
    "id": "ai-music-school-academy-manager-engagement-agent-y5lk48-exact-ai",
    "title": "AI Music School Academy Manager: Engagement Agent",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/src/routes/engagement-agent.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Engagement Agent\" from AIMusicSchoolAcademyManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Engagement Agent donor inputs",
    "outputLabel": "Engagement Agent AI response",
    "signals": [
      "backend/src/routes/engagement-agent.js"
    ]
  },
  {
    "id": "ai-music-school-academy-manager-lesson-curator-agent-1xfz0c-exact-ai",
    "title": "AI Music School Academy Manager: Lesson Curator Agent",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/src/routes/lesson-curator-agent.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Lesson Curator Agent\" from AIMusicSchoolAcademyManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Lesson Curator Agent donor inputs",
    "outputLabel": "Lesson Curator Agent AI response",
    "signals": [
      "backend/src/routes/lesson-curator-agent.js"
    ]
  },
  {
    "id": "ai-music-school-academy-manager-waiting-list-17e4sk-exact-ai",
    "title": "AI Music School Academy Manager: Waiting List",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/src/routes/waitingList.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Waiting List\" from AIMusicSchoolAcademyManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Waiting List donor inputs",
    "outputLabel": "Waiting List AI response",
    "signals": [
      "Email",
      "Instrument",
      "Notes",
      "Parent Name",
      "Phone",
      "Preferred Day",
      "Preferred Time",
      "Priority"
    ]
  },
  {
    "id": "ai-personalized-tutor-source-workflow",
    "title": "AI Personalized Tutor Source Workflow",
    "category": "Source Project Coverage",
    "description": "Source-derived workflow coverage extracted from AiPersonalizedTutor.",
    "defaultPrompt": "Use the extracted routes, APIs, prompts, and tool files from AiPersonalizedTutor to identify missing merged-suite capabilities and next implementation steps.",
    "inputLabel": "AI Personalized Tutor source context",
    "outputLabel": "AI Personalized Tutor source analysis",
    "signals": [
      "frontend/src/pages/GapNoRealLmsIntegrationCanvasBlackboardAdapterPage",
      "frontend/tailwind.config",
      "frontend/src/main"
    ]
  },
  {
    "id": "ai-personalized-tutor-ai-tools",
    "title": "AI Personalized Tutor AI Tools",
    "category": "Source AI Tools",
    "description": "AI/API/prompt coverage extracted from AiPersonalizedTutor.",
    "defaultPrompt": "Review AiPersonalizedTutor AI prompts, APIs, and tool files. Convert them into concrete AI cards, inputs, outputs, and audit actions for this merged suite.",
    "inputLabel": "AI Personalized Tutor AI prompt or tool context",
    "outputLabel": "AI Personalized Tutor AI tool response",
    "signals": [
      "frontend/src/pages/GapNoRealLmsIntegrationCanvasBlackboardAdapterPage.jsx",
      "frontend/tailwind.config.js",
      "frontend/src/main.jsx"
    ]
  },
  {
    "id": "ai-school-safety-threat-assessment-source-workflow",
    "title": "AI School Safety Threat Assessment Source Workflow",
    "category": "Source Project Coverage",
    "description": "Source-derived workflow coverage extracted from AISchoolSafetyThreatAssessment.",
    "defaultPrompt": "Use the extracted routes, APIs, prompts, and tool files from AISchoolSafetyThreatAssessment to identify missing merged-suite capabilities and next implementation steps.",
    "inputLabel": "AI School Safety Threat Assessment source context",
    "outputLabel": "AI School Safety Threat Assessment source analysis",
    "signals": [
      "server/openrouter",
      "server/routes/ai-threat-severity",
      "server/routes/aiCenter",
      "server/routes/gap-limited-training-compliance-tracking",
      "server/routes/gap-no-mentalhealthreferral-ai-triage",
      "server/routes/gap-no-threatriskscore-severity-ai",
      "server/routes/training",
      "client/src/main"
    ]
  },
  {
    "id": "ai-school-safety-threat-assessment-ai-tools",
    "title": "AI School Safety Threat Assessment AI Tools",
    "category": "Source AI Tools",
    "description": "AI/API/prompt coverage extracted from AISchoolSafetyThreatAssessment.",
    "defaultPrompt": "Review AISchoolSafetyThreatAssessment AI prompts, APIs, and tool files. Convert them into concrete AI cards, inputs, outputs, and audit actions for this merged suite.",
    "inputLabel": "AI School Safety Threat Assessment AI prompt or tool context",
    "outputLabel": "AI School Safety Threat Assessment AI tool response",
    "signals": [
      "server/openrouter.js",
      "server/routes/ai-threat-severity.js",
      "server/routes/aiCenter.js",
      "server/routes/gap-limited-training-compliance-tracking.js",
      "server/routes/gap-no-mentalhealthreferral-ai-triage.js",
      "server/routes/gap-no-threatriskscore-severity-ai.js",
      "server/routes/training.js",
      "client/src/main.jsx"
    ]
  },
  {
    "id": "ai-school-safety-threat-assessment-ai-threat-severity-4y8qpk-exact-ai",
    "title": "AI School Safety Threat Assessment: AI Threat Severity",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/ai-threat-severity.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Threat Severity\" from AISchoolSafetyThreatAssessment. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Threat Severity donor inputs",
    "outputLabel": "AI Threat Severity AI response",
    "signals": [
      "server/routes/ai-threat-severity.js"
    ]
  },
  {
    "id": "ai-school-safety-threat-assessment-ai-center-14mie6-exact-ai",
    "title": "AI School Safety Threat Assessment: AI Center",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/aiCenter.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Center\" from AISchoolSafetyThreatAssessment. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Center donor inputs",
    "outputLabel": "AI Center AI response",
    "signals": [
      "Academic Signals",
      "Anonymous",
      "Category",
      "Channel",
      "Context",
      "Description",
      "Focus",
      "Focus Areas"
    ]
  },
  {
    "id": "ai-school-safety-threat-assessment-gap-limited-training-compliance-tracking-1p34rx-exact-ai",
    "title": "AI School Safety Threat Assessment: Gap Limited Training Compliance Tracking",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/gap-limited-training-compliance-tracking.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap Limited Training Compliance Tracking\" from AISchoolSafetyThreatAssessment. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap Limited Training Compliance Tracking donor inputs",
    "outputLabel": "Gap Limited Training Compliance Tracking AI response",
    "signals": [
      "Input"
    ]
  },
  {
    "id": "ai-school-safety-threat-assessment-gap-no-mentalhealthreferral-ai-triage-4vxdkk-exact-ai",
    "title": "AI School Safety Threat Assessment: Gap No Mentalhealthreferral AI Triage",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/gap-no-mentalhealthreferral-ai-triage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap No Mentalhealthreferral AI Triage\" from AISchoolSafetyThreatAssessment. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap No Mentalhealthreferral AI Triage donor inputs",
    "outputLabel": "Gap No Mentalhealthreferral AI Triage AI response",
    "signals": [
      "Input"
    ]
  },
  {
    "id": "ai-school-safety-threat-assessment-gap-no-threatriskscore-severity-ai-2owplw-exact-ai",
    "title": "AI School Safety Threat Assessment: Gap No Threatriskscore Severity AI",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/gap-no-threatriskscore-severity-ai.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap No Threatriskscore Severity AI\" from AISchoolSafetyThreatAssessment. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap No Threatriskscore Severity AI donor inputs",
    "outputLabel": "Gap No Threatriskscore Severity AI AI response",
    "signals": [
      "Input"
    ]
  },
  {
    "id": "ai-school-safety-threat-assessment-training-12ypsa-exact-ai",
    "title": "AI School Safety Threat Assessment: Training",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/training.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Training\" from AISchoolSafetyThreatAssessment. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Training donor inputs",
    "outputLabel": "Training AI response",
    "signals": [
      "Completion Rate",
      "Description",
      "Duration Hours",
      "Participants",
      "Program Name",
      "Status",
      "Training Type"
    ]
  },
  {
    "id": "ai-school-safety-threat-assessment-ai-center-42pwwt-exact-ai",
    "title": "AI School Safety Threat Assessment: AI Center",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/AICenter.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Center\" from AISchoolSafetyThreatAssessment. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Center donor inputs",
    "outputLabel": "AI Center AI response",
    "signals": [
      "Data Source",
      "End Date",
      "Feature Type",
      "Scope",
      "Start Date",
      "Timeframe",
      "Time Range"
    ]
  },
  {
    "id": "ai-school-safety-threat-assessment-cf-staff-training-personalization-1xdue7-exact-ai",
    "title": "AI School Safety Threat Assessment: Cf Staff Training Personalization",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/CfStaffTrainingPersonalization.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Cf Staff Training Personalization\" from AISchoolSafetyThreatAssessment. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Cf Staff Training Personalization donor inputs",
    "outputLabel": "Cf Staff Training Personalization AI response",
    "signals": [
      "client/src/pages/CfStaffTrainingPersonalization.jsx"
    ]
  },
  {
    "id": "ai-school-safety-threat-assessment-gap-limited-training-compliance-tracking-dlh00e-exact-ai",
    "title": "AI School Safety Threat Assessment: Gap Limited Training Compliance Tracking",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/GapLimitedTrainingComplianceTracking.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap Limited Training Compliance Tracking\" from AISchoolSafetyThreatAssessment. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap Limited Training Compliance Tracking donor inputs",
    "outputLabel": "Gap Limited Training Compliance Tracking AI response",
    "signals": [
      "client/src/pages/GapLimitedTrainingComplianceTracking.jsx"
    ]
  },
  {
    "id": "ai-school-safety-threat-assessment-gap-no-mentalhealthreferral-ai-triage-uwrflj-exact-ai",
    "title": "AI School Safety Threat Assessment: Gap No Mentalhealthreferral AI Triage",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/GapNoMentalhealthreferralAiTriage.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap No Mentalhealthreferral AI Triage\" from AISchoolSafetyThreatAssessment. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap No Mentalhealthreferral AI Triage donor inputs",
    "outputLabel": "Gap No Mentalhealthreferral AI Triage AI response",
    "signals": [
      "client/src/pages/GapNoMentalhealthreferralAiTriage.jsx"
    ]
  },
  {
    "id": "ai-school-safety-threat-assessment-gap-no-threatriskscore-severity-ai-112fno-exact-ai",
    "title": "AI School Safety Threat Assessment: Gap No Threatriskscore Severity AI",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/GapNoThreatriskscoreSeverityAi.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap No Threatriskscore Severity AI\" from AISchoolSafetyThreatAssessment. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap No Threatriskscore Severity AI donor inputs",
    "outputLabel": "Gap No Threatriskscore Severity AI AI response",
    "signals": [
      "client/src/pages/GapNoThreatriskscoreSeverityAi.jsx"
    ]
  },
  {
    "id": "ai-school-safety-threat-assessment-training-compliance-aggregate-page-1kj1sx-exact-ai",
    "title": "AI School Safety Threat Assessment: Training Compliance Aggregate Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/TrainingComplianceAggregatePage.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Training Compliance Aggregate Page\" from AISchoolSafetyThreatAssessment. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Training Compliance Aggregate Page donor inputs",
    "outputLabel": "Training Compliance Aggregate Page AI response",
    "signals": [
      "client/src/pages/TrainingComplianceAggregatePage.jsx"
    ]
  },
  {
    "id": "ai-school-safety-threat-assessment-training-programs-11u4db-exact-ai",
    "title": "AI School Safety Threat Assessment: Training Programs",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/TrainingPrograms.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Training Programs\" from AISchoolSafetyThreatAssessment. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Training Programs donor inputs",
    "outputLabel": "Training Programs AI response",
    "signals": [
      "Program Title *"
    ]
  }
];
