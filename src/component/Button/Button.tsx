import React from "react";
import "./Button.css";

interface ButtonProps {
}

interface ButtonState {
  text: string;
}

class Button extends React.Component<ButtonProps, ButtonState> {
  constructor(props: ButtonProps) {
    super(props);

  }

  render() {
    return (
      <span className="Button-Container">
        {this.props.children}
      </span>
    );
  }
}

export default Button;
