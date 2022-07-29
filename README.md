# Règlements sportifs et Arbitrage - Fédération Française de Tir à l'Arc

Le site présentant le règlement est généré avec [Docusaurus 2](https://docusaurus.io/), un générateur de site web statique.

## Accès direct aux règlements sportifs en version brute

- [CHAPITRE I - LES RÈGLEMENTS GÉNÉRAUX](./docs/chapitre-I/introduction.md)

## Développement

### Installation

```
$ yarn
```

### Développement local

```
$ yarn start
```

Cette commande démarre un serveur local et ouvre le navigateur. La plupart des changements apparaissent en direct sans redémarrer le serveur ni recharger la page du navigateur.

### Génération

```
$ yarn build
```

Cette commande génère le contenu statique dans le dossier `build` et peut être servi en utilisant n'importe quel service d'hébergement de site statique.

### Déploiement

En utilisant SSH :

```
$ USE_SSH=true yarn deploy
```

Sans utiliser SSH :

```
$ GIT_USER=<Votre identifiant GitHub> yarn deploy
```

Si vous utilisez GitHub Pages pour l'hébergement, cette commande va généré le site et le pusher dans la branche `gh-pages`.
