export type Status =
  | "Active"
  | "Inactive";

export type RequestStatus =
  | "Pending"
  | "Approved"
  | "Rejected";

export type Student = {
  id: number;
  name: string;
  studentId: string;
  email: string;
  approvedUnits: string[];
  pendingUnits: string[];
  status: Status;
};

export type UnitAccessRequest = {
  id: number;
  name: string;
  studentId: string;
  requestedAt: string;
  currentUnits: string[];
  requestingUnit: string;
  reason: string;
  status: RequestStatus;
};

export type Resource = {
  id: number;
  title: string;
  filename: string;
  units: string[];
  category: string;
  type: string;
  visible: boolean;
  description?: string;
};

export type AdminUser = {
  id: number;
  name: string;
  email: string;
  role: "Admin";
  status: Status;
  lastLogin: string;
};

export type OverviewData = {
  totalStudents: number;
  pendingRequests: number;
  activeUnits: number;
  totalResources: number;
  recentRequests: UnitAccessRequest[];
};