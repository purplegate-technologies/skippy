

import {useState} from 'react'
import './table.css'

interface Props<T = any> {
    limit?: number
    headData?: string[]
	// bodyData?: T[];
	bodyData?: any;
	// type?: ETableType;
	// column?: TColumnType[];
    renderBody:   (n: any, b: number) => JSX.Element
    renderHead: (n: any, b: number) => JSX.Element
    isSuccess?: boolean
    isFetching?: boolean
}

const Table = ({limit, renderHead, bodyData, headData, renderBody, isFetching}: Props) => {

    const initDataShow = limit && bodyData ? bodyData.slice(0, (limit)) : bodyData

    const [dataShow, setDataShow] = useState(initDataShow)
    const [currPage, setCurrPage] = useState(0)

    // new
    const [pageNumberLimit, setpageNumberLimit] = useState(5);
    const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
    const [minPageNumberLimit, setminPageNumberLimit] = useState(1);
    // let pages = 1
    let pages: number | number[] | any = 1

    let range: number[] = []

    if (limit !== undefined) {
        let page = Math.floor(bodyData?.length / (limit))
        pages = bodyData?.length % (limit) === 0 ? page : page + 1
        // range = [...Array(pages).keys()]
        range = [...Array(pages)]
    }


    const selectPage = (page: number) => {
        const start = Number(limit) * page
        const end = start + Number(limit)

        // setDataShow(bodyData.slice(start, end))

        setCurrPage(page)
    }


    const handleNextbtn = () => {
        setCurrPage(currPage + 1);
        selectPage(currPage + 1)

        if (currPage + 1 > maxPageNumberLimit) {
          setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
          setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
        }
      };

      const handlePrevbtn = () => {
        setCurrPage(currPage - 1);
        // selectPage(currPage - 1)

        if ((currPage - 1) % pageNumberLimit === 0) {
          setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
          setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
        }
      };


        let pageIncrementBtn = null;
        if (pages.length > maxPageNumberLimit) {
            pageIncrementBtn = <li onClick={handleNextbtn}> &hellip; </li>;
        }

        let pageDecrementBtn = null;
        if (minPageNumberLimit >= 1) {
            pageDecrementBtn = <li onClick={handlePrevbtn}> &hellip; </li>;
        }

//   const handleLoadMore = () => {
//     setitemsPerPage(itemsPerPage + 5);
//   };

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
                    {isFetching ? "isFetching Data" : <>
                    {
                        bodyData && bodyData?.length !== 0 ? (
                            <tbody>
                                {
                                    dataShow?.map((item: any, index: number) => renderBody(item, index))
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
                <div style={{display:'flex', alignItems:'center'}}>
                    <select className='tableSelectDropDown'>
                        <option disabled>Items per page</option>
                        <option>10</option>
                        <option>50</option>
                        <option>100</option>
                    </select>
                    {" "}
                    <span style={{marginLeft:'10px'}}>Items per page</span>
                </div>
                {pages > 0 ? (
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
                }
                {/* default
                {
                    range.slice(0, 5).map((item, index) => (
                        <div key={index} className={`table__pagination-item ${currPage === index && 'active'}`} onClick={() => selectPage(index)}>
                            {item + 1}
                        </div>
                    ))
                } */}
            </div>
        </div>
    )
}

export default Table
