const baseUrl = import.meta.env.BASE_URL || '/';

export const FOUNDERS_DATA = {
  sectionTitle: "Leadership & Vision",
  sectionSubtitle: "Driven by Innovation, Dedicated to Practical Empowerment",
  brandMessage: "At Jafasa Tech Solutions, our leadership bridges industry engineering with accessible, high-impact education. We believe that true digital transformation happens when modern engineering capabilities meet passionate talent across Pakistan.",
  founders: [
    {
      id: "hamza-khan",
      name: "Hamza Khan",
      designation: "Founder",
      image: `${baseUrl}assets/hamza-khan.jpg`,
      fallbackImage: `${baseUrl}assets/founders/male-founder.jpeg`,
      altText: "Hamza Khan — Founder of Jafasa Tech Solutions",
      bio: "Spearheading corporate strategy, technical innovation, and client partnerships at Jafasa Tech Solutions. Focused on establishing high-growth technological pathways for students, software engineering teams, and institutional partners across Pakistan.",
      focusAreas: [
        "Strategic Leadership & Growth",
        "Digital Solutions Architecture",
        "Institutional Partnerships",
        "Innovation & Technology Mentorship"
      ],
      socials: {
        whatsapp: "https://wa.me/923235848356"
      }
    },
    {
      id: "syeda-gul-andam",
      name: "Syeda Gul Andam Ali Kazmi",
      designation: "Technical Co-Founder & Lead Trainer",
      image: `${baseUrl}assets/syeda-gul-andam.jpg`,
      fallbackImage: `${baseUrl}assets/founders/syeda-gul-andam.jpeg`,
      altText: "Syeda Gul Andam Ali Kazmi — Technical Co-Founder & Lead Trainer at Jafasa Tech Solutions",
      bio: "Technical co-founder, software developer, and lead trainer passionate about building next-generation digital talent. Directs technical curriculums, modern full-stack development bootcamps, AI tool integrations, and campus workshops across Khyber Pakhtunkhwa.",
      focusAreas: [
        "Full-Stack Web & Software Engineering",
        "Technical Curriculum & Pedagogical Design",
        "AI Solutions & Applied Tools",
        "Women in Tech & Student Empowerment"
      ],
      socials: {
        whatsapp: "https://wa.me/923235848356"
      }
    }
  ]
};
