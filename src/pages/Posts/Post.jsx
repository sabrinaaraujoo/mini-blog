import React from "react";
import styles from "./Post.module.css";

// hooks
import { useParams } from "react-router-dom";
import { useFetchDocument } from "../../hooks/useFetchDocument";

const Post = () => {
  const { id } = useParams();
  const { document: post, loading } = useFetchDocument("posts", id);

  return (
    <div className={styles.post_container}>
      {loading && <p>Carregando post...</p>}
      {post && (
        <>
          <h1>{post.title}</h1>
          <img src={post.image} alt={post.title} />
          <p>{post.body}</p>
          <h3>Este post se trata sobre:</h3>
          {post.tagsArray.map((tag) => (
            <p className={styles.tags} key={tag.id}>
              <span>#</span>
              {tag}
            </p>
          ))}
        </>
      )}
    </div>
  );
};

export default Post;
