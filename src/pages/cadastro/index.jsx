import PageWrapper from "@/components/PageWrapper";

export default function Cadastro() {
    return(
        <PageWrapper>
            <div className="w-[80%] flex flex-col">
        <h1 className="text-3xl text-[#ca20f0]">Junte-se a nós <br/>Crie hoje a sua conta!</h1>
        <div className="w-full flex flex-col gap-8 items-center mt-2">
          <h1 className="text-2xl text-[#ca20f0]">Informe seus dados</h1>
          <input
           type="text"
           placeholder="Email"
           className="w-full h-[50px] border-b-[3px]
           outline-none border-gray-300"/>
           <input
           type="password"
           placeholder="Confirmar Email"
           className="w-full h-[50px] border-b-[3px]
           outline-none border-gray-300"/>
           <input
           type="password"
           placeholder="Senha"
           className="w-full h-[50px] border-b-[3px]
           outline-none border-gray-300"/>
           <input
           type="password"
           placeholder="Confirmar Senha"
           className="w-full h-[50px] border-b-[3px]
           outline-none border-gray-300"/>
           <button className="w-[50%] h-[50px] roundend-md
           bg-[#ca20f0] text-white font-bold">
            Crie sua Conta 
           </button>
        </div>
      </div>
        </PageWrapper>
    );
}