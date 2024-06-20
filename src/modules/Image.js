import { React, useState, useEffect } from "react";
import styled from "styled-components";
import Clock from "react-live-clock";

// color
import ColorFolder from "../data/ColorFolder";
import diamond from "../icon/diamond.png";

const loadingImg = await getImage("barrier");

/** 이미지 가져와서 return */
async function getImage(imgName, ext) {
  let module;

  // console.log(ext);
  // console.log(`../icon/${imgName}.${ext}`);

  if (ext) module = await import(`../icon/${imgName}.${ext}`);
  else module = await import(`../icon/${imgName}.png`);

  return module.default;
}

function Image({ name, ext, size = 30 }) {
  // const size = 30;

  const [img, setImg] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  /** 이미지 불러오는 과정*/
  useEffect(() => {
    async function fetchImage(name) {
      // console.log(name);
      try {
        const imageData = await getImage(name, ext);
        if (imageData) setImg(imageData);
      } catch (e) {
        const tempImage = await getImage("barrier");
        setImg(tempImage);
      }
      setIsLoading(false);
    }
    fetchImage(name);
  }, [name]);

  // 로딩 중일 때 표시할 내용
  // if (isLoading) {
  //   return (
  //     <span className="container">
  //       <img
  //         className="icon"
  //         src={loadingImg}
  //         width={size}
  //         height={size}
  //         alt="icon"
  //       />
  //     </span>
  //   );
  // }

  // 로딩 완료 시 표시
  return (
    <span>
      {/* img가 null이 아닐 때만 렌더링 */}
      {img && <img src={img} width={size} height={size} alt="icon" />}
    </span>
  );
}

export default Image;
