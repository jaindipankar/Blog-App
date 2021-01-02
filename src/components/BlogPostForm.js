import React, { useState } from "react";
import { View, StyleSheet, TextInput, Text, Button } from "react-native";

const BlogPostForm = ({ onSubmit, initialValues }) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);
  return (
    <View>
      <Text style={styles.label}>Enter Title :</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(title) => setTitle(title)}
      />
      <Text style={styles.label}>Enter Content :</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={(content) => setContent(content)}
      />
      <Button title="Save Blog Post" onPress={() => onSubmit(title, content)} />
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    padding: 5,
    margin: 5,
    marginBottom: 15,
  },
  label: {
    fontSize: 20,
    marginBottom: 10,
    marginLeft: 5,
  },
});
BlogPostForm.defaultProps = {
  initialValues: {
    title: "",
    content: "",
  },
};
export default BlogPostForm;
