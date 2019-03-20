import React from 'react'
import { number, object } from 'prop-types'
import Link from 'next/link'
import 'isomorphic-unfetch'

import { API_STUB_URL } from '../config'

const Error = ({ statusCode, data }) => (
    <section>
        <h1>{data.header}</h1>
        <p>
            {statusCode ? `An error ${statusCode} occurred on server` : 'An error occurred on client'}
        </p>
        <p>
            Вернуться на <Link href="/"><a>главную</a></Link>
        </p>
    </section>
)

Error.getInitialProps = async ({ err, res }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null
    const url = `${API_STUB_URL}/pages/error`
    const params = { method: 'POST' }
    const response = await fetch(url, params)
    const json = await response.json()
    return { data: json.data, statusCode }
}

Error.propTypes = {
    statusCode: number,
    data: object
}

export default Error
