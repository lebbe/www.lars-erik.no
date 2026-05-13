#!/usr/bin/env node
import { writeFileSync, mkdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const title = process.argv[2]

if (!title) {
  console.error('Please provide a title: npm run blog -- "My Blog Post Title"')
  process.exit(1)
}

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/æ/g, 'ae')
    .replace(/ø/g, 'oe')
    .replace(/å/g, 'aa')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
}

function formatDate(date) {
  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const year = date.getFullYear()
  return `${day}.${month}.${year}`
}

const today = new Date()
const year = today.getFullYear()
const date = formatDate(today)
const slug = slugify(title)

const content = `---
layout: ../../../layouts/BlogPostLayout.astro
date: ${date}
tags: []
category:
description: 
slug: ${slug}
---

# ${title}

`

const dir = join(__dirname, '..', 'src', 'pages', 'blog', String(year))
mkdirSync(dir, { recursive: true })

const filePath = join(dir, `${slug}.md`)
writeFileSync(filePath, content, 'utf-8')

console.log(`Created: src/pages/blog/${year}/${slug}.md`)
