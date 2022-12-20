import React from 'react'
import { BsTelephoneFill } from "react-icons/bs";
import { TfiInstagram, TfiTwitter } from "react-icons/tfi";
import { FaFax, FaFacebookF} from "react-icons/fa";
import { HiMail  } from "react-icons/hi";
import etbis from "../../pictures/etbis.jpg"
import tursab from "../../pictures/tursab.png"

function Footer() {
  return (
    <div className='w-full flex items-center justify-center bg-gradient-to-b from-white to-black pb-5'>
        <div className='w-full flex flex-col items-center border-t-2 pt-2'>

            <div className='flex flex-col justify-center items-center mb-5'>
                    <h3 className='text-center font-bold text-xl underline underline-offset-8 my-2 '>Hakkımızda</h3>
                    <p className='text-center px-5 text-md'>Otelimiz [XXXX], Ege bölgesinde, İzmir ilinin Alsancak ilçesinde yer almaktadır. Otelimiz, 100 odalı ve 5 yıldızlı bir oteldir.</p>

            </div>

            <div className='flex flex-col items-center justify-center'>
                <p className='text-xl font-bold text-center underline underline-offset-8'>Bize Ulaşın</p>

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

            <div className='w-3/6 flex flex-col lg:flex-row justify-evenly items-center mt-5 py-3 lg:border-t-2'>

                <div className='w-full md:w-5/6'>
                    <div className='w-full flex justify-evenly items-center mt-2 border-t-2 py-3 pt-5 lg:border-none'>

                    <a href='#'>
                        <TfiInstagram className='text-2xl lg:text-3xl xl:text-4xl' />
                    </a>

                    <a href='#'>
                        <FaFacebookF style={{background: "none"}} className='text-2xl lg:text-3xl xl:text-4xl' />
                    </a>

                    <a href='#'>
                    <TfiTwitter className='text-2xl lg:text-3xl xl:text-4xl' />
                    </a>

                    </div>

                    <div className='w-full flex justify-evenly items-center mt-3 border-t-2 pt-4 pb-2'>
                    <img height="40" src="https://shoplineimg.com/assets/footer/card_visa.png" alt='visa'/>
                    <img height="40" src="https://shoplineimg.com/assets/footer/card_master.png" alt='mastercard'/>
                    </div>
                </div>
                

                <div className='w-full md:w-5/6 lg:w-3/6 flex justify-evenly items-center mt-3 mb-2 border-t-2 py-3 lg:border-none'>
                <img className='w-2/6' src={etbis} alt='etbis'/>
                <img className='w-2/6' src={tursab} alt='tursab'/>
                </div>
            </div>


            </div>
    </div>
    
  )
}

export default Footer