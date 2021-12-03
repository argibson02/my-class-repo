// TODO: Add a comment briefly describing the functionality of `useContext`
// Your comment here
// usecontext gives us context that can possibly change how we interact with the page.
import React, { createContext, useContext } from 'react';

// TODO: Add a comment describing the React hook that `useProductReducer` makes use of
// Your comment here
// This just gives us access to eh reducer funcitons
import { useProductReducer } from './reducers';

// TODO: Add a comment briefly describing what `createContext` does and what it returns
// Your comment here
// It creates a context for the store.  
const StoreContext = createContext();

const { Provider } = StoreContext;

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useProductReducer({
    products: [],
    cart: [],
    cartOpen: false,
    categories: [],
    currentCategory: '',
  });

  // TODO: Add a comment explaining why we passed a `value` attribute to the `Provider`
  // Your comment here
  return <Provider value={[state, dispatch]} {...props} />;
};

// TODO: Add a comment describing the purpose of our custom `useStoreContext` hook
// Your comment here
const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
