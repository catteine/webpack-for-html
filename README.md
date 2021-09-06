# webpack-for-html

html용 웹팩 제작하던 것을 새로 내용 갱신, 다음의 내용을 중점으로 제작
- scss 파일 컴파일
- 사용하는 이미지 파일 읽어서 옮기기
- 제작한 js 파일 번들링
- 외부 라이브러리 파일 관리(옮기는 수준)

## 폴더
- 
- 
- 
- lib : 외부 라이브러리 소스
- js : 스크립트 파일
- dist 폴더 : 빌드 결과물
```
┌─ src : 작업 소스
├─ image : 이미지 파일
├─ sass : scss 파일
├─ lib : 외부 라이브러리 소스
├─ js : 스크립트 파일
└─ dist : 빌드 결과물
    ├─ image : 이미지 파일
    ├─ css : css 파일
    ├─ lib : 외부 라이브러리 소스
    └─ js : 스크립트 파일
```

## .scss
sass-loader, css-loader로 읽어온 후, mini-css-extract-plugin을 이용해서 css 파일로 빌드.

postcss 기능 중 autoprefixer 활용.

## .html
html-webpack-plugin으로 src 폴더 내 html파일을 템플릿 삼아서 빌드

## 이미지 파일
html-loader로 읽어온 img태그, scss파일에서 호출한 이미지를 읽어온 후, dist 폴더에 동일한 폴더/이름으로 빌드

## 외부 라이브러리
copy-webpack-plugin을 이용해서 src 폴더에서 dist 폴더로 그냥 옮겨옴
