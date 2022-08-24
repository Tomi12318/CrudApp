import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const URI = 'http://localhost:8000/blogs/';
const CompCreateBlog = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const navigate = useNavigate();

  const store = async (e) => {
    e.preventDefault();
    await axios.post(URI, { title: title, content: content, author: author });
    navigate('/');
  };

  return (
    <div>
      <h3>Create Post</h3>
      <form onSubmit={store}>
        <div className="mb-3">
          <label className="form-label">Author</label>
          <input
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            type="text"
            className="form-control"
            required
            minLength={10}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            className="form-control"
            required
            minLength={10}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            type="text"
            className="form-control"
            minLength="10"
            maxLength="50"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Store
        </button>
      </form>
    </div>
  );
};

export default CompCreateBlog;
