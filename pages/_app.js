import React from 'react'
import App, { Container } from 'next/app'

import Layout from '../layouts/layout'

export default class extends App {
    render () {
        const { Component, pageProps } = this.props
        return (
            <Container>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </Container>
        )
    }
}
