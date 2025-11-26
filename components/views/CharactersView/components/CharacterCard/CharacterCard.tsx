import { Character } from "@/types/character";
import Image from "next/image";
import styles from "./CharacterCard.module.scss"; // note .module.scss
import Link from "next/link";

const CharacterCard = ({ char }: { char: Character }) => {
    return (
        <Link className={styles.card} href={`/characters/${char.id}`}>
            <div className={styles.cardImage}>
                <Image
                    src={char.image}
                    alt={char.name}
                    width={120}
                    height={120}
                />
            </div>

            <div className={styles.cardContent}>
                <h2>{char.name}</h2>
                <p><strong>Status:</strong> {char.status}</p>
                <p><strong>Species:</strong> {char.species}</p>
            </div>
        </Link>
    );
};

export default CharacterCard;
