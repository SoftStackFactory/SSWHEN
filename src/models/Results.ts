// Here we define Results{} properties and their typings
// This format of Results has all the properties needed to provide mock data in case the service fails. 
export class Results {
    monthly: number[];
    cumulative: number[];
    createdAt: any;
    isRegistered: boolean;
    gender: string;
    lifeExpectancy: number;
    FRAbenefit: number;
    ageFRA: number;
    totalContribution: number;
    isMarried: boolean;
    dateOfBirth: any;
}