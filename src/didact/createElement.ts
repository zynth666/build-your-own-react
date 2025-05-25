import { ElementType, Props } from "../types";
import createTextElement from "./createTextElement";

export default function createElement<T extends ElementType>(
  type: T,
  props: Props<T>,
  ...children
) {
  return {
    type,
    props: {
      ...props,
      children: children.map((child) =>
        typeof child === "object" ? child : createTextElement(child)
      ),
    },
  };
}
