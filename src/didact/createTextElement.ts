import { TextElementType } from "../types";

export const TEXT_ELEMENT_TYPE: TextElementType = "TEXT_ELEMENT";

export default function createTextElement(text: string) {
  return {
    type: TEXT_ELEMENT_TYPE,
    props: {
      nodeValue: text,
      children: [],
    },
  };
}
