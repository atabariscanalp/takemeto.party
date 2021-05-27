import React, { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react'
import { Spinner } from './Spinner'

const sizeClassnames = {
	large: 'py-4 px-4 text-xl rounded-md',
	medium: 'py-2 px-2 text-base rounded',
	small: 'py-1 px-1 text-xs rounded'
}

const colorClassnames = {
	primary: '',
	secondary: '',
	outline: 'bg-transparent text-inverted border-neutral-100 hover:bg-neutral-100 hover:text-default'
}

export type ButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,HTMLButtonElement> & {
	size?: keyof typeof sizeClassnames
	color?: keyof typeof colorClassnames
	loading?: boolean
	icon?: ReactNode
}

export const Button: React.FC<ButtonProps> = ({
	children,
	size='large',
	color='primary',
	disabled=false,
	icon,
	loading=false,
	className='',
	...props
}) => {
	return (
		<button
			disabled={ disabled || loading }
			className={`flex focus:outline-none focus:ring-2 focus:ring-${color} ${sizeClassnames[size]} ${colorClassnames[color]} 
				items-center justify-center font-normal ${className}`}
			{...props}
		>
			<span className={loading ? 'opacity-0': 'flex item-center justify-center'}>
				{icon ? <span className={'mr-4 items-center'}>{icon}</span> : null}
				{children}
			</span>
			{loading ? (
				<span className={`absolute`}>
					<Spinner size={size === "small" ? "2" : "4"} />
				</span>
			): null}
		</button>
	)
}

