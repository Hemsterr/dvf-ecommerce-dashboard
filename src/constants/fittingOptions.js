export const fittingOptions = [
  {
    title: 'How our Self Service Fitting works',
    description: "I would like to fit myself using Hemster's Fitting Kit",
    type: 'fitting-kit',
  },
  {
    title: 'How our Virtual Fitting Works',
    description:
      'I would like to book an appointment to meet with a Fit Stylist virtually',
    type: 'fit-stylist',
  },
  {
    title: 'How our In-Home Service works',
    description:
      'I would like to book an In-Home Appointment with a Fit Stylist',
    type: 'in-home-stylist',
  },
]

export const fittingSteps = {
  'fitting-kit': [
    {
      title: 'fitting',
      description:
        'Kit will include our Ruler Sticker and instructions on how to get yourself fitted',
    },
    {
      title: 'ship',
      description: 'Ship your garments to us with a requested shipping label',
    },
    {
      title: 'deliver',
      description: 'Your finished garments are shipped back to you',
    },
  ],
  'fit-stylist': [
    {
      title: 'appointment',
      description: 'Book an appointment to meet with our Fit Stylist virtually',
    },
    {
      title: 'fitting',
      description:
        'Our Fit Stylist will meet with you virtually to assist you with fitting your garments',
    },
    {
      title: 'ship',
      description:
        'Ship your garments to us with the prepaid shipping label your Fit Stylist will send via email',
    },
    {
      title: 'deliver',
      description: 'Your finished garments are shipped back to you',
    },
  ],
  'in-home-stylist': [
    {
      title: 'appointment',
      description: 'Book an appointment to meet with one of our Fit Stylists',
    },
    {
      title: 'fitting',
      description:
        'One of our Fit Stylists will come to your home or office at your convenience',
    },
    {
      title: 'deliver',
      description: 'Your finished garments are shipped back to you',
    },
  ],
}
