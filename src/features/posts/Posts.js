import React from "react";
import { Row, Col, Card, Typography, Button, Space } from "antd";
import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import PostAuthor from "./PostAuthor";
import PostTime from "./PostTime";
import ReactionButtons from "./ReactionButtons";
import { Link } from "react-router-dom";

const Posts = () => {
  const { Title, Text } = Typography;
  const posts = useSelector(selectAllPosts);
  // console.log(posts);
  const renderPosts = posts.map((post) => {
    return (
      <Row
        key={post.id}
        style={{
          padding: "8px",
          margin: "30px",
          border: "1px solid black",
          borderRadius: "6px",
          boxShadow: "2px 3px 5px grey",
        }}
      >
        <Col span={16}>
          <Title level={4}>
            <b>Title : </b>
            {post.title}
          </Title>
          <Text>
            <b>Content : </b>
            {post.content}
          </Text>
          <PostAuthor userId={post.userId} />
          <PostTime timeStamp={post.date} />
          <ReactionButtons post={post} />
        </Col>
        <Col span={8}>
          <Link to={`/post/${post.id}`}>
            <div className="btns">
              <Button type="primary">View</Button>
              {/* <Button type="danger">Delete</Button> */}
            </div>
          </Link>
        </Col>
      </Row>
    );
  });
  return <>{renderPosts}</>;
};

export default Posts;
