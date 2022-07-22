import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Button } from "semantic-ui-react";

export default function Admin() {

    const router = useRouter();
    const [isLogin, setIsLogin] = useState(false);

    function checkLogin() {
        axios.get("api/isLogin")
            .then((res) => {
                if (res.status === 200 && res.data.name) {
                    // 로그인
                    setIsLogin(true);
                } else {
                    // 로그인이 안 된 상태일 때 로그인 페이지로 이동
                    router.push('/login');
                }
            })
    }
    function logout() {
        axios.get('/api/logout')
        .then(res => {
            if(res.status === 200) {
                router.push('/');
            }
        })
    }

    useEffect(() => {
        checkLogin();
    }, []);

    return(
        <>
            ADMIN
            {isLogin && (<Button color="red" onClick={logout}>로그아웃</Button>)}
        </>
    )
}

