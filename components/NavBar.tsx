

interface NavBarProps {
  darkModeCallback: () => void;
}
const NavBar: React.FC<NavBarProps> = ({ darkModeCallback }) => {
    return (
      <div className="navzone fixed w-full top-0 h-20 z-10 border-b shadow-lg flex items-center px-5 bg-background text-foreground-primary">
        <div className="logo bg-cover bg-no-repeat bg-center h-14 w-16" style={{ backgroundImage: "url('/pusher-atlas-globe-colors1.gif')" }}>
        </div>
        <h1 className="title mt-2 ml-7 text-xl font-semibold uppercase text-left ">Survivor Salta</h1>
        <div>
          <button className="darkmode-button" onClick={darkModeCallback}>
           mode <MoonIcon className="inline-block w-6 h-6" />
          </button>
        </div>
        <div className="navbox fixed top-0 right-5 mr-0 z-11 mt-4 w-10 h-12 bg-contain bg-no-repeat" style={{ backgroundImage: "url('/hamburger-4slice.svg')" }}>
          <a href="#" className="icon block h-full w-full">
            {/* This empty anchor tag ensures the entire div is clickable */}
          </a>
        </div>
        
      </div>
    );
  };

  export default NavBar;

  function MoonIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
      </svg>
    )
  }