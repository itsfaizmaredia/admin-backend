export interface ApprovedUnit {
  code: string;
  name: string;
  status: "Approved";
}

export interface StudentProfile {
  name: string;
  email: string;
  studentId: string;
  initials: string;
  approvedUnits: ApprovedUnit[];
}

export const studentProfile: StudentProfile = {
  name: "Jordan Tan",
  email: "jordan.tan@student.edu.au",
  studentId: "104123456",
  initials: "J",
  approvedUnits: [
    {
      code: "COS40005",
      name: "Computing Technology Project A",
      status: "Approved",
    },
    {
      code: "COS40006",
      name: "Computing Technology Project B",
      status: "Approved",
    },
  ],
};
