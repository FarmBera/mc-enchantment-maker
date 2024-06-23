import { React, useState, useEffect } from "react";
import styled from "styled-components";
import Clock from "react-live-clock";

import { UnselectableImg } from "../styles/Unselectable";

const loadingImg = await getImage("loading");

// const l = (msg) => console.log(msg);

/** 이미지 가져와서 return */
async function getImage(imgName, ext) {
  const module = await import(`../icon/${imgName}.gif`);
  return module.default;
}

function Image({ name, ext, size = 30, key }) {
  const [img, setImg] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  /** 이미지 불러오는 과정*/
  useEffect(() => {
    async function fetchImage(name) {
      // l(name);
      try {
        const imageData = await getImage(name);
        if (imageData) setImg(imageData);
      } catch (e) {
        const missingImg = await getImage("missing");
        setImg(missingImg);
      }
      setIsLoading(false);
    }
    fetchImage(name);
  }, [name]);

  // 로딩 중
  if (isLoading) {
    return (
      <span className="container">
        <img
          className="icon"
          src={loadingImg}
          width={size}
          height={size}
          alt="icon"
        />
      </span>
    );
  }
  // 로딩 완료
  else {
    return (
      <span>
        {/* img가 null이 아닐 때만 렌더 */}
        {img && (
          <UnselectableImg>
            <span>
              <img src={img} width={size} height={size} key={key} alt="icon" />
            </span>
          </UnselectableImg>
        )}
      </span>
    );
  }
}

export default Image;
