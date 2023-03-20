import React from 'react'
import {StyledButton} from '@/components/button.styled'

interface ButtonProps {
	onClick?: () => void,
}

export const Button = (props: React.PropsWithChildren<ButtonProps>) => {
	const {children, onClick} = props
	
	return (
		<StyledButton
			type='button'
			onClick={onClick}>
			{children}
		</StyledButton>
	)
}
