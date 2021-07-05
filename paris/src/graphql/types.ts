export interface User {
  id: string;
  email: string;
  username: string;
  currentRoomId?: string;
}

export interface Room {
  id: string;
  name: string;
  description?: string;
  tag: keyof typeof Tag;
  numPeopleInside: number;
  creatorId: string;
  isPrivate: boolean;
}

export enum Tag {
  POP = "POP",
  RAP = "RAP",
  JAZZ = "JAZZ",
  CLASSICAL = "CLASSICAL",
  HIPHOP = "HIP-HOP",
  ELECTRONIC = "ELECTRONIC",
  INDIE = "INDIE",
  KPOP = "K-POP",
  RB = "R&B",
  BLUES = "BLUES",
  METAL = "METAL",
  FUNK = "FUNK",
  LATIN = "LATIN",
  ARAB = "ARAB",
  ACOUSTIC = "ACOUSTIC",
  PUNK = "PUNK",
  ROCK = "ROCK",
  MIX = "MIX",
}
