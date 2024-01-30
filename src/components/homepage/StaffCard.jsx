import CustomImageNM from "../general/CustomImageNM";

const StaffCard = ({ name, position, primary, src, alt }) => {
  return (
    <div className="min-w-60 h-76 rounded-xl border border-stroke overflow-hidden">
      <CustomImageNM className="w-full h-58 rounded-none" src={src} alt={alt} />
      {/* <div className="p-3 space-y-1 font-normal text-black">
            <h3 className="text-lg md:text-2xl">{name}</h3>
            <span className={`text-[13px] md:text-base ${primary ? 'text-primary' : ''}`}>{position}</span>
        </div> */}
    </div>
  );
};

export default StaffCard;
