import React from "react";
import "./Button.css";

interface ButtonProps {
  text: string;
}

interface ButtonState {
  text: string;
}

// クラスコンポーネントの書き方の基本
class Button extends React.Component<ButtonProps, ButtonState> {
  constructor(props: ButtonProps) {
    super(props);
    this.state = {
      text: this.props.text
    };
  }

  render() {
    return (
      <span className="Button-Container">
        {this.state.text}
        {this.props.children}
      </span>
    );
  }
}

export default Button;
