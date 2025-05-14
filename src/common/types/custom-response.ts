export interface CustomResponse extends Response {
  headersSent: boolean;
  setHeader: (key: string, value: string) => void;
}
