import React, { createContext, useContext } from "react";
import PropTypes from 'prop-types'

export const ContentContext = createContext();

export const ContentContextProvider = ({ children, contentData }) => (
    <ContentContext.Provider value={contentData} >
        {children}
    </ContentContext.Provider>
)


ContentContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
    contentData: PropTypes.shape({
        dayNames: PropTypes.array.isRequired
    })
}

export const useContentContext = () => useContext(ContentContext);