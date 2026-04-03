"use client";
import { Button } from "./ui/button";
import authServices from "@/services/auth.services";
import { toast } from "sonner";
import { useState } from "react";
import DeleteConfirm from "./dialog/deleteconfirm";
const LogOutUser =  () => {
    const [open, setOpen] = useState(false);
     const handleLogout = async () => {
       try {
        await authServices?.userLogout();
       } catch (error) {
         console.log(error);
         toast.error("Error while Logout");
       }
     };
    return (
      <>
        <Button
          className="p-6 rounded-3xl flex flex-row items-center"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="material-symbols-outlined">logout</span>
          <h1>Log Out</h1>
        </Button>
        <DeleteConfirm
          open={open}
          onClose={() => setOpen((prev) => !prev)}
          onSubmit={handleLogout}
                Header={"Are you sure want to Logout"}
                descriptions=""
                confirmBtntext="Log out"
        />
      </>
    );
}
export default LogOutUser;