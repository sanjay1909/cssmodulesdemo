import React from 'react';
import Block from './../block';
import './style.css';

export default class Blockquote extends React.Component {
    render() {
        return (
            <Block htmlType="div" blockClass="blockquote">
                Blockquote React component with CSS value <u>blockquote</u>
                <ol>
                    <li><u>blockquote.css</u> loaded by <b>CSS-Loader</b> into <u>Blockquote.jsx</u> by Webpack</li>
                    <li><u> .blockquote</u> css value is injected into <u>head tag</u> as <u>style tag</u> by <b>style-loader</b></li>
                </ol>
            </Block>
        );
    }
}