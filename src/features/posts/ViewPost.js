import { Button, Typography } from "antd";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { selectAllPosts } from "./postsSlice";
import { useSelector } from "react-redux";

const ViewPost = () => {
  const { postId } = useParams();
  //   console.log(postId);
  const posts = useSelector(selectAllPosts);
  //   console.log(posts);

  const viewPost = posts.find((post) => {
    return postId == post.id;
  });
  //   console.log(viewPost);

  const { Title, Text } = Typography;
  return (
    <div className="view-post">
      <Title level={3}>
        <b>Title : </b>
        {viewPost.title}
      </Title>
      <Text>
        <b>Content : </b>
        {viewPost.content}
      </Text>
      <Link to={`/editPost/${viewPost.id}`}>
        <Button type="primary">Edit Post</Button>
      </Link>
    </div>
  );
};

export default ViewPost;
