import React from "react";

interface Props {
    text: string;
}

interface State {
    text: string;
}

class PrivatePage extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            text: this.props.text
        }
    }

    render() {
        return (
            <div>
                {this.state.text}
            </div>
        );
    }
}

export default PrivatePage;