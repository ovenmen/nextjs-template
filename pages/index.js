import React from 'react'
import { object } from 'prop-types'
import Link from 'next/link'
import 'isomorphic-unfetch'

import { API_STUB_URL } from '../config'

const IndexPage = ({ data }) => (
    <div>
        <h1>{data.header}</h1>
        <p>
            <Link href="/about"><a>about</a></Link>
        </p>
    </div>
)

IndexPage.getInitialProps = async () => {
    const url = `${API_STUB_URL}/pages/index`
    const params = { method: 'POST' }
    const res = await fetch(url, params)
    const json = await res.json()
    return json
}

IndexPage.propTypes = {
    data: object
}

export default IndexPage
