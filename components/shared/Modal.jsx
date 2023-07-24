import React, { useLayoutEffect, useState } from "react";
import styles from "../../styles/modal.module.scss";

const Modal = ({ isOpen, setIsOpen, title }) => {
  const [animateOut, setanimateOut] = useState(false);

  useLayoutEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = "16px";
    } else {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "unset";
    }
  }, [isOpen]);

  return (
    <div
      className={`${styles.custom_modal} 
      ${isOpen ? styles.custom_modal_Active : ""} 
      ${animateOut ? styles.custom_modal_InActive : ""}`}
    >
      <div
        className={styles.custom_modal_bg}
        onClick={() => {
          setanimateOut(true);
          setTimeout(() => {
            setIsOpen(false);
            setanimateOut(false);
          }, 100);
        }}
      ></div>
      <div className={styles.custom_modal_content}>
        <div className={styles.custom_modal_content_header}>
          <h3>{title}</h3>
          <h5
            className={styles.close_custom_modal}
            onClick={() => {
              setanimateOut(true);
              setTimeout(() => {
                setIsOpen(false);
                setanimateOut(false);
              }, 100);
            }}
          ></h5>
        </div>
        <div className={styles.custom_modal_content_body}></div>
      </div>
    </div>
  );
};

export default Modal;
