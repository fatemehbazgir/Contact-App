import styles from "./Header.module.css"

function Header() {
  return (
    <div className={styles.container}>
      <h1>Contact App</h1>
      <p>
        <a href="https://www.instagram.com/fatemehbazgir.js?igsh=M2tkcXcwYWhnd2R2">
          FatemehBazgir.js
        </a>{" "}
        | React.js
      </p>
    </div>
  );
}

export default Header;
