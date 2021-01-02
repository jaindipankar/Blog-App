import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import BlogPostForm from "../components/BlogPostForm";
import { Context } from "../context/BlogContext";

const EditScreen = ({ navigation }) => {
  const { state, EditblogPosts } = useContext(Context);
  const blogPost = state.find(
    (blogPost) => blogPost.id === navigation.getParam("id")
  );
  return (
    <BlogPostForm
      initialValues={{ title: blogPost.title, content: blogPost.content }}
      onSubmit={(title, content) =>
        EditblogPosts(navigation.getParam("id"), title, content, () =>
          navigation.pop()
        )
      }
    />
  );
};

const styles = StyleSheet.create({});

export default EditScreen;
