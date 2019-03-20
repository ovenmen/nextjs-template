import React from 'react'
import { number, object } from 'prop-types'
import Link from 'next/link'

import fetchDataPage from '../utils/fetch-data-page'

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

Error.getInitialProps = fetchDataPage('error')

Error.propTypes = {
    statusCode: number,
    data: object
}

export default Error
