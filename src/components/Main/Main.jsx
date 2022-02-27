import styles from "./main.module.scss";
import User from "./User/User";
import Articles from "./Articles/Articles";

function Main(props) {
  return (
    <>
      <div className={styles.container}>
        <Articles />
        <User />
      </div>
    </>
  );
}

export default Main;
