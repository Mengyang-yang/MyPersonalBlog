import fs from 'fs/promises'
import { readdirSync } from 'node:fs'
import path from 'node:path'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import matter from 'gray-matter'
import { ArrowLeft } from 'lucide-react'
import { getPostBySlug } from '@/lib/mdx'
import { MDXProvider } from '@/lib/mdx-provider'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

export function generateStaticParams() {
  return readdirSync(path.join(process.cwd(), 'src/posts'))
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => ({
      slug: file.replace(/\.mdx$/, ''),
    }))
}

export const dynamicParams = false

async function loadPost(slug: string) {
  try {
    const postsDirectory = path.join(process.cwd(), 'src/posts')
    const fullPath = path.join(postsDirectory, `${slug}.mdx`)

    const [post, fileContents] = await Promise.all([
      getPostBySlug(slug),
      fs.readFile(fullPath, 'utf8'),
    ])

    return {
      post,
      content: matter(fileContents).content,
    }
  } catch {
    return null
  }
}

export default async function BlogPost(props: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await props.params
  const result = await loadPost(slug)

  if (!result) {
    notFound()
  }

  const { post, content } = result

  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      <div className="mb-8">
        <Button variant="outline" size="sm" asChild className="mb-6">
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to all posts
          </Link>
        </Button>

        <Card>
          <CardHeader className="pb-4">
            <h1 className="text-4xl font-bold tracking-tight">{post.title}</h1>
            {post.date && (
              <time className="text-muted-foreground text-sm">
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            )}
          </CardHeader>
          <Separator />
          <CardContent className="pt-6">
            <article className="prose prose-lg dark:prose-invert max-w-none">
              <MDXProvider content={content} />
            </article>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
