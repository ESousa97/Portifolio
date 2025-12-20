module.exports = {
  extends: ["@commitlint/config-conventional"],
  // Ignora commits automáticos do Dependabot e merges automatizados
  ignores: [
    (message) => {
      const lower = message.toLowerCase();
      return (
        lower.startsWith("bump ") ||
        lower.startsWith("chore(deps)") ||
        lower.startsWith("chore: bump deps") ||
        lower.startsWith("build(deps)") ||
        lower.startsWith("merge pull request #")
      );
    },
  ],
};
