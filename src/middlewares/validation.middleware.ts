import { plainToInstance } from 'class-transformer';
import { validate, ValidationError } from 'class-validator';
import { RequestHandler } from 'express';
import { HttpException } from '@exceptions/HttpException';

export const validationMiddleware = (
    type: any,
    value: string | 'body' | 'query' | 'params' = 'body',
    isArray = false,
    skipMissingProperties = false,
    whitelist = true,
    forbidNonWhitelisted = true,
): RequestHandler => {
  return (req, res, next) => {
    let message = '';
    const promises: Promise<ValidationError[]>[] = [];

    if (isArray) {
      plainToInstance(type, req[value] || {}).forEach((element: any) => {
        promises.push(validate(element, { skipMissingProperties, whitelist, forbidNonWhitelisted }));
      });

      Promise.all(promises).then((data: ValidationError[][]) => {
        const errors = data.reduce((a, b) => [...a, ...b]);

        if (errors.length > 0) {
          message = errors.map((error: ValidationError) => Object.values(error.constraints || {})).join(', ');
          next(new HttpException(400, message));
        } else {
          next();
        }
      });
    } else {
      validate(plainToInstance(type, req[value] || {}), { skipMissingProperties, whitelist, forbidNonWhitelisted }).then((errors: ValidationError[]) => {
        if (errors.length > 0) {
          const message = errors.map((error: ValidationError) => Object.values(error.constraints || {})).join(', ');
          next(new HttpException(400, message));
        } else {
          next();
        }
      });
    }
  };
};
