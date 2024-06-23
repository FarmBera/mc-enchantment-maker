import React from "react";

import userVariable from "../data/data";

const userInputInt = (msg) => {
  useruserVariable = "";
  // useruserVariable = input(msg)
  if (useruserVariable == "") return 0;
  else {
    try {
      return int(useruserVariable);
    } catch {
      return False;
    }
  }
};

const PrintArray = (list) => {
  // print()
  for (let i = 0; i < list.length; i++) {
    // print(f"{i} : {item}")
  }
};

function Logic() {
  // let result = f"str_front"
  let result = `${userVariable.str_front}`;

  // SELECTION: int = 0
  let SELECTION = 0;
  SELECTED_arr = [];
  // SELECTED_arr: list = ["mending", "efficiency", "fortune"]

  // 도구 재료 입력받기
  PrintArray(tool_shape);
  SELECTION = userInputInt("Select Tool Material");
  const selected_shape = tool_shape[SELECTION];

  // 도구 유형 입력받기
  PrintArray(tool_type);
  SELECTION = userInputInt("Select Tool Type");
  const selected_type = tool_type[SELECTION];

  // tool = f"{selected_shape}_{selected_type}"
  tool = `${selected_shape}_${selected_type}`;

  // -----------------------
  // todo-delay: 프리셋 만들어두기

  // todo-delay: 권장값 생성
  // -----------------------
  // -----------------------
  let enchantment = "";
  let SELECTED_arr = [];

  // PrintArray(enchant_list.keys())

  while (true) {
    const userVar = userInputInt("Select enchant elements");

    if (!userVar) break;

    SELECTED_arr.append(enchant_list[list(enchant_list.keys())[userVar]]);
    print(SELECTED_arr);

    // 인첸트 항목 부여
    // if enchantment == ErrorMsg:
    //     raise ValueError("인첸트 항목이 없음")

    for (let i = 0; i < SELECTED_arr.length; i++) {
      enchantment += `${SELECTED_arr},`;
    }
    // for item in SELECTED_arr:
    //   if SELECTED_arr.index(item) + 1 == len(SELECTED_arr):
    //       enchantment += f"{item}"
    //   else:
    //       enchantment += f"{item},"

    const result = `${Variable.str_front}${Variable.tool}${Variable.str_second}${Variable.enchantment}${Variable.str_end}`;
    // result: str = f"{str_front}{tool}{str_second}{enchantment}{str_end}"

    // 화면에 결과 띄워주기 (바로 복사할 수 있게)
    // print(f"\n{result}")
  }
  // -----------------------
  // -----------------------
  // -----------------------

  return <div className="Logic">hello</div>;
}

export default Logic;
