const createElementWithConfig = (config) => {
  const {
    tagName, classes, attributes, textContent, children, eventListeners,
  } = config;

  const element = document.createElement(tagName);

  if (classes) {
    classes.forEach((className) => {
      element.classList.add(className);
    });
  }

  if (attributes) {
    Object.entries(attributes).forEach(([key, value]) => {
      element.setAttribute(key, value);
    });
  }

  if (textContent) {
    element.textContent = textContent;
  }

  if (children) {
    children.forEach((childConfig) => {
      const childElement = createElementWithConfig(childConfig);
      element.append(childElement);
    });
  }

  return element;
};

export default createElementWithConfig;
