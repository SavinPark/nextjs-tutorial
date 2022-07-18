import { Header } from 'semantic-ui-react';
import Gnb from "./Gnb";

export default function Top() {
    return (
        <div>
            <div style={{display: "flex", padding: "20px"}}>
                <div style={{flex: "100px 0 0"}}>
                    <img src="/images/angma.jpg" alt="logo" style={{borderRadius: "50%"}}/>
                </div>
                <Header as="h1">코딩 앙마</Header>
            </div>
            <Gnb />
        </div> 
    )
}



