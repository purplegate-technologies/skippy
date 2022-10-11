/* eslint-disable @typescript-eslint/no-unused-expressions */
import Row from './Row/Row';
import { useState, useMemo, useEffect } from 'react';
// import Down from "../Pagination//Row/down.svg"
import { TPageChange } from '../Table/TablePag';

interface IPagination {
	page?: number;
	data?: any[];
	pageSize?: number;
	dataLength: number;
	onPageChange?: TPageChange;
}
const Pagination = ({
	data,
	page = 1,
	dataLength,
	onPageChange,
	pageSize = 10
}: IPagination): JSX.Element => {
	//let items: any = [];
	const pages: number[] = [];
	const [from, setFrom] = useState<number>(1);
	const [to, setTo] = useState<number>(pageSize);
	const [reset, setReset] = useState<boolean>(false);
	const [endIndex, setEndIndex] = useState<number>(5);
	const [startIndex, setStartIndex] = useState<number>(0);
	const [hidePage, setHidePage] = useState<boolean>(false);

	const currentPageLength = () => {
		return Math.ceil(dataLength / pageSize);
	};

	// if (data) {
	// 	items = useMemo(() => {
	// 		const lastItemIndex = page * pageSize;
	// 		const firstItemIndex = lastItemIndex - pageSize;
	// 		const activeItems = data?.slice(firstItemIndex, lastItemIndex);
	// 		return activeItems;
	// 	}, [page, pageSize]);
	// }

	const pageIndex = useMemo(() => {
		setTo(pageSize * page);
		setFrom(pageSize * page - pageSize + 1);
	}, [page, pageSize, to, from]);

	for (let x: number = 1; x <= currentPageLength(); x++) {
		pages.push(x);
	}

	const pageNext = () => {
		if (page >= endIndex) {
			setStartIndex(prev => prev + 5);
			setEndIndex(prev => prev + 5);
			onPageChange && onPageChange({ row: pageSize, page: page + 1 });
		} else {
			onPageChange && onPageChange({ row: pageSize, page: page + 1 });
		}
		pageIndex;
	};

	const pagePrevious = () => {
		if (page <= startIndex + 1) {
			setStartIndex(prev => prev - 5);
			setEndIndex(prev => prev - 5);
			onPageChange && onPageChange({ row: pageSize, page: page - 1 });
		} else {
			onPageChange && onPageChange({ row: pageSize, page: page - 1 });
		}
		pageIndex;
	};

	const pageLast = () => {
		setStartIndex(pages.length - 5);
		setEndIndex(pages.length);
		onPageChange && onPageChange({ row: pageSize, page: pages.length });
		pageIndex;
	};

	const resetPage = () => {
		setStartIndex(0);
		setEndIndex(5);
		onPageChange && onPageChange({ row: pageSize, page: 1 });
	};

	const resetTrigger = () => {
		setReset(!reset);
	};

	useEffect(() => {
		resetPage();
	}, [reset]);

	const updateRow = (r: number) => {
		onPageChange && onPageChange({ row: r, page: page });
	};

	useEffect(() => {
		if (pages.length - 5 === startIndex) {
			setHidePage(true);
		}
		if (pages[pages.length - 1] === pages[endIndex - 1]) {
			setHidePage(true);
		}
		return () => setHidePage(false);
	}, [page, pageSize]);

	return (
		<div className="mt-10">
			<div className="flex md:justify-between justify-center items-center">
				<div className="md:block hidden">
					<Row
						rowSize={pageSize}
						rowSizeChange={updateRow}
						reset={resetTrigger}
					/>
				</div>
				<div className="flex gap-2 items-center">
					<div className="md:block hidden">
						<p className="text-md">
							{from}-{to} of {dataLength} Items
						</p>
					</div>
					<div className="flex gap-2">
						<button
							disabled={!(page > 1)}
							className={`
						w-8
						h-8
						rounded
						border
						border-grey-beau
						text-blue
						flex
						items-center
						justify-center
						focus:bg-blue
						focus:text-white
						tb-btn
						disabled:text-grey-beau
						`}
							onClick={pagePrevious}
						>
							{/* <AIarrowleft2Outlin /> */}
                            Left
						</button>
						{pages.length > 0 && (
							<div className="flex gap-1">
								{pages.length > 0 &&
									pages.slice(startIndex, endIndex).map((no, i) => (
										<button
											className={`
                                    w-8
                                    h-8
									${page === no ? `text-black` : `text-grey-beau`}
									${page === no ? `font-bold` : `font-normal`}
                                    rounded
                                    flex
                                    items-center
                                    justify-center
                                    focus:ring
									text-md
                                    hover:text-black
									`}
											key={i}
											onClick={() => {
												onPageChange
													? onPageChange({ row: pageSize, page: no })
													: '';
												pageIndex;
											}}
										>
											{no}
										</button>
									))}
								{page !== pages.length && !hidePage && (
									<div className="flex items-center gap-1">
										<p>...</p>
										<button
											className={`
										w-8
										h-8
										${page === pages.length ? `text-black` : `text-grey-beau`}
										${page === pages.length ? `font-bold` : `font-normal`}
										rounded
										flex
										items-center
										justify-center
										focus:ring
										text-md
										hover:text-black
										`}
											onClick={() => {
												pageLast();
											}}
										>
											{pages.length}
										</button>
									</div>
								)}
							</div>
						)}
						<button
							disabled={page === pages.length || !pages.length}
							className={`
						w-8
						h-8
						rounded
						border
						border-grey-beau
						text-blue
						flex
						tb-btn
						items-center
						justify-center
						focus:bg-blue
						focus:text-white
						disabled:text-grey-beau
						`}
							onClick={pageNext}
						>
                            {/* <AIarrowright3Outlin /> */}
                            Right
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Pagination;
