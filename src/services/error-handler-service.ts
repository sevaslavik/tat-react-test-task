import type { ErrorResponse } from "../entities/error/error.types";

export class ApiErrorHandler {
  static handleErrorResponse(error: ErrorResponse) {
    switch (error.code) {
      case 404:
        throw new Error(error.message ?? "Invalid token");
      case 425:
        if (!error.waitUntil) {
          throw new Error("Search results not ready, waitUntil missing");
        }
        return new Date(error.waitUntil).getTime();
      default:
        throw new Error(error.message ?? "Unknown API error");
    }
  }
}
