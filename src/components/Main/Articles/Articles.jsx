import { useEffect, useState } from "react";
import styles from "./articles.module.scss";

function Articles() {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    setTimeout(async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setArticles(data);
    }, 2000);
  });

  return (
    <div className={styles.articles}>
      <h1>Articles</h1>
      <hr />
      {articles &&
        articles.map((article) => (
          <div className={styles.article} key={article.id}>
            <h2>{article.title}</h2>
            <p>{article.body}</p>
          </div>
        ))}
      {!articles && <div>Loading...</div>}
    </div>
  );
}

export default Articles;
