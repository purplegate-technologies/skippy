// import { UseFormRegisterReturn } from 'react-hook-form';
import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

type Props = {
	label?: string;
	tooltip?: string;
	helptext?: string;
	inputClassName?: string;
	LeadingIcon?: () => JSX.Element;
	TrailingIcon?: () => JSX.Element;
	innerRef?: any;
	inputType?: 'default' | 'success' | 'warning' | 'error';
};

export default function Input(
	props: DetailedHTMLProps<
		InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	> &
		Props
) {
	const {
		id,
		label,
		tooltip,
		disabled,
		readOnly,
		helptext,
		innerRef,
		className,
		LeadingIcon,
		TrailingIcon,
		inputClassName,
		inputType = 'default'
	} = props;

	const col = () => {
		let color = 'grey-beau';

		if (inputType === 'success') {
			color = 'meador';
		} else if (inputType === 'warning') {
			color = 'yellow';
		} else if (inputType === 'error') {
			color = 'orange';
		}

		return color;
	};

	return (
		<div className={`bg- ${className}`}>
			{label && (
				<label
					className="my-1 text-black flex items-center text-left text-sm font-semibold"
					htmlFor={id}
				>
					{label}
					{tooltip && (
						<>
							{/* <Icon
								icon="info-circle"
								{...labelIconProps}
								className={`inline-block ml-2 ${labelIconProps?.className}`}
							/> */}
						</>
					)}
				</label>
			)}
			<div
				className={`
                border-[#949AB1] outline-none border-2
               bg-white flex items-center w-full rounded-lg overflow-hidden focus-within:border-bluetiful disabled:bg-grey read-only:bg-grey
                ${inputClassName} border-${col()} ${
					(disabled || readOnly) && 'bg-grey border-none'
				}`}
			>
				{LeadingIcon && (
					<span className="mx-2">
						<LeadingIcon />
					</span>
				)}
				<input
					{...innerRef}
					{...props}
					className={`text-base p-2 flex-grow min-w-64`}
				/>
				{TrailingIcon && (
					<span className="mx-2">
						<TrailingIcon />
					</span>
				)}
			</div>
			{helptext && (
				<small className={`text-xs my-2 text-${col()}`}>{helptext}</small>
			)}
		</div>
	);
}
