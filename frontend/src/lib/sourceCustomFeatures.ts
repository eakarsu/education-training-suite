import type { FeatureContext, FeatureDefinition, PageDefinition } from '@/lib/unifiedApp';
import type { FeatureEntitySet } from '@/lib/featureEntities';
import type { FeatureSurface } from '@/lib/featureSurfaces';

export const sourceCustomFeatureCatalog: FeatureDefinition[] = [
  {
    "title": "AI Education Suite Source Feature",
    "href": "/features/source-ai-education-suite",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in AIEducationSuite: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "11 AI, prompt, tool, or workflow files captured"
    ]
  },
  {
    "title": "AI Language Learning Companion Source Feature",
    "href": "/features/source-ai-language-learning-companion",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in AILanguageLearningCompanion: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "16 AI, prompt, tool, or workflow files captured"
    ]
  },
  {
    "title": "AI Learning Development Path Source Feature",
    "href": "/features/source-ai-learning-development-path",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in AILearningDevelopmentPath: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "12 AI, prompt, tool, or workflow files captured"
    ]
  },
  {
    "title": "AI Multi Agent Classroom Source Feature",
    "href": "/features/source-ai-multi-agent-classroom",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in AIMultiAgentClassroom: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "3 AI, prompt, tool, or workflow files captured"
    ]
  },
  {
    "title": "AI Music School Academy Manager Source Feature",
    "href": "/features/source-ai-music-school-academy-manager",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in AIMusicSchoolAcademyManager: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "22 AI, prompt, tool, or workflow files captured"
    ]
  },
  {
    "title": "AI Personalized Tutor Source Feature",
    "href": "/features/source-ai-personalized-tutor",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in AiPersonalizedTutor: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "3 AI, prompt, tool, or workflow files captured"
    ]
  },
  {
    "title": "AI School Safety Threat Assessment Source Feature",
    "href": "/features/source-ai-school-safety-threat-assessment",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in AISchoolSafetyThreatAssessment: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "17 AI, prompt, tool, or workflow files captured"
    ]
  }
];

export const sourceCustomFeatureFamilies: Array<{ name: string; features: string[] }> = [
  {
    "name": "Source Project Features",
    "features": [
      "AI Education Suite Source Feature",
      "AI Language Learning Companion Source Feature",
      "AI Learning Development Path Source Feature",
      "AI Multi Agent Classroom Source Feature",
      "AI Music School Academy Manager Source Feature",
      "AI Personalized Tutor Source Feature",
      "AI School Safety Threat Assessment Source Feature"
    ]
  }
];

export const sourceCustomPageRegistry: Record<string, PageDefinition> = {
  "source-ai-education-suite": {
    "title": "AI Education Suite Source Feature",
    "eyebrow": "Source AI Workflows",
    "subtitle": "Merged custom workflow coverage from AIEducationSuite, converted into a usable suite feature page.",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in AIEducationSuite: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "11 AI, prompt, tool, or workflow files captured"
    ],
    "metrics": [
      {
        "label": "Routes",
        "value": "0",
        "note": "Source pages mapped"
      },
      {
        "label": "APIs",
        "value": "0",
        "note": "Source endpoints mapped"
      },
      {
        "label": "AI/Tools",
        "value": "11",
        "note": "Prompt, agent, or tool files mapped"
      }
    ]
  },
  "source-ai-language-learning-companion": {
    "title": "AI Language Learning Companion Source Feature",
    "eyebrow": "Source AI Workflows",
    "subtitle": "Merged custom workflow coverage from AILanguageLearningCompanion, converted into a usable suite feature page.",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in AILanguageLearningCompanion: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "16 AI, prompt, tool, or workflow files captured"
    ],
    "metrics": [
      {
        "label": "Routes",
        "value": "0",
        "note": "Source pages mapped"
      },
      {
        "label": "APIs",
        "value": "0",
        "note": "Source endpoints mapped"
      },
      {
        "label": "AI/Tools",
        "value": "16",
        "note": "Prompt, agent, or tool files mapped"
      }
    ]
  },
  "source-ai-learning-development-path": {
    "title": "AI Learning Development Path Source Feature",
    "eyebrow": "Source AI Workflows",
    "subtitle": "Merged custom workflow coverage from AILearningDevelopmentPath, converted into a usable suite feature page.",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in AILearningDevelopmentPath: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "12 AI, prompt, tool, or workflow files captured"
    ],
    "metrics": [
      {
        "label": "Routes",
        "value": "0",
        "note": "Source pages mapped"
      },
      {
        "label": "APIs",
        "value": "0",
        "note": "Source endpoints mapped"
      },
      {
        "label": "AI/Tools",
        "value": "12",
        "note": "Prompt, agent, or tool files mapped"
      }
    ]
  },
  "source-ai-multi-agent-classroom": {
    "title": "AI Multi Agent Classroom Source Feature",
    "eyebrow": "Source AI Workflows",
    "subtitle": "Merged custom workflow coverage from AIMultiAgentClassroom, converted into a usable suite feature page.",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in AIMultiAgentClassroom: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "3 AI, prompt, tool, or workflow files captured"
    ],
    "metrics": [
      {
        "label": "Routes",
        "value": "0",
        "note": "Source pages mapped"
      },
      {
        "label": "APIs",
        "value": "0",
        "note": "Source endpoints mapped"
      },
      {
        "label": "AI/Tools",
        "value": "3",
        "note": "Prompt, agent, or tool files mapped"
      }
    ]
  },
  "source-ai-music-school-academy-manager": {
    "title": "AI Music School Academy Manager Source Feature",
    "eyebrow": "Source AI Workflows",
    "subtitle": "Merged custom workflow coverage from AIMusicSchoolAcademyManager, converted into a usable suite feature page.",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in AIMusicSchoolAcademyManager: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "22 AI, prompt, tool, or workflow files captured"
    ],
    "metrics": [
      {
        "label": "Routes",
        "value": "0",
        "note": "Source pages mapped"
      },
      {
        "label": "APIs",
        "value": "0",
        "note": "Source endpoints mapped"
      },
      {
        "label": "AI/Tools",
        "value": "22",
        "note": "Prompt, agent, or tool files mapped"
      }
    ]
  },
  "source-ai-personalized-tutor": {
    "title": "AI Personalized Tutor Source Feature",
    "eyebrow": "Source AI Workflows",
    "subtitle": "Merged custom workflow coverage from AiPersonalizedTutor, converted into a usable suite feature page.",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in AiPersonalizedTutor: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "3 AI, prompt, tool, or workflow files captured"
    ],
    "metrics": [
      {
        "label": "Routes",
        "value": "0",
        "note": "Source pages mapped"
      },
      {
        "label": "APIs",
        "value": "0",
        "note": "Source endpoints mapped"
      },
      {
        "label": "AI/Tools",
        "value": "3",
        "note": "Prompt, agent, or tool files mapped"
      }
    ]
  },
  "source-ai-school-safety-threat-assessment": {
    "title": "AI School Safety Threat Assessment Source Feature",
    "eyebrow": "Source AI Workflows",
    "subtitle": "Merged custom workflow coverage from AISchoolSafetyThreatAssessment, converted into a usable suite feature page.",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in AISchoolSafetyThreatAssessment: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "17 AI, prompt, tool, or workflow files captured"
    ],
    "metrics": [
      {
        "label": "Routes",
        "value": "0",
        "note": "Source pages mapped"
      },
      {
        "label": "APIs",
        "value": "0",
        "note": "Source endpoints mapped"
      },
      {
        "label": "AI/Tools",
        "value": "17",
        "note": "Prompt, agent, or tool files mapped"
      }
    ]
  }
};

export const sourceCustomFeatureContexts: Record<string, FeatureContext> = {
  "AI Education Suite Source Feature": {
    "sourceOwners": [
      "AIEducationSuite"
    ],
    "operatingQueues": [
      "Openrouter",
      "Email",
      "Agentic Tutor",
      "AI Advanced"
    ],
    "outputs": [
      "AI Education Suite merged workflow register",
      "AI Education Suite API and route coverage map",
      "AI Education Suite AI/tool implementation queue"
    ],
    "relatedRoutes": [
      {
        "label": "All Features",
        "href": "/features"
      },
      {
        "label": "AI Tools",
        "href": "/features/ai-tools"
      },
      {
        "label": "Dashboard",
        "href": "/dashboard"
      }
    ]
  },
  "AI Language Learning Companion Source Feature": {
    "sourceOwners": [
      "AILanguageLearningCompanion"
    ],
    "operatingQueues": [
      "Openrouter",
      "AI",
      "Daily Lesson",
      "Gap AI Grammar Correction"
    ],
    "outputs": [
      "AI Language Learning Companion merged workflow register",
      "AI Language Learning Companion API and route coverage map",
      "AI Language Learning Companion AI/tool implementation queue"
    ],
    "relatedRoutes": [
      {
        "label": "All Features",
        "href": "/features"
      },
      {
        "label": "AI Tools",
        "href": "/features/ai-tools"
      },
      {
        "label": "Dashboard",
        "href": "/dashboard"
      }
    ]
  },
  "AI Learning Development Path Source Feature": {
    "sourceOwners": [
      "AILearningDevelopmentPath"
    ],
    "operatingQueues": [
      "Openrouter",
      "AI Tools Page",
      "Compliance Trainings",
      "Gap Agentic"
    ],
    "outputs": [
      "AI Learning Development Path merged workflow register",
      "AI Learning Development Path API and route coverage map",
      "AI Learning Development Path AI/tool implementation queue"
    ],
    "relatedRoutes": [
      {
        "label": "All Features",
        "href": "/features"
      },
      {
        "label": "AI Tools",
        "href": "/features/ai-tools"
      },
      {
        "label": "Dashboard",
        "href": "/dashboard"
      }
    ]
  },
  "AI Multi Agent Classroom Source Feature": {
    "sourceOwners": [
      "AIMultiAgentClassroom"
    ],
    "operatingQueues": [
      "AI Tools",
      "Agent Student Heatmap",
      "AI",
      "AI Tools"
    ],
    "outputs": [
      "AI Multi Agent Classroom merged workflow register",
      "AI Multi Agent Classroom API and route coverage map",
      "AI Multi Agent Classroom AI/tool implementation queue"
    ],
    "relatedRoutes": [
      {
        "label": "All Features",
        "href": "/features"
      },
      {
        "label": "AI Tools",
        "href": "/features/ai-tools"
      },
      {
        "label": "Dashboard",
        "href": "/dashboard"
      }
    ]
  },
  "AI Music School Academy Manager Source Feature": {
    "sourceOwners": [
      "AIMusicSchoolAcademyManager"
    ],
    "operatingQueues": [
      "Main",
      "AI Ensemble Assignment",
      "AI Event Promotion",
      "AI Lesson Plan"
    ],
    "outputs": [
      "AI Music School Academy Manager merged workflow register",
      "AI Music School Academy Manager API and route coverage map",
      "AI Music School Academy Manager AI/tool implementation queue"
    ],
    "relatedRoutes": [
      {
        "label": "All Features",
        "href": "/features"
      },
      {
        "label": "AI Tools",
        "href": "/features/ai-tools"
      },
      {
        "label": "Dashboard",
        "href": "/dashboard"
      }
    ]
  },
  "AI Personalized Tutor Source Feature": {
    "sourceOwners": [
      "AiPersonalizedTutor"
    ],
    "operatingQueues": [
      "Gap No Real Lms Integration Canvas Blackboard Adapter Page",
      "Tailwind.Config",
      "Main",
      "Gap No Real Lms Integration Canvas Blackboard Adapter Page"
    ],
    "outputs": [
      "AI Personalized Tutor merged workflow register",
      "AI Personalized Tutor API and route coverage map",
      "AI Personalized Tutor AI/tool implementation queue"
    ],
    "relatedRoutes": [
      {
        "label": "All Features",
        "href": "/features"
      },
      {
        "label": "AI Tools",
        "href": "/features/ai-tools"
      },
      {
        "label": "Dashboard",
        "href": "/dashboard"
      }
    ]
  },
  "AI School Safety Threat Assessment Source Feature": {
    "sourceOwners": [
      "AISchoolSafetyThreatAssessment"
    ],
    "operatingQueues": [
      "Openrouter",
      "AI Threat Severity",
      "AI Center",
      "Gap Limited Training Compliance Tracking"
    ],
    "outputs": [
      "AI School Safety Threat Assessment merged workflow register",
      "AI School Safety Threat Assessment API and route coverage map",
      "AI School Safety Threat Assessment AI/tool implementation queue"
    ],
    "relatedRoutes": [
      {
        "label": "All Features",
        "href": "/features"
      },
      {
        "label": "AI Tools",
        "href": "/features/ai-tools"
      },
      {
        "label": "Dashboard",
        "href": "/dashboard"
      }
    ]
  }
};

export const sourceCustomFeatureSurfaceBySlug: Record<string, FeatureSurface> = {
  "source-ai-education-suite": {
    "workItems": [
      {
        "id": "source-ai-education-suite-work-1",
        "item": "Openrouter",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for server/services/openrouter.js"
      },
      {
        "id": "source-ai-education-suite-work-2",
        "item": "Email",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for server/services/email.js"
      },
      {
        "id": "source-ai-education-suite-work-3",
        "item": "Agentic Tutor",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for server/routes/agenticTutor.js"
      },
      {
        "id": "source-ai-education-suite-work-4",
        "item": "AI Advanced",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for server/routes/aiAdvanced.js"
      },
      {
        "id": "source-ai-education-suite-work-5",
        "item": "AI New",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for server/routes/aiNew.js"
      },
      {
        "id": "source-ai-education-suite-work-6",
        "item": "Classroom Agents",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for server/routes/classroomAgents.js"
      }
    ],
    "quickActions": [
      "Run source AI workflow",
      "Create implementation task",
      "Export source coverage"
    ],
    "controlChecks": [
      {
        "id": "source-ai-education-suite-check-routes",
        "label": "Source routes reviewed for donor login leakage",
        "done": false
      },
      {
        "id": "source-ai-education-suite-check-api",
        "label": "API behavior mapped to merged suite permissions",
        "done": true
      },
      {
        "id": "source-ai-education-suite-check-ai",
        "label": "AI prompts/tools connected to the unified AI workbench",
        "done": true
      },
      {
        "id": "source-ai-education-suite-check-ownership",
        "label": "Feature owner and suite destination confirmed",
        "done": true
      }
    ],
    "activityLog": [
      {
        "id": "source-ai-education-suite-log-1",
        "message": "Deep-merge feature generated from AIEducationSuite",
        "at": "2026-05-24 18:45"
      },
      {
        "id": "source-ai-education-suite-log-2",
        "message": "12 source signals converted into merged workflow coverage",
        "at": "2026-05-24 18:45"
      }
    ]
  },
  "source-ai-language-learning-companion": {
    "workItems": [
      {
        "id": "source-ai-language-learning-companion-work-1",
        "item": "Openrouter",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for server/services/openrouter.js"
      },
      {
        "id": "source-ai-language-learning-companion-work-2",
        "item": "AI",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for server/routes/ai.js"
      },
      {
        "id": "source-ai-language-learning-companion-work-3",
        "item": "Daily Lesson",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for server/routes/dailyLesson.js"
      },
      {
        "id": "source-ai-language-learning-companion-work-4",
        "item": "Gap AI Grammar Correction",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for server/routes/gap-ai-grammar-correction.js"
      },
      {
        "id": "source-ai-language-learning-companion-work-5",
        "item": "Gap AI Idiom Explanation",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for server/routes/gap-ai-idiom-explanation.js"
      },
      {
        "id": "source-ai-language-learning-companion-work-6",
        "item": "Gap AI Personalized Lesson Plan",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for server/routes/gap-ai-personalized-lesson-plan.js"
      }
    ],
    "quickActions": [
      "Run source AI workflow",
      "Create implementation task",
      "Export source coverage"
    ],
    "controlChecks": [
      {
        "id": "source-ai-language-learning-companion-check-routes",
        "label": "Source routes reviewed for donor login leakage",
        "done": false
      },
      {
        "id": "source-ai-language-learning-companion-check-api",
        "label": "API behavior mapped to merged suite permissions",
        "done": true
      },
      {
        "id": "source-ai-language-learning-companion-check-ai",
        "label": "AI prompts/tools connected to the unified AI workbench",
        "done": true
      },
      {
        "id": "source-ai-language-learning-companion-check-ownership",
        "label": "Feature owner and suite destination confirmed",
        "done": true
      }
    ],
    "activityLog": [
      {
        "id": "source-ai-language-learning-companion-log-1",
        "message": "Deep-merge feature generated from AILanguageLearningCompanion",
        "at": "2026-05-24 18:45"
      },
      {
        "id": "source-ai-language-learning-companion-log-2",
        "message": "12 source signals converted into merged workflow coverage",
        "at": "2026-05-24 18:45"
      }
    ]
  },
  "source-ai-learning-development-path": {
    "workItems": [
      {
        "id": "source-ai-learning-development-path-work-1",
        "item": "Openrouter",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for backend/src/services/openrouter.js"
      },
      {
        "id": "source-ai-learning-development-path-work-2",
        "item": "AI Tools Page",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/AIToolsPage.js"
      },
      {
        "id": "source-ai-learning-development-path-work-3",
        "item": "Compliance Trainings",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/ComplianceTrainings.js"
      },
      {
        "id": "source-ai-learning-development-path-work-4",
        "item": "Gap Agentic",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/GapAgentic.jsx"
      },
      {
        "id": "source-ai-learning-development-path-work-5",
        "item": "Gap Training Effectiveness Analyzer",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/GapTrainingEffectivenessAnalyzer.jsx"
      },
      {
        "id": "source-ai-learning-development-path-work-6",
        "item": "Training Events",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/TrainingEvents.js"
      }
    ],
    "quickActions": [
      "Run source AI workflow",
      "Create implementation task",
      "Export source coverage"
    ],
    "controlChecks": [
      {
        "id": "source-ai-learning-development-path-check-routes",
        "label": "Source routes reviewed for donor login leakage",
        "done": false
      },
      {
        "id": "source-ai-learning-development-path-check-api",
        "label": "API behavior mapped to merged suite permissions",
        "done": true
      },
      {
        "id": "source-ai-learning-development-path-check-ai",
        "label": "AI prompts/tools connected to the unified AI workbench",
        "done": true
      },
      {
        "id": "source-ai-learning-development-path-check-ownership",
        "label": "Feature owner and suite destination confirmed",
        "done": true
      }
    ],
    "activityLog": [
      {
        "id": "source-ai-learning-development-path-log-1",
        "message": "Deep-merge feature generated from AILearningDevelopmentPath",
        "at": "2026-05-24 18:45"
      },
      {
        "id": "source-ai-learning-development-path-log-2",
        "message": "12 source signals converted into merged workflow coverage",
        "at": "2026-05-24 18:45"
      }
    ]
  },
  "source-ai-multi-agent-classroom": {
    "workItems": [
      {
        "id": "source-ai-multi-agent-classroom-work-1",
        "item": "AI Tools",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/AITools.js"
      },
      {
        "id": "source-ai-multi-agent-classroom-work-2",
        "item": "Agent Student Heatmap",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/customViews/AgentStudentHeatmap.jsx"
      },
      {
        "id": "source-ai-multi-agent-classroom-work-3",
        "item": "AI",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for backend/src/routes/ai.js"
      },
      {
        "id": "source-ai-multi-agent-classroom-work-4",
        "item": "AI Tools",
        "status": "Open",
        "owner": "Feature Owner",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/AITools"
      },
      {
        "id": "source-ai-multi-agent-classroom-work-5",
        "item": "Agent Student Heatmap",
        "status": "Open",
        "owner": "Feature Owner",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/customViews/AgentStudentHeatmap"
      },
      {
        "id": "source-ai-multi-agent-classroom-work-6",
        "item": "AI",
        "status": "Open",
        "owner": "Feature Owner",
        "nextStep": "Validate and run merged coverage for backend/src/routes/ai"
      }
    ],
    "quickActions": [
      "Run source AI workflow",
      "Create implementation task",
      "Export source coverage"
    ],
    "controlChecks": [
      {
        "id": "source-ai-multi-agent-classroom-check-routes",
        "label": "Source routes reviewed for donor login leakage",
        "done": false
      },
      {
        "id": "source-ai-multi-agent-classroom-check-api",
        "label": "API behavior mapped to merged suite permissions",
        "done": true
      },
      {
        "id": "source-ai-multi-agent-classroom-check-ai",
        "label": "AI prompts/tools connected to the unified AI workbench",
        "done": true
      },
      {
        "id": "source-ai-multi-agent-classroom-check-ownership",
        "label": "Feature owner and suite destination confirmed",
        "done": true
      }
    ],
    "activityLog": [
      {
        "id": "source-ai-multi-agent-classroom-log-1",
        "message": "Deep-merge feature generated from AIMultiAgentClassroom",
        "at": "2026-05-24 18:45"
      },
      {
        "id": "source-ai-multi-agent-classroom-log-2",
        "message": "6 source signals converted into merged workflow coverage",
        "at": "2026-05-24 18:45"
      }
    ]
  },
  "source-ai-music-school-academy-manager": {
    "workItems": [
      {
        "id": "source-ai-music-school-academy-manager-work-1",
        "item": "Main",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/main.jsx"
      },
      {
        "id": "source-ai-music-school-academy-manager-work-2",
        "item": "AI Ensemble Assignment",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/AIEnsembleAssignment.jsx"
      },
      {
        "id": "source-ai-music-school-academy-manager-work-3",
        "item": "AI Event Promotion",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/AIEventPromotion.jsx"
      },
      {
        "id": "source-ai-music-school-academy-manager-work-4",
        "item": "AI Lesson Plan",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/AILessonPlan.jsx"
      },
      {
        "id": "source-ai-music-school-academy-manager-work-5",
        "item": "AI Marketing Campaign",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/AIMarketingCampaign.jsx"
      },
      {
        "id": "source-ai-music-school-academy-manager-work-6",
        "item": "AI Parent Summary",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/AIParentSummary.jsx"
      }
    ],
    "quickActions": [
      "Run source AI workflow",
      "Create implementation task",
      "Export source coverage"
    ],
    "controlChecks": [
      {
        "id": "source-ai-music-school-academy-manager-check-routes",
        "label": "Source routes reviewed for donor login leakage",
        "done": false
      },
      {
        "id": "source-ai-music-school-academy-manager-check-api",
        "label": "API behavior mapped to merged suite permissions",
        "done": true
      },
      {
        "id": "source-ai-music-school-academy-manager-check-ai",
        "label": "AI prompts/tools connected to the unified AI workbench",
        "done": true
      },
      {
        "id": "source-ai-music-school-academy-manager-check-ownership",
        "label": "Feature owner and suite destination confirmed",
        "done": true
      }
    ],
    "activityLog": [
      {
        "id": "source-ai-music-school-academy-manager-log-1",
        "message": "Deep-merge feature generated from AIMusicSchoolAcademyManager",
        "at": "2026-05-24 18:45"
      },
      {
        "id": "source-ai-music-school-academy-manager-log-2",
        "message": "12 source signals converted into merged workflow coverage",
        "at": "2026-05-24 18:45"
      }
    ]
  },
  "source-ai-personalized-tutor": {
    "workItems": [
      {
        "id": "source-ai-personalized-tutor-work-1",
        "item": "Gap No Real Lms Integration Canvas Blackboard Adapter Page",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/GapNoRealLmsIntegrationCanvasBlackboardAdapterPage.jsx"
      },
      {
        "id": "source-ai-personalized-tutor-work-2",
        "item": "Tailwind.Config",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/tailwind.config.js"
      },
      {
        "id": "source-ai-personalized-tutor-work-3",
        "item": "Main",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/main.jsx"
      },
      {
        "id": "source-ai-personalized-tutor-work-4",
        "item": "Gap No Real Lms Integration Canvas Blackboard Adapter Page",
        "status": "Open",
        "owner": "Feature Owner",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/GapNoRealLmsIntegrationCanvasBlackboardAdapterPage"
      },
      {
        "id": "source-ai-personalized-tutor-work-5",
        "item": "Tailwind.Config",
        "status": "Open",
        "owner": "Feature Owner",
        "nextStep": "Validate and run merged coverage for frontend/tailwind.config"
      },
      {
        "id": "source-ai-personalized-tutor-work-6",
        "item": "Main",
        "status": "Open",
        "owner": "Feature Owner",
        "nextStep": "Validate and run merged coverage for frontend/src/main"
      }
    ],
    "quickActions": [
      "Run source AI workflow",
      "Create implementation task",
      "Export source coverage"
    ],
    "controlChecks": [
      {
        "id": "source-ai-personalized-tutor-check-routes",
        "label": "Source routes reviewed for donor login leakage",
        "done": false
      },
      {
        "id": "source-ai-personalized-tutor-check-api",
        "label": "API behavior mapped to merged suite permissions",
        "done": true
      },
      {
        "id": "source-ai-personalized-tutor-check-ai",
        "label": "AI prompts/tools connected to the unified AI workbench",
        "done": true
      },
      {
        "id": "source-ai-personalized-tutor-check-ownership",
        "label": "Feature owner and suite destination confirmed",
        "done": true
      }
    ],
    "activityLog": [
      {
        "id": "source-ai-personalized-tutor-log-1",
        "message": "Deep-merge feature generated from AiPersonalizedTutor",
        "at": "2026-05-24 18:45"
      },
      {
        "id": "source-ai-personalized-tutor-log-2",
        "message": "6 source signals converted into merged workflow coverage",
        "at": "2026-05-24 18:45"
      }
    ]
  },
  "source-ai-school-safety-threat-assessment": {
    "workItems": [
      {
        "id": "source-ai-school-safety-threat-assessment-work-1",
        "item": "Openrouter",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for server/openrouter.js"
      },
      {
        "id": "source-ai-school-safety-threat-assessment-work-2",
        "item": "AI Threat Severity",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for server/routes/ai-threat-severity.js"
      },
      {
        "id": "source-ai-school-safety-threat-assessment-work-3",
        "item": "AI Center",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for server/routes/aiCenter.js"
      },
      {
        "id": "source-ai-school-safety-threat-assessment-work-4",
        "item": "Gap Limited Training Compliance Tracking",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for server/routes/gap-limited-training-compliance-tracking.js"
      },
      {
        "id": "source-ai-school-safety-threat-assessment-work-5",
        "item": "Gap No Mentalhealthreferral AI Triage",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for server/routes/gap-no-mentalhealthreferral-ai-triage.js"
      },
      {
        "id": "source-ai-school-safety-threat-assessment-work-6",
        "item": "Gap No Threatriskscore Severity AI",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for server/routes/gap-no-threatriskscore-severity-ai.js"
      }
    ],
    "quickActions": [
      "Run source AI workflow",
      "Create implementation task",
      "Export source coverage"
    ],
    "controlChecks": [
      {
        "id": "source-ai-school-safety-threat-assessment-check-routes",
        "label": "Source routes reviewed for donor login leakage",
        "done": false
      },
      {
        "id": "source-ai-school-safety-threat-assessment-check-api",
        "label": "API behavior mapped to merged suite permissions",
        "done": true
      },
      {
        "id": "source-ai-school-safety-threat-assessment-check-ai",
        "label": "AI prompts/tools connected to the unified AI workbench",
        "done": true
      },
      {
        "id": "source-ai-school-safety-threat-assessment-check-ownership",
        "label": "Feature owner and suite destination confirmed",
        "done": true
      }
    ],
    "activityLog": [
      {
        "id": "source-ai-school-safety-threat-assessment-log-1",
        "message": "Deep-merge feature generated from AISchoolSafetyThreatAssessment",
        "at": "2026-05-24 18:45"
      },
      {
        "id": "source-ai-school-safety-threat-assessment-log-2",
        "message": "12 source signals converted into merged workflow coverage",
        "at": "2026-05-24 18:45"
      }
    ]
  }
};

export const sourceCustomFeatureEntitiesBySlug: Record<string, FeatureEntitySet> = {
  "source-ai-education-suite": {
    "title": "AI Education Suite Source Records",
    "columns": [
      "Name",
      "Status",
      "Owner",
      "Amount",
      "Due Date",
      "Priority"
    ],
    "rows": [
      {
        "id": "source-ai-education-suite-entity-1",
        "name": "Openrouter",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "High"
      },
      {
        "id": "source-ai-education-suite-entity-2",
        "name": "Email",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-education-suite-entity-3",
        "name": "Agentic Tutor",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-education-suite-entity-4",
        "name": "AI Advanced",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-education-suite-entity-5",
        "name": "AI New",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      }
    ]
  },
  "source-ai-language-learning-companion": {
    "title": "AI Language Learning Companion Source Records",
    "columns": [
      "Name",
      "Status",
      "Owner",
      "Amount",
      "Due Date",
      "Priority"
    ],
    "rows": [
      {
        "id": "source-ai-language-learning-companion-entity-1",
        "name": "Openrouter",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "High"
      },
      {
        "id": "source-ai-language-learning-companion-entity-2",
        "name": "AI",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-language-learning-companion-entity-3",
        "name": "Daily Lesson",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-language-learning-companion-entity-4",
        "name": "Gap AI Grammar Correction",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-language-learning-companion-entity-5",
        "name": "Gap AI Idiom Explanation",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      }
    ]
  },
  "source-ai-learning-development-path": {
    "title": "AI Learning Development Path Source Records",
    "columns": [
      "Name",
      "Status",
      "Owner",
      "Amount",
      "Due Date",
      "Priority"
    ],
    "rows": [
      {
        "id": "source-ai-learning-development-path-entity-1",
        "name": "Openrouter",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "High"
      },
      {
        "id": "source-ai-learning-development-path-entity-2",
        "name": "AI Tools Page",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-learning-development-path-entity-3",
        "name": "Compliance Trainings",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-learning-development-path-entity-4",
        "name": "Gap Agentic",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-learning-development-path-entity-5",
        "name": "Gap Training Effectiveness Analyzer",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      }
    ]
  },
  "source-ai-multi-agent-classroom": {
    "title": "AI Multi Agent Classroom Source Records",
    "columns": [
      "Name",
      "Status",
      "Owner",
      "Amount",
      "Due Date",
      "Priority"
    ],
    "rows": [
      {
        "id": "source-ai-multi-agent-classroom-entity-1",
        "name": "AI Tools",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "High"
      },
      {
        "id": "source-ai-multi-agent-classroom-entity-2",
        "name": "Agent Student Heatmap",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-multi-agent-classroom-entity-3",
        "name": "AI",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-multi-agent-classroom-entity-4",
        "name": "AI Tools",
        "status": "Workflow mapped",
        "owner": "Suite Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-multi-agent-classroom-entity-5",
        "name": "Agent Student Heatmap",
        "status": "Workflow mapped",
        "owner": "Suite Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      }
    ]
  },
  "source-ai-music-school-academy-manager": {
    "title": "AI Music School Academy Manager Source Records",
    "columns": [
      "Name",
      "Status",
      "Owner",
      "Amount",
      "Due Date",
      "Priority"
    ],
    "rows": [
      {
        "id": "source-ai-music-school-academy-manager-entity-1",
        "name": "Main",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "High"
      },
      {
        "id": "source-ai-music-school-academy-manager-entity-2",
        "name": "AI Ensemble Assignment",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-music-school-academy-manager-entity-3",
        "name": "AI Event Promotion",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-music-school-academy-manager-entity-4",
        "name": "AI Lesson Plan",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-music-school-academy-manager-entity-5",
        "name": "AI Marketing Campaign",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      }
    ]
  },
  "source-ai-personalized-tutor": {
    "title": "AI Personalized Tutor Source Records",
    "columns": [
      "Name",
      "Status",
      "Owner",
      "Amount",
      "Due Date",
      "Priority"
    ],
    "rows": [
      {
        "id": "source-ai-personalized-tutor-entity-1",
        "name": "Gap No Real Lms Integration Canvas Blackboard Adapter Page",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "High"
      },
      {
        "id": "source-ai-personalized-tutor-entity-2",
        "name": "Tailwind.Config",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-personalized-tutor-entity-3",
        "name": "Main",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-personalized-tutor-entity-4",
        "name": "Gap No Real Lms Integration Canvas Blackboard Adapter Page",
        "status": "Workflow mapped",
        "owner": "Suite Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-personalized-tutor-entity-5",
        "name": "Tailwind.Config",
        "status": "Workflow mapped",
        "owner": "Suite Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      }
    ]
  },
  "source-ai-school-safety-threat-assessment": {
    "title": "AI School Safety Threat Assessment Source Records",
    "columns": [
      "Name",
      "Status",
      "Owner",
      "Amount",
      "Due Date",
      "Priority"
    ],
    "rows": [
      {
        "id": "source-ai-school-safety-threat-assessment-entity-1",
        "name": "Openrouter",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "High"
      },
      {
        "id": "source-ai-school-safety-threat-assessment-entity-2",
        "name": "AI Threat Severity",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-school-safety-threat-assessment-entity-3",
        "name": "AI Center",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-school-safety-threat-assessment-entity-4",
        "name": "Gap Limited Training Compliance Tracking",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-school-safety-threat-assessment-entity-5",
        "name": "Gap No Mentalhealthreferral AI Triage",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      }
    ]
  }
};

export const sourceCustomFeatureLinksByProject: Record<string, string> = {
  "AIEducationSuite": "/features/source-ai-education-suite",
  "AILanguageLearningCompanion": "/features/source-ai-language-learning-companion",
  "AILearningDevelopmentPath": "/features/source-ai-learning-development-path",
  "AIMultiAgentClassroom": "/features/source-ai-multi-agent-classroom",
  "AIMusicSchoolAcademyManager": "/features/source-ai-music-school-academy-manager",
  "AiPersonalizedTutor": "/features/source-ai-personalized-tutor",
  "AISchoolSafetyThreatAssessment": "/features/source-ai-school-safety-threat-assessment"
};
