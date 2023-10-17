import { Post } from "./Post";

import { PostData } from "../interfaces/PostData";
import { useFetch } from "../hooks/useFetch";

export function Blog() {

  // hook personalizado - useFetch

  const { data: posts, isLoading } = useFetch<PostData[]>("http://localhost:8000/posts");

  // // hook - useState
  // const [posts, setPosts] = useState<PostData[]>([]);
  // const [isLoading, setIsLoading] = useState<boolean>(false);
  // // error...

  // // hook - useEffect
  // useEffect(() => {

  //   setIsLoading(true);

  //   // event-loop

  //   setTimeout(() => {

  //     fetch("http://localhost:8000/posts")
  //       .then(res => {
  //         console.log(res);
  //         if (!res.ok) {
  //           throw new Error("Posts not found...");
  //         }
  //         return res.json();
  //       })
  //       .then(data => {
  //         setPosts(data);
  //         setIsLoading(false);
  //       })
  //       .catch(error => {
  //         console.error(error);
  //         setIsLoading(false);
  //       });

  //     }, 2000);

  // }, []);

  return (
    <>
    { isLoading && <p>Loading...</p> }
    {
      !isLoading && posts && posts.length > 0 && posts.map((post) => {
        return (
          <Post key={ post.id } id={ post.id } title={ post.title } author={ post.author } />
        )
      })
    }
    </>
  );
}