export interface UserType {
  name: string;
  createDate: string;
  passwordChangedDate: string;
  daysSincePasswordChange: number
  lastAccessDate: string
  daysSinceLastAccess: number
  mfaEnabled:string
}