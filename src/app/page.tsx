"use client"

import Link from "next/link"
import Image from "next/image"
import { Phone, Clock, Shield, MapPin, Mail, Menu, X } from "lucide-react"
import { Button } from "./components/ui/button"
import { useState } from "react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <CtaBanner />
        <AboutSection />
      </main>
      <Footer />
    </div>
  )
}

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="font-bold text-xl md:text-2xl">Edison Roofing Co.</div>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="#services" className="text-sm font-medium transition-colors hover:text-primary">
            Services
          </Link>
          <Link href="#about" className="text-sm font-medium transition-colors hover:text-primary">
            About
          </Link>
          <Link href="#contact" className="text-sm font-medium transition-colors hover:text-primary">
            Contact
          </Link>
          <Link href="#testimonials" className="text-sm font-medium transition-colors hover:text-primary">
            Testimonials
          </Link>
        </nav>
        <div className="hidden md:flex">
          <Link
            href="tel:5551234567"
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
          >
            <Phone className="mr-2 h-4 w-4" />
            (555) 123-4567
          </Link>
        </div>
        <MobileNav />
      </div>
    </header>
  )
}

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      <Button onClick={() => setIsOpen(true)} aria-label="Open Menu">
        <Menu className="h-6 w-6" />
      </Button>
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm">
          <div className="fixed right-0 top-0 h-full w-3/4 bg-background p-6 shadow-lg">
            <div className="flex justify-end">
              <Button onClick={() => setIsOpen(false)} aria-label="Close Menu">
                <X className="h-6 w-6" />
              </Button>
            </div>
            <nav className="mt-8 flex flex-col gap-6">
              <Link href="#services" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                Services
              </Link>
              <Link href="#about" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                About
              </Link>
              <Link href="#contact" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
              <Link href="#testimonials" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                Testimonials
              </Link>
              <Link
                href="tel:5551234567"
                className="mt-4 flex items-center justify-center rounded-md bg-primary px-4 py-3 text-lg font-medium text-primary-foreground"
                onClick={() => setIsOpen(false)}
              >
                <Phone className="mr-2 h-5 w-5" />
                (555) 123-4567
              </Link>
            </nav>
          </div>
        </div>
      )}
    </div>
  )
}

function HeroSection() {
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-black/60 z-10" />
      <div className="relative h-[500px] md:h-[600px]">
        <Image
          src="/placeholder.svg?height=600&width=1200"
          alt="Roofing services"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <div className="container px-4 md:px-6 text-center">
          <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Quality Roofing Services in Edison, NJ
          </h1>
          <p className="mx-auto mt-4 max-w-[700px] text-lg text-white/90 md:text-xl">
            Protecting your home with quality craftsmanship and exceptional service
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="tel:5551234567"
              className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-6 py-3 text-lg font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now: (555) 123-4567
            </Link>
            <Link
              href="#contact"
              className="inline-flex h-12 items-center justify-center rounded-md border border-white bg-transparent px-6 py-3 text-lg font-medium text-white shadow-sm transition-colors hover:bg-white/10"
            >
              Free Estimate
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

function ServicesSection() {
  const services = [
    {
      title: "Residential Roofing",
      description:
        "Complete roofing solutions for homes of all sizes, including installation, replacement, and maintenance.",
      icon: "/placeholder.svg?height=100&width=100",
    },
    {
      title: "Commercial Roofing",
      description: "Specialized roofing services for businesses, warehouses, and commercial properties.",
      icon: "/placeholder.svg?height=100&width=100",
    },
    {
      title: "Roof Repair",
      description: "Fast, reliable repairs for leaks, storm damage, and general wear and tear.",
      icon: "/placeholder.svg?height=100&width=100",
    },
    {
      title: "Gutter Installation",
      description: "Professional gutter installation and maintenance to protect your property from water damage.",
      icon: "/placeholder.svg?height=100&width=100",
    },
    {
      title: "Emergency Storm Damage Repair",
      description: "24/7 emergency services for when disaster strikes, helping you secure your property quickly.",
      icon: "/placeholder.svg?height=100&width=100",
    },
  ]

  return (
    <section id="services" className="py-12 md:py-24 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Highlighted Services</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              We offer a comprehensive range of roofing services to meet all your needs
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-4 rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md"
            >
              <div className="rounded-full bg-muted p-2">
                <Image
                  src={service.icon || "/placeholder.svg"}
                  alt={service.title}
                  width={60}
                  height={60}
                  className="h-12 w-12 rounded-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">{service.title}</h3>
              <p className="text-center text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <Link
            href="tel:5551234567"
            className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-6 py-3 text-lg font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
          >
            <Phone className="mr-2 h-5 w-5" />
            Call Now for a Free Consultation
          </Link>
        </div>
      </div>
    </section>
  )
}

function CtaBanner() {
  const benefits = [
    { text: "Free Estimates", icon: <Clock className="h-5 w-5" /> },
    { text: "Licensed & Insured", icon: <Shield className="h-5 w-5" /> },
    { text: "Locally Owned", icon: <MapPin className="h-5 w-5" /> },
    { text: "24/7 Emergency Services", icon: <Phone className="h-5 w-5" /> },
  ]

  return (
    <section className="bg-secondary text-secondary-foreground py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">Why Choose Edison Roofing Co.</h2>
          <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
            {benefits.map((benefit, index) => (
              <li
                key={index}
                className="flex flex-col items-center space-y-2 rounded-lg bg-secondary-foreground/10 p-4"
              >
                <div className="rounded-full bg-secondary-foreground/20 p-2">{benefit.icon}</div>
                <span className="font-medium">{benefit.text}</span>
              </li>
            ))}
          </ul>
          <Link
            href="tel:5551234567"
            className="mt-8 inline-flex h-12 items-center justify-center rounded-md bg-primary px-6 py-3 text-lg font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
          >
            <Phone className="mr-2 h-5 w-5" />
            Call (555) 123-4567
          </Link>
        </div>
      </div>
    </section>
  )
}

function AboutSection() {
  return (
    <section id="about" className="py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <Image
              src="/placeholder.svg?height=600&width=600"
              alt="Edison Roofing Team"
              width={600}
              height={600}
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Edison Roofing Co.</h2>
            <p className="text-muted-foreground md:text-xl">
              For over 20 years, Edison Roofing Co. has been providing top-quality roofing services to homeowners and
              businesses throughout Edison and surrounding areas in New Jersey.
            </p>
            <p className="text-muted-foreground md:text-xl">
              As a locally owned and operated company, we take pride in our community and are committed to delivering
              exceptional craftsmanship and customer service to our neighbors.
            </p>
            <p className="text-muted-foreground md:text-xl">
              Our team of experienced professionals is dedicated to using only the highest quality materials and the
              latest techniques to ensure your roof is built to last. We stand behind our work with comprehensive
              warranties and a commitment to your complete satisfaction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="tel:5551234567"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
              >
                <Phone className="mr-2 h-4 w-4" />
                Call Us Today
              </Link>
              <Link
                href="#contact"
                className="inline-flex h-10 items-center justify-center rounded-md bg-accent px-6 py-2 text-sm font-medium text-accent-foreground shadow-sm transition-colors hover:bg-accent/90"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer id="contact" className="bg-secondary text-secondary-foreground py-12 border-t">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <Link href="/" className="flex items-center space-x-2">
              <div className="font-bold text-xl">Edison Roofing Co.</div>
            </Link>
            <p className="mt-4 text-sm text-secondary-foreground/80 max-w-xs">
              Providing quality roofing services to Edison and surrounding areas in New Jersey since 2003.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Contact Information</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start">
                  <MapPin className="mr-2 h-5 w-5 shrink-0" />
                  <span>123 Main Street, Edison, NJ 08817</span>
                </li>
                <li>
                  <Link href="tel:5551234567" className="flex items-center hover:underline">
                    <Phone className="mr-2 h-5 w-5" />
                    (555) 123-4567
                  </Link>
                </li>
                <li>
                  <Link href="mailto:info@edisonroofing.com" className="flex items-center hover:underline">
                    <Mail className="mr-2 h-5 w-5" />
                    info@edisonroofing.com
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Hours of Operation</h3>
              <ul className="space-y-3 text-sm">
                <li>Monday - Friday: 8:00 AM - 6:00 PM</li>
                <li>Saturday: 9:00 AM - 3:00 PM</li>
                <li>Sunday: Closed</li>
                <li className="font-medium">24/7 Emergency Services Available</li>
              </ul>
          
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-secondary-foreground/20 pt-8 text-center text-sm text-secondary-foreground/80">
          <p>&copy; {new Date().getFullYear()} Edison Roofing Co. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
