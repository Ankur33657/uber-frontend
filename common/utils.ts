import validator from "validator";
import { payloadItems } from "./types/signuptypes";
import { generateUploadButton, generateReactHelpers } from "@uploadthing/react";
import { BasicItems } from "@/app/auth/captainsignup/page";
import Cookies from "js-cookie";
export const UsersignUpValidation = async (payload: payloadItems) => {
  const isValidEmail = validator.isEmail(payload?.email);
  //   const isValidPhone = validator.isMobilePhone(payload?.phone);
  const isValidName = payload?.name.length > 3;
  const isStrongPassword = validator.isStrongPassword(payload?.password);

  if (isValidEmail && isValidName && isStrongPassword) {
    return { status: true, data: null };
  }
  return {
    status: false,
    data: {
      name: isValidName ? "" : "Name have atleast 3 character",
      email: isValidEmail ? "" : "Invalid Email",
      // phone: isValidPhone ? "" : "Invalid Phone Number",
      password: isStrongPassword
        ? ""
        : "Weak password (min 8 chars, 1 lowercase, 1 uppercase, 1 number, 1 symbol)",
    },
  };
};



export const { useUploadThing, uploadFiles } = generateReactHelpers({
  url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/uploadthing`,
});

export const UploadButton = generateUploadButton({
  url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/uploadthing`,
});

export const OpenUrl = (url: string) => {
  if (!url) return;
  const hasProtocol = /^https?:\/\//i.test(url);
  const finalUrl = hasProtocol ? url : `https://${url}`;

  window.open(finalUrl, "_blank", "noopener,noreferrer");
};

export const CurrentRoleCaptain = () => {
  const captain = Cookies?.get("captainToken");
  return captain ? true : false;
};
const Utils = {
  UsersignUpValidation,
  UploadButton,
  useUploadThing,
  uploadFiles,
  OpenUrl,
  CurrentRoleCaptain,
};
export default Utils;
