export interface AuthType {
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;
    confirmPassword?: string
}

export interface AdvertsApiSlice {
    title: string,
    points: number,
    type: string,
    file: any,
    status: string
}
