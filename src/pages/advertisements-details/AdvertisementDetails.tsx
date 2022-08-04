import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Breadcrubs from '../../components/breadcrubs/Breadcrubs'

export interface BreadcrumbsProps {
  url?: string
  name?: string
  lenght?: number
}
export interface BreadcrumsbItemsProps {
  bread?: BreadcrumbsProps[]
}
const bread: BreadcrumbsProps[] = [
  {
    name: 'Dashboard',
    url: ''
  },
  {
    name: 'Advertisements',
    url: "advertisements"
  },
  {
    name: 'Advertisements Details',
    url: "advertisements-details"
  }
]

const AdvertisementDetails = () => {

  const navigate = useNavigate();

  return (
    <section>
      <div className="flex items-center justify-between">
        <Breadcrubs {...{ bread }} />
        <Link to="" onClick={() => navigate(-1)} className="text-[#516CF5]" >&#60; &#60; Back</Link>
      </div>

    </section>
  )
}

export default AdvertisementDetails
