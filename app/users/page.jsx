import { getUsers } from "@/api/users";
import Link from "next/link";

export default async function UsersPage() {
  const users = await getUsers();

  return (
    <>
      <h1 className="p-3 font-bold">Users</h1>
      <div className="px-3 grid gap-3  grid-cols-[repeat(auto-fill,minmax(400px,1fr))]">
        {users.map((user) => {
          return (
            <div
              className="p-3 rounded-lg border-slate-400 bg-slate-600 text-slate-200 flex flex-col"
              key={user.id}
            >
              <div className="font-bold">
                {user.firstname}&nbsp;{user.lastname}
              </div>
              <div className="flex flex-col">
                <div>{user.company.name}</div>
                <div>{user.website}</div>
                <div>{user.email}</div>
              </div>
              <div className="flex flex-row-reverse">
                <Link className="btn" href={`users/${user.id.toString()}`}>
                  View
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

{
  /* <div className="card-grid p-3 text-slate-400">
  {users.map((user) => (
    <div key={user.id} className="card">
      <div className="card-header">
        {user.firstname}&nbsp;{user.lastname}
      </div>
      <div className="card-body">
        <div>{user.company.name}</div>
        <div>{user.website}</div>
        <div>{user.email}</div>
      </div>
      <div className="card-footer">
        <Link className="btn" href={`users/${user.id.toString()}`}>
          View
        </Link>
      </div>
    </div>
  ))}
</div>; */
}

// {
//     id: 28,
//     firstname: 'Liam',
//     lastname: 'Brown',
//     email: 'liambrown@example.com',
//     birthDate: '2002-01-25',
//     login: {
//       uuid: '28aeed01-9430-4d68-901f-c0d4c1c3bf25',
//       username: 'stefankupidura',
//       password: 'jsonplaceholder.org',
//       md5: 'c1328472c5794a25723600f71c1b4586',
//       sha1: '35544a31cc19bd6520af116554873167117f4d94',
//       registered: '2022-01-02T09:00:01.390Z'
//     },
//     address: {
//       street: '123 Pine Street',
//       suite: 'Apt. 160',
//       city: 'Anytown',
//       zipcode: '12345-6789',
//       geo: [Object]
//     },
//     phone: '(555) 555-1234',
//     website: 'www.liambrown.com',
//     company: {
//       name: 'PQR Corporation',
//       catchPhrase: 'Innovative solutions for your business',
//       bs: 'Consulting'
//     }
//   }
