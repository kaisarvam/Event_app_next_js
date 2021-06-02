import React, { Fragment } from 'react'
import MainHeader from './main-header'

export default function layout(props) {
    return (
    <Fragment>
        <MainHeader/>
        <main>
            {props.children}
        </main>
    </Fragment>
    )
}
