export type EntityRecord = { id: string; name: string; status: string; owner: string; amount?: string; dueDate?: string; priority?: string };
export type FeatureEntitySet = { title: string; columns: string[]; rows: EntityRecord[] };
const COLUMNS = ['Name', 'Status', 'Owner', 'Amount', 'Due Date', 'Priority'];
const entitySeeds = [
  ['learners', 'Learners Records', 'Learners priority queue', 'Open', 'Learners exception list', 'Learning Lead', '$0'],
  ['courses', 'Courses Records', 'Courses priority queue', 'Review', 'Courses exception list', 'Learning Lead', '$0'],
  ['classes', 'Classes Records', 'Classes priority queue', 'Action needed', 'Classes exception list', 'Learning Lead', '$0'],
  ['assignments', 'Assignments Records', 'Assignments priority queue', 'Open', 'Assignments exception list', 'Learning Lead', '$0'],
  ['assessments', 'Assessments Records', 'Assessments priority queue', 'Review', 'Assessments exception list', 'Operations Lead', '$0'],
  ['tutoring', 'Tutoring Records', 'Tutoring priority queue', 'Action needed', 'Tutoring exception list', 'Operations Lead', '$0'],
  ['career-paths', 'Career Paths Records', 'Career Paths priority queue', 'Open', 'Career Paths exception list', 'Operations Lead', '$0'],
  ['attendance', 'Attendance Records', 'Attendance priority queue', 'Review', 'Attendance exception list', 'Operations Lead', '$0'],
  ['safety', 'Safety Records', 'Safety priority queue', 'Action needed', 'Safety exception list', 'Governance Lead', '$0'],
  ['credentials', 'Credentials Records', 'Credentials priority queue', 'Open', 'Credentials exception list', 'Governance Lead', '$0'],
  ['content', 'Content Records', 'Content priority queue', 'Review', 'Content exception list', 'Intelligence Layer Lead', '$0'],
  ['reports', 'Reports Records', 'Reports priority queue', 'Action needed', 'Reports exception list', 'Intelligence Layer Lead', '$0'],
  ["vr-scenario-builder","VR Scenario Builder Records","VR Scenario Builder operating queue","Open","VR Scenario Builder follow-up list","VR Training Scenario","$0"],
  ["simulation-script","Simulation Script Records","Simulation Script operating queue","Review","Simulation Script follow-up list","VR Training Scenario","$0"],
  ["training-debrief","Training Debrief Records","Training Debrief operating queue","Review","Training Debrief follow-up list","VR Training Scenario","$0"],
  ['documents', 'Documents Records', 'Documents priority queue', 'Open', 'Documents exception list', 'Core Platform Lead', '$0'],
  ['notifications', 'Notifications Records', 'Notifications priority queue', 'Review', 'Notifications exception list', 'Core Platform Lead', '$0'],
  ['integrations', 'Integrations Records', 'Integrations priority queue', 'Action needed', 'Integrations exception list', 'Core Platform Lead', '$0'],
  ['profiles', 'Profiles Records', 'Profiles priority queue', 'Open', 'Profiles exception list', 'Core Platform Lead', '$0'],
  ['ai-assistant', 'AI Assistant Records', 'AI Assistant priority queue', 'Review', 'AI Assistant exception list', 'Intelligence Layer Lead', '$0'],
  ['ai-tools', 'AI Tools Records', 'AI Tools priority queue', 'Action needed', 'AI Tools exception list', 'Intelligence Layer Lead', '$0'],
] as const;

function buildSet(slug: string, title: string, firstName: string, firstStatus: string, secondName: string, owner: string, amount: string): FeatureEntitySet {
  return {
    title,
    columns: COLUMNS,
    rows: [
      { id: `${slug}-1`, name: firstName, status: firstStatus, owner, amount, dueDate: '2026-05-27', priority: 'High' },
      { id: `${slug}-2`, name: secondName, status: 'Review', owner: 'Operations', amount, dueDate: '2026-05-29', priority: 'Medium' },
      { id: `${slug}-3`, name: `${title.replace(' Records', '')} exception queue`, status: 'Queued', owner: 'Team Lead', amount: '$0', dueDate: '2026-05-30', priority: 'Medium' },
    ],
  };
}

export const featureEntitiesBySlug: Record<string, FeatureEntitySet> = Object.fromEntries(entitySeeds.map(([slug, title, firstName, firstStatus, secondName, owner, amount]) => [slug, buildSet(slug, title, firstName, firstStatus, secondName, owner, amount)]));
