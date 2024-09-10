import React from 'react'
import imag from "../../assets/worksLogo.png"
import imag1 from "../../assets/how.png"

const HowItWorks = () => {
  return (
    <section>
        <div className='flex max-w-7xl mb-10 mx-auto justify-between  mt-8'>
            <div className=' w-1/2 h-1/2  p-10'>
                
                <h1 className=' text-6xl font-bold mb-4'>How It Works </h1>
                <p className='text-xl font-bold text-gray-400 mb-4'>Your food should match your effort. Our tasty meal plans and tailored macros support your fitness and weight goals.</p>
                <div className="">
  <div className="collapse collapse-arrow shadow-xl">
  <input type="radio" name="my-accordion-2" defaultChecked />
  <div className="collapse-title text-xl font-medium">What are the foods like Steel Yat? How does the mail plan work?</div>
  <div className="collapse-content">
    <p>hello</p>
  </div>
</div>
<div className="collapse collapse-arrow shadow-xl mt-2">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-xl font-medium">How Do I Eat Fresh and Lean?</div>
  <div className="collapse-content">
    <p>hello</p>
  </div>
</div>
<div className="collapse collapse-arrow shadow-xl mt-2">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-xl font-medium">How long do my meals last?</div>
  <div className="collapse-content">
    <p>hello</p>
  </div>
</div>
<div className="collapse collapse-arrow shadow-xl mt-2">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-xl font-medium">What if I don't eat them all at once?</div>
  <div className="collapse-content">
    <p>hello</p>
  </div>
</div>
<div className="collapse collapse-arrow shadow-xl mt-2">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-xl font-medium">What's in the food? Is it organic? Is it gluten free?</div>
  <div className="collapse-content">
    <p>hello</p>
  </div>
</div>
  </div>

            </div>
            <div className='w-1/2   p-8 h-1/2'>
               <img src={imag} alt="" />

            </div>

            
        </div>

        <div className='max-w-6xl mx-auto'>
                <img src={imag1} alt="" />

            </div>

    </section>
  )
}

export default HowItWorks