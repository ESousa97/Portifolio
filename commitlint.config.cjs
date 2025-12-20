module.exports = {
  extends: ["@commitlint/config-conventional"],
  // Ignora commits automáticos do Dependabot (ex.: "Bump pacote from x to y")
  ignores: [(message) => message.startsWith("Bump ") || message.startsWith("chore(deps)")],
};
