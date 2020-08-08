import React from "react";
import RedText from "../RedText/RedText";
import Button from "../Button/Button";
import "./SetUp.css";

type Props = {
    pageNext: () => void
}


class SetUp extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="header">
                    <div className="simekiriTime">
                        <h1>締切時間</h1>
                        <RedText>※必須</RedText>
                        <input type="text"></input>
                        <p>h</p>
                        <input type="text"></input>
                        <p>m</p>
                    </div>
                    <form>
                        <p >
                            <input type="radio" value="and" name="radiogroup2" checked />時刻設定 (24時間)
                        </p>
                        <p>
                            <input type="radio" value="or" name="radiogroup2" />タイマー設定
                        </p>
                    </form>
                </div>
                <hr className="hr"></hr>
                <div className="footer">
                    <h1>メッセージ</h1>
                    <RedText>※必須</RedText>
                    <input type="text"></input>
                    <p>50文字以内</p>
                </div>
                <span onClick={this.props.pageNext}>
                    <Button>次へ</Button>
                </span>
            </div>
        );
    }
}

export default SetUp;