import React,{Component} from "react";
import axios from 'axios';
import {Language, LanguageContext, LanguageInfo} from "./Language";

interface LanguageProviderProps {
    repository: string
    branch: string
    language: string
    fallbackLanguage?: string,
    component?: any,
    loadSpecifications?: boolean
}

export default class LanguageProvider extends Component<LanguageProviderProps,LanguageInfo> {

    constructor(props : LanguageProviderProps) {
        super(props);
        this.state = {
            language: undefined
        }
    }

    shouldComponentUpdate(nextProps: Readonly<LanguageProviderProps>, nextState: Readonly<LanguageInfo>, nextContext: any): boolean {
        if(this.props.language !== nextProps.language || this.props.language !== nextProps.language){
            let instance = this;
            setTimeout(function () {
                instance.loadLanguage();
            },5)
            return false;
        }
        return true;
    }

    componentDidMount() {
        this.loadLanguage();
        if(this.props.loadSpecifications){
            this.loadLanguageSpecifications();
        }
    }

    loadLanguageSpecifications(){
        axios.get("https://raw.githubusercontent.com/"+this.props.repository + "/" + this.props.branch + "/languages.json")
            .then((result) => {
                this.setState({languages: result.data.languages as Language[]})
            }).catch((err) => console.log(err));
    }

    loadLanguage(){
        if(this.props.language === "default"){
            this.detectLanguage()
        }else{
            this.getLanguage(this.props.language).then(language => {
                this.mergeWithFallback(language)
            })
        }
    }

    detectLanguage(){
        // @ts-ignore
        let code =  navigator.language || navigator.userLanguage;
        this.getLanguage(code).then(language => this.mergeWithFallback(language))
            .catch(() => {
                this.getLanguage(code.split("-")[0])
                    .then(language => this.mergeWithFallback(language))
                    .catch(() => {this.mergeWithFallback(undefined)})
            })
    }

    mergeWithFallback(language? : Language){
        if(this.props.fallbackLanguage){
            this.getLanguage(this.props.fallbackLanguage).then(fallback => {
                if(language){
                    language.messages = Object.assign(fallback.messages, language.messages)
                    this.setState({language: language})
                }else{
                    this.setState({language: fallback})
                }
            }).catch(()=>this.setState({language: language}));
        }else{
            this.setState({language: language});
        }
    }

    async getLanguage(code : string){
        return new Promise<Language>((resolve,reject)=> {
            axios.get("https://raw.githubusercontent.com/"+this.props.repository + "/" + this.props.branch + "/" + code + ".json")
                .then((result) => resolve(result.data as Language))
                .catch(() => reject());
        })
    }

    render() {
        return (
            <LanguageContext.Provider value={this.state}>
                {this.props.component ? React.createElement(this.props.component,{language: this.state.language}) : this.props.children}
            </LanguageContext.Provider>)
    }

}
