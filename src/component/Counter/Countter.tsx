import React from "react";
import Button from "../Button/Button";
import { countReset } from "console";

interface CouterProps {
    count: number
}

interface CountState {
    count: number
}

class Counter extends React.Component<CouterProps, CountState> {
    constructor(props: CouterProps) {
        super(props);

        this.state = {
            count: this.props.count
        }
    }

    increment = () => {
        this.setState({
            count: this.state.count + 1
        });
    }

    decrement = () => {
        this.setState({
            count: this.state.count - 1
        });
    }

    render() {
        return (
            <div>
                <p>カウンター</p>
                <p>{this.state.count}</p>
                <span onClick={this.increment}>
                    <Button text={"インクリメント"}>するよ</Button>
                </span>
                <span onClick={this.decrement}>
                    <Button text={"デクリメント"}>しますよ</Button>
                </span>
            </div>
        );
    }
}

export default Counter;