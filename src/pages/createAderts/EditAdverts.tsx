import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import CompanyLogo from '../../assets/svg/CompanyLogo';
import Button from '../../components/button/Button';
import FileUpload from '../../components/FileUpload/FileUpload';
import Input from '../../components/input/Input';
import TopNav from '../../components/topnav/TopNav';
import CloudAddScene from './CloudAddScene';

import DeleteAdsIcon from './DeleteAdsIcon';
import EditAdsIcon from './EditAdsIcon';
import SnapAdsIcon from './SnapAdsIcon';
import VideoSlider from './VideoSlider';
import Select from 'react-select';
import { useCreateAdvertMutation,useDeleteAdvertMutation, useGetStreamAdminQuery } from '../../features/adverts/AdvertsApiSlice';



const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];


const EditAdverts = () => {

  const [selectedOption, setSelectedOption] = useState(null);

  const handleChangeSeelect = (val: any) => {
    setSelectedOption(val)
  }

  // const onFinish = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
  const onFinish = (e: any) => {
    e.preventDefault()
    const formData = new FormData();

    // formData.append('File', selectedFile);

    // fetch(
    //     'https://freeimage.host/api/1/upload?key=<YOUR_API_KEY>',
    //     {
    //         method: 'POST',
    //         body: formData,
    //     }
    // )
    //     .then((response) => response.json())
    //     .then((result) => {
    //         console.log('Success:', result);
    //     })
    //     .catch((error) => {
    //         console.error('Error:', error);
    //     });

        console.log(formData)
};


  const [tabIndex, setTabIndex] = useState<string>("Scene")
  const [tabIndexText, setTabIndexText] = useState<string>("Add")
  const [roles, setRoles] = useState("Finances and billing")
  // create Adverts
  const [createAdvert, {isLoading}] = useCreateAdvertMutation()

  useDeleteAdvertMutation()

  const {data} = useGetStreamAdminQuery({})
  console.log(data, 'data useGetStreamAdminQuery')


  // const onFinish = async () => {
  //   // await  createAdvert()
  // }

  const navigate = useNavigate();
  return (
    <section className="bg-[#FCFCFF]">
      <form onSubmit={onFinish}>
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

      <div className="grid md:grid-cols-7 gap-10 m-5">
        <div className='md:basis-1/2 flex flex-col bg-white col-span-4'>
          <VideoSlider />
          <FileUpload />
          <Button type='submit' className="w-full border-[#516CF5] mt-10 border border-dashed bg-white text-[#516CF5]">
            {/* <CloudAddScene /> */}
            &nbsp;&nbsp;Add&nbsp;a&nbsp;Scene</Button>
        </div>
        <div className='md:basis-1/2 flex flex-col bg-white col-span-3'>
          <div className="">
            <div className=" flex h-full borderitems-center flex-row border-[#F1F3FF] text-[#949AB1] relative">
              <p className={"tabIndex text-center p-3 w-24 hover:border-t-2 hover:border-[#516CF5] cursor-pointer hover:text-[#516CF5]" + (tabIndex === "Scene" && "tabIndex text-[#516CF5] border-t-2 border-t-[#516CF5]")} onClick={() => setTabIndex("Scene")}>Scene{" "}</p>
              <p className={"tabIndex text-center p-3 w-24 hover:border-t-2 hover:border-[#516CF5] cursor-pointer hover:text-[#516CF5]" + (tabIndex === "Ad Settings" && " text-[#516CF5] border-t-2 border-t-[#516CF5]")} onClick={() => setTabIndex("Ad Settings")}>Ad&nbsp;Settings</p>
            </div>
          </div>

          {tabIndex === "Scene" && (<>
            <div className='bg-white border p-3'>
              <div className="flex-items-center flex-row justify-between my-2" style={{ display: 'flex', justifyContent: 'space-between' }}>

                <p>Brand Details</p>
                {/* <p className="bg-[#EAEDFE] text-[#516CF5] rounded-full p-1 px-2 text-sm">Internal</p> */}
                <select
                className="bg-[#EAEDFE] text-[#516CF5] rounded-full p-1 px-2 text-sm outline-none"
                //   onChange={(e) => {
                //     const select = e.target as HTMLSelectElement
                //     setRoles(select.options.item(select.selectedIndex)?.innerText!)
                // }}>
                >
                  <option>Internal</option>
                  <option>External</option>
                </select>

              </div>

              <div className="flex items-center gap-x-5 mb-2">
                <div className="h-20 w-20 bg-blue-400">

                </div>
                <div className="flex flex-1 w-full">
                  {/* <Input label='Brand name/Ad Title' type='text' name='' labelStyle='my-1 text-[#171837]' className='flex flex-1 w-full p-2 border border-[#949AB1] rounded' /> */}
                  <div className="w-full">
                    <label className='my-1 text-[#171837]'>Brand name/Ad Title </label>
                    <input type='text' name='' className='flex flex-1 w-full p-2 border border-[#949AB1] rounded' />
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-x-5 my-5">
                <img src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp" className="h-20 w-20" alt="" />
                <div className="flex flex-col gap-y-2">
                  <h1 className="text-[#171837] font-bold text-lg">Scene 1</h1>
                  <div className="flex items-center gap-x-3">
                    <EditAdsIcon className='cursor-pointer' />
                    <SnapAdsIcon className='cursor-pointer' />
                    <DeleteAdsIcon className='cursor-pointer' />
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between flex-1 lg:mt-auto mt-10 rounded-lg">
                <div className={`flex flex-col items-center border w-full p-2  ` + (tabIndexText === "Add" && "text-[#516CF5] border-2 rounded-tl-lg rounded-bl-lg border-[#516CF5]")} onClick={() => setTabIndexText("Add")}>
                  <p className='text-[#516CF5] text-[28px]'>A+</p>
                  <span className='text-[#949AB1] text-xs'>Add Text</span>
                </div>
                <div className={`flex flex-col items-center border w-full p-2 cursor-pointer` + (tabIndexText === "Edit" && "text-[#516CF5] border-2 border-[#516CF5]")} onClick={() => setTabIndexText("Edit")}>
                  <p className='text-[#516CF5] text-[28px]'>30</p>
                  <span className='text-[#949AB1] text-xs'>Edit Scene</span>
                </div>
                <div className={`flex flex-col items-center border w-full p-2 cursor-pointer` + (tabIndexText === "Back" && "text-[#516CF5] border-2 rounded-tr-lg rounded-br-lg rouned-tr-lg border-[#516CF5]")} onClick={() => setTabIndexText("Back")}>
                  <p className='text-[#516CF5] text-[28px]'>Rec</p>
                  <span className='text-[#949AB1] text-xs'>Background</span>
                </div>
              </div>


              {/* ADD */}
              {tabIndexText === "Add" && <>
                <div className="">
                  <h1 className="text-[#171837] font-bold text-lg block">Text Setup</h1>
                  <div className="flex ">
                    {/* <Input label='' placeholder='Enter text here' type='text' name='' labelStyle='my-1 text-[#171837]' className='flex flex-1 w-full p-2 border border-[#949AB1] rounded' /> */}
                    <div className='flex my-2 flex-1'>
                      <input placeholder='Enter text here' type='text' name='' className=" p-2 border border-1 border-[#949AB1]  w-fuil flex flex-1" />
                    </div>
                  </div>
                    <div className="grid md:grid-cols-2 gap-10">
                    <div className='my-2 '>
                      <label>points</label>
                      <input placeholder='Enter text here' type='number' maxLength={4} name='' className=" p-2 border border-1 border-[#949AB1]  w-fuil flex flex-1" />
                    </div>
                    <div className='my-2'>
                      <label htmlFor="">status</label>
                      {/* <input placeholder='Enter text here' type='text' name='ddd' className=" p-2 border border-1 border-[#949AB1]  w-fuil flex flex-1" /> */}
                      <Select
                        defaultValue={selectedOption}
                        // onChange={(e: any) => {
                        //   const select = e.target as HTMLSelectElement
                        //   setRoles(select.options.item(select.selectedIndex)?.innerText!)
                        // }}
                        onChange={handleChangeSeelect}
                        options={[
                          {value:'active', label:"Active"},
                          {value:'inactive', label:"inactive"},
                          {value:'draft', label:"draft"}
                        ]}
                      />
                    </div>
                    </div>

                  <div className="flex items-center gap-x-5 my-3 w-full justify-evenly">
                    <div className="contactUs-form-lable flex flex-col w-full">
                      <label htmlFor="" className="text-xs my-1 text-[#516CF5]">
                        Position
                      </label>
                      <Select
                        defaultValue={selectedOption}
                        onChange={handleChangeSeelect}
                        options={options}
                      />

                    </div>
                    <div className="contactUs-form-lable flex flex-col w-full">
                      <label htmlFor="" className="text-xs my-1 text-[#516CF5]">
                        Text style</label>
                      <Select
                        defaultValue={selectedOption}
                        // onChange={(e: any) => {
                        //   const select = e.target as HTMLSelectElement
                        //   setRoles(select.options.item(select.selectedIndex)?.innerText!)
                        // }}
                        onChange={handleChangeSeelect}
                        options={options}
                      />

                    </div>
                  </div>

                  <div>
                    <p>Animation</p>


                  </div>
                </div>
              </>}

              {/* EDIT */}
              {tabIndexText === "Edit" && <>
                <div>
                  <div className="flex  gap-x-4 mb-2 p-2">

                    <div className="flex flex-col flex-1 items-start">
                      {/* <Input label='Brand name/Ad Title' type='text' name='' labelStyle='my-1 text-[#171837]' className='flex flex-1 w-full p-2 border border-[#949AB1] rounded' /> */}
                      <div className="w-full">
                        <label className='my-1 text-[#171837]'>Duration </label>
                        <input type='text' name='' className='flex flex-1 w-full p-2 border border-[#949AB1] rounded' />
                      </div>

                      <Select
                        defaultValue={selectedOption}
                        onChange={handleChangeSeelect}
                        options={options}
                        className="w-full my-2"
                      // isRtl
                      />

                      <Select
                        defaultValue={selectedOption}
                        onChange={handleChangeSeelect}
                        options={options}
                        className="w-full my-2"
                      // components={{ DropdownIndicator:() => null, IndicatorSeparator:() => null }}
                      // styles={{
                      // indicatorSeparator: defaultStyles => ({
                      //   ...defaultStyles,
                      //   '& svg': { display: 'none' }
                      // }), // removes the "stick"
                      // dropdownIndicator: defaultStyles => ({
                      //   ...defaultStyles,
                      //   '& svg': { display: 'none' }
                      // })
                      // }}
                      />

                    </div>

                    <div className="flex flex-col flex-1 w-full">
                      <div className="h-40 w-full flex bg-blue-400 rounded-sm">

                      </div>
                    </div>

                  </div>
                </div>
              </>}
              {tabIndexText === "Back" && <>
                <div>
                  <div>Background Colour</div>

                  <form className=" ">
                    {/* <Input label='' placeholder='Enter text here' type='text' name='' labelStyle='my-1 text-[#171837]' className='flex flex-1 w-full p-2 border border-[#949AB1] rounded' /> */}

                    <div className=" border rounded-lg p-2 my-3">

                      <p>Background HEX-Code </p>
                      <div className='flex items-center my-2 flex-1 gap-x-3 '>
                        <input placeholder='Enter text here' type='color' name='' className=" p-2 border border-1 border-[#949AB1]  w-fuil flex flex-1" />
                        <Button className="bg-[#949AB1]">Pick Color</Button>
                      </div>
                    </div>

                    <div className=" border rounded-lg p-2 my-3">

                      <p>Button Background HEX-Code  </p>
                      <div className='flex items-center my-2 flex-1 gap-x-3 '>
                        <input placeholder='Enter text here' type='color' name='' className=" p-2 border border-1 border-[#949AB1]  w-fuil flex flex-1" />
                        <Button className="bg-[#949AB1]">Pick Color</Button>
                      </div>
                    </div>
                    <div className=" border rounded-lg p-2 my-3">

                      <p>Button Border HEX-Code  </p>
                      <div className='flex items-center my-2 flex-1 gap-x-3 '>
                        <input placeholder='Enter text here' type='color' name='' className=" p-2 border border-1 border-[#949AB1]  w-fuil flex flex-1" />
                        <Button className="bg-[#949AB1]">Pick Color</Button>
                      </div>
                    </div>


                  </form>
                </div>
              </>}

            </div>
          </>)}
          {tabIndex !== "Scene" && (<>
            <div className="bg-white border p-3">

              <h1 className="text-[#171837] font-bold text-lg block">Embed Code</h1>
              <div className="flex">
                <div className='flex my-2 flex-1 w-full'>
                  <input placeholder='Enter text here' type='text' name='' className=" p-2 border border-1 border-[#949AB1]  w-fuil flex flex-1" />
                </div>
              </div>

              <div className="flex  flex-1 items-center gap-x-3 my-3">
                <Select
                  defaultValue={selectedOption}
                  onChange={handleChangeSeelect}
                  options={options}
                  className="w-full my-2"
                // isRtl
                />
                <Select
                  defaultValue={selectedOption}
                  onChange={handleChangeSeelect}
                  options={options}
                  className="w-full my-2"
                // isRtl
                />
              </div>
              <div className="flex  flex-1 items-center gap-x-3 my-3">
                <Select
                  defaultValue={selectedOption}
                  onChange={handleChangeSeelect}
                  options={options}
                  className="w-full my-2"
                // isRtl
                />
                <Select
                  defaultValue={selectedOption}
                  onChange={handleChangeSeelect}
                  options={options}
                  className="w-full my-2"
                // isRtl
                />
              </div>


              <div className=" border rounded-lg p-2 my-3">

                <p>Button Label  Color HEX-Code   </p>
                <div className='flex items-center my-2 flex-1 gap-x-3 '>
                  <input placeholder='Enter text here' type='color' name='' className=" p-2 border border-1 border-bg-[#949AB1]  w-fuil flex flex-1" />
                  <Button className="bg-[#949AB1]">Pick Color</Button>
                </div>
              </div>

            </div>
          </>)}
        </div>
      </div>



      <div className="flex  items-center justify-between bg-[#FCFCFF] border-[#F1F3FF] border p-5  w-[100%]">
        <div className="gap-x-3 flex">
          <Button className="bg-[#949AB1]">Undo Changes</Button>
          <Button className="bg-[#FF5660]">Delete Advert</Button>
        </div>
        <div className="gap-x-3 flex">
          <Button className='bg-[#868BA1] ' onClick={() => navigate(-1)}>Cancel</Button>
          <Button className='bg-[#19C165]'>Save Changes</Button>
        </div>
      </div>

    </form>
    </section>
  )
}

export default EditAdverts
