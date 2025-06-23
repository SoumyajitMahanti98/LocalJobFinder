const CertiCard = (props:any) =>{
    return(
       
            <div className="flex justify-between">
                <div className="flex gap-2 items-center"> 
                    <div className="p-2 bg-mine-shaft-800 rounded-md">
                        <img 
                            className="h-7 w-7 object-contain" 
                            src={`/Icons/${props.issuer.replace(/\s+/g, '')}.png`} 
                            alt={props.issuer}
                            onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = '/Icons/Microsoft.png'; // Fallback image
                            }} 
                        />
                    </div>
                    <div className='flex flex-col'>
                        <div className="font-semibold">{props.title || props.name}</div>
                        <div className="text-sm text-mine-shaft-300">{props.issuer} </div>
                    </div>
                </div>
                <div className="flex flex-col items-end">
                <div className="text-sm text-mine-shaft-300">{props.issueDate || props.date}</div>
                <div className="text-sm text-mine-shaft-300">{props.certificateId}</div>
                </div>            
            </div>
            
    )
}
export default CertiCard;      