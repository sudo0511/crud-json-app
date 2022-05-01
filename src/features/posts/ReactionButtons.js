import React from "react";
import { useDispatch } from "react-redux";
import { reactionAdded } from "./postsSlice";
import { Button } from "antd";

const reactionEmojis = {
  like: "👍",
  angry: "😡",
  love: "💙",
};

const ReactionButtons = ({ post }) => {
  const dispatch = useDispatch();
  const reactionButtons = Object.entries(reactionEmojis).map(
    ([name, emoji]) => {
      return (
        <Button
          key={name}
          type="text"
          onClick={() => {
            dispatch(
              reactionAdded({
                postId: post.id,
                reaction: name,
              })
            );
          }}
        >
          {emoji} {post.reactions[name]}
        </Button>
      );
    }
  );
  //   console.log(reactionButtons);
  return <div className="reaction-div">{reactionButtons}</div>;
};

export default ReactionButtons;
