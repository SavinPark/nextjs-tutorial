import axios from 'axios';
import Head from 'next/head';
import { useRouter } from "next/router";
import { Button, Form } from "semantic-ui-react";

export default function Login() {
    const router = useRouter();

    // Backend 작업 생략 ( 아무거나 입력하면 로그인 O )
    function login() {
        axios.post('/api/login')
        .then((res) => {
            if(res.status === 200 ) {
                // 로그인 성공
                router.push("/admin")
            }
        })
    }
    return (
        <>
        <Head>
            <title>LOGIN | 코딩앙마 - Next.js 강좌</title>
        </Head>
        <div style={{ padding: "100px 0", textAlign: "center "}}>
            <Form>
                <Form.Field inline>
                    <input placeholder="ID" />
                </Form.Field>
                <Form.Field inline>
                    <input type="password" placeholder="PW" />
                </Form.Field>
                <Button color="blue" onClick={login}>로그인</Button>
            </Form>
        </div>
        </>
    );
}


