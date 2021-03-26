import React from 'react'
import { RecoilRoot } from 'recoil'
import { Provider } from 'react-redux';
import { createStore as reduxCreateStore } from 'redux';
import { ParallaxProvider } from 'react-scroll-parallax';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
} from '@material-ui/pickers';

import rootReducer from '../../static/utils/redux/index';

const createStore = () => reduxCreateStore(rootReducer);

const RootProvider = ({ element }) => {
    return (
        <Provider store={createStore()}>
            <RecoilRoot>
            <ParallaxProvider>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                {element}
            </MuiPickersUtilsProvider>
            </ParallaxProvider>
            </RecoilRoot>
        </Provider>
    )
}

export default RootProvider