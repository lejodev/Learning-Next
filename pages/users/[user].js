import { useRouter } from "next/router";

const user = () => {
  const router = useRouter();
  const { user } = router.query;
  return <div>WELCOME {user}</div>;
};

export default user;
