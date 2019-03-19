import React from 'react'
import { object } from 'prop-types'
import Link from 'next/link'
import 'isomorphic-unfetch'

import { API_STUB_URL } from '../config'

const AboutPage = ({ data }) => (
    <div>
        <h1>{data.header}</h1>
        <p>
            <Link href="/"><a>index</a></Link>
        </p>
    </div>
)

AboutPage.getInitialProps = async () => {
    const url = `${API_STUB_URL}/pages/about`
    const params = { method: 'POST' }
    const res = await fetch(url, params)
    const json = await res.json()
    return json
}

AboutPage.propTypes = {
    data: object
}

export default AboutPage