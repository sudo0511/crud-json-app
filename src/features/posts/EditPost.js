import { Button, Form, Input } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { editPost } from "./postsSlice";

const EditPost = () => {
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");
  const dispatch = useDispatch();
  const { postId } = useParams();

  const canSave = Boolean(newTitle) && Boolean(newContent);
  return (
    <div className="edit-post">
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
          <Input
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
        </Form.Item>
        <Form.Item label="Content" name="content">
          <Input.TextArea
            style={{ height: 80 }}
            value={newContent}
            onChange={(e) => setNewContent(e.target.value)}
          />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button
            type="primary"
            onClick={() => {
              dispatch(
                editPost({
                  title: newTitle,
                  content: newContent,
                  postId,
                })
              );
            }}
            disabled={!canSave}
          >
            Save Post
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default EditPost;
