"use client";

import { useState } from "react";
import { updateGuestAction } from "../_lib/actions";
import { useFormStatus } from "react-dom";
import {SpinnerMini} from "@/app/_components/SpinnerMini";
import SubmitButton from "./SubmitButton";

function UpdateProfileForm({ children, guest }) {
  const [count, setCount] = useState();

  const { fullName, email, nationality, nationalID, countryFlag } = guest;

  return (
    <form
      action={updateGuestAction}
      className="bg-primary-900 py-4 md:py-8 px-3 md:px-12 text-sm md:text-lg flex gap-3 md:gap-6 flex-col"
    >
      <div className="space-y-2">
        <label>Full name</label>
        <input
          disabled
          defaultValue={fullName}
          name="fullName"
          className="px-3 py-2 md:px-5 md:py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm text-sm md:text-base disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
        />
      </div>

      <div className="space-y-2">
        <label>Email address</label>
        <input
          disabled
          defaultValue={email}
          name="email"
          className="px-3 py-2 md:px-5 md:py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm text-sm md:text-base disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
        />
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label htmlFor="nationality">Where are you from?</label>
          <img
            src={countryFlag}
            alt="Country flag"
            name="countryFlag"
            className="h-5 rounded-sm"
          />
        </div>
        {children}
      </div>

      <div className="space-y-2">
        <label htmlFor="nationalID">National ID number</label>
        <input
          name="nationalID"
          defaultValue={nationalID}
          className="px-3 py-2 md:px-5 md:py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm text-sm md:text-base"
        />
      </div>

      <div className="flex justify-end items-center gap-6">
        <SubmitButton labelPending={"Updating..."} >Update profile</SubmitButton>
      </div>
    </form>
  );
}


export default UpdateProfileForm;
