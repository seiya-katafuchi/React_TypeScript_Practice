import React from "react";
import RedText from "../RedText/RedText";
import Button from "../Button/Button";
import "./SetUp.css";

type Props = {}

type State = {
    hour: number;
    minute: number;
    message: string;
}


class SetUp extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            hour: 0,
            minute: 0,
            message: "",
        }
    }

    render() {
        return (
            <form>
                <div className="TopContainer">
                    <div className="simekiriTime">
                        <h1>締切時間</h1>
                        <RedText>※必須</RedText>
                        <label>
                        <input type="number" maxLength = {2} min = {0} max = {24}></input>h
                        </label>
                        <label>
                            <input type="number" maxLength = {2} min = {0} max = {59}></input>m
                        </label>
                    </div>
                </div>

                <hr className="hr"></hr>

                <div className="bottomContainer">
                    <h1>メッセージ</h1>
                    <RedText>※必須</RedText>
                    <textarea maxLength = {50}></textarea>
                    <p>50文字以内</p>
                </div>
                <span>
                    <Button>次へ</Button>
                </span>
            </form>
        );
    }
}

export default SetUp;