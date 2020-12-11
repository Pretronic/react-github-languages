import React from "react";


// @ts-ignore
export const LanguageContext = React.createContext<LanguageInfo>(null)

export interface LanguageInfo {

    language?: Language,
    languages?: Language[]

}

export interface Language {

    name: string,
    localName: string,
    code: string,
    messages: any

}
