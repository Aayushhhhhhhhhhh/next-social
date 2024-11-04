import { useState } from "react";
import { RequestWithUser } from "./EventCardTypes";
import { acceptDeclineFollowRequest } from "@/lib/actions";

const useEventCard = () => {
  const [showList, setShowList] = useState<boolean>(true);

  const handleAcceptDeclineClick = async (
    requests: RequestWithUser[] | undefined,
    index: number,
    accept: boolean
  ) => {
    await acceptDeclineFollowRequest(
      (requests ?? [])[index]?.sender.id,
      accept
    );
    setShowList(!showList);
  };

  return { showList, setShowList, handleAcceptDeclineClick };
};

export default useEventCard;
