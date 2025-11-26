import Image from "next/image";
import styles from "./HomePage.module.scss";

const HomePage = () => {
    return (
        <div className={styles.home}>
            <div className={styles.content}>
                <h1>Welcome to the Rick & Morty Explorer!</h1>

                <div className={styles.gifWrapper}>
                    <Image
                        src="/images/rick-morty.gif"
                        alt="Rick & Morty GIF"
                        width={400}
                        height={400}
                    />
                </div>

                <p>Discover all your favorite characters, episodes, and locations.</p>
            </div>
        </div>
    );
};

export default HomePage;