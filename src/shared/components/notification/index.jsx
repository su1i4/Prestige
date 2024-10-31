import { FC, ReactNode } from 'react'
import { Toaster } from 'react-hot-toast'

const Natification = ({ children }) => {
	return (
		<>
			<Toaster position='top-center' reverseOrder={false} />
			{children}
		</>
	)
}

export default Natification