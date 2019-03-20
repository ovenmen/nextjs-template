import React from 'react'
import { object } from 'prop-types'
import Link from 'next/link'

import fetchDataPage from '../utils/fetch-data-page'

const AboutPage = ({ data }) => (
    <div>
        <h1>{data.header}</h1>
        <p>
            <Link href="/"><a>index</a></Link>
        </p>
    </div>
)

AboutPage.getInitialProps = fetchDataPage('about')

AboutPage.propTypes = {
    data: object
}

export default AboutPage
