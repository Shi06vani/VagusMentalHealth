import React from 'react'

const HeroSection = () => {
  return (
    <div>
      
       <div className="p-6 space-y-6 bg-powderBlue text-charcoal">
      <h1 className="text-h1 font-playfair text-royalBlue">PlayfairDisplay Heading (H1)</h1>
      <h2 className="text-h2 font-playfair">PlayfairDisplay Subheading (H2)</h2>

      <p className="text-h4 font-poppins">
        This paragraph uses <span className="font-semibold text-royalBlue">Poppins</span> font with heading size H4.
      </p>

      <p className="text-h6 font-inter text-gray60">
        This small text uses <span className="italic">Inter</span> font with opacity 80% color.
      </p>

      <div className="bg-snowWhite p-4 rounded shadow">
        <p className="font-poppins text-headingSmall text-charcoal">
          Box with <strong>snowWhite</strong> background and <strong>headingSmall</strong> size
        </p>
      </div>
    </div>
      
    </div>
  )
}

export default HeroSection
