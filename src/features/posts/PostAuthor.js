import React from "react";
import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";

const PostAuthor = ({ userId }) => {
  const users = useSelector(selectAllUsers);
  const author = users.find((user) => {
    return user.id === userId;
  });
  console.log(author);
  return (
    <i>
      <span>
        {" "}
        <br />
        by {author ? author.name : "Unknown author"}
      </span>
    </i>
  );
};

export default PostAuthor;
