import Pagination from '../Pagination/Pagination';
import { useMemo, useState } from 'react';

export enum ETableType {
	LINE = 'line',
	BORDER = 'border'
}

type TColumnType = {
	name: any;
	key: string;
	defaultValue?: JSX.Element;
};

export type TPageChange = (params: { row: number; page: number }) => void;

interface Props<T = any> {
	data: T[];
	rowSize?: number;
	type?: ETableType;
	totalCount?: number;
	pagination?: boolean;
	currentPage?: number;
	column: TColumnType[];
	onPage?: TPageChange;
}

const TablePag = ({
	type,
	column,
	onPage,
	rowSize,
	totalCount,
	pagination = true,
	currentPage,
	data
}: Props) => {
	const [defaultPage, setDefaultPage] = useState<number>(1);
	const [defaultRow, setDefaultRow] = useState<number>(10);

	const updatePage = (e: any) => {
		setDefaultRow(e.row);
		setDefaultPage(e.page);
	};

	const totalData = () => {
		if (totalCount) {
			return totalCount;
		}
		return data?.length;
	};

	const items = useMemo(() => {
		if (!totalCount && !currentPage && !rowSize && !onPage && pagination) {
			const lastItemIndex = defaultPage * defaultRow;
			const firstItemIndex = lastItemIndex - defaultRow;
			const activeItems = data?.slice(firstItemIndex, lastItemIndex);
			return activeItems;
		} else {
			return [];
		}
	}, [defaultPage, defaultRow, data, currentPage, onPage, pagination, rowSize,totalCount]);

	if (!totalCount && !currentPage && !rowSize && !onPage && pagination) {
	}

	return (
		<>
			{type === 'line' && (
				<div className="bg-white py-4 rounded-lg">
					<table className="table-auto w-full rounded-lg divide-y divide-grey-beau bg-white">
						<thead>
							<tr>
								{column?.map((item, index) => (
									<th
										key={index}
										className="px-6 py-4 text-left text-base font-bold"
									>
										{item.name}
									</th>
								))}
							</tr>
						</thead>
						{data && data.length > 0 ? (
							<>
								<tbody className="divide-y divide-grey-beau">
									{!pagination &&
										data.map((obj, index) => (
											<tr key={index} className="hover:bg-white-azure">
												{column.map((item, index) => (
													<td
														key={index}
														className="px-6 py-5 text-left text-sm"
													>
														{obj[item?.key || item.name] || item.defaultValue}
													</td>
												))}
											</tr>
										))}
									{!totalCount &&
										pagination &&
										items.map((obj, index) => (
											<tr key={index} className="hover:bg-white-azure">
												{column.map((item, index) => (
													<td
														key={index}
														className="px-6 py-5 text-left text-sm"
													>
														{obj[item?.key || item.name] || item.defaultValue}
													</td>
												))}
											</tr>
										))}
									{totalCount &&
										pagination &&
										data.map((obj, index) => (
											<tr key={index} className="hover:bg-white-azure">
												{column.map((item, index) => (
													<td
														key={index}
														className="px-6 py-5 text-left text-sm"
													>
														{obj[item?.key || item.name] || item.defaultValue}
													</td>
												))}
											</tr>
										))}
								</tbody>
							</>
						) : (
							<tbody className="">
								<tr>
									<td
										colSpan={column?.length}
										className="text-center p-10 text-2xl font-bold"
									>
										No data
									</td>
								</tr>
							</tbody>
						)}
					</table>
					{pagination && (
						<div className="px-4">
							<Pagination
								data={data}
								dataLength={totalData()}
								pageSize={rowSize ? rowSize : defaultRow}
								onPageChange={onPage ? onPage : updatePage}
								page={currentPage ? currentPage : defaultPage}
							/>
						</div>
					)}
				</div>
			)}
			{type === ETableType.BORDER && (
				<>
					<table
						className="tb w-full border-separate drop-shadow-lg"
						cellSpacing={0}
						style={{
							borderSpacing: '0 1rem'
						}}
					>
						<thead className="bg-white-azure border border-grey-beau">
							<tr>
								{column?.map((item, index) => (
									<th
										key={index}
										className="px-6 py-4 text-left text-base font-bold"
									>
										{item.name}
									</th>
								))}
							</tr>
						</thead>
						{data && data.length > 0 ? (
							<tbody className="divide-y divide-grey-beau">
								{!pagination &&
									data.map((obj, index) => (
										<tr key={index} className="bg-white hover:bg-white-azure">
											{column.map((item: any, index) => (
												<>
													<td
														key={index}
														className="border-y-8 border-white-azure px-6 py-5 text-left text-sm tracking-wider"
													>
														{obj[item?.key || item.name] || item.defaultValue}
													</td>
												</>
											))}
										</tr>
									))}
								{!totalCount &&
									pagination &&
									items.map((obj, index) => (
										<tr key={index} className="bg-white hover:bg-white-azure">
											{column.map((item: any, index) => (
												<>
													<td
														key={index}
														className="border-y-8 border-white-azure px-6 py-5 text-left text-sm tracking-wider"
													>
														{obj[item?.key || item.name] || item.defaultValue}
													</td>
												</>
											))}
										</tr>
									))}
								{totalCount &&
									pagination &&
									data.map((obj, index) => (
										<tr key={index} className="bg-white hover:bg-white-azure">
											{column.map((item: any, index) => (
												<>
													<td
														key={index}
														className="border-y-8 border-white-azure px-6 py-5 text-left text-sm tracking-wider"
													>
														{obj[item?.key || item.name] || item.defaultValue}
													</td>
												</>
											))}
										</tr>
									))}
							</tbody>
						) : (
							<tbody className="divide-y divide-grey-slate">
								<tr>
									<td
										colSpan={column?.length}
										className="text-center p-10 text-2xl font-bold"
									>
										No data
									</td>
								</tr>
							</tbody>
						)}
					</table>
					{pagination && (
						<div className="px-4">
							<Pagination
								data={data}
								dataLength={totalData()}
								pageSize={rowSize ? rowSize : defaultRow}
								onPageChange={onPage ? onPage : updatePage}
								page={currentPage ? currentPage : defaultPage}
							/>
						</div>
					)}
				</>
			)}
		</>
	);
};

export default TablePag;
