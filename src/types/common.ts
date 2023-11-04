export interface IMeta {
  limit: number;
  page: number;
  size: number;
  total: number;
}
export interface IDepartment {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
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
