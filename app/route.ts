import { NextRequest, NextResponse } from 'next/server';


// 클라이언트로부터 받을 요청 데이터의 타입 정의
interface RegisterRequest {
    name: string;
    email: string;
}

// 서버가 클라이언트에 돌려줄 응답 데이터의 타입 정의
interface RegisterResponse {
    message: string;
    receivedData?: RegisterRequest;
    error?: string;
}

export async function POST(request: NextRequest) {
    try {
        // request.json()에 타입을 지정하여 본문 파싱
        const body: RegisterRequest = await request.json();
        const { name, email } = body;

        // 간단한 유효성 검사
        if (!name || !email) {
            return NextResponse.json<RegisterResponse>(
                { error: '이름과 이메일은 필수 입력 항목입니다.' },
                { status: 400 }
            );
        }

        // 실제 환경에서는 이곳에서 DB 저장 프로세스를 진행합니다.
        const responseData: RegisterResponse = {
            message: 'TypeScript 환경에서 회원가입이 성공적으로 완료되었습니다.',
            receivedData: { name, email },
        };


        return NextResponse.json<RegisterResponse>(responseData, { status: 201 });
    } catch (error) {
        return NextResponse.json<RegisterResponse>(
            { error: '서버 내부 오류가 발생했습니다.' },
            { status: 500 }
        );
    }
}