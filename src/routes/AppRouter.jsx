import { Routes, Route, Navigate } from "react-router-dom"
import Posts from './../components/Posts';
import Post from './../components/Post';
import NewPost from './../components/NewPost';

export default function AppRouter() {
    return (
        <Routes>
            <Route path='/posts' element={<Posts />} />
            <Route path='/posts/:id' element={<Post />} />
            <Route path='/posts/new' element={<NewPost />} />
            <Route path='*' element={<Navigate to='/posts' />} />
        </Routes>
    )
}

