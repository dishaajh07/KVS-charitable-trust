import React from "react";
import blogs from "../blog-data/importance-of-charity.json";
import styles from "./Blog.module.css";

const Blog = () => {
  const blog = blogs[0];

  return (
    <div className={styles.blogContainer}>
      <div className={styles.blogContent}>
        <h1>{blog.title}</h1>

        {blog.content.map((block, index) => {
          switch (block.type) {
            case "image":
              return (
                <img
                  key={index}
                  src={block.src}
                  alt={block.alt}
                  className={styles.blogImage}
                />
              );
            case "text":
              return <p key={index} dangerouslySetInnerHTML={{ __html: block.value }} />;
            case "heading":
              return <h2 key={index}>{block.value}</h2>;
            case "list":
              return (
                <div key={index}>
                  {block.items.map((item, i) => (
                    <div key={i} className={styles.listItem}>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                      <img src={item.image} alt={item.title} className={styles.blogImage} />
                    </div>
                  ))}
                </div>
              );
            case "quote":
              return <blockquote key={index}>{block.value}</blockquote>;
            case "bullets":
              return (
                <ul key={index}>
                  {block.items.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              );
            default:
              return null;
          }
        })}
      </div>
    </div>
  );
};

export default Blog;
