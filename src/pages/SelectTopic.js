import React, { useState } from 'react';
import Layout from 'components/Layout/Layout';
import { LongButton } from 'components/Button/Button';
import { useNavigate } from 'react-router-dom';
const SelectTopic = () => {
  const [curr, setCurr] = useState(0);
  const navigate = useNavigate();
  return (
    <Layout>
      <div className='flex flex-col items-center gap-10'>
        <div className='mt-36 mb-36 font-bold text-3xl text-center '>
          어떤 <span className='text-[#4593FC]'>주제</span>를 선택하실건가요?
          <br />
        </div>
        <LongButton
          onClick={() => {
            navigate('/interview/:id');
          }}
        >
          선택1
        </LongButton>
        <LongButton
          onClick={() => {
            navigate('/interview/:id');
          }}
        >
          선택2
        </LongButton>
        <LongButton
          onClick={() => {
            navigate('/interview/:id');
          }}
        >
          선택3
        </LongButton>
        <LongButton
          onClick={() => {
            navigate('/interview/:id');
          }}
        >
          선택4
        </LongButton>
      </div>
    </Layout>
  );
};

export default SelectTopic;
