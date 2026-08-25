export interface ContributorPersona {
  id: string;
  emoji: string;
  title: string;
  tone: "passive" | "reliable" | "proactive";
  description: string;
  linkLabel: string;
  aiPrompt: string;
}

export interface TeamIssue {
  id: string;
  question: string;
  aiPrompt: string;
}

export interface ProfessionalResource {
  id: string;
  title: string;
  subtitle: string;
  icon: "meeting" | "behaviour" | "star" | "personas";
}

export const contributorPersonas: ContributorPersona[] = [
  {
    id: "passive",
    emoji: "😤",
    title: "Passive Contributor",
    tone: "passive",
    description:
      "Shows minimal engagement, misses meetings, submits incomplete work. Recognising this pattern early is key.",
    linkLabel: "View Student Persona A – The Passive Contributor",
    aiPrompt: "How should I handle a passive contributor on my Capstone team?",
  },
  {
    id: "reliable",
    emoji: "✅",
    title: "Reliable Contributor",
    tone: "reliable",
    description:
      "Meets expectations consistently, attends meetings, completes tasks on time. A solid foundation for any team.",
    linkLabel: "View Student Persona B – The Reliable Contributor",
    aiPrompt: "What does a reliable contributor look like in a Capstone team?",
  },
  {
    id: "proactive",
    emoji: "🌟",
    title: "Proactive Professional Contributor",
    tone: "proactive",
    description:
      "Goes beyond expectations — leads, communicates proactively, and elevates the whole team's output.",
    linkLabel: "View Student Persona C – Proactive Professional Contributor",
    aiPrompt: "How can I become a proactive professional contributor on my team?",
  },
];

export const commonTeamIssues: TeamIssue[] = [
  {
    id: "1",
    question: "What should I do if a team member is not contributing?",
    aiPrompt: "What should I do if a team member is not contributing?",
  },
  {
    id: "2",
    question: "How should I communicate a team issue?",
    aiPrompt: "How should I communicate a team issue in my Capstone team?",
  },
  {
    id: "3",
    question: "When should I contact my supervisor?",
    aiPrompt: "When should I contact my supervisor about a team issue?",
  },
  {
    id: "4",
    question: "How should we divide responsibilities?",
    aiPrompt: "How should we divide responsibilities in a Capstone project team?",
  },
];

export const professionalResources: ProfessionalResource[] = [
  {
    id: "meeting-guide",
    title: "Meeting Guide",
    subtitle: "Meeting Guide - Students",
    icon: "meeting",
  },
  {
    id: "behaviour",
    title: "Professional Behaviour Guidelines",
    subtitle: "Professional Behaviour Guidelines - Client Meetings",
    icon: "behaviour",
  },
  {
    id: "star",
    title: "STAR Response Framework",
    subtitle: "STAR Response Framework",
    icon: "star",
  },
  {
    id: "personas",
    title: "Student Persona Resources",
    subtitle: "Student Personas",
    icon: "personas",
  },
];

export const teamSupportAiPrompt = "I need help with a team issue in my Capstone project.";
