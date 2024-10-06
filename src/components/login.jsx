import React, { useState } from 'react'
import { object, string } from 'yup';
import Error from './error'
const Login = () => {
    const [errors, setErrors] = useState([])
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setFormData((prevState) => (
            {
                ...prevState,
                [name]: value
            }
        ))

    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setErrors([])
        try {
            let userSchema = object({
                email: string().email("Invalid email.").required("Email is required."),
                password: string().min(6, "Password must be atleast 6 characters.").required("Password is required.")
            });
            await userSchema.validate(formData, { abortEarly: false })
        } catch (error) {
            const newErrors = {}
            error?.inner?.forEach((err) => {
                newErrors[err.path] = err.message
            })
            setErrors(newErrors)
        }

    }
    return (
        <form className='flex flex-col gap-5' onSubmit={handleSubmit}>

            <div>
                <label className="input input-primary flex items-center gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                        <path
                            d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                    </svg>
                    <input type="text"  className="grow" name='email' value={formData.email} onChange={handleInputChange} placeholder="Enter email" />

                </label>
                {
                    errors.email && <Error message={errors.email} />
                }
            </div>

            <div>
                <label className="input input-primary flex items-center gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            fillRule="evenodd"
                            d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                            clipRule="evenodd" />
                    </svg>
                    <input type="password" placeholder='Enter password' className="grow" name='password' value={formData.password} onChange={handleInputChange} />

                </label>
                {
                    errors.password && <Error message={errors.password} />
                }
            </div>
            <button className='btn btn-primary'>Login</button>
        </form>
    )
}

export default Login
