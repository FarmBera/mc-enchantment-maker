const enchant_list = [
  // # mending
  {
    name: "mending",
    id: "mending",
    lvl: 1,
    origin: '{id:"mending",lvl:1}',
  },
  {
    name: "mendingX",
    id: "mending",
    lvl: 1000,
    origin: '{id:"mending",lvl:1000}',
  },
  // # unbreaking
  {
    name: "unbreaking",
    id: "unbreaking",
    lvl: 3,
    origin: '{id:"unbreaking",lvl:3}',
  },
  {
    name: "unbreakingX",
    id: "unbreaking",
    lvl: 1000,
    origin: '{id:"efficiency",lvl:1000}',
  },
  // # efficiency
  {
    name: "efficiency",
    id: "efficiency",
    lvl: 5,
    origin: '{id:"efficiency",lvl:5}',
  },
  {
    name: "efficiency10",
    id: "efficiency",
    lvl: 10,
    origin: '{id:"efficiency",lvl:10}',
  },
  {
    name: "efficiencyX",
    id: "efficiency",
    lvl: 1000,
    origin: '{id:"efficiency",lvl:1000}',
  },
  // # fortune
  {
    name: "fortune",
    id: "fortune",
    lvl: 3,
    origin: '{id:"fortune",lvl:3}',
  },
  {
    name: "fortune5",
    id: "fortune",
    lvl: 5,
    origin: '{id:"fortune",lvl:5}',
  },
  {
    name: "fortune10",
    id: "fortune",
    lvl: 10,
    origin: '{id:"fortune",lvl:10}',
  },
  {
    name: "fortuneX",
    id: "fortune",
    lvl: 1000,
    origin: '{id:"fortune",lvl:1000}',
  },
  // # silk_touch
  {
    name: "silk_touch",
    id: "silk_touch",
    lvl: 1,
    origin: '{id:"silk_touch",lvl:1}',
  },
  {
    name: "silk_touchX",
    id: "silk_touch",
    lvl: 1000,
    origin: '{id:"silk_touch",lvl:1000}',
  },
  // # sharnpess
  {
    name: "sharpness",
    id: "sharpness",
    lvl: 5,
    origin: '{id:"sharpness",lvl:5}',
  },
  {
    name: "sharpnessX",
    id: "sharpness",
    lvl: 1000,
    origin: '{id:"sharpness",lvl:1000}',
  },
  // # {id:"fire_aspect",lvl:2}
  {
    name: "fire_aspect",
    id: "fire_aspect",
    lvl: 2,
    origin: '{id:"fire_aspect",lvl:2}',
  },
  {
    name: "fire_aspect10",
    id: "fire_aspect",
    lvl: 10,
    origin: '{id:"fire_aspect",lvl:10}',
  },
  {
    name: "fire_aspectX",
    id: "fire_aspect",
    lvl: 1000,
    origin: '{id:"fire_aspect",lvl:1000}',
  },
  // # knockback
  {
    name: "knockback",
    id: "knockback",
    lvl: 2,
    origin: '{id:"knockback",lvl:2}',
  },
  {
    name: "knockback5",
    id: "knockback",
    lvl: 5,
    origin: '{id:"knockback",lvl:5}',
  },
  {
    name: "knockback10",
    id: "knockback",
    lvl: 10,
    origin: '{id:"knockback",lvl:10}',
  },
  {
    name: "knockback20",
    id: "knockback",
    lvl: 20,
    origin: '{id:"knockback",lvl:20}',
  },
  {
    name: "knockback30",
    id: "knockback",
    lvl: 30,
    origin: '{id:"knockback",lvl:30}',
  },
  {
    name: "knockback50",
    id: "knockback",
    lvl: 50,
    origin: '{id:"knockback",lvl:50}',
  },
  {
    name: "knockback100",
    id: "knockback",
    lvl: 100,
    origin: '{id:"knockback",lvl:100}',
  },
  {
    name: "knockbackX",
    id: "knockback",
    lvl: 1000,
    origin: '{id:"knockback",lvl:1000}',
  },
  // # looting
  {
    name: "looting",
    id: "looting",
    lvl: 3,
    origin: '{id:"looting",lvl:3}',
  },
  {
    name: "looting5",
    id: "looting",
    lvl: 5,
    origin: '{id:"looting",lvl:5}',
  },
  {
    name: "looting10",
    id: "looting",
    lvl: 10,
    origin: '{id:"looting",lvl:10}',
  },
  {
    name: "looting30",
    id: "looting",
    lvl: 30,
    origin: '{id:"looting",lvl:30}',
  },
  {
    name: "looting50",
    id: "looting",
    lvl: 50,
    origin: '{id:"looting",lvl:50}',
  },
  {
    name: "looting100",
    id: "looting",
    lvl: 100,
    origin: '{id:"looting",lvl:100}',
  },
  {
    name: "lootingX",
    id: "looting",
    lvl: 1000,
    origin: '{id:"looting",lvl:1000}',
  },
  // # ____________
  // # ___ Bow ____
  // # ____________
  {
    name: "power",
    id: "power",
    lvl: 5,
    origin: '{id:"power",lvl:5}',
  },
  {
    name: "powerX",
    id: "power",
    lvl: 1000,
    origin: '{id:"power",lvl:1000}',
  },
  {
    name: "punch",
    id: "punch",
    lvl: 2,
    origin: '{id:"punch",lvl:2}',
  },
  {
    name: "punchX",
    id: "punch",
    lvl: 1000,
    origin: '{id:"punch",lvl:1000}',
  },
  {
    name: "flame",
    id: "flame",
    lvl: 1,
    origin: '{id:"flame",lvl:1}',
  },
  {
    name: "flameX",
    id: "flame",
    lvl: 1000,
    origin: '{id:"flame",lvl:1000}',
  },
  {
    name: "infinity",
    id: "infinity",
    lvl: 1,
    origin: '{id:"infinity",lvl:1}',
  },
  {
    name: "infinityX",
    id: "infinity",
    lvl: 1000,
    origin: '{id:"infinity",lvl:1000}',
  },
  // # ____________
  // # __ Armors __
  // # ____________
  // # protection: 1234
  {
    name: "protection",
    id: "protection",
    lvl: 4,
    origin: '{id:"protection",lvl:4}',
  },
  {
    name: "protection5",
    id: "protection",
    lvl: 5,
    origin: '{id:"protection",lvl:5}',
  },
  {
    name: "protectio10",
    id: "protection",
    lvl: 10,
    origin: '{id:"protection",lvl:10}',
  },
  {
    name: "protectioX",
    id: "protection",
    lvl: 1000,
    origin: '{id:"protection",lvl:1000}',
  },
  // # thorns: 1234
  {
    name: "thorns",
    id: "thorns",
    lvl: 3,
    origin: '{id:"thorns",lvl:3}',
  },
  {
    name: "thorns5",
    id: "thorns",
    lvl: 5,
    origin: '{id:"thorns",lvl:5}',
  },
  {
    name: "thorns10",
    id: "thorns",
    lvl: 10,
    origin: '{id:"thorns",lvl:10}',
  },
  {
    name: "thornsX",
    id: "thorns",
    lvl: 1000,
    origin: '{id:"thorns",lvl:1000}',
  },
  // # respiration: 1
  {
    name: "respiration",
    id: "respiration",
    lvl: 4,
    origin: '{id:"respiration",lvl:4}',
  },
  {
    name: "respirationX",
    id: "respiration",
    lvl: 1000,
    origin: '{id:"respiration",lvl:1000}',
  },
  // # aqua_affinity: 1
  {
    name: "aqua_affinity",
    id: "aqua_affinity",
    lvl: 1,
    origin: '{id:"aqua_affinity",lvl:1}',
  },
  {
    name: "aqua_affinityX",
    id: "aqua_affinity",
    lvl: 1000,
    origin: '{id:"aqua_affinity",lvl:1000}',
  },
  // # feather_falling: 4
  {
    name: "feather_falling",
    id: "feather_falling",
    lvl: 4,
    origin: '{id:"feather_falling",lvl:4}',
  },
  {
    name: "feather_fallingX",
    id: "feather_falling",
    lvl: 1000,
    origin: '{id:"feather_falling",lvl:1000}',
  },
  // # frost_walker: 4
  {
    name: "frost_walker1",
    id: "frost_walker",
    lvl: 1,
    origin: '{id:"frost_walker",lvl:1}',
  },
  {
    name: "frost_walker2",
    id: "frost_walker",
    lvl: 2,
    origin: '{id:"frost_walker",lvl:2}',
  },
  {
    name: "frost_walker5",
    id: "frost_walker",
    lvl: 5,
    origin: '{id:"frost_walker",lvl:5}',
  },
  // # soul_speed: 4
  {
    name: "soul_speed",
    id: "soul_speed",
    lvl: 3,
    origin: '{id:"soul_speed",lvl:3}',
  },
  {
    name: "soul_speed5",
    id: "soul_speed",
    lvl: 5,
    origin: '{id:"soul_speed",lvl:5}',
  },
  {
    name: "soul_speed10",
    id: "soul_speed",
    lvl: 10,
    origin: '{id:"soul_speed",lvl:10}',
  },
];

// export default enchant_list;
