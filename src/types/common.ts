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
export interface Name {
  firstName: string;
  lastName: string;
  middleName: string;
}

export interface IAdmin {
  id: string;
  name: Name;
  gender: string;
  managementDepartment: string;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  dateOfBirth: string;
  bloodGroup: string;
  designation: string;
  presentAddress: string;
  permanentAddress: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface IFaculty {
  id: string;
  name: Name;
  gender: string;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  dateOfBirth: string;
  bloodGroup: string;
  academicFaculty: string;
  academicDepartment: string;
  designation: string;
  presentAddress: string;
  permanentAddress: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface IAcademicFaculty {
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

export type IDProps = {
  params: any;
};
