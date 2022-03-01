import { HubUser } from "./HubUser";
export interface HubMessage {
  to: string;
  from: HubUser;
  message: string;
}