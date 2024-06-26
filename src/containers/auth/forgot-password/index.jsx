import React from 'react'
import useForgotPassword from '../../../hooks/auth/forgot-password'
import { IMAGES } from '../../../assets'
import Form from '../../../shared/forms'
import FormGroup from '../../../shared/forms/form-group'
import Button from '../../../shared/buttons/button'
import { PAGES } from '../../../constant/urls'

const ForgotPassword = () => {
	const { handleSubmit, formData, handleNavigate } = useForgotPassword()
	return (
		<section className="w-screen h-screen">
			<div className="w-full grid grid-cols-12 h-full">
				<div className="hidden md:block md:col-span-7 lg:col-span-8 bg-primary-100">
					<div className="p-4 flex items-center justify-center h-full">
						<IMAGES.ForgotPassword className="max-w-md lg:max-w-xl animate-bounce-slow" />
					</div>
				</div>
				<div className="col-span-12 md:col-span-5 lg:col-span-4">
					<div className="flex flex-col justify-center items-center h-full w-full p-8">
						<div className="w-full sm:w-2/3 md:w-full xl:w-[380px] flex flex-col justify-start items-start mb-8">
							<h4 className="text-2xl font-semibold font-sans">
								Forgot Password?
							</h4>
							<p className="mt-2 text-medium text-sm text-primary-500 font-sans">
								Kindly, enter the Email address associated to your account.
							</p>
						</div>
						<Form
							{...{ handleSubmit }}
							className="w-full sm:w-2/3 md:w-full xl:w-[380px]"
						>
							{formData?.map(({ id, ...data }) => (
								<FormGroup
									labelClass="text-primary-500"
									inputClass="!h-12 focus-visible:ring-primary-500"
									className="mb-3"
									key={id}
									{...data}
								/>
							))}
							<div className="flex justify-end items-end mt-8 flex-col">
								<Button
									type="submit"
									className="!h-12 bg-primary-400 text-white hover:bg-primary-500"
									fullWidth
									label="Continue"
									variant="primary"
								/>
							</div>
							<div className="flex justify-center items-center mt-1">
								<p className="text-sm font-medium">
									Back to login?
									<span
										className="ml-1 cursor-pointer text-sm font-medium text-primary-500 hover:underline hover:underline-offset-4"
										role="button"
										aria-hidden="true"
										onClick={() => handleNavigate(PAGES.AUTH.LOGIN.url)}
									>
										Login
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

export default ForgotPassword
