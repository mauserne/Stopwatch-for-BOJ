# Stopwatch-for-BOJ

> ### [Chrome Extension] 백준 코딩테스트 용 스톱워치 확장프로그램 🕔

![S4BOJ110Screenshot](https://user-images.githubusercontent.com/52377363/210776854-9b3733e9-c7b1-4c20-b892-9c20aa0ef5a7.png)

![GIF 2023-01-03 오후 11-04-58](https://user-images.githubusercontent.com/52377363/210782150-cd147bf7-020e-43df-8319-5b2af1cf4219.gif)

## 설치

[![Chrome Web Store](https://storage.googleapis.com/web-dev-uploads/image/WlD8wC6g8khYWPJUsQceQkhXSlv1/UV4C4ybeBTsZt43U4xis.png)](https://chrome.google.com/webstore/detail/stopwatch-for-boj/dimkkbacmkehbbkgbocfgnbkoodgemcf?hl=ko&authuser=0)

## 기능 설명

백준 코딩테스트 사이트 \(https://www.acmicpc.net) 우측하단에 스톱워치를 추가하는 확장프로그램입니다.

## 참고

본 확장 프로그램을 만들면서 참고한 자료들 입니다.

- ### [Javascript 스톱워치 만들기 - myhappyman.tistory.com](https://myhappyman.tistory.com/21)

- ### [Message Passing Example From Chrome Extensions - stackoverflow.com](https://stackoverflow.com/questions/21766990/message-passing-example-from-chrome-extensions)

- ### [chrome broadcast message to content scripts - stackoverflow.com](https://stackoverflow.com/questions/28825492/chrome-broadcast-message-to-content-scripts)

- ### ~~[Chrome extension 서비스 워커 비활성 - my-chair.tistory.com](https://my-chair.tistory.com/6)~~
  - 메니페스트 버젼을 v2로 낮추어 서비스 워커를 활성상태로 유지시키는 방법을 나타낸 블로그이다.
  - 22년 1월 부터 v2는 웹스토어에 게시가 불가능 하므로 사용할 수 없다.
- ### [Persistent Service Worker in Chrome Extension - stackoverflow.com](https://stackoverflow.com/questions/66618136/persistent-service-worker-in-chrome-extension)
  - 메니페스트 v3 부터 서비스워커(background.js)가 호출된 후 일정 시간이 지나면 비활성 상태로 들어간다. 메모리 누수 막기위함 인듯.
  - 서비스워커 호출 후 30초, 통신 후 5분 동안은 서비스 워커가 활성화 상태로 유지된다. 이를 이용한 방법을 소개한다.

## TODO

* popup에 크기 조절기 만들기
* popup에 색깔 선택기 만들기
