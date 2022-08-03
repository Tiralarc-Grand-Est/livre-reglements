import Link from "@docusaurus/Link";
import React from "react";
import styles from "./styles.module.css";

export default function HomepageMentions(): JSX.Element {
  return (
    <section className={styles.mentions}>
      <div className="container">
        <div className="row">
          <p className={styles.text}>
            Ce site est un projet collaboratif non officiel et il convient de
            toujours se reporter au site fédéral pour vérifier quelle est la
            dernière version du Livre des Règlements.
          </p>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="https://www.ffta.fr/vie-sportive/larbitrage/reglements-sportifs-et-arbitrage"
            >
              Version officielle PDF du Livre des Règlements
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
