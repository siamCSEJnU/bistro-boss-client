import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import { getItem } from "localforage";

const useCart = () => {
  const { user } = useContext(AuthContext);
  const token = getItem("access-token");

  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["carts", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/carts?email=${user.email}`,
        {
          headers: {
            auhtorization: `bearer ${token}`,
          },
        }
      );
      return res.json();
    },
  });

  return [cart, refetch];
};

export default useCart;
