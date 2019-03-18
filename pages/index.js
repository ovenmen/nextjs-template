import React from 'react'
import { object } from 'prop-types'
import 'isomorphic-unfetch'

const IndexPage = ({ pageData }) => (
    <div>
        <h1>{pageData.pageTitle}</h1>
    </div>
)

IndexPage.getInitialProps = async () => {
    const res = await fetch('http://localhost:3000/api/v1/index')
    const json = await res.json()
    return json
}

IndexPage.propTypes = {
    pageData: object
}

export default IndexPage
