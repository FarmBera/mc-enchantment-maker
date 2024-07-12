const Variable = {
  nickname: "nkyeo",
  structure:
    '/give @p netherite_sword{Enchantments:[{id:"sharpness",lvl:5},{id:"fire_aspect",lvl:2},{id:"looting",lvl:3},{id:"mending",lvl:1}]}',
  structure_multi:
    '/give nickname netherite_axe 1 {Enchantments:[{id:"unbreaking",lvl:3},{id:"efficiency",lvl:5},{id:"fortune",lvl:3},{id:"sharpness",lvl:1000},{id:"fire_aspect",lvl:1000},{id:"knockback",lvl:1000},{id:"looting",lvl:1000}]}',

  ErrorMsg: "ERROR",

  str_front: "/give @p ",
  tool: "ERROR",
  str_second: "{Enchantments:[",
  enchantment: "ERROR",
  str_end: "]}",

  gubunja: "_", // 구분자
};

export default Variable;
