import { User } from "@prisma/client";

interface ModifiedUser {
  _count: {
    post: number;
    following: number;
    followers: number;
  };
  id: string;
  createdAt: Date;
  name: string | null;
  cover: string | null;
  surname: string | null;
  username: string | null;
  description: string | null;
  work: string | null;
  website: string | null;
  city: string | null;
  email: string;
  avatar: string | null;
  school: string | null;
}
export interface IRightMenu {
  user: ModifiedUser;
}
