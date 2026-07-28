import path from 'path'

const buildEslintCommand = (filenames) =>
  `eslint --fix ${filenames
    .map((file) => `"${path.relative(process.cwd(), file)}"`)
    .join(' ')}`

const config = {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand, 'prettier --write'],
  '*.{json,md,mdx,css}': ['prettier --write'],
}

export default config
