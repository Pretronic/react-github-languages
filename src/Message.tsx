/*
 * (C) Copyright 2020 Pretronic (Davide Wietlisbach & Philipp Elvin Friedhoff)
 *
 * @author Davide Wietlisbach
 * @since 11.12.20, 20:12
 *
 * The React GitHub Languages Project is under the Apache License, version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at:
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 */

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
