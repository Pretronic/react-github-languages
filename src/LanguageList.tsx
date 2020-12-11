import {PureComponent} from "react";
import {Language, LanguageContext} from "./Language";

interface LanguageListProps {
    render: RenderFunction
}

interface LanguageListState {}

interface RenderFunction {
    (languages: Language[]): any;
}

export default class LanguageList extends PureComponent<LanguageListProps,LanguageListState> {

    static contextType = LanguageContext;

    render() {
        let languages : Language[] = this.context.languages;
        if(languages == null) languages = [];
        return this.props.render(languages)
    }

}
