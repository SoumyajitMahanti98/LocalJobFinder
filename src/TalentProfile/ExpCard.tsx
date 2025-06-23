const ExpCard = (props:any) =>{
    return(
        <div className="flex flex-col gap-2">
            <div className="flex justify-between">
                <div className="flex gap-2 items-center"> 
                    <div className="p-2 bg-mine-shaft-800 rounded-md">
                        <img 
                            className="h-7 w-7 object-contain" 
                            src={`/Icons/${props.company.replace(/\s+/g, '')}.png`} 
                            alt={props.company}
                            onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = '/Icons/Microsoft.png'; // Fallback image
                            }} 
                        />
                    </div>
                    <div className='flex flex-col'>
                        <div className="font-semibold">{props.title}</div>
                        <div className="text-sm text-mine-shaft-300">{props.company} &bull; {props.location}</div>
                    </div>
                </div>
                <div className="text-sm text-mine-shaft-300">
                {props.duration || `${props.startDate} - ${props.endDate}`}
                </div>            
            </div>
              <div className="text-sm text-mine-shaft-300 text-justify" >
                   {props.description}
            </div>    
        </div>
    )
}
export default ExpCard;