import React from 'react'

export const Menu = () => {
  return (
    <>
      <div className="h-[100px] w-full h-full px-20 py-6 bg-white flex-col justify-start items-start gap-2.5 inline-flex">
        <div className="self-stretch justify-between items-center inline-flex">
          <div className="justify-start items-center gap-8 flex">
            <div><span style={{ color: '#010c0d', fontSize: '32px', fontWeight: '800', fontFamily: 'Inter', lineHeight: '51.20px' }}>Somerville </span><span style={{ color: '#010c0d', fontSize: '32px', fontWeight: '300', fontFamily: 'Inter', lineHeight: '51.20px' }}>Dental</span></div>
            <div className="w-0.5 h-8 bg-[#e7e7e7]"></div>
            <div className="justify-start items-center gap-6 flex">
              <div className="text-center text-[#363636] text-base font-normal font-['Nunito'] leading-relaxed">Home</div>
              <div className="text-center text-[#363636] text-base font-normal font-['Nunito'] leading-relaxed">About Us</div>
              <div className="text-center text-[#363636] text-base font-normal font-['Nunito'] leading-relaxed">Services</div>
              <div className="text-center text-[#363636] text-base font-normal font-['Nunito'] leading-relaxed">Testimonials</div>
              <div className="text-center text-[#363636] text-base font-normal font-['Nunito'] leading-relaxed">Contact Us</div>
            </div>
          </div>
          <div className="px-6 py-3 bg-[#0d4e6e] rounded-xl flex justify-start  items-center gap-2.5">
            <div className="text-white text-base font-medium font-['Nunito'] leading-none">Plan Your Visit!</div>
          </div>
        </div>
      </div>
    </>
  )
}
