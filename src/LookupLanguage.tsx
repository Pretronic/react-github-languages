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
