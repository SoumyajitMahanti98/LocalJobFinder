import { Button, Divider, FileInput, LoadingOverlay, Notification, NumberInput, rem, Textarea, TextInput } from '@mantine/core';
import { IconCheck, IconPaperclip } from '@tabler/icons-react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ApplyJobComp = () =>{
  const  [Preview,setPreview] = useState (false);
  const  [Submit,setSubmit] = useState (false);
   const [sec,setSec] = useState(5);
   const navigate = useNavigate();
  
  const handlePreview = () => {
    setPreview(!Preview);
    window.scrollTo({top:0,behavior:'smooth'});
  };
  const handleSubmit = () =>{
    // Handle form submission logic here
    setSubmit(true);
    console.log('Form submitted');
    
    // Use a timer ID to clear the interval when needed
    const timerId = setInterval(() => {
      setSec(prevSec => {
        const newSec = prevSec - 1;
        if (newSec <= 0) {
          clearInterval(timerId);
          navigate('/find-jobs');
        }
        return newSec;
      });
    }, 1000);
  }
  
    return (
      <>
        {/* Custom loading overlay when form is submitted */}
        {Submit && (
          <div 
            className="fixed inset-0 flex items-center justify-center z-[1000]" 
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}
          >
            <div className="w-16 h-16 border-4 border-bright-sun-400 border-solid rounded-full border-t-transparent animate-spin"></div>
          </div>
        )}
        
        <div className='w-2/3 mx-auto relative'>
 <div className="flex justify-between mb-3">
                <div className="flex gap-2 items-center"> 
                    <div className="p-3 bg-mine-shaft-800 rounded-xl">
                        <img className="h-14 " src={`/Icons/Google.png`} alt="" />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <div className="font-semibold text-2xl">Software Engineer III</div>
                        <div className="text-lg text-mine0shaft-300">Google &bull; 3 days ago &bull; 48  Applicants</div>
                    </div>
                </div>
            </div>
               <Divider  my={"xl"} />
        <div className='text-xl font-semibold mb-5'>Submit Your Application</div>  
           <div className='flex flex-col gap-5'>
               <div className='flex gap-10 [&>*]:w-1/2'>
                  <TextInput readOnly={Preview} variant={Preview ? "unstyled":"default"} className={`${Preview?"text-mine-shaft-300 font-semibold":""}}`} label="Full Name" withAsterisk placeholder='Enter name' />  
                    <TextInput readOnly={Preview} variant={Preview ? "unstyled":"default"} className={`${Preview?"text-mine-shaft-300 font-semibold":""}}`} label="Email" withAsterisk placeholder="Enter email" /> 
               </div>
                <div className='flex gap-10 [&>*]:w-1/2'>
                  <NumberInput readOnly={Preview} variant={Preview ? "unstyled":"default"} className={`${Preview?"text-mine-shaft-300 font-semibold":""}}`} label="Phone Number" withAsterisk placeholder='Enter phone number' hideControls min={0} max={9999999999} clampBehavior='strict'/>  
                    <TextInput readOnly={Preview} variant={Preview ? "unstyled":"default"} className={`${Preview?"text-mine-shaft-300 font-semibold":""}}`} label="Personal Website" withAsterisk placeholder="Enter url" /> 
               </div>
                 <FileInput readOnly={Preview} variant={Preview ? "unstyled":"default"} className={`${Preview?"text-mine-shaft-300 font-semibold":""}}`} withAsterisk
        leftSection={<IconPaperclip stroke={1.5}/>}
        label="Attach your CV"
        placeholder="Your CV"
        leftSectionPointerEvents="none"
      />
       <Textarea readOnly={Preview} variant={Preview ? "unstyled":"default"} className={`${Preview?"text-mine-shaft-300 font-semibold":""}}`} withAsterisk
        placeholder="Type something about yourself.."
        label="Cover Letter"
        autosize
        minRows={4}
      />
    { !Preview &&<Button onClick={handlePreview}  className=" text-bright-sun-400">Preview</Button>}
      {
        Preview && <div className='flex gap-10 [&>*]:w-1/2'>
          <Button fullWidth onClick={handlePreview}  className=" text-bright-sun-400">Edit</Button>
          <Button fullWidth onClick={handleSubmit}  className=" text-bright-sun-400">Submit</Button>
        </div>
      }
            </div>
        </div>  
        
      {Submit && (
        <Notification className={`!border-bright-sun-400  !fixed top-0 left-[35%] z-[1001]  transition duration-300 ease-in-out  ${Submit?"translate-y-0":"-translate-y-20"}`} icon={<IconCheck style={{width:rem(20),height:rem(20)}} />} color="teal" withBorder title="Application submitted!" mt="md" withCloseButton={false}>
          Redirecting to find Jobs in {sec} seconds...
        </Notification>
      )}
      </>
    )
}
export default ApplyJobComp;