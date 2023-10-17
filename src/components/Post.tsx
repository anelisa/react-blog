import { Link } from "react-router-dom";

interface PostProps {
  id: number;
  title: string;
  author: string;
}

//export function Post(props: PostProps) { // props.title
export function Post({ id, title, author }: PostProps) {
  return (
    <div className="blog-preview">
      <Link to={ `/post/${id}` }>
        <h2>{ title }</h2>
        <p>Escrito por { author }</p>
      </Link>
    </div>
  )
}