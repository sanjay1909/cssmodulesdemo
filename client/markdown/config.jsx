import React from 'react';
import Remarkable from 'remarkable';
import ReactHtmlParser from 'react-html-parser';
import ConfigMD from './CONFIG.md';

const md = new Remarkable();

export default class Reason extends React.Component {
    constructor(props){
        super(props);

    }
    render() {

        const mdElement = md.render(ConfigMD);
        return (
            <div>
                {ReactHtmlParser(mdElement)}
            </div>
        );
    }
}