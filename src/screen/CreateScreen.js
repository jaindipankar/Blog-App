import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import BlogPostForm from "../components/BlogPostForm";
import { Context } from "../context/BlogContext";

const CreateScreen = ({ navigation }) => {
  const { AddblogPosts } = useContext(Context);

  return (
    <BlogPostForm
      onSubmit={(title, content) =>
        AddblogPosts(title, content, () => navigation.navigate("Index"))
      }
    />
  );
};

const styles = StyleSheet.create({});

export default CreateScreen;
