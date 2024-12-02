import React from 'react'

export const TestimonialCard = ({ picture, name, review }) => {
  return (
    <div className="flex flex-col max-w-sm mx-auto items-center w-full">
      <div className="relative w-full">
        <div className="aspect-square">
          <img
            className="w-full h-full object-cover rounded-lg"
            src={picture}
            alt={name}
          />
        </div>
        <div className="relative -mt-24 px-2">
          <div className="w-full bg-white rounded-lg border-l border-r border-t border-b-4 border-[#0d4e6e] p-4">
            <div className="flex flex-col items-center gap-4">
              <h2 className="pt-2 text-[#0d0d0d] text-3xl font-normal font-elmessiri">
                {name}
              </h2>
              <p className="text-[#363636] text-lg font-normal font-nunito text-center min-h-[250px]">
                {review}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}