import React from 'react';
import Block from './../block';
import './style.css';

export default class Para extends React.Component {
    render() {
        return (
            <Block htmlType="div" blockClass="para">
                Para React component with CSS value <u>para</u>
                <ol>
                    <li><u>para.css</u> loaded by <b>CSS-Loader</b> into <u>Para.jsx</u> by Webpack</li>
                    <li><u> .para</u> css value is injected into <u>head tag</u> as <u>style tag</u> by <b>style-loader</b></li>
                </ol>
            </Block>
        );
    }
}