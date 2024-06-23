import { React, useState, useEffect } from "react";
import styled from "styled-components";
import Image from "../modules/Image";

import ColorFolder from "../data/ColorFolder";
import { UnselectableTxt } from "../styles/Unselectable";

const l = (msg) => console.log(msg);

const Modal = ({ show, onClose, title, message, color, duration, image }) => {
  const [remainingTime, setRemainingTime] = useState(duration);

  useEffect(() => {
    if (show && duration) {
      setRemainingTime(duration);
      const timer = setTimeout(onClose, duration * 1000);
      const interval = setInterval(() => {
        setRemainingTime((prev) => prev - 1);
      }, 1000);

      return () => {
        clearTimeout(timer);
        clearInterval(interval);
      };
    }
  }, [show, duration, onClose]);

  if (!show) {
    return null;
  }

  return (
    <Overlay onClick={onClose}>
      <UnselectableTxt>
        <Container color={color}>
          <Title color={color}>{title}</Title>
          <Desc color={color}>
            {message.split("\n").map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
          </Desc>
          <Image name={image} size={200} />
          <Btn color={color}>Close</Btn>
          <Desc color={color}>
            (This screen will close after {remainingTime}s)
          </Desc>
        </Container>
      </UnselectableTxt>
    </Overlay>
  );
};

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 500px;
  padding: 20px;
  border-radius: 15px;
  background-color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  border: 10px solid ${(props) => props.color};
`;

const Title = styled.h1`
  font-size: 40px;
  color: ${(props) => props.color};
  margin: 10px 0;
`;

const Desc = styled.p`
  font-size: 14px;
  color: ${ColorFolder.black};
  margin: 10px 0;
`;

const Btn = styled.button`
  background-color: ${(props) => props.color};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;

  &:hover {
    background-color: darkred;
  }
`;

export default Modal;
