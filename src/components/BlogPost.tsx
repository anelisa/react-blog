import { useNavigate, useParams } from "react-router-dom";

import { useFetch } from "../hooks/useFetch";
import { PostData } from "../interfaces/PostData";

export function BlogPost() {

  const navigate = useNavigate()
  const { id } = useParams();

  const { data: post, isLoading } = 
       useFetch<PostData>(`http://localhost:8000/posts/${id}`);


  function openEditPost() {
    navigate(`/edit/${id}`)

  }


  return (
    <div className="blog-details">
      { isLoading && <div>Loading...</div> }
      { post && (
        <article>
          <h2>{ post.title }</h2>
          <p>Escrito por { post.author }</p>
          <div>{ post.body }</div>
          <button onClick={openEditPost}>Editar</button>
        </article>
      )}
    </div>
  )
}