import { TEXT_ELEMENT_TYPE } from "../didact/createTextElement";

export default function render(element, container) {
  const dom =
    element.type === TEXT_ELEMENT_TYPE
      ? document.createTextNode("")
      : document.createElement(element.type);

  const isProperty = (key) => key !== "children";
  Object.keys(element.props)
    .filter(isProperty)
    .forEach((name) => {
      dom[name] = element.props[name];
    });

  element.props.children.forEach((child) => render(child, dom));

  container.appendChild(dom);
}
