import { Request, Response } from "express";

export interface ICustomRequest extends Request {
  user: {
    userId: string;
    name: string;
    email: string;
  };
}

export interface ICustomResponse<T = any> extends Response {
  json: (
    body: { 
      success?: boolean; 
      message: string; 
      data?: T; 
      error?: string 
    }) => this;
}

