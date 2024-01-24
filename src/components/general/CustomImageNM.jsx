
const CustomImageNM = ({className, src, alt}) => {
  return (
    <div className={`${className} rounded-xl bg-stroke overflow-hidden`}>
        <img src={src} alt={alt} className="w-full h-full object-cover object center" />
    </div>
  )
}

export default CustomImageNM