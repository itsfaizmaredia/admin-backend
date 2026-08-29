import type {
  AdminUser,
  OverviewData,
  Resource,
  Student,
  UnitAccessRequest,
} from "./types";

export const students: Student[] = [
  {
    id: 1,
    name: "Sarah Lee",
    studentId: "104567890",
    email: "sarah.lee@student.edu.au",
    approvedUnits: ["COS40005"],
    pendingUnits: ["COS40006"],
    status: "Active",
  },
  {
    id: 2,
    name: "Jordan Tan",
    studentId: "104123456",
    email: "jordan.tan@student.edu.au",
    approvedUnits: [
      "COS40005",
      "COS40006",
    ],
    pendingUnits: [],
    status: "Active",
  },
  {
    id: 3,
    name: "Priya Sharma",
    studentId: "104234567",
    email: "priya.sharma@student.edu.au",
    approvedUnits: ["EAT40005"],
    pendingUnits: ["EAT40006"],
    status: "Active",
  },
  {
    id: 4,
    name: "Marcus Wong",
    studentId: "104345678",
    email: "marcus.wong@student.edu.au",
    approvedUnits: [
      "EAT40005",
      "EAT40006",
    ],
    pendingUnits: [],
    status: "Active",
  },
  {
    id: 5,
    name: "Anika Patel",
    studentId: "104456789",
    email: "anika.patel@student.edu.au",
    approvedUnits: ["COS40006"],
    pendingUnits: [],
    status: "Active",
  },
];

export const requests: UnitAccessRequest[] = [
  {
    id: 1,
    name: "Sarah Lee",
    studentId: "104567890",
    requestedAt: "2026-08-15 10:30",
    currentUnits: [
      "COS40005",
      "COS40006",
    ],
    requestingUnit: "COS40006",
    reason:
      "Enrolled in the continuation unit and need Project B resources.",
    status: "Approved",
  },
  {
    id: 2,
    name: "Priya Sharma",
    studentId: "104234567",
    requestedAt: "2026-08-16 14:15",
    currentUnits: ["EAT40005"],
    requestingUnit: "EAT40006",
    reason:
      "Continuing into semester 2 — need Project B materials.",
    status: "Pending",
  },
  {
    id: 3,
    name: "Anika Patel",
    studentId: "104456789",
    requestedAt: "2026-08-10 09:00",
    currentUnits: ["COS40006"],
    requestingUnit: "COS40005",
    reason:
      "Cross-enrolled for additional context.",
    status: "Rejected",
  },
];

export const resources: Resource[] = [
  {
    id: 1,
    title: "AI Usage Guideline",
    filename: "AI Usage Guideline.pdf",
    units: [
      "COS40005",
      "COS40006",
      "EAT40005",
      "EAT40006",
    ],
    category: "AI Guidelines",
    type: "PDF",
    visible: true,
  },
  {
    id: 2,
    title:
      "Capstone Submission Templates",
    filename:
      "Capstone submission templat...",
    units: [
      "COS40005",
      "COS40006",
      "EAT40005",
      "EAT40006",
    ],
    category:
      "Submission Templates",
    type: "ZIP",
    visible: true,
  },
  {
    id: 3,
    title:
      "Meeting Guide – Students",
    filename:
      "meeting guide - students.jpg",
    units: [
      "COS40005",
      "COS40006",
      "EAT40005",
      "EAT40006",
    ],
    category: "Meetings",
    type: "JPG",
    visible: true,
  },
  {
    id: 4,
    title: "Other FAQ",
    filename: "Other FAQ.pdf",
    units: [
      "COS40005",
      "COS40006",
      "EAT40005",
      "EAT40006",
    ],
    category: "FAQs",
    type: "PDF",
    visible: true,
  },
  {
    id: 5,
    title:
      "Professional Behaviour Guidelines – Client Meetings",
    filename:
      "Professional Behaviour Guide...",
    units: [
      "COS40005",
      "COS40006",
      "EAT40005",
      "EAT40006",
    ],
    category:
      "Professional Behaviour",
    type: "PDF",
    visible: true,
  },
  {
    id: 6,
    title: "Project A Revised",
    filename:
      "Project A revised.jpg",
    units: [
      "COS40005",
      "EAT40005",
    ],
    category: "Project A",
    type: "JPG",
    visible: true,
  },
  {
    id: 7,
    title:
      "Project B – Semester 2 2026",
    filename:
      "Project B semester 2 2026.jpg",
    units: [
      "COS40006",
      "EAT40006",
    ],
    category: "Project B",
    type: "JPG",
    visible: true,
  },
];

export const admins: AdminUser[] = [
  {
    id: 1,
    name: "Dr. Sarah Mitchell",
    email:
      "sarah.mitchell@swinburne.edu.au",
    role: "Admin",
    status: "Active",
    lastLogin:
      "2026-08-20\n09:15",
  },
  {
    id: 2,
    name: "Prof. James Nguyen",
    email:
      "james.nguyen@swinburne.edu.au",
    role: "Admin",
    status: "Active",
    lastLogin:
      "2026-08-19\n14:30",
  },
  {
    id: 3,
    name: "Dr. Emma Walsh",
    email:
      "emma.walsh@swinburne.edu.au",
    role: "Admin",
    status: "Inactive",
    lastLogin:
      "2026-07-15 11:00",
  },
];

export const overview: OverviewData = {
  totalStudents: 5,
  pendingRequests: 2,
  activeUnits: 4,
  totalResources: 24,
  recentRequests: requests,
};