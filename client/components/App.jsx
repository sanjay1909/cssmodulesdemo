import React from 'react';

export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            component:"blockquote"
        };

        this.toggleComponent = this.toggleComponent.bind(this);
    }

    toggleComponent(){
        if(this.state.component === "blockquote"){
            this.setState({
                component:"para"
            })
        }else{
            this.setState({
                component:"blockquote"
            })
        }
    }

    loadComponentDynamically(componentName){
        const module = require(`./${componentName}`);
        const Component = module.default;
        return <Component/>;
    }

    render() {
        let componentToRender = this.loadComponentDynamically(this.state.component);
        return (
            <div>
                <h1 style={{textAlign: 'center'}}>Importing CSS in JS</h1>
                <h1>Demo</h1>
                <span>To check dynamic injection of Style tag in Head tag click: </span><button onClick={this.toggleComponent}>Toggle</button>
                <br/><br/>
                <div style={{display:"flex",justifyContent: "space-around"}}>
                    {componentToRender}
                </div>
            </div>
        );
    }
}