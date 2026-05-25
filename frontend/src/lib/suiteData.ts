export type Metric = { label: string; value: string; note: string };
export const sourceSystems = [
  { name: 'AIEducationSuite', ownership: 'Learners source capabilities and workflows', coverage: ['Learners', 'Courses', 'Classes'] },
  { name: 'AiPersonalizedTutor', ownership: 'Courses source capabilities and workflows', coverage: ['Assignments', 'Assessments', 'Tutoring'] },
  { name: 'AIMultiAgentClassroom', ownership: 'Classes source capabilities and workflows', coverage: ['Career Paths', 'Attendance', 'Safety'] },
  { name: 'AILanguageLearningCompanion', ownership: 'Assignments source capabilities and workflows', coverage: ['Credentials', 'Content', 'Reports'] },
];
export const dashboardMetrics: Metric[] = [
  { label: 'Learners', value: '84', note: 'Active' },
  { label: 'Courses', value: '61', note: 'Open' },
  { label: 'Classes', value: '37', note: 'Need review' },
  { label: 'AI Tool Runs', value: '318', note: 'Last 24 hours' },
];
export const healthMetrics: Metric[] = [
  { label: 'Exceptions', value: '28', note: 'Open' },
  { label: 'Approvals', value: '46', note: 'Pending' },
  { label: 'Documents', value: '640', note: 'Tracked' },
  { label: 'Audit Items', value: '91%', note: 'Current' },
];
export const dashboardModules = ['Learners operating view', 'Courses operating view', 'Classes operating view', 'Assignments operating view', 'Assessments operating view', 'Tutoring operating view', 'Career Paths operating view', 'Attendance operating view'];
export const workflowHighlights = ['Learners workflow with records, approvals, audit, and reporting', 'Courses workflow with records, approvals, audit, and reporting', 'Classes workflow with records, approvals, audit, and reporting', 'Assignments workflow with records, approvals, audit, and reporting', 'Assessments workflow with records, approvals, audit, and reporting'];
