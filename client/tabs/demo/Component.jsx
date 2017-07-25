import React from 'react';
import Loader from './Loader';
import StyleTag from './../../components/styleTag';

let loader = new Loader();
let componentNames = ["blockquote","para"];

export default class Demo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            components:[],
            showLocal:false
        };
        this.addComponent = this.addComponent.bind(this);
        this.toggleCSSModuleScope = this.toggleCSSModuleScope.bind(this);
    }

    addComponent(event){
        var name = event.target.name;
        var clone = this.state.components.slice(0);
        clone.push(name);
        loader.loadComponent(name);
        this.setState({
            components:clone
        });

    }

    toggleCSSModuleScope(){
        if(this.state.showLocal ){
            this.setState({
                showLocal:false
            })
        }else{
            this.setState({
                showLocal:true
            })
        }
    }

    renderButtons(names){
        let buttons = names.map((name) => {
            return <button key={name} name={name} onClick={this.addComponent}>Render {name}</button>
        });
        return buttons;
    }

    renderComponents(loader,localScopeEnabled,names){
        let componentsNames = names;
        if(!names){
            componentsNames = loader.getComponentNames();
        }

        let components = componentsNames.map(function(name,index){
            let Component = loader.getComponent(name);
            if(localScopeEnabled){
                return <Component isLocal={true} key={name + index}/>;
            }else{
                return <Component key={name + index}/>;
            }
        });
        return components;
    }

    renderStyleTags(loader,localScopeEnabled,names){
        let componentsNames = names;
        if(!names){
            componentsNames = loader.getComponentNames();
        }

        let styleComponents = componentsNames.map(function(name,index){
            const localCSSname = loader.getComponentLocalCSS(name);
            if(localScopeEnabled){
                return <StyleTag cssGlobalName={name} key={name + index} cssLocalName={localCSSname} isLocal={true}/>;
            }else{
                return <StyleTag cssGlobalName={name} key={name + index}/>;
            }
        });
        return styleComponents;
    }


    render() {
        let flexstyle = {display:"flex",justifyContent: "space-around", padding:"20px",alignItems:"flex-start"};
        const buttons = this.renderButtons(componentNames);
        const components = this.renderComponents(loader,this.state.showLocal,this.state.components);
        const styleTags = this.renderStyleTags(loader,this.state.showLocal,this.state.components);
        let scopeButtonName = this.state.showLocal ? "disable" : "enable";

        return (
            <div style={{padding:"16px"}}>
                <div>
                    <span><b>1. </b> Insert <b>React Component</b></span>
                    {buttons}
                </div>
                <div>
                    <span><b>2. </b>Enable local scope for CSS: </span>
                    <button onClick={this.toggleCSSModuleScope}>{scopeButtonName}</button>
                </div>
                <br/><br/>
                <div style={flexstyle}>
                    {styleTags}
                </div>
                <br/><br/>
                <div style={flexstyle}>
                    {components}
                </div>
            </div>
        );
    }
}