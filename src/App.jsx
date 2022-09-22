import "./global.css";
import styles from "./App.module.css";

import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/JoalisonM.png",
      name: "Joalison Matheus",
      role: "Front-end Moorse"
    },
    content: [
      { type: "paragraph", content: "Fala galera 👋" },
      { type: "paragraph", content: "Acabei de subir mais um novo projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare" },
      { type: "link", content: "👉  jane.design/doctorcare" },
      { type: "tags", content: ["#novoprojeto ", "#nlw "] },
    ],
    publishedAt: new Date("2022-09-20 09:10:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/maxbarbosa.png",
      name: "Maxwell Barbosa",
      role: "Baba ovo na UFPB"
    },
    content: [
      { type: "paragraph", content: "Fala galera 👋" },
      { type: "paragraph", content: "Acabei de subir mais um novo projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare" },
      { type: "link", content: "👉  jane.design/doctorcare" },
      { type: "tags", content: ["#novoprojeto ", "#nlw ", "#rocketseat "] },
    ],
    publishedAt: new Date("2022-09-10 09:10:00"),
  },
];

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </>
  )
}