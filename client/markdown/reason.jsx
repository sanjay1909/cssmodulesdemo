import React from 'react';
import Remarkable from 'remarkable';
import ReactHtmlParser from 'react-html-parser';
import ReasonMd from './REASON.md';

const md = new Remarkable();

export default class Reason extends React.Component {
    constructor(props){
        super(props);

    }
    render() {

        const mdElement = md.render(ReasonMd);
        return (
            <div>
                {ReactHtmlParser(mdElement)}
            </div>
        );
    }
}