import { Episode } from "@/types/episode";
import styles from "./Card.module.scss";
import Link from "next/link";

const EpisodeCard = ({ ep, hideDetails = false }: { ep: Episode, hideDetails?: boolean}) => {

    return(
        <Link className={styles.card} href={`/episodes/${ep.id}`}>
            <div className={styles.cardContent}>
                <h2>{ep.name}</h2>
                {!hideDetails && (
                    <>
                        <p><strong>Episode:</strong> {ep.episode}</p>
                        <p><strong>Air Date:</strong> {ep.air_date}</p>
                    </>
                )}
            </div>
        </Link>
    );
}

export default EpisodeCard;