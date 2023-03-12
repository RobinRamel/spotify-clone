import { getProviders, useSession, signIn } from "next-auth/react";

type Props = {
  providers: {
    [key: string]: {
      id: string;
      name: string;
      type: string;
      signinUrl: string;
      callbackUrl: string;
    }
  };
}

function Login({ providers }: Props) {
  const {data: session, status} = useSession()

  // console.log("status : ", status)

  return (
    <div className="w-screen h-screen flex flex-col items-center place-content-center bg-black text-white">
        <h1> Login </h1>
        <div>
          {Object.values(providers).map( provider => (
            <div key={provider.name}>
              <button 
                className="text-white py-4 px-6 rounded-full font-bold text-xs bg-[#1db954]" 
                onClick={ () => signIn(provider.id, { callbackUrl: "/" })}> 
                  Connexion avec {provider.name} 
                </button>
            </div>
          ))}
        </div>
    </div>
  );
}

export default Login;

export const getServerSideProps = async () => {
  const providers = await getProviders()
  return {
    props: { providers }
  }
}