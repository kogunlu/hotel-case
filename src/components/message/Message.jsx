import React from 'react'


function Message() {
  return (
    <div className='w-full  flex justify-center items-center'>
        <div className='w-full flex justify-center items-center my-20'>

        <div className='w-1/6 lg:w-3/12'>
            <hr className='border-dashed border-1 border-slate-200' />
        </div>

        <div className='w-4/6 lg:w-6/12 h-full border-dashed border-2 border-slate-200 flex flex-col items-center justify-evenly rounded-lg gap-5' >
                

                <div className='w-5/6 flex flex-col justify-center items-center mt-2'>
                    <h3 className='text-center font-bold text-xl underline underline-offset-4 '>Genel Müdürümüzden Mesajınız Var</h3>
                </div>

                <div className='w-11/12'>

                    <p className='text-center'>"Geçmişten günümüze yapacağınız tarihi ve ikonik XXXX Hotel yolculuğunuzda, deneyiminizi eşsiz kılmak için, ben ve çalışma arkadaşlarım sizlere ev sahipliği yapmaktan büyük memnunluk duyacağız."</p>
                </div>

                <div className='w-full flex justify-center items-center mb-2'>
                    <p className='text-center font-bold text-xl italic hover:not-italic'>AHMET XXXXX</p>
                </div>
                
                    
                </div>

        <div className='w-1/6 lg:w-3/12'>
            <hr className='border-dashed border-1 border-slate-200' />
        </div>


        </div>
    </div>
    

  )
}

export default Message