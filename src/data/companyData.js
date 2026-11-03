export const COMPANY_INFO = {
  name: "Jafasa Tech Solutions",
  tagline: "Technology That Builds Your Future.",
  shortDescription: "From professional technology training to powerful digital solutions, Jafasa Tech Solutions helps individuals, businesses and institutions grow through innovation.",
  phone: "0323 584 8356",
  whatsappNumber: "923235848356",
  whatsappUrl: "https://wa.me/923235848356",
  email: "info@jafasatech.com",
  admissionsEmail: "admissions@jafasatech.com",
  corporateEmail: "solutions@jafasatech.com",
  region: "Khyber Pakhtunkhwa (KPK), Pakistan",
  citiesCovered: ["Peshawar", "Mardan", "Swat", "Abbottabad", "Kohat", "D.I. Khan", "Nowshera", "Haripur", "All KPK Campuses"],
  positioning: [
    "Technology Training",
    "Web Development",
    "AI Solutions",
    "Digital Skills",
    "Digital Marketing"
  ],
  pricingSummary: "Courses starting from PKR 10,000/month",
  hours: "Monday – Saturday: 9:00 AM – 7:00 PM (PKT)",
  socials: {
    linkedin: "https://linkedin.com/company/jafasa-tech-solutions",
    facebook: "https://facebook.com/jafasatechsolutions",
    instagram: "https://instagram.com/jafasatech",
    github: "https://github.com/jafasa-tech-connect"
  }
};

/**
 * Generate a direct WhatsApp link with an encoded prefilled message
 */
export function getWhatsAppUrl(type, details = {}) {
  const base = `https://wa.me/${COMPANY_INFO.whatsappNumber}`;
  let text = "";

  switch (type) {
    case 'demo':
      text = `Hello Jafasa Tech Solutions! I would like to book a FREE Demo Class.\n\n👤 Name: ${details.name || 'Interested Student'}\n📱 WhatsApp: ${details.phone || ''}\n📚 Course: ${details.course || 'Technology Course'}\n🎓 Preferred Mode: ${details.mode || 'Online / Physical'}\n💬 Message: ${details.message || 'Please share demo class schedule.'}`;
      break;

    case 'workshop':
      text = `Greetings Jafasa Tech Solutions! We would like to invite Jafasa to our campus for a FREE Technology Session.\n\n🏫 Institution: ${details.institutionName || ''}\n🏛️ Type: ${details.institutionType || 'College/University'}\n👤 Contact Person: ${details.contactPerson || ''}\n📱 WhatsApp: ${details.phone || ''}\n📍 City: ${details.city || 'KPK'}\n💡 Topic: ${details.topic || 'AI & Emerging Tech'}\n👥 Expected Participants: ${details.participants || ''}\n📝 Details: ${details.requirements || 'Please coordinate dates with us.'}`;
      break;

    case 'service':
      text = `Hello Jafasa Tech Solutions! I am interested in your software/digital services.\n\n💼 Service: ${details.serviceName || 'Custom Technology Solution'}\n👤 Name: ${details.name || 'Client'}\n🏢 Business/Org: ${details.company || 'Private'}\n💬 Requirements: ${details.details || 'I would like to discuss a project and get an initial quote.'}`;
      break;

    case 'seo_audit':
      text = `Hello Jafasa Tech Solutions! I want to request a Professional SEO Audit for my website.\n\n🌐 Website URL: ${details.websiteUrl || ''}\n👤 Name: ${details.name || ''}\n📱 Phone: ${details.phone || ''}\n🎯 Target Market / Goals: ${details.goals || 'Improve search presence'}`;
      break;

    case 'fyp':
      text = `Hello Jafasa Team! I am an undergraduate student looking for Final Year Project (FYP) / Project Solutions guidance.\n\n👤 Student Name: ${details.name || ''}\n🎓 Degree & Uni: ${details.university || ''}\n💻 Preferred Domain: ${details.domain || 'AI / Web / Mobile'}\n💬 Project Idea: ${details.idea || 'Need guidance from planning to execution.'}`;
      break;

    default:
      text = `Hello Jafasa Tech Solutions! I visited your website and would like to get in touch regarding your technology training and digital solutions.`;
  }

  return `${base}?text=${encodeURIComponent(text.trim())}`;
}
