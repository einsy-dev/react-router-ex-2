import { useEffect, useState } from "react";
import { useNavigate, NavLink } from "react-router-dom"

export default function Posts() {
    const [data, setData] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:7070/posts')
            .then((response) => response.json())
            .then((data) => {
                setData(data);
                console.log(data)
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, [])

    return (
        <>
            <div className="container border rounded p-2 mt-3 bg-light d-flex">
                <button className="btn btn-primary ms-auto" onClick={() => navigate('/posts/new')}>Создать пост</button>
            </div>
            <div className="container">
                {data?.map((el, i) => <NavLink to={`/posts/${el.id}`} key={i} className="mt-3 card link-underline link-underline-opacity-0">
                    <div className="card-header d-flex align-items-center">
                        <div className="bg-primary rounded-circle" style={{ width: '50px', height: '50px' }}></div>
                        <div className="ms-4">Пользователь</div>
                    </div>
                    <div className="card-body">{el.content}</div>
                </NavLink>)}
            </div>
        </>

    )
}
