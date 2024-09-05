import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { createContext } from 'react'

const SearchParamasContext = createContext({
    a: () => '',
})

const SearchParamasProvider = ({ children }) => {
    // ContextProvider code starts below
    const pathname = usePathname()
    const { replace } = useRouter()
    const searchParams = useSearchParams()

    const searchParamsCallback = (name, value) => {
        const params = new URLSearchParams(searchParams)
        const parsedSearchParams = params.toString()

        params.set(`${name}`, value)
        replace(
            `${pathname}?${parsedSearchParams}`
        )
        const searchParamValue = `${value}`

        return searchParamValue
    }

	return (
		<SearchParamasContext.Provider value={{searchParamsCallback}}>
			{children}
		</SearchParamasContext.Provider>
	)
}

export { SearchParamasContext, SearchParamasProvider }