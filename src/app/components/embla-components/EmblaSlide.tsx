import CtaButton from "../sub-components/ctaButton"

type EmblaSlideProps = {
    titulo: string,
    subtitulo: string,
    url: string
}

export default function EmblaSlide({titulo, subtitulo, url}: EmblaSlideProps){
    return(
        <div className="emblaSlide w-full h-full" style={{ backgroundImage: `url(${url})`, }}>
            <div className="text-white max-w-[1280px] h-full mx-auto px-6 gap-2 flex flex-col justify-center items-center">
                <h1 className="response:text-5xl text-center select-none font-primary text-8xl">{titulo}</h1>
                <p className="response:text-xl text-center select-none font-thin text-2xl">{subtitulo}</p>
                <CtaButton titulo="Saiba Mais" />
            </div>
        </div>      
    )
}