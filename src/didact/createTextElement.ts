import { TextElement } from "../types";

const TEXT_ELEMENT_TYPE: TextElement = "TEXT_ELEMENT";

export default function createTextElement(text: string) {
  return {
    type: TEXT_ELEMENT_TYPE,
    props: {
      nodeValue: text,
      children: [],
    },
  };
}
