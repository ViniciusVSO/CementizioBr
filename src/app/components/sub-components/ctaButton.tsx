import Link from "next/link";

type CtaButtonProps = {
    titulo: string;
}

export default function CtaButton({titulo}: CtaButtonProps){
    return(
        <Link href="#produtos" className="mt-4">
            <button className="select-none font-primary text-2xl border-y-2 border-white px-8 py-2 bg-white backdrop-blur-sm bg-opacity-10">
                {titulo}
            </button>
        </Link>
    );
}