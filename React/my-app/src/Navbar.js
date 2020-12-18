import React from 'react';
import  {LanguageContext} from './Contexts/LanguageContext';


function Navbar(props) {
    return (
        <LanguageContext.Consumer>

        {
            (context)=>
            {
                return(
                    <div style={{display:"flex",backgroundColor:"black",justifyContent:'center'}}>
                    <button onClick={context.onLanguageChange} >change language</button>
                    </div>
                )

            }

        }

      
        </LanguageContext.Consumer>
    );
}

export default Navbar;