import {useState, useEffect} from 'react'
import CreateAdsPlus from '../../assets/svg/CreateAdsPlus'
import SearchBar from '../../components/support/SearchBar'
import Table from '../../components/Table/Table'
import { useNavigate, Link } from 'react-router-dom'
import advertlist from "../../assets/jsonData/advert-list.json"
import TablePag, { ETableType } from '../../components/Table/TablePag'



const column = [
  {
    name: 'App (ID)',
    key: 'id'
  },
  {
    name:  'User TYPE',
    key: 'email'
  },
  {
    name: 'Registration  Date',
    key: 'date',
  },
  {
    name: 'Last Active time',
    key: 'location'
  },
  {
    name: 'Status',
    key: 'five'
  },
  {
    name:'Action',
    key: 'six'
  }
];

const data = [
  {
    one: 'data1',
    two: 'data2',
    three: 'data',
    four: 'data4'
  },
  {
    one: 'data1',
    two: 'data2',
    // three: 'data3',
    four: 'data4'
  },
  {
    one: 'data1',
    two: 'data2',
    three: 'data3',
    four: 'data4'
  }
];



const customerTableHead = [
  'App (ID)',
  'User TYPE',
  'Registration  Date',
  'Last Active time',
  'Status',
  'Action',
  // 'location'
]

const renderHead = (item: any, index: number) => <th key={index}>{item}</th>

const renderBody = (item: any, index: number) => (
  <tr key={index}>
    <td>{item.id}</td>
    <td>{item.name}</td>
    <td>{item.email}</td>
    <td>{item.phone}</td>
    <td>{item.total_orders}</td>
    {/* <td>{item.total_spend}</td> */}
    <td><Link to="/user-details" className='underline text-blue-600'>{item.location}</Link></td>
  </tr>
)

const Administrators = () => {
  const navigate = useNavigate()

  const [currentPage, setCurrentPage] = useState<number>(1);
	const [rowSize, setRowSize] = useState<number>(10);
	const [content, setContent] = useState([]);

	const onPage = (e: any) => {
		setRowSize(e.row);
		setCurrentPage(e.page);
	};

	const getData = () => {
		fetch(
			`https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=${rowSize}`
		)
			.then(response => response.json())
			.then(json => setContent(json));
	};

	useEffect(() => {
		getData();
	}, [currentPage, rowSize]);

  return (
    <div>
      <div className="card">
        <SearchBar HeaderTitle='Administrators' text="Create Admin" onClick={() => navigate('/settings')} prefixIcon={<CreateAdsPlus />} />

        {/* tab end */}
        <div className="row">
          <div className="col-12">
            <div className="">
              {/* Tabs */}
              <div className="card__body">
                <Table
                     limit={10}
                      headData={customerTableHead}
                      renderHead={(item: any, index: number) => renderHead(item, index)}
                      bodyData={advertlist}
                      renderBody={(item: any, index: number) => renderBody(item, index)}
                />

                {/* <TablePag /> */}

                <div className="p-8 bg-other-ghost">
                </div>
                {/* <TablePag type={ETableType.LINE}  column={column} data={advertlist} /> */}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Administrators
