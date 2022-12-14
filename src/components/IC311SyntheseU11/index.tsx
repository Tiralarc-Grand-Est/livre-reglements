import React from "react";
import styles from "./styles.module.css";

export default function IC311SyntheseU11(): JSX.Element {
  return (
    <table>
      <thead>
        <tr>
          <th rowSpan={2}></th>
          <th rowSpan={2}>Certificats médicaux</th>
          <th colSpan={2}>Tir en Salle(Tir à 18m)</th>
          <th>Tir à l'Arc Extérieur</th>
          <th colSpan={3}>Disciplines de Parcours</th>
        </tr>
        <tr>
          <th>18m</th>
          <th>25m</th>
          <th></th>
          <th>Campagne</th>
          <th>Nature</th>
          <th>3D</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            Poussins(U11) jusqu'à <b>7 ans</b>
          </td>
          <td>
            Certificat médical de non contre-indication à la pratique du tir à
            l’arc (APS) (1)
          </td>
          <td>NON</td>
          <td>NON</td>
          <td>NON</td>
          <td>NON</td>
          <td>NON</td>
          <td>NON</td>
        </tr>
        <tr>
          <td>
            Poussins(U11) de <b>8, 9 et 10 ans</b>
          </td>
          <td>
            Avec certificat médical de non contre-indication à la pratique du
            tir à l’arc en compétition délivré par tout docteur en médecine si
            inférieur ou égal à 18# marquées et établi par un médecin agréé par
            la FFTA si plus de 18# marquées
          </td>
          <td>OUI (2)</td>
          <td>NON</td>
          <td>OUI (2)</td>
          <td>NON</td>
          <td>NON</td>
          <td>NON</td>
        </tr>
        <tr>
          <td colSpan={8} className={styles.separator}></td>
        </tr>
        <tr>
          <td>
            Poussins(U11) en{" "}
            <b>dernière année (10 ans) surclassés en Benjamins(U13)</b> (voir
            ci-dessous)
          </td>
          <td rowSpan={8}>
            Avec certificat médical ci-dessus + certificat médical de
            surclassement établi par un médecin agréé par la FFTA
          </td>
          <td>OUI</td>
          <td>OUI</td>
          <td>OUI</td>
          <td>OUI</td>
          <td>OUI (dans les divisions d’arc ouvertes aux Benjamins(U13))</td>
          <td>OUI (dans les divisions d’arc ouvertes aux Benjamins(U13))</td>
        </tr>
        <tr>
          <td>Arc Classique</td>
          <td>OUI</td>
          <td>OUI</td>
          <td>OUI</td>
          <td>OUI</td>
          <td className={styles.disabled}></td>
          <td className={styles.disabled}></td>
        </tr>
        <tr>
          <td>Arc à poulies</td>
          <td className={styles.disabled}></td>
          <td className={styles.disabled}></td>
          <td className={styles.disabled}></td>
          <td className={styles.disabled}></td>
          <td className={styles.disabled}></td>
          <td className={styles.disabled}></td>
        </tr>
        <tr>
          <td>Arc Nu (BB)</td>
          <td>OUI (2)</td>
          <td>OUI (2)</td>
          <td>OUI (2)</td>
          <td>OUI (2)</td>
          <td>OUI</td>
          <td>OUI</td>
        </tr>
        <tr>
          <td>Arc à poulies nu</td>
          <td className={styles.disabled}></td>
          <td className={styles.disabled}></td>
          <td className={styles.disabled}></td>
          <td className={styles.disabled}></td>
          <td className={styles.disabled}></td>
          <td className={styles.disabled}></td>
        </tr>
        <tr>
          <td>Arc Droit (long bow) </td>
          <td className={styles.disabled}></td>
          <td className={styles.disabled}></td>
          <td className={styles.disabled}></td>
          <td className={styles.disabled}></td>
          <td className={styles.disabled}></td>
          <td className={styles.disabled}></td>
        </tr>
        <tr>
          <td>Arc libre</td>
          <td className={styles.disabled}></td>
          <td className={styles.disabled}></td>
          <td className={styles.disabled}></td>
          <td className={styles.disabled}></td>
          <td className={styles.disabled}></td>
          <td className={styles.disabled}></td>
        </tr>
        <tr>
          <td>Arc Chasse</td>
          <td className={styles.disabled}></td>
          <td className={styles.disabled}></td>
          <td className={styles.disabled}></td>
          <td className={styles.disabled}></td>
          <td className={styles.disabled}></td>
          <td className={styles.disabled}></td>
        </tr>
      </tbody>
    </table>
  );
}
