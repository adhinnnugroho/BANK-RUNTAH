import BorderButton from "@/Template/Components/Button/BorderButton";
import SimpleButton from "@/Template/Components/Button/SimpleButton";
import SimpleCard from "@/Template/Components/Card/SimpleCard";
import SimpleInput from "@/Template/Components/Input/simpleInput";
import Image from "next/image";
import { useRouter } from 'next/router'
import { FormEvent } from 'react'
import { signIn } from "next-auth/react";



const Login = () => {
    const router = useRouter()
    const { push, query } = useRouter();
    const callbackUrl: any = query.callbackUrl || "/";

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const form = event.target as HTMLFormElement;
        const res = await signIn("credentials", {
            redirect: false,
            email: form.email.value,
            password: form.password.value,
            callbackUrl: callbackUrl
        })

        if (!res?.error) {
            alert("e");
            router.push('/profile')
        }
    }

    return (
        <SimpleCard>
            <form onSubmit={handleSubmit} className="mt-5">
                <div className="flex mb-10 mt-10">
                    <Image
                        src="/assets/img/logo/logo.png"
                        width={56}
                        height={56}
                        alt="Picture of the author"
                        layout="fixed"
                    />
                    <div className="font-semibold text-2xl ml-2">
                        Selamat Datang <br /> <div className="text-green-600">di Bank Runtah</div>
                    </div>
                </div>

                <SimpleInput type="text" name="email" label="Email" placeholder="mail@runtah.com" />
                <SimpleInput type="password" name="password" label="Password" placeholder="****" />
                <SimpleButton type="submit" className="w-full" bg_color="bg-green-500">Login</SimpleButton>
                <div className="flex mt-2 mb-2">
                    <div className="border border-gray-600 mb-5 mt-5 w-[26%]"></div>
                    <div className="mt-2 ml-2 mr-2">Atau Masuk Dengan</div>
                    <div className="border border-gray-600 mb-5 mt-5  w-[26%]  float-end"></div>
                </div>
                <BorderButton type="button" icons="google" className="w-full mb-5"
                    onClick={() => signIn('google', {callbackUrl, redirect: false})}>
                    Login with Google
                </BorderButton>
            </form>
        </SimpleCard>
    )
}

export default Login;