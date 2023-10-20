import { useState } from "react";
import Button from "./Button";

function ButtonGroup({ children, activeClassName }) {
  const [activeButtonIndex, setActiveButtonIndex] = useState(0);

  const setClassName = (button, index) => {
    const defaultClassName = ["button--no-bg", "button--no-border"];
    const classNameArray = [...defaultClassName];

    if (button?.props?.className) {
      classNameArray.push(button.props.className);
    }

    if (activeButtonIndex === index) {
      classNameArray.push(activeClassName ?? "active");
    }
    
    return classNameArray.join(" ");
  };

  return (
    <div className="buttons-group">
      {children.map((button, index) => {
        return (
          <Button
            key={index}
            className={setClassName(button, index)}
            onClick={() => setActiveButtonIndex(index)}
          >
            {button.props.children}
          </Button>
        );
      })}
    </div>
  );
}

export default ButtonGroup;
