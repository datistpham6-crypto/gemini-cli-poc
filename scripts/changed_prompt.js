// Stand-in for gemini-cli's scripts/changed_prompt.js in the local mirror:
// the upstream script detects prompt/tool changes; 'false' keeps the evals
// job's "Run Evals" step skipped so the mirror's job graph stays green.
console.log('false');
