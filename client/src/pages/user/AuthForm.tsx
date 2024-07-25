import { useForm } from "react-hook-form";
import { useAuth } from "../../context/AuthContext";
import { User } from "../../interfaces/IUser";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema, ResSchema } from "../../schemaValid/AuthSchema";
import instance from "../../instance/instance";
import {
    Button,
    Checkbox,
    FileInput,
    Label,
    Radio,
    RangeSlider,
    Select,
    Textarea,
    TextInput,
    ToggleSwitch,
} from "flowbite-react";
import { Link } from "react-router-dom";

type Props = {
    isLogin?: boolean;
};
const AuthForm = ({ isLogin }: Props) => {
    const { login: contextLogin } = useAuth();
    const {
        handleSubmit,
        formState: { errors },
        register,
        watch
    } = useForm<User>({
        resolver: zodResolver(isLogin ? LoginSchema : ResSchema)
    });
    const onSubmit = async (data: User) => {
        try {
            if (isLogin) {
                const res = await instance.post(`auth/login`, data);
                console.log(res.data);
                contextLogin(res.data.token, res.data.data);
            } else {
                const res = await instance.post(`/auth/register`, { name: data.name, email: data.email, password: data.password });
                alert(res.data.message);
            }
        } catch (error: any) {

            alert(error.response?.data?.message || "Error!");
        }
    };
    return (
        <>
            <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                <div className="border border-2 border-primary rounded p-3" style={{ width: '600px' }}>
                    <form className="flex max-w-md flex-col gap-4 pl-6" onSubmit={handleSubmit(onSubmit)}>
                        <h1>{isLogin ? "Login" : "Register"}</h1>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="name" className="form-label" value="Your name" />
                                <div className="text-red-500">{errors.name?.message}</div>
                            </div>
                            <TextInput id="name" type="name" placeholder="Tên Tài Khoản"   {...register("name", {
                                required: true
                            })} />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="email" className="form-label" value="Your email" />
                                <div className="text-red-500">{errors.email?.message}</div>
                            </div>
                            <TextInput id="email" type="email" placeholder="Email"{...register("email", {
                                required: true
                            })} />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="password" className="form-label" value="Your password" />
                                <div className="text-red-500">{errors.email?.message}</div>
                            </div>
                            <TextInput id="password" type="password" placeholder="PassWord" {...register("password", {
                                required: true
                            })} />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="password" className="form-label" value="Your ConfirmPass" />
                                <div className="text-red-500">{errors.confirmPass?.message}</div>
                            </div>
                            <TextInput id="password" type="password" placeholder="ConfirmPass" {...register("confirmPass", {
                                required: true,
                                validate: (value) => {
                                    if (value !== watch('password')) {
                                        return 'Không khớp mật khẩu'
                                    }
                                }
                            })} />
                        </div>
                        <div className="flex items-center gap-2">
                            <Checkbox id="remember" />
                            <Label htmlFor="remember">Remember me</Label>
                        </div>
                        <Button type="submit">{isLogin ? "Login" : "Register"}</Button>
                        {isLogin ? <Link to="/register">Register</Link> : <Link to="/login">Login</Link>}
                    </form>
                </div>
            </div>
        </>

    )
}
export default AuthForm