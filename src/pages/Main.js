import Layout from 'components/Layout/Layout';
import { LongButton } from 'components/Button/Button';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import React from 'react';

function Main() {
  const [checkAnswer, setCheckAnswer] = useState(true);
  const navigate = useNavigate();
  return (
    <Layout>
      <div className='flex flex-col items-center gap-10'>
        {checkAnswer ? (
          <>
            <div className='mt-36 font-bold text-3xl'>벨터뷰</div>
            <div className='cmt-10 mb-40 font-bold text-2xl text-[#4593FC]'>당신을 위한 기술면접 테스트</div>
            <LongButton
              onClick={() => {
                setCheckAnswer(!checkAnswer);
              }}
            >
              면접 진행하기
            </LongButton>
          </>
        ) : (
          <>
            <div className='mt-36 mb-36 font-bold text-3xl'>
              어떤 면접을 <span className='text-[#4593FC]'>희망</span>하시나요?
            </div>
            <LongButton
              onClick={() => {
                navigate('/selecttopic');
              }}
            >
              프론트엔드
            </LongButton>
            <LongButton
              onClick={() => {
                navigate('/selecttopic');
              }}
            >
              백엔드
            </LongButton>
            <LongButton
              onClick={() => {
                navigate('/selecttopic');
              }}
            >
              CS
            </LongButton>
          </>
        )}
      </div>
    </Layout>
  );
}

export default Main;
