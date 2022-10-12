import { useQuery } from "urql";
import { GetUsers } from "./graphql/users.query";

import UserDisplay from "./components/UserDisplay";
import { User } from "./types";

function App() {
  const [results] = useQuery<{ users: User[] }>({ query: GetUsers });
  const { data } = results;

  return (
    <div className="bg-zinc-800 flex-col h-screen w-full flex items-center p-4 gap-y-12 overflow-scroll">
      {data?.users.map((user) => (
        <UserDisplay key={user.name} user={user} />
      ))}
    </div>
  );
}

export default App;
