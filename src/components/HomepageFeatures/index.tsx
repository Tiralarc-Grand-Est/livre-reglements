import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Lisibilité accrue",
    Svg: require("@site/static/img/undraw_books_re_8gea.svg").default,
    description: (
      <>
        Ce site permet une lisibilité largement améliorée des règlements
        fédéraux.
      </>
    ),
  },
  {
    title: "Recherche facile",
    Svg: require("@site/static/img/undraw_file_searching_re_3evy.svg").default,
    description: (
      <>
        Toute la règlementation est indéxée et vous pouvez trouver ce que vous
        voulez en un rien de temps.
      </>
    ),
  },
  {
    title: "Dans la poche",
    Svg: require("@site/static/img/undraw_my_app_re_gxtj.svg").default,
    description: (
      <>
        Vous pouvez embarquer le règlement partout avec vous en l'installant sur
        votre smartphone.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
