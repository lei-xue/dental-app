import React from 'react'
import Paul from './../assets/images/Paul.png'
import Deanna from './../assets/images/Deanna.png'
export const Mission = () => {
  return (
    <section id="about">
      <div className="px-20 pt-20 pb-14 flex-col justify-start items-start gap-2.5">
        <div className="self-stretch flex-col justify-start items-center gap-16 flex">
          <div className="self-stretch justify-center items-center gap-9 inline-flex">
            <div className="grow shrink basis-0 flex-col justify-start items-center gap-7 inline-flex">
              <div className="self-stretch h-96 flex-col justify-start items-center gap-7 flex">
                <div className="flex-col justify-start items-center gap-5 flex">
                  <div className="text-center text-[#0d4e6e] text-sm font-semibold font-['Nunito'] tracking-wide">ABOUT US</div>
                  <div className="text-[#090909] text-5xl font-normal font-['El Messiri'] leading-10">Our Mission</div>
                </div>
                <div className="self-stretch h-64 flex-col justify-start items-start gap-6 flex">
                  <div className="self-stretch text-center text-[#363636] text-lg font-normal font-['Nunito']">Going to the dentist can be an amazing experience when you choose a dental office that takes the patients’ comfort into consideration. We are a traditional general and cosmetic dental office, who can provide you with all the dental care you require to keep your smile healthy and beautiful.​</div>
                  <div className="self-stretch text-center text-[#363636] text-lg font-normal font-['Nunito']">Our goal at Somerville Dental Associates is to assist each patient in achieving and maintaining long-term dental health and a beautiful smile. We are happy to serve our neighbors in and around our surrounding areas with exceptional dental care.</div>
                  <div className="self-stretch text-center text-[#363636] text-lg font-normal font-['Nunito']">We value the trust that you place in us to manage your dental care, and we work hard to continue to earn that trust every time you visit. At Somerville Dental Associates you will be treated as family.<br /><br />Part of our commitment to serving our patients includes providing information that helps them to make more informed decisions about their oral health needs. Our experienced and friendly staff takes great pride in making sure you are well informed with the recommend treatment and how your insurance will factor into your treatment. We look forward to not only helping keep your smile healthy and beautiful but also to building great friendships with our patients.</div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-80 justify-start items-center gap-20 inline-flex">
            <div className="w-80 self-stretch shadow flex-col justify-start items-start inline-flex">
              <img className="self-stretch h-60 rounded-tl-lg rounded-tr-lg" src={Paul} alt="Paul" />
              <div className="self-stretch grow shrink basis-0 px-5 py-4 rounded-bl-lg rounded-br-lg flex-col justify-center items-center gap-2 flex">
                <div className="self-stretch h-12 flex-col justify-start items-center gap-6 flex">
                  <div className="flex-col justify-start items-center gap-2 flex">
                    <div className="text-center text-[#050505] text-xl font-bold font-['DM Sans'] leading-relaxed">Dr. Paul K. Shick</div>
                    <div className="text-center text-[#373737] text-sm font-normal font-['Nunito'] leading-none">Dentist</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-80 self-stretch shadow flex-col justify-start items-start inline-flex">
              <img className="self-stretch h-60 rounded-tl-lg rounded-tr-lg" src={Deanna} alt="Deanna" />
              <div className="self-stretch grow shrink basis-0 px-5 py-3.5 rounded-bl-lg rounded-br-lg flex-col justify-center items-center gap-2 flex">
                <div className="self-stretch h-12 flex-col justify-start items-center gap-6 flex">
                  <div className="flex-col justify-start items-center gap-2 flex">
                    <div className="text-center text-[#050505] text-xl font-bold font-['DM Sans'] leading-relaxed">Deanna M.</div>
                    <div className="text-center text-[#373737] text-sm font-normal font-['Nunito'] leading-none">Office Manager</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
