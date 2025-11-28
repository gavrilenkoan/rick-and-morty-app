import { Location } from "@/types/location";
import Link from "next/link";
import styles from "./Card.module.scss";

const LocationCard = ({ location, hideDetails = false }: { location: Location, hideDetails?: boolean}) => {

    return(
        <Link className={styles.card} href={`/locations/${location.id}`}>
            <div className={styles.cardContent}>
                <h2>{location.name}</h2>
                {!hideDetails && (
                    <>
                        <p><strong>Type:</strong> {location.type}</p>
                        <p><strong>Dimension:</strong> {location.dimension}</p>
                    </>
                )}
            </div>
        </Link>
    );
}

export default LocationCard;