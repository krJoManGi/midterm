// 202030133 조만기
// 2024.04.24 React시험 파일

// state로 hook 사용
import React, { useState } from "react"

export default function Midterm(props) {
    // showText선언
    const [showText, setShowText] = useState('')

    return (
        <>
            {/* 클릭한 버튼에 따라 보여질 텍스트 */}
            <h1>당신은 어떤 과일을 좋아하나요? {showText}</h1>

            
            {/* 버튼 클릭시 텍스트를 '사과'로 변경 */}
            <button onClick={() => setShowText('사과')} >
                사과
            </button>

            {/* 버튼 클릭시 텍스트를 '오렌지'로 변경 */}
            <button onClick={() => setShowText('오렌지')} >
                오렌지
            </button>
            
            {/* 버튼 클릭시 텍스트를 '바나나'로 변경 */}
            <button onClick={() => setShowText('바나나')} >
                바나나
            </button>
        </>
    )
}