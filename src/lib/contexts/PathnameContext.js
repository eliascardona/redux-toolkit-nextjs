import { usePathname } from 'next/navigation'
import { createContext, useMemo } from 'react'

const PathnameContext = createContext([''])

const PathnameProvider = ({ children }) => {
	let currentPathname = usePathname()
	let currPath = usePathname()
	let parsedPath = currentPathname.slice(1)
	let auxPath = currPath.split('/')
	
	const memoizedPaths = useMemo(() => {
		let pathsArray = ['']
		let firstPath = ''
		let secondPath = ''
		let thirdPath = ''
		
		if(parsedPath.includes('/')) {
			firstPath = auxPath[1]
			secondPath = auxPath[2]
			thirdPath = auxPath[3]
			pathsArray.push(firstPath, secondPath, thirdPath)

		} else {
			firstPath = parsedPath
			pathsArray.push(firstPath)
		}

		return pathsArray
	}, [parsedPath])

	return (
		<PathnameContext.Provider value={memoizedPaths}>
			{children}
		</PathnameContext.Provider>
	)
}

export { PathnameContext, PathnameProvider }