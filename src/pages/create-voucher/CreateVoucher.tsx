import { Link, useNavigate } from 'react-router-dom'
import CompanyLogo from '../../assets/svg/CompanyLogo'
import Button from '../../components/button/Button'
import TopNav from '../../components/topnav/TopNav'

const CreateVoucher = () => {
  const navigate = useNavigate();
  return (
    <section>
      <div className='flex'>
        <div className="sidebar__logo">
          {/* <img src={""} alt="company logo" /> */}
          <Link to="/"><CompanyLogo /></Link>
          <Link to="/" style={{ textDecoration: 'none', color: 'black', marginLeft: '8px' }}>Admin@skippy.com</Link>
          <div className='h-10' />
        </div>
        <div className="flex-1">
          <TopNav />
        </div>
      </div>

        <div className="grid md:grid-cols-12 gap-10 m-5">
          <div className='md:col-span-6 flex flex-col bg-white'>
            Create adsx
          </div>
          <div className='md:col-span-4 flex flex-col bg-white'>
          create Voucher
          </div>
        </div>



        <div className="flex  items-center justify-between bg-[#FCFCFF] border-[#F1F3FF] border p-5 fixed bottom-0 w-[100%]">
          <div className="gap-x-3 flex">
            <Button className="bg-[#949AB1]">Undo Changes</Button>
            <Button className="bg-[#FF5660]">Delete Advert</Button>
          </div>
          <div className="gap-x-3 flex">
            <Button className='bg-[#868BA1]' onClick={() => navigate(-1)}>Cancel</Button>
            <Button className='bg-[#19C165]'>Save Changes</Button>
          </div>
        </div>

    </section>
  )
}

export default CreateVoucher
