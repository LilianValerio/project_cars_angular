import { CarsDisplay } from './cars-display';

export interface User { 
    birthday?: string;
    createdAt?: Date;
    email?: string;
    firstName?: string;
    lastLogin?: Date;
    lastName?: string;
    listCars?: Array<CarsDisplay>;
    login?: string;
    phone?: string;
}
