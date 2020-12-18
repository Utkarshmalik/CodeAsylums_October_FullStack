import React, { Component } from 'react';


/*

this is a descendent of app.js
*/

import  {LanguageContext} from './Contexts/LanguageContext';



class  HomePage extends Component {

    render()
    {
    return (
        <LanguageContext.Consumer>
        {
            (context)=>{
                console.log(context);

                const {lang}=context;


                if(lang==="English")
                return <div> <h1>How are you ?</h1></div>
                else
                return <div><h1>Aap Kaise Ho ? </h1></div>
            }
        }
        </LanguageContext.Consumer>
    );
    }
}

export default HomePage;