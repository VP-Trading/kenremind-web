import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BellRing,
  CalendarCheck,
  CalendarDays,
  CalendarSync,
  CheckCircle2,
  CloudOff,
  Languages,
  Repeat2,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "~/components/ui/accordion";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";

const featureCards = [
  {
    title: "Ethiopian calendar scheduling",
    description:
      "Plan reminders by Ethiopian day, month, or year with rules built for how you already track time.",
    icon: CalendarDays,
    tone: "bg-[#DDE9D8] text-[#1F4B36]",
  },
  {
    title: "Flexible repeat rules",
    description:
      "Choose one-time, monthly, yearly, or every X days. KenRemind handles the next occurrence for you.",
    icon: Repeat2,
    tone: "bg-[#F5EBD2] text-[#1F4B36]",
  },
  {
    title: "On-device notifications",
    description:
      "Stay ahead with local notifications that fire even when you are offline or away from the app.",
    icon: BellRing,
    tone: "bg-[#DCE8F6] text-[#1F4B36]",
  },
  {
    title: "Private by design",
    description:
      "Your reminders stay on your phone with device-level encryption and zero cloud dependency.",
    icon: ShieldCheck,
    tone: "bg-[#F4E0E4] text-[#1F4B36]",
  },
  {
    title: "Calendar sync ready",
    description:
      "Sync reminders to your device calendar so they show up alongside everything else you plan.",
    icon: CalendarCheck,
    tone: "bg-[#DDE9D8] text-[#1F4B36]",
  },
  {
    title: "English + Amharic",
    description:
      "Switch between languages to plan with confidence in the wording you prefer.",
    icon: Languages,
    tone: "bg-[#DCE8F6] text-[#1F4B36]",
  },
];

const reminderRules = [
  {
    title: "One-time dates",
    description: "Perfect for events, paydays, and special moments.",
    color: "bg-[#F5EBD2]",
    icon: CalendarCheck,
  },
  {
    title: "Monthly Ethiopian",
    description: "For recurring bills and obligations tied to Ethiopian months.",
    color: "bg-[#DDE9D8]",
    icon: CalendarDays,
  },
  {
    title: "Yearly Ethiopian",
    description: "Birthdays, holidays, and annual celebrations without guesswork.",
    color: "bg-[#F4E0E4]",
    icon: CalendarCheck,
  },
  {
    title: "Every X days",
    description: "Custom intervals for meds, rituals, or spaced tasks.",
    color: "bg-[#DCE8F6]",
    icon: Repeat2,
  },
];

const steps = [
  {
    title: "Pick an Ethiopian date",
    description: "Select a day from the Ethiopian calendar and set a time.",
  },
  {
    title: "Choose the repeat rule",
    description: "One-time, monthly, yearly, or custom spacing.",
  },
  {
    title: "Get reliable reminders",
    description: "KenRemind notifies you and keeps everything in sync.",
  },
];

const faqs = [
  {
    question: "Does KenRemind store my reminder data in the cloud?",
    answer:
      "No. Reminder content stays on your device and is never uploaded to KenRemind servers.",
  },
  {
    question: "Can I use both Gregorian and Ethiopian dates?",
    answer:
      "KenRemind is optimized for Ethiopian dates, with tools that keep you aligned with the local calendar.",
  },
  {
    question: "What happens if I change my phone?",
    answer:
      "Because data is on-device, you can export or re-create reminders as needed on your new phone.",
  },
  {
    question: "Is it available in Amharic?",
    answer: "Yes. You can switch between English and Amharic anytime.",
  },
];

const logoMask =
  "bg-primary [mask-image:url('/brand/appointment-01.webp')] [mask-size:contain] [mask-repeat:no-repeat] [mask-position:center] [-webkit-mask-image:url('/brand/appointment-01.webp')] [-webkit-mask-size:contain] [-webkit-mask-repeat:no-repeat] [-webkit-mask-position:center]";

export default function Home() {
  return (
    <main
      id="top"
      className="relative overflow-hidden bg-background pt-[var(--header-offset)]"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-24 h-72 w-72 animate-[drift_14s_ease-in-out_infinite] rounded-full bg-[#B7C8A4]/40 blur-3xl" />
        <div className="absolute right-0 top-0 h-96 w-96 animate-[drift_18s_ease-in-out_infinite] rounded-full bg-[#DCE8F6]/50 blur-[120px]" />
        <div className="absolute bottom-[-120px] left-1/2 h-96 w-96 -translate-x-1/2 animate-[drift_16s_ease-in-out_infinite] rounded-full bg-[#F4E0E4]/40 blur-[140px]" />
      </div>

      <header className="fixed inset-x-0 top-0 z-30 border-b border-border/60 bg-background/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <Link href="#top" className="flex items-center gap-3">
            <span
              aria-hidden
              className={`block h-9 w-9 ${logoMask}`}
            />
            <span className="text-lg font-semibold tracking-tight">KenRemind</span>
          </Link>
          <nav className="hidden items-center gap-6 text-sm font-semibold text-muted-foreground md:flex">
            <Link className="transition hover:text-foreground" href="#features">
              Features
            </Link>
            <Link className="transition hover:text-foreground" href="#rules">
              Rules
            </Link>
            <Link className="transition hover:text-foreground" href="#privacy">
              Privacy
            </Link>
            <Link className="transition hover:text-foreground" href="#faq">
              FAQ
            </Link>
          </nav>
          <Button asChild size="sm" className="hidden md:inline-flex">
            <Link href="#cta">Get the app</Link>
          </Button>
        </div>
      </header>

      <section className="relative z-10 scroll-mt-[var(--header-offset)] pb-20 pt-16">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8">
            <Badge
              variant="accent"
              className="w-fit animate-[fade-in_0.8s_ease-out] [animation-fill-mode:both]"
            >
              Built for Ethiopian dates
            </Badge>
            <div className="space-y-6">
              <h1 className="text-4xl font-semibold leading-tight text-foreground sm:text-5xl lg:text-6xl animate-[fade-up_0.9s_ease-out] [animation-fill-mode:both]">
                Never miss a moment on the Ethiopian calendar.
              </h1>
              <p className="max-w-xl text-lg text-muted-foreground animate-[fade-up_0.9s_ease-out] [animation-delay:0.1s] [animation-fill-mode:both]">
                KenRemind is a calm, focused reminder app made for Ethiopian timekeeping.
                Plan one-time or recurring reminders, sync with your device calendar, and keep everything
                private on your phone.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4 animate-[fade-up_0.9s_ease-out] [animation-delay:0.2s] [animation-fill-mode:both]">
              <Button asChild size="lg">
                <Link href="#cta" className="flex items-center gap-2">
                  Get the app <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="#how">How it works</Link>
              </Button>
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground animate-[fade-up_0.9s_ease-out] [animation-delay:0.3s] [animation-fill-mode:both]">
              <div className="flex items-center gap-2">
                <CloudOff className="h-4 w-4" />
                100% on-device
              </div>
              <div className="flex items-center gap-2">
                <Languages className="h-4 w-4" />
                English + Amharic
              </div>
              <div className="flex items-center gap-2">
                <CalendarSync className="h-4 w-4" />
                Calendar sync
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-8 -top-10 h-28 w-28 animate-[float_6s_ease-in-out_infinite] rounded-full bg-[#B7C8A4]/60 blur-2xl" />
            <div className="absolute -bottom-12 right-6 h-36 w-36 animate-[float_7s_ease-in-out_infinite] rounded-full bg-[#F5EBD2]/70 blur-3xl" />

            <div className="relative mx-auto w-full max-w-md">
              <div className="rounded-[36px] border border-white/70 bg-white/70 p-4 shadow-[0_30px_80px_-40px_rgba(31,75,54,0.45)] backdrop-blur animate-[fade-scale_0.9s_ease-out] [animation-delay:0.15s] [animation-fill-mode:both]">
                <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-white via-[#F9FBF6] to-[#DDE9D8] p-5">
                  <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(183,200,164,0.22),rgba(220,232,246,0.18),rgba(244,224,228,0.2))] bg-[length:200%_200%] opacity-70 blur-2xl animate-[gradient-pan_12s_ease-in-out_infinite]" />
                  <Image
                    src="/brand/splash_bg_logo.png"
                    alt="KenRemind preview"
                    width={640}
                    height={800}
                    className="absolute inset-0 h-full w-full object-cover opacity-30"
                  />
                  <div className="relative space-y-5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white shadow-sm animate-[pulse-glow_3.5s_ease-in-out_infinite]">
                          <span aria-hidden className={`block h-6 w-6 ${logoMask}`} />
                        </div>
                        <div>
                          <p className="text-xs uppercase tracking-wide text-muted-foreground">
                            Today
                          </p>
                          <p className="text-base font-semibold">Yekatit 3</p>
                        </div>
                      </div>
                      <Badge variant="muted">09:15</Badge>
                    </div>

                    <div className="space-y-3">
                      {[
                        {
                          title: "Rent due",
                          meta: "Monthly · 5:00 PM",
                        },
                        {
                          title: "Family check-in",
                          meta: "Every 7 days · 7:30 AM",
                        },
                        {
                          title: "Clinic reminder",
                          meta: "One-time · 3:00 PM",
                        },
                      ].map((reminder, index) => (
                        <div
                          key={reminder.title}
                          className="rounded-2xl bg-white/80 p-4 shadow-sm animate-[fade-up_0.7s_ease-out] [animation-fill-mode:both]"
                          style={{ animationDelay: `${0.2 + index * 0.08}s` }}
                        >
                          <p className="text-sm font-semibold">{reminder.title}</p>
                          <p className="text-xs text-muted-foreground">{reminder.meta}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <Card className="absolute -left-12 bottom-10 hidden w-44 animate-[fade-up_0.8s_ease-out] border-white/70 bg-white/80 shadow-lg backdrop-blur lg:block">
                <CardContent className="space-y-2 p-4">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">This week</p>
                  <p className="text-lg font-semibold">6 reminders</p>
                  <p className="text-xs text-muted-foreground">
                    All scheduled on Ethiopian dates.
                  </p>
                </CardContent>
              </Card>

              <Card className="absolute -right-10 top-12 hidden w-40 animate-[fade-up_0.8s_ease-out] border-white/70 bg-white/80 shadow-lg backdrop-blur lg:block">
                <CardContent className="space-y-2 p-4">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">Secure</p>
                  <p className="text-lg font-semibold">Encrypted</p>
                  <p className="text-xs text-muted-foreground">
                    Stored locally on-device.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="relative z-10 scroll-mt-[var(--header-offset)] py-20">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Badge variant="muted" className="w-fit">
                Features
              </Badge>
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
                Everything you need to stay aligned.
              </h2>
            </div>
            <p className="max-w-lg text-base text-muted-foreground">
              KenRemind mirrors the Ethiopian calendar rhythm with clean views, reliable reminders, and
              fast edits.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {featureCards.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={feature.title}
                  className="border-border/70 bg-white/70 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_-30px_rgba(31,75,54,0.55)]"
                >
                  <CardHeader className="flex flex-row items-start gap-4">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl ${feature.tone}`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="space-y-2">
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                      <CardDescription className="text-sm text-muted-foreground">
                        {feature.description}
                      </CardDescription>
                    </div>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section id="rules" className="relative z-10 scroll-mt-[var(--header-offset)] py-20">
        <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <Badge variant="muted" className="w-fit">
              Reminder Rules
            </Badge>
            <h2 className="text-3xl font-semibold sm:text-4xl">
              Built-in repeat patterns for every kind of reminder.
            </h2>
            <p className="text-base text-muted-foreground">
              Set the cadence once and KenRemind calculates the next occurrence so you do not have to.
            </p>
            <div className="space-y-3 text-sm text-muted-foreground">
              {[
                "Upcoming reminders dashboard",
                "Weekly view grouped by Ethiopian date",
                "Quick add for new reminders",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            {reminderRules.map((rule) => {
              const Icon = rule.icon;
              return (
              <Card
                key={rule.title}
                className="border-border/70 bg-white/70 transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_-32px_rgba(31,75,54,0.5)]"
              >
                <CardContent className="flex items-start gap-4 p-5">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl ${rule.color} text-primary`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{rule.title}</h3>
                    <p className="text-sm text-muted-foreground">{rule.description}</p>
                  </div>
                </CardContent>
              </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section id="how" className="relative z-10 scroll-mt-[var(--header-offset)] py-20">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Badge variant="muted" className="w-fit">
                How it works
              </Badge>
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
                Three steps to calm, reliable reminders.
              </h2>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Sparkles className="h-4 w-4" />
              Designed for focus
            </div>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {steps.map((step, index) => (
              <Card
                key={step.title}
                className="border-border/70 bg-white/70 transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_-32px_rgba(31,75,54,0.5)]"
              >
                <CardHeader className="space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#DDE9D8] text-lg font-semibold text-primary">
                    0{index + 1}
                  </div>
                  <div className="space-y-2">
                    <CardTitle>{step.title}</CardTitle>
                    <CardDescription>{step.description}</CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="privacy" className="relative z-10 scroll-mt-[var(--header-offset)] py-20">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <Badge variant="muted" className="w-fit">
              Privacy
            </Badge>
            <h2 className="text-3xl font-semibold sm:text-4xl">
              Your reminders stay with you.
            </h2>
            <p className="text-base text-muted-foreground">
              KenRemind stores everything on your phone. Reminder data is encrypted and never synced
              to external servers.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  label: "No cloud accounts",
                  icon: CloudOff,
                },
                {
                  label: "Encrypted on-device",
                  icon: ShieldCheck,
                },
                {
                  label: "Offline friendly",
                  icon: BellRing,
                },
                {
                  label: "Sync to calendar",
                  icon: CalendarCheck,
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#DDE9D8] text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-sm font-semibold">{item.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <Card className="border-border/70 bg-white/70">
            <CardHeader className="space-y-4">
              <CardTitle className="text-2xl">Designed for clarity</CardTitle>
              <CardDescription>
                Calm colors, clean typography, and layouts inspired by the KenRemind mobile app.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {["Soft, low-distraction palette", "Bold Ethiopian date focus", "Fast reminder editing"].map(
                (item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    {item}
                  </div>
                ),
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="faq" className="relative z-10 scroll-mt-[var(--header-offset)] py-20">
        <div className="mx-auto w-full max-w-4xl px-6">
          <div className="space-y-4 text-center">
            <Badge variant="muted" className="mx-auto w-fit">
              FAQ
            </Badge>
            <h2 className="text-3xl font-semibold sm:text-4xl">Questions, answered.</h2>
            <p className="text-base text-muted-foreground">
              Everything you need to know before you download.
            </p>
          </div>
          <Accordion type="single" collapsible className="mt-10 space-y-4">
            {faqs.map((faq) => (
              <AccordionItem key={faq.question} value={faq.question}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="cta" className="relative z-10 scroll-mt-[var(--header-offset)] pb-24">
        <div className="mx-auto w-full max-w-6xl px-6">
          <Card className="border-border/70 bg-gradient-to-br from-white via-[#F9FBF6] to-[#DDE9D8]">
            <CardContent className="grid gap-10 p-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="space-y-6">
                <Badge variant="accent" className="w-fit">
                  Ready when you are
                </Badge>
                <h2 className="text-3xl font-semibold sm:text-4xl">
                  Download KenRemind and plan with confidence.
                </h2>
                <p className="text-base text-muted-foreground">
                  Available for iOS and Android. Stay on track with reminders made for Ethiopian dates
                  and built for privacy.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg">Get the app</Button>
                  <Button asChild variant="outline" size="lg">
                    <a href="mailto:kenremind@vptrading.et">Contact support</a>
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">
                  For privacy concerns, contact kenremind@vptrading.et.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <div className="flex items-center gap-4 rounded-3xl border border-white/80 bg-white/80 p-6 shadow-lg">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1F4B36] text-white">
                    <BellRing className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-wide text-muted-foreground">
                      Next reminder
                    </p>
                    <p className="text-lg font-semibold">Upcoming · 12:30 PM</p>
                    <p className="text-xs text-muted-foreground">Monthly Ethiopian date</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="relative z-10 border-t border-border/60 py-10">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-6 px-6 text-center md:flex-row md:text-left">
          <div className="flex items-center gap-3">
            <span
              aria-hidden
              className={`block h-7 w-7 ${logoMask}`}
            />
            <span className="text-sm font-semibold">KenRemind</span>
          </div>
          <div className="space-y-2 text-xs text-muted-foreground">
            <p>
              KenRemind keeps your reminders on your device. We do not upload reminder content to our
              servers.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
              <Link className="transition hover:text-foreground" href="/privacy">
                Privacy Policy
              </Link>
              <Link className="transition hover:text-foreground" href="/terms">
                Terms & Conditions
              </Link>
            </div>
          </div>
          <p className="text-xs text-muted-foreground">KenRemind · Built for Ethiopian dates</p>
        </div>
      </footer>
    </main>
  );
}
