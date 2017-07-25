import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Why from './tabs/why';
import How from './tabs/how';
import Demo from './tabs/demo';
import './app.normal.css';

export default class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            component:"blockquote",
            showLocal:false,
            injectPara: false
        };
    }



    render() {

        return (
            <div>
                <h1 style={{textAlign: 'center'}}>Importing CSS in JS</h1>
                <Tabs>
                    <TabList>
                        <Tab>Why</Tab>
                        <Tab>How</Tab>
                        <Tab>Demo</Tab>
                    </TabList>
                    <TabPanel><Why/></TabPanel>
                    <TabPanel><How/></TabPanel>
                    <TabPanel><Demo defaultComponent="blockquote"/></TabPanel>
                </Tabs>
            </div>
        );
    }
}