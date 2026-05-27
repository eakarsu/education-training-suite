export type SourceAIToolField = {
  name: string;
  label: string;
  type: string;
  defaultValue: string;
  placeholder: string;
  options: string[];
  required?: boolean;
  source: string;
};

export const sourceAIToolFieldsByToolId: Record<string, SourceAIToolField[]> = {
  "vr-training-scenario-copilot": [
    {
      "name": "objective",
      "label": "Objective",
      "type": "textarea",
      "defaultValue": "Improve the VR Training Scenario workflow and produce audit-ready next actions.",
      "placeholder": "Describe the goal",
      "options": [],
      "required": true,
      "source": "AIVRTrainingScenarioGenerator"
    },
    {
      "name": "source_context",
      "label": "Source Context",
      "type": "textarea",
      "defaultValue": "Paste VR Training Scenario source details, notes, records, or documents.",
      "placeholder": "Paste source context",
      "options": [],
      "required": true,
      "source": "AIVRTrainingScenarioGenerator"
    },
    {
      "name": "output_format",
      "label": "Output Format",
      "type": "select",
      "defaultValue": "Action plan",
      "placeholder": "Select output format",
      "options": [
        "Action plan",
        "Executive summary",
        "Evidence table",
        "Checklist"
      ],
      "required": true,
      "source": "AIVRTrainingScenarioGenerator"
    }
  ],
  "ai-education-suite-agentic-tutor-gb8km-exact-ai": [
    {
      "name": "level",
      "label": "Level",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/agenticTutor.js"
    },
    {
      "name": "messages = []",
      "label": "Messages = []",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/agenticTutor.js"
    },
    {
      "name": "subject",
      "label": "Subject",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/agenticTutor.js"
    }
  ],
  "ai-education-suite-ai-advanced-1tlhh5-exact-ai": [
    {
      "name": "conversation_id",
      "label": "Conversation Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiAdvanced.js"
    },
    {
      "name": "date_range",
      "label": "Date Range",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiAdvanced.js"
    },
    {
      "name": "message",
      "label": "Message",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiAdvanced.js"
    },
    {
      "name": "subject",
      "label": "Subject",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiAdvanced.js"
    }
  ],
  "ai-education-suite-ai-new-1l6olc-exact-ai": [
    {
      "name": "date_range",
      "label": "Date Range",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "difficulty",
      "label": "Difficulty",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "essay_id",
      "label": "Essay Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "learning_path_id",
      "label": "Learning Path Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "max_recommendations",
      "label": "Max Recommendations",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "num_questions",
      "label": "Num Questions",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "source_content",
      "label": "Source Content",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "subject",
      "label": "Subject",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "target_date",
      "label": "Target Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "topic",
      "label": "Topic",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    }
  ],
  "ai-education-suite-classroom-agents-1lnbtb-exact-ai": [
    {
      "name": "learning_style",
      "label": "Learning Style",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/classroomAgents.js"
    },
    {
      "name": "question",
      "label": "Question",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/classroomAgents.js"
    },
    {
      "name": "student_level",
      "label": "Student Level",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/classroomAgents.js"
    },
    {
      "name": "student_response",
      "label": "Student Response",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/classroomAgents.js"
    },
    {
      "name": "subject",
      "label": "Subject",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/classroomAgents.js"
    },
    {
      "name": "topic",
      "label": "Topic",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/classroomAgents.js"
    }
  ],
  "ai-education-suite-ai-tools-1977ko-exact-ai": [
    {
      "name": "difficulty",
      "label": "Difficulty",
      "type": "text",
      "defaultValue": "medium",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AITools.js"
    },
    {
      "name": "end",
      "label": "End",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AITools.js"
    },
    {
      "name": "learning_path_id",
      "label": "Learning Path Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AITools.js"
    },
    {
      "name": "max_recommendations",
      "label": "Max Recommendations",
      "type": "number",
      "defaultValue": "5",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AITools.js"
    },
    {
      "name": "num_questions",
      "label": "Num Questions",
      "type": "text",
      "defaultValue": "5",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AITools.js"
    },
    {
      "name": "source_content",
      "label": "Source Content",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AITools.js"
    },
    {
      "name": "start",
      "label": "Start",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AITools.js"
    },
    {
      "name": "subject",
      "label": "Subject",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AITools.js"
    },
    {
      "name": "target_date",
      "label": "Target Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AITools.js"
    },
    {
      "name": "topic",
      "label": "Topic",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AITools.js"
    }
  ],
  "ai-education-suite-verify-email-5epccd-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Verify Email source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/VerifyEmail.js"
    }
  ],
  "ai-education-suite-source-workflow": [
    {
      "name": "level",
      "label": "Level",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/agenticTutor.js"
    },
    {
      "name": "messages = []",
      "label": "Messages = []",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/agenticTutor.js"
    },
    {
      "name": "subject",
      "label": "Subject",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/agenticTutor.js"
    },
    {
      "name": "conversation_id",
      "label": "Conversation Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiAdvanced.js"
    },
    {
      "name": "date_range",
      "label": "Date Range",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiAdvanced.js"
    },
    {
      "name": "message",
      "label": "Message",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiAdvanced.js"
    },
    {
      "name": "difficulty",
      "label": "Difficulty",
      "type": "text",
      "defaultValue": "medium",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "essay_id",
      "label": "Essay Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "learning_path_id",
      "label": "Learning Path Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "max_recommendations",
      "label": "Max Recommendations",
      "type": "number",
      "defaultValue": "5",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "num_questions",
      "label": "Num Questions",
      "type": "text",
      "defaultValue": "5",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "source_content",
      "label": "Source Content",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "target_date",
      "label": "Target Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "topic",
      "label": "Topic",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "learning_style",
      "label": "Learning Style",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/classroomAgents.js"
    },
    {
      "name": "question",
      "label": "Question",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/classroomAgents.js"
    },
    {
      "name": "student_level",
      "label": "Student Level",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/classroomAgents.js"
    },
    {
      "name": "student_response",
      "label": "Student Response",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/classroomAgents.js"
    },
    {
      "name": "end",
      "label": "End",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AITools.js"
    },
    {
      "name": "start",
      "label": "Start",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AITools.js"
    },
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Verify Email source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/VerifyEmail.js"
    }
  ],
  "ai-education-suite-ai-tools": [
    {
      "name": "level",
      "label": "Level",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/agenticTutor.js"
    },
    {
      "name": "messages = []",
      "label": "Messages = []",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/agenticTutor.js"
    },
    {
      "name": "subject",
      "label": "Subject",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/agenticTutor.js"
    },
    {
      "name": "conversation_id",
      "label": "Conversation Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiAdvanced.js"
    },
    {
      "name": "date_range",
      "label": "Date Range",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiAdvanced.js"
    },
    {
      "name": "message",
      "label": "Message",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiAdvanced.js"
    },
    {
      "name": "difficulty",
      "label": "Difficulty",
      "type": "text",
      "defaultValue": "medium",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "essay_id",
      "label": "Essay Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "learning_path_id",
      "label": "Learning Path Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "max_recommendations",
      "label": "Max Recommendations",
      "type": "number",
      "defaultValue": "5",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "num_questions",
      "label": "Num Questions",
      "type": "text",
      "defaultValue": "5",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "source_content",
      "label": "Source Content",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "target_date",
      "label": "Target Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "topic",
      "label": "Topic",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "learning_style",
      "label": "Learning Style",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/classroomAgents.js"
    },
    {
      "name": "question",
      "label": "Question",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/classroomAgents.js"
    },
    {
      "name": "student_level",
      "label": "Student Level",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/classroomAgents.js"
    },
    {
      "name": "student_response",
      "label": "Student Response",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/classroomAgents.js"
    },
    {
      "name": "end",
      "label": "End",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AITools.js"
    },
    {
      "name": "start",
      "label": "Start",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AITools.js"
    },
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Verify Email source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/VerifyEmail.js"
    }
  ],
  "ai-language-learning-companion-ai-j615h1-exact-ai": [
    {
      "name": "availableMinutes = 30",
      "label": "Available Minutes = 30",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "goals",
      "label": "Goals",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "idiom",
      "label": "Idiom",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "language = 'Spanish'",
      "label": "Language = 'Spanish'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "learnerNativeLanguage = 'English'",
      "label": "Learner Native Language = 'English'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "level = 'beginner'",
      "label": "Level = 'Beginner'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "phrase",
      "label": "Phrase",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "text",
      "label": "Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "weakAreas = []",
      "label": "Weak Areas = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    }
  ],
  "ai-language-learning-companion-daily-lesson-1819yb-exact-ai": [
    {
      "name": "language",
      "label": "Language",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/dailyLesson.js"
    }
  ],
  "ai-language-learning-companion-gap-ai-grammar-correction-1z022c-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/gap-ai-grammar-correction.js"
    },
    {
      "name": "input",
      "label": "Input",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/gap-ai-grammar-correction.js"
    }
  ],
  "ai-language-learning-companion-gap-ai-idiom-explanation-1uj3lj-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/gap-ai-idiom-explanation.js"
    },
    {
      "name": "input",
      "label": "Input",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/gap-ai-idiom-explanation.js"
    }
  ],
  "ai-language-learning-companion-gap-ai-personalized-lesson-plan-18zvct-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/gap-ai-personalized-lesson-plan.js"
    },
    {
      "name": "input",
      "label": "Input",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/gap-ai-personalized-lesson-plan.js"
    }
  ],
  "ai-language-learning-companion-gap-ai-pronunciation-feedback-wzz5e0-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/gap-ai-pronunciation-feedback.js"
    },
    {
      "name": "input",
      "label": "Input",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/gap-ai-pronunciation-feedback.js"
    }
  ],
  "ai-language-learning-companion-gap-ai-tutor-response-1xlzh2-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/gap-ai-tutor-response.js"
    },
    {
      "name": "input",
      "label": "Input",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/gap-ai-tutor-response.js"
    }
  ],
  "ai-language-learning-companion-ai-tools-page-uo1rbq-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Tools Page source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIToolsPage.js"
    }
  ],
  "ai-language-learning-companion-daily-lesson-79h4vr-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Daily Lesson source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/DailyLesson.js"
    }
  ],
  "ai-language-learning-companion-gap-agentic-amr2uz-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap Agentic source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/GapAgentic.jsx"
    }
  ],
  "ai-language-learning-companion-gap-ai-grammar-correction-sjgv01-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap AI Grammar Correction source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/GapAiGrammarCorrection.jsx"
    }
  ],
  "ai-language-learning-companion-gap-ai-idiom-explanation-1q5i5g-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap AI Idiom Explanation source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/GapAiIdiomExplanation.jsx"
    }
  ],
  "ai-language-learning-companion-gap-ai-personalized-lesson-plan-b189zl-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap AI Personalized Lesson Plan source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/GapAiPersonalizedLessonPlan.jsx"
    }
  ],
  "ai-language-learning-companion-gap-ai-pronunciation-feedback-hwdbt2-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap AI Pronunciation Feedback source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/GapAiPronunciationFeedback.jsx"
    }
  ],
  "ai-language-learning-companion-gap-ai-tutor-response-1dbu6g-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap AI Tutor Response source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/GapAiTutorResponse.jsx"
    }
  ],
  "ai-language-learning-companion-source-workflow": [
    {
      "name": "availableMinutes = 30",
      "label": "Available Minutes = 30",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "goals",
      "label": "Goals",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "idiom",
      "label": "Idiom",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "language = 'Spanish'",
      "label": "Language = 'Spanish'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "learnerNativeLanguage = 'English'",
      "label": "Learner Native Language = 'English'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "level = 'beginner'",
      "label": "Level = 'Beginner'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "phrase",
      "label": "Phrase",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "text",
      "label": "Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "weakAreas = []",
      "label": "Weak Areas = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "language",
      "label": "Language",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/dailyLesson.js"
    },
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Tools Page source input context",
      "options": [],
      "required": false,
      "source": "server/routes/gap-ai-grammar-correction.js"
    },
    {
      "name": "input",
      "label": "Input",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/gap-ai-grammar-correction.js"
    }
  ],
  "ai-language-learning-companion-ai-tools": [
    {
      "name": "availableMinutes = 30",
      "label": "Available Minutes = 30",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "goals",
      "label": "Goals",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "idiom",
      "label": "Idiom",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "language = 'Spanish'",
      "label": "Language = 'Spanish'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "learnerNativeLanguage = 'English'",
      "label": "Learner Native Language = 'English'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "level = 'beginner'",
      "label": "Level = 'Beginner'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "phrase",
      "label": "Phrase",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "text",
      "label": "Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "weakAreas = []",
      "label": "Weak Areas = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "language",
      "label": "Language",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/dailyLesson.js"
    },
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Tools Page source input context",
      "options": [],
      "required": false,
      "source": "server/routes/gap-ai-grammar-correction.js"
    },
    {
      "name": "input",
      "label": "Input",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/gap-ai-grammar-correction.js"
    }
  ],
  "ai-learning-development-path-ai-tools-page-kxx281-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Tools Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIToolsPage.js"
    }
  ],
  "ai-learning-development-path-compliance-trainings-19tj3g-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Compliance Trainings source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/ComplianceTrainings.js"
    }
  ],
  "ai-learning-development-path-gap-agentic-h0nlt8-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap Agentic source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/GapAgentic.jsx"
    }
  ],
  "ai-learning-development-path-gap-training-effectiveness-analyzer-no7ihb-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap Training Effectiveness Analyzer source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/GapTrainingEffectivenessAnalyzer.jsx"
    }
  ],
  "ai-learning-development-path-training-events-6vuham-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Training Events source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/TrainingEvents.js"
    }
  ],
  "ai-learning-development-path-ai-1lp99l-exact-ai": [
    {
      "name": "department",
      "label": "Department",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "employeeId",
      "label": "Employee Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "fiscalPeriod",
      "label": "Fiscal Period",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "plan",
      "label": "Plan",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "priorities",
      "label": "Priorities",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "roleTitle",
      "label": "Role Title",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "totalBudgetUsd",
      "label": "Total Budget Usd",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "urgencyMonths",
      "label": "Urgency Months",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    }
  ],
  "ai-learning-development-path-career-coach-agent-hfcrsc-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Career Coach Agent source input context",
      "options": [],
      "required": false,
      "source": "backend/src/routes/career-coach-agent.js"
    }
  ],
  "ai-learning-development-path-gap-training-effectiveness-analyzer-5nxr2y-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/gap-training-effectiveness-analyzer.js"
    },
    {
      "name": "input",
      "label": "Input",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/gap-training-effectiveness-analyzer.js"
    }
  ],
  "ai-learning-development-path-source-workflow": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Tools Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIToolsPage.js"
    },
    {
      "name": "department",
      "label": "Department",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "employeeId",
      "label": "Employee Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "fiscalPeriod",
      "label": "Fiscal Period",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "plan",
      "label": "Plan",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "priorities",
      "label": "Priorities",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "roleTitle",
      "label": "Role Title",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "totalBudgetUsd",
      "label": "Total Budget Usd",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "urgencyMonths",
      "label": "Urgency Months",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "input",
      "label": "Input",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/gap-training-effectiveness-analyzer.js"
    }
  ],
  "ai-learning-development-path-ai-tools": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Tools Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIToolsPage.js"
    },
    {
      "name": "department",
      "label": "Department",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "employeeId",
      "label": "Employee Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "fiscalPeriod",
      "label": "Fiscal Period",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "plan",
      "label": "Plan",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "priorities",
      "label": "Priorities",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "roleTitle",
      "label": "Role Title",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "totalBudgetUsd",
      "label": "Total Budget Usd",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "urgencyMonths",
      "label": "Urgency Months",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "input",
      "label": "Input",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/gap-training-effectiveness-analyzer.js"
    }
  ],
  "ai-multi-agent-classroom-ai-tools-1elhgc-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Tools source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AITools.js"
    }
  ],
  "ai-multi-agent-classroom-agent-student-heatmap-14ujiq-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Agent Student Heatmap source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/customViews/AgentStudentHeatmap.jsx"
    }
  ],
  "ai-multi-agent-classroom-ai-1lp99l-exact-ai": [
    {
      "name": "answers",
      "label": "Answers",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "attemptId",
      "label": "Attempt Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "currentLevel",
      "label": "Current Level",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "period",
      "label": "Period",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "position",
      "label": "Position",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "sessionId",
      "label": "Session Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "studentId",
      "label": "Student Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "studentMessage",
      "label": "Student Message",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "tone",
      "label": "Tone",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "topic",
      "label": "Topic",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    }
  ],
  "ai-multi-agent-classroom-source-workflow": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Tools source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AITools.js"
    },
    {
      "name": "answers",
      "label": "Answers",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "attemptId",
      "label": "Attempt Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "currentLevel",
      "label": "Current Level",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "period",
      "label": "Period",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "position",
      "label": "Position",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "sessionId",
      "label": "Session Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "studentId",
      "label": "Student Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "studentMessage",
      "label": "Student Message",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "tone",
      "label": "Tone",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "topic",
      "label": "Topic",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    }
  ],
  "ai-multi-agent-classroom-ai-tools": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Tools source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AITools.js"
    },
    {
      "name": "answers",
      "label": "Answers",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "attemptId",
      "label": "Attempt Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "currentLevel",
      "label": "Current Level",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "period",
      "label": "Period",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "position",
      "label": "Position",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "sessionId",
      "label": "Session Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "studentId",
      "label": "Student Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "studentMessage",
      "label": "Student Message",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "tone",
      "label": "Tone",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "topic",
      "label": "Topic",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    }
  ],
  "ai-music-school-academy-manager-ai-ensemble-assignment-fjpsnd-exact-ai": [
    {
      "name": "candidateStudentIds",
      "label": "Candidate Student Ids",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIEnsembleAssignment.jsx"
    },
    {
      "name": "ensembleId",
      "label": "Ensemble Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIEnsembleAssignment.jsx"
    }
  ],
  "ai-music-school-academy-manager-ai-event-promotion-yrjt1a-exact-ai": [
    {
      "name": "audience",
      "label": "Audience",
      "type": "text",
      "defaultValue": "parents and community",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIEventPromotion.jsx"
    },
    {
      "name": "channels",
      "label": "Channels",
      "type": "text",
      "defaultValue": "email, social, flyers",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIEventPromotion.jsx"
    },
    {
      "name": "eventDate",
      "label": "Event Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIEventPromotion.jsx"
    },
    {
      "name": "eventName",
      "label": "Event Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIEventPromotion.jsx"
    },
    {
      "name": "eventType",
      "label": "Event Type",
      "type": "text",
      "defaultValue": "recital",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIEventPromotion.jsx"
    }
  ],
  "ai-music-school-academy-manager-ai-lesson-plan-rth4nu-exact-ai": [
    {
      "name": "teacher_id",
      "label": "Teacher Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AILessonPlan.jsx"
    }
  ],
  "ai-music-school-academy-manager-ai-marketing-campaign-lgj5i3-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Marketing Campaign source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIMarketingCampaign.jsx"
    }
  ],
  "ai-music-school-academy-manager-ai-parent-summary-fcufip-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Parent Summary source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIParentSummary.jsx"
    }
  ],
  "ai-music-school-academy-manager-ai-practice-evaluation-1p5cnh-exact-ai": [
    {
      "name": "duration_minutes",
      "label": "Duration Minutes",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIPracticeEvaluation.jsx"
    },
    {
      "name": "notes",
      "label": "Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIPracticeEvaluation.jsx"
    },
    {
      "name": "piece",
      "label": "Piece",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIPracticeEvaluation.jsx"
    },
    {
      "name": "recording_transcript",
      "label": "Recording Transcript",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIPracticeEvaluation.jsx"
    },
    {
      "name": "studentId",
      "label": "Student Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIPracticeEvaluation.jsx"
    }
  ],
  "ai-music-school-academy-manager-ai-practice-plan-6wdert-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Practice Plan source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIPracticePlan.jsx"
    }
  ],
  "ai-music-school-academy-manager-ai-progress-report-1r8kwc-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Progress Report source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIProgressReport.jsx"
    }
  ],
  "ai-music-school-academy-manager-ai-recital-program-xyrwep-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Recital Program source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIRecitalProgram.jsx"
    }
  ],
  "ai-music-school-academy-manager-ai-retention-risk-123r7d-exact-ai": [
    {
      "name": "studentId",
      "label": "Student Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIRetentionRisk.jsx"
    }
  ],
  "ai-music-school-academy-manager-ai-schedule-makeup-1sq0dr-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Schedule Makeup source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIScheduleMakeup.jsx"
    }
  ],
  "ai-music-school-academy-manager-ai-skill-assessment-1n2hjs-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Skill Assessment source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AISkillAssessment.jsx"
    }
  ],
  "ai-music-school-academy-manager-ai-student-matching-120h3p-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Student Matching source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIStudentMatching.jsx"
    }
  ],
  "ai-music-school-academy-manager-gap-agentic-h0nlt8-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap Agentic source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/GapAgentic.jsx"
    }
  ],
  "ai-music-school-academy-manager-waiting-list-6k5lk0-exact-ai": [
    {
      "name": "student_name",
      "label": "Student Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": true,
      "source": "frontend/src/pages/WaitingList.jsx"
    },
    {
      "name": "email",
      "label": "Email",
      "type": "email",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/WaitingList.jsx"
    },
    {
      "name": "instrument",
      "label": "Instrument",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/WaitingList.jsx"
    },
    {
      "name": "parent_name",
      "label": "Parent Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/WaitingList.jsx"
    },
    {
      "name": "phone",
      "label": "Phone",
      "type": "tel",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/WaitingList.jsx"
    },
    {
      "name": "preferred_day",
      "label": "Preferred Day",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/WaitingList.jsx"
    },
    {
      "name": "preferred_time",
      "label": "Preferred Time",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/WaitingList.jsx"
    },
    {
      "name": "priority",
      "label": "Priority",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/WaitingList.jsx"
    },
    {
      "name": "teacher_preference",
      "label": "Teacher Preference",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/WaitingList.jsx"
    }
  ],
  "ai-music-school-academy-manager-ai-1lp99l-exact-ai": [
    {
      "name": "audience",
      "label": "Audience",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "campaignType",
      "label": "Campaign Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "candidateStudentIds",
      "label": "Candidate Student Ids",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "channels",
      "label": "Channels",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "duration_minutes",
      "label": "Duration Minutes",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "ensembleId",
      "label": "Ensemble Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "eventDate",
      "label": "Event Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "eventName",
      "label": "Event Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "eventType",
      "label": "Event Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "lessonId",
      "label": "Lesson Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "notes",
      "label": "Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "piece",
      "label": "Piece",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "recitalId",
      "label": "Recital Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "recording_transcript",
      "label": "Recording Transcript",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "studentId",
      "label": "Student Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "targetAudience",
      "label": "Target Audience",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "teacherId",
      "label": "Teacher Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    }
  ],
  "ai-music-school-academy-manager-engagement-agent-y5lk48-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Engagement Agent source input context",
      "options": [],
      "required": false,
      "source": "backend/src/routes/engagement-agent.js"
    }
  ],
  "ai-music-school-academy-manager-lesson-curator-agent-1xfz0c-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Lesson Curator Agent source input context",
      "options": [],
      "required": false,
      "source": "backend/src/routes/lesson-curator-agent.js"
    }
  ],
  "ai-music-school-academy-manager-waiting-list-17e4sk-exact-ai": [
    {
      "name": "email",
      "label": "Email",
      "type": "email",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/waitingList.js"
    },
    {
      "name": "instrument",
      "label": "Instrument",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/waitingList.js"
    },
    {
      "name": "notes",
      "label": "Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/waitingList.js"
    },
    {
      "name": "parent_name",
      "label": "Parent Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/waitingList.js"
    },
    {
      "name": "phone",
      "label": "Phone",
      "type": "tel",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/waitingList.js"
    },
    {
      "name": "preferred_day",
      "label": "Preferred Day",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/waitingList.js"
    },
    {
      "name": "preferred_time",
      "label": "Preferred Time",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/waitingList.js"
    },
    {
      "name": "priority",
      "label": "Priority",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/waitingList.js"
    },
    {
      "name": "status",
      "label": "Status",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/waitingList.js"
    },
    {
      "name": "student_name",
      "label": "Student Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/waitingList.js"
    },
    {
      "name": "teacher_preference",
      "label": "Teacher Preference",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/waitingList.js"
    }
  ],
  "ai-music-school-academy-manager-source-workflow": [
    {
      "name": "candidateStudentIds",
      "label": "Candidate Student Ids",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIEnsembleAssignment.jsx"
    },
    {
      "name": "ensembleId",
      "label": "Ensemble Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIEnsembleAssignment.jsx"
    },
    {
      "name": "audience",
      "label": "Audience",
      "type": "text",
      "defaultValue": "parents and community",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIEventPromotion.jsx"
    },
    {
      "name": "channels",
      "label": "Channels",
      "type": "text",
      "defaultValue": "email, social, flyers",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIEventPromotion.jsx"
    },
    {
      "name": "eventDate",
      "label": "Event Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIEventPromotion.jsx"
    },
    {
      "name": "eventName",
      "label": "Event Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIEventPromotion.jsx"
    },
    {
      "name": "eventType",
      "label": "Event Type",
      "type": "text",
      "defaultValue": "recital",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIEventPromotion.jsx"
    },
    {
      "name": "teacher_id",
      "label": "Teacher Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AILessonPlan.jsx"
    },
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Marketing Campaign source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIMarketingCampaign.jsx"
    },
    {
      "name": "duration_minutes",
      "label": "Duration Minutes",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIPracticeEvaluation.jsx"
    },
    {
      "name": "notes",
      "label": "Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIPracticeEvaluation.jsx"
    },
    {
      "name": "piece",
      "label": "Piece",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIPracticeEvaluation.jsx"
    },
    {
      "name": "recording_transcript",
      "label": "Recording Transcript",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIPracticeEvaluation.jsx"
    },
    {
      "name": "studentId",
      "label": "Student Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIPracticeEvaluation.jsx"
    },
    {
      "name": "student_name",
      "label": "Student Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": true,
      "source": "frontend/src/pages/WaitingList.jsx"
    },
    {
      "name": "email",
      "label": "Email",
      "type": "email",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/WaitingList.jsx"
    },
    {
      "name": "instrument",
      "label": "Instrument",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/WaitingList.jsx"
    },
    {
      "name": "parent_name",
      "label": "Parent Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/WaitingList.jsx"
    },
    {
      "name": "phone",
      "label": "Phone",
      "type": "tel",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/WaitingList.jsx"
    },
    {
      "name": "preferred_day",
      "label": "Preferred Day",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/WaitingList.jsx"
    },
    {
      "name": "preferred_time",
      "label": "Preferred Time",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/WaitingList.jsx"
    },
    {
      "name": "priority",
      "label": "Priority",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/WaitingList.jsx"
    },
    {
      "name": "teacher_preference",
      "label": "Teacher Preference",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/WaitingList.jsx"
    },
    {
      "name": "campaignType",
      "label": "Campaign Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "lessonId",
      "label": "Lesson Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "recitalId",
      "label": "Recital Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "targetAudience",
      "label": "Target Audience",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "teacherId",
      "label": "Teacher Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "status",
      "label": "Status",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/waitingList.js"
    }
  ],
  "ai-music-school-academy-manager-ai-tools": [
    {
      "name": "candidateStudentIds",
      "label": "Candidate Student Ids",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIEnsembleAssignment.jsx"
    },
    {
      "name": "ensembleId",
      "label": "Ensemble Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIEnsembleAssignment.jsx"
    },
    {
      "name": "audience",
      "label": "Audience",
      "type": "text",
      "defaultValue": "parents and community",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIEventPromotion.jsx"
    },
    {
      "name": "channels",
      "label": "Channels",
      "type": "text",
      "defaultValue": "email, social, flyers",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIEventPromotion.jsx"
    },
    {
      "name": "eventDate",
      "label": "Event Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIEventPromotion.jsx"
    },
    {
      "name": "eventName",
      "label": "Event Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIEventPromotion.jsx"
    },
    {
      "name": "eventType",
      "label": "Event Type",
      "type": "text",
      "defaultValue": "recital",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIEventPromotion.jsx"
    },
    {
      "name": "teacher_id",
      "label": "Teacher Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AILessonPlan.jsx"
    },
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Marketing Campaign source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIMarketingCampaign.jsx"
    },
    {
      "name": "duration_minutes",
      "label": "Duration Minutes",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIPracticeEvaluation.jsx"
    },
    {
      "name": "notes",
      "label": "Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIPracticeEvaluation.jsx"
    },
    {
      "name": "piece",
      "label": "Piece",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIPracticeEvaluation.jsx"
    },
    {
      "name": "recording_transcript",
      "label": "Recording Transcript",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIPracticeEvaluation.jsx"
    },
    {
      "name": "studentId",
      "label": "Student Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIPracticeEvaluation.jsx"
    },
    {
      "name": "student_name",
      "label": "Student Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": true,
      "source": "frontend/src/pages/WaitingList.jsx"
    },
    {
      "name": "email",
      "label": "Email",
      "type": "email",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/WaitingList.jsx"
    },
    {
      "name": "instrument",
      "label": "Instrument",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/WaitingList.jsx"
    },
    {
      "name": "parent_name",
      "label": "Parent Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/WaitingList.jsx"
    },
    {
      "name": "phone",
      "label": "Phone",
      "type": "tel",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/WaitingList.jsx"
    },
    {
      "name": "preferred_day",
      "label": "Preferred Day",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/WaitingList.jsx"
    },
    {
      "name": "preferred_time",
      "label": "Preferred Time",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/WaitingList.jsx"
    },
    {
      "name": "priority",
      "label": "Priority",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/WaitingList.jsx"
    },
    {
      "name": "teacher_preference",
      "label": "Teacher Preference",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/WaitingList.jsx"
    },
    {
      "name": "campaignType",
      "label": "Campaign Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "lessonId",
      "label": "Lesson Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "recitalId",
      "label": "Recital Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "targetAudience",
      "label": "Target Audience",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "teacherId",
      "label": "Teacher Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "status",
      "label": "Status",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/waitingList.js"
    }
  ],
  "ai-personalized-tutor-source-workflow": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste AiPersonalizedTutor source AI context",
      "options": [],
      "required": false,
      "source": "generated"
    }
  ],
  "ai-personalized-tutor-ai-tools": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste AiPersonalizedTutor source AI context",
      "options": [],
      "required": false,
      "source": "generated"
    }
  ],
  "ai-school-safety-threat-assessment-ai-threat-severity-4y8qpk-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Threat Severity source input context",
      "options": [],
      "required": false,
      "source": "server/routes/ai-threat-severity.js"
    }
  ],
  "ai-school-safety-threat-assessment-ai-center-14mie6-exact-ai": [
    {
      "name": "academic_signals",
      "label": "Academic Signals",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiCenter.js"
    },
    {
      "name": "anonymous",
      "label": "Anonymous",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiCenter.js"
    },
    {
      "name": "category",
      "label": "Category",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiCenter.js"
    },
    {
      "name": "channel",
      "label": "Channel",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiCenter.js"
    },
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiCenter.js"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiCenter.js"
    },
    {
      "name": "focus",
      "label": "Focus",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiCenter.js"
    },
    {
      "name": "focus_areas",
      "label": "Focus Areas",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiCenter.js"
    },
    {
      "name": "has_imminent_threat",
      "label": "Has Imminent Threat",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiCenter.js"
    },
    {
      "name": "incident_id",
      "label": "Incident Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiCenter.js"
    },
    {
      "name": "incident_type",
      "label": "Incident Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiCenter.js"
    },
    {
      "name": "location",
      "label": "Location",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiCenter.js"
    },
    {
      "name": "location_hint",
      "label": "Location Hint",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiCenter.js"
    },
    {
      "name": "message",
      "label": "Message",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiCenter.js"
    },
    {
      "name": "observations",
      "label": "Observations",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiCenter.js"
    },
    {
      "name": "role_focus",
      "label": "Role Focus",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiCenter.js"
    },
    {
      "name": "school_context",
      "label": "School Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiCenter.js"
    },
    {
      "name": "school_id",
      "label": "School Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiCenter.js"
    },
    {
      "name": "school_metadata",
      "label": "School Metadata",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiCenter.js"
    },
    {
      "name": "source",
      "label": "Source",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiCenter.js"
    },
    {
      "name": "student_id",
      "label": "Student Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiCenter.js"
    },
    {
      "name": "threat_id",
      "label": "Threat Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiCenter.js"
    },
    {
      "name": "threat_text",
      "label": "Threat Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiCenter.js"
    },
    {
      "name": "timeframe",
      "label": "Timeframe",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiCenter.js"
    },
    {
      "name": "tip_text",
      "label": "Tip Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiCenter.js"
    }
  ],
  "ai-school-safety-threat-assessment-gap-limited-training-compliance-tracking-1p34rx-exact-ai": [
    {
      "name": "input",
      "label": "Input",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/gap-limited-training-compliance-tracking.js"
    }
  ],
  "ai-school-safety-threat-assessment-gap-no-mentalhealthreferral-ai-triage-4vxdkk-exact-ai": [
    {
      "name": "input",
      "label": "Input",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/gap-no-mentalhealthreferral-ai-triage.js"
    }
  ],
  "ai-school-safety-threat-assessment-gap-no-threatriskscore-severity-ai-2owplw-exact-ai": [
    {
      "name": "input",
      "label": "Input",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/gap-no-threatriskscore-severity-ai.js"
    }
  ],
  "ai-school-safety-threat-assessment-training-12ypsa-exact-ai": [
    {
      "name": "completion_rate",
      "label": "Completion Rate",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/training.js"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/training.js"
    },
    {
      "name": "duration_hours",
      "label": "Duration Hours",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/training.js"
    },
    {
      "name": "participants",
      "label": "Participants",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/training.js"
    },
    {
      "name": "program_name",
      "label": "Program Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/training.js"
    },
    {
      "name": "status",
      "label": "Status",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/training.js"
    },
    {
      "name": "training_type",
      "label": "Training Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/training.js"
    }
  ],
  "ai-school-safety-threat-assessment-ai-center-42pwwt-exact-ai": [
    {
      "name": "dataSource",
      "label": "Data Source",
      "type": "text",
      "defaultValue": "threats",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AICenter.jsx"
    },
    {
      "name": "endDate",
      "label": "End Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AICenter.jsx"
    },
    {
      "name": "featureType",
      "label": "Feature Type",
      "type": "text",
      "defaultValue": "threats",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AICenter.jsx"
    },
    {
      "name": "scope",
      "label": "Scope",
      "type": "text",
      "defaultValue": "all",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AICenter.jsx"
    },
    {
      "name": "startDate",
      "label": "Start Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AICenter.jsx"
    },
    {
      "name": "timeframe",
      "label": "Timeframe",
      "type": "text",
      "defaultValue": "30",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AICenter.jsx"
    },
    {
      "name": "timeRange",
      "label": "Time Range",
      "type": "text",
      "defaultValue": "90",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AICenter.jsx"
    }
  ],
  "ai-school-safety-threat-assessment-cf-staff-training-personalization-1xdue7-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Cf Staff Training Personalization source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/CfStaffTrainingPersonalization.jsx"
    }
  ],
  "ai-school-safety-threat-assessment-gap-limited-training-compliance-tracking-dlh00e-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap Limited Training Compliance Tracking source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/GapLimitedTrainingComplianceTracking.jsx"
    }
  ],
  "ai-school-safety-threat-assessment-gap-no-mentalhealthreferral-ai-triage-uwrflj-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No Mentalhealthreferral AI Triage source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/GapNoMentalhealthreferralAiTriage.jsx"
    }
  ],
  "ai-school-safety-threat-assessment-gap-no-threatriskscore-severity-ai-112fno-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No Threatriskscore Severity AI source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/GapNoThreatriskscoreSeverityAi.jsx"
    }
  ],
  "ai-school-safety-threat-assessment-training-compliance-aggregate-page-1kj1sx-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Training Compliance Aggregate Page source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/TrainingComplianceAggregatePage.jsx"
    }
  ],
  "ai-school-safety-threat-assessment-training-programs-11u4db-exact-ai": [
    {
      "name": "title",
      "label": "Program Title",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": true,
      "source": "client/src/pages/TrainingPrograms.jsx"
    }
  ],
  "ai-school-safety-threat-assessment-source-workflow": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Threat Severity source input context",
      "options": [],
      "required": false,
      "source": "server/routes/ai-threat-severity.js"
    },
    {
      "name": "academic_signals",
      "label": "Academic Signals",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiCenter.js"
    },
    {
      "name": "anonymous",
      "label": "Anonymous",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiCenter.js"
    },
    {
      "name": "category",
      "label": "Category",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiCenter.js"
    },
    {
      "name": "channel",
      "label": "Channel",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiCenter.js"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiCenter.js"
    },
    {
      "name": "focus",
      "label": "Focus",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiCenter.js"
    },
    {
      "name": "focus_areas",
      "label": "Focus Areas",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiCenter.js"
    },
    {
      "name": "has_imminent_threat",
      "label": "Has Imminent Threat",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiCenter.js"
    },
    {
      "name": "incident_id",
      "label": "Incident Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiCenter.js"
    },
    {
      "name": "incident_type",
      "label": "Incident Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiCenter.js"
    },
    {
      "name": "location",
      "label": "Location",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiCenter.js"
    },
    {
      "name": "location_hint",
      "label": "Location Hint",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiCenter.js"
    },
    {
      "name": "message",
      "label": "Message",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiCenter.js"
    },
    {
      "name": "observations",
      "label": "Observations",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiCenter.js"
    },
    {
      "name": "role_focus",
      "label": "Role Focus",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiCenter.js"
    },
    {
      "name": "school_context",
      "label": "School Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiCenter.js"
    },
    {
      "name": "school_id",
      "label": "School Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiCenter.js"
    },
    {
      "name": "school_metadata",
      "label": "School Metadata",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiCenter.js"
    },
    {
      "name": "source",
      "label": "Source",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiCenter.js"
    },
    {
      "name": "student_id",
      "label": "Student Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiCenter.js"
    },
    {
      "name": "threat_id",
      "label": "Threat Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiCenter.js"
    },
    {
      "name": "threat_text",
      "label": "Threat Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiCenter.js"
    },
    {
      "name": "timeframe",
      "label": "Timeframe",
      "type": "text",
      "defaultValue": "30",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiCenter.js"
    },
    {
      "name": "tip_text",
      "label": "Tip Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiCenter.js"
    },
    {
      "name": "input",
      "label": "Input",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/gap-limited-training-compliance-tracking.js"
    },
    {
      "name": "completion_rate",
      "label": "Completion Rate",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/training.js"
    },
    {
      "name": "duration_hours",
      "label": "Duration Hours",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/training.js"
    },
    {
      "name": "participants",
      "label": "Participants",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/training.js"
    },
    {
      "name": "program_name",
      "label": "Program Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/training.js"
    },
    {
      "name": "status",
      "label": "Status",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/training.js"
    },
    {
      "name": "training_type",
      "label": "Training Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/training.js"
    },
    {
      "name": "dataSource",
      "label": "Data Source",
      "type": "text",
      "defaultValue": "threats",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AICenter.jsx"
    },
    {
      "name": "endDate",
      "label": "End Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AICenter.jsx"
    },
    {
      "name": "featureType",
      "label": "Feature Type",
      "type": "text",
      "defaultValue": "threats",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AICenter.jsx"
    },
    {
      "name": "scope",
      "label": "Scope",
      "type": "text",
      "defaultValue": "all",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AICenter.jsx"
    },
    {
      "name": "startDate",
      "label": "Start Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AICenter.jsx"
    },
    {
      "name": "timeRange",
      "label": "Time Range",
      "type": "text",
      "defaultValue": "90",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AICenter.jsx"
    },
    {
      "name": "title",
      "label": "Program Title",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": true,
      "source": "client/src/pages/TrainingPrograms.jsx"
    }
  ],
  "ai-school-safety-threat-assessment-ai-tools": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Threat Severity source input context",
      "options": [],
      "required": false,
      "source": "server/routes/ai-threat-severity.js"
    },
    {
      "name": "academic_signals",
      "label": "Academic Signals",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiCenter.js"
    },
    {
      "name": "anonymous",
      "label": "Anonymous",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiCenter.js"
    },
    {
      "name": "category",
      "label": "Category",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiCenter.js"
    },
    {
      "name": "channel",
      "label": "Channel",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiCenter.js"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiCenter.js"
    },
    {
      "name": "focus",
      "label": "Focus",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiCenter.js"
    },
    {
      "name": "focus_areas",
      "label": "Focus Areas",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiCenter.js"
    },
    {
      "name": "has_imminent_threat",
      "label": "Has Imminent Threat",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiCenter.js"
    },
    {
      "name": "incident_id",
      "label": "Incident Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiCenter.js"
    },
    {
      "name": "incident_type",
      "label": "Incident Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiCenter.js"
    },
    {
      "name": "location",
      "label": "Location",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiCenter.js"
    },
    {
      "name": "location_hint",
      "label": "Location Hint",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiCenter.js"
    },
    {
      "name": "message",
      "label": "Message",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiCenter.js"
    },
    {
      "name": "observations",
      "label": "Observations",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiCenter.js"
    },
    {
      "name": "role_focus",
      "label": "Role Focus",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiCenter.js"
    },
    {
      "name": "school_context",
      "label": "School Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiCenter.js"
    },
    {
      "name": "school_id",
      "label": "School Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiCenter.js"
    },
    {
      "name": "school_metadata",
      "label": "School Metadata",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiCenter.js"
    },
    {
      "name": "source",
      "label": "Source",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiCenter.js"
    },
    {
      "name": "student_id",
      "label": "Student Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiCenter.js"
    },
    {
      "name": "threat_id",
      "label": "Threat Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiCenter.js"
    },
    {
      "name": "threat_text",
      "label": "Threat Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiCenter.js"
    },
    {
      "name": "timeframe",
      "label": "Timeframe",
      "type": "text",
      "defaultValue": "30",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiCenter.js"
    },
    {
      "name": "tip_text",
      "label": "Tip Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiCenter.js"
    },
    {
      "name": "input",
      "label": "Input",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/gap-limited-training-compliance-tracking.js"
    },
    {
      "name": "completion_rate",
      "label": "Completion Rate",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/training.js"
    },
    {
      "name": "duration_hours",
      "label": "Duration Hours",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/training.js"
    },
    {
      "name": "participants",
      "label": "Participants",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/training.js"
    },
    {
      "name": "program_name",
      "label": "Program Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/training.js"
    },
    {
      "name": "status",
      "label": "Status",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/training.js"
    },
    {
      "name": "training_type",
      "label": "Training Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/training.js"
    },
    {
      "name": "dataSource",
      "label": "Data Source",
      "type": "text",
      "defaultValue": "threats",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AICenter.jsx"
    },
    {
      "name": "endDate",
      "label": "End Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AICenter.jsx"
    },
    {
      "name": "featureType",
      "label": "Feature Type",
      "type": "text",
      "defaultValue": "threats",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AICenter.jsx"
    },
    {
      "name": "scope",
      "label": "Scope",
      "type": "text",
      "defaultValue": "all",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AICenter.jsx"
    },
    {
      "name": "startDate",
      "label": "Start Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AICenter.jsx"
    },
    {
      "name": "timeRange",
      "label": "Time Range",
      "type": "text",
      "defaultValue": "90",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AICenter.jsx"
    },
    {
      "name": "title",
      "label": "Program Title",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": true,
      "source": "client/src/pages/TrainingPrograms.jsx"
    }
  ]
};
