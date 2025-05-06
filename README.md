## 🎬 CINEMABOX (Page Router 버전)

한입 Next.js 챌린지를 통해 공부한 내용을 바탕으로 개발한 과제 프로젝트입니다.

- 참고 강의 : [한 입 크기로 잘라먹는 Next.js](https://www.inflearn.com/course/%ED%95%9C%EC%9E%85-%ED%81%AC%EA%B8%B0-nextjs)

## ⚒️ Stack

<img src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white">
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">

## 📋 기능 목록

### 1. 프로젝트 생성 및 라우팅 설정하기

```
- 새로운 Next App 생성하기 (Page Router 버전)
- 라우팅 설정하기
  - / : 인덱스 페이지
  - /search : 검색 페이지
  - /movie/[id] : 영화 상세 페이지
```

- [x] 프로젝트 생성 및 라우팅 설정하기 완료
  - /search : 검색 페이지<br>
    → useRouter() 훅의 query 프로퍼티를 사용하여 쿼리 스트링 값을 가져왔습니다.
  - /movie/[id] : 영화 상세 페이지<br>
    → useRouter() 훅의 query.id를 통해 영화 id 값을 가져왔습니다.

### 2. 백엔드 서버 세팅하기

- [x] 백엔드 서버 세팅하기 완료

### 3. 레이아웃 설정하기

```
- 글로벌 레이아웃 설정하기
- 검색바 레이아웃 설정하기
```

- [x] 레이아웃 설정하기 완료

  - 모든 페이지에 공통으로 적용되는 `GlobalLayout` 컴포넌트를 생성했습니다.
  - 검색바가 포함된 `SearchableLayout` 컴포넌트를 생성했습니다.
    - 해당 레이아웃은 `/` 및 `/search` 페이지에만 적용됩니다.

### 4. UI 구현하기

- [x] 인덱스 페이지 UI, 검색 페이지 UI, 상세 페이지 UI 구현하기 완료

### 5. 프로젝트에 SSR 적용하기 (with 데이터 페칭)

- [x] SSR 적용하기 완료
  - 모든 페이지에 `getServerSideProps`를 사용해 SSR을 적용해 봄으로써, 서버 사이드 렌더링 방식에 대한 이해를 높일 수 있었습니다.

### 6. 프로젝트에 SSG 적용하기 (with 데이터 페칭)

```
가능한 많은 페이지에 SSG를 적용하기
```

- [x] SSG 적용하기 완료
  - `getStaticProps`를 사용해 SSG를 적용했습니다.
  - 인덱스 페이지<br>
    → 실시간으로 변경되는 데이터가 없기 때문에 SSG를 적용했습니다.
  - 검색 페이지<br>
    → 검색 결과는 클라이언트 사이드에서만 요청하도록 설정하고, 나머지 레이아웃은 SSG로 처리했습니다.
  - 상세 페이지<br>
    → 인덱스 페이지와 마찬가지로 SSG를 적용했습니다.
    → 동적 경로를 가진 상세 페이지의 경우 `getStaticPaths`를 함께 사용해 정적 경로를 사전에 설정해 줌으로써 SSG를 구현했습니다.

### 7. 프로젝트 완성하기

```
- 인덱스 페이지 ISR 적용하기 (시간 기반 ISR)
  - 특정 시간을 주기로 추천 도서를 갱신할 수 있도록 인덱스 페이지에 ISR을 적용해주세요.
  - On Demand 방식을 사용하실 필요는 없습니다.

- 배포 준비 및 SEO 설정하기
  - 파비콘을 적용해주세요.
  - 페이지별 메타태그 설정을 완료해주세요.

- 백엔드 서버 배포하기 및 API 요청경로 수정하기
  - 백엔드 서버를 배포한 다음, 배포된 주소를 API 요청경로로 수정해주세요.
```

- [x] 프로젝트 완성하기 완료
  - 인덱스 페이지에 `getStaticProps`의 `revalidate` 값을 설정하여 ISR을 적용했습니다.
  - 각 페이지에서 `Head` 컴포넌트를 활용해 타이틀과 오픈그래프 메타 태그를 설정하고, 파비콘을 적용하여 SEO 요소를 개선했습니다.
  - https://cinemabox-pages.vercel.app/
