export interface ILoanRequest{
    requestedAmount: number,
    requestedPeriod: number,
    userIdentity: string
    availableAmount?: number,
    availablePeriod?: number,
    message?: string,
}