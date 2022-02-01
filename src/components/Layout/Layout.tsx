import styles from "./styles.module.scss";

export const Layout: React.FC = ({ children }) => {
    return (
        <div className={styles.layout}>
            {/* <Header /> */}
            {children}
            {/* <Footer /> */}
        </div>
    );
};