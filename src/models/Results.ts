// Here we define Results{} properties and their typings

// totalContribution won't be used anywhere
// isMarried is not currently being used but can be collected for a future feature showcasing spousal benefits. 
// Averages are currently being used for life expectancy. We'd inculde LE here if its to be user supplied.

export class Results {
    monthly: number[];
    cumulative: number[];
    createdAt: string;
    isRegistered: boolean;
    gender: string;
    FRAbenefit: number;
    totalContribution: number;
    isMarried: boolean;
}