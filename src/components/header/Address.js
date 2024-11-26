import React from 'react'

export const Address = () => {
  return (
    <>
      <div className="w-full h-full px-20 py-4 bg-[#0D4E6E] flex flex-col justify-start items-start gap-2">
        <div className="w-full flex justify-between items-center">
          <div className="flex justify-start items-center gap-3">
            <i className="bi bi-geo-alt text-white text-lg"></i>
            <div className="text-white text-sm font-normal font-[Nunito] leading-[22.4px] break-words">
              3 Ashland Street Medford, MA 02155
            </div>
          </div>
          <div className="flex justify-start items-center gap-5.5">
            <div className="flex justify-start items-center gap-3">
              <i class="bi bi-telephone text-white text-md"></i>
              <div className="text-white text-sm font-normal font-[Nunito] leading-[22.4px] break-words">
                (+1) (781)-(874)-(1630)
              </div>
            </div>
            <div className='px-4 text-white'>|</div>
            <div className="flex justify-start items-center gap-3">
              <i class="bi bi-envelope text-white text-md"></i>
              <div className="text-white text-sm font-normal font-[Nunito] leading-[22.4px] break-words">
                somervilledental@verzion.net
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
