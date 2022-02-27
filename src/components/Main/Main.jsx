import Image from "next/image";
import Link from "next/link";
import styles from "./main.module.scss";

function Main(props) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.articles}>
          <h1>Articles</h1>
          <hr />
          <div className={styles.article}>
            <h2>Title of Article</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
              asperiores aliquam veniam ad repudiandae quibusdam nesciunt eos
              molestias corporis dolorum quas quo, dolores architecto sint
              mollitia? Soluta iure aperiam quos.
            </p>
          </div>
          <div className={styles.article}>
            <h2>Title of Article</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
              asperiores aliquam veniam ad repudiandae quibusdam nesciunt eos
              molestias corporis dolorum quas quo, dolores architecto sint
              mollitia? Soluta iure aperiam quos.
            </p>
          </div>
          <div className={styles.article}>
            <h2>Title of Article</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
              asperiores aliquam veniam ad repudiandae quibusdam nesciunt eos
              molestias corporis dolorum quas quo, dolores architecto sint
              mollitia? Soluta iure aperiam quos.
            </p>
          </div>
        </div>
        <div className={styles.userDetails}>
          <div className={styles.details}>
            <div className={styles.detailsText}>
              <h2>Name of user</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <p>
                <Link href={"/"}>Link here</Link>
              </p>
            </div>
            <div className={styles.detailsPhoto}>
              <div className={styles.photo}>
                <Image layout="fill" src={"/lucii.png"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
