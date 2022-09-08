# Velterview (FE)

#### 내가 희망하는 개발 직무를 선택하고, 그 직무에 맞는 예상 질문들을 연습해보세요!


## 👥 팀 소개
#### `Backend`
<a href="https://github.com/hm5938" target="_blank"><img height="40"  src="https://img.shields.io/static/v1?label=Spring&message=이혜민 &color=08CE5D&style=for-the-badge&>"/></a>
<a href="https://github.com/Song-Minjin" target="_blank"><img height="40"  src="https://img.shields.io/static/v1?label=Spring&message=송민진 &color=08CE5D&style=for-the-badge&>"/></a>
<a href="https://github.com/kky7" target="_blank"><img height="40"  src="https://img.shields.io/static/v1?label=Spring&message=김기연 &color=08CE5D&style=for-the-badge&>"/></a>

#### `Frontend`
 <a href="https://github.com/OhJungJin" target="_blank"><img height="40"  src="https://img.shields.io/static/v1?label=React&message=오정진 &color=61dafb&style=for-the-badge&>"/></a>
 <a href="https://github.com/zi-zzang" target="_blank"><img height="40"  src="https://img.shields.io/static/v1?label=React&message=김지현 &color=61dafb&style=for-the-badge&>"/></a>

<br />

## 🗓 프로젝트 기간
- 2022년 9월 2일 ~ 2022년 9월 8일

- 배포 : 2022년 9월 8일

<br />


## 📷 시연영상

**[https://youtu.be/UN37jx7CBoM]**

## 📜 기술스택

<br />

![Javascript](https://img.shields.io/badge/Javascript-F7DF1E.svg?&style=for-the-badge&logo=Javascript&logoColor=black)
![React](https://img.shields.io/badge/React-61DAFB.svg?&style=for-the-badge&logo=React&logoColor=black)
![Redux](https://img.shields.io/badge/Redux-764ABC.svg?&style=for-the-badge&logo=Redux&logoColor=black)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4.svg?&style=for-the-badge&logo=TailwindCSS&logoColor=black)
![AmazonS3](https://img.shields.io/badge/AmazonS3-569A31.svg?&style=for-the-badge&logo=AmazonS3&logoColor=black)

<br/>

## 📒 와이어프레임

![스크린샷 2022-09-02 오후 5 07 38](https://user-images.githubusercontent.com/84957136/189092740-fb70419b-acb5-46cc-aceb-0fe0a09f6b0e.png)

<br/>

## ✅ 트러블 슈팅

#### 1. Redux store에 데이터가 들어가지 않는 이슈 발견, 데이터를 담는 reducer에 state값을 찍었을 때는 정상적으로 들어가는 것을 확인했으나, 실제로 state를 불러오면 undefined가 뜸

#### 해결 =>  initialState 값을 빈 객체로 두는 것이 아닌 { List: [] } 형태로 두고 state.list에 추가하는 방식으로 바꾸니 해결

<br/>

#### 2. 문제가 화면에 나온 후 새로고침 하면 데이터가 날라가는 문제 발견

#### 해결 => redux-persist 라이브러리를 사용하여 새로고침 시 라이브러리 내 storage에 저장하여 새로고침하여도 데이터 유지.

<br/>


