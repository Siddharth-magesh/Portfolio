"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  ArrowLeft,
  Calendar,
  MapPin,
  Building,
  ExternalLink,
  Cpu,
  Brain,
  Zap,
  Server,
  Database,
  Code,
  Microscope,
  Layers,
  GitBranch,
  Rocket,
  Download,
  FileText,
} from "lucide-react"
import { FadeIn, SlideIn, StaggerContainer, StaggerItem } from "@/components/animations"

export default function IITMBrainCentrePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,var(--violet)/0.05,transparent_50%)]" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-violet/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

        <div className="container-max relative">
          <FadeIn>
            <Button variant="ghost" asChild className="mb-6 hover:bg-muted">
              <Link href="/experience">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Experience
              </Link>
            </Button>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <FadeIn delay={0.1}>
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="secondary" className="badge-violet border">
                    LLM Research & Engineering
                  </Badge>
                  <Badge variant="outline" className="border-green-500 text-green-600">
                    NVIDIA Partnered
                  </Badge>
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <h1 className="font-heading mb-2">LLM Researcher / Engineer</h1>
                <p className="text-lg text-muted-foreground mb-4">
                  Sudha Gopalakrishnan Brain Centre, IIT Madras
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Contributed to cutting-edge neuroscience research at the Sudha Gopalakrishnan Brain Centre, 
                  a world-class facility powered by NVIDIA DGX A100 systems and SuperPOD technology. 
                  Developed and fine-tuned advanced Vision-Language Models (VLMs) and LLMs on histology data, 
                  built internal AI tools, and deployed production-ready inference pipelines as Jenkins plugins 
                  for seamless integration into the research workflow.
                </p>
              </FadeIn>
              <FadeIn delay={0.4}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild className="bg-violet hover:bg-violet/90 text-white">
                    <a href="https://iitm.humanbrain.in/" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Brain Centre Website
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="https://brainportal.humanbrain.in/" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      DHARANI Brain Atlas
                    </a>
                  </Button>
                </div>
              </FadeIn>
            </div>
            <SlideIn direction="right" delay={0.3}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-violet/10 to-primary/10 rounded-2xl blur-xl" />
                <div className="relative aspect-video bg-gradient-to-br from-violet-950 via-slate-900 to-green-950 rounded-xl overflow-hidden border border-border">
                  {/* Visual representation of Brain Centre & NVIDIA */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <Brain className="h-16 w-16 text-violet-400" />
                      <div className="text-4xl font-bold text-white/20">+</div>
                      <Server className="h-16 w-16 text-green-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white text-center mb-2">
                      Sudha Gopalakrishnan Brain Centre
                    </h3>
                    <p className="text-white/60 text-sm text-center mb-4">IIT Madras</p>
                    <div className="flex items-center gap-2 px-4 py-2 bg-green-500/20 rounded-full border border-green-500/30">
                      <Cpu className="h-4 w-4 text-green-400" />
                      <span className="text-green-400 text-sm font-medium">NVIDIA DGX A100 SuperPOD</span>
                    </div>
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute top-4 left-4 w-32 h-32 bg-violet-500/10 rounded-full blur-2xl" />
                  <div className="absolute bottom-4 right-4 w-40 h-40 bg-green-500/10 rounded-full blur-2xl" />
                </div>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Role Details */}
      <section className="section-padding">
        <div className="container-max">
          <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12" staggerDelay={0.1}>
            <StaggerItem>
              <Card className="card-accent-violet h-full">
                <CardHeader>
                  <Calendar className="h-6 w-6 text-violet mb-2" />
                  <CardTitle className="text-lg">Duration</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground font-medium">December 2025 - February 2026</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    3-month intensive LLM research and engineering role with hands-on model development
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="card-accent-primary h-full">
                <CardHeader>
                  <MapPin className="h-6 w-6 text-primary mb-2" />
                  <CardTitle className="text-lg">Location</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground font-medium">IIT Madras Campus</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    NAC-1 Building, IIT Madras, Chennai - 600036 (On-site)
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="card-accent-emerald h-full">
                <CardHeader>
                  <Building className="h-6 w-6 text-emerald mb-2" />
                  <CardTitle className="text-lg">Organization</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground font-medium">Sudha Gopalakrishnan Brain Centre</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    World-class neuroscience research facility with NVIDIA-powered HPC infrastructure
                  </p>
                  <Badge variant="secondary" className="badge-success border mt-3">
                    Completed
                  </Badge>
                </CardContent>
              </Card>
            </StaggerItem>
          </StaggerContainer>

          {/* NVIDIA Partnership Highlight */}
          <FadeIn>
            <Card className="mb-8 bg-gradient-to-r from-green-950/20 to-background border-green-500/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-green-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Server className="h-8 w-8 text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl mb-2 text-green-500">NVIDIA Partnership & Infrastructure</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      The Sudha Gopalakrishnan Brain Centre is supported by NVIDIA, utilizing their cutting-edge 
                      <strong className="text-foreground"> DGX A100 systems</strong> and <strong className="text-foreground">SuperPOD technology</strong> to 
                      process petabytes of brain imaging data at cellular resolution. This high-performance computing 
                      infrastructure enables processing of massive histology datasets, training large-scale deep learning 
                      models, and running complex Vision-Language Model inference for neuroscience research.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </FadeIn>

          {/* Role Overview */}
          <FadeIn>
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="font-heading text-2xl">Role Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  As an LLM Researcher and Engineer at the Brain Centre, I worked on developing AI-powered tools 
                  for neuroscience research. My primary focus was on fine-tuning Vision-Language Models (VLMs) 
                  including OpenCLIP and other multimodal architectures on high-resolution histology data of human 
                  brain tissue. I developed internal tools for automated analysis, created production-ready 
                  inference pipelines, and deployed these systems as Jenkins plugins for seamless integration 
                  into the research team&apos;s existing workflows. This work leveraged NVIDIA&apos;s world-class 
                  HPC infrastructure to process and analyze brain imaging data at unprecedented scale.
                </p>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </section>

      {/* Key Responsibilities */}
      <section className="section-padding bg-muted/30">
        <div className="container-max">
          <FadeIn>
            <h2 className="font-heading text-3xl mb-8">Key Responsibilities</h2>
          </FadeIn>
          <StaggerContainer className="grid md:grid-cols-2 gap-6" staggerDelay={0.1}>
            <StaggerItem>
              <Card className="card-accent-violet h-full hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 rounded-lg bg-violet/10 flex items-center justify-center">
                      <Brain className="h-5 w-5 text-violet" />
                    </div>
                    <CardTitle className="text-lg">Vision-Language Model Development</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Fine-tuned advanced Vision-Language Models including OpenCLIP, BLIP-2, and custom multimodal 
                    architectures on histology imaging data. Developed specialized embeddings for brain tissue 
                    classification, cell-type identification, and anatomical region segmentation using 
                    contrastive learning approaches optimized for microscopy images.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">OpenCLIP</Badge>
                    <Badge variant="secondary">BLIP-2</Badge>
                    <Badge variant="secondary">Vision Transformers</Badge>
                    <Badge variant="secondary">Contrastive Learning</Badge>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="card-accent-primary h-full hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Microscope className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">Histology Data Fine-tuning</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Curated and preprocessed large-scale histology datasets from whole-brain imaging pipelines. 
                    Implemented domain-specific data augmentation strategies for microscopy images, handled 
                    gigapixel whole-slide images using efficient tiling approaches, and developed custom 
                    training pipelines optimized for the DGX A100 multi-GPU environment.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Histology Analysis</Badge>
                    <Badge variant="secondary">Whole-Slide Imaging</Badge>
                    <Badge variant="secondary">Data Augmentation</Badge>
                    <Badge variant="secondary">Multi-GPU Training</Badge>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="card-accent-emerald h-full hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 rounded-lg bg-emerald/10 flex items-center justify-center">
                      <Code className="h-5 w-5 text-emerald" />
                    </div>
                    <CardTitle className="text-lg">Internal AI Tools Development</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Built various internal tools for the research team including automated image quality 
                    assessment systems, intelligent tissue region annotation assistants, and LLM-powered 
                    documentation generators. Created REST APIs for model inference, developed interactive 
                    visualization dashboards, and implemented batch processing pipelines for large-scale analysis.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">FastAPI</Badge>
                    <Badge variant="secondary">REST APIs</Badge>
                    <Badge variant="secondary">Batch Processing</Badge>
                    <Badge variant="secondary">Python</Badge>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="card-accent-amber h-full hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 rounded-lg bg-amber/10 flex items-center justify-center">
                      <GitBranch className="h-5 w-5 text-amber" />
                    </div>
                    <CardTitle className="text-lg">Jenkins Plugin Deployment</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Deployed fine-tuned models as production-ready Jenkins plugins for seamless CI/CD integration. 
                    Containerized inference pipelines using Docker, implemented model versioning and A/B testing 
                    capabilities, and created automated deployment workflows that enabled researchers to run 
                    AI-powered analysis as part of their standard processing pipelines.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Jenkins</Badge>
                    <Badge variant="secondary">Docker</Badge>
                    <Badge variant="secondary">CI/CD</Badge>
                    <Badge variant="secondary">MLOps</Badge>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Technical Environment */}
      <section className="section-padding">
        <div className="container-max">
          <FadeIn>
            <h2 className="font-heading text-3xl mb-8">Technical Environment</h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <FadeIn delay={0.1}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Server className="h-5 w-5 text-green-500" />
                    <span>NVIDIA HPC Infrastructure</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium text-sm mb-1">DGX A100 Systems</h4>
                    <p className="text-sm text-muted-foreground">
                      Multiple NVIDIA DGX A100 nodes with 8x A100 80GB GPUs each, NVLink interconnect, 
                      and 2TB system memory for training large-scale vision-language models.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm mb-1">SuperPOD Technology</h4>
                    <p className="text-sm text-muted-foreground">
                      NVIDIA SuperPOD architecture enabling petaflop-scale computing for processing 
                      massive brain imaging datasets and running distributed training workloads.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm mb-1">Storage Infrastructure</h4>
                    <p className="text-sm text-muted-foreground">
                      High-performance parallel file systems with petabyte-scale storage for whole-brain 
                      imaging data at cellular resolution.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={0.2}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Layers className="h-5 w-5 text-violet" />
                    <span>AI/ML Software Stack</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium text-sm mb-1">Deep Learning Frameworks</h4>
                    <p className="text-sm text-muted-foreground">
                      PyTorch with DeepSpeed and FSDP for distributed training, Hugging Face Transformers, 
                      and OpenCLIP for vision-language model development.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm mb-1">Model Optimization</h4>
                    <p className="text-sm text-muted-foreground">
                      NVIDIA TensorRT for inference optimization, Triton Inference Server for production 
                      deployment, and mixed-precision training with AMP.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm mb-1">MLOps & Deployment</h4>
                    <p className="text-sm text-muted-foreground">
                      Jenkins for CI/CD pipelines, Docker and Kubernetes for containerized deployments, 
                      MLflow for experiment tracking and model registry.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          </div>

          <FadeIn delay={0.3}>
            <div className="mb-8">
              <h3 className="font-heading text-xl mb-4">Technology Stack</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Python",
                  "PyTorch",
                  "OpenCLIP",
                  "BLIP-2",
                  "Vision Transformers",
                  "Hugging Face",
                  "NVIDIA DGX A100",
                  "TensorRT",
                  "Triton Server",
                  "DeepSpeed",
                  "FSDP",
                  "Jenkins",
                  "Docker",
                  "Kubernetes",
                  "FastAPI",
                  "MLflow",
                  "CUDA",
                  "Mixed Precision",
                  "Histology Analysis",
                  "Contrastive Learning",
                ].map((tech) => (
                  <Badge key={tech} variant="outline" className="hover:bg-muted transition-colors">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="section-padding bg-muted/30">
        <div className="container-max">
          <FadeIn>
            <h2 className="font-heading text-3xl mb-8">Key Achievements</h2>
          </FadeIn>
          <StaggerContainer className="grid md:grid-cols-2 gap-6 mb-12" staggerDelay={0.1}>
            {[
              {
                title: "VLM Fine-tuning Pipeline",
                description: "Successfully developed and deployed a complete fine-tuning pipeline for Vision-Language Models on histology data, achieving significant improvements in tissue classification accuracy over baseline models.",
                icon: Brain,
                color: "violet",
              },
              {
                title: "Production Jenkins Integration",
                description: "Deployed AI inference capabilities as production-ready Jenkins plugins, enabling seamless integration into the research team's existing imaging pipeline workflow.",
                icon: Rocket,
                color: "emerald",
              },
              {
                title: "Multi-GPU Distributed Training",
                description: "Implemented efficient distributed training strategies using DeepSpeed and FSDP, enabling training of large VLM models across multiple A100 GPUs with near-linear scaling.",
                icon: Server,
                color: "primary",
              },
              {
                title: "Internal Tools Suite",
                description: "Built a comprehensive suite of internal AI tools for automated image quality assessment, tissue annotation assistance, and batch processing of whole-slide images.",
                icon: Code,
                color: "amber",
              },
            ].map((achievement) => (
              <StaggerItem key={achievement.title}>
                <Card className={`card-accent-${achievement.color} h-full hover:shadow-md transition-shadow`}>
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-2">
                      <div className={`w-10 h-10 rounded-lg bg-${achievement.color}/10 flex items-center justify-center`}>
                        <achievement.icon className={`h-5 w-5 text-${achievement.color}`} />
                      </div>
                      <CardTitle className="text-lg">{achievement.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{achievement.description}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* About the Brain Centre */}
      <section className="section-padding">
        <div className="container-max">
          <FadeIn>
            <h2 className="font-heading text-3xl mb-8">About the Brain Centre</h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <Card className="bg-gradient-to-br from-violet/5 to-background card-accent-violet">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="font-heading text-2xl mb-4">Sudha Gopalakrishnan Brain Centre</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      The Sudha Gopalakrishnan Brain Centre at IIT Madras operates a world-class high-throughput 
                      multimodal whole-brain histology-imaging-compute pipeline to digitize and study human brains 
                      at unprecedented high-resolution and scale.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      The centre leverages expertise across IIT Madras, national, and international collaborations, 
                      aiming to become a globally leading R&D centre for human brain research with transformative 
                      impact in neuroscience and neurotechnologies.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Their flagship project, <strong className="text-foreground">DHARANI</strong> (Developing Human-brain 
                      Atlas Resource to Advance Neuroscience Internationally), creates a comprehensive 3D atlas of the 
                      human brain at cellular resolution.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <Card className="bg-background">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                          <Database className="h-8 w-8 text-violet" />
                          <div>
                            <p className="font-medium">Petabyte-Scale Data</p>
                            <p className="text-sm text-muted-foreground">Whole-brain imaging at cellular resolution</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="bg-background">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                          <Server className="h-8 w-8 text-green-500" />
                          <div>
                            <p className="font-medium">NVIDIA-Powered</p>
                            <p className="text-sm text-muted-foreground">DGX A100 & SuperPOD infrastructure</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="bg-background">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                          <Microscope className="h-8 w-8 text-primary" />
                          <div>
                            <p className="font-medium">Multi-Modal Imaging</p>
                            <p className="text-sm text-muted-foreground">High-throughput histology pipeline</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <Button asChild>
                <a href="https://iitm.humanbrain.in/" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Visit Brain Centre Website
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://brainportal.humanbrain.in/" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Explore DHARANI Brain Atlas
                </a>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Documents & Resources */}
      <section className="section-padding bg-muted/30">
        <div className="container-max">
          <FadeIn>
            <h2 className="font-heading text-3xl mb-8">Documents & Resources</h2>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6" staggerDelay={0.1}>
            <StaggerItem>
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="font-heading text-lg flex items-center gap-2">
                    <FileText className="h-5 w-5 text-violet" />
                    Internship Certificate
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 text-sm">
                    Official completion certificate from the Sudha Gopalakrishnan Brain Centre, IIT Madras, acknowledging LLM research and engineering contributions
                  </p>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => {
                      const link = document.createElement("a")
                      link.href = "/CERTIFICATIONS/Intern Certifications/SGBC/SGBC_certificate.pdf"
                      link.download = "SGBC Internship Certificate.pdf"
                      link.click()
                    }}
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download Certificate
                  </Button>
                </CardContent>
              </Card>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      <Footer />
    </div>
  )
}
