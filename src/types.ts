import { TEXT_ELEMENT_TYPE } from "./didact/createTextElement";

export type TextElementType = "TEXT_ELEMENT";
export type ElementType = keyof HTMLElementTagNameMap | TextElementType;

export type ElementTypeWithoutTextElement = Exclude<
  ElementType,
  TextElementType
>;

export type PropsForTextElement = { nodeValue: string; children: [] };

export type PropsForHTMLElement<T extends ElementTypeWithoutTextElement> =
  | HTMLElementTagNameMap[T]
  | { children?: DidactElement[] } /* & {
      [key: string]: any;
    } */;

export type Props<T extends ElementType> = T extends TextElementType
  ? PropsForTextElement
  : T extends ElementTypeWithoutTextElement
  ? PropsForHTMLElement<T>
  : never;

export type DidactElement = {
  type: ElementType;
  props: Props<ElementType>;
};

const test: DidactElement = {
  type: "div",
  props: {
    id: "test",
    className: "test-class",
    children: [
      {
        type: "span",
        props: {
          className: "test-span",
          children: [
            {
              type: TEXT_ELEMENT_TYPE,
              props: {
                nodeValue: "Hello, World!",
                children: [],
              },
            },
          ],
        },
      },
    ],
  },
};
