const pokemonMovesType = [
  {
    "name": "pound",
    "type": "normal"
  },
  {
    "name": "karate-chop",
    "type": "fighting"
  },
  {
    "name": "double-slap",
    "type": "normal"
  },
  {
    "name": "comet-punch",
    "type": "normal"
  },
  {
    "name": "mega-punch",
    "type": "normal"
  },
  {
    "name": "pay-day",
    "type": "normal"
  },
  {
    "name": "fire-punch",
    "type": "fire"
  },
  {
    "name": "ice-punch",
    "type": "ice"
  },
  {
    "name": "thunder-punch",
    "type": "electric"
  },
  {
    "name": "scratch",
    "type": "normal"
  },
  {
    "name": "vice-grip",
    "type": "normal"
  },
  {
    "name": "guillotine",
    "type": "normal"
  },
  {
    "name": "razor-wind",
    "type": "normal"
  },
  {
    "name": "swords-dance",
    "type": "normal"
  },
  {
    "name": "cut",
    "type": "normal"
  },
  {
    "name": "gust",
    "type": "flying"
  },
  {
    "name": "wing-attack",
    "type": "flying"
  },
  {
    "name": "whirlwind",
    "type": "normal"
  },
  {
    "name": "fly",
    "type": "flying"
  },
  {
    "name": "bind",
    "type": "normal"
  },
  {
    "name": "slam",
    "type": "normal"
  },
  {
    "name": "vine-whip",
    "type": "grass"
  },
  {
    "name": "stomp",
    "type": "normal"
  },
  {
    "name": "double-kick",
    "type": "fighting"
  },
  {
    "name": "mega-kick",
    "type": "normal"
  },
  {
    "name": "jump-kick",
    "type": "fighting"
  },
  {
    "name": "rolling-kick",
    "type": "fighting"
  },
  {
    "name": "sand-attack",
    "type": "ground"
  },
  {
    "name": "headbutt",
    "type": "normal"
  },
  {
    "name": "horn-attack",
    "type": "normal"
  },
  {
    "name": "fury-attack",
    "type": "normal"
  },
  {
    "name": "horn-drill",
    "type": "normal"
  },
  {
    "name": "tackle",
    "type": "normal"
  },
  {
    "name": "body-slam",
    "type": "normal"
  },
  {
    "name": "wrap",
    "type": "normal"
  },
  {
    "name": "take-down",
    "type": "normal"
  },
  {
    "name": "thrash",
    "type": "normal"
  },
  {
    "name": "double-edge",
    "type": "normal"
  },
  {
    "name": "tail-whip",
    "type": "normal"
  },
  {
    "name": "poison-sting",
    "type": "poison"
  },
  {
    "name": "twineedle",
    "type": "bug"
  },
  {
    "name": "pin-missile",
    "type": "bug"
  },
  {
    "name": "leer",
    "type": "normal"
  },
  {
    "name": "bite",
    "type": "dark"
  },
  {
    "name": "growl",
    "type": "normal"
  },
  {
    "name": "roar",
    "type": "normal"
  },
  {
    "name": "sing",
    "type": "normal"
  },
  {
    "name": "supersonic",
    "type": "normal"
  },
  {
    "name": "sonic-boom",
    "type": "normal"
  },
  {
    "name": "disable",
    "type": "normal"
  },
  {
    "name": "acid",
    "type": "poison"
  },
  {
    "name": "ember",
    "type": "fire"
  },
  {
    "name": "flamethrower",
    "type": "fire"
  },
  {
    "name": "mist",
    "type": "ice"
  },
  {
    "name": "water-gun",
    "type": "water"
  },
  {
    "name": "hydro-pump",
    "type": "water"
  },
  {
    "name": "surf",
    "type": "water"
  },
  {
    "name": "ice-beam",
    "type": "ice"
  },
  {
    "name": "blizzard",
    "type": "ice"
  },
  {
    "name": "psybeam",
    "type": "psychic"
  },
  {
    "name": "bubble-beam",
    "type": "water"
  },
  {
    "name": "aurora-beam",
    "type": "ice"
  },
  {
    "name": "hyper-beam",
    "type": "normal"
  },
  {
    "name": "peck",
    "type": "flying"
  },
  {
    "name": "drill-peck",
    "type": "flying"
  },
  {
    "name": "submission",
    "type": "fighting"
  },
  {
    "name": "low-kick",
    "type": "fighting"
  },
  {
    "name": "counter",
    "type": "fighting"
  },
  {
    "name": "seismic-toss",
    "type": "fighting"
  },
  {
    "name": "strength",
    "type": "normal"
  },
  {
    "name": "absorb",
    "type": "grass"
  },
  {
    "name": "mega-drain",
    "type": "grass"
  },
  {
    "name": "leech-seed",
    "type": "grass"
  },
  {
    "name": "growth",
    "type": "normal"
  },
  {
    "name": "razor-leaf",
    "type": "grass"
  },
  {
    "name": "solar-beam",
    "type": "grass"
  },
  {
    "name": "poison-powder",
    "type": "poison"
  },
  {
    "name": "stun-spore",
    "type": "grass"
  },
  {
    "name": "sleep-powder",
    "type": "grass"
  },
  {
    "name": "petal-dance",
    "type": "grass"
  },
  {
    "name": "string-shot",
    "type": "bug"
  },
  {
    "name": "dragon-rage",
    "type": "dragon"
  },
  {
    "name": "fire-spin",
    "type": "fire"
  },
  {
    "name": "thunder-shock",
    "type": "electric"
  },
  {
    "name": "thunderbolt",
    "type": "electric"
  },
  {
    "name": "thunder-wave",
    "type": "electric"
  },
  {
    "name": "thunder",
    "type": "electric"
  },
  {
    "name": "rock-throw",
    "type": "rock"
  },
  {
    "name": "earthquake",
    "type": "ground"
  },
  {
    "name": "fissure",
    "type": "ground"
  },
  {
    "name": "dig",
    "type": "ground"
  },
  {
    "name": "toxic",
    "type": "poison"
  },
  {
    "name": "confusion",
    "type": "psychic"
  },
  {
    "name": "psychic",
    "type": "psychic"
  },
  {
    "name": "hypnosis",
    "type": "psychic"
  },
  {
    "name": "meditate",
    "type": "psychic"
  },
  {
    "name": "agility",
    "type": "psychic"
  },
  {
    "name": "quick-attack",
    "type": "normal"
  },
  {
    "name": "rage",
    "type": "normal"
  },
  {
    "name": "teleport",
    "type": "psychic"
  },
  {
    "name": "night-shade",
    "type": "ghost"
  },
  {
    "name": "mimic",
    "type": "normal"
  },
  {
    "name": "screech",
    "type": "normal"
  },
  {
    "name": "double-team",
    "type": "normal"
  },
  {
    "name": "recover",
    "type": "normal"
  },
  {
    "name": "harden",
    "type": "normal"
  },
  {
    "name": "minimize",
    "type": "normal"
  },
  {
    "name": "smokescreen",
    "type": "normal"
  },
  {
    "name": "confuse-ray",
    "type": "ghost"
  },
  {
    "name": "withdraw",
    "type": "water"
  },
  {
    "name": "defense-curl",
    "type": "normal"
  },
  {
    "name": "barrier",
    "type": "psychic"
  },
  {
    "name": "light-screen",
    "type": "psychic"
  },
  {
    "name": "haze",
    "type": "ice"
  },
  {
    "name": "reflect",
    "type": "psychic"
  },
  {
    "name": "focus-energy",
    "type": "normal"
  },
  {
    "name": "bide",
    "type": "normal"
  },
  {
    "name": "metronome",
    "type": "normal"
  },
  {
    "name": "mirror-move",
    "type": "flying"
  },
  {
    "name": "self-destruct",
    "type": "normal"
  },
  {
    "name": "egg-bomb",
    "type": "normal"
  },
  {
    "name": "lick",
    "type": "ghost"
  },
  {
    "name": "smog",
    "type": "poison"
  },
  {
    "name": "sludge",
    "type": "poison"
  },
  {
    "name": "bone-club",
    "type": "ground"
  },
  {
    "name": "fire-blast",
    "type": "fire"
  },
  {
    "name": "waterfall",
    "type": "water"
  },
  {
    "name": "clamp",
    "type": "water"
  },
  {
    "name": "swift",
    "type": "normal"
  },
  {
    "name": "skull-bash",
    "type": "normal"
  },
  {
    "name": "spike-cannon",
    "type": "normal"
  },
  {
    "name": "constrict",
    "type": "normal"
  },
  {
    "name": "amnesia",
    "type": "psychic"
  },
  {
    "name": "kinesis",
    "type": "psychic"
  },
  {
    "name": "soft-boiled",
    "type": "normal"
  },
  {
    "name": "high-jump-kick",
    "type": "fighting"
  },
  {
    "name": "glare",
    "type": "normal"
  },
  {
    "name": "dream-eater",
    "type": "psychic"
  },
  {
    "name": "poison-gas",
    "type": "poison"
  },
  {
    "name": "barrage",
    "type": "normal"
  },
  {
    "name": "leech-life",
    "type": "bug"
  },
  {
    "name": "lovely-kiss",
    "type": "normal"
  },
  {
    "name": "sky-attack",
    "type": "flying"
  },
  {
    "name": "transform",
    "type": "normal"
  },
  {
    "name": "bubble",
    "type": "water"
  },
  {
    "name": "dizzy-punch",
    "type": "normal"
  },
  {
    "name": "spore",
    "type": "grass"
  },
  {
    "name": "flash",
    "type": "normal"
  },
  {
    "name": "psywave",
    "type": "psychic"
  },
  {
    "name": "splash",
    "type": "normal"
  },
  {
    "name": "acid-armor",
    "type": "poison"
  },
  {
    "name": "crabhammer",
    "type": "water"
  },
  {
    "name": "explosion",
    "type": "normal"
  },
  {
    "name": "fury-swipes",
    "type": "normal"
  },
  {
    "name": "bonemerang",
    "type": "ground"
  },
  {
    "name": "rest",
    "type": "psychic"
  },
  {
    "name": "rock-slide",
    "type": "rock"
  },
  {
    "name": "hyper-fang",
    "type": "normal"
  },
  {
    "name": "sharpen",
    "type": "normal"
  },
  {
    "name": "conversion",
    "type": "normal"
  },
  {
    "name": "tri-attack",
    "type": "normal"
  },
  {
    "name": "super-fang",
    "type": "normal"
  },
  {
    "name": "slash",
    "type": "normal"
  },
  {
    "name": "substitute",
    "type": "normal"
  },
  {
    "name": "struggle",
    "type": "normal"
  },
  {
    "name": "sketch",
    "type": "normal"
  },
  {
    "name": "triple-kick",
    "type": "fighting"
  },
  {
    "name": "thief",
    "type": "dark"
  },
  {
    "name": "spider-web",
    "type": "bug"
  },
  {
    "name": "mind-reader",
    "type": "normal"
  },
  {
    "name": "nightmare",
    "type": "ghost"
  },
  {
    "name": "flame-wheel",
    "type": "fire"
  },
  {
    "name": "snore",
    "type": "normal"
  },
  {
    "name": "curse",
    "type": "ghost"
  },
  {
    "name": "flail",
    "type": "normal"
  },
  {
    "name": "conversion-2",
    "type": "normal"
  },
  {
    "name": "aeroblast",
    "type": "flying"
  },
  {
    "name": "cotton-spore",
    "type": "grass"
  },
  {
    "name": "reversal",
    "type": "fighting"
  },
  {
    "name": "spite",
    "type": "ghost"
  },
  {
    "name": "powder-snow",
    "type": "ice"
  },
  {
    "name": "protect",
    "type": "normal"
  },
  {
    "name": "mach-punch",
    "type": "fighting"
  },
  {
    "name": "scary-face",
    "type": "normal"
  },
  {
    "name": "feint-attack",
    "type": "dark"
  },
  {
    "name": "sweet-kiss",
    "type": "fairy"
  },
  {
    "name": "belly-drum",
    "type": "normal"
  },
  {
    "name": "sludge-bomb",
    "type": "poison"
  },
  {
    "name": "mud-slap",
    "type": "ground"
  },
  {
    "name": "octazooka",
    "type": "water"
  },
  {
    "name": "spikes",
    "type": "ground"
  },
  {
    "name": "zap-cannon",
    "type": "electric"
  },
  {
    "name": "foresight",
    "type": "normal"
  },
  {
    "name": "destiny-bond",
    "type": "ghost"
  },
  {
    "name": "perish-song",
    "type": "normal"
  },
  {
    "name": "icy-wind",
    "type": "ice"
  },
  {
    "name": "detect",
    "type": "fighting"
  },
  {
    "name": "bone-rush",
    "type": "ground"
  },
  {
    "name": "lock-on",
    "type": "normal"
  },
  {
    "name": "outrage",
    "type": "dragon"
  },
  {
    "name": "sandstorm",
    "type": "rock"
  },
  {
    "name": "giga-drain",
    "type": "grass"
  },
  {
    "name": "endure",
    "type": "normal"
  },
  {
    "name": "charm",
    "type": "fairy"
  },
  {
    "name": "rollout",
    "type": "rock"
  },
  {
    "name": "false-swipe",
    "type": "normal"
  },
  {
    "name": "swagger",
    "type": "normal"
  },
  {
    "name": "milk-drink",
    "type": "normal"
  },
  {
    "name": "spark",
    "type": "electric"
  },
  {
    "name": "fury-cutter",
    "type": "bug"
  },
  {
    "name": "steel-wing",
    "type": "steel"
  },
  {
    "name": "mean-look",
    "type": "normal"
  },
  {
    "name": "attract",
    "type": "normal"
  },
  {
    "name": "sleep-talk",
    "type": "normal"
  },
  {
    "name": "heal-bell",
    "type": "normal"
  },
  {
    "name": "return",
    "type": "normal"
  },
  {
    "name": "present",
    "type": "normal"
  },
  {
    "name": "frustration",
    "type": "normal"
  },
  {
    "name": "safeguard",
    "type": "normal"
  },
  {
    "name": "pain-split",
    "type": "normal"
  },
  {
    "name": "sacred-fire",
    "type": "fire"
  },
  {
    "name": "magnitude",
    "type": "ground"
  },
  {
    "name": "dynamic-punch",
    "type": "fighting"
  },
  {
    "name": "megahorn",
    "type": "bug"
  },
  {
    "name": "dragon-breath",
    "type": "dragon"
  },
  {
    "name": "baton-pass",
    "type": "normal"
  },
  {
    "name": "encore",
    "type": "normal"
  },
  {
    "name": "pursuit",
    "type": "dark"
  },
  {
    "name": "rapid-spin",
    "type": "normal"
  },
  {
    "name": "sweet-scent",
    "type": "normal"
  },
  {
    "name": "iron-tail",
    "type": "steel"
  },
  {
    "name": "metal-claw",
    "type": "steel"
  },
  {
    "name": "vital-throw",
    "type": "fighting"
  },
  {
    "name": "morning-sun",
    "type": "normal"
  },
  {
    "name": "synthesis",
    "type": "grass"
  },
  {
    "name": "moonlight",
    "type": "fairy"
  },
  {
    "name": "hidden-power",
    "type": "normal"
  },
  {
    "name": "cross-chop",
    "type": "fighting"
  },
  {
    "name": "twister",
    "type": "dragon"
  },
  {
    "name": "rain-dance",
    "type": "water"
  },
  {
    "name": "sunny-day",
    "type": "fire"
  },
  {
    "name": "crunch",
    "type": "dark"
  },
  {
    "name": "mirror-coat",
    "type": "psychic"
  },
  {
    "name": "psych-up",
    "type": "normal"
  },
  {
    "name": "extreme-speed",
    "type": "normal"
  },
  {
    "name": "ancient-power",
    "type": "rock"
  },
  {
    "name": "shadow-ball",
    "type": "ghost"
  },
  {
    "name": "future-sight",
    "type": "psychic"
  },
  {
    "name": "rock-smash",
    "type": "fighting"
  },
  {
    "name": "whirlpool",
    "type": "water"
  },
  {
    "name": "beat-up",
    "type": "dark"
  },
  {
    "name": "fake-out",
    "type": "normal"
  },
  {
    "name": "uproar",
    "type": "normal"
  },
  {
    "name": "stockpile",
    "type": "normal"
  },
  {
    "name": "spit-up",
    "type": "normal"
  },
  {
    "name": "swallow",
    "type": "normal"
  },
  {
    "name": "heat-wave",
    "type": "fire"
  },
  {
    "name": "hail",
    "type": "ice"
  },
  {
    "name": "torment",
    "type": "dark"
  },
  {
    "name": "flatter",
    "type": "dark"
  },
  {
    "name": "will-o-wisp",
    "type": "fire"
  },
  {
    "name": "memento",
    "type": "dark"
  },
  {
    "name": "facade",
    "type": "normal"
  },
  {
    "name": "focus-punch",
    "type": "fighting"
  },
  {
    "name": "smelling-salts",
    "type": "normal"
  },
  {
    "name": "follow-me",
    "type": "normal"
  },
  {
    "name": "nature-power",
    "type": "normal"
  },
  {
    "name": "charge",
    "type": "electric"
  },
  {
    "name": "taunt",
    "type": "dark"
  },
  {
    "name": "helping-hand",
    "type": "normal"
  },
  {
    "name": "trick",
    "type": "psychic"
  },
  {
    "name": "role-play",
    "type": "psychic"
  },
  {
    "name": "wish",
    "type": "normal"
  },
  {
    "name": "assist",
    "type": "normal"
  },
  {
    "name": "ingrain",
    "type": "grass"
  },
  {
    "name": "superpower",
    "type": "fighting"
  },
  {
    "name": "magic-coat",
    "type": "psychic"
  },
  {
    "name": "recycle",
    "type": "normal"
  },
  {
    "name": "revenge",
    "type": "fighting"
  },
  {
    "name": "brick-break",
    "type": "fighting"
  },
  {
    "name": "yawn",
    "type": "normal"
  },
  {
    "name": "knock-off",
    "type": "dark"
  },
  {
    "name": "endeavor",
    "type": "normal"
  },
  {
    "name": "eruption",
    "type": "fire"
  },
  {
    "name": "skill-swap",
    "type": "psychic"
  },
  {
    "name": "imprison",
    "type": "psychic"
  },
  {
    "name": "refresh",
    "type": "normal"
  },
  {
    "name": "grudge",
    "type": "ghost"
  },
  {
    "name": "snatch",
    "type": "dark"
  },
  {
    "name": "secret-power",
    "type": "normal"
  },
  {
    "name": "dive",
    "type": "water"
  },
  {
    "name": "arm-thrust",
    "type": "fighting"
  },
  {
    "name": "camouflage",
    "type": "normal"
  },
  {
    "name": "tail-glow",
    "type": "bug"
  },
  {
    "name": "luster-purge",
    "type": "psychic"
  },
  {
    "name": "mist-ball",
    "type": "psychic"
  },
  {
    "name": "feather-dance",
    "type": "flying"
  },
  {
    "name": "teeter-dance",
    "type": "normal"
  },
  {
    "name": "blaze-kick",
    "type": "fire"
  },
  {
    "name": "mud-sport",
    "type": "ground"
  },
  {
    "name": "ice-ball",
    "type": "ice"
  },
  {
    "name": "needle-arm",
    "type": "grass"
  },
  {
    "name": "slack-off",
    "type": "normal"
  },
  {
    "name": "hyper-voice",
    "type": "normal"
  },
  {
    "name": "poison-fang",
    "type": "poison"
  },
  {
    "name": "crush-claw",
    "type": "normal"
  },
  {
    "name": "blast-burn",
    "type": "fire"
  },
  {
    "name": "hydro-cannon",
    "type": "water"
  },
  {
    "name": "meteor-mash",
    "type": "steel"
  },
  {
    "name": "astonish",
    "type": "ghost"
  },
  {
    "name": "weather-ball",
    "type": "normal"
  },
  {
    "name": "aromatherapy",
    "type": "grass"
  },
  {
    "name": "fake-tears",
    "type": "dark"
  },
  {
    "name": "air-cutter",
    "type": "flying"
  },
  {
    "name": "overheat",
    "type": "fire"
  },
  {
    "name": "odor-sleuth",
    "type": "normal"
  },
  {
    "name": "rock-tomb",
    "type": "rock"
  },
  {
    "name": "silver-wind",
    "type": "bug"
  },
  {
    "name": "metal-sound",
    "type": "steel"
  },
  {
    "name": "grass-whistle",
    "type": "grass"
  },
  {
    "name": "tickle",
    "type": "normal"
  },
  {
    "name": "cosmic-power",
    "type": "psychic"
  },
  {
    "name": "water-spout",
    "type": "water"
  },
  {
    "name": "signal-beam",
    "type": "bug"
  },
  {
    "name": "shadow-punch",
    "type": "ghost"
  },
  {
    "name": "extrasensory",
    "type": "psychic"
  },
  {
    "name": "sky-uppercut",
    "type": "fighting"
  },
  {
    "name": "sand-tomb",
    "type": "ground"
  },
  {
    "name": "sheer-cold",
    "type": "ice"
  },
  {
    "name": "muddy-water",
    "type": "water"
  },
  {
    "name": "bullet-seed",
    "type": "grass"
  },
  {
    "name": "aerial-ace",
    "type": "flying"
  },
  {
    "name": "icicle-spear",
    "type": "ice"
  },
  {
    "name": "iron-defense",
    "type": "steel"
  },
  {
    "name": "block",
    "type": "normal"
  },
  {
    "name": "howl",
    "type": "normal"
  },
  {
    "name": "dragon-claw",
    "type": "dragon"
  },
  {
    "name": "frenzy-plant",
    "type": "grass"
  },
  {
    "name": "bulk-up",
    "type": "fighting"
  },
  {
    "name": "bounce",
    "type": "flying"
  },
  {
    "name": "mud-shot",
    "type": "ground"
  },
  {
    "name": "poison-tail",
    "type": "poison"
  },
  {
    "name": "covet",
    "type": "normal"
  },
  {
    "name": "volt-tackle",
    "type": "electric"
  },
  {
    "name": "magical-leaf",
    "type": "grass"
  },
  {
    "name": "water-sport",
    "type": "water"
  },
  {
    "name": "calm-mind",
    "type": "psychic"
  },
  {
    "name": "leaf-blade",
    "type": "grass"
  },
  {
    "name": "dragon-dance",
    "type": "dragon"
  },
  {
    "name": "rock-blast",
    "type": "rock"
  },
  {
    "name": "shock-wave",
    "type": "electric"
  },
  {
    "name": "water-pulse",
    "type": "water"
  },
  {
    "name": "doom-desire",
    "type": "steel"
  },
  {
    "name": "psycho-boost",
    "type": "psychic"
  },
  {
    "name": "roost",
    "type": "flying"
  },
  {
    "name": "gravity",
    "type": "psychic"
  },
  {
    "name": "miracle-eye",
    "type": "psychic"
  },
  {
    "name": "wake-up-slap",
    "type": "fighting"
  },
  {
    "name": "hammer-arm",
    "type": "fighting"
  },
  {
    "name": "gyro-ball",
    "type": "steel"
  },
  {
    "name": "healing-wish",
    "type": "psychic"
  },
  {
    "name": "brine",
    "type": "water"
  },
  {
    "name": "natural-gift",
    "type": "normal"
  },
  {
    "name": "feint",
    "type": "normal"
  },
  {
    "name": "pluck",
    "type": "flying"
  },
  {
    "name": "tailwind",
    "type": "flying"
  },
  {
    "name": "acupressure",
    "type": "normal"
  },
  {
    "name": "metal-burst",
    "type": "steel"
  },
  {
    "name": "u-turn",
    "type": "bug"
  },
  {
    "name": "close-combat",
    "type": "fighting"
  },
  {
    "name": "payback",
    "type": "dark"
  },
  {
    "name": "assurance",
    "type": "dark"
  },
  {
    "name": "embargo",
    "type": "dark"
  },
  {
    "name": "fling",
    "type": "dark"
  },
  {
    "name": "psycho-shift",
    "type": "psychic"
  },
  {
    "name": "trump-card",
    "type": "normal"
  },
  {
    "name": "heal-block",
    "type": "psychic"
  },
  {
    "name": "wring-out",
    "type": "normal"
  },
  {
    "name": "power-trick",
    "type": "psychic"
  },
  {
    "name": "gastro-acid",
    "type": "poison"
  },
  {
    "name": "lucky-chant",
    "type": "normal"
  },
  {
    "name": "me-first",
    "type": "normal"
  },
  {
    "name": "copycat",
    "type": "normal"
  },
  {
    "name": "power-swap",
    "type": "psychic"
  },
  {
    "name": "guard-swap",
    "type": "psychic"
  },
  {
    "name": "punishment",
    "type": "dark"
  },
  {
    "name": "last-resort",
    "type": "normal"
  },
  {
    "name": "worry-seed",
    "type": "grass"
  },
  {
    "name": "sucker-punch",
    "type": "dark"
  },
  {
    "name": "toxic-spikes",
    "type": "poison"
  },
  {
    "name": "heart-swap",
    "type": "psychic"
  },
  {
    "name": "aqua-ring",
    "type": "water"
  },
  {
    "name": "magnet-rise",
    "type": "electric"
  },
  {
    "name": "flare-blitz",
    "type": "fire"
  },
  {
    "name": "force-palm",
    "type": "fighting"
  },
  {
    "name": "aura-sphere",
    "type": "fighting"
  },
  {
    "name": "rock-polish",
    "type": "rock"
  },
  {
    "name": "poison-jab",
    "type": "poison"
  },
  {
    "name": "dark-pulse",
    "type": "dark"
  },
  {
    "name": "night-slash",
    "type": "dark"
  },
  {
    "name": "aqua-tail",
    "type": "water"
  },
  {
    "name": "seed-bomb",
    "type": "grass"
  },
  {
    "name": "air-slash",
    "type": "flying"
  },
  {
    "name": "x-scissor",
    "type": "bug"
  },
  {
    "name": "bug-buzz",
    "type": "bug"
  },
  {
    "name": "dragon-pulse",
    "type": "dragon"
  },
  {
    "name": "dragon-rush",
    "type": "dragon"
  },
  {
    "name": "power-gem",
    "type": "rock"
  },
  {
    "name": "drain-punch",
    "type": "fighting"
  },
  {
    "name": "vacuum-wave",
    "type": "fighting"
  },
  {
    "name": "focus-blast",
    "type": "fighting"
  },
  {
    "name": "energy-ball",
    "type": "grass"
  },
  {
    "name": "brave-bird",
    "type": "flying"
  },
  {
    "name": "earth-power",
    "type": "ground"
  },
  {
    "name": "switcheroo",
    "type": "dark"
  },
  {
    "name": "giga-impact",
    "type": "normal"
  },
  {
    "name": "nasty-plot",
    "type": "dark"
  },
  {
    "name": "bullet-punch",
    "type": "steel"
  },
  {
    "name": "avalanche",
    "type": "ice"
  },
  {
    "name": "ice-shard",
    "type": "ice"
  },
  {
    "name": "shadow-claw",
    "type": "ghost"
  },
  {
    "name": "thunder-fang",
    "type": "electric"
  },
  {
    "name": "ice-fang",
    "type": "ice"
  },
  {
    "name": "fire-fang",
    "type": "fire"
  },
  {
    "name": "shadow-sneak",
    "type": "ghost"
  },
  {
    "name": "mud-bomb",
    "type": "ground"
  },
  {
    "name": "psycho-cut",
    "type": "psychic"
  },
  {
    "name": "zen-headbutt",
    "type": "psychic"
  },
  {
    "name": "mirror-shot",
    "type": "steel"
  },
  {
    "name": "flash-cannon",
    "type": "steel"
  },
  {
    "name": "rock-climb",
    "type": "normal"
  },
  {
    "name": "defog",
    "type": "flying"
  },
  {
    "name": "trick-room",
    "type": "psychic"
  },
  {
    "name": "draco-meteor",
    "type": "dragon"
  },
  {
    "name": "discharge",
    "type": "electric"
  },
  {
    "name": "lava-plume",
    "type": "fire"
  },
  {
    "name": "leaf-storm",
    "type": "grass"
  },
  {
    "name": "power-whip",
    "type": "grass"
  },
  {
    "name": "rock-wrecker",
    "type": "rock"
  },
  {
    "name": "cross-poison",
    "type": "poison"
  },
  {
    "name": "gunk-shot",
    "type": "poison"
  },
  {
    "name": "iron-head",
    "type": "steel"
  },
  {
    "name": "magnet-bomb",
    "type": "steel"
  },
  {
    "name": "stone-edge",
    "type": "rock"
  },
  {
    "name": "captivate",
    "type": "normal"
  },
  {
    "name": "stealth-rock",
    "type": "rock"
  },
  {
    "name": "grass-knot",
    "type": "grass"
  },
  {
    "name": "chatter",
    "type": "flying"
  },
  {
    "name": "judgment",
    "type": "normal"
  },
  {
    "name": "bug-bite",
    "type": "bug"
  },
  {
    "name": "charge-beam",
    "type": "electric"
  },
  {
    "name": "wood-hammer",
    "type": "grass"
  },
  {
    "name": "aqua-jet",
    "type": "water"
  },
  {
    "name": "attack-order",
    "type": "bug"
  },
  {
    "name": "defend-order",
    "type": "bug"
  },
  {
    "name": "heal-order",
    "type": "bug"
  },
  {
    "name": "head-smash",
    "type": "rock"
  },
  {
    "name": "double-hit",
    "type": "normal"
  },
  {
    "name": "roar-of-time",
    "type": "dragon"
  },
  {
    "name": "spacial-rend",
    "type": "dragon"
  },
  {
    "name": "lunar-dance",
    "type": "psychic"
  },
  {
    "name": "crush-grip",
    "type": "normal"
  },
  {
    "name": "magma-storm",
    "type": "fire"
  },
  {
    "name": "dark-void",
    "type": "dark"
  },
  {
    "name": "seed-flare",
    "type": "grass"
  },
  {
    "name": "ominous-wind",
    "type": "ghost"
  },
  {
    "name": "shadow-force",
    "type": "ghost"
  },
  {
    "name": "hone-claws",
    "type": "dark"
  },
  {
    "name": "wide-guard",
    "type": "rock"
  },
  {
    "name": "guard-split",
    "type": "psychic"
  },
  {
    "name": "power-split",
    "type": "psychic"
  },
  {
    "name": "wonder-room",
    "type": "psychic"
  },
  {
    "name": "psyshock",
    "type": "psychic"
  },
  {
    "name": "venoshock",
    "type": "poison"
  },
  {
    "name": "autotomize",
    "type": "steel"
  },
  {
    "name": "rage-powder",
    "type": "bug"
  },
  {
    "name": "telekinesis",
    "type": "psychic"
  },
  {
    "name": "magic-room",
    "type": "psychic"
  },
  {
    "name": "smack-down",
    "type": "rock"
  },
  {
    "name": "storm-throw",
    "type": "fighting"
  },
  {
    "name": "flame-burst",
    "type": "fire"
  },
  {
    "name": "sludge-wave",
    "type": "poison"
  },
  {
    "name": "quiver-dance",
    "type": "bug"
  },
  {
    "name": "heavy-slam",
    "type": "steel"
  },
  {
    "name": "synchronoise",
    "type": "psychic"
  },
  {
    "name": "electro-ball",
    "type": "electric"
  },
  {
    "name": "soak",
    "type": "water"
  },
  {
    "name": "flame-charge",
    "type": "fire"
  },
  {
    "name": "coil",
    "type": "poison"
  },
  {
    "name": "low-sweep",
    "type": "fighting"
  },
  {
    "name": "acid-spray",
    "type": "poison"
  },
  {
    "name": "foul-play",
    "type": "dark"
  },
  {
    "name": "simple-beam",
    "type": "normal"
  },
  {
    "name": "entrainment",
    "type": "normal"
  },
  {
    "name": "after-you",
    "type": "normal"
  },
  {
    "name": "round",
    "type": "normal"
  },
  {
    "name": "echoed-voice",
    "type": "normal"
  },
  {
    "name": "chip-away",
    "type": "normal"
  },
  {
    "name": "clear-smog",
    "type": "poison"
  },
  {
    "name": "stored-power",
    "type": "psychic"
  },
  {
    "name": "quick-guard",
    "type": "fighting"
  },
  {
    "name": "ally-switch",
    "type": "psychic"
  },
  {
    "name": "scald",
    "type": "water"
  },
  {
    "name": "shell-smash",
    "type": "normal"
  },
  {
    "name": "heal-pulse",
    "type": "psychic"
  },
  {
    "name": "hex",
    "type": "ghost"
  },
  {
    "name": "sky-drop",
    "type": "flying"
  },
  {
    "name": "shift-gear",
    "type": "steel"
  },
  {
    "name": "circle-throw",
    "type": "fighting"
  },
  {
    "name": "incinerate",
    "type": "fire"
  },
  {
    "name": "quash",
    "type": "dark"
  },
  {
    "name": "acrobatics",
    "type": "flying"
  },
  {
    "name": "reflect-type",
    "type": "normal"
  },
  {
    "name": "retaliate",
    "type": "normal"
  },
  {
    "name": "final-gambit",
    "type": "fighting"
  },
  {
    "name": "bestow",
    "type": "normal"
  },
  {
    "name": "inferno",
    "type": "fire"
  },
  {
    "name": "water-pledge",
    "type": "water"
  },
  {
    "name": "fire-pledge",
    "type": "fire"
  },
  {
    "name": "grass-pledge",
    "type": "grass"
  },
  {
    "name": "volt-switch",
    "type": "electric"
  },
  {
    "name": "struggle-bug",
    "type": "bug"
  },
  {
    "name": "bulldoze",
    "type": "ground"
  },
  {
    "name": "frost-breath",
    "type": "ice"
  },
  {
    "name": "dragon-tail",
    "type": "dragon"
  },
  {
    "name": "work-up",
    "type": "normal"
  },
  {
    "name": "electroweb",
    "type": "electric"
  },
  {
    "name": "wild-charge",
    "type": "electric"
  },
  {
    "name": "drill-run",
    "type": "ground"
  },
  {
    "name": "dual-chop",
    "type": "dragon"
  },
  {
    "name": "heart-stamp",
    "type": "psychic"
  },
  {
    "name": "horn-leech",
    "type": "grass"
  },
  {
    "name": "sacred-sword",
    "type": "fighting"
  },
  {
    "name": "razor-shell",
    "type": "water"
  },
  {
    "name": "heat-crash",
    "type": "fire"
  },
  {
    "name": "leaf-tornado",
    "type": "grass"
  },
  {
    "name": "steamroller",
    "type": "bug"
  },
  {
    "name": "cotton-guard",
    "type": "grass"
  },
  {
    "name": "night-daze",
    "type": "dark"
  },
  {
    "name": "psystrike",
    "type": "psychic"
  },
  {
    "name": "tail-slap",
    "type": "normal"
  },
  {
    "name": "hurricane",
    "type": "flying"
  },
  {
    "name": "head-charge",
    "type": "normal"
  },
  {
    "name": "gear-grind",
    "type": "steel"
  },
  {
    "name": "searing-shot",
    "type": "fire"
  },
  {
    "name": "techno-blast",
    "type": "normal"
  },
  {
    "name": "relic-song",
    "type": "normal"
  },
  {
    "name": "secret-sword",
    "type": "fighting"
  },
  {
    "name": "glaciate",
    "type": "ice"
  },
  {
    "name": "bolt-strike",
    "type": "electric"
  },
  {
    "name": "blue-flare",
    "type": "fire"
  },
  {
    "name": "fiery-dance",
    "type": "fire"
  },
  {
    "name": "freeze-shock",
    "type": "ice"
  },
  {
    "name": "ice-burn",
    "type": "ice"
  },
  {
    "name": "snarl",
    "type": "dark"
  },
  {
    "name": "icicle-crash",
    "type": "ice"
  },
  {
    "name": "v-create",
    "type": "fire"
  },
  {
    "name": "fusion-flare",
    "type": "fire"
  },
  {
    "name": "fusion-bolt",
    "type": "electric"
  },
  {
    "name": "flying-press",
    "type": "fighting"
  },
  {
    "name": "mat-block",
    "type": "fighting"
  },
  {
    "name": "belch",
    "type": "poison"
  },
  {
    "name": "rototiller",
    "type": "ground"
  },
  {
    "name": "sticky-web",
    "type": "bug"
  },
  {
    "name": "fell-stinger",
    "type": "bug"
  },
  {
    "name": "phantom-force",
    "type": "ghost"
  },
  {
    "name": "trick-or-treat",
    "type": "ghost"
  },
  {
    "name": "noble-roar",
    "type": "normal"
  },
  {
    "name": "ion-deluge",
    "type": "electric"
  },
  {
    "name": "parabolic-charge",
    "type": "electric"
  },
  {
    "name": "forests-curse",
    "type": "grass"
  },
  {
    "name": "petal-blizzard",
    "type": "grass"
  },
  {
    "name": "freeze-dry",
    "type": "ice"
  },
  {
    "name": "disarming-voice",
    "type": "fairy"
  },
  {
    "name": "parting-shot",
    "type": "dark"
  },
  {
    "name": "topsy-turvy",
    "type": "dark"
  },
  {
    "name": "draining-kiss",
    "type": "fairy"
  },
  {
    "name": "crafty-shield",
    "type": "fairy"
  },
  {
    "name": "flower-shield",
    "type": "fairy"
  },
  {
    "name": "grassy-terrain",
    "type": "grass"
  },
  {
    "name": "misty-terrain",
    "type": "fairy"
  },
  {
    "name": "electrify",
    "type": "electric"
  },
  {
    "name": "play-rough",
    "type": "fairy"
  },
  {
    "name": "fairy-wind",
    "type": "fairy"
  },
  {
    "name": "moonblast",
    "type": "fairy"
  },
  {
    "name": "boomburst",
    "type": "normal"
  },
  {
    "name": "fairy-lock",
    "type": "fairy"
  },
  {
    "name": "kings-shield",
    "type": "steel"
  },
  {
    "name": "play-nice",
    "type": "normal"
  },
  {
    "name": "confide",
    "type": "normal"
  },
  {
    "name": "diamond-storm",
    "type": "rock"
  },
  {
    "name": "steam-eruption",
    "type": "water"
  },
  {
    "name": "hyperspace-hole",
    "type": "psychic"
  },
  {
    "name": "water-shuriken",
    "type": "water"
  },
  {
    "name": "mystical-fire",
    "type": "fire"
  },
  {
    "name": "spiky-shield",
    "type": "grass"
  },
  {
    "name": "aromatic-mist",
    "type": "fairy"
  },
  {
    "name": "eerie-impulse",
    "type": "electric"
  },
  {
    "name": "venom-drench",
    "type": "poison"
  },
  {
    "name": "powder",
    "type": "bug"
  },
  {
    "name": "geomancy",
    "type": "fairy"
  },
  {
    "name": "magnetic-flux",
    "type": "electric"
  },
  {
    "name": "happy-hour",
    "type": "normal"
  },
  {
    "name": "electric-terrain",
    "type": "electric"
  },
  {
    "name": "dazzling-gleam",
    "type": "fairy"
  },
  {
    "name": "celebrate",
    "type": "normal"
  },
  {
    "name": "hold-hands",
    "type": "normal"
  },
  {
    "name": "baby-doll-eyes",
    "type": "fairy"
  },
  {
    "name": "nuzzle",
    "type": "electric"
  },
  {
    "name": "hold-back",
    "type": "normal"
  },
  {
    "name": "infestation",
    "type": "bug"
  },
  {
    "name": "power-up-punch",
    "type": "fighting"
  },
  {
    "name": "oblivion-wing",
    "type": "flying"
  },
  {
    "name": "thousand-arrows",
    "type": "ground"
  },
  {
    "name": "thousand-waves",
    "type": "ground"
  },
  {
    "name": "lands-wrath",
    "type": "ground"
  },
  {
    "name": "light-of-ruin",
    "type": "fairy"
  },
  {
    "name": "origin-pulse",
    "type": "water"
  },
  {
    "name": "precipice-blades",
    "type": "ground"
  },
  {
    "name": "dragon-ascent",
    "type": "flying"
  },
  {
    "name": "hyperspace-fury",
    "type": "dark"
  },
  {
    "name": "breakneck-blitz--physical",
    "type": "normal"
  },
  {
    "name": "breakneck-blitz--special",
    "type": "normal"
  },
  {
    "name": "all-out-pummeling--physical",
    "type": "fighting"
  },
  {
    "name": "all-out-pummeling--special",
    "type": "fighting"
  },
  {
    "name": "supersonic-skystrike--physical",
    "type": "flying"
  },
  {
    "name": "supersonic-skystrike--special",
    "type": "flying"
  },
  {
    "name": "acid-downpour--physical",
    "type": "poison"
  },
  {
    "name": "acid-downpour--special",
    "type": "poison"
  },
  {
    "name": "tectonic-rage--physical",
    "type": "ground"
  },
  {
    "name": "tectonic-rage--special",
    "type": "ground"
  },
  {
    "name": "continental-crush--physical",
    "type": "rock"
  },
  {
    "name": "continental-crush--special",
    "type": "rock"
  },
  {
    "name": "savage-spin-out--physical",
    "type": "bug"
  },
  {
    "name": "savage-spin-out--special",
    "type": "bug"
  },
  {
    "name": "never-ending-nightmare--physical",
    "type": "ghost"
  },
  {
    "name": "never-ending-nightmare--special",
    "type": "ghost"
  },
  {
    "name": "corkscrew-crash--physical",
    "type": "steel"
  },
  {
    "name": "corkscrew-crash--special",
    "type": "steel"
  },
  {
    "name": "inferno-overdrive--physical",
    "type": "fire"
  },
  {
    "name": "inferno-overdrive--special",
    "type": "fire"
  },
  {
    "name": "hydro-vortex--physical",
    "type": "water"
  },
  {
    "name": "hydro-vortex--special",
    "type": "water"
  },
  {
    "name": "bloom-doom--physical",
    "type": "grass"
  },
  {
    "name": "bloom-doom--special",
    "type": "grass"
  },
  {
    "name": "gigavolt-havoc--physical",
    "type": "electric"
  },
  {
    "name": "gigavolt-havoc--special",
    "type": "electric"
  },
  {
    "name": "shattered-psyche--physical",
    "type": "psychic"
  },
  {
    "name": "shattered-psyche--special",
    "type": "psychic"
  },
  {
    "name": "subzero-slammer--physical",
    "type": "ice"
  },
  {
    "name": "subzero-slammer--special",
    "type": "ice"
  },
  {
    "name": "devastating-drake--physical",
    "type": "dragon"
  },
  {
    "name": "devastating-drake--special",
    "type": "dragon"
  },
  {
    "name": "black-hole-eclipse--physical",
    "type": "dark"
  },
  {
    "name": "black-hole-eclipse--special",
    "type": "dark"
  },
  {
    "name": "twinkle-tackle--physical",
    "type": "fairy"
  },
  {
    "name": "twinkle-tackle--special",
    "type": "fairy"
  },
  {
    "name": "catastropika",
    "type": "electric"
  },
  {
    "name": "shore-up",
    "type": "ground"
  },
  {
    "name": "first-impression",
    "type": "bug"
  },
  {
    "name": "baneful-bunker",
    "type": "poison"
  },
  {
    "name": "spirit-shackle",
    "type": "ghost"
  },
  {
    "name": "darkest-lariat",
    "type": "dark"
  },
  {
    "name": "sparkling-aria",
    "type": "water"
  },
  {
    "name": "ice-hammer",
    "type": "ice"
  },
  {
    "name": "floral-healing",
    "type": "fairy"
  },
  {
    "name": "high-horsepower",
    "type": "ground"
  },
  {
    "name": "strength-sap",
    "type": "grass"
  },
  {
    "name": "solar-blade",
    "type": "grass"
  },
  {
    "name": "leafage",
    "type": "grass"
  },
  {
    "name": "spotlight",
    "type": "normal"
  },
  {
    "name": "toxic-thread",
    "type": "poison"
  },
  {
    "name": "laser-focus",
    "type": "normal"
  },
  {
    "name": "gear-up",
    "type": "steel"
  },
  {
    "name": "throat-chop",
    "type": "dark"
  },
  {
    "name": "pollen-puff",
    "type": "bug"
  },
  {
    "name": "anchor-shot",
    "type": "steel"
  },
  {
    "name": "psychic-terrain",
    "type": "psychic"
  },
  {
    "name": "lunge",
    "type": "bug"
  },
  {
    "name": "fire-lash",
    "type": "fire"
  },
  {
    "name": "power-trip",
    "type": "dark"
  },
  {
    "name": "burn-up",
    "type": "fire"
  },
  {
    "name": "speed-swap",
    "type": "psychic"
  },
  {
    "name": "smart-strike",
    "type": "steel"
  },
  {
    "name": "purify",
    "type": "poison"
  },
  {
    "name": "revelation-dance",
    "type": "normal"
  },
  {
    "name": "core-enforcer",
    "type": "dragon"
  },
  {
    "name": "trop-kick",
    "type": "grass"
  },
  {
    "name": "instruct",
    "type": "psychic"
  },
  {
    "name": "beak-blast",
    "type": "flying"
  },
  {
    "name": "clanging-scales",
    "type": "dragon"
  },
  {
    "name": "dragon-hammer",
    "type": "dragon"
  },
  {
    "name": "brutal-swing",
    "type": "dark"
  },
  {
    "name": "aurora-veil",
    "type": "ice"
  },
  {
    "name": "sinister-arrow-raid",
    "type": "ghost"
  },
  {
    "name": "malicious-moonsault",
    "type": "dark"
  },
  {
    "name": "oceanic-operetta",
    "type": "water"
  },
  {
    "name": "guardian-of-alola",
    "type": "fairy"
  },
  {
    "name": "soul-stealing-7-star-strike",
    "type": "ghost"
  },
  {
    "name": "stoked-sparksurfer",
    "type": "electric"
  },
  {
    "name": "pulverizing-pancake",
    "type": "normal"
  },
  {
    "name": "extreme-evoboost",
    "type": "normal"
  },
  {
    "name": "genesis-supernova",
    "type": "psychic"
  },
  {
    "name": "shell-trap",
    "type": "fire"
  },
  {
    "name": "fleur-cannon",
    "type": "fairy"
  },
  {
    "name": "psychic-fangs",
    "type": "psychic"
  },
  {
    "name": "stomping-tantrum",
    "type": "ground"
  },
  {
    "name": "shadow-bone",
    "type": "ghost"
  },
  {
    "name": "accelerock",
    "type": "rock"
  },
  {
    "name": "liquidation",
    "type": "water"
  },
  {
    "name": "prismatic-laser",
    "type": "psychic"
  },
  {
    "name": "spectral-thief",
    "type": "ghost"
  },
  {
    "name": "sunsteel-strike",
    "type": "steel"
  },
  {
    "name": "moongeist-beam",
    "type": "ghost"
  },
  {
    "name": "tearful-look",
    "type": "normal"
  },
  {
    "name": "zing-zap",
    "type": "electric"
  },
  {
    "name": "natures-madness",
    "type": "fairy"
  },
  {
    "name": "multi-attack",
    "type": "normal"
  },
  {
    "name": "10-000-000-volt-thunderbolt",
    "type": "electric"
  },
  {
    "name": "mind-blown",
    "type": "fire"
  },
  {
    "name": "plasma-fists",
    "type": "electric"
  },
  {
    "name": "photon-geyser",
    "type": "psychic"
  },
  {
    "name": "light-that-burns-the-sky",
    "type": "psychic"
  },
  {
    "name": "searing-sunraze-smash",
    "type": "steel"
  },
  {
    "name": "menacing-moonraze-maelstrom",
    "type": "ghost"
  },
  {
    "name": "lets-snuggle-forever",
    "type": "fairy"
  },
  {
    "name": "splintered-stormshards",
    "type": "rock"
  },
  {
    "name": "clangorous-soulblaze",
    "type": "dragon"
  },
  {
    "name": "zippy-zap",
    "type": "electric"
  },
  {
    "name": "splishy-splash",
    "type": "water"
  },
  {
    "name": "floaty-fall",
    "type": "flying"
  },
  {
    "name": "pika-papow",
    "type": "electric"
  },
  {
    "name": "bouncy-bubble",
    "type": "water"
  },
  {
    "name": "buzzy-buzz",
    "type": "electric"
  },
  {
    "name": "sizzly-slide",
    "type": "fire"
  },
  {
    "name": "glitzy-glow",
    "type": "psychic"
  },
  {
    "name": "baddy-bad",
    "type": "dark"
  },
  {
    "name": "sappy-seed",
    "type": "grass"
  },
  {
    "name": "freezy-frost",
    "type": "ice"
  },
  {
    "name": "sparkly-swirl",
    "type": "fairy"
  },
  {
    "name": "veevee-volley",
    "type": "normal"
  },
  {
    "name": "double-iron-bash",
    "type": "steel"
  },
  {
    "name": "max-guard",
    "type": "normal"
  },
  {
    "name": "dynamax-cannon",
    "type": "dragon"
  },
  {
    "name": "snipe-shot",
    "type": "water"
  },
  {
    "name": "jaw-lock",
    "type": "dark"
  },
  {
    "name": "stuff-cheeks",
    "type": "normal"
  },
  {
    "name": "no-retreat",
    "type": "fighting"
  },
  {
    "name": "tar-shot",
    "type": "rock"
  },
  {
    "name": "magic-powder",
    "type": "psychic"
  },
  {
    "name": "dragon-darts",
    "type": "dragon"
  },
  {
    "name": "teatime",
    "type": "normal"
  },
  {
    "name": "octolock",
    "type": "fighting"
  },
  {
    "name": "bolt-beak",
    "type": "electric"
  },
  {
    "name": "fishious-rend",
    "type": "water"
  },
  {
    "name": "court-change",
    "type": "normal"
  },
  {
    "name": "max-flare",
    "type": "fire"
  },
  {
    "name": "max-flutterby",
    "type": "bug"
  },
  {
    "name": "max-lightning",
    "type": "electric"
  },
  {
    "name": "max-strike",
    "type": "normal"
  },
  {
    "name": "max-knuckle",
    "type": "fighting"
  },
  {
    "name": "max-phantasm",
    "type": "ghost"
  },
  {
    "name": "max-hailstorm",
    "type": "ice"
  },
  {
    "name": "max-ooze",
    "type": "poison"
  },
  {
    "name": "max-geyser",
    "type": "water"
  },
  {
    "name": "max-airstream",
    "type": "flying"
  },
  {
    "name": "max-starfall",
    "type": "fairy"
  },
  {
    "name": "max-wyrmwind",
    "type": "dragon"
  },
  {
    "name": "max-mindstorm",
    "type": "psychic"
  },
  {
    "name": "max-rockfall",
    "type": "rock"
  },
  {
    "name": "max-quake",
    "type": "ground"
  },
  {
    "name": "max-darkness",
    "type": "dark"
  },
  {
    "name": "max-overgrowth",
    "type": "grass"
  },
  {
    "name": "max-steelspike",
    "type": "steel"
  },
  {
    "name": "clangorous-soul",
    "type": "dragon"
  },
  {
    "name": "body-press",
    "type": "fighting"
  },
  {
    "name": "decorate",
    "type": "fairy"
  },
  {
    "name": "drum-beating",
    "type": "grass"
  },
  {
    "name": "snap-trap",
    "type": "grass"
  },
  {
    "name": "pyro-ball",
    "type": "fire"
  },
  {
    "name": "behemoth-blade",
    "type": "steel"
  },
  {
    "name": "behemoth-bash",
    "type": "steel"
  },
  {
    "name": "aura-wheel",
    "type": "electric"
  },
  {
    "name": "breaking-swipe",
    "type": "dragon"
  },
  {
    "name": "overdrive",
    "type": "electric"
  },
  {
    "name": "apple-acid",
    "type": "grass"
  },
  {
    "name": "grav-apple",
    "type": "grass"
  },
  {
    "name": "spirit-break",
    "type": "fairy"
  },
  {
    "name": "strange-steam",
    "type": "fairy"
  },
  {
    "name": "life-dew",
    "type": "water"
  },
  {
    "name": "obstruct",
    "type": "dark"
  },
  {
    "name": "false-surrender",
    "type": "dark"
  },
  {
    "name": "meteor-assault",
    "type": "fighting"
  },
  {
    "name": "eternabeam",
    "type": "dragon"
  },
  {
    "name": "steel-beam",
    "type": "steel"
  },
  {
    "name": "shadow-rush",
    "type": "shadow"
  },
  {
    "name": "shadow-blast",
    "type": "shadow"
  },
  {
    "name": "shadow-blitz",
    "type": "shadow"
  },
  {
    "name": "shadow-bolt",
    "type": "shadow"
  },
  {
    "name": "shadow-break",
    "type": "shadow"
  },
  {
    "name": "shadow-chill",
    "type": "shadow"
  },
  {
    "name": "shadow-end",
    "type": "shadow"
  },
  {
    "name": "shadow-fire",
    "type": "shadow"
  },
  {
    "name": "shadow-rave",
    "type": "shadow"
  },
  {
    "name": "shadow-storm",
    "type": "shadow"
  },
  {
    "name": "shadow-wave",
    "type": "shadow"
  },
  {
    "name": "shadow-down",
    "type": "shadow"
  },
  {
    "name": "shadow-half",
    "type": "shadow"
  },
  {
    "name": "shadow-hold",
    "type": "shadow"
  },
  {
    "name": "shadow-mist",
    "type": "shadow"
  },
  {
    "name": "shadow-panic",
    "type": "shadow"
  },
  {
    "name": "shadow-shed",
    "type": "shadow"
  },
  {
    "name": "shadow-sky",
    "type": "shadow"
  }
]

export default pokemonMovesType;