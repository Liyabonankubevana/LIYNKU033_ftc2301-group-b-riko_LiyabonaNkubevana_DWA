export default function Buttons() {
    const handleClick = () => {
      window.location.href = 'http://localhost:5173/Login';
    };
  
    return (
      <>
        <div className="w-[116px] h-11 justify-center items-center inline-flex">
          <div
            className="w-[116px] h-11 bg-amber-500 rounded-[18px] flex items-center justify-center text-black text-sm font-medium cursor-pointer"
            onClick={handleClick}
          >
            <span className="font-bold">Sign In</span>
          </div>
        </div>
      </>
    );
  }
  