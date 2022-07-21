import axios from 'axios';
import Head from 'next/head';
import { Header, Divider } from 'semantic-ui-react';
import ItemList from "../src/component/ItemList"

export default function Home({ list }) {

  return (
    <div>
      <Head>
        <title>HOME | 코딩앙마 - Next.js 강좌</title>
      </Head>
        <>
          <Header as="h3" style={{ paddingTop: 40 }}>
            베스트 상품
          </Header>
          <Divider />
          <ItemList list={list.slice(0, 9)} />
          <Header as="h3" style={{ paddingTop: 40 }}>
            신상품
          </Header>
          <Divider />
          <ItemList list={list.slice(9)} />
        </>
    </div>
  )
}

export async function getStaticProps() {
  const apiUrl = process.env.apiUrl;    // 이 영역은 Client 환경이 아니기 때문에 NEXT_PUBLIC_ 을 붙일 필요가 없다.
  const res = await axios.get(apiUrl);
  const data = res.data;

  return {
    props: {
      list: data,
      name: process.env.name
    }
  }
}



