import { React, useState, useEffect } from "react";
import styled from "styled-components";
import Image from "../modules/Image";

import tool_type from "../data/tool_type";
import tool_material from "../data/tool_material";
import enchant_list from "../data/enchant_list";

const l = (msg) => console.log(msg);

const Modal = ({ show, onClose, title, message, duration, image }) => {
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

  // l(image);

  return (
    <Container>
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content">
          <h2>{title}</h2>
          <p>{message}</p>
          <Image name={image} ext="gif" size={200} />
          <p>Tap any place to close</p>
          <p>(This screen will close after {remainingTime}s)</p>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal-content {
    background: white;
    padding: 20px;
    border-radius: 8px;
    max-width: 500px;
    width: 100%;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
`;

export default Modal;
