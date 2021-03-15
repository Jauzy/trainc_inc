import React from 'react'
import { RecoilRoot } from 'recoil'

const Providers = ({ element }) => {
    return (
        <RecoilRoot>
            {element}
        </RecoilRoot>
    )
}

export default Providers