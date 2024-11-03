import { User } from "@prisma/client";

export interface IRightMenu {
  user?: User | null;
}
