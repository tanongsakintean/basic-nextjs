"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

type Props = {};

interface User {
  email: string;
  first_name: string;
  last_name: string;
  phone_number: string;
}

function page({}: Props) {
  const router = useRouter();
  const [user, setUser] = useState<User>({
    email: "",
    first_name: "",
    last_name: "",
    phone_number: "",
  });

  const handleSubmit = () => {
    axios
      .post(`https://663489d59bb0df2359a1cfcc.mockapi.io/api/v1/users`, user)
      .then((res) => {
        if (res != null) {
          router.push("/");
        }
      });
  };

  return (
    <div>
      <h1>เพิ่มข้อมูลผู้ใช้งาน</h1>
      <div className="my-4">
        <label htmlFor="">Email : </label>
        <input
          className=" border border-solid border-black "
          type="email"
          value={user?.email}
          onChange={(e) =>
            setUser((prev) => ({ ...prev, email: e.target.value }))
          }
          name=""
          id=""
        />
      </div>

      <div className="my-4">
        <label htmlFor="">First Name : </label>
        <input
          className=" border border-solid border-black "
          type="text"
          value={user?.first_name}
          onChange={(e) =>
            setUser((prev) => ({ ...prev, first_name: e.target.value }))
          }
          name=""
          id=""
        />
      </div>

      <div className="my-4">
        <label htmlFor="">Last Name : </label>
        <input
          className=" border border-solid border-black "
          type="text"
          value={user?.last_name}
          onChange={(e) =>
            setUser((prev) => ({ ...prev, last_name: e.target.value }))
          }
          name=""
          id=""
        />
      </div>

      <div className="my-4">
        <label htmlFor="">phoneNumber : </label>
        <input
          className=" border border-solid border-black "
          type="text"
          maxLength={10}
          value={user?.phone_number}
          onChange={(e) =>
            setUser((prev) => ({ ...prev, phone_number: e.target.value }))
          }
          name=""
          id=""
        />
      </div>

      <button
        onClick={() => handleSubmit()}
        className=" border border-solid border-red-500 p-2 bg-red-500 text-white font-mono font-bold hover:bg-red-600 rounded-md "
      >
        เพิ่มข้อมูล
      </button>
    </div>
  );
}

export default page;
