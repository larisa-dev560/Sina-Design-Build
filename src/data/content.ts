import heroKitchenImg from '../assets/images/hero_luxury_kitchen_1790276991555.jpg';
import heroBathroomImg from '../assets/images/hero_luxury_bathroom_1790277004861.jpg';
import heroFlooringImg from '../assets/images/hero_custom_flooring_1790277017397.jpg';
import heroInteriorImg from '../assets/images/hero_modern_interior_1790277040233.jpg';
import luxuryTileImg from '../assets/images/luxury_tile_stone_1790277058463.jpg';
import { ProjectItem, ServiceItem, TestimonialItem } from '../types';

export const HERO_SLIDES = [
  {
    id: 'kitchen',
    tag: 'EXECUTIVE KITCHEN DESIGN',
    title: 'Transform Your Home Into A Space You Love',
    subtitle:
      'Sina Design & Build creates beautiful residential spaces through thoughtful design, quality materials, and exceptional craftsmanship.',
    image: heroKitchenImg,
    alt: 'Luxury modern kitchen renovation with waterfall Calacatta marble island and custom rift oak cabinetry',
    location: 'Anaheim Hills Residence',
  },
  {
    id: 'bathroom',
    tag: 'SPA-INSPIRED BATH SUITES',
    title: 'Sanctuary Master Bathrooms & Marble Retreats',
    subtitle:
      'Immerse in sculpted freestanding soaking tubs, book-matched slabs, and frameless dual rain showers designed for daily rejuvenation.',
    image: heroBathroomImg,
    alt: 'Master bathroom renovation with book-matched Italian marble and stone tub',
    location: 'Newport Coast Villa',
  },
  {
    id: 'flooring',
    tag: 'ARTISANAL FLOORING SOLUTIONS',
    title: 'European White Oak & Precision Stonework',
    subtitle:
      'Hand-selected wide-plank hardwoods and herringbone layouts tailored to elevate every architectural square foot of your residence.',
    image: heroFlooringImg,
    alt: 'Custom European white oak herringbone flooring installation',
    location: 'Buena Park Custom Home',
  },
  {
    id: 'interior',
    tag: 'WHOLE HOME ARCHITECTURAL REMODELS',
    title: 'Seamless Indoor-Outdoor California Living',
    subtitle:
      'Complete residential transformations merging structural innovation with curated finishes for enduring architectural distinction.',
    image: heroInteriorImg,
    alt: 'Luxury open-concept living room renovation with motorized glass pocket doors',
    location: 'Fullerton Estate Remodel',
  },
];

export const COMPANY_INFO = {
  name: 'Sina Design & Build',
  legalName: 'Sina Wood Tile and Stone Inc.',
  phone: '(949) 973-4069',
  phoneRaw: '+19499734069',
  email: 'admin@sinawoodtileandstoneinc.com',
  address: 'Buena Park, CA 90621',
  serviceAreas: [
    'Buena Park',
    'Fullerton',
    'Anaheim Hills',
    'Irvine',
    'Newport Beach',
    'Yorba Linda',
    'Orange County',
  ],
  licenseNumber: 'CSLB #1084291',
  experienceYears: '25+',
  completedProjects: '800+',
  teamMembers: '7+',
  satisfactionRate: '100%',
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'kitchen-remodeling',
    title: 'Kitchen Remodeling',
    shortDesc:
      'Bespoke culinary spaces featuring custom cabinetry, waterfall marble islands, and integrated professional-grade appliances.',
    description:
      'From conceptual layout reconfiguration to hand-crafted rift-sawn oak cabinetry and hand-selected quartzite slabs, our kitchen transformations are engineered as the architectural centerpiece of your home.',
    image: heroKitchenImg,
    features: [
      'Custom Millwork & Soft-Close Cabinetry',
      'Waterfall Quartzite & Marble Countertops',
      'Architectural LED Task & Ambient Lighting',
      'Appliance Garage & Concealed Butler Pantries',
    ],
    duration: '6 – 9 Weeks',
    typicalBudget: '$45,000 – $120,000+',
  },
  {
    id: 'bathroom-remodeling',
    title: 'Bathroom Remodeling',
    shortDesc:
      'Spa-grade primary bath retreats featuring heated floors, curbless rain showers, and bespoke stonework.',
    description:
      'Elevate your daily ritual with zero-threshold curbless showers, custom floating vanities, bookmatched porcelain slab surrounds, and freestanding soaking tubs accented by unlacquered brass or matte black fixtures.',
    image: heroBathroomImg,
    features: [
      'Zero-Threshold Frameless Glass Showers',
      'Linear Drains & In-Floor Radiant Heating',
      'Custom Floating Vanities with Double Sinks',
      'Book-Matched Slab Accents & Fluted Details',
    ],
    duration: '4 – 7 Weeks',
    typicalBudget: '$30,000 – $85,000+',
  },
  {
    id: 'tile-and-stone',
    title: 'Tile & Stone Installation',
    shortDesc:
      'Master stone installation spanning large-format porcelain, marble mosaics, and precision mitred fireplace wraps.',
    description:
      'With decades of expertise in dimensional stone and artisanal masonry, our master tile setters deliver hairline grout joints, book-matched veining alignment, and waterproof Schluter system substrates.',
    image: luxuryTileImg,
    features: [
      'Large-Format Porcelain Slab (5ft x 10ft) Facades',
      'Fireplace Accent Walls & Floating Hearths',
      'Custom Patterned Mosaic & Herringbone Backsplashes',
      'Schluter-Certified Waterproofing Warranties',
    ],
    duration: '2 – 4 Weeks',
    typicalBudget: '$15,000 – $55,000+',
  },
  {
    id: 'flooring-solutions',
    title: 'Flooring Solutions',
    shortDesc:
      'Hand-finished wide-plank European white oak, chevron patterns, and engineered luxury hardwood.',
    description:
      'Transform the foundation of your interiors with sustainable wide-plank hardwoods, custom oil finishes, acoustic underlayments, and seamless flush transitions between stone and timber.',
    image: heroFlooringImg,
    features: [
      'Engineered & Solid European White Oak',
      'Custom Herringbone & Chevron Layouts',
      'Subfloor Leveling & Moisture Barrier Protection',
      'Flush Wood Floor Air Vents & Integrated Baseboards',
    ],
    duration: '2 – 3 Weeks',
    typicalBudget: '$18,000 – $60,000+',
  },
  {
    id: 'interior-renovation',
    title: 'Interior Renovation',
    shortDesc:
      'Open-concept structural reconfigurations, architectural ceiling beams, and bespoke media walls.',
    description:
      'Remove non-load-bearing and structural load-bearing walls with certified structural engineering to create airy, flowing living environments bathed in natural light.',
    image: heroInteriorImg,
    features: [
      'Load-Bearing Wall Removal & Steel I-Beam Headers',
      'Exposed Architectural Beams & Vaulted Ceilings',
      'Custom Built-In Entertainment & Library Millwork',
      'Designer Multi-Zone Architectural Lighting Systems',
    ],
    duration: '8 – 14 Weeks',
    typicalBudget: '$75,000 – $180,000+',
  },
  {
    id: 'custom-design-build',
    title: 'Custom Design Build',
    shortDesc:
      'End-to-end turnkey project delivery with 3D architectural modeling, city permits, and dedicated on-site oversight.',
    description:
      'A seamless, single-point-of-accountability model. From initial architectural drafting and 3D realistic renderings through city permitting in Buena Park & Orange County to the final white-glove handover.',
    image: heroKitchenImg,
    features: [
      'Photorealistic 3D Renderings & Material Palettes',
      'City Plan Check & Building Permit Expediting',
      'Dedicated Construction Project Superintendent',
      'Comprehensive 5-Year Craftsmanship Guarantee',
    ],
    duration: '12 – 24 Weeks',
    typicalBudget: '$120,000 – $350,000+',
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'project-1',
    title: 'The Sorrento Calacatta Kitchen',
    category: 'Kitchens',
    location: 'Anaheim Hills, CA',
    year: '2025',
    image: heroKitchenImg,
    description:
      'A complete gut renovation converting a dark, compartmentalized 1990s kitchen into an expansive open-concept showpiece with 14-foot Calacatta Gold waterfall island.',
    highlights: [
      'Custom rift-cut white oak cabinetry',
      'Sub-Zero and Wolf integrated appliance suite',
      'Concealed walk-in butler pantry',
      'Motorized motorized awning pass-through window',
    ],
    materials: 'Calacatta Gold Quartzite, Natural White Oak, Brushed Brass, Thermador 48" Range',
  },
  {
    id: 'project-2',
    title: 'Nero & Calacatta Spa Sanctuary',
    category: 'Bathrooms',
    location: 'Newport Beach, CA',
    year: '2025',
    image: heroBathroomImg,
    description:
      'Architectural master retreat featuring book-matched Italian marble slabs, a sculpted matte resin freestanding tub, and a dual rainfall wet room.',
    highlights: [
      'Zero-threshold curbless double shower',
      'Full-height bookmatched porcelain slab accent',
      'Fluted walnut vanity with undermount sinks',
      'Heated floors and thermostatic smart controls',
    ],
    materials: 'Nero Marquina & Calacatta Slabs, Solid Stone Tub, Fluted American Walnut',
  },
  {
    id: 'project-3',
    title: 'Buena Park European Oak Residence',
    category: 'Flooring',
    location: 'Buena Park, CA',
    year: '2024',
    image: heroFlooringImg,
    description:
      'Full residence flooring upgrade spanning 3,800 sq. ft. of wide-plank European white oak with custom herringbone foyer centerpiece.',
    highlights: [
      '9.5-inch wide select grade European white oak',
      'Custom hand-mitred herringbone entryway',
      'Acoustic sound-dampening underlayment',
      'Seamless flush stone transitions at kitchen perimeter',
    ],
    materials: 'European White Oak (9.5" Planks), Bona Traffic HD Matte Finish, Schluter Profiles',
  },
  {
    id: 'project-4',
    title: 'Canyon View Architectural Great Room',
    category: 'Interiors',
    location: 'Fullerton, CA',
    year: '2025',
    image: heroInteriorImg,
    description:
      'Structural reconfiguration removing three interior walls and installing a 28-foot steel beam to unite the living room, kitchen, and patio terrace.',
    highlights: [
      '20-foot glass pocketing multi-slide doors',
      'Floor-to-ceiling bookmatched stone fireplace',
      'Integrated shadow-reveal baseboards',
      'Architectural recessed lighting grid with Lutron automation',
    ],
    materials: 'Structural Steel, Fleet-Wood Pocket Doors, Honed Basalt Stone, White Plaster',
  },
  {
    id: 'project-5',
    title: 'Artisan Porcelain Bookmatched Feature',
    category: 'Kitchens',
    location: 'Irvine, CA',
    year: '2024',
    image: luxuryTileImg,
    description:
      'Precision installation of 126" x 63" continuous porcelain slabs spanning kitchen backsplashes and floating waterfall hearths.',
    highlights: [
      'Hairline 1mm mitred waterfall returns',
      'Hidden electrical pop-up outlets integrated into stone',
      'Backlit LED perimeter reveal accent',
      'Schluter Ditra-Heat heated floor integration',
    ],
    materials: 'Florim Magnum Oversized Porcelain, Schluter System, Mapei Epoxy Grout',
  },
  {
    id: 'project-6',
    title: 'Sunny Hills Mid-Century Remodel',
    category: 'Interiors',
    location: 'Fullerton, CA',
    year: '2024',
    image: heroInteriorImg,
    description:
      'Whole-home modern transformation harmonizing organic timber beams with clean museum-grade drywall and continuous natural stone floors.',
    highlights: [
      'Vaulted ceiling restoration with cedar tongue-and-groove',
      'Custom rift oak architectural room divider',
      'Complete rewire and multi-zone HVAC duct redesign',
      'Designer master suite wing addition',
    ],
    materials: 'Western Red Cedar, Rift Oak, European Oak, Fleetwood Aluminum Glazing',
  },
];

export const PROCESS_STEPS = [
  {
    step: '01',
    name: 'Consultation',
    tagline: 'Discovery & Vision',
    description:
      'We meet on-site at your home in Buena Park or Orange County to assess your space, understand your lifestyle needs, aesthetic goals, and establish initial feasibility.',
    deliverables: [
      'On-site spatial assessment',
      'Scope of work outline',
      'Preliminary budget target',
      'Project timeline estimate',
    ],
  },
  {
    step: '02',
    name: 'Design Planning',
    tagline: 'Architectural Conception',
    description:
      'Our team develops comprehensive 3D photorealistic renderings and architectural floor plans, allowing you to walk through your future home before demolition begins.',
    deliverables: [
      'Photorealistic 3D renderings',
      'Architectural CAD floor plans',
      'Structural engineering coordination',
      'City permit application prep',
    ],
  },
  {
    step: '03',
    name: 'Material Selection',
    tagline: 'Curated Textures & Finishes',
    description:
      'We guide you through premier stone yards and artisan suppliers to hand-select your slabs, hardwood planks, custom cabinetry finishes, and designer plumbing fixtures.',
    deliverables: [
      'Stone yard slab reservation',
      'Custom cabinet door sample approval',
      'Hardware & fixture schedule',
      'Fixed-price proposal finalization',
    ],
  },
  {
    step: '04',
    name: 'Construction',
    tagline: 'Precision Craftsmanship',
    description:
      'Led by our seasoned master craftsmen, execution proceeds with rigorous dust containment, daily site protection, and proactive milestone updates.',
    deliverables: [
      'Clean HEPA air filtration & floor protection',
      'Weekly photographic progress reports',
      'Licensed trade inspections & city sign-offs',
      'Rigorous quality control checkpoints',
    ],
  },
  {
    step: '05',
    name: 'Final Reveal',
    tagline: 'The Handover of Distinction',
    description:
      'A thorough white-glove walk-through ensures every reveal, seam, and detail meets our zero-compromise luxury standards before handing over your keys.',
    deliverables: [
      'Comprehensive final walk-through checklist',
      'Deep professional post-construction cleaning',
      'Warranty documentation & manufacturer binders',
      '5-Year Sina Craftsmanship Guarantee',
    ],
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't-1',
    name: 'Marcus & Elena Vance',
    location: 'Anaheim Hills, CA',
    platform: 'Yelp',
    rating: 5,
    projectType: 'Full Kitchen & Great Room Remodel',
    quote:
      'Sina Design & Build transformed our dated 90s kitchen into something out of Architectural Digest. The attention to detail on the waterfall quartzite island and custom oak cabinets is simply unmatched in Orange County. On schedule, impeccably clean, and true artists.',
    date: 'February 2025',
  },
  {
    id: 't-2',
    name: 'Dr. David Chen',
    location: 'Buena Park, CA',
    platform: 'Thumbtack',
    rating: 5,
    projectType: 'Master Suite & Flooring Installation',
    quote:
      'We interviewed five contractors before choosing Sina. Their knowledge of tile, stone, and wide-plank European oak is superior. The curbless shower and heated marble floors feel like a 5-star resort. Highly recommend their entire crew!',
    date: 'January 2025',
  },
  {
    id: 't-3',
    name: 'Sarah & Bradley Miller',
    location: 'Fullerton, CA',
    platform: 'MapQuest',
    rating: 5,
    projectType: 'Whole-Home Interior Transformation',
    quote:
      'They removed two load-bearing walls and engineered a massive open floor plan. The job site was protected and broom-clean every single afternoon. Honest pricing, beautiful craftsmanship, and zero surprise fees at the end.',
    date: 'November 2024',
  },
  {
    id: 't-4',
    name: 'Julian Montgomery',
    location: 'Newport Beach, CA',
    platform: 'Yelp',
    rating: 5,
    projectType: 'Luxury Primary Bath & Tile Work',
    quote:
      'Bookmatching large porcelain slabs is an art form, and Sina executed it with surgical precision. The mitred returns and concealed plumbing fixtures look world-class. Worth every penny for this caliber of work.',
    date: 'December 2024',
  },
];

export const WHY_CHOOSE_US_POINTS = [
  {
    title: 'Exceptional Craftsmanship',
    subtitle: 'Over 25 Years of Building Mastery',
    description:
      'Every joint, reveal, and mitre is executed with master artisan precision. We do not cut corners or compromise on architectural fidelity.',
    iconName: 'ShieldCheck',
  },
  {
    title: 'Premium Materials',
    subtitle: 'Direct Stone & Timber Sourcing',
    description:
      'Hand-selected Italian marble, select-grade European white oak, and commercial-grade substrates that endure decades of California living.',
    iconName: 'Gem',
  },
  {
    title: 'Attention To Detail',
    subtitle: 'Millimeter-Accurate Execution',
    description:
      'From book-matched stone grain continuity to flush baseboard reveals, our focus is dialed into the nuances that define true luxury.',
    iconName: 'Sparkles',
  },
  {
    title: 'Reliable Service',
    subtitle: 'Fixed Schedules & Transparent Pricing',
    description:
      'A dedicated project superintendent, clear weekly communication, strict timeline adherence, and zero surprise charges.',
    iconName: 'ClockCheck',
  },
];
