

type Props = {}

const Navbar = (props: Props) => {
  const flexBetween = "flex items-center justify-between";
  return (
    <nav>
      <div className={`${flexBetween} fixed top-0 z-30  w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            <p>logo</p>
            <div className={`${flexBetween} w-full `}>
              <div className={`${flexBetween}  gap-8 text-sm`}>
                <p>Home</p>
                <p>Studios</p>
                <p>About Us</p>
                <p>Contact us</p>
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