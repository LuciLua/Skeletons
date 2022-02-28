import styles from "./header.module.scss";

function Header(props) {
  return (
    <>
      <header className={styles.header}>
        <h1>Skeletons</h1>
      </header>
    </>
  );
}

export default Header;
