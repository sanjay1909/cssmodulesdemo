/*
 ./client/components/App.jsx
 */
import React from 'react';
import './app.css';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <h1 style={{textAlign: 'center'}}>Importing CSS in JS</h1>
                <div className="elem">
                    <span className="label">&lt;div class="blockquote"></span>
                    <div className="blockquote">
                        <ol>
                            <li><u>app.css</u> loaded by <b>CSS-Loader</b> in to <u>app.jsx</u> by Webpack</li>
                            <li><u>blockquote</u> css value is injected into <u>head tag</u> as <u>style tag</u> by <b>style-loader</b></li>
                        </ol>

                    </div>
                    <span className="endlabel">&lt;/div></span>
                </div>

            </div>);
    }
}