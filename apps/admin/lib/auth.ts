export function getAuthToken(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("admin_auth_token");
}

export function setAuthToken(token: string): void {
  localStorage.setItem("admin_auth_token", token);
}

export function clearAuthToken(): void {
  localStorage.removeItem("admin_auth_token");
}
