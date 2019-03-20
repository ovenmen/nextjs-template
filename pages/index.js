import React from 'react'
import { object } from 'prop-types'
import Link from 'next/link'

import fetchDataPage from '../utils/fetch-data-page'

const IndexPage = ({ data }) => (
    <div>
        <h1>{data.header}</h1>
        <p>
            <Link href="/about"><a>about</a></Link>
        </p>
    </div>
)

IndexPage.getInitialProps = fetchDataPage('index')

IndexPage.propTypes = {
    data: object
}

export default IndexPage
