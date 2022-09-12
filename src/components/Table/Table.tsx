import { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate';
import './table.css'

interface Props<T = any> {
    limit?: number
    headData?: string[]
    // bodyData?: T[];
    bodyData?: any;
    // type?: ETableType;
    // column?: TColumnType[];
    renderBody: (n: any, b: number) => JSX.Element
    renderHead: (n: any, b: number) => JSX.Element
    isSuccess?: boolean
    isFetching?: boolean
}

const Table = ({ limit, renderHead, bodyData, headData, renderBody, isFetching }: Props) => {

    const itemsPerPage = 3

    // for react paginate

    // We start with an empty list of items.setCurrentItems
    const [currentItems, setCurrentItems] = useState(bodyData);
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

    // Invoke when user click to request another page.
    const handlePageClick = (event: any) => {
        const newOffset = (event.selected * itemsPerPage) % bodyData.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    // end of react paginate


    // const initDataShow = limit && bodyData ? bodyData.slice(0, (limit)) : bodyData


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
                    {isFetching ? <td className='text-center w-full p-5 text-2l font-bold'>isFetching Data</td> : <>
                        {
                            currentItems && (currentItems !== null || undefined) ? (
                                <tbody>
                                    {
                                        // dataShow?.map((item: any, index: number) => renderBody(item, index))
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
                </table>
            </div>

            <div className='footerPagination'>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <select
                        // value={currPage}
                        className='tableSelectDropDown' onChange={(e: React.ChangeEvent<HTMLSelectElement>) => { }
                        }>
                        <option disabled>Items per page</option>
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                    </select>
                    {" "}
                    <span style={{ marginLeft: '10px' }}>Items per page</span>
                </div>
                {/* {pages > 0 ? (
                        <div className="table__pagination">
                            <button onClick={handlePrevbtn} disabled={currPage === pages[0] ? true : false}>Prev</button>
                               {range.map((item: any, index: number) => {
                                    if (item < maxPageNumberLimit + 1 && item > minPageNumberLimit) {
                                    return <div key={index} className={`table__pagination-item ${currPage === index && 'active'}`} onClick={() => selectPage(index)}>
                                        {item}
                                    </div>
                                    } else {
                                        return null
                                    }
                                })}
                            <button onClick={handleNextbtn} disabled={currPage === pages[pages.length - 1] ? true : false}>Next</button>
                        </div>
                    ) : null
                } */}

                {/* {pages > 0 && (<>
                    <div className="table__pagination">
                        {

                            range.slice(0, 5).map((item, index) => (
                                <div key={index} className={`table__pagination-item ${currPage === index && 'active'}`} onClick={() => selectPage(index)}>
                                    {item + 1}
                                </div>
                            ))
                        }
                    </div>
                </>)} */}

                <ReactPaginate
                    pageCount={pageCount}
                    onPageChange={handlePageClick}
                    //   pageCount={Math.floor(results.numberOfResults / size)}
                    disabledClassName="disabled"
                    initialPage={1}
                    nextLabel="next >"
                    previousLabel="< previous"
                    breakLabel="..."
                    breakClassName="break-me"
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    //   subContainerClassName="pages pagination"
                    //   subContainerClassName="table__pagination"
                    breakLinkClassName="page-link"
                    containerClassName="table__pagination"
                    pageClassName="table__pagination-item"
                    pageLinkClassName="table__pagination-item"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    activeClassName="active"
                />
            </div>
        </div>
    )
}

export default Table
