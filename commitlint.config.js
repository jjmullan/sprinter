const Configuration = {
  extends: ["@commitlint/config-conventional"],
  formatter: "@commitlint/format",
  parserPreset: {
    //  name: "conventional-changelog-conventionalcommits",
    presetConfig: {
      types: [
        { type: "feat", section: "✨ 기능 추가" },
        { type: "fix", section: "🐛 버그 수정" },
        { type: "docs", section: "📝 문서" },
        { type: "refactor", section: "♻️  리팩토링" },
        { type: "perf", section: "⚡ 성능 개선" },
        { type: "revert", section: "⏪ 되돌리기" },
        { type: "ci", section: "👷 CI", hidden: true },
        { type: "remove", section: "🗑️  삭제" },
        { type: "rename", section: "🏷️  이름 변경" },
        { type: "arch", section: "🏛️  FSD 아키텍처" },
        { type: "style", section: "💄 스타일", hidden: true },
        { type: "build", section: "🏗️  빌드 시스템", hidden: true },
        { type: "test", section: "✅ 테스트", hidden: true },
        { type: "chore", section: "🔧 기타 작업", hidden: true },
      ],
    },
  },
  rules: {
    // 헤더
    "header-max-length": [2, "always", 72],
    // 타입
    "type-case": [2, "always", "lower-case"],
    "type-empty": [2, "never"],
    "type-enum": [
      2,
      "always",
      [
        "feat",
        "fix",
        "docs",
        "style",
        "refactor",
        "perf",
        "test",
        "chore",
        "revert",
        "build",
        "ci",
        "remove",
        "rename",
        "arch",
      ],
    ],

    "subject-case": [0], // 한국어 허용
    "subject-empty": [2, "never"], // 첫 줄에 공백으로 시작 불가
    "subject-full-stop": [2, "never"],
    "subject-exclamation-mark": [0], // Breaking Change @example feat(!): ...

    "body-case": [0],
    "body-leading-blank": [1, "always"],
    "body-max-line-length": [2, "always", 100],
  },
  ignores: [(commit) => commit === ""],
  defaultIgnores: true,
  prompt: {
    messages: {},
    questions: {
      type: {
        description: "please input type:",
      },
    },
  },
};

export default Configuration;
