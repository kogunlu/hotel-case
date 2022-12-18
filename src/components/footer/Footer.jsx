import React from 'react'
import { BsTelephoneFill } from "react-icons/bs";
import { FaFax, FaInstagramSquare, FaFacebookF, FaTwitterSquare   } from "react-icons/fa";
import { HiMail  } from "react-icons/hi";
import etbis from "../../pictures/etbis.jpg"
import tursab from "../../pictures/tursab.png"

function Footer() {
  return (
    <div className='w-full flex flex-col items-center border-t-2 pt-2'>

        <div className='flex flex-col items-center justify-center'>
            <p className='text-xl font-bold text-center underline underline-offset-8'>XXX İzmir Hotel</p>

            <p className='text-md font-normal text-center mt-2'>Akdeniz Mah. Gaziosmanpaşa Bul. No:11111 Alsancak,İzmir, 35210</p>

            <span className='w-3/6 flex justify-center items-end mt-2 gap-2'>
                <BsTelephoneFill className='text-sm mb-0.5'/>
                <p className='text-sm font-normal text-center'><strong>+90 232 497 ** **</strong></p>
            </span>

            <span className='w-3/6 flex justify-center items-end mt-2 gap-2'>
                <FaFax className='text-sm mb-0.5' />
                <p className='text-sm font-normal text-center mt-2'><strong>+90 232 497 ** **</strong></p>
            </span>

            <span className='w-5/6 flex justify-center items-end gap-2'>
                <HiMail className='text-md mb-0.5' />
            <p className='text-sm font-normal text-center mt-2'>reservation.izmir@xxxhotel.com</p>
            </span>
        </div>

        <div className='w-3/6 flex justify-evenly items-center mt-5 border-t-2 py-3 pt-5'>

            <a href='#'>
                <FaInstagramSquare className='text-2xl' />
            </a>

            <a href='#'>
                <FaFacebookF className='text-2xl' />
            </a>

            <a href='#'>
            <FaTwitterSquare className='text-2xl' />
            </a>

        </div>

        <div className='w-3/6 flex justify-evenly items-center mt-3 border-t-2 pt-4 pb-2'>
            <img height="40" src="https://shoplineimg.com/assets/footer/card_visa.png" alt='visa'/>
            <img height="40" src="https://shoplineimg.com/assets/footer/card_master.png" alt='mastercard'/>
        </div>

        <div className='w-3/6 flex justify-evenly items-center mt-3 mb-2 border-t-2 py-3'>
            <img className='w-2/6' src={etbis} alt='etbis'/>
            <img className='w-2/6' src={tursab} alt='tursab'/>
        </div>
    </div>
  )
}

export default Footer