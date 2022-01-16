import React, { createContext } from 'react'

export const ThemeContext = createContext();

class ThemeContextProvider extends React.Component {
    state = {
        isLightTheme: true,
        Light : { syntax: "#555", ui: "#ddd", bg: "#eee"},
        dark: {syntax: "#ddd", ui: "#333", bg: "#555"}
    }

    render() { 
        return (
            // whenever we createContext, we are given the ThemeContext a provider  and this is wrap our components. So, data can be used inside of components
            // we also assigne value to components that we warps and give object that is properties in state and spread them up into an object we provide inside of property value
            <ThemeContext.Provider value={{...this.state}}>
                {/* here we provide access to childern that are components wraps insides of ThemeContext.Provider using props. This here means the childern of ThemeContextProvider Wraps*/}
                {this.props.children}
            </ThemeContext.Provider>

        )
    }
}
 
export default ThemeContextProvider;