import React from "react";
import { Button, Divider, Typography } from "antd";
import Posts from "../features/posts/Posts";
import AddPost from "../features/posts/AddPost";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import ViewPost from "../features/posts/ViewPost";
import EditPost from "../features/posts/EditPost";

const Home = () => {
  const [toggle, setToogle] = useState(true);
  const handleToggle = () => {
    setToogle(!toggle);
  };
  const { Title } = Typography;
  return (
    <>
      <Divider>
        <Title level={2}>Post Anything Application</Title>
      </Divider>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <div className="contacts-main">
                <Title level={3}>{toggle ? "Posts" : "Add a New Post"}</Title>
                {toggle ? (
                  <Button type="primary" onClick={handleToggle}>
                    Add Post
                  </Button>
                ) : (
                  <Button type="danger" onClick={handleToggle}>
                    Cancel
                  </Button>
                )}
              </div>
              {toggle ? <Posts /> : <AddPost />}
            </div>
          }
        />
        <Route path="/post/:postId" element={<ViewPost />} />
        <Route path="/editPost/:postId" element={<EditPost />} />
      </Routes>
    </>
  );
};

export default Home;
