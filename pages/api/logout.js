export default (req, res) => {
    if (req.method === "GET") {
        // res.setHeader( 쿠키명 , 값(0초));
        res.setHeader("Set-Cookie", "a_name=Savin;Max-Age=0;HttpOnly,Secure");
        res.statusCode = 200;
        res.json({ message: "ok"});
    }
}


