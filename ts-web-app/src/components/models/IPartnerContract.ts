import { IContract } from "./IContract";

export interface IPartnerContract {
  id?: string;
  name: string;
  nickname: string;
  description: string;
  urlPage: string;
  contract: IContract;
}