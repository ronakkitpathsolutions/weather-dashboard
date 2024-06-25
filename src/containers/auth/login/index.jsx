import React from 'react'
import { IMAGES } from '../../../assets'
import FormGroup from '../../../shared/forms/form-group'
import useLogin from '../../../hooks/auth/login/useLogin'
import Form from '../../../shared/forms'
import Button from '../../../shared/buttons/button'

const Login = () => {
	const { formData, handleSubmit } = useLogin()

	return (
		<section className="w-screen h-screen">
			<div className="w-full grid grid-cols-12 h-full">
				<div className="hidden md:block md:col-span-7 lg:col-span-8 bg-primary-100">
					<div className="p-4 flex items-center justify-center h-full">
						<IMAGES.Weather className="max-w-md lg:max-w-xl animate-bounce-slow" />
					</div>
				</div>
				<div className="col-span-12 md:col-span-5 lg:col-span-4">
					<div className="flex flex-col justify-center items-center h-full w-full p-8">
						<div className="w-full sm:w-2/3 md:w-full xl:w-[380px] flex flex-col justify-start items-start mb-8">
							<h4 className="text-2xl font-semibold font-sans">
								Welcome Back!
							</h4>
							<p className="text-medium text-sm text-primary-500 font-sans">
								Please use the your login credentials
							</p>
						</div>
						<Form
							{...{ handleSubmit }}
							className="w-full sm:w-2/3 md:w-full xl:w-[380px]"
						>
							{formData?.map(({ id, ...data }) => (
								<FormGroup
									labelClass="text-primary-500"
									inputClass="!h-11 focus-visible:ring-primary-500"
									className="mb-3"
									key={id}
									{...data}
								/>
							))}
							<div className="flex justify-end items-end mt-4 flex-col">
								<Button
									type="button"
									className="!px-1 !py-0"
									label="Forgot Password?"
									variant="link"
								/>
								<Button
									type="submit"
									className="!h-11 bg-primary-400 text-white hover:bg-primary-500"
									fullWidth
									label="Login"
									variant="primary"
								/>
							</div>
							<div className="flex justify-center items-center mt-1">
								<p className="text-sm font-medium">
									{`Don't have an account?`}
									<span className="ml-1 cursor-pointer text-sm font-medium text-primary-500 hover:underline hover:underline-offset-4">
										Register
									</span>
								</p>
							</div>
						</Form>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Login
