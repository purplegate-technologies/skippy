import { Link, useNavigate, useParams } from 'react-router-dom'
import CompanyLogo from '../../assets/svg/CompanyLogo'
import Button from '../../components/button/Button'
import Input from '../../components/input/Input'
import Switch from '../../components/switch/Switch'
import TopNav from '../../components/topnav/TopNav'
import { useCreateVouchersMutation, useDeleteVoucherMutation, useUpdateVoucherMutation } from '../../features/vouchers/VouchersApiSlice'
import { toast } from 'react-toastify';
import React, { useState } from 'react'
import { Select } from '../../components/Select/Select'


interface initialStateType {
  title?: string,
  description?: string,
  terms?: string,
  price?: string,
  value?: string
  userQuantity?: string
  totalQuantity?: string
  startDate?: string
  endDate?: string
  status?: string
}

const CreateVoucher = () => {
  const{id} = useParams()
  const initialState: initialStateType = {
    title: "",
    description: "",
    terms: "",
    price: "",
    value: "",
    userQuantity: "",
    totalQuantity: "",
    startDate: "",
    endDate: "",
    status: "",
  }
  const [formValue, setFormValue] = useState<initialStateType>(initialState)

  const {title, description, terms, price, value, userQuantity, totalQuantity, startDate, endDate, status} = formValue
  const [updateVoucher] = useUpdateVoucherMutation()
  const [deleteVoucher] = useDeleteVoucherMutation()
  const [createVouchers] = useCreateVouchersMutation()

  const navigate = useNavigate();

  const handleDelete = async (id: any) => {
    await deleteVoucher(id)
    toast.success("Voucher Deleted Successfully")
      navigate('/finance')
  }

  const setField = (field: any, value: any) => {
    setFormValue({
      ...formValue,
      [field]: value,
    });
  };


  const handleSubmit = async () => {

    if(id) {
      await updateVoucher({id,...formValue}).unwrap()
      setFormValue({
        title: "",
        description: "",
        terms: "",
        price: "",
        value: "",
        userQuantity: "",
        totalQuantity: "",
        startDate: "",
        endDate: "",
        status: "",
      })
      toast.success("Successfully Edited a Voucher")
      navigate("/finance")
    } else {

      try {
        if(title && description && terms && price && value && userQuantity && totalQuantity && startDate && endDate && status && !id){
        await createVouchers(formValue).unwrap()
        setFormValue({
          title: "",
          description: "",
          terms: "",
          price: "",
          value: "",
          userQuantity: "",
          totalQuantity: "",
          startDate: "",
          endDate: "",
          status: "",
        })
        toast.success("Successfully Create a Voucher")
        navigate("/finance")
      } else {
        toast.error("Please fill all Input field")
      }
    } catch (e: any) {
      toast.error(e)
    }
  }
  }
  return (
    <section className="bg-[#FCFCFF]">
      <form onSubmit={handleSubmit}>
        <div className='flex'>
          <div className="sidebar__logo">
            <Link to="/"><CompanyLogo /></Link>
            <Link to="/" style={{ textDecoration: 'none', color: 'black', marginLeft: '8px' }}>Admin@skippy.com</Link>
            <div className='h-10' />
          </div>
          <div className="flex-1">
            <TopNav />
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-10 m-5">
          <div className='md:col-span-7 flex flex-col bg-white p-4'>
            <div className="p-2 items-center flex justify-between"> <span>Voucher  Deal </span> <span className="text-[#949AB1]">e.g. 30% off / Buy 1 get 1 free</span></div>

            <Input type='number' value={formValue.value} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setField('value', e.target.value)}  className='flex-1 w-full flex border border-[#CFD1D5] p-2 mb-5 rounded-lg' placeholder='N1500.00 Voucher' />

            <div className="flex items-center gap-x-5 justify-between mb-5">
              <Input type='date' value={formValue.startDate} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setField('startDate', e.target.value)} divStyle="lable w-full" className='flex-1 w-full flex border border-[#CFD1D5] p-2 rounded-lg' label='Start Date' labelStyle='text-sm' />
              <Input type='date' value={formValue.endDate} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setField('endDate', e.target.value)} divStyle="lable w-full" className='flex-1 w-full flex border border-[#CFD1D5] p-2 rounded-lg' label='Expiry Date' labelStyle='text-sm' />
            </div>

            {/*  */}
            <form className="mb-5 ">
              <div className="mb-1 w-full bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600">
                <div className="flex justify-between items-center flex-row-reverse py-2 px-3 border-b dark:border-gray-600">
                  <div className="flex flex-wrap items-center divide-gray-200 sm:divide-x dark:divide-gray-600">
                    <div className="flex items-center space-x-1 sm:pr-4">
                      <button type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clipRule="evenodd"></path></svg>
                        <span className="sr-only">Attach file</span>
                      </button>
                      <button type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path></svg>
                        <span className="sr-only">Embed map</span>
                      </button>
                      <button type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd"></path></svg>
                        <span className="sr-only">Upload image</span>
                      </button>
                      <button type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        <span className="sr-only">Format code</span>
                      </button>
                      <button type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z" clipRule="evenodd"></path></svg>
                        <span className="sr-only">Add emoji</span>
                      </button>
                    </div>
                    <div className="flex flex-wrap items-center space-x-1 sm:pl-4">
                      <button type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                        <span className="sr-only">Add list</span>
                      </button>
                      <button type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"></path></svg>
                        <span className="sr-only">Settings</span>
                      </button>
                      <button type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
                        <span className="sr-only">Timeline</span>
                      </button>
                      <button type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        <span className="sr-only">Download</span>
                      </button>
                    </div>
                  </div>
                  <span className="">Voucher Description</span>
                  {/* <button type="button" data-tooltip-target="tooltip-fullscreen" className="p-2 text-gray-500 rounded cursor-pointer sm:ml-auto hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                  <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 11-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z" clipRule="evenodd"></path></svg>
                  <span className="sr-only">Full screen</span>
                </button>
                <div id="tooltip-fullscreen" role="tooltip" className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">
                  Show full screen
                  <div className="tooltip-arrow" data-popper-arrow></div>
                </div> */}
                </div>
                <div className="py-2 px-4 bg-white rounded-b-lg dark:bg-gray-800">
                  <label className="sr-only">Publish post</label>
                  <textarea id="editor" value={formValue.description} onChange={e => setField("description", e.target.value)} className="focus:ring-blue-500 focus:border-blue-500 block px-0 w-full text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Write an article..." required></textarea>
                </div>

              </div>
              <p className="text-[#516CF5] text-sm">A brief Description about the voucher</p>

            </form>
            {/*  */}

            {/*  */}
            <form className="mb-5 ">
              <div className="mb-1 w-full bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600">
                <div className="flex justify-between items-center py-2 px-3 border-b dark:border-gray-600">
                  <div className="">Voucher Terms</div>
                  {/* <button type="button" data-tooltip-target="tooltip-fullscreen" className="p-2 text-gray-500 rounded cursor-pointer sm:ml-auto hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                  <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 11-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z" clipRule="evenodd"></path></svg>
                  <span className="sr-only">Full screen</span>
                </button>
                <div id="tooltip-fullscreen" role="tooltip" className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">
                  Show full screen
                  <div className="tooltip-arrow" data-popper-arrow></div>
                </div> */}


                  <div className="flex flex-wrap items-center divide-gray-200 sm:divide-x dark:divide-gray-600">
                    <div className="flex items-center space-x-1 sm:pr-4">
                      <button type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clipRule="evenodd"></path></svg>
                        <span className="sr-only">Attach file</span>
                      </button>
                      <button type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path></svg>
                        <span className="sr-only">Embed map</span>
                      </button>
                      <button type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd"></path></svg>
                        <span className="sr-only">Upload image</span>
                      </button>
                      <button type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        <span className="sr-only">Format code</span>
                      </button>
                      <button type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z" clipRule="evenodd"></path></svg>
                        <span className="sr-only">Add emoji</span>
                      </button>
                    </div>
                    <div className="flex flex-wrap items-center space-x-1 sm:pl-4">
                      <button type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                        <span className="sr-only">Add list</span>
                      </button>
                      <button type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"></path></svg>
                        <span className="sr-only">Settings</span>
                      </button>
                      <button type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
                        <span className="sr-only">Timeline</span>
                      </button>
                      <button type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        <span className="sr-only">Download</span>
                      </button>
                    </div>
                  </div>

                </div>
                <div className="py-2 px-4 bg-white rounded-b-lg dark:bg-gray-800">
                  <label className="sr-only">Publish post</label>
                  <textarea id="editor" value={formValue.terms} onChange={e => setField('terms', e.target.value)} className="block px-0 w-full text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Write an article..." required></textarea>
                </div>

              </div>
              <p className="text-[#516CF5] text-sm">Enter the Terms  of the Voucher, press the enter key to go to next line</p>

            </form>
            {/*  */}

          </div>
          <div className='md:col-span-5 flex flex-col bg-white'>

            <div className="border p-4 mb-6">

              <div className="flex-items-center flex-row justify-between my-2" style={{ display: 'flex', justifyContent: 'space-between' }}>
                <p>Vendor Details</p>
                <p ></p>
              </div>

              <div className="flex items-center gap-x-5 mb-2">
                {/* <div className="h-20 w-20 bg-blue-400"></div> */}
                <svg className="w-20 h-20 text-gray-200 border p-2" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" /></svg>

                <div className="flex flex-1 w-full">
                  {/* <Input label='Brand name/Ad Title' type='text' name='' labelStyle='my-1 text-[#171837]' className='flex flex-1 w-full p-2 border border-[#949AB1] rounded' /> */}
                  <div className="w-full">
                    <label className='my-1 text-[#171837]'>Brand name/Ad Title </label>
                    <Input type='text' name='' value={formValue.title} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setField("title", e.target.value)} divStyle="w-full" className=' w-full p-2 border border-[#CFD1D5] rounded' placeholder='Skippy Voucher' />
                  </div>
                </div>
              </div>
            </div>


            <div className="border pb-4">
              <div className="p-4 border-b">
                <p className="text-[#516CF5]">Voucher Settings</p>
              </div>

              <div className="grid grid-cols-2 gap-10 p-4">
                <div className="w-full">
                  <label className='my-1 text-[#171837]'>  Total Quantity </label>
                  <Input type='number' value={formValue.totalQuantity} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setField('totalQuantity', e.target.value)}  name='' divStyle="w-full" className='rounded-lg w-full p-2 border border-[#CFD1D5]' />
                </div>
                <div className="w-full">
                  <label className='my-1 text-[#171837]'>Quantity per User </label>
                  <Input type='number' value={formValue.userQuantity} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setField('userQuantity', e.target.value)} name='' divStyle="w-full" className=' w-full p-2 border border-[#CFD1D5] rounded-lg' />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-10 p-4">
                <div className="w-full">
                  <label className='my-1 text-[#171837]'>  Voucher Value </label>
                  <Input type='number' name='' value={formValue.value} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setField('value', e.target.value)}  divStyle="w-full" className='rounded-lg w-full p-2 border border-[#CFD1D5]' />
                </div>
                <div className="w-full">
                  <label className='my-1 text-[#171837] whitespace-nowrap'>Voucher Cost (Skippy Points) </label>
                  <Input type='number' value={formValue.price} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setField('price', e.target.value)} name='' divStyle="w-full" className=' w-full p-2 border border-[#CFD1D5] rounded-lg' />
                </div>
              </div>

              <div className="w-full  p-4">
                <label className='my-1 text-[#171837]'>Embed Code</label>
                <Input type='number' name='' divStyle="w-full" className=' w-full p-2 border border-[#CFD1D5] rounded-lg' placeholder="Enter action link here" />
              </div>

              <div className='my-2 mx-4'>
                        <label htmlFor="">status</label>
                        <Select
                          // label="Your role in the chair"
                          className="w-full p-2 border border-[#CFD1D5] rounded-lg"
                          options={["active", "inactive"]}
                          required
                          value={formValue.status}
                          onChange={(value: any) => setField("status", value)}
                        />
                      </div>

              <Switch label="Turn on notifications for voucher validity" className='p-4' />

            </div>


          </div>

        </div>



        <div className="flex  items-center justify-between bg-[#FCFCFF] border-[#F1F3FF] border p-5  w-[100%]">
          <div className="gap-x-3 flex">
            <Button className="bg-[#949AB1]">Undo Changes</Button>
            <Button className="bg-[#FF5660]" onClick={() => handleDelete(id)}>Delete Advert</Button>
          </div>
          <div className="gap-x-3 flex">
            <Button className='bg-[#868BA1]' onClick={() => navigate(-1)}>Cancel</Button>
            <Button className='bg-[#19C165]' onClick={handleSubmit}>Save Changes</Button>
          </div>
        </div>

      </form>
    </section>
  )
}

export default CreateVoucher

