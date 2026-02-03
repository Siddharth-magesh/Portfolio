"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { cn } from "@/lib/utils"

interface Skill {
  name: string
  level: number // 0-100
  color?: string
}

interface SkillBarProps {
  skill: Skill
  index: number
}

function SkillBar({ skill, index }: SkillBarProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium">{skill.name}</span>
        <span className="text-xs text-muted-foreground">{skill.level}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          className={cn(
            "h-full rounded-full",
            skill.color || "bg-gradient-to-r from-primary to-blue-500"
          )}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
        />
      </div>
    </div>
  )
}

interface SkillsVisualizationProps {
  skills: Skill[]
  className?: string
}

export function SkillsVisualization({ skills, className }: SkillsVisualizationProps) {
  return (
    <div className={cn("space-y-4", className)}>
      {skills.map((skill, index) => (
        <SkillBar key={skill.name} skill={skill} index={index} />
      ))}
    </div>
  )
}

// Radial/circular skill visualization
interface SkillCircleProps {
  skill: Skill
  size?: number
  strokeWidth?: number
}

export function SkillCircle({ skill, size = 100, strokeWidth = 8 }: SkillCircleProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  const radius = (size - strokeWidth) / 2
  const circumference = radius * 2 * Math.PI
  const strokeDashoffset = circumference - (skill.level / 100) * circumference

  return (
    <div ref={ref} className="flex flex-col items-center gap-2">
      <div className="relative" style={{ width: size, height: size }}>
        {/* Background circle */}
        <svg className="transform -rotate-90" width={size} height={size}>
          <circle
            className="text-muted"
            strokeWidth={strokeWidth}
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx={size / 2}
            cy={size / 2}
          />
          <motion.circle
            className="text-primary"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx={size / 2}
            cy={size / 2}
            initial={{ strokeDasharray: circumference, strokeDashoffset: circumference }}
            animate={
              isInView
                ? { strokeDasharray: circumference, strokeDashoffset }
                : { strokeDasharray: circumference, strokeDashoffset: circumference }
            }
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        </svg>
        {/* Center text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.span
            className="text-lg font-bold"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {skill.level}%
          </motion.span>
        </div>
      </div>
      <span className="text-sm font-medium text-center">{skill.name}</span>
    </div>
  )
}

// Skill tag cloud with hover effects
interface SkillTag {
  name: string
  category?: "expert" | "proficient" | "familiar"
}

interface SkillTagCloudProps {
  skills: SkillTag[]
  className?: string
}

export function SkillTagCloud({ skills, className }: SkillTagCloudProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  const getCategoryStyles = (category?: string) => {
    switch (category) {
      case "expert":
        return "bg-primary/10 text-primary border-primary/30 hover:bg-primary/20"
      case "proficient":
        return "bg-blue-500/10 text-blue-600 border-blue-500/30 hover:bg-blue-500/20"
      case "familiar":
        return "bg-muted text-muted-foreground border-border hover:bg-muted/80"
      default:
        return "bg-muted text-foreground border-border hover:bg-muted/80"
    }
  }

  return (
    <motion.div
      ref={ref}
      className={cn("flex flex-wrap gap-2", className)}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.05 },
        },
      }}
    >
      {skills.map((skill) => (
        <motion.span
          key={skill.name}
          className={cn(
            "px-3 py-1.5 rounded-full text-sm font-medium border transition-colors cursor-default",
            getCategoryStyles(skill.category)
          )}
          variants={{
            hidden: { opacity: 0, scale: 0.8, y: 10 },
            visible: { opacity: 1, scale: 1, y: 0 },
          }}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {skill.name}
        </motion.span>
      ))}
    </motion.div>
  )
}

// Animated skill category card
interface SkillCategoryProps {
  title: string
  icon: React.ReactNode
  skills: string[]
  index?: number
}

export function SkillCategory({ title, icon, skills, index = 0 }: SkillCategoryProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      className="p-6 rounded-xl bg-card border border-border hover:border-primary/20 hover:shadow-lg transition-all duration-300"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
          {icon}
        </div>
        <h3 className="font-semibold text-lg">{title}</h3>
      </div>
      <motion.div
        className="flex flex-wrap gap-2"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.05, delayChildren: 0.2 },
          },
        }}
      >
        {skills.map((skill) => (
          <motion.span
            key={skill}
            className="px-2.5 py-1 rounded-md text-sm bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1 },
            }}
          >
            {skill}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  )
}
