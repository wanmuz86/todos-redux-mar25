import {Provider} from "react-redux"
import {store} from './app/store'

// We create a Component ReduxProvider, where all children within the component will have access to our store
// store -> state, and actions

export default function ReduxProvider({children}){
    return <Provider store={store}>{children}</Provider>
}