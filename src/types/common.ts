export interface IMeta {
  limit: number;
  page: number;
  size: number;
}

export type ResponseSuccessType = {
  data: any;
  meta?: IMeta;
};

export type IResponseErrorMessage = {
  path: string | number;
  message: string;
};

export type ResponseErrorType = {
  statusCode: number;
  message?: string;
  errorMessages?: IResponseErrorMessage[];
};
