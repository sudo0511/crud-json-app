import React from "react";
import { parseISO, formatDistanceToNow } from "date-fns";

const PostTime = ({ timeStamp }) => {
  let timeAgo = "";
  if (timeStamp) {
    const date = parseISO(timeStamp);

    const timePeriod = formatDistanceToNow(date);

    timeAgo = `${timePeriod} ago`;
  }
  return <span>&nbsp; ⏱ {timeAgo}</span>;
};

export default PostTime;
