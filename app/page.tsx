import Image from "next/image";
import React, { useState } from 'react';
'use client';

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert h-5 w-[100px]"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            회원가입
          </h1>
          <input
          placeholder={'이메일'}
          />
          <input
              placeholder={'비밀번호'}
          />
          <input
              placeholder={'비밀번호 확인'}
          />
          <input
              placeholder={'닉네임'}
          />
          <button
          type={"submit"}>
            가입하기
          </button>
          <span>이미 계정이 있으신가요? <a href={'/login'}>로그인</a></span>
        </div>
      </main>
    </div>
  );
}
