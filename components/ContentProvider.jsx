import React, { createContext, useContext } from 'react';
import PropTypes from 'prop-types';

export const ContentContext = createContext();

export function ContentContextProvider({ children, contentData }) {
  return (
    <ContentContext.Provider value={contentData}>
      {children}
    </ContentContext.Provider>
  );
}

ContentContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
  contentData: PropTypes.shape({
    dayNames: PropTypes.arrayOf(String).isRequired,
  }).isRequired,
};

export const useContentContext = () => useContext(ContentContext);
