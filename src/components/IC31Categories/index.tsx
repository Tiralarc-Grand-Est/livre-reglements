import React from "react";

export default function IC31Categories(): JSX.Element {
  return (
    <table>
      <thead>
        <tr>
          <th>
            <b>Types de licences</b>
          </th>
          <th>Age dans l'année civile de la licence</th>
          <th>Catégorie</th>
          <th>Validité</th>
          <th>Types de licences proposées</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Adultes</td>
          <td>
            60 ans et +<br />
            de 40 à 59 ans
            <br />
            de 21 à 39 ans
          </td>
          <td>
            (S3) Seniors 3<br />
            (S2) Seniors 2<br />
            (S1) Seniors 1
          </td>
          <td rowSpan={4}>Du 01/09 au 31/08 de l'année suivante</td>
          <td>
            Pratique en Club et en compétition
            <br />
            Pratique en Club - Compétitions non autorisées
            <br />
            Sans Pratique
          </td>
        </tr>
        <tr>
          <td>Jeunes</td>
          <td>
            18,19 &amp; 20 ans
            <br />
            15,16 &amp; 17 ans
            <br />
            13 &amp; 14 ans
            <br />
            11 &amp; 12 ans
          </td>
          <td>
            U21
            <br />
            U18
            <br />
            U15
            <br />
            U13
          </td>
          <td>Pratique en club ou en compétition</td>
        </tr>
        <tr>
          <td>Handisports</td>
          <td>Toutes catégories</td>
          <td>Toutes catégories</td>
          <td>
            Pratique en Compétition uniquement
            <br />
            Toutes catégories d'âges Adultes, Jeunes, U11
            <br />
            Présentation obligatoire d'une licence FFSA en cours de validité
            pour la saison en cours
            <br />
            Avec mention compétition obligatoire (sous conditions et limitations
            pour les U11)
          </td>
        </tr>
        <tr>
          <td>U11</td>
          <td>10 ans et moins</td>
          <td>U11</td>
          <td>
            Pratique en Club ou en compétition (sous conditions et limitations)
            <br />
            Uniquement catégorie d'âge U11
          </td>
        </tr>
        <tr>
          <td>Licence Découverte</td>
          <td>Toutes catégories</td>
          <td>Toutes catégories</td>
          <td>Du 01/03 au 31/08</td>
          <td>
            Pratique en Club (uniquement dans le club ayant délivré la licence)
            <br />
            Compétitions officielles non autorisées
            <br />
            Toutes catégories d'âges Adultes, Jeunes et U11.
            <br />
            délivrable uniquement à partir de mars de la saison en cours à des
            personnes n'ayant jamais été licenciées FFTA
          </td>
        </tr>
      </tbody>
    </table>
  );
}
