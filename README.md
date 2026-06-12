# K-Some (케이섬)

국내 섬 여행 정보를 검색하고 추천받을 수 있는 JavaScript 기반 웹사이트입니다.
국내 인기 섬 50개 데이터를 바탕으로 섬 검색, 필터 검색, 랜덤 추천, 상세 설명 페이지, 여수세계섬박람회 섬 추천 기능을 제공합니다.

## 주요 기능

- 국내 섬 검색 및 자동완성
- 지역, 여행 스타일, 이동 수단, 추천 시기, 체류 일정별 필터 검색
- 섬별 대표 사진, 기본 정보, 상세 AI 설명 제공
- 랜덤 섬 추천
- 2026 여수세계섬박람회 섬 12개 소개
- 사용자 점수 기반 여수섬박람회 섬 추천
- 카카오맵 API 연동을 통한 섬 위치 표시

## 폴더 구조

```text
k-some/
├─ index.html
├─ README.md
├─ assets/
│  └─ logo.jpg
├─ css/
│  └─ styles.css
└─ js/
   ├─ app.js
   ├─ components/
   ├─ config/
   │  └─ kakao.js
   ├─ data/
   │  └─ islands.js
   └─ utils/
      └─ filter.js
```

## 실행 방법

이 프로젝트는 별도 패키지 설치가 필요 없는 정적 웹사이트입니다.

### 방법 : 로컬 서버로 실행 권장

압축을 푼 뒤 `k-some` 폴더에서 터미널을 열고 아래 명령어를 실행합니다.

```bash
python -m http.server 4173
```

실행 후 브라우저에서 아래 주소로 접속합니다.

```text
http://localhost:4173/
```


## 카카오맵 API 안내

제출용 파일에는 개인 카카오 API 키가 포함되어 있지 않습니다.
지도 기능을 직접 확인하려면 `js/config/kakao.js` 파일의 값을 본인 카카오 JavaScript 키로 변경하면 됩니다.

```js
export const KAKAO_MAP_API_KEY = "본인_카카오_JavaScript_키";
```

API 키가 비어 있어도 사이트의 검색, 필터, 추천, 상세 페이지 기능은 정상적으로 동작합니다.
이 경우 상세 페이지 지도 영역에는 안내 문구가 표시됩니다.
