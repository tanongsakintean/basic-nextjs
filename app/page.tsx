"use client";
import { User } from "@/types/IUsers";
import axios from "axios";
import { useEffect, useState } from "react";
import Row from "@/components/Row";

type Props = {};

function page({}: Props) {
  const [users, setUsers] = useState<User[]>([]);

  const getUsers = async () => {
    const data = await axios
      .get("https://663489d59bb0df2359a1cfcc.mockapi.io/api/v1/users")
      .then((res) => res.data);

    setUsers(data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ไอดี</th>
            <th>ชื่อจริง</th>
            <th>นามสกุล</th>
            <th>เบอร์โทร</th>
            <th>อีเมลล์</th>
            <th>จัดการ</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item, key) => {
            return (
              <Row
                key={key}
                email={item.email}
                first_name={item.first_name}
                last_name={item.last_name}
                phone_number={item.phone_number}
                id={item.id}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default page;
