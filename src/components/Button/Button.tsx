import React from "react";
import styles from "./button.module.css";
import Link from "next/link";

interface IProps {
  text: string;
  url: string;
}

const Button = ({ text, url }: IProps) => {
  return (
    <Link href={url}>
      <button className={styles.container}>{text}</button>
    </Link>
  );
};

export default Button;