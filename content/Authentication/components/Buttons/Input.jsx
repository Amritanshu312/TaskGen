const Input = ({ type, placeholder, onchange, value }) => {
  return (
    <div className="flex items-center gap-2 border-[3px] font-['poppins'] py-1 text-base border-[#31313e] justify-center rounded-2xl text-[#dcdcdc] px-4">
      <input
        type={type}
        className="w-full h-full bg-transparent outline-0 py-2 placeholder:text-[#d9d9d9]"
        placeholder={placeholder}
        onChange={e => onchange(e.target.value)}
        value={value}
      />

    </div>
  )
}

export default Input