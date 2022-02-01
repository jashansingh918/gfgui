import { data } from "cypress/types/jquery";
import { useForm } from "react-hook-form";

interface IForm {
    name: string;
    email: string;
    password: string;
}

export default function HooksUI() {
    //formstate.error                    using object destructuring to extract only one method from forsmstate coz formstate is big
    const {register, reset, handleSubmit, formState:{errors}} = useForm<IForm>()
    const myCallBack = (data: IForm) => {
        //sending data to the back-end
        console.log("my callback invoked" + data.name + data.email + data.password);
    }
    
    //binding --- completed
    //reset  ---  completed
    //form submit  --- completed
    //validation
    return(
        <form onSubmit={handleSubmit(myCallBack)}> {/* form is just a container for input type elements */}
        <input type="text" placeholder="name" {...register("name", {
            required: true,
            minLength: {value: 4, message:"name should have min length of 4"},//message is the error msg
            maxLength: {value: 8, message:"max length is 8"}
        })} />
        {errors.name?.message && <div>{errors.name.message}</div>}{/*if errors.name exist show me that particular error msg */}
        <input type="email" placeholder="email" {...register("email", {
            required: true,
            pattern: {value: /\w+@\w+\.\w+/, message: "email regex is not matched"}
        })} />
        {errors.email?.message && <div>{errors.email.message}</div>}
        <input type="password" placeholder="password" {...register("password")} />
        <button onClick={() => reset()}>reset</button>
        <button type="submit">submit</button>
        </form>
    );
}


