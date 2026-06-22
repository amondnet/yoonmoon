import pleaseai from '@pleaseai/eslint-config'
import format from 'eslint-plugin-format'

// pleaseai(@antfu) 설정이 JS/TS/JSON/YAML 등을 린트 + 포맷한다.
// 마크다운(raw)은 antfu가 실파서로 린트하지 않으므로 포매팅을 oxfmt에 위임한다.
// (antfu `formatters` 옵션은 아직 oxfmt를 지원하지 않아 eslint-plugin-format을 직접 합성)
export default pleaseai()
  .append({
    files: ['**/*.md'],
    // SKILL.md는 Claude 스킬 규약 XML 태그(<fluency_trap> 등, 태그명에 '_' 포함)를 쓴다.
    // 밑줄 든 태그명은 유효한 HTML이 아니라 마크다운 포매터가 '_'를 이탤릭으로 오인해
    // 태그·본문을 손상시킨다. 따라서 SKILL.md는 oxfmt 포매팅에서 제외한다.
    ignores: ['**/SKILL.md'],
    languageOptions: {
      parser: format.parserPlain,
    },
    plugins: {
      format,
    },
    rules: {
      // 옵션은 oxfmt format() API로 전달. 한글 산문 줄바꿈은 보존.
      'format/oxfmt': ['error', { proseWrap: 'preserve' }],
    },
  })
