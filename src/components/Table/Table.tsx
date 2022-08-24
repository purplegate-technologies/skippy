import {ReactNode, useState} from 'react'
import './table.css'


interface tableProps {
    limit: string
    // remove: (n: string) => void;
    headData: string[]
    renderHead: any
    renderBody: any
    bodyData: {}[]

}
const Table = ({limit, headData, renderBody, renderHead, bodyData}: tableProps) => {

    const initDataShow = limit && bodyData ? bodyData.slice(0, Number(limit)) : bodyData

    const [dataShow, setDataShow] = useState(initDataShow)
    const [currPage, setCurrPage] = useState(0)

    // new
    const [pageNumberLimit, setpageNumberLimit] = useState(5);
    const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
    const [minPageNumberLimit, setminPageNumberLimit] = useState(0);
    // let pages = 1
    const pages: number | any = 1

    const range: Array<number> = []

    if (limit !== undefined) {
        let page = Math.floor(bodyData.length / Number(limit))
        pages = bodyData.length % Number(limit) === 0 ? page : page + 1
        range = [...Array(pages).keys()]
    }


    const selectPage = (page: number) => {
        const start = Number(limit) * page
        const end = start + Number(limit)

        setDataShow(bodyData.slice(start, end))

        setCurrPage(page)
    }


    const handleNextbtn = () => {
        setCurrPage(currPage + 1);
        selectPage(currPage + 1)

        if (currPage + 1 > maxPageNumberLimit) {
          setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
          setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
        }
      }

      const handlePrevbtn = () => {
        setCurrPage(currPage - 1);
        // selectPage(currPage - 1)

        if ((currPage - 1) % pageNumberLimit == 0) {
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
                                        headData.map((item, index) => renderHead(item, index))
                                    }
                                </tr>
                            </thead>
                        ) : null
                    }
                    {
                        bodyData && renderBody ? (
                            <tbody>
                                {
                                    dataShow.map((item, index) => renderBody(item, index))
                                }
                            </tbody>
                        ) : null
                    }
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
                {pages > 1 ? (
                        <div className="table__pagination">
                            <button onClick={handlePrevbtn} disabled={currPage === pages[0] ? true : false}>Prev</button>
                               {range.map((item, index) => {
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
