import { Location } from "@/types/location";
import Link from "next/link";
import styles from "./Card.module.scss";

const CharacterCard = ({ location }: { location: Location }) => {

    return(
        <Link className={styles.card} href={`/locations/${location.id}`}>
            <div className={styles.cardContent}>
                <h2>{location.name}</h2>
                <p><strong>Type:</strong> {location.type}</p>
                <p><strong>Dimension:</strong> {location.dimension}</p>
            </div>
        </Link>
    );
}

export default CharacterCard;