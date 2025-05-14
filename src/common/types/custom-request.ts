export interface CustomRequest {
  headers: Record<string, string>;
  user: { id: string; name: string; email: string };
  [key: string]: any;
}
