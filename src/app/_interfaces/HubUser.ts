import { Guid } from "guid-typescript";
export interface HubUser {
  connectionId: string;
  groupId: string;
  name: string;
  deviceId?: Guid;
  deviceName: string;
  facilityId: Guid;
  facilityName: string;
  connectedToOtherUsers: boolean;
  connectedUserIds: string[];
  userOrigin: string;
  sessionId?: Guid;
}
export enum UserOrigin {
  WebPortal = 'WebPortal',
  Device = 'Device'
}