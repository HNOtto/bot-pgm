module.exports = {
  adamzat: {
    aliases: ["adamzat", "humanité", "humanite"],
    title: "Adamzat",
    titleFr: "Humanité",
    desc:
      "Increases damage up to X% based on HP difference between character and the enemy. HP difference is capped at 50%.",
    descFr: `Augmente les dommages à X% de la différence de HP entre le perso et l'ennemi. Difference HP limitée à 50%.`,
    levels: ["10%", "12.5%", "15%"],
    grades: ["Muka, Mandragora", "Spore, Orc Baby", "Smookie"]
  },
  aries: {
    title: "Aries",
    titleFr: "Bélier",
    grades : [],
    levels : [],
    desc:
      "Taking damage increases your attack speed. Taking skill damage increases your cast speed.",
    descFr: `Les dommages recus augmentent la vitesse d'attaque. Les dommages de skill diminuent le temps de cast.`
  },
  asthayi: {
    title: "Asthayi",
    titleFr: "Tempete",
    grades : [],
    levels: ["2-target Very slow cast", "2-target Slow cast", "AoE Slow cast"],
    desc:
      "Turns next single-target skill into double-target. But also raises cast time.",
    descFr:
      "Change le prochain skill monocible en double cible. Augmente le temps de cast."
  },
  celeritas: {
    title: "Celeritas",
    titleFr: "Vitesse",
    grades : [],
    levels: [],
    desc: "Boosts EVA before next spell casting.",
    descFr: `Booste l'EVA avant le cast du prochain sort.`
  },
  ciernie: {
    title: "Ciernie",
    titleFr: "Epines",
    grades : [],
    levels: ["25%", "30%", "35%"],
    desc: "Reflects X% damage taken as true damage back to the enemy.",
    descFr: "Reflete X% degats recus en tant que dégats bruts."
  },
  desita: {
    title: "Desita",
    titleFr: "Bonheur",
    grades : [],
    levels: ["2%", "3%", "4%"],
    desc: "Increases damage by X% for every beneficial effect over 4sec.",
    descFr:
      "Augmente de X% les dégats pour chaque buffs (beneficial effect) pendant 4sec."
  },
  enkeli: {
    title: "Enkeli",
    titleFr: "Ange",
    grades : [],
    levels: ["heal 10% of crit", "", ""],
    desc: "For a short time, gain crit chance, and crits heal.",
    descFr:
      "CRIT augmenté et restitution de HP en cas de critique pendant un certain temps."
  },
  ennerwelt: {
    title: "Ennerwelt",
    titleFr: "Enfer",
    grades : [],
    levels: ["5%", "7,5%", "10%"],
    desc: "Burns enemy SP equal to X% of damage dealt for a time.",
    descFr:
      "Durant un certain temps, les dégâts infligent une perte de SP à la cible."
  },
  era: {
    title: "Era",
    titleFr: "Ere",
    grades : [],
    levels: ["15%", "20%", "25%"],
    desc:
      "Recovers X% of damage taken before the next cast. 2x effect if HP is under 50%.",
    descFr: `X% des HP perdus avant la prochaine invocation de compétence sont réstitués progressivement après le début de l'invocation. (Effet doublé si HP<50%)`
  },
  flamma: {
    title: "Flamma",
    titleFr: "Brasier",
    grades : [],
    levels: ["0,50%", "0,65%", "0,80%"],
    desc:
      "Deals X% of ennemy current HP as damage per tick and reduces X% Def/M.Def. Duration = 5sec (increased to 7sec with Full Trottle).",
    descFr:
      "Les dégâts infligent une réduction continue de HP et DEFMDEF de la cible durant un certains temps"
  },
  fluo: {
    title: "Fluo",
    titleFr: "Flux",
    grades : [],
    levels: ["2%", "3%", "4%"],
    desc:
      "Recovers X% of max HP for 5 ticks. 2.5x effect with negative status.",
    descFr: `Restitue X% des maxHP en 5 ticks. Restitution accrue (2.5x) en cas d'altération d'état négative`
  },
  haere: {
    title: "Haere",
    titleFr: "Voyageur",
    grades : [],
    levels: ["60% maxHP", "50% maxHP", "40% maxHP"],
    desc:
      "Damage taken beyond a certain amount of Max_HP is reduced to 1. Duration = 3sec",
    descFr:
      "La perte max de HP est limité en fonction des HPmax durant un certain temps. Lorsque cette limite est atteinte les dégats excédant tombent à 1."
  },
  iawanan: {
    title: "Iawanan",
    titleFr: "Resistance",
    grades : [],
    levels : [],
    desc:
      "For a certain duration, after receiving a killing blow, will restore HP.",
    descFr: `Restitution de HP en cas d'attaques fatales subies durant un certain temps.`
  },
  iyali: {
    title: "Iyali",
    titleFr: "Famille",
    grades : [],
    levels: [
      "+1% / ally -3% / enemy",
      "+2% / ally -4% / enemy",
      "+3% / ally -5% / enemy"
    ],
    desc: "Gain damage for each ally. Reduce damage taken for each enemy.",
    descFr: `Durant un certain temps, augmente les dégats infligés par nombre d'alliés et diminue les dégats recus selon le nombre d'ennemis.`
  },
  kupona: {
    title: "Kupona",
    titleFr: "Survie",
    grades : [],
    levels: ["20%", "25%", "30%"],
    desc: "Damage reduction X% for 4 seconds.",
    descFr:
      "Réduit les dégâts subis de X% lors de la prochaine invocation de compétence (~4s)."
  },
  kuura: {
    title: "Kuura",
    titleFr: "Givre",
    grades : [],
    levels: [],
    desc:
      "Damage taken during casting restores SP. (effect is stronger when your SP is lower, or higher received damage)",
    descFr:
      "Restitution des SP en fonction des dégâts perdu après la prochaine invocation de compétence"
  },
  opari: {
    title: "Opari",
    titleFr: "Cadeau",
    grades : [],
    levels: ["20%", "25%", "30%"],
    desc: "Deals additional X% own damage as true damage (on normal attacks).",
    descFr:
      "Pour un certain temps, les attaques normales infligent en plus X% de dégâts bruts."
  },
  taika: {
    title: "Taika",
    titleFr: "Magie",
    grades : [],
    levels: ["Very slow cast", "Slow cast", ""],
    desc: "Current skill cannot be cancelled, lowers casting time",
    descFr: `La compétence actuelle ne peut être annulé; réduit temps d'invocation.`
  },
  vald: {
    title: "Vald",
    titleFr: "Puissance",
    grades : [],
    levels: ["0,5%", "0,7%", "0,9%"],
    desc:
      "Increases damage and damage reduction for every attack by X% over 4sec. There is a cap.",
    descFr:
      "Durant une certaine période, les attaques réduisent les dégâts subis de X% et augmente vos dégâts de X%"
  }
};
