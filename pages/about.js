import Head from 'next/head';
import { Button, Divider, Form, Header, List, TextArea, Input, Field } from "semantic-ui-react";

export default function About() {
    return (
        <div>
            <Head>
                <title>ABOUT | 코딩앙마 - Next.js 강좌</title>
            </Head>
            <Header as="h3" style={{paddingTop: 40}} color="teal">
                회사 소개
            </Header>
            <Divider />
            <List>
                <List.Item>
                    <List.Icon name="users"></List.Icon>
                    <List.Content>Semantic UI</List.Content>
                </List.Item>
                <List.Item>
                    <List.Icon name="marker"></List.Icon>
                    <List.Content>New York, NY</List.Content>
                </List.Item>
                <List.Item>
                    <List.Icon name="mail"></List.Icon>
                    <List.Content>
                        <a href="mailto: savinpark0315@gmail.com">savinpark0315@gmail.com</a>
                    </List.Content>
                </List.Item>
                <List.Item>
                    <List.Icon name="linkify"></List.Icon>
                    <List.Content>
                        <a href="https://semantic-ui.com/">semantic-ui.com</a>
                    </List.Content>
                </List.Item>
            </List>
            <Header as="h3" style={{paddingTop: 40}} color="teal">
                문의 사항
            </Header>
            <Divider />
            <Form>
                <div style={{paddingTop: 30}} >
                    <label ><strong>제목</strong></label>
                    <TextArea type="text" name="title" placeholder="Title" rows="1" style={{ resize: "none"}}></TextArea>
                </div>
                <div style={{padding: "30px 0"}}>
                    <label><strong>내용</strong></label>
                    <TextArea type="text" name="message" placeholder="Message" rows="7" style={{ resize: "none"}}></TextArea>
                </div>
                <Button color="green" style={{marginBottom: 20}}>보내기</Button>
            </Form>

        </div>
    );
}


