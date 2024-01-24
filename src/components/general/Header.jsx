
const Header = () => {
  return (
    <header className="flex items-center justify-between bg-primary-bg/60 fixed top-6 left-5 right-5 md:pb-4 md:border-b md:border-stroke xl:right-0 xl:w-[1240px] xl:left-1/2 xl:-translate-x-1/2 z-50 backdrop-blur-md">
        <span className="text-primary text-2xl font-semibold uppercase">Logo</span>

        {/* destop navigation */}
        <div>
          <ul className="hidden md:flex self-end items-center justify-between gap-7 lg:gap-10 text-black text-lg">
            <li><span className="flex gap-1 items-center">Sections <img src="/arrow-down.svg" /></span></li>
            <li><span>Projects</span></li>
            <li><span>Academics</span></li>
            <li><span>Staff</span></li>
          </ul>
        </div>


        {/* mobile navigation toggle menu */}
        <button className="inline-block md:hidden">
            <img src="/menu.svg" alt="" width={29} height={29} />
        </button>


        {/* desktop connect button */}
        <button className="hidden md:inline-block primary-button">Contact</button>
    </header>
  )
}

export default Header;