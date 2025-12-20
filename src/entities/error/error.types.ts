export type ErrorResponse = {
  code: number; // 400, 404, 425
  error: true;
  message: string;
  waitUntil?: string; // ISO для 425
};
