import {useState} from 'react'
import './table.css'

const Table = (props) => {

    const initDataShow = props.limit && props.bodyData ? props.bodyData.slice(0, Number(props.limit)) : props.bodyData

    const [dataShow, setDataShow] = useState(initDataShow)
    const [currPage, setCurrPage] = useState(0)

    // new
    const [pageNumberLimit, setpageNumberLimit] = useState(5);
    const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
    const [minPageNumberLimit, setminPageNumberLimit] = useState(0);
    // let pages = 1
    let pages = 1

    let range = []

    if (props.limit !== undefined) {
        let page = Math.floor(props.bodyData.length / Number(props.limit))
        pages = props.bodyData.length % Number(props.limit) === 0 ? page : page + 1
        range = [...Array(pages).keys()]
    }


    const selectPage = (page) => {
        const start = Number(props.limit) * page
        const end = start + Number(props.limit)

        setDataShow(props.bodyData.slice(start, end))

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
                        props.headData && props.renderHead ? (
                            <thead>
                                <tr>
                                    {
                                        props.headData.map((item, index) => props.renderHead(item, index))
                                    }
                                </tr>
                            </thead>
                        ) : null
                    }
                    {
                        props.bodyData && props.renderBody ? (
                            <tbody>
                                {
                                    dataShow.map((item, index) => props.renderBody(item, index))
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
                            <button onClick={handlePrevbtn} disabled={currPage == pages[0] ? true : false}>Prev</button>                            
                               {range.map((item, index) => {
                                    if (item < maxPageNumberLimit + 1 && item > minPageNumberLimit) {
                                    return <div key={index} className={`table__pagination-item ${currPage === index && 'active'}`} onClick={() => selectPage(index)}>
                                        {item}
                                    </div>                                        
                                    } else {
                                        return null
                                    }
                                })}
                            <button onClick={handleNextbtn} disabled={currPage == pages[pages.length - 1] ? true : false}>Next</button>
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