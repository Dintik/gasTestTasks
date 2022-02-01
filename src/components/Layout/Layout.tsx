import styles from "./styles.module.scss";

interface IProps {
    children: React.ReactNode;
}

export const Layout: React.FC<IProps> = (props: IProps) => {
    return (
        <div className={styles.layout}>
            {/* <Header /> */}
            {props.children}
            {/* <Footer /> */}
        </div>
    );
};
