import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const Home: React.FC = () => {
  useQueryClient();

  // Queries
  const { data } = useQuery({
    suspense: true,
    queryKey: ["todos"],
    queryFn: () => axios.get("http://172.30.1.31:3020/ip"),
  });

  return (
    <div>
      <h1>Home</h1>
      <form>
        <label>내 아이피</label>
        <input disabled value={data?.data.ip}></input>
        <label>상대방 아이피</label>
        <input></input>
        <button>접속하기</button>
      </form>
    </div>
  );
};

export default Home;
