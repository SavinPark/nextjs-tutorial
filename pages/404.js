import { Icon } from "semantic-ui-react";

export default function Error404() {
    return (
        <div style={{ padding: "200px 0", textAlign: "center", fontSize: 30 }}>
            <Icon name="warning circle" color="red"/>
            404 : 페이지를 찾을 수 없습니다.
        </div>
    )
}

// 이 파일은 빌드 타임에 정적 생성 됩니다.