import { usePathname, useRouter, useSearchParams } from 'next/navigation'



const setURLParamsArray = (searchParamsArray=[{key:'',value:''}]) => {
    const searchParams = useSearchParams()
    const params = new URLSearchParams(searchParams)
    // Library dependencies starts below
    const pathname = usePathname()
    const router = useRouter()

    searchParamsArray.forEach(
        (param, i) => params.set(`${param.key}`, value)
    )
    const paramsArray = params.getAll()
    let querystring = ''
    paramsArray.forEach(
        (p, i) => querystring+=`&${p}`
    )

    router.replace(
        `${pathname}?${querystring}`
    )
}



const setSingleURLParam = (searchParamsArray=[{key:'',value:''}]) => {
    // const searchParams = useSearchParams()
    // const params = new URLSearchParams(searchParams)
    // Library dependencies starts below
    const pathname = usePathname()
    const router = useRouter()

    const { key, value } = searchParamsArray[0]

    router.replace(
        `${pathname}?${key}=${value}`
    )

}



export { setSingleURLParam, setURLParamsArray }