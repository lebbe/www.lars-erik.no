import fs from 'fs'
import { readFile } from 'fs/promises'

const i18nConfig = await readFile(
  new URL('../i18.config.json', import.meta.url),
  'utf-8'
).then((data) => JSON.parse(data))

const OUTPUT_FILE = './src/types/i18n.d.ts'

let content = `// AUTO-GENERATED FILE. DO NOT EDIT.\n\n`

for (const ns of i18nConfig.namespaces) {
  const importPath = `../content/i18n/${ns}.json`
  const typeName = `${capitalize(ns)}Texts`
  content += `type ${typeName} = keyof typeof import("${importPath}");\n`
}

// The differnet Languages as one union type
content += '\nexport type Languages = '

for (const language of i18nConfig.supportedLangs) {
  content += `\n  | '${language}'`
}

content += `;\n`

// The default language as a type DefaultLanguage

content += `\nexport type DefaultLanguage = '${i18nConfig.defaultLang}';\n`

// Lag koblingsmap
content += `\nexport type Namespace = ${i18nConfig.namespaces
  .map((ns) => `'${ns}'`)
  .join(' | ')};\n`

content += `\nexport type I18nKeyMap = {\n`
for (const ns of i18nConfig.namespaces) {
  content += `  ${ns}: ${capitalize(ns)}Texts;\n`
}
content += `};\n`

fs.mkdirSync('./src/types', { recursive: true })
fs.writeFileSync(OUTPUT_FILE, content, 'utf-8')

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
