import CustomImageNM from "../general/CustomImageNM";

export default function OurProjects() {
    return (
      <section className='py-7 md:py-10'>
            <div className="flex gap-10 items-center justify-between mb-9 md:mb-14">
                <h2 className="text-[22px] text-black md:first-letter:text-[32px] uppercase font-semibold">Explore the diverse projects done by the students</h2>
                <button className="text-base text-primary md:text-xl flex-shrink-0 flex items-center gap-1">See all <img src="/arrow-right.png" alt="" width={16} height={16} className="w-4 h-4 md:w-5 md:h-5" /></button>
            </div>
            <div className="slide-show flex gap-4 md:gap-5 overflow-x-scroll pb-2">
            
                <CustomImageNM className='min-w-72 h-300 md:min-w-326' src='/homepage/project-1.jpg' alt='' />
                <CustomImageNM className='min-w-72 h-300 md:min-w-326' src='/homepage/project-2.jpg' alt='' />
                <CustomImageNM className='min-w-72 h-300 md:min-w-326' src='/homepage/project-3.jpg' alt='' />
                <CustomImageNM className='min-w-72 h-300 md:min-w-326' src='/homepage/project-4.jpg' alt='' />
                <CustomImageNM className='min-w-72 h-300 md:min-w-326' src='/homepage/project-5.jpg' alt='' />
                <CustomImageNM className='min-w-72 h-300 md:min-w-326' src='/homepage/project-1.jpg' alt='' />
                <CustomImageNM className='min-w-72 h-300 md:min-w-326' src='/homepage/project-2.jpg' alt='' />
                <div className="min-w-[12px] h-300"></div> 


            </div>
      </section>
    )
  }