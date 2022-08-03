import Link from "@docusaurus/Link";
import React from "react";
import styles from "./styles.module.css";

export default function HomepageMentions(): JSX.Element {
  return (
    <section className={styles.mentions}>
      <div className="container">
        <div className="row">
          <div className={styles.text}>
            <p>
              Ce site est un <b>projet collaboratif non officiel</b> qui vise à
              proposer une version plus lisible et plus facile à utiliser du
              Livre des Règlements.
            </p>
            <p>
              Bien qu'il manque encore certains éléments (tableaux, annexes,
              mise en forme de certaines parties), cette version est{" "}
              <b>extraite du livre original</b> et son contenu est{" "}
              <b>identique à une différence près</b> : certains titres ont du
              être ajoutés sur les articles pour permettre à la fonctionnalité
              de recherche de fonctionner correctement.
            </p>
            <p>
              Il convient de toujours se reporter au site fédéral pour vérifier
              quelle est la dernière version du Livre des Règlements.
            </p>
          </div>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="https://www.ffta.fr/vie-sportive/larbitrage/reglements-sportifs-et-arbitrage"
            >
              Version PDF officielle
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
