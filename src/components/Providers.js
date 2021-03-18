import React from 'react'
import { RecoilRoot } from 'recoil'
import { Provider } from 'react-redux';
import { createStore as reduxCreateStore } from 'redux';

import rootReducer from '../../static/utils/redux/index';

const createStore = () => reduxCreateStore(rootReducer);

const RootProvider = ({ element }) => {
    return (
        <Provider store={createStore()}>
            <RecoilRoot>
                {element}
            </RecoilRoot>
        </Provider>
    )
}

export default RootProvider