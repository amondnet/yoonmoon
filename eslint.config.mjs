import pleaseai from '@pleaseai/eslint-config'

// pleaseai(@antfu)가 JS/TS/JSON/YAML과 마크다운 내 코드블록을 '린트'한다.
// 마크다운 본문 '포맷'은 eslint로 하지 않는다 — eslint-plugin-format(oxfmt·prettier 백엔드
// 모두)이 일부 마크다운에서 비멱등 손상을 낸 이력이 있어(XML 태그 + 강조 조합), 안정성을 위해
// Prettier를 CLI로 직접 돌린다: `bun run format` (package.json 참조).
export default pleaseai()
