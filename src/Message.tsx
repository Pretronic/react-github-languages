import {PureComponent} from "react";
import {Language, LanguageContext} from "./Language";

interface MessageProps {
    name: any,
    variables?: any,
    default? : string
}

interface MessageState {}

export default class Message extends PureComponent<MessageProps,MessageState> {

    static contextType = LanguageContext;

    getLanguage() : Language{
        return this.context.language
    }

    getMessage(){
        let language = this.getLanguage();
        if(language == null) return "Loading";
        else{
            let message = language.messages[this.props.name];
            if(message == null){
                return this.props.default ?? "Message not found";
            }else{
                if(this.props.variables){
                    for (const [key, value] of Object.entries(this.props.variables)) {
                       message = message.replace("{"+key+"}",value)
                    }
                }
                return message;
            }
        }
    }

    render() {
        return this.getMessage()
    }

}
