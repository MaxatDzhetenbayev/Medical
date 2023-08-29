import { type ReactNode, DetailedHTMLProps, HtmlHTMLAttributes } from "react";
import "./HTag.module.scss";

interface Props
  extends DetailedHTMLProps<
    HtmlHTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  children: ReactNode;
  variant?: "h1" | "h2" | "h3" | "h4";
}

export const HTag = ({ variant = "h2", children, ...props }: Props) => {
  switch (variant) {
    case "h1":
      return <h1 {...props}>{children}</h1>;
    case "h2":
      return <h2 {...props}>{children}</h2>;
    case "h3":
      return <h3 {...props}>{children}</h3>;
    case "h4":
      return <h4 {...props}>{children}</h4>;
  }
};
