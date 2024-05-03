"use client";

import { User } from "@/types/IUsers";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

type Props = {};

function page({}: Props) {
  const params = useParams<{ slug: string }>();
  const [user, setUser] = useState<User>();
  const apiURL = "https://663489d59bb0df2359a1cfcc.mockapi.io/api/v1/users/";

  const getUser = async () => {
    let data = await axios.get(apiURL + params.slug).then((res) => res.data);
    setUser(data);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      <h1>First name : {user?.first_name}</h1>
      <h1>Last name : {user?.last_name}</h1>
      <h1>email : {user?.email}</h1>
      <h1>phone number : {user?.phone_number}</h1>
    </div>
  );
}

export default page;
