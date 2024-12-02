import React from 'react'

export const CandoCard = ({ picture, title, details }) => {
  return (
    <div>
      <div className="p-6 bg-white rounded-2xl flex-col justify-start items-start gap-2.5 inline-flex">
        <div className="self-stretch min-h-[390px] flex-col justify-start items-start gap-6 flex">
          <img className="w-12 h-12" src={picture} alt={picture} />
          <div className="self-stretch flex-col justify-start items-center gap-5 flex">
            <div className="self-stretch text-[#2e333e] text-3xl font-normal font-elmessiri  leading-9">{title}</div>
            <div className="self-stretch text-[#363636] text-base font-normal font-nunito leading-normal">{details}.</div>
          </div>
        </div>
      </div>
    </div>

  )
}
