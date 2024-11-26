import React from 'react'

export const Footer = () => {
  return (
    <>
      <div className="h-[528.20px] p-20 bg-[#0d4e6e] flex-col justify-start items-start gap-16 inline-flex">
        <div className="self-stretch h-[248px] justify-start items-start gap-32 inline-flex">
          <div className="w-[500px] flex-col justify-start items-start gap-6 inline-flex">
            <div className="w-[267px] h-[39px] relative">
              <div className="w-[290px] px-[4.46px] py-[1.11px] left-0 top-[3.62px] absolute justify-start items-center gap-[13.37px] inline-flex">
                <div className="w-[167px] text-white text-xl font-normal font-['Alice'] leading-[30.09px]">Somerville Dental</div>
              </div>
            </div>
            <div className="self-stretch text-white text-base font-normal font-['Nunito'] leading-normal">Join our newsletter to stay up to date on features and releases.</div>
            <div className="self-stretch h-28 flex-col justify-start items-start gap-4 flex">
              <div className="self-stretch justify-start items-start gap-4 inline-flex">
                <div className="grow shrink basis-0 h-12 p-3 rounded-[5px] border border-white justify-start items-center gap-2 flex">
                  <div className="grow shrink basis-0 text-white text-base font-normal font-['Nunito'] leading-normal">Enter your email</div>
                </div>
                <div className="h-12 px-6 py-3 bg-white rounded-[5px] border border-white justify-center items-center gap-2 flex">
                  <div className="text-[#005963] text-base font-normal font-['Nunito'] leading-normal">Subscribe</div>
                </div>
              </div>
              <div className="self-stretch text-white text-base font-normal font-['Nunito'] leading-normal">By subscribing you agree to with our Privacy Policy and provide consent to receive updates from our company.</div>
            </div>
          </div>
          <div className="grow shrink basis-0 h-60 justify-start items-start gap-10 flex">
            <div className="w-[322px] flex-col justify-start items-start gap-4 inline-flex">
              <div className="self-stretch text-white text-base font-bold font-['Nunito'] leading-normal">Links</div>
              <div className="self-stretch h-[200px] flex-col justify-start items-start flex">
                <div className="self-stretch py-2 justify-start items-start inline-flex">
                  <div className="grow shrink basis-0 text-white text-base font-normal font-['Nunito'] leading-normal">Home</div>
                </div>
                <div className="self-stretch py-2 justify-start items-start inline-flex">
                  <div className="grow shrink basis-0 text-white text-base font-normal font-['Nunito'] leading-normal">About</div>
                </div>
                <div className="self-stretch py-2 justify-start items-start inline-flex">
                  <div className="grow shrink basis-0 text-white text-base font-normal font-['Nunito'] leading-normal">Service</div>
                </div>
                <div className="self-stretch py-2 justify-start items-start inline-flex">
                  <div className="grow shrink basis-0 text-white text-base font-normal font-['Nunito'] leading-normal">Doctors</div>
                </div>
                <div className="self-stretch py-2 justify-start items-start inline-flex">
                  <div className="grow shrink basis-0 text-white text-base font-normal font-['Nunito'] leading-normal">Testimonials</div>
                </div>
              </div>
            </div>
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">
              <div className="self-stretch text-white text-base font-bold font-['Nunito'] leading-normal">Follow Us</div>
              <div className="self-stretch h-40 flex-col justify-start items-start flex">
                <div className="self-stretch py-2 justify-start items-center gap-3 inline-flex">
                  <div className="w-6 h-6 relative" />
                  <div className="text-white text-base font-normal font-['Nunito'] leading-normal">Facebook</div>
                </div>
                <div className="self-stretch py-2 justify-start items-center gap-3 inline-flex">
                  <div className="w-6 h-6 relative" />
                  <div className="text-white text-base font-normal font-['Nunito'] leading-normal">Instagram</div>
                </div>
                <div className="self-stretch py-2 justify-start items-center gap-3 inline-flex">
                  <div className="w-6 h-6 relative" />
                  <div className="text-white text-base font-normal font-['Nunito'] leading-normal">X</div>
                </div>
                <div className="self-stretch py-2 justify-start items-center gap-3 inline-flex">
                  <div className="w-6 h-6 relative" />
                  <div className="text-white text-base font-normal font-['Nunito'] leading-normal">LinkedIn</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch h-[56.20px] flex-col justify-start items-start gap-8 flex">
          <div className="self-stretch h-[0.20px] bg-white" />
          <div className="self-stretch justify-between items-start inline-flex">
            <div className="text-white text-base font-normal font-['Nunito'] leading-normal">© Somerville Dental Associates, All rights reserved</div>
            <div className="justify-start items-start gap-6 flex">
              <div className="text-white text-base font-normal font-['Nunito'] leading-normal">Privacy Policy</div>
              <div className="text-white text-base font-normal font-['Nunito'] leading-normal">Terms of Service</div>
              <div className="text-white text-base font-normal font-['Nunito'] leading-normal">Cookies Settings</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
