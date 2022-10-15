import { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate';
// import Row from '../Pagination/Row/Row';
import './table.css'

interface Props<T = any> {
    limit?: number
    headData?: string[]
    bodyData?: any;
    renderBody: (n: any, b: number) => JSX.Element
    renderHead: (n: any, b: number) => JSX.Element
    isSuccess?: boolean
    isFetching?: boolean
    isLoading?: boolean
}

const Table = ({ limit, renderHead, bodyData, headData, renderBody, isFetching, isLoading }: Props) => {

    const [itemsPerPage, setItemsPerPage] = useState(10)

    // for react paginate

    // We start with an empty list of items.setCurrentItems
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        // Fetch items from another resources.
        const endOffset = itemOffset + itemsPerPage;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(bodyData.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(bodyData.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, bodyData]);

    useEffect(() => {
        setCurrentItems(bodyData);
    }, [bodyData])

    // Invoke when user click to request another page.
    const handlePageClick = (event: any) => {
        const newOffset = (event.selected * itemsPerPage) % bodyData.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    return (
        <div>
            <div className="table-wrapper">
                <table>
                    {
                        headData && renderHead ? (
                            <thead>
                                <tr>
                                    {
                                        headData.map((item: any, index: number) => renderHead(item, index))
                                    }
                                </tr>
                            </thead>
                        ) : null
                    }
                    {isLoading ? (
                        <table>
                            <tbody className=''>
                                <tr>
                                    <td className='text-center w-full p-5 text-2l font-bold'>Loading Data...</td>
                                </tr>
                            </tbody>
                        </table>
                    )
                        :
                        (<>
                            {isFetching ? <td className='text-center w-full p-5 text-2l font-bold'>Fetching Data</td> :
                                <>
                                    {
                                        currentItems && (currentItems.length > 0 || currentItems !== undefined || !null) ? (
                                            <tbody className='border border-[#F1F3FF]'>
                                                {
                                                    currentItems?.map((item: any, index: number) => renderBody(item, index))
                                                }
                                            </tbody>
                                        ) : (
                                            <tbody className=''>
                                                <tr>
                                                    <td className='text-center w-full p-5 text-2l font-bold'>No Data</td>
                                                </tr>
                                            </tbody>
                                        )
                                    }
                                </>}
                        </>)}

                </table>
            </div>

            <div className='footerPagination'>
                <div style={{ display: 'flex', alignItems: 'center' }}>

                    {/* <Row
                        rowSize={itemsPerPage}
                        rowSizeChange={() => null}
                        // reset={() => false}
                    /> */}
                    <select
                        value={itemsPerPage}
                        className='tableSelectDropDown'
                        onChange={(e: React.ChangeEvent<HTMLSelectElement | any>) => { setItemsPerPage(e.target.value) }
                        }>
                        <option disabled>Items per page</option>
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                    </select>
                    {" "}
                    <span style={{ marginLeft: '10px' }}>Items per page</span>
                </div>


                <ReactPaginate
                    pageCount={pageCount}
                    onPageChange={handlePageClick}
                    disabledClassName="disabled"
                    // initialPage={0}
                    nextLabel="next >"
                    previousLabel="< previous"
                    breakLabel="..."
                    breakClassName="break-me"
                    marginPagesDisplayed={2}
                    // pageRangeDisplayed={5}
                    breakLinkClassName="page-link"
                    containerClassName="table__pagination"
                    pageClassName="table__pagination-item"
                    pageLinkClassName="table__pagination-item"
                    previousClassName="page-item mr-3"
                    previousLinkClassName="page-link"
                    nextClassName="page-item ml-3"
                    nextLinkClassName="page-link"
                    activeClassName="active"
                    activeLinkClassName="active"
                />
            </div>
        </div>
    )
}

export default Table
