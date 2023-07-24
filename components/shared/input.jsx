import React from "react";
import Styles from "../../styles/input.module.scss";
// useTranslations
import { useTranslations } from "next-intl";

const Input = (props) => {
  const t = useTranslations("Validation");

  const {
    type,
    placeholder,
    label,
    check,
    errors,
    value,
    register,
    onChange,
    Arabic,
    name,
    onClick,
    disabled,
    style,
  } = props;
  return (
    <>
      <input
        {...(register ? register(label, check) : {})}
        className={`${Styles.input} + ${
          errors &&
          errors[label] &&
          (Arabic ? Styles.inputArabic : Styles.inputActive)
        }
        `}
        type={type}
        value={value}
        onClick={onClick}
        placeholder={placeholder}
        disabled={disabled}
        style={style}
      />

      {errors && errors[label] && errors[label]?.message && (
        <span className={Styles.inputError}>
          {t(`${errors[label]?.message}`)}
        </span>
      )}
      {/* Pattern */}
      {label === "name" && errors[label]?.type === "pattern" && (
        <p className={Styles.inputError}>{t("Name Must Be Alphabate")}</p>
      )}
      {label === "last_name" && errors[label]?.type === "pattern" && (
        <p className={Styles.inputError}>{t("Last Name Must Be Alphabate")}</p>
      )}
      {label === "email" && errors[label]?.type === "pattern" && (
        <p className={Styles.inputError}> {t("Please Enter A Valid Email")} </p>
      )}
      {/* Min or Max Length */}
      {errors && errors[label]?.type === "minLength" && (
        <p className={Styles.inputError}>
          {name} {t("Must Be Of")} {check.minLength} {t("Digit")}
        </p>
      )}
    </>
  );
};

export default Input;
