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
    id: "NULL",
    lvl: 0,
    origin: '{id:"efficiency",lvl:5}',
  },
  {
    name: "unbreakingX",
    id: "NULL",
    lvl: 0,
    origin: '{id:"efficiency",lvl:1000}',
  },
  // # efficiency
  {
    name: "efficiency",
    id: "NULL",
    lvl: 0,
    origin: '{id:"efficiency",lvl:5}',
  },
  {
    name: "efficiency10",
    id: "NULL",
    lvl: 0,
    origin: '{id:"efficiency",lvl:10}',
  },
  {
    name: "efficiencyX",
    id: "NULL",
    lvl: 0,
    origin: '{id:"efficiency",lvl:1000}',
  },
  // # fortune
  {
    name: "fortune",
    id: "NULL",
    lvl: 0,
    origin: '{id:"fortune",lvl:3}',
  },
  {
    name: "fortune5",
    id: "NULL",
    lvl: 0,
    origin: '{id:"fortune",lvl:5}',
  },
  {
    name: "fortune10",
    id: "NULL",
    lvl: 0,
    origin: '{id:"fortune",lvl:10}',
  },
  {
    name: "fortuneX",
    id: "NULL",
    lvl: 0,
    origin: '{id:"fortune",lvl:1000}',
  },
  // # silk_touch
  {
    name: "silk_touch",
    id: "NULL",
    lvl: 0,
    origin: '{id:"silk_touch",lvl:1}',
  },
  {
    name: "silk_touchX",
    id: "NULL",
    lvl: 0,
    origin: '{id:"silk_touch",lvl:1000}',
  },
  // # sharnpess
  {
    name: "sharpness",
    id: "NULL",
    lvl: 0,
    origin: '{id:"sharpness",lvl:5}',
  },
  {
    name: "sharpnessX",
    id: "NULL",
    lvl: 0,
    origin: '{id:"sharpness",lvl:1000}',
  },
  // # {id:"fire_aspect",lvl:2}
  {
    name: "fire_aspect",
    id: "NULL",
    lvl: 0,
    origin: '{id:"fire_aspect",lvl:2}',
  },
  {
    name: "fire_aspect10",
    id: "NULL",
    lvl: 0,
    origin: '{id:"fire_aspect",lvl:10}',
  },
  {
    name: "fire_aspectX",
    id: "NULL",
    lvl: 0,
    origin: '{id:"fire_aspect",lvl:1000}',
  },
  // # knockback
  {
    name: "knockback",
    id: "NULL",
    lvl: 0,
    origin: '{id:"knockback",lvl:2}',
  },
  {
    name: "knockback5",
    id: "NULL",
    lvl: 0,
    origin: '{id:"knockback",lvl:5}',
  },
  {
    name: "knockback10",
    id: "NULL",
    lvl: 0,
    origin: '{id:"knockback",lvl:10}',
  },
  {
    name: "knockback20",
    id: "NULL",
    lvl: 0,
    origin: '{id:"knockback",lvl:20}',
  },
  {
    name: "knockback30",
    id: "NULL",
    lvl: 0,
    origin: '{id:"knockback",lvl:30}',
  },
  {
    name: "knockback100",
    id: "NULL",
    lvl: 0,
    origin: '{id:"knockback",lvl:100}',
  },
  {
    name: "knockbackX",
    id: "NULL",
    lvl: 0,
    origin: '{id:"knockback",lvl:1000}',
  },
  // # looting
  {
    name: "looting",
    id: "NULL",
    lvl: 0,
    origin: '{id:"looting",lvl:3}',
  },
  {
    name: "looting5",
    id: "NULL",
    lvl: 0,
    origin: '{id:"looting",lvl:5}',
  },
  {
    name: "looting10",
    id: "NULL",
    lvl: 0,
    origin: '{id:"looting",lvl:10}',
  },
  {
    name: "lootingX",
    id: "NULL",
    lvl: 0,
    origin: '{id:"looting",lvl:1000}',
  },
  // # ____________
  // # ___ Bow ____
  // # ____________
  {
    name: "power",
    id: "NULL",
    lvl: 0,
    origin: '{id:"power",lvl:5}',
  },
  {
    name: "powerX",
    id: "NULL",
    lvl: 0,
    origin: '{id:"power",lvl:1000}',
  },
  {
    name: "punch",
    id: "NULL",
    lvl: 0,
    origin: '{id:"punch",lvl:2}',
  },
  {
    name: "punchX",
    id: "NULL",
    lvl: 0,
    origin: '{id:"punch",lvl:1000}',
  },
  {
    name: "flame",
    id: "NULL",
    lvl: 0,
    origin: '{id:"flame",lvl:1}',
  },
  {
    name: "flameX",
    id: "NULL",
    lvl: 0,
    origin: '{id:"flame",lvl:1000}',
  },
  {
    name: "infinity",
    id: "NULL",
    lvl: 0,
    origin: '{id:"infinity",lvl:1}',
  },
  {
    name: "infinityX",
    id: "NULL",
    lvl: 0,
    origin: '{id:"infinity",lvl:1000}',
  },
  // # ____________
  // # __ Armors __
  // # ____________
  // # protection: 1234
  {
    name: "protection",
    id: "NULL",
    lvl: 0,
    origin: '{id:"protection",lvl:4}',
  },
  {
    name: "protection5",
    id: "NULL",
    lvl: 0,
    origin: '{id:"protection",lvl:5}',
  },
  {
    name: "protectio10",
    id: "NULL",
    lvl: 0,
    origin: '{id:"protection",lvl:10}',
  },
  {
    name: "protectioX",
    id: "NULL",
    lvl: 0,
    origin: '{id:"protection",lvl:1000}',
  },
  // # thorns: 1234
  {
    name: "thorns",
    id: "NULL",
    lvl: 0,
    origin: '{id:"thorns",lvl:3}',
  },
  {
    name: "thorns5",
    id: "NULL",
    lvl: 0,
    origin: '{id:"thorns",lvl:5}',
  },
  {
    name: "thorns10",
    id: "NULL",
    lvl: 0,
    origin: '{id:"thorns",lvl:10}',
  },
  {
    name: "thornsX",
    id: "NULL",
    lvl: 0,
    origin: '{id:"thorns",lvl:1000}',
  },
  // # respiration: 1
  {
    name: "respiration",
    id: "NULL",
    lvl: 0,
    origin: '{id:"respiration",lvl:4}',
  },
  {
    name: "respirationX",
    id: "NULL",
    lvl: 0,
    origin: '{id:"respiration",lvl:1000}',
  },
  // # aqua_affinity: 1
  {
    name: "aqua_affinity",
    id: "NULL",
    lvl: 0,
    origin: '{id:"aqua_affinity",lvl:1}',
  },
  {
    name: "aqua_affinityX",
    id: "NULL",
    lvl: 0,
    origin: '{id:"aqua_affinity",lvl:1000}',
  },
  // # feather_falling: 4
  {
    name: "feather_falling",
    id: "NULL",
    lvl: 0,
    origin: '{id:"feather_falling",lvl:4}',
  },
  {
    name: "feather_fallingX",
    id: "NULL",
    lvl: 0,
    origin: '{id:"feather_falling",lvl:1000}',
  },
  // # frost_walker: 4
  {
    name: "frost_walker1",
    id: "NULL",
    lvl: 0,
    origin: '{id:"frost_walker",lvl:1}',
  },
  {
    name: "frost_walker2",
    id: "NULL",
    lvl: 0,
    origin: '{id:"frost_walker",lvl:2}',
  },
  // # soul_speed: 4
  {
    name: "soul_speed",
    id: "NULL",
    lvl: 0,
    origin: '{id:"soul_speed",lvl:3}',
  },
  {
    name: "soul_speed5",
    id: "NULL",
    lvl: 0,
    origin: '{id:"soul_speed",lvl:5}',
  },
  {
    name: "soul_speed10",
    id: "NULL",
    lvl: 0,
    origin: '{id:"soul_speed",lvl:10}',
  },
];

export default enchant_list;
