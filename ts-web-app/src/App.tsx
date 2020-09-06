import React, { useState, useRef } from "react";
import { INews } from "./INews";
import "./styles/News.css";

type FormElement = React.FormEvent<HTMLFormElement>;

function App(): JSX.Element {
  const [newTitle, setNewTitle] = useState<string>("");
  const [newContent, setNewContent] = useState<string>("");

  const [newImage, setNewImage] = useState<string | ArrayBuffer>("");

  const imageHandler = (files: FileList | null) => {
    if (files != null) {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2 && reader.result != null) {
          setNewImage(reader.result);
        }
      };
      reader.readAsDataURL(files[0]);
    }
  };

  const [tasks, setTasks] = useState<INews[]>([]);
  const taskInput = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormElement): void => {
    e.preventDefault();
    addNews(newTitle, newContent);

    setNewTitle("");
    setNewContent("");

    taskInput.current?.focus();
  };

  const addNews = (name: string, content: string): void => {
    console.log(content);
    const newNews: INews[] = [
      ...tasks,
      { title: name, content: content, done: false },
    ];
    setTasks(newNews);
  };

  const toggleDoneNews = (i: number): void => {
    const newNews: INews[] = [...tasks];
    newNews[i].done = !newNews[i].done;
    setTasks(newNews);
  };

  const removeNews = (i: number): void => {
    const newNews: INews[] = [...tasks];
    newNews.splice(i, 1);
    setTasks(newNews);
  };

  return (
    <div className="container p-4">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <legend>News</legend>
                <label className="col-sm-2 col-form-label">Title</label>
                <input
                  type="text"
                  onChange={(e) => setNewTitle(e.target.value)}
                  value={newTitle}
                  className="form-control"
                  ref={taskInput}
                  placeholder="Enter title"
                  autoFocus
                />
                <label className="col-sm-3 col-form-label">Content</label>
                <textarea
                  className="form-control"
                  onChange={(e) => setNewContent(e.target.value)}
                  value={newContent}
                  placeholder="Enter content"
                />
                <div className="image-upload-wrap">
                  <input
                    className="file-upload-input"
                    type="file"
                    onChange={(e) => imageHandler(e.target.files)}
                    accept="image/*"
                  />
                  <div className="file-upload-content">
                    <img
                      className="file-upload-image"
                      src={newImage.toString()}
                      alt=""
                    />
                  </div>
                  <div className="drag-text">
                    <h3>Drag and drop a file or select add Image</h3>
                  </div>
                </div>
                <button className="btn btn-success btn-block mt-2">Save</button>
              </form>
            </div>
          </div>
          {tasks.map((t: INews, i: number) => (
            <div className="card card-body mt-2" key={i}>
              <h2 style={{ textDecoration: t.done ? "line-through" : "" }}>
                {t.title}
              </h2>
              <h4 style={{ textDecoration: t.done ? "line-through" : "" }}>
                {t.content}
              </h4>
              <div>
                <button
                  className="btn btn-secondary"
                  onClick={() => toggleDoneNews(i)}
                >
                  {t.done ? "✓" : "✗"}
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => removeNews(i)}
                >
                  🗑
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
