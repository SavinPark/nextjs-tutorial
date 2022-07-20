import axios from 'axios';
import Head from 'next/head';
import { Header, Divider, Loader } from 'semantic-ui-react';
import { useEffect, useState } from 'react';
import ItemList from "../src/component/ItemList"

export default function Home() {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const API_URL = process.env.NEXT_PUBLIC_API_URL; // Browser 환경
  // const API_URL = "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";

  function getData(){
    axios.get(API_URL)
    .then(res => {
      setList(res.data);
      setIsLoading(false);
    });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Head>
        <title>코딩앙마 - Next.js 강좌</title>
      </Head>
      {isLoading && (
        <div style={{padding: "300px 0"}}>
          <Loader inline="centered" active>
            Loading
          </Loader>
        </div>
      )}
      {!isLoading && (
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
      )}
    </div>
  )
}



