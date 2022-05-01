import React from "react";
import { Button, Divider, Typography, Form, Input, Select } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "./postsSlice";
import { selectAllUsers } from "../users/usersSlice";

const AddPost = () => {
  const { Option } = Select;
  const [title, setTitle] = useState("");

  const [userId, setUserId] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  const users = useSelector(selectAllUsers);
  // console.log(users);

  const handleSavePost = () => {
    if (title && content) {
      dispatch(addPost(title, content, userId));
    }
    setTitle("");
    setContent("");
  };

  const usersOptions = users.map((user) => {
    return (
      <Option key={user.id} value={user.id}>
        {user.name}
      </Option>
    );
  });

  const onAuthorChange = (id) => {
    // console.log(e);
    setUserId(id);
  };

  const canSave = Boolean(title) && Boolean(userId) && Boolean(content);

  return (
    <div>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 10,
        }}
      >
        <Form.Item label="Post Title" name="title">
          <Input value={title} onChange={(e) => setTitle(e.target.value)} />
        </Form.Item>
        <Form.Item label="Author" name="author">
          <Select showSearch value={userId} onChange={onAuthorChange}>
            <Option value=""></Option>
            {usersOptions}
          </Select>
        </Form.Item>
        <Form.Item label="Content" name="content">
          <Input.TextArea
            style={{ height: 80 }}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" onClick={handleSavePost} disabled={!canSave}>
            Save Post
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddPost;
