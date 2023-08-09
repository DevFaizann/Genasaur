import Image from "next/image"

export const Loader = () => {
    return(
        <div className="h-full w-full flex flex-col py-36 gap-y-4 items-center justify-center">
            <div className="w-20 h-20 relative animate-spin">
                <Image
                    alt="logo"
                    fill
                    src="/logo.png"
                />
            </div>  
            <p className="text-sm text-muted-foreground">
                Genasaur is loading..Hold Tight!
            </p>          
        </div>
    )
}