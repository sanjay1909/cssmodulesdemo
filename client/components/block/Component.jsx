import React from 'react';
import './style.normal.css';

export default class Block extends React.Component {
    render() {
        let classAttributeAndValue= this.props.blockClass ? " class="+ this.props.blockClass : null;
        return (
            <div className="elem" style={{borderColor:this.props.color}}>
                <span className="label" style={{backgroundColor:this.props.color}}>&lt;{this.props.htmlType}{classAttributeAndValue}></span>
                    <div className={this.props.blockClass}>{this.props.children}</div>
                <span className="endlabel" style={{backgroundColor:this.props.color}}>&lt;/{this.props.htmlType}></span>
            </div>
        );
    }
}