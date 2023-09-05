import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"

export default function Post() {
    const { id } = useParams();
    const [state, setState] = useState('view');
    const [data, setData] = useState();
    const navigate = useNavigate();

    function UpdateData() {
        fetch(`http://localhost:7070/posts/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ content: document.getElementById('contentNew').value }),
        })
            .then(() => {
                setState('view')
            })
            .catch((err) => {
                console.log(err.message);
            });
    }

    function Delete() {
        fetch(`http://localhost:7070/posts/${id}`, {
            method: 'DELETE'
        }).then(() => {
            navigate(-1)
        })
    }

    useEffect(() => {
        fetch(`http://localhost:7070/posts/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setData(data.post);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, [id])

    return (<>
        {state === 'view' && <>
            <div className="mt-3 card link-underline link-underline-opacity-0 container p-0">
                <div className="card-header d-flex align-items-center">
                    <div className="bg-primary rounded-circle" style={{ width: '50px', height: '50px' }}></div>
                    <div className="ms-4">Пользователь</div>
                </div>
                <div className="card-body">{data?.content}</div>
                <div className="container d-flex">
                    <button className="btn bg-light" onClick={() => navigate(-1)}>Вернуться</button>
                    <button className="btn bg-light mx-3" onClick={() => setState('edit')}>Изменить</button>
                    <button className="btn bg-light" onClick={() => Delete()}>Удалить</button>
                </div>

            </div></>}
        {state === 'edit' && <>
            <div className="mt-3 card link-underline link-underline-opacity-0 container p-0">
                <div className="card-header d-flex align-items-center">
                    <div className="bg-primary rounded-circle" style={{ width: '50px', height: '50px' }}></div>
                    <div className="ms-4">Пользователь</div>
                </div>
                <input className="card-body" defaultValue={data?.content} id="contentNew"></input>
                <div className="container d-flex my-3">
                    <button className="btn bg-light me-3 border" onClick={() => setState('view')}>Вернуться</button>
                    <button className="btn bg-light border" onClick={() => { UpdateData(), navigate('/posts') }}>Сохранить</button>
                </div>
            </div></>}
    </>
    )
}
