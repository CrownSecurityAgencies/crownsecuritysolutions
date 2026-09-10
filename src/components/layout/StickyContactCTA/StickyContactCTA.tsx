import Link from "next/link";
import styles from "./StickyContactCTA.module.scss";

export default function StickyContactCTA() {
  return (
    <Link href="/contact-us/" className={styles.cta}>
      GET IN TOUCH
    </Link>
  );
}
