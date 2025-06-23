import { Anchor, Button, Checkbox, PasswordInput, rem, TextInput } from "@mantine/core";
import { IconAt, IconLock } from "@tabler/icons-react";
import { Link } from "react-router-dom";

const SignUp = () =>{
    return(
        <div className="w-1/2 px-20 flex flex-col justify-center gap-4">
            <div className="text-2xl font-semibold text-white">Create Account</div>
       <TextInput className="font-semibold" withAsterisk label="Full Name" placeholder="Your name"/>     
        <TextInput  className="font-semibold" withAsterisk
           leftSection={<IconAt style={{width:rem(16),height:rem(16)}}  />}
           label="Email"
           placeholder="Your email"
        />    
        <PasswordInput className="font-semibold" withAsterisk leftSection={<IconLock style={{width:rem(18),height:rem(18),}} stroke={1.5}/>} 
        label="Password" placeholder="Type password.."/>
        <PasswordInput   withAsterisk leftSection={<IconLock style={{width:rem(18),height:rem(18),}} stroke={1.5}/>} 
        label="Confirm Password" placeholder="confirm password.."/>
      <Checkbox  className="font-semibold" autoContrast label={<>I accept {''}<Anchor>terms & conditions</Anchor></>}/>
    <Button autoContrast variant="filled">Sign Up</Button>  
    <div className="mx-auto">Have an account ?<Link to="/login" className="text-bright-sun-400 hover:underline"> Login</Link></div>  
        </div>
    )
}
export default SignUp;