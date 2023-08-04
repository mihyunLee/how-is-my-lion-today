# how-is-my-lion-today

<div align="center">
  <img width="680" src="https://github.com/mihyunLee/blogImage/assets/51310674/4e022f71-1d9c-412d-adea-3ac7bd049374" alt="readme 이미지" />
</div>
<br />

> 개인 프로젝트 <br />
> 프로젝트 개발 기간: 2023.03.04 - 2023.03.15 <br />
> 리팩토링 기간: 2023.04.07 - 2023.04.18 / 2023.07.12 - 2023.07.17

<br />

# 🗣️ Description

**오늘 내 사자는** 프로젝트는 멋쟁이사자처럼 스쿨에서 오늘 하루를 회고 할 수 있는 회고록 프로젝트입니다. <br />
'회고'란 나를 객관적인 시각으로 판단하고 분석하며 피드백을 할 수 있다는 장점이 있습니다. <br />
쉬는 시간에 이전 교시의 집중도를 체크하고 배운점을 간단하게 정리해본 뒤, 마지막에 오늘 하루를 회고하는 과정으로 이루어져 있기 때문에 이를 통해 회고하는 습관을 기르는 것을 목표로 프로젝트를 기획하게 되었습니다. <br />

<br />

# 🚀 Getting Started

https://mihyunlee.github.io/how-is-my-lion-today/

<br />

# 🤝 Commit Convention

| 태그          | 설명                                                           |
| ------------- | -------------------------------------------------------------- |
| `✨feat:`     | 새로운 기능 추가                                               |
| `🐛fix:`      | 버그 해결                                                      |
| `💄design:`   | CSS 등 사용자 UI 디자인 변경                                   |
| `🎨style:`    | 코드 포맷 변경, 세미 콜론 누락, 코드 수정이 없는 경우          |
| `♻️refactor:` | 프로덕션 코드 리팩토링                                         |
| `💬comment:`  | 필요한 주석 추가 및 변경                                       |
| `📝docs:`     | 문서를 수정한 경우                                             |
| `⚙️chore:`    | 빌드 테스크 업데이트, 패키지 매니저 설정(프로덕션 코드 변경 X) |
| `🔃rename:`   | 파일 혹은 폴더명을 수정하거나 옮기는 작업                      |
| `🚚remove:`   | 파일을 삭제하는 작업만 수행한 경우                             |

<br />

# ✅ Feature

- [x] 매 교시의 집중도를 체크하면 집중도에 따라 오늘 나의 사자가 최상단에 나타납니다.
- [x] 쉬는 시간에 간단하게 체크하는 것을 목표로 두어 글자수를 제한하고 있습니다.
- [x] localStorage로 회고 내용을 저장하여 초기화 전 회고 내용을 확인할 수 있습니다.
- [x] 반응형을 지원하여 사용자의 편의성을 고려하였습니다.

<br />

# 🗂️ Project Structure

```
🦁 how-is-lion-today
├─ 📂 css
│  ├─ common.css     ───────────── 🎨 공통 스타일
│  ├─ index.css      ───────────── 🎨 기본 CSS 파일
│  ├─ normalize.css
│  └─ variables.css  ───────────── 🎨 CSS 변수
├─ 📂 images
├─ 📂 js
│  └─ index.js
├─ index.html
└─ README.md
```
