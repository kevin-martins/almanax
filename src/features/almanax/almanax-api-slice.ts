import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { AlmanaxQuery } from '../../models/query'

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        // https://alm.dofusdu.de/dofus/en/ahead/1
        baseUrl: 'https://alm.dofusdu.de/dofus/',
        // prepareHeaders(headers) {
        //     headers.set('x-api-key', "3OWuTUoCOIKPSXixNdjAHQ==0QPsbU4mdPMtdc3X")
        //     return headers
        // }
    }),
    endpoints(builder) {
        return {
            fetchAlmanax: builder.query<{ data: { data: [] } }, AlmanaxQuery>({
                query({ languageSelected, days }) {
                    return `${languageSelected}/ahead/${days}`
                }
            })
        }
    }
})

export const { useFetchAlmanaxQuery } = apiSlice
