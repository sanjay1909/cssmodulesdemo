

function hashComponent(name,dict){
    if(!dict[name]){
        dict[name] = {
            module:null,
            klass:null,
            localCSSname:null
        }
    }
};

var componentsDict = {};
var loaderInstance = null;

export default class Loader {
    constructor(){ //singelton
        if(!loaderInstance){
            loaderInstance = this;
        }
        return loaderInstance;
    }
}

Loader.prototype.loadComponent = function(name){
    hashComponent(name,componentsDict);
    const metadata = componentsDict[name];
    if(!metadata.module){
        metadata.module = require(`./../../components/${name}`);
    }
    if(!metadata.klass){
        metadata.klass =  metadata.module.default[name];
    }
    if(!metadata.localCSSname){
        metadata.localCSSname =  metadata.module.default["styles"][name];
    }
};
Loader.prototype.getComponentNames = function(){
    return Object.keys(componentsDict);
};

Loader.prototype.getComponent = function(componentName){
    hashComponent(componentName,componentsDict);
    this.loadComponent(componentName);
    const componentMetadata = componentsDict[componentName]
    return componentMetadata.klass;
};

Loader.prototype.getComponentLocalCSS = function(componentName){
    hashComponent(componentName,componentsDict);
    this.loadComponent(componentName);
    const componentMetadata = componentsDict[componentName]
    return componentMetadata.localCSSname;
};