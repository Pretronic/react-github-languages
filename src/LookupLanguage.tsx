import {PureComponent} from "react";
import {Language, LanguageContext} from "./Language";

interface GetLanguageProps {
    language: string
    render: RenderFunction
}

interface GetLanguageState {}

interface RenderFunction {
    (languages?: Language): any;
}

export default class LookupLanguage extends PureComponent<GetLanguageProps,GetLanguageState> {

    static contextType = LanguageContext;

    getLanguage() : Language {
        for(let language of this.context.languages){
            if(language.code === this.props.language){
                return language;
            }
        }
        return null;
    }

    render() {
        return this.props.render(this.getLanguage())
    }

}
