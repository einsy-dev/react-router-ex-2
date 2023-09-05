import { useNavigate } from "react-router-dom";
export default function NewPost() {
    const navigate = useNavigate();

    function createPost() {

        fetch('http://localhost:7070/posts', {
            method: 'POST',
            body: JSON.stringify({ content: document.getElementById('content').value }),
        }).then(() => {
            navigate('/posts')
        })
    }

    return (
        <form className="container mt-3">
            <div className="input-group mb-3 d-flex flex-column">
                <label htmlFor="content">Содержание поста</label>
                <input type="text" className="border rounded bg-light py-2 px-3" id="content" />
            </div>
            <button className="btn btn-primary" onClick={() => createPost()}>Опубликовать</button>
            <button className="btn btn-secondary ms-2" onClick={() => navigate('/posts')}>Вернуться на главную</button>
        </form>
    )
}
