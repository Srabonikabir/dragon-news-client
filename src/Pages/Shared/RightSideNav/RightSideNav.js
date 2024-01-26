import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGithub, FaGoogle,FaFacebook,FaTwitter,FaInstagram,FaWhatsapp } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarousel from '../BrandCarousel/BrandCarousel';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const RightSideNav = () => {
    const {ProviderLogin} = useContext(AuthContext)

    const googleProvider = new GoogleAuthProvider ()
    const handleGoogleSignIn = () =>{
        ProviderLogin(googleProvider)
.then(result =>{
    const user = result.user;
    console.log(user);
})
.catch(error => console.error(error))




    }
    return (
        <div>
             <ButtonGroup vertical>
      <Button onClick={handleGoogleSignIn} className='mb-2' variant="outline-primary"><FaGoogle></FaGoogle> Log in With Google</Button>
      <Button variant="outline-dark"><FaGithub></FaGithub> Log in With Github</Button>

  
     </ButtonGroup>
     <div className='mt-4 '>
        <h5>
            Find us on
        </h5>
        <ListGroup>
      <ListGroup.Item className='mb-2'><FaFacebook></FaFacebook>Facebook</ListGroup.Item>
      <ListGroup.Item className='mb-2'><FaTwitter></FaTwitter>Twitter</ListGroup.Item>
      <ListGroup.Item className='mb-2'><FaInstagram></FaInstagram>Instagram</ListGroup.Item>
      <ListGroup.Item className='mb-2'><FaWhatsapp></FaWhatsapp>Whatsapp</ListGroup.Item>
      <ListGroup.Item className='mb-2'>Vestibulum at eros</ListGroup.Item>
    </ListGroup>

     </div>
     <BrandCarousel></BrandCarousel>
        </div>
    );
};

export default RightSideNav;