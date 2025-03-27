const loggerMiddleware = (store) => (next) => (action) => {
    console.log("dispatching", action)
    console.log("current store ", store.getState());

    // perform next middleware or action / dispatch the function
    const result = next(action);

    
    console.log("State after action", store.getState());
    return result
}

export default loggerMiddleware;