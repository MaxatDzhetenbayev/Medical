import { DetailedHTMLProps, HtmlHTMLAttributes, ReactNode } from "react";
import styles from "./PTag.module.scss";
import cs from "classnames";

interface Props
  extends DetailedHTMLProps<
    HtmlHTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  children: ReactNode;
  variant?: "sm" | "nm" | "md" | "lg";
}

export const PTag = ({ variant = "nm", children, ...props }: Props) => {
  return (
    <p
      className={cs(styles.root, {
        [styles.small]: variant === "sm",
        [styles.normal]: variant === "nm",
        [styles.medium]: variant === "md",
        [styles.large]: variant === "lg",
      })}
      {...props}
    >
      {children}
    </p>
  );
};
