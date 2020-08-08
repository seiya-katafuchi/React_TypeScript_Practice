import React from "react";
import "./style.css";

type Props = {
}

class RedText extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <p className="text">
                {this.props.children}
            </p>
        );
    }
}

export default RedText;