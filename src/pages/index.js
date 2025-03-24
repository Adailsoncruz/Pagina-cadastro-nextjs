import PageWrapper from "@/components/PageWrapper";
import Link from "next/link";

export default function Home() {
  return(
    <PageWrapper>
      <div className="w-[80%] flex flex-col">
        <h1 className="text-3xl text-[#ca20f0]">Olá! <br/>Seja Bem-vindo de volta!</h1>
        <div className="w-full flex flex-col gap-8 items-center mt-2">
          <h1 className="text-2xl text-[#ca20f0]">Faça seu login agora</h1>
          <input
           type="text"
           placeholder="Username"
           className="w-full h-[50px] border-b-[3px]
           outline-none border-gray-300"/>
           <input
           type="password"
           placeholder="Password"
           className="w-full h-[50px] border-b-[3px]
           outline-none border-gray-300"/>
           <button className="w-[50%] h-[50px] roundend-md
           bg-[#ca20f0] text-white font-bold">
            Login
           </button>
           <Link href="/cadastro">
             <p className="text-[#ca20f0] text-xl"> 
              Criar uma conta
             </p>
           </Link>
        </div>
      </div>
    </PageWrapper>
  );
}