export interface CustomResponse {
  headersSent: boolean;
  setHeader: (key: string, value: string) => void;
  status: (statusCode: number) => CustomResponse;
  json: (data: any) => void;
  statusCode: number;
  get: (key: string) => string;
  on: (event: string, listener: () => void) => void;
  getHeader: (key: string) => string;
  getHeaders: () => Record<string, string>;
  getHeaderNames: () => string[];
}
