import React from 'react';
import styled from 'styled-components';

function Programmers() {
  return (
    <div className='flex gap-10 justify-center align-center text-lg text-center'>
      <div>
        <Span>Back-End</Span>
        <Ptag>
          송민진
          <Atag href='https://github.com/Song-Minjin' target='_blank'>
            GitHub
          </Atag>
        </Ptag>
        <Ptag>
          이혜민
          <Atag href='https://github.com/hm5938' target='_blank'>
            GitHub
          </Atag>
        </Ptag>
        <Ptag>
          김기연
          <Atag href='https://github.com/kky7' target='_blank'>
            GitHub
          </Atag>
        </Ptag>
      </div>
      <div>
        <Span>Front-End</Span>
        <Ptag>
          오정진
          <Atag href='https://github.com/OhJungJin' target='_blank'>
            GitHub
          </Atag>
        </Ptag>
        <Ptag>
          김지현
          <Atag href='https://github.com/zi-zzang' target='_blank'>
            GitHub
          </Atag>
        </Ptag>
      </div>
    </div>
  );
}

export default Programmers;
const Span = styled.span`
  font-weight: 600;
  font-size: 25px;
  color: #4593fc;
  text-align: center;
`;
const Ptag = styled.div`
  margin: 15px 0;
  font-weight: bold;
`;
const Atag = styled.a`
  margin-left: 5px;
  background-color: #4593fc;
  border-radius: 5px;
  padding: 3px 5px;
  color: #fff;
`;
