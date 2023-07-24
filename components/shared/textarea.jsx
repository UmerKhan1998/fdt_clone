import React from "react";
import Styles from "../../styles/textarea.module.scss";
// useTranslations
import { useTranslations } from "next-intl";

const Textarea = (props) => {
  const t = useTranslations("Validation");

  const {
    type,
    placeholder,
    label,
    check,
    errors,
    value,
    register,
    Arabic,
    onChange,
    name,
    onClick,
    disabled,
    style,
    cols,
    rows,
  } = props;
  return (
    <>
      <textarea
        {...(register ? register(label, check) : {})}
        className={`${Styles.textarea} + ${
          errors &&
          errors[label] &&
          (Arabic ? Styles.textareaArabic : Styles.textareaActive)
        }`}
        type={type}
        cols={cols}
        rows={rows}
        value={value}
        onClick={onClick}
        placeholder={placeholder}
        disabled={disabled}
        style={style}
      />

      {errors && errors[label] && errors[label]?.message && (
        <span className={Styles.textareaError}>
          {t(`${errors[label]?.message}`)}
        </span>
      )}
    </>
  );
};

export default Textarea;
