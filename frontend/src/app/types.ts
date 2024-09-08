import { HttpErrorResponse } from '@angular/common/http';

export type URL = {
  id: number;
  url: string;
  shortCode: string;
  createdAt: string;
  updatedAt: string | null;
};

export type URLStats = URL & { accessCount: number };

export interface ErrorResponse extends HttpErrorResponse {
  error: {
    error?: string;
    errors?: string[];
  };
}
