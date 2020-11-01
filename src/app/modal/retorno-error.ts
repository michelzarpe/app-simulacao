

    export interface Error {
        fieldName: string;
        messege: string;
    }

    export interface RetornoError {
        timestamp: number;
        status: number;
        error: string;
        message: string;
        path: string;
        errors: Error[];
    }

