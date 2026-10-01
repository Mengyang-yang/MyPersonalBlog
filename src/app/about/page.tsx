'use client'

import { Code, HeartIcon, Music, PencilSparkles } from 'lucide-react'
import {
  fadeIn,
  fadeInSlideLeft,
  fadeInSlideUp,
  scaleIn,
} from '@/lib/animations'
import { Animated } from '@/components/ui/animated'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

export default function About() {
  const studyStartYear = 2024

  const skills = [
    {
      category: 'Languages',
      items: ['C', 'C++', 'Swift'],
    },
    {
      category: 'Web & Native UI',
      items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'SwiftUI'],
    },
    {
      category: 'Tools',
      items: ['Git', 'VS Code'],
    },
  ]

  const interests = [
    { name: 'music', icon: <Music className="mr-2 h-4 w-4" /> },
    { name: 'coding', icon: <Code className="mr-2 h-4 w-4" /> },
    { name: 'writing', icon: <PencilSparkles className="mr-2 h-4 w-4" /> },
  ]

  return (
    <Animated variants={fadeIn}>
      <div className="bg-background">
        <div className="container mx-auto px-4 py-16 lg:py-20">
          <Animated
            variants={fadeInSlideUp}
            className="grid lg:grid-cols-3 lg:gap-12"
          >
            <Animated variants={fadeInSlideLeft} className="space-y-6">
              <div className="flex flex-col items-center lg:items-start">
                <Animated variants={scaleIn} delay={0.2}>
                  <Avatar className="mb-4 h-32 w-32">
                    <AvatarFallback className="bg-primary text-primary-foreground text-xl">
                      MY
                    </AvatarFallback>
                  </Avatar>
                </Animated>
                <Animated variants={fadeInSlideUp} delay={0.3}>
                  <h1 className="text-3xl font-bold">About</h1>
                </Animated>
                <Animated variants={fadeInSlideUp} delay={0.4}>
                  <p className="text-muted-foreground">
                    Hi, I'm Mengyang, an Electronic Information Engineering
                    student who enjoys programming and building for the web.
                  </p>
                </Animated>
              </div>
              <Animated variants={fadeIn} delay={0.5}>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Quick Info</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-muted-foreground">China</p>
                    </div>
                    <div>
                      <p className="font-medium">Learning since</p>
                      <p className="text-muted-foreground">{studyStartYear}</p>
                    </div>
                    <div>
                      <p className="font-medium">Focus</p>
                      <p className="text-muted-foreground">
                        Programming & Web Development
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Animated>
            </Animated>

            <div className="mt-12 space-y-8 lg:col-span-2 lg:mt-0">
              <Animated variants={fadeInSlideUp} delay={0.2}>
                <Card>
                  <CardHeader>
                    <CardTitle>About Me</CardTitle>
                    <CardDescription>
                      Electronic Information Engineering student who enjoys
                      programming and learning modern web technologies
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p>
                      Hi, I'm Mengyang, an Electronic Information Engineering
                      student from China. I started learning programming in{' '}
                      {studyStartYear} and enjoy exploring how software can turn
                      ideas into useful tools.
                    </p>
                    <p>
                      I am currently learning C, C++, and Swift, while also
                      building web projects with React, Next.js, TypeScript,
                      Tailwind CSS, and Node.js. I am especially interested in
                      understanding both how software works and how to make it
                      useful and easy to use.
                    </p>
                    <p>
                      This blog is where I document what I learn, share
                      projects, and reflect on my progress as a student and
                      developer. I value curiosity, steady practice, and
                      building a strong foundation one project at a time.
                    </p>
                  </CardContent>
                </Card>
              </Animated>

              <Animated variants={fadeInSlideUp} delay={0.4}>
                <Card>
                  <CardHeader>
                    <CardTitle>Skills</CardTitle>
                    <CardDescription>
                      Technical expertise and capabilities
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {skills.map((skillGroup, index) => (
                        <Animated
                          key={index}
                          variants={fadeIn}
                          delay={0.2 + index * 0.1}
                        >
                          <div>
                            <h3 className="mb-3 font-medium">
                              {skillGroup.category}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                              {skillGroup.items.map((skill, skillIndex) => (
                                <Badge key={skillIndex} variant="secondary">
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                            {index < skills.length - 1 && (
                              <Separator className="mt-4" />
                            )}
                          </div>
                        </Animated>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Animated>

              <Animated variants={fadeInSlideUp} delay={0.6}>
                <Card>
                  <CardHeader>
                    <CardTitle>Interests</CardTitle>
                    <CardDescription>
                      What I enjoy outside of coding
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                      {interests.map((interest, index) => (
                        <Animated
                          key={index}
                          variants={scaleIn}
                          delay={0.2 + index * 0.1}
                        >
                          <div className="flex items-center">
                            {interest.icon}
                            <span>{interest.name}</span>
                          </div>
                        </Animated>
                      ))}
                    </div>
                    <Animated variants={fadeIn} delay={0.8}>
                      <div className="mt-6">
                        <p className="flex items-center">
                          <HeartIcon className="mr-4 h-12 w-12 text-red-500" />
                          <span>
                            I am passionate about music, coding, and writing. I
                          </span>
                        </p>
                      </div>
                    </Animated>
                  </CardContent>
                </Card>
              </Animated>
            </div>
          </Animated>
        </div>
      </div>
    </Animated>
  )
}
