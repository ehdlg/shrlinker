export type URL = {
  id: number;
  url: string;
  shortCode: string;
  createdAt: string;
  updatedAt: string | null;
};

export type URLStats = URL & { accessCount: number };

export type HttpErrorOptions = {
  status: number;
  message: string;
};
