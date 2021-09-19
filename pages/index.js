
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import CookieStandAdmin from '../components/CookieStandAdmin'
import Homepage from '../components/Homepage'
import { useAuth } from '../contexts/auth'
import useResource from '../hooks/useResource'


export default function Home() {
  const { user, login, logout } = useAuth();
  const { resources, loading, createResource, deleteResource } = useResource();
  console.log(user);
  
  return (
    <div>
    {/* {user &&
      <Homepage/>
    }
   */}
{user ? (
                    <>
              
                          {/* {} */}
                          <Homepage/>

     {/* <button onClick={logout} className="p-2 text-white bg-gray-500 rounded">Logout</button> */}

                    </>
                ) : (
                    <>
                      
                      {<CookieStandAdmin/>}

                        {/* <button onClick={() => login('rudy', 'rudy')} className="p-2 text-white bg-gray-500 rounded">Login</button> */}
                    </>
                )}
    
    {/* <CookieStandAdmin/> */}
    </div>
  )
}
