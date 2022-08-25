import { UseFormRegisterReturn } from 'react-hook-form';
import { DetailedHTMLProps, InputHTMLAttributes, useState } from 'react';

export default function Switch(
	props: DetailedHTMLProps<
		InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	> & {
		label: string;
		innerRef?: UseFormRegisterReturn;
	}
) {
	const {
		id,
		label,
		innerRef,
		className,
		checked: check,
		onChange = () => {}
	} = props;
	const [checked, setChecked] = useState(	check);

	return (
		<>
			<label className={`flex cursor-pointer text-xm md:text-sm items-center ${className}`} htmlFor={id}>
				<input
					hidden
					{...props}
					type="checkbox"
					className="hidden"
					onChange={e => {
						onChange(e);
						setChecked(!checked);
					}}
					{...innerRef}
				/>
				<div
					className={`w-12 h-6 relative ${
						checked ? 'bg-blue-600' : 'bg-[#CFD1D5]'
					} rounded-xl flex items-center px-1 mr-2`}
				>
					<div
						className={`w-4 h-4 absolute bg-white rounded-xl ${
							checked ? 'left-7' : 'left-1'
						}`}
					/>
				</div>
				<span className="mv-0 dark">{label}</span>
			</label>
		</>
	);
}
