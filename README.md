# Basic_React_NextJs



# 처음 만난 리액트 + NextJS 기초강의 정리 리포지토리

## 소개
이 프로젝트는 React와 Next.js를 사용해 만든 웹 애플리케이션입니다. Next.js의 서버 사이드 렌더링(SSR) 기능과 클라이언트 사이드 렌더링(CSR)을 적절히 활용하여 SEO 최적화 및 빠른 사용자 경험을 제공합니다.

## 기술 스택
- **React**: 사용자 인터페이스를 구축하기 위한 라이브러리
- **Next.js**: React 기반의 프레임워크로, SSR과 CSR을 지원
- **JavaScript/TypeScript**: 개발 언어
- **CSS/SCSS**: 스타일링

## 기능
- 서버 사이드 렌더링(SSR) 및 클라이언트 사이드 렌더링(CSR) 지원
- API 연동을 통한 데이터 처리
- 반응형 디자인 구현

## 설치 및 실행

### 1. 클론 및 패키지 설치
```bash
git clone https://github.com/사용자명/프로젝트명.git
cd 프로젝트명
npm install
```

### 2. 개발 서버 시작
```bash
npm run dev
```
로컬에서 [`http://localhost:3000`](http://localhost:3000)으로 접속하여 확인 가능합니다.

### 3. 빌드 및 배포
```bash
npm run build
npm start
```

## 주요 스크립트
- `npm run dev`: 개발 서버를 시작합니다.
- `npm run build`: 프로덕션 빌드를 생성합니다.
- `npm start`: 로컬에서 프로덕션 빌드를 실행합니다.
- `npm run lint`: 코드 린팅을 실행하여 오류를 확인합니다.

## 프로젝트 구조
```plaintext
프로젝트명/
├── public/                 # 정적 파일(이미지, 폰트 등)
├── pages/                  # 페이지 컴포넌트(Next.js의 라우팅 기능 포함)
│   ├── index.js            # 메인 페이지
│   └── ...                 # 기타 페이지
├── components/             # 재사용 가능한 컴포넌트
├── styles/                 # CSS/SCSS 파일
├── utils/                  # 유틸리티 함수
└── README.md               # 리드미 파일
```

## 추가 정보
- [Next.js 문서](https://nextjs.org/docs)
- [React 문서](https://reactjs.org/docs)

---

