export type SourceDashboardAction = {
  id: string;
  label: string;
  description: string;
  href: string;
  sourceProjects: string[];
  examples: string[];
  count: number;
};

export const sourceDashboardActions: SourceDashboardAction[] = [
  {
    "id": "vr-training-scenario",
    "label": "VR Training Scenario",
    "description": "Open VR Training Scenario workflows elevated from AIVRTrainingScenarioGenerator.",
    "href": "/vr-scenario-builder",
    "sourceProjects": [
      "AIVRTrainingScenarioGenerator"
    ],
    "examples": [
      "VR Scenario Builder",
      "Simulation Script",
      "Training Debrief"
    ],
    "count": 1
  },
  {
    "id": "ai-assistant",
    "label": "AI Assistant",
    "description": "Run source-derived AI assistant workflows and prompts.",
    "href": "/features/ai-tools",
    "sourceProjects": [
      "AIEducationSuite",
      "AILanguageLearningCompanion",
      "AILearningDevelopmentPath",
      "AIMultiAgentClassroom",
      "AIMusicSchoolAcademyManager",
      "AISchoolSafetyThreatAssessment",
      "AiPersonalizedTutor"
    ],
    "examples": [
      "backend/src/models/ComplianceTraining",
      "backend/src/models/TrainingEvent",
      "backend/src/routes/ai",
      "backend/src/routes/career-coach-agent",
      "backend/src/routes/engagement-agent",
      "backend/src/routes/gap-training-effectiveness-analyzer"
    ],
    "count": 7
  },
  {
    "id": "source-workflows",
    "label": "Source Workflows",
    "description": "Open source-derived workflows and feature actions.",
    "href": "/features",
    "sourceProjects": [
      "AiPersonalizedTutor"
    ],
    "examples": [
      "frontend/src/pages/GapNoRealLmsIntegrationCanvasBlackboardAdapterPage"
    ],
    "count": 1
  }
];
