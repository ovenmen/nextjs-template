import 'isomorphic-unfetch'

import { API_STUB_URL } from '../config'

const fetchDataPage = (namePage) => async ({ err, res }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null
    const url = `${API_STUB_URL}/pages/${namePage}`
    const params = { method: 'POST' }
    const response = await fetch(url, params)
    const json = await response.json()

    return {
        data: json.data,
        statusCode
    }
}

export default fetchDataPage
