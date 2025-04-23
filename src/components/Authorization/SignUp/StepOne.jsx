import React from "react";
import { Formik, Form } from "formik";
import Header from "../common/Header";
import AutButton from "../common/AutButton";
import AutImg from "../common/AutImg";
import Icon from "../common/Icon";
import AutField from "../common/AutField";
import NoAccount from "../Login/NoAccount";
import { useNavigate } from "react-router-dom";
import InitialValuesSingUp from "../../../core/validation/signUp/InitialValuesSingUp";
import ValidationSchema from "../../../core/validation/signUp/ValidationSchemaSingUp";


const StepOne = () => {
    const navigate = useNavigate();

    const handleSubmit = async (values, { setSubmitting }) => {
        const { phone } = values;
        try {
            localStorage.setItem("phoneNumber", phone);

            const response = await fetch("https://classapi.sepehracademy.ir/api/Sign/SendVerifyMessage", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ phoneNumber: phone }),
            });

            const data = await response.json();

            if (!response.ok || !data.success) {
                alert("ارسال کد تایید ناموفق بود");
            } else {
                alert("کد تایید با موفقیت ارسال شد!");
                navigate("/RegisterStepTwo");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("یک خطا رخ داده است. لطفاً دوباره تلاش کنید.");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div>
            <Icon />

            <div className="min-h-screen flex flex-col md:flex-row pt-9 pl-12 pr-12 pb-9">
                <div className="w-full md:w-[580px] flex justify-center p-10 md:p-12 rounded-3xl mt-5">
                    <div className="w-full max-w-md space-y-8">
                        <Header
                            title={"خوش اومدی"}
                            Paragraph={"برای ثبت نام اول شماره همراه خود را وارد کنید"}
                        />

                        <Formik
                            initialValues={InitialValuesSingUp}
                            validationSchema={ValidationSchema}
                            onSubmit={handleSubmit}
                        >
                            {({ isSubmitting }) => (
                                <Form className="space-y-6 bg-white rounded-xl">
                                    <div className="rounded-md shadow-sm -space-y-px">
                                        <AutField
                                            name={"phone"}
                                            title={"شماره همراه"}
                                            type={"text"}
                                            autoComplete={" "}
                                            placeholder={"شماره همراه خود را وارد کنید"}
                                        />
                                    </div>
                                    <AutButton
                                        type={"submit"}
                                        isSubmitting={isSubmitting}
                                        isSubmittingTitle={"ارسال کد تایید"}
                                        SvgTitle={"در حال بررسی..."}
                                    />
                                </Form>
                            )}
                        </Formik>

                        <NoAccount
                            address={"/Login"}
                            accountTitle={"حساب کاربری دارید؟"}
                            SingUpTitle={"ورود به حساب"}
                        />
                    </div>
                </div>

                <AutImg address={'#'} alt={"Login image"} />
            </div>
        </div>
    );
};

export default StepOne;
