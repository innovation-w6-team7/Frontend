import Layout from 'components/Layout/Layout';
import { LongButton } from 'components/Button/Button';
import { useNavigate } from 'react-router';
import React, { useState } from 'react';
import { ProgrammersModal } from 'components/Modal/Modal';
import Programmers from './Programmers';
function Ending() {
  const navigate = useNavigate();
  const [checkProgrammers, setCheckProgrammers] = useState(true);
  const [AnotherModalVisible, setAnotherModalVisible] = useState(false);

  const openCheckAnotherAnswer = () => {
    setAnotherModalVisible(!AnotherModalVisible);
  };
  return (
    <>
      <Layout>
        <div className='flex items-center h-full'>
          <div className='flex flex-col items-center w-full gap-10 h-5/6'>
            <div className='m-40 text-6xl font-bold'>
              당신의 <span className='text-[#4593FC]'>앞날</span>을 응원합니다 :)
            </div>
            <LongButton
              onClick={() => {
                navigate('/');
              }}
            >
              다른 문제 풀러 가기
            </LongButton>
            <LongButton
              onClick={() => {
                navigate('/mypage');
              }}
            >
              {' '}
              내가 푼 / 찜한 문제 확인하기{' '}
            </LongButton>
            <LongButton
              onClick={() => {
                openCheckAnotherAnswer();
              }}
            >
              만든 사람들
            </LongButton>
          </div>
        </div>
      </Layout>
      {checkProgrammers && (
        <ProgrammersModal visible={AnotherModalVisible} closable={true} maskClosable={true} onClose={openCheckAnotherAnswer}>
          <Programmers />
        </ProgrammersModal>
      )}
    </>
  );
}

export default Ending;
