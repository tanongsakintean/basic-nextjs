import { User } from "@/types/IUsers";
import Link from "next/link";

function Card({ email, id, first_name, phone_number, last_name }: User) {
  return (
    <tr>
      <td>{id}</td>
      <td>{first_name}</td>
      <td>{last_name}</td>
      <td>{phone_number}</td>
      <td>{email}</td>
      <td>
        <Link href={`/details/${id}`}>
          <button>Details</button>
        </Link>
      </td>
    </tr>
  );
}

export default Card;
