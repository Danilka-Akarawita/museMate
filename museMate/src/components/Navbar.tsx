import Link from "./Link";


type Props = {
  selectedPage: string;
  setSelectedPage: (value: string) => void;
}

const Navbar = ({selectedPage,setSelectedPage}: Props) => {
  const flexBetween = "flex items-center justify-between";
  return (
    <nav>
      <div className={`${flexBetween} fixed top-0 z-30  w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            <p>logo</p>
            <div className={`${flexBetween} w-full `}>
              <div className={`${flexBetween}  gap-8 text-sm`}>
                <Link 
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}/>
                 <Link
                    page="Studios"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="AboutUs"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Contact Us"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
              </div>
              <div className={`${flexBetween} gap-8`}>
                <p>Sign In</p>
                <button> Become a member</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar