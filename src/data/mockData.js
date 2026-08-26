// ============================================================================
// PASHUSURAKSHA — COMPREHENSIVE REPOSITORY MOCK DATA LAYER
// Smart India Hackathon 2026 | Problem Statement 26128
// Government of Maharashtra — Animal Health Intelligence Network
// ============================================================================

export const MASTER_CASE_ID = "PS-2026-004281";
export const MASTER_SAMPLE_ID = "PS-SMP-0198";

// 24 Monitored Herd Animals for Farmer Ramesh Patil (Khedgaon, Baramati)
// 21 Healthy, 2 Under Treatment, 1 Needs Attention (Ganga)
export const initialAnimals = [
  {
    id: "MH-PUN-0241",
    name: "Gauri (गौरी)",
    species: "Cattle (गाय)",
    breed: "Gir Indigenous (गीर)",
    age: "4 Years",
    sex: "Female",
    weight: "385 kg",
    owner: "Ramesh Patil (रमेश पाटील)",
    phone: "+91 98224 51092",
    location: "Khedgaon, Baramati, Pune",
    lat: 18.1524,
    lng: 74.5768,
    healthStatus: "needs_attention", // Master Demo Animal
    milkYield: "12.5 Liters/day (Dropped to 4L)",
    calvings: 2,
    rfidTag: "89040182740921",
    imageUrl: "/images/animals/gir_cow_gauri.jpg",
    vaccinations: [
      { name: "FMD (Foot & Mouth)", date: "2025-11-10", nextDue: "2026-05-10", status: "Due in 12 days", batch: "FMD-PUN-849" },
      { name: "LSD (Lumpy Skin)", date: "2025-02-14", nextDue: "2026-02-14", status: "Overdue (Gap Detected)", batch: "LSD-GOV-098" },
      { name: "HS (Hemorrhagic Septicemia)", date: "2025-09-02", nextDue: "2026-09-02", status: "Protected", batch: "HS-MHA-441" },
      { name: "Brucellosis S19", date: "2023-04-12", nextDue: "Lifetime", status: "Protected", batch: "BRU-0912" }
    ],
    treatments: [
      { date: "2026-02-24", condition: "High Pyrexia & Nodular Eruptions", doctor: "Dr. Anand Deshmukh", drug: "Meloxicam + Paracetamol + Enrofloxacin", outcome: "Clinical triage active" }
    ],
    diseaseReports: ["PS-2026-004281"]
  },
  {
    id: "MH-PUN-0109",
    name: "Kalyani (कल्याणी)",
    species: "Buffalo (म्हेस)",
    breed: "Murrah (मुर्रा)",
    age: "5.5 Years",
    sex: "Female",
    weight: "520 kg",
    owner: "Ramesh Patil",
    phone: "+91 98224 51092",
    location: "Khedgaon, Baramati, Pune",
    lat: 18.1524,
    lng: 74.5768,
    healthStatus: "under_treatment",
    milkYield: "14.0 Liters/day (Dropped to 9.5 L)",
    calvings: 3,
    rfidTag: "89040182740109",
    imageUrl: "/images/animals/murrah_buffalo_kalyani.jpg",
    vaccinations: [
      { name: "FMD (Foot & Mouth)", date: "2025-11-10", nextDue: "2026-05-10", status: "Due in 12 days", batch: "FMD-PUN-849" },
      { name: "HS (Hemorrhagic Septicemia)", date: "2025-09-02", nextDue: "2026-09-02", status: "Protected", batch: "HS-MHA-441" }
    ],
    treatments: [
      { date: "2026-02-18", condition: "Sub-clinical Mastitis (Left Hind Quarter)", doctor: "Dr. Anand Deshmukh", drug: "Intramammary Ceftiofur + Anti-inflammatory", outcome: "Improving (Day 4/5)" }
    ],
    diseaseReports: []
  },
  {
    id: "MH-PUN-0110",
    name: "Radha (राधा)",
    species: "Cattle (गाय)",
    breed: "Gir Indigenous (गीर)",
    age: "3.5 Years",
    sex: "Female",
    weight: "370 kg",
    owner: "Ramesh Patil",
    phone: "+91 98224 51092",
    location: "Khedgaon, Baramati, Pune",
    lat: 18.1524,
    lng: 74.5768,
    healthStatus: "under_treatment",
    milkYield: "11.0 Liters/day",
    calvings: 1,
    rfidTag: "89040182740110",
    imageUrl: "/images/animals/gir_cow_gauri.jpg",
    vaccinations: [
      { name: "FMD (Foot & Mouth)", date: "2025-11-10", nextDue: "2026-05-10", status: "Due in 12 days", batch: "FMD-PUN-849" },
      { name: "HS", date: "2025-09-02", nextDue: "2026-09-02", status: "Protected", batch: "HS-MHA-441" }
    ],
    treatments: [
      { date: "2026-02-22", condition: "Post-partum Hypocalcemia (Milk Fever)", doctor: "Dr. Anand Deshmukh", drug: "Calcium Borogluconate IV", outcome: "Vitals normal" }
    ],
    diseaseReports: []
  },
  {
    id: "MH-PUN-0883",
    name: "Laxmi (लक्ष्मी)",
    species: "Cattle (गाय)",
    breed: "Sahiwal Indigenous (साहिवाल)",
    age: "3.5 Years",
    sex: "Female",
    weight: "390 kg",
    owner: "Ramesh Patil",
    phone: "+91 98224 51092",
    location: "Khedgaon, Baramati, Pune",
    lat: 18.1524,
    lng: 74.5768,
    healthStatus: "healthy",
    milkYield: "14.5 Liters/day",
    calvings: 2,
    rfidTag: "89040182740883",
    imageUrl: "/images/animals/sahiwal_cow_laxmi.jpg",
    vaccinations: [
      { name: "FMD", date: "2025-11-10", nextDue: "2026-05-10", status: "Due in 12 days", batch: "FMD-PUN-849" },
      { name: "LSD", date: "2025-08-14", nextDue: "2026-08-14", status: "Protected", batch: "LSD-GOV-102" }
    ],
    treatments: [],
    diseaseReports: []
  },
  {
    id: "MH-PUN-1044",
    name: "Sultan (सुलतान)",
    species: "Goat (शेळी/बोकड)",
    breed: "Osmanabadi Buck (उस्मानाबादी)",
    age: "2.5 Years",
    sex: "Male",
    weight: "42 kg",
    owner: "Ramesh Patil",
    phone: "+91 98224 51092",
    location: "Khedgaon, Baramati, Pune",
    lat: 18.1524,
    lng: 74.5768,
    healthStatus: "healthy",
    milkYield: "N/A",
    calvings: 0,
    rfidTag: "89040182741044",
    imageUrl: "/images/animals/osmanabadi_goat_sultan.jpg",
    vaccinations: [
      { name: "PPR (Goat Plague)", date: "2025-07-10", nextDue: "2028-07-10", status: "Protected", batch: "PPR-IVRI-21" },
      { name: "ET (Enterotoxaemia)", date: "2025-10-05", nextDue: "2026-10-05", status: "Protected", batch: "ET-PUN-12" }
    ],
    treatments: [],
    diseaseReports: []
  },
  {
    id: "MH-PUN-1045",
    name: "Sundari (सुंदरी)",
    species: "Goat (शेळी)",
    breed: "Barbari Milking Doe (बरबरी)",
    age: "2 Years",
    sex: "Female",
    weight: "34 kg",
    owner: "Ramesh Patil",
    phone: "+91 98224 51092",
    location: "Khedgaon, Baramati, Pune",
    lat: 18.1524,
    lng: 74.5768,
    healthStatus: "healthy",
    milkYield: "2.2 Liters/day",
    calvings: 1,
    rfidTag: "89040182741045",
    imageUrl: "/images/animals/barbari_goat_sundari.jpg",
    vaccinations: [
      { name: "PPR", date: "2025-07-10", nextDue: "2028-07-10", status: "Protected", batch: "PPR-IVRI-21" }
    ],
    treatments: [],
    diseaseReports: []
  },
  {
    id: "MH-PUN-1088",
    name: "Nandi (नंदी)",
    species: "Cattle (बैल)",
    breed: "Khillari Indigenous (खिल्लार)",
    age: "4.5 Years",
    sex: "Male",
    weight: "460 kg",
    owner: "Ramesh Patil",
    phone: "+91 98224 51092",
    location: "Khedgaon, Baramati, Pune",
    lat: 18.1524,
    lng: 74.5768,
    healthStatus: "healthy",
    milkYield: "N/A",
    calvings: 0,
    rfidTag: "89040182741088",
    imageUrl: "/images/animals/khillari_bull_nandi.jpg",
    vaccinations: [
      { name: "FMD (Foot & Mouth)", date: "2025-11-10", nextDue: "2026-05-10", status: "Due in 12 days", batch: "FMD-PUN-849" },
      { name: "HS (Hemorrhagic Septicemia)", date: "2025-09-02", nextDue: "2026-09-02", status: "Protected", batch: "HS-MHA-441" }
    ],
    treatments: [],
    diseaseReports: []
  },
  // Additional healthy herd members to total 24
  ...Array.from({ length: 17 }).map((_, idx) => {
    const num = idx + 8;
    const names = ["Kamdhenu", "Surabhi", "Bhavani", "Godavari", "Shyama", "Bhim", "Arjun", "Rani", "Tulsi", "Yamuna", "Kavya", "Menaka", "Tara", "Usha", "Roopa", "Keshvi", "Devi"];
    const breeds = ["Gir Indigenous", "Sahiwal", "Dangi", "Murrah Buffalo", "Osmanabadi Goat", "Deccani Sheep"];
    const speciesList = ["Cattle (गाय)", "Cattle (गाय)", "Cattle (बैल)", "Buffalo (म्हेस)", "Goat (शेळी)", "Sheep (मेंढी)"];
    const tagNum = String(1090 + idx).padStart(4, '0');
    return {
      id: `MH-PUN-${tagNum}`,
      name: `${names[idx % names.length]} (${idx + 8})`,
      species: speciesList[idx % speciesList.length],
      breed: breeds[idx % breeds.length],
      age: `${(2 + (idx % 4) * 0.8).toFixed(1)} Years`,
      sex: idx % 4 === 0 ? "Male" : "Female",
      weight: `${320 + (idx * 14) % 180} kg`,
      owner: "Ramesh Patil",
      phone: "+91 98224 51092",
      location: "Khedgaon, Baramati, Pune",
      lat: 18.1524 + (idx * 0.0004),
      lng: 74.5768 + (idx * 0.0003),
      healthStatus: "healthy",
      milkYield: idx % 4 === 0 ? "N/A" : `${(8 + (idx % 7) * 1.2).toFixed(1)} L/day`,
      calvings: idx % 4 === 0 ? 0 : (1 + idx % 3),
      rfidTag: `8904018274${tagNum}`,
      imageUrl: idx % 3 === 0
        ? "/images/animals/gir_cow_gauri.jpg"
        : idx % 3 === 1
          ? "/images/animals/murrah_buffalo_kalyani.jpg"
          : "/images/animals/sahiwal_cow_laxmi.jpg",
      vaccinations: [
        { name: "FMD (Foot & Mouth)", date: "2025-11-10", nextDue: "2026-05-10", status: "Due in 12 days", batch: "FMD-PUN-849" },
        { name: "HS", date: "2025-09-02", nextDue: "2026-09-02", status: "Protected", batch: "HS-MHA-441" }
      ],
      treatments: [],
      diseaseReports: []
    };
  })
];

export const initialCases = [
  {
    caseId: "PS-2026-004281",
    reportedAt: "25 min ago",
    date: "2026-02-24 19:45",
    farmerName: "Ramesh Patil",
    farmerPhone: "+91 98224 51092",
    village: "Khedgaon",
    block: "Baramati",
    district: "Pune",
    animalId: "MH-PUN-0241",
    species: "Cattle (Cow)",
    breed: "Gir Indigenous",
    symptoms: ["High Fever (104.5°F)", "Multiple Nodular Skin Lumps (2-5cm)", "Nasal Discharge & Salivation", "Milk drop from 12L to 4L"],
    duration: "2 Days",
    stoppedEating: true,
    milkDecreased: true,
    nearbySimilarCases: true,
    recentDeaths: false,
    riskScore: 86,
    riskLevel: "HIGH", // "LOW" | "MEDIUM" | "HIGH" | "CRITICAL"
    suspectedDisease: "Lumpy Skin Disease (LSD) - Cluster Suspect",
    differentialList: [
      { disease: "Lumpy Skin Disease (Capripoxvirus)", probability: "84%", rationale: "Circumscribed nodular lesions across body + persistent fever + vector season" },
      { disease: "Pseudo-Cowpox (Parapoxvirus)", probability: "11%", rationale: "Localized teat lesions only, usually milder systemic fever" },
      { disease: "Bovine Papillomatosis", probability: "5%", rationale: "Wart-like growths without sudden high fever or severe milk drop" }
    ],
    status: "under_review", // "under_review" | "assigned" | "sample_pending" | "resolved"
    assignedVet: "Dr. Amit Patil (Baramati Taluka Vet Hospital)",
    locationCoord: { lat: 18.1524, lng: 74.5768 },
    photoUrl: "/images/animals/gir_cow_gauri.jpg",
    labReferral: null,
    hospitalReferral: null,
    prescription: null
  },
  {
    caseId: "PS-2026-004279",
    reportedAt: "2 hours ago",
    date: "2026-02-24 17:30",
    farmerName: "Sanjay Jagtap",
    farmerPhone: "+91 97654 32110",
    village: "Malegaon Budruk",
    block: "Baramati",
    district: "Pune",
    animalId: "MH-PUN-0782",
    species: "Buffalo",
    breed: "Murrah",
    symptoms: ["Excessive Ropey Salivation", "Oral Blisters & Vesicles", "Lameness in Both Front Feet"],
    duration: "3 Days",
    stoppedEating: true,
    milkDecreased: true,
    nearbySimilarCases: true,
    recentDeaths: false,
    riskScore: 92,
    riskLevel: "CRITICAL",
    suspectedDisease: "Foot & Mouth Disease (FMD) Serotype O",
    differentialList: [
      { disease: "Foot and Mouth Disease (Aphthovirus)", probability: "91%", rationale: "Classic oral vesicles + coronary band ulcerations + severe salivation" },
      { disease: "Vesicular Stomatitis", probability: "6%", rationale: "Clinically indistinguishable without serology" },
      { disease: "Bovine Viral Diarrhea (Mucosal Disease)", probability: "3%", rationale: "Erosions in oral cavity, usually accompanied by diarrhea" }
    ],
    status: "assigned",
    assignedVet: "Dr. Amit Patil",
    locationCoord: { lat: 18.1402, lng: 74.5510 },
    photoUrl: "/images/animals/murrah_buffalo_kalyani.jpg",
    labReferral: {
      sampleId: "LAB-PUN-9810",
      sampleType: "Vesicular fluid & epithelial swab",
      targetLab: "Disease Investigation Section (DIS), Aundh, Pune",
      dateSent: "2026-02-24 18:15",
      status: "Transport to Laboratory",
      turnaroundHours: 6
    },
    hospitalReferral: null,
    prescription: "Glycerine Boric acid oral wash + Flunixin Meglumine injection + Ceftiofur sodium"
  },
  {
    caseId: "PS-2026-004275",
    reportedAt: "5 hours ago",
    date: "2026-02-24 14:10",
    farmerName: "Balasaheb Shinde",
    farmerPhone: "+91 94220 88712",
    village: "Gunawadi",
    block: "Baramati",
    district: "Pune",
    animalId: "MH-PUN-1190",
    species: "Goat",
    breed: "Osmanabadi",
    symptoms: ["High Fever (105°F)", "Muco-purulent Nasal Discharge", "Severe Cough & Labored Breathing", "Watery Diarrhea"],
    duration: "4 Days",
    stoppedEating: true,
    milkDecreased: false,
    nearbySimilarCases: true,
    recentDeaths: true,
    riskScore: 79,
    riskLevel: "HIGH",
    suspectedDisease: "Peste des Petits Ruminants (PPR - Goat Plague)",
    differentialList: [
      { disease: "Peste des Petits Ruminants (PPR)", probability: "80%", rationale: "Oculonasal discharge + stomatitis + bronchopneumonia + enteritis in goats" },
      { disease: "Contagious Caprine Pleuropneumonia (CCPP)", probability: "14%", rationale: "Respiratory distress without oral lesions or diarrhea" },
      { disease: "Pasteurellosis (Pneumonic)", probability: "6%", rationale: "Secondary bacterial pneumonia following shipping or stress" }
    ],
    status: "sample_pending",
    assignedVet: "Dr. Sneha Kulkarni",
    locationCoord: { lat: 18.1780, lng: 74.6120 },
    photoUrl: "/images/animals/osmanabadi_goat_sultan.jpg",
    labReferral: {
      sampleId: "LAB-PUN-9804",
      sampleType: "Nasal Swab & Whole Blood in EDTA",
      targetLab: "Regional Animal Health Laboratory, Pune",
      dateSent: "2026-02-24 15:30",
      status: "Under Real-time RT-PCR Testing",
      turnaroundHours: 4
    },
    hospitalReferral: {
      hospital: "Baramati Sub-District Veterinary Hospital",
      urgency: "Emergency Isolation Needed",
      status: "Admitted to Quarantine Unit"
    },
    prescription: "Oxytetracycline LA + Meloxicam + Enrofloxacin oral"
  },
  {
    caseId: "PS-2026-004268",
    reportedAt: "Yesterday",
    date: "2026-02-23 11:20",
    farmerName: "Tukaram Gaikwad",
    farmerPhone: "+91 98811 44521",
    village: "Supa",
    block: "Baramati",
    district: "Pune",
    animalId: "MH-PUN-0312",
    species: "Cattle",
    breed: "Crossbred HF",
    symptoms: ["Simple Loss of Appetite", "Mild Dullness", "No Fever (101.4°F)"],
    duration: "1 Day",
    stoppedEating: false,
    milkDecreased: true,
    nearbySimilarCases: false,
    recentDeaths: false,
    riskScore: 24,
    riskLevel: "LOW",
    suspectedDisease: "Simple Indigestion / Ruminal Stasis",
    differentialList: [
      { disease: "Simple Ruminal Acidosis / Indigestion", probability: "88%", rationale: "Dietary change to grain feed, normal vitals, no contagion markers" }
    ],
    status: "resolved",
    assignedVet: "Dr. Amit Patil",
    locationCoord: { lat: 18.2310, lng: 74.4520 },
    photoUrl: "/images/animals/sahiwal_cow_laxmi.jpg",
    labReferral: null,
    hospitalReferral: null,
    prescription: "Rumenotorics (Aniliv / Ruchamax) + Yeast Culture bolus. Case resolved."
  },
  {
    caseId: "PS-2026-004255",
    reportedAt: "2 days ago",
    date: "2026-02-22 09:00",
    farmerName: "Mangesh Nalawade",
    farmerPhone: "+91 99234 11980",
    village: "Kurkumbh",
    block: "Daund",
    district: "Pune",
    animalId: "MH-PUN-FLOCK-09",
    species: "Poultry (कोंबड्या)",
    breed: "Country Aseel + Broiler",
    symptoms: ["Sudden Mortality (28 birds overnight)", "Cyanosis of Comb & Wattles", "Severe Facial Edema & Greenish Diarrhea"],
    duration: "2 Days",
    stoppedEating: true,
    milkDecreased: false,
    nearbySimilarCases: true,
    recentDeaths: true,
    riskScore: 98,
    riskLevel: "CRITICAL",
    suspectedDisease: "Highly Pathogenic Avian Influenza (HPAI) / Newcastle Disease",
    differentialList: [
      { disease: "Highly Pathogenic Avian Influenza (H5N1)", probability: "76%", rationale: "Peracute high flock mortality + respiratory and nervous signs" },
      { disease: "Velogenic Newcastle Disease (Ranikhet)", probability: "22%", rationale: "High mortality in un-vaccinated backyard poultry" }
    ],
    status: "assigned",
    assignedVet: "Dr. Rajiv Thorat (District Surveillance Officer)",
    locationCoord: { lat: 18.4612, lng: 74.5821 },
    photoUrl: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=600&q=80",
    labReferral: {
      sampleId: "LAB-PUN-9788",
      sampleType: "Tracheal/Cloacal Swabs & Carcasses",
      targetLab: "ICAR-NIHSAD National Institute of High Security Animal Diseases, Bhopal",
      dateSent: "2026-02-22 14:00",
      status: "Testing underway under BSL-3",
      turnaroundHours: 12
    },
    hospitalReferral: null,
    prescription: "Immediate Biosecurity Perimeter 1km culling & 10km surveillance ring activated by Pune Collectorate."
  }
];

export const geographicHotspots = [
  {
    id: "HOTSPOT-BARAMATI-01",
    name: "Baramati - Khedgaon / Malegaon Cluster",
    block: "Baramati",
    district: "Pune",
    center: { lat: 18.1524, lng: 74.5768 },
    radiusKm: 7.5,
    riskLevel: "CRITICAL",
    activeCases: 7,
    villagesAffected: ["Khedgaon", "Malegaon Budruk", "Gunawadi"],
    speciesAffected: ["Cattle (Gir / Crossbred)", "Buffalo"],
    suspectedDisease: "Lumpy Skin Disease & FMD Cluster",
    recentMortality: 2,
    vaccinationDeficit: "34% pending booster",
    lastReported: "25 min ago",
    vectorRisk: "HIGH (Culex & Stomoxys fly index 8.2)",
    rrtStatus: "Rapid Response Team Deployed on 2026-02-24"
  },
  {
    id: "HOTSPOT-DAUND-02",
    name: "Daund - Kurkumbh Poultry Zone",
    block: "Daund",
    district: "Pune",
    center: { lat: 18.4612, lng: 74.5821 },
    radiusKm: 10.0,
    riskLevel: "CRITICAL",
    activeCases: 5,
    villagesAffected: ["Kurkumbh", "Boribhadak", "Patas"],
    speciesAffected: ["Poultry (Commercial & Backyard)"],
    suspectedDisease: "Avian Influenza Suspect",
    recentMortality: 34,
    vaccinationDeficit: "Backyard flocks unvaccinated",
    lastReported: "2 hours ago",
    vectorRisk: "Moderate",
    rrtStatus: "Containment Zone Notified by DM"
  },
  {
    id: "HOTSPOT-SHIRUR-03",
    name: "Shirur - Nighoj Belt",
    block: "Shirur",
    district: "Pune",
    center: { lat: 18.8271, lng: 74.3758 },
    radiusKm: 6.0,
    riskLevel: "MEDIUM",
    activeCases: 3,
    villagesAffected: ["Nighoj", "Sirasgaon", "Mandavgan"],
    speciesAffected: ["Buffalo", "Cattle"],
    suspectedDisease: "Hemorrhagic Septicemia (HS)",
    recentMortality: 0,
    vaccinationDeficit: "16% pending",
    lastReported: "6 hours ago",
    vectorRisk: "Low",
    rrtStatus: "Ring Vaccination Scheduled"
  },
  {
    id: "HOTSPOT-INDAPUR-04",
    name: "Indapur - Bawada Goat Belt",
    block: "Indapur",
    district: "Pune",
    center: { lat: 18.1154, lng: 75.0234 },
    radiusKm: 8.0,
    riskLevel: "HIGH",
    activeCases: 4,
    villagesAffected: ["Bawada", "Nimgaon Ketki", "Anthurne"],
    speciesAffected: ["Goat (Osmanabadi)", "Sheep (Deccani)"],
    suspectedDisease: "Peste des Petits Ruminants (PPR)",
    recentMortality: 3,
    vaccinationDeficit: "26% unvaccinated",
    lastReported: "1 day ago",
    vectorRisk: "Moderate",
    rrtStatus: "Vaccination drive in progress"
  },
  {
    id: "HOTSPOT-HAVELI-05",
    name: "Haveli - Uruli Kanchan Dairy Belt",
    block: "Haveli",
    district: "Pune",
    center: { lat: 18.4872, lng: 74.1332 },
    radiusKm: 5.0,
    riskLevel: "LOW",
    activeCases: 2,
    villagesAffected: ["Uruli Kanchan", "Loni Kalbhor"],
    speciesAffected: ["Dairy Crossbred Cattle"],
    suspectedDisease: "Subclinical Mastitis",
    recentMortality: 0,
    vaccinationDeficit: "6% (Well Vaccinated)",
    lastReported: "2 days ago",
    vectorRisk: "Low",
    rrtStatus: "Routine Monitoring"
  }
];

export const puneBlocksStats = [
  { block: "Baramati", livestock: 142000, activeCases: 24, highRisk: 7, vacCoverage: 74.2, mortality7d: 3, responseTimeHours: 1.8 },
  { block: "Daund", livestock: 118000, activeCases: 19, highRisk: 6, vacCoverage: 69.8, mortality7d: 5, responseTimeHours: 2.1 },
  { block: "Shirur", livestock: 135000, activeCases: 14, highRisk: 3, vacCoverage: 81.0, mortality7d: 1, responseTimeHours: 2.4 },
  { block: "Indapur", livestock: 162000, activeCases: 18, highRisk: 5, vacCoverage: 71.5, mortality7d: 4, responseTimeHours: 2.0 },
  { block: "Haveli", livestock: 98000, activeCases: 8, highRisk: 1, vacCoverage: 88.4, mortality7d: 0, responseTimeHours: 1.2 },
  { block: "Purandar", livestock: 89000, activeCases: 11, highRisk: 2, vacCoverage: 79.2, mortality7d: 1, responseTimeHours: 2.5 },
  { block: "Junnar", livestock: 124000, activeCases: 9, highRisk: 1, vacCoverage: 83.6, mortality7d: 1, responseTimeHours: 2.8 },
  { block: "Khed", livestock: 112000, activeCases: 10, highRisk: 2, vacCoverage: 82.1, mortality7d: 1, responseTimeHours: 2.2 },
  { block: "Ambegaon", livestock: 94000, activeCases: 6, highRisk: 0, vacCoverage: 86.4, mortality7d: 0, responseTimeHours: 2.6 },
  { block: "Bhor", livestock: 78000, activeCases: 4, highRisk: 0, vacCoverage: 89.1, mortality7d: 0, responseTimeHours: 3.1 },
  { block: "Maval", livestock: 82000, activeCases: 3, highRisk: 0, vacCoverage: 91.0, mortality7d: 0, responseTimeHours: 1.9 },
  { block: "Mulshi", livestock: 64000, activeCases: 2, highRisk: 0, vacCoverage: 92.5, mortality7d: 0, responseTimeHours: 2.4 }
];

export const maharashtraDistrictsData = [
  { district: "Pune", risk: "CRITICAL", activeCases: 128, activeClusters: 4, livestock: "1.42M", vacCoverage: 78.4, mortality7d: 19, avgResponse: "2h 06m", color: "#ef4444" },
  { district: "Ahmednagar", risk: "HIGH", activeCases: 64, activeClusters: 2, livestock: "1.89M", vacCoverage: 74.1, mortality7d: 9, avgResponse: "2h 45m", color: "#f97316" },
  { district: "Solapur", risk: "HIGH", activeCases: 52, activeClusters: 2, livestock: "1.65M", vacCoverage: 76.5, mortality7d: 7, avgResponse: "3h 10m", color: "#f97316" },
  { district: "Chhatrapati Sambhajinagar", risk: "MEDIUM", activeCases: 48, activeClusters: 1, livestock: "1.12M", vacCoverage: 72.0, mortality7d: 6, avgResponse: "3h 25m", color: "#f59e0b" },
  { district: "Satara", risk: "LOW", activeCases: 28, activeClusters: 0, livestock: "1.04M", vacCoverage: 86.2, mortality7d: 2, avgResponse: "2h 20m", color: "#10b981" },
  { district: "Nashik", risk: "LOW", activeCases: 34, activeClusters: 0, livestock: "1.78M", vacCoverage: 84.8, mortality7d: 3, avgResponse: "2h 35m", color: "#10b981" },
  { district: "Kolhapur", risk: "LOW", activeCases: 19, activeClusters: 0, livestock: "1.22M", vacCoverage: 91.2, mortality7d: 1, avgResponse: "1h 50m", color: "#10b981" },
  { district: "Sangli", risk: "LOW", activeCases: 22, activeClusters: 0, livestock: "1.15M", vacCoverage: 88.0, mortality7d: 2, avgResponse: "2h 15m", color: "#10b981" },
  { district: "Jalgaon", risk: "MEDIUM", activeCases: 39, activeClusters: 1, livestock: "1.34M", vacCoverage: 75.3, mortality7d: 5, avgResponse: "3h 40m", color: "#f59e0b" },
  { district: "Latur", risk: "MEDIUM", activeCases: 31, activeClusters: 1, livestock: "0.98M", vacCoverage: 77.8, mortality7d: 4, avgResponse: "3h 15m", color: "#f59e0b" },
  { district: "Nanded", risk: "MEDIUM", activeCases: 42, activeClusters: 1, livestock: "1.25M", vacCoverage: 73.6, mortality7d: 6, avgResponse: "3h 50m", color: "#f59e0b" },
  { district: "Amravati", risk: "LOW", activeCases: 18, activeClusters: 0, livestock: "0.92M", vacCoverage: 87.4, mortality7d: 1, avgResponse: "2h 40m", color: "#10b981" },
  { district: "Nagpur", risk: "LOW", activeCases: 14, activeClusters: 0, livestock: "0.85M", vacCoverage: 89.6, mortality7d: 1, avgResponse: "2h 05m", color: "#10b981" }
];

export const fieldWorkerSchedule = [
  {
    id: "VISIT-01",
    farmer: "Ramesh Patil",
    village: "Khedgaon",
    distance: "1.2 km",
    animal: "Gir Cow (Gauri)",
    purpose: "Clinical Verification (Fever + Skin Nodules)",
    urgency: "HIGH",
    time: "09:30 AM",
    status: "In Progress",
    coords: { lat: 18.1524, lng: 74.5768 }
  },
  {
    id: "VISIT-02",
    farmer: "Sanjay Jagtap",
    village: "Malegaon Budruk",
    distance: "4.5 km",
    animal: "Murrah Buffalo (Kalyani)",
    purpose: "FMD Ring Vaccination Booster (18 Cattle)",
    urgency: "HIGH",
    time: "11:30 AM",
    status: "Scheduled",
    coords: { lat: 18.1402, lng: 74.5510 }
  },
  {
    id: "VISIT-03",
    farmer: "Balasaheb Shinde",
    village: "Gunawadi",
    distance: "6.8 km",
    animal: "Osmanabadi Goats (Flock 24)",
    purpose: "PPR Diagnostic Swab Sample Collection",
    urgency: "MEDIUM",
    time: "02:00 PM",
    status: "Scheduled",
    coords: { lat: 18.1780, lng: 74.6120 }
  },
  {
    id: "VISIT-04",
    farmer: "Gram Panchayat Shed",
    village: "Khedgaon Center",
    distance: "0.8 km",
    animal: "Community Livestock",
    purpose: "Vaccination Camp Cold-Chain Setup",
    urgency: "ROUTINE",
    time: "04:30 PM",
    status: "Scheduled",
    coords: { lat: 18.1550, lng: 74.5790 }
  }
];

export const diagnosticLabSamples = [
  {
    sampleId: "LAB-PUN-9821",
    caseId: "PS-2026-004281",
    animalTag: "MH-PUN-0241 (Gauri)",
    species: "Cattle (Cow)",
    sampleType: "Nasal Swab & Serum",
    testRequested: "Capripoxvirus (LSD) Real-time PCR",
    collectedBy: "Sunita Pawar (Pashu Sakhi)",
    collectedAt: "2026-02-24 10:15",
    laboratory: "Regional Animal Health Diagnostic Lab, Aundh, Pune",
    transportStatus: "Received at Laboratory",
    workflowStep: "Testing", // 'Collected' | 'Dispatched' | 'Received' | 'Testing' | 'Result' | 'Reviewed'
    result: "Pending (Turnaround ~4h)",
    statusBadge: "Testing Underway"
  },
  {
    sampleId: "LAB-PUN-9810",
    caseId: "PS-2026-004279",
    animalTag: "MH-PUN-0782",
    species: "Buffalo",
    sampleType: "Vesicular Fluid & Epithelial Flap",
    testRequested: "FMD Antigen ELISA (Serotype O/A/Asia-1)",
    collectedBy: "Dr. Amit Patil",
    collectedAt: "2026-02-24 18:15",
    laboratory: "Disease Investigation Section (DIS), CAH Pune",
    transportStatus: "In Cold-Chain Courier",
    workflowStep: "Dispatched",
    result: "Awaiting Arrival",
    statusBadge: "In Transit"
  },
  {
    sampleId: "LAB-PUN-9804",
    caseId: "PS-2026-004275",
    animalTag: "MH-PUN-1190",
    species: "Goat",
    sampleType: "Whole Blood in EDTA & Swab",
    testRequested: "PPRV N-Gene RT-PCR",
    collectedBy: "Dr. Sneha Kulkarni",
    collectedAt: "2026-02-24 15:30",
    laboratory: "Regional Animal Health Diagnostic Lab, Pune",
    transportStatus: "Completed",
    workflowStep: "Result",
    result: "POSITIVE (PPR Lineage IV Detected)",
    statusBadge: "Positive Confirmed"
  },
  {
    sampleId: "LAB-PUN-9788",
    caseId: "PS-2026-004255",
    animalTag: "MH-PUN-FLOCK-09",
    species: "Poultry",
    sampleType: "Tracheal/Cloacal Swabs & Tissue",
    testRequested: "Avian Influenza H5N1 Real-time RT-PCR",
    collectedBy: "Dr. Rajiv Thorat",
    collectedAt: "2026-02-22 14:00",
    laboratory: "ICAR-NIHSAD High Security Animal Diseases Lab, Bhopal",
    transportStatus: "BSL-3 Analysis",
    workflowStep: "Testing",
    result: "Under BSL-3 Isolation",
    statusBadge: "Critical BSL-3"
  }
];

export const diseaseTrendSeries = [
  { day: "Day 1", cases: 8, lsd: 2, fmd: 3, ppr: 2, others: 1, humidity: 62, temp: 31, vectorRisk: 4.2 },
  { day: "Day 2", cases: 11, lsd: 3, fmd: 4, ppr: 2, others: 2, humidity: 68, temp: 30, vectorRisk: 5.1 },
  { day: "Day 3", cases: 14, lsd: 5, fmd: 4, ppr: 3, others: 2, humidity: 74, temp: 32, vectorRisk: 6.8 },
  { day: "Day 4", cases: 19, lsd: 8, fmd: 5, ppr: 4, others: 2, humidity: 79, temp: 33, vectorRisk: 7.5 },
  { day: "Day 5", cases: 24, lsd: 11, fmd: 7, ppr: 3, others: 3, humidity: 82, temp: 32, vectorRisk: 8.4 },
  { day: "Day 6", cases: 28, lsd: 14, fmd: 8, ppr: 4, others: 2, humidity: 80, temp: 31, vectorRisk: 8.1 },
  { day: "Day 7 (Today)", cases: 31, lsd: 16, fmd: 8, ppr: 4, others: 3, humidity: 78, temp: 31, vectorRisk: 8.2 }
];

export const upcomingVaccinationCamps = [
  {
    id: "CAMP-01",
    title: "National Animal Disease Control Programme (NADCP) - FMD & LSD Drive",
    village: "Khedgaon Gram Panchayat Office",
    block: "Baramati",
    distance: "1.2 km from your farm",
    date: "This Saturday, 28 Feb 2026",
    time: "08:30 AM - 04:30 PM",
    vaccines: ["FMD (Foot & Mouth)", "LSD (Goat Pox vaccine for Cattle)", "HS Booster"],
    fee: "100% Free (Govt Scheme)",
    vetInCharge: "Dr. Amit Patil (+91 94220 12345)",
    availableDoses: 850
  },
  {
    id: "CAMP-02",
    title: "PPR Eradication Mission - Small Ruminant Drive",
    village: "Gunawadi Veterinary Aid Center",
    block: "Baramati",
    distance: "4.8 km",
    date: "Next Tuesday, 03 Mar 2026",
    time: "09:00 AM - 03:00 PM",
    vaccines: ["PPR (Sheep & Goat Plague)", "Enterotoxaemia (ET)"],
    fee: "Free",
    vetInCharge: "Dr. Sneha Kulkarni",
    availableDoses: 600
  },
  {
    id: "CAMP-03",
    title: "Sub-District Veterinary Hospital Daily OPD & Emergency Vaccination",
    village: "MIDC Area, Baramati City",
    block: "Baramati",
    distance: "8.4 km",
    date: "Open 24x7 (OPD 8 AM - 6 PM)",
    time: "Continuous Service",
    vaccines: ["All 6 Core Scheduled Vaccines", "Anti-Rabies Post-Bite", "Brucella S19"],
    fee: "Govt Subsidized",
    vetInCharge: "Dr. Amit Patil",
    availableDoses: 3200
  }
];

export const advisories = [
  {
    id: "ADV-01",
    title: "Lumpy Skin Disease (LSD) Prevention & Shed Biosecurity",
    category: "Disease Prevention (रोग प्रतिबंध)",
    severity: "HIGH",
    date: "24 Feb 2026",
    audioMinutes: "2 min audio",
    summary: "Immediate steps for cattle owners when skin nodules appear in nearby villages.",
    targetDistrict: "Pune, Ahmednagar, Solapur",
    channels: ["App Notification", "SMS Broadcast", "IVR Voice Call", "Pashu Sakhi Push"],
    points: [
      "Quarantine: Keep newly purchased or returning animals separated for 14 to 21 days.",
      "Vector Control: Spray cattle shed with Neem oil extract or Deltamethrin 1.25% to kill mosquitoes, stable flies (Stomoxys), and ticks.",
      "Shed Sanitization: Dust lime powder (Chuna) at shed entry and wash feed troughs with 1% potassium permanganate.",
      "Do Not Pierce Lumps: Never lance or prick skin nodules manually as fluid contains heavy viral load.",
      "Vaccinate Healthy Stock: Contact Baramati Veterinary Center for Goat Pox vaccine (0.5ml) ring vaccination."
    ]
  },
  {
    id: "ADV-02",
    title: "Foot & Mouth Disease (FMD) Pre-Monsoon Ring Vaccination",
    category: "Vaccination Schedule (लसीकरण मोहीम)",
    severity: "MEDIUM",
    date: "20 Feb 2026",
    audioMinutes: "1.5 min audio",
    summary: "Biannual FMD booster mandatory for all cloven-hoofed animals (cows, buffaloes, goats).",
    targetDistrict: "All 36 Districts of Maharashtra",
    channels: ["App Notification", "SMS Broadcast"],
    points: [
      "Vaccinate all healthy animals above 4 months of age.",
      "Pregnant animals in advanced trimester can safely receive modern purified oil-adjuvant vaccine.",
      "Keep affected animals on soft green fodder and gruel (पेज/कणगी) due to mouth soreness."
    ]
  },
  {
    id: "ADV-03",
    title: "Emergency Care for Bloat & Acute Ruminal Acidosis",
    category: "Emergency Care (आपत्कालीन प्रथमोपचार)",
    severity: "MEDIUM",
    date: "15 Feb 2026",
    audioMinutes: "2 min audio",
    summary: "First aid for sudden belly swelling due to excess green fodder or spoiled grains.",
    targetDistrict: "Pune District",
    channels: ["App Notification"],
    points: [
      "Administer 200 ml sweet oil / groundnut oil with 20 gm ginger powder and hing (asafoetida).",
      "Keep animal's front feet elevated to ease pressure on lungs.",
      "Do not make the animal lie down; call veterinary doctor immediately if gas is not passed."
    ]
  }
];

export const weatherSurveillanceContext = {
  station: "Baramati IMD Agro-Meteorological Observatory",
  district: "Pune",
  temperature: "31.4°C",
  humidity: "78%",
  rainfall48h: "12.4 mm",
  vectorDensityIndex: "8.2 / 10",
  riskLevel: "ELEVATED",
  dominantVector: "Stomoxys calcitrans (Stable Fly) & Culicoides midges",
  insight: "Environmental humidity surge in Baramati canal belt strongly correlates with higher Capripoxvirus mechanical transmission. Preemptive shed spraying recommended."
};

export const PROTOTYPE_DECISION_RULES = [
  {
    id: "RULE-SPATIAL-01",
    name: "5km Spatial Cluster Aggregation",
    category: "Epidemiological Early Warning",
    condition: "≥ 3 similar syndrome reports within 5.0 km radius within rolling 7-day window",
    action: "Promote block signal to 'ELEVATED CLUSTER' and alert Taluka Veterinary Hospital + District Command",
    status: "ACTIVE",
    triggeredCount: 7
  },
  {
    id: "RULE-TRIAGE-02",
    name: "Multivariate Clinical Risk Scoring",
    category: "Decision Support Algorithm",
    condition: "High Fever (104°F+) [25pts] + Nodular Skin Lumps [30pts] + Milk Drop [15pts] + Neighboring Cluster [16pts]",
    action: "Calculate risk index 86/100 (HIGH RISK), recommend isolation & generate laboratory swab order",
    status: "ACTIVE",
    triggeredCount: 14
  },
  {
    id: "RULE-VACCINE-03",
    name: "Vaccination Coverage Gap Alarm",
    category: "Preventive Logistics",
    condition: "Block vaccine booster coverage < 80% during active vector breeding season (Aug-Feb)",
    action: "Schedule automated NADCP mobile vaccination camp and dispatch ring vaccine buffer",
    status: "ACTIVE",
    triggeredCount: 3
  },
  {
    id: "RULE-MORTALITY-04",
    name: "Sudden Multi-Mortality Surge",
    category: "Emergency Biosafety",
    condition: "≥ 2 sudden unexplained deaths in ruminants or ≥ 20 poultry deaths in single village within 24h",
    action: "Trigger Tier-1 Immediate District Rapid Response Team dispatch & biological quarantine",
    status: "ACTIVE",
    triggeredCount: 1
  }
];

export const initialOfflineQueue = [
  {
    id: "OFF-2026-091",
    type: "Animal Registration",
    timestamp: "12 mins ago",
    dataSummary: "Tag MH-PUN-0994 (Osmanabadi Goat, Owner: Mahadev Kadam, Khedgaon)",
    status: "pending"
  },
  {
    id: "OFF-2026-092",
    type: "Vaccination Record",
    timestamp: "24 mins ago",
    dataSummary: "FMD Batch #FMD-PUN-849 applied to 8 cattle at Wadmukwadi",
    status: "pending"
  },
  {
    id: "OFF-2026-093",
    type: "Mortality Surveillance",
    timestamp: "45 mins ago",
    dataSummary: "1 Sheep sudden death reported (Suspected Enterotoxaemia, Gunawadi)",
    status: "pending"
  }
];
