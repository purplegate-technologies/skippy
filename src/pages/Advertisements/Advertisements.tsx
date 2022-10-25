import './advertisements.css'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Table from '../../components/Table/Table'
import { UserData } from '../../assets/data/data'
import ThreeVdots from '../../assets/svg/ThreeVdots'
import SearchBar from '../../components/support/SearchBar'
import { useGetAdvertStatsQuery } from '../../features/stats/statsApis'
import { useGetAdvertAdminQuery } from '../../features/adverts/AdvertsApiSlice'
import CategoryFilter from '../../components/CategoryFilter/CategoryFilter'
import LinearGradientChart from '../../components/charts/LinearGradientChart'
import StatusCardIcon from '../../assets/svg/StatusCardIcon'
import CreateAdsPlus from '../../assets/svg/CreateAdsPlus'



const Advertisements = () => {
  const [iconState, setIconState] = useState<string>("")

  const [userData] = useState({
    labels: UserData.map((data) => data.day.toUpperCase()),
    datasets: [
      {
        label: "Ads Watched",
        data: UserData.map((data) => data.adsWatched),
        backgroundColor: "#2a71d0",
        borderColor: "#2a71d0",
        borderWidth: 2,
      },
    ],
  })

  const [externalGraph, setExternalGraph] = useState(userData)
  const [internalGraph, setInternalGraph] = useState(userData)
  const { data } = useGetAdvertStatsQuery()
  const { data: getAds, isLoading, isFetching } = useGetAdvertAdminQuery({})

  const navigate = useNavigate()


  // InternalGraph
  useEffect(() => {
    // weekly stats
    if (data && data?.graphStats) {
      const internalAdsStats: string[] = [];
      const internalAdsStatsValue: number[] = [];

      Object.entries(data?.graphStats?.internalAdsStats).map(val => {
        internalAdsStats.push(val[0]);
        //@ts-ignore
        internalAdsStatsValue.push(val[1]);
      });


      setInternalGraph({
        labels: internalAdsStats.map(data => data.toUpperCase()),
        datasets: [
          {
            label: "Ads Watched",
            data: internalAdsStatsValue.map((data) => data),
            backgroundColor: "#2a71d0",
            borderColor: "#2a71d0",
            borderWidth: 1,
          },
        ]
      });

    }

  }, [data]);

  //  ExternalGraph

  useEffect(() => {
    // weekly stats
    if (data && data?.graphStats) {
      const externalAdsStats: string[] = [];
      const externalAdsStatsValue: number[] = [];

      Object.entries(data?.graphStats?.externalAdsStats).map(val => {
        externalAdsStats.push(val[0]);
        //@ts-ignore
        externalAdsStatsValue.push(val[1]);
      });


      setExternalGraph({
        labels: externalAdsStats.map(data => data.toUpperCase()),
        datasets: [
          {
            label: "Ads Watched",
            data: externalAdsStatsValue.map((data) => data),
            backgroundColor: "#2a71d0",
            borderColor: "#2a71d0",
            borderWidth: 1,
            //  borderRadius: 5,
          },
        ]
      });

    }

  }, [data]);

  const customerTableHead: Array<string> = [
    'Brand Name/ Ad Title',
    'Streams',
    'Category',
    'Cost',
    'Duration',
    'Date Posted',
    'Posted By',
    'Status',
    'Action',
  ]

  const renderHead = (item: any, index: number) => <th key={index}>{item}</th>

  const renderBody = (item: any, index: number) => (
    <tr key={item?._id}>
      <td>{item?.title}</td>
      <td>{item?.streamCount}</td>
      <td>{item?.type}</td>
      <td>{item?.points}</td>
      <td>{item?.lengthInSeconds}</td>
      <td className="whitespace-nowrap">{item?.createdAt}</td>
      <td className="whitespace-nowrap">{item?.updatedAt}</td>
      <td ><span className={`py-1 px-4 ${item?.status === 'active' ? 'bg-[#E5FBF3] rounded-full text-[#00D48A]' : 'bg-red-100 text-red-600 rounded-full'}`}>{item?.status}</span></td>
      <td><Link to={`/advertisements/${item?._id}`} className="underline text-[#516CF5] whitespace-nowrap">View Details</Link></td>
    </tr>
  )

  return (
    <div>
        <div>
          <h4 className='cardHead font-semibold'>Overview</h4>
          <div className="row">
            {/* card one */}
            <div className="col-3">
              <div className="status-card"
                onMouseEnter={() => setIconState("store")}
                onMouseLeave={() => setIconState("")}>
                <div className="status-card__info">
                  <span>{("Overall Internal ads")?.toString().toUpperCase()}</span>
                  <h4>{data ? data?.endDate?.totalInternalAdverts  : "-"}</h4>
                  <div className="status-card__info__percent">
                    <span className='percentUp'>{data ? `${((data?.endDate?.totalInternalAdverts - data?.startDate?.totalInternalAdverts) / data?.endDate?.totalInternalAdverts * 100).toFixed(1)}% ↑ ` : "-% ↑"}</span>{" "}
                    <span>{data ? `from ${data?.startDate?.totalInternalAdverts}` : "from -"}</span>
                  </div>
                </div>

                <div className="status-card__icon">
                  <StatusCardIcon hovering={iconState === "store"} />
                </div>
              </div>
            </div>
            {/* CARD TWO */}
            <div className="col-3">
              <div className="status-card"
                onMouseEnter={() => setIconState("store")}
                onMouseLeave={() => setIconState("")}>
                <div className="status-card__info">
                  <span>{("Overall External Ads")?.toString().toUpperCase()}</span>
                  <h4>{data ? data?.endDate?.totalExternalAdverts : "-"}</h4>
                  <div className="status-card__info__percent">
                    <span className='percentUp'>{data ? `${((data?.endDate?.totalExternalAdverts - data?.startDate?.totalExternalAdverts) / data?.endDate?.totalExternalAdverts * 100).toFixed(1)}% ↑ ` : "-% ↑"}</span>{" "}
                    <span>{data ? `from ${data?.startDate?.totalExternalAdverts}` : "from -"}</span>
                  </div>
                </div>

                <div className="status-card__icon">
                  <StatusCardIcon hovering={iconState === "store"} />
                </div>
              </div>
            </div>
            {/* CARD Three */}
            <div className="col-3">
              <div className="status-card"
                onMouseEnter={() => setIconState("store")}
                onMouseLeave={() => setIconState("")}>
                <div className="status-card__info">
                  <span>{("completed Sessions")?.toString().toUpperCase()}</span>
                  <h4>{data ? data?.endDate?.totalStreams : "-"}</h4>
                  <div className="status-card__info__percent">
                    <span className='percentUp'>{data ? `${((data?.endDate?.totalStreams - data?.startDate?.totalStreams) / data?.endDate?.totalStreams * 100).toFixed(1)}% ↑ ` : "-% ↑"}</span>{" "}
                    <span>{data ? `from ${data?.startDate?.totalStreams}` : "from -"}</span>
                  </div>
                </div>

                <div className="status-card__icon">
                  <StatusCardIcon hovering={iconState === "store"} />
                </div>
              </div>
            </div>
            {/* card four */}
            <div className="col-3">
              <div className="status-card"
                onMouseEnter={() => setIconState("store")}
                onMouseLeave={() => setIconState("")}>
                <div className="status-card__info">
                  <span>{("Avg. INTERACTION Rate")?.toString().toUpperCase()}</span>
                  <h4>{data ? data?.endDate?.totalCompletedStreams : "-"}</h4>
                  <div className="status-card__info__percent">
                    <span className='percentUp'>{data ? `${((data?.endDate?.totalCompletedStreams - data?.startDate?.totalCompletedStreams) / data?.endDate?.totalCompletedStreams * 100).toFixed(1)}% ↑ ` : "-% ↑"}</span>{" "}
                    <span>{data ? `from ${data?.startDate?.totalCompletedStreams}` : "from -"}</span>
                  </div>
                </div>

                <div className="status-card__icon">
                  <StatusCardIcon hovering={iconState === "store"} />
                </div>
              </div>
            </div>
            {/* End of all card */}
          </div>
        </div>

      {/* Support Search */}


      {/* Charts */}
      <div className='row items-center my-10 gap-x-3'>
        <div className='col-6 card'>
          <div className='basis-1/2'>
            <div className="flex items-center justify-between">
              <h6 className='text-[#171837] text-sm'>Internal Ads Watch Trend</h6>
              <ThreeVdots />
            </div>
            <LinearGradientChart chartData={internalGraph} />
          </div>
        </div>
        <div className='col-6 card'>
          <div className='basis-1/2'>
            <div className="flex items-center justify-between">
              <h6 className='text-[#171837] text-sm'>External Ads Watch Trend</h6>
              <ThreeVdots />
            </div>
            <LinearGradientChart chartData={externalGraph} />
          </div>
        </div>
      </div>
      <div className='my-5' />

      <div className="card">
        <SearchBar HeaderTitle='All Adverts' placeholder='Enter Brand/Ad Name' text='Create Advert' onClick={() => navigate('/create-adverts')} prefixIcon={<CreateAdsPlus />} />
        <CategoryFilter />
        {/* Table */}
        <div className="row ">
          <div className="col-12">
            <div className="">
              <div className="card__body">
                <Table
                  limit={10}
                  headData={customerTableHead}
                  renderHead={(item: any, index: number) => renderHead(item, index)}
                  bodyData={isLoading ? []  : getAds?.docs}
                  renderBody={(item: any, index: number) => renderBody(item, index)}
                  {...{ isLoading }}
                  {...{ isFetching }}
                />
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Advertisements
