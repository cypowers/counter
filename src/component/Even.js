import { useEffect } from "react";

function Even() {

    useEffect(() => {
        console.log("짝수 컴포넌트가 마운트 되었습니다.");
        return () => {
            console.log("Even 컴포넌트 언마운트");
        }
    }, []);

  return <div>현재 카운트는 짝수 입니다</div>
}

export default Even;