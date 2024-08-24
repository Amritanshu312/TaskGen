import "@/css/loading.css"

const Loader = () => {
  // Generate an array of blobs
  const blobs = Array.from({ length: 6 }, (_, i) => i);

  return (
    <div className="fixed w-full h-full left-0 top-0 z-50 bg-[radial-gradient(#181820,#000)] bg-[#181820] text-[16px]">
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style={{ position: 'absolute', width: '0', height: '0' }}>
        <defs>
          <filter id="gooey">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 0 18 -7"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      {blobs.map((i) => (
        <div key={i} className={`blob blob-${i}`} />
      ))}
    </div>
  );
}

export default Loader