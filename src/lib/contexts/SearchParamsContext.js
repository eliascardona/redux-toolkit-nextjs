import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { createContext, useEffect, useState } from 'react'
import { setSingleURLParam, setURLParamsArray } from '../utils/URLParams'

const SearchParamasContext = createContext([''])

const SearchParamasProvider = ({ children }) => {
    // const pathname = usePathname()
    // const searchParams = useSearchParams()
    const [searchParamsValue, setSearchParamsValue] = useState([''])

    useEffect(() => {
        return () => {
            sea(p => p)
        }
    },[searchParamsValue])


	return (
		<SearchParamasContext.Provider value={{searchParamsValue, setSearchParamsValue}}>
			{children}
		</SearchParamasContext.Provider>
	)
}

export { SearchParamasContext, SearchParamasProvider }