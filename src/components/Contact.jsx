import React, {useState} from 'react'
import {BsInstagram, BsWhatsapp, BsTwitter} from 'react-icons/bs'

const Contact = () => {

  const [userData, setUserData] = useState({
    email: ""
  });

  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value});
  };

  //connect with firebase
  const submitData = async(event) => {
    event.preventDefault();
    const { email } = userData;
    const res = fetch('https://fiesta-d0c19-default-rtdb.firebaseio.com/userDataRecords.json', 
    {
      method: "POST",
      headers: {
        "Content-Type" : "application/json",
      },
      body:JSON.stringify({
        email
      }),
    });

    if(res) {
      setUserData({
        email: ""
      })
    }
  }

  return (
    <div name='contact'>
      <h1 className='text-2xl pt-10'>Contact Us</h1>
      <div className='grid md:grid-cols-3 divide-x divide-black pt-10'>
        <div>
            <h1 className='text-xl font-normal pb-2'>PHONE</h1>
            <p className='font-bold pb-6'>+91 77558 86047</p>
        </div>
        <div>
            <h1 className='text-xl font-normal pb-2'>E-MAIL</h1>
            <p className='font-bold pb-6'>itsfiestarepublic@gmail.com</p>
        </div>
        <div>
            <h1 className='text-xl font-normal pb-2'>SOCIALS</h1>
            <div className=' flex justify-center'>
              <a href='https://instagram.com/itsfiestarepublic?igshid=YmMyMTA2M2Y='>
                <BsInstagram className='px-2 w-10 h-10 cursor-pointer'/>
              </a>
              <a href='https://twitter.com/FiestaRepublic?t=VeIxvIRC9bRSKdHOZi2MGQ&s=09'>
                <BsTwitter className='px-2 w-10 h-10 cursor-pointer'/>
              </a>
              <a href='https://wa.me/917755886047?text='>
                <BsWhatsapp className='px-2 w-10 h-10 cursor-pointer'/>
              </a>
            </div>
        </div>
        
      </div>
      <div className='flex  justify-center pt-10 pb-10'>
      <div className='bg-slate-100 rounded-lg border border-slate-800 p-10 w-3/4'>
            <div className='flex flex-col items-center space-y-4'>
                <h1 className='text-xl font-semibold'>Subscribe to our Newsletter</h1>
                <p className=''>Subscribe to our Newsletter to get updates on all the exclusive events</p>
                <form method='POST'>
                  <div className='pb-2'>
                    <input text='text' 
                    name="email"
                    placeholder='Your email address' 
                    value={userData.email}
                    onChange={postUserData}
                    className=' border-2 rounded-xl w-48 px-2'></input>
                  </div>
                  <button className='rounded-xl' onClick={submitData}>Subscribe</button>
                </form>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Contact