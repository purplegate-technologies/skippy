import { useState } from 'react';
import { ClickOutside } from '../../app/useClickOutside';
// import { AIarrowdownbol, AIarrowup1Bol } from 'arvara-icons';

interface IRows {
	rowSize: number;
	rowSizeChange?: (no: number) => void;
	reset: () => void;
}

const PageRow = ({ rowSize, rowSizeChange, reset }: IRows) => {
	const size = [5, 10, 20];
	const [dropdown, setDropdown] = useState(false);
	return (
		<ClickOutside onclickoutside={() => setDropdown(false)}>
			<div className="relative">
				<div className="flex gap-2 items-center cursor-pointer">
					<div
						onClick={() => setDropdown(!dropdown)}
						className="rounded border border-grey-beau px-2 py-1 flex items-center gap-1 cursor-pointer"
					>
						<p>{rowSize}</p>
						<p className="text-black">
							{dropdown ? (
								// <AIarrowup1Bol width={18} height={18} />
                                <>
                                >
                                </>
							) : (
								// <AIarrowdownbol width={18} height={18} />
                                <>
                                <
                                </>
							)}
						</p>
					</div>
					<p className="text-md">Rows/page</p>
				</div>
				<div
					className={`
				w-12
				flex
				flex-col
				gap-4
				items-center
				absolute
				z-10
				bg-white
				py-2
				mt-1
				bottom-10
				rounded
				border
				border-grey-beau
				${dropdown ? 'block' : 'hidden'}`}
				>
					{size &&
						size.map((item: number) => (
							<p
								key={item}
								onClick={() => {
									rowSizeChange && rowSizeChange(item);
									setDropdown(false);
									reset();
								}}
								className="hover:bg-white-azure rounded-lg cursor-pointer py-1 px-4"
							>
								{item}
							</p>
						))}
				</div>
			</div>
		</ClickOutside>
	);
};

export default PageRow;
