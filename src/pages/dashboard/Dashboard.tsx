/* eslint-disable no-labels */
import './dashboard.css'
import LinearGradientChart from '../../components/charts/LinearGradientChart'
import { useEffect, useState } from 'react'
import { datasetDash } from '../../assets/data/data'
import StatusCards from '../../components/statusCard/StatusCards'
import BarChart from '../../components/charts/BarChart'
import { useGetDashboardStatsQuery } from '../../features/stats/statsApis'
import ThreeVdots from '../../assets/svg/ThreeVdots'
import StatusCardIcon from '../../assets/svg/StatusCardIcon'

const Dashboard = () => {
    const { data } = useGetDashboardStatsQuery()
    const [iconState, setIconState] = useState<string>("")


    console.log(data, "data dashboard")


    const [lineData] = useState({
        // labels: Object.values(data?.data).map((data) => data.month.toUpperCase()),
        labels: datasetDash.map((data) => data.month.toUpperCase()),
        datasets: [
            {
                label: "internal Ads Watched",
                data: datasetDash.map((data) => data.adsWatched),
                backgroundColor: "#B150F9",
                borderColor: "#B150F9",
                borderWidth: 1,
                borderRadius: 5,
            },
        ],
    })
    const [userData] = useState({
        labels: datasetDash.map((data) => data.month.toUpperCase()),
        datasets: [
            {
                label: "internal Ads Watched",
                data: datasetDash.map((data) => data.adsWatched),
                backgroundColor: "#2a71d0",
                borderColor: "#2a71d0",
                borderWidth: 1,
                borderRadius: 5,
            },
            {
                label: "External Ads Watched",
                data: datasetDash.map((data) => data.adsWatched),
                backgroundColor: "#A3B1FA",
                borderColor: "#A3B1FA",
                borderWidth: 1,
                borderRadius: 5,
            },
        ],
    })

    const [dataSet, setDataSet] = useState(userData)
    const [dataMonth, setDataMonth] = useState(userData)
    const [dataWeek, setDataWeek] = useState(userData)

    const [totalAdvertTrend, setAdvertTrend] = useState(userData)
    const [totalPayoutTrend, setPayoutTrend] = useState(lineData)

    const [chartDate, setChartDate] = useState('year')


    //  Month
    useEffect(() => {
        if (data && data?.data) {
            const Internalmonths: string[] = [];
            const Externalmonths: string[] = [];
            const InternalMonthsValue: number[] = [];
            const ExternalMonthsValue: number[] = [];
            Object.entries(data?.data?.dayOfMonthGraph?.internal).map(val => {
                Internalmonths.push(val[0]);
                //@ts-ignore
                InternalMonthsValue.push(val[1]);
            });
            Object.entries(data?.data?.dayOfMonthGraph?.external).map(val => {
                Externalmonths.push(val[0]);
                //@ts-ignore
                ExternalMonthsValue.push(val[1]);
            });

            setDataMonth({
                labels: Internalmonths.map(data => data.toUpperCase()),
                datasets: [
                    {
                        label: "Internal Ads Watched",
                        data: InternalMonthsValue.map((data) => data),
                        backgroundColor: "#2a71d0",
                        borderColor: "#2a71d0",
                        borderWidth: 1,
                        borderRadius: 5,
                    },
                    {
                        label: "External Ads Watched",
                        data: ExternalMonthsValue.map((data) => data),
                        backgroundColor: "#A3B1FA",
                        borderColor: "#A3B1FA",
                        borderWidth: 1,
                        borderRadius: 5,
                    }
                ]
            });

        }

    }, [data]);

    // Bar Chart js
    //  Year
    useEffect(() => {
        if (data && data?.data) {
            const Internalmonths: string[] = [];
            const Externalmonths: string[] = [];
            const InternalMonthsValue: number[] = [];
            const ExternalMonthsValue: number[] = [];
            Object.entries(data?.data?.monthOfYearGraph?.internal).map(val => {
                Internalmonths.push(val[0]);
                //@ts-ignore
                InternalMonthsValue.push(val[1]);
            });
            Object.entries(data?.data?.monthOfYearGraph?.external).map(val => {
                Externalmonths.push(val[0]);
                //@ts-ignore
                ExternalMonthsValue.push(val[1]);
            });

            setDataSet({
                labels: Internalmonths.map(data => data.toUpperCase()),
                datasets: [
                    {
                        label: "Internal Ads Watched",
                        data: InternalMonthsValue.map((data) => data),
                        backgroundColor: "#2a71d0",
                        borderColor: "#2a71d0",
                        borderWidth: 1,
                        borderRadius: 5,
                    },
                    {
                        label: "External Ads Watched",
                        data: ExternalMonthsValue.map((data) => data),
                        backgroundColor: "#A3B1FA",
                        borderColor: "#A3B1FA",
                        borderWidth: 1,
                        borderRadius: 5,
                    }
                ]
            });

        }

    }, [data]);

    useEffect(() => {
        // weekly stats
        if (data && data?.data) {
            const Internalmonths: string[] = [];
            const Externalmonths: string[] = [];
            const InternalMonthsValue: number[] = [];
            const ExternalMonthsValue: number[] = [];
            Object.entries(data?.data?.dayOfWeekGraph?.internal).map(val => {
                Internalmonths.push(val[0]);
                //@ts-ignore
                InternalMonthsValue.push(val[1]);
            });
            Object.entries(data?.data?.dayOfWeekGraph?.external).map(val => {
                Externalmonths.push(val[0]);
                //@ts-ignore
                ExternalMonthsValue.push(val[1]);
            });

            setDataWeek({
                labels: Internalmonths.map(data => data.toUpperCase()),
                datasets: [
                    {
                        label: "Internal Ads Watched",
                        data: InternalMonthsValue.map((data) => data),
                        backgroundColor: "#2a71d0",
                        borderColor: "#2a71d0",
                        borderWidth: 1,
                        borderRadius: 5,
                    },
                    {
                        label: "External Ads Watched",
                        data: ExternalMonthsValue.map((data) => data),
                        backgroundColor: "#A3B1FA",
                        borderColor: "#A3B1FA",
                        borderWidth: 1,
                        borderRadius: 5,
                    }
                ]
            });

        }

    }, [data]);

    // end of bar chart


    // Line Chart
    // Total Advert Watch Trend

    useEffect(() => {
        // weekly stats
        if (data && data?.data) {
            const totalAdsGraph: string[] = [];
            const totalVoucherUsageGraphValue: number[] = [];

            Object.entries(data?.data?.totalAdsGraph).map(val => {
                totalAdsGraph.push(val[0]);
                //@ts-ignore
                totalVoucherUsageGraphValue.push(val[1]);
            });


            setAdvertTrend({
                labels: totalAdsGraph.map(data => data.toUpperCase()),
                datasets: [
                    {
                        label: "Ads Watched",
                        data: totalVoucherUsageGraphValue.map((data) => data),
                        backgroundColor: "#2a71d0",
                        borderColor: "#2a71d0",
                        borderWidth: 1,
                        borderRadius: 5,
                    },
                ]
            });

        }

    }, [data]);

    //  Total Payout Trend
    useEffect(() => {
        // weekly stats
        if (data && data?.data) {
            const totalVoucherUsageGraph: string[] = [];
            const totalVoucherUsageGraphValue: number[] = [];

            Object.entries(data?.data?.totalVoucherUsageGraph).map(val => {
                totalVoucherUsageGraph.push(val[0]);
                //@ts-ignore
                totalVoucherUsageGraphValue.push(val[1]);
            });


            setPayoutTrend({
                labels: totalVoucherUsageGraph.map(data => data.toUpperCase()),
                datasets: [
                    {
                        label: "Ads Watched",
                        data: totalVoucherUsageGraphValue.map((data) => data),
                        backgroundColor: "#B150F9",
                        borderColor: "#B150F9",
                        borderWidth: 1,
                        borderRadius: 5,
                    },
                ]
            });

        }

    }, [data]);



    return (
        <>
            <section className='mb-10'>
                {(data && data?.data) ?
                    <div>
                        {!data?.data?.endDate?.totalAdverts}
                        <h4 className='cardHead font-semibold'>Overview</h4>
                        <div className="row">
                            {/* card one */}
                            <div className="col-3">
                                <div className="status-card"
                                    onMouseEnter={() => setIconState("store")}
                                    onMouseLeave={() => setIconState("")}>
                                    <div className="status-card__info">
                                        <span>{("Overall Users")?.toString().toUpperCase()}</span>
                                        <h4>{(data?.data?.endDate?.totalUsers)}</h4>
                                        <div className="status-card__info__percent">
                                            <span className='percentUp'>{"-% ↑"}</span>{" "}
                                            <span>{"from -"}</span>
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
                                        <span>{("Overall Ads")?.toString().toUpperCase()}</span>
                                        <h4>{(data?.data?.endDate?.totalAdverts)}</h4>
                                        <div className="status-card__info__percent">
                                            <span className='percentUp'>{"-% ↑"}</span>{" "}
                                            <span>{"from -"}</span>
                                        </div>
                                    </div>

                                    <div className="status-card__icon">
                                        <StatusCardIcon hovering={iconState === "store"} />
                                    </div>
                                </div>
                            </div>
                            {/* CARD three */}
                            <div className="col-3">
                                <div className="status-card"
                                    onMouseEnter={() => setIconState("store")}
                                    onMouseLeave={() => setIconState("")}>
                                    <div className="status-card__info">
                                        <span>{("Total Payout")?.toString().toUpperCase()}</span>
                                        <h4>{(data?.data?.endDate?.totalPayout)}</h4>
                                        <div className="status-card__info__percent">
                                            <span className='percentUp'>{"-% ↑"}</span>{" "}
                                            <span>{"from -"}</span>
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
                                        <span>{("Vouchers Redeemed")?.toString().toUpperCase()}</span>
                                        <h4>{(data?.data?.endDate?.voucherUsage)}</h4>
                                        <div className="status-card__info__percent">
                                            <span className='percentUp'>{"-% ↑"}</span>{" "}
                                            <span>{"from -"}</span>
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
                    :
                    <StatusCards />
                }
                <h4 className='dashheade'>Ads  Statistics</h4>

                <div className='grid lg:grid-cols-7'>
                    <div className="lg:col-span-2 flex flex-1 flex-col justify-evenly py-10">

                        <div>
                            <p className='text-[#949AB1 text-xs'>Active Daily Players</p>
                            <h1 className="font-bold text-[#171837] text-2xl">980</h1>
                        </div>
                        <div className="my-3">
                            <div className="bg-[#516CF5] w-5 h-2 my-2 rounded-full">
                                <div className="h-2"></div>
                            </div>
                            <p className='text-[#949AB1 text-xs'>Total Internal Ad’s</p>
                            <h1 className="font-bold text-[#171837] text-md">800</h1>
                        </div>
                        <div className="my-3">
                            <div className="bg-[#A3B1FA] w-5 h-2 my-2 rounded-full">
                                <div className="h-2"></div>
                            </div>
                            <p className='text-[#949AB1 text-xs'>Total Internal Ad&apos;s</p>
                            <h1 className="font-bold text-[#171837] text-2xl">980</h1>
                        </div>

                    </div>
                    <div className="lg:col-span-5 text-[#949AB1] text-sm">
                        <div className='mx-4'>
                            <div className="gap-10 flex- items-center">
                                <span className={`cursor-pointer mr-2 ${chartDate === "year" && 'text-[#516CF5] font-bold'}`} onClick={() => setChartDate('year')}>YEAR</span>
                                <span className={`cursor-pointer mr-2 ${chartDate === "month" && 'text-[#516CF5] font-bold'}`} onClick={() => setChartDate('month')}>MONTH</span>
                                <span className={`cursor-pointer mr-2 ${chartDate === "week" && 'text-[#516CF5] font-bold'}`} onClick={() => setChartDate('week')}>WEEK</span>
                            </div>
                            <BarChart chartData={(chartDate === 'year' && dataSet) || (chartDate === 'month' && dataMonth) || (chartDate === 'week' && dataWeek)} />
                        </div>
                    </div>
                </div>
                <div className='row justify-center my-10 gap-x-3'>
                    <div className='col-6 card'>
                        <div className='basis-1/2'>
                            <div className="flex items-center justify-between">
                                <h6 className='text-[#171837] text-sm'>Total Advert Watch Trend</h6>
                                <ThreeVdots />
                            </div>
                            <LinearGradientChart chartData={totalAdvertTrend}
                            />
                        </div>
                    </div>
                    <div className='col-6 card'>
                        <div className='basis-1/2'>
                            <div className="flex items-center justify-between">
                                <h6 className='text-[#171837] text-sm'>Total Payout Trend</h6>
                                <ThreeVdots />
                            </div>
                            <LinearGradientChart chartData={totalPayoutTrend} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Dashboard


// creating ssh key
// ssh-keygen -t ed25519 -C fitzgeraldkachi@gmail.com
// eval "$(ssh-agent -s)""

// to check if the file exist
// ssh-add ~/.ssh/config
