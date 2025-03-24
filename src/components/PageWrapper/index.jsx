import Image from "next/image";
import svg from "../../../public/secure-data-animate.svg";


export default function PageWrapper({children}) {
    return(
        <div className="w-full h-screen bg-white flex ">
            <div className="w-[60%] f-full flex flex-col items-center justify-center  bg-[#ca20f0] rounded-r-md">
              <Image src={svg} width={600}/>
              <p className="w-[600px] text-white text-2xl ">Seja Bem-vindo, acesse e aproveite todo conteudo, 
                somos uma equipe de profissionais empenhados
                em trazer o melhor conteudo para voce usuário!</p>
            </div>
            <div className="w-[40%] f-full flex items-center justify-center">
              {children}
            </div>
        </div>
    )
}