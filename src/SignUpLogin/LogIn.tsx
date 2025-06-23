import { Anchor, Button, Checkbox, PasswordInput, rem, TextInput } from "@mantine/core";
import { IconAt, IconLock } from "@tabler/icons-react";
import { Link } from "react-router-dom";

const LogIn = () =>{
    return(
         <div className="w-1/2 px-20 flex flex-col justify-center gap-4">
                    <div className="text-2xl font-semibold text-white">Get Started</div>
    
                <TextInput  className="font-semibold" withAsterisk
                   leftSection={<IconAt style={{width:rem(16),height:rem(16)}}  />}
                   label="Email"
                   placeholder="Your email"
                />    
                <PasswordInput className="font-semibold" withAsterisk leftSection={<IconLock style={{width:rem(18),height:rem(18),}} stroke={1.5}/>} 
                label="Password" placeholder="Type password.."/>
                
              <Checkbox  className="font-semibold" autoContrast label={<>I accept {''}<Anchor>terms & conditions</Anchor></>}/>
            <Button autoContrast variant="filled">Log In</Button>  
            <div className="mx-auto">Don't have an account ?<Link to="/signup" className="text-bright-sun-400 hover:underline"> Signup </Link></div>  
    </div>
    )
}
export default LogIn;