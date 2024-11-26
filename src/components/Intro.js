import React from 'react'

export const Intro = () => {
  return (
    <>
      <div className="w-full h-96 px-20 flex-col justify-center items-center gap-2.5 inline-flex">
        <div className="self-stretch grow shrink basis-0 justify-start items-start gap-6 inline-flex">
          <div className="grow shrink basis-0 pt-20 flex-col justify-start items-start gap-12 inline-flex">
            <div className="self-stretch h-80 flex-col justify-start items-start gap-7 flex">
              <div className="self-stretch h-52 flex-col justify-start items-start gap-7 flex">
                <div className="w-60 h-4 text-[#0d4e6e] text-lg font-semibold font-['Nunito'] leading-loose tracking-wide">Quality Dental Health Is</div>
                <div className="self-stretch text-[#090909] text-6xl font-normal font-['El Messiri'] leading-10">Comfortable And<br />Traditional General<br />And Cosmetic Dentistry</div>
              </div>
              <div className="w-96 text-[#363636] text-xl font-normal font-['Nunito'] leading-loose">At Somerville Dental Associates, our dental staff strives to make your experience as comfortable as possible to ensure you get the quality dental care you require.</div>
            </div>
            <div className="justify-start items-start gap-7 inline-flex">
              <div className="px-7 py-3.5 bg-[#0d4e6e] rounded-lg justify-center items-center gap-2.5 flex">
                <div className="text-white text-base font-semibold font-['Nunito']">Plan Your Visit</div>
              </div>
              <div className="px-7 py-3.5 rounded-lg border border-[#0d4e6e] justify-center items-center gap-2.5 flex">
                <div className="text-[#0d4e6e] text-base font-semibold font-['Nunito']">Check Our Services</div>
              </div>
            </div>
          </div>
          <div className="w-96 self-stretch relative">
            <div className="w-96 h-96 left-0 top-0 absolute bg-[#d9d9d9]" />
            <img className="w-96 h-96 left-[-5.35px] top-[-11.57px] absolute" src="../assets/images/smileGirl.png" alt="Smiling girl" />
          </div>
        </div>
      </div>


    </>
  )
}
