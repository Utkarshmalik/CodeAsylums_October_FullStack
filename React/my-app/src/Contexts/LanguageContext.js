import React, { Component, createContext } from 'react';

export const LanguageContext = createContext();


class LanguageContextProvider extends Component{
    
    constructor(props)
    {
        super(props);

        this.state={
            lang:"English"
        }
    }

    onLanguageChange()
    {

        if(this.state.lang==='English')
        {
            this.setState({lang:"Hindi"});
         }
        else
        {this.setState({lang:"English"});
        }
    }


    render()
    {
        console.log(this.props);

        return(
        <LanguageContext.Provider value={{ ...this.state,onLanguageChange:this.onLanguageChange.bind(this)}}>
        { this.props.children }
        </LanguageContext.Provider>
        )
    }

}

export default LanguageContextProvider;

