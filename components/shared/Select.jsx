import React, { useState } from "react";
import styles from "../../styles/select.module.scss";
// Icon
import { MdOutlineArrowDropDown } from "react-icons/md";

const Select = ({ data, placeHolder }) => {
  const [isOpen, setOpen] = useState(false);
  const [items, setItem] = useState(data);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleDropdown = () => setOpen(!isOpen);

  const handleItemClick = (id) => {
    selectedItem == id ? setSelectedItem(null) : setSelectedItem(id);
    setOpen(!isOpen);
  };

  return (
    <>
      <div className={styles.dropdown}>
        <div className={styles.dropdown_header} onClick={toggleDropdown}>
          {selectedItem
            ? items.find((item) => item.id == selectedItem).label
            : placeHolder}
          <i
            className={`${styles.selectIcon} ${
              isOpen && styles.selectIcon_active
            }`}
          >
            <MdOutlineArrowDropDown />
          </i>
        </div>
        <div
          className={`${styles.dropdown_body} ${
            isOpen && styles.dropdown_body_Active
          }`}
        >
          {items.map((item, i) => (
            <div
              className={styles.dropdown_item}
              onClick={(e) => handleItemClick(e.target.id)}
              id={item.id}
              key={i}
            >
              <span
                className={`${styles.dropdown_item_dot} ${
                  item.id == selectedItem && styles.dropdown_item_dot_Active
                }`}
              >
                •
              </span>
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Select;
