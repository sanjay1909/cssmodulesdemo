import React from 'react';
import './style.css';

export default class Block extends React.Component {
    render() {
        return (
            <div className="elem">
                <span className="label">&lt;{this.props.htmlType} class="{this.props.blockClass}"></span>
                    <div className={this.props.blockClass}>{this.props.children}</div>
                <span className="endlabel">&lt;/div></span>
            </div>
        );
    }
}