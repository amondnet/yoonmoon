---
name: pr-conventions-yoonmoon
description: PR conventions for amondnet/yoonmoon — personal repo, ready (non-draft) PRs, no PR template, no Closes #N convention, Korean bodies
metadata:
  type: project
---

`amondnet/yoonmoon` (this repo)의 PR 관례가 github 스킬 기본값과 다른 지점:

- **draft 기본 아님.** 개인 저장소이므로 `chatbot-pf`/`pleaseai` org의 draft-by-default 규칙이 적용되지 않는다. 별도 요청이 없으면 ready PR로 연다.
- **PR 템플릿 없음.** `find-templates.sh pr` → `status: not-found`. 스킬의 한국어 제네릭 템플릿으로 폴백한다.
- **`Closes #N` 관례 없음.** 이슈를 거의 만들지 않고, 머지 커밋은 PR 번호만 참조한다(예: `(#4)`). 이슈가 실제로 없으면 만들어내지 않는다.
- **본문·커밋 메시지는 한국어**, 타입/스코프만 영문 conventional commit.
- 스택 PR 도구 미추적(`detect-stack-tool.sh` 무출력) — 평범한 `gh pr` 흐름.

**Why:** 개인 플러그인 저장소라 org 자동 AI 리뷰나 이슈 트래킹 프로세스가 걸려 있지 않다.
**How to apply:** 이 저장소에서 PR을 만들 때 `--draft`를 붙이지 말고, 이슈 링크 섹션을 억지로 넣지 말 것.
