import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { ErrorService } from './services/error.service';
import { ErrorResponse } from './types';
import { catchError, EMPTY } from 'rxjs';

export const errorHandlerInterceptor: HttpInterceptorFn = (req, next) => {
  const errorService = inject(ErrorService);

  errorService.clearErrors();

  return next(req).pipe(
    catchError((error: ErrorResponse) => {
      let errorMessage: string = '';

      switch (error.status) {
        case 400:
          errorMessage = error.error.error ?? 'Something went wrong';
          break;

        case 500:
          errorMessage = 'Could not connect to the database';
          break;

        default:
          errorMessage = error.error.error ?? 'Something went wrong';
      }

      errorService.setError(errorMessage);

      return EMPTY;
    })
  );
};
