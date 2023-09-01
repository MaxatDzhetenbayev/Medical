import {
  type ReactNode,
  DetailedHTMLProps,
  HtmlHTMLAttributes,
  CSSProperties,
} from "react";
import styles from "./Container.module.scss";

interface ContainerProps
  extends DetailedHTMLProps<
    HtmlHTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  backgroundImageUrl?: string;
  mt?: number;
  otherProps?: CSSProperties;
  children: ReactNode;
}

export const Container = ({
  backgroundImageUrl,
  children,
  mt,
  otherProps,
  ...props
}: ContainerProps) => {
  const containerStyle: CSSProperties = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: "cover",
    ...otherProps,
  };

  return (
    <div {...props} style={{ ...containerStyle, marginTop: mt }}>
      <div className={styles.root}>{children}</div>
    </div>
  );
};
