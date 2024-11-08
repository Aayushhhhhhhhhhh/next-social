import { FollowRequest, User } from "@prisma/client";

type MinimalUser = {
  id: string;
  username?: string | null;
  email: string;
  avatar?: string | null;
  cover?: string | null;
  name?: string | null;
  surname?: string | null;
  description?: string | null;
  city?: string | null;
  school?: string | null;
  work?: string | null;
  website?: string | null;
  createdAt: Date;
};

export type RequestWithUser = FollowRequest & {
  sender: MinimalUser;
};

export interface IEventCard {
  currentUserId: string | null;
  user: User;
  eventName: string;
  requests?: RequestWithUser[];
}
