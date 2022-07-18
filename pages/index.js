import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>코딩앙마 - Next.js 강좌</title>
      </Head>
      <h3>create-next-app으로 설치하면</h3>
      <ol>
        <li>컴파일과 번들링이 자동으로 된다. (Webpack & Babel)</li>
        <br/>
        <li>자동 refresh 기능으로 수정하면 화면에 바로 반영된다.</li>
        <br/>
        <li>Server-Side Rendering 이 지원된다.</li>
        <br/>
        <li>Static 파일을 지원한다.</li>
      </ol>
    </div>
  )
}



