/** @type {import('ts-jest').JestConfigWithTsJest} */
// jest.config.js or jest.config.ts
module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'node', // Use 'jsdom' if you're testing browser-related code.
	testRegex: '.*\\.test\\.(t|j)s$', // This matches files ending with .test.ts
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/src/$1' // Adjust this based on your project structure.
	}
};
