const Configuration = {
  extends: ["@commitlint/config-conventional"],
  formatter: "@commitlint/format",
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
