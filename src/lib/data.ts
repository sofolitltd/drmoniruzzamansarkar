import {
  type Doctor,
  type Specialty,
  type Condition,
  type Service,
  type BlogPost,
  type Testimonial,
  type Faq,
  type GalleryItem,
} from "@/types";

export const doctor: Doctor = {
  name: "Dr. Md. Moniruzzaman Sarkar",
  title: "Assistant Professor",
  qualifications: [
    "MBBS (Dhaka)",
    "BCS (Health)",
    "FCPS (Medicine)",
    "FCPS (Gastroenterology)",
    "Diabetologist (Yale University, USA)",
  ],
  position: "Assistant Professor",
  institution: "Government Medical College & Hospital",
  bio: `Assistant Professor Dr. Md. Moniruzzaman Sarkar is a highly accomplished physician specializing in Gastroenterology, Diabetes, and General Medicine. With extensive training from prestigious institutions including Yale University, USA, he brings world-class medical expertise to his patients.

Dr. Sarkar completed his MBBS from Dhaka, followed by BCS (Health), FCPS (Medicine), and FCPS (Gastroenterology). His additional specialization as a Diabetologist from Yale University equips him with advanced knowledge in managing complex diabetes cases.

Currently serving as an Assistant Professor at Government Medical College & Hospital, Dr. Sarkar combines academic excellence with clinical expertise. He is dedicated to providing evidence-based, patient-centered care using modern diagnostic techniques and advanced treatment protocols.`,
  mission:
    "To provide compassionate, evidence-based medical care that transforms lives. I believe in treating not just the disease, but the whole person, combining advanced medical expertise with genuine human connection.",
  experience:
    "Over 15 years of clinical experience in Gastroenterology, Diabetes, and General Medicine, with specialized training from Yale University.",
  image: "/drmdmoniruzzamansarkar.png",
  phone: "+8801700000000",
  whatsapp: "+8801700000000",
  email: "dr.moniruzzaman@example.com",
  address: "General Diagnostic Center, Medical Mor, Dhap Jail Road (Opposite Sarak Bhaban), Rangpur",
  city: "Rangpur, Bangladesh",
  chambers: [
    {
      id: "1",
      name: "General Diagnostic Center",
      address: "Medical Mor, Dhap Jail Road (Opposite Sarak Bhaban), Rangpur",
      city: "Rangpur",
      visitingHours: "Sat - Thu: 5:00 PM - 9:00 PM",
      phone: "+8801700000000",
      mapUrl: "https://maps.google.com",
    },
    {
      id: "2",
      name: "Chamber at Poschimpara",
      address: "Poschimpara, Gaibandha",
      city: "Gaibandha",
      visitingHours: "Friday: 4:00 PM - 8:00 PM",
      phone: "+8801700000000",
      mapUrl: "https://maps.google.com",
    },
  ],
  achievements: [
    {
      id: "1",
      title: "FCPS in Medicine",
      year: "2012",
      description: "Fellowship of the College of Physicians and Surgeons in Medicine",
    },
    {
      id: "2",
      title: "FCPS in Gastroenterology",
      year: "2015",
      description: "Fellowship of the College of Physicians and Surgeons in Gastroenterology",
    },
    {
      id: "3",
      title: "Diabetologist Certification",
      year: "2016",
      description: "Specialized training in Diabetes from Yale University, USA",
    },
    {
      id: "4",
      title: "Assistant Professor",
      year: "2018",
      description: "Appointed as Assistant Professor at Government Medical College & Hospital",
    },
  ],
  memberships: [
    {
      id: "1",
      name: "Member",
      organization: "Bangladesh Medical Association (BMA)",
    },
    {
      id: "2",
      name: "Member",
      organization: "Bangladesh Society of Gastroenterology",
    },
    {
      id: "3",
      name: "Member",
      organization: "Bangladesh Diabetic Association",
    },
  ],
  education: [
    {
      id: "1",
      degree: "MBBS",
      institution: "Dhaka Medical College",
      year: "2005",
    },
    {
      id: "2",
      degree: "BCS (Health)",
      institution: "Bangladesh Civil Service",
      year: "2008",
    },
    {
      id: "3",
      degree: "FCPS (Medicine)",
      institution: "College of Physicians and Surgeons, Bangladesh",
      year: "2012",
    },
    {
      id: "4",
      degree: "FCPS (Gastroenterology)",
      institution: "College of Physicians and Surgeons, Bangladesh",
      year: "2015",
    },
    {
      id: "5",
      degree: "Diabetologist",
      institution: "Yale University, USA",
      year: "2016",
    },
  ],
};

export const specialties: Specialty[] = [
  {
    id: "1",
    name: "Gastroenterology",
    description:
      "Comprehensive diagnosis and treatment of digestive system disorders including GERD, IBS, liver diseases, and more.",
    icon: "Stomach",
    slug: "gastroenterology",
  },
  {
    id: "2",
    name: "Diabetes Care",
    description:
      "Expert management of Type 1, Type 2, and gestational diabetes with personalized treatment plans.",
    icon: "HeartPulse",
    slug: "diabetes-care",
  },
  {
    id: "3",
    name: "General Medicine",
    description:
      "Complete healthcare for adults, focusing on prevention, diagnosis, and treatment of various medical conditions.",
    icon: "Stethoscope",
    slug: "general-medicine",
  },
  {
    id: "4",
    name: "Liver Diseases",
    description:
      "Specialized care for liver conditions including fatty liver, hepatitis, cirrhosis, and liver function disorders.",
    icon: "Activity",
    slug: "liver-diseases",
  },
  {
    id: "5",
    name: "Preventive Medicine",
    description:
      "Proactive health screenings, risk assessments, and lifestyle interventions to prevent disease.",
    icon: "ShieldCheck",
    slug: "preventive-medicine",
  },
  {
    id: "6",
    name: "Digestive Health",
    description:
      "Holistic management of digestive wellness including nutrition counseling and gut health optimization.",
    icon: "Apple",
    slug: "digestive-health",
  },
];

export const conditions: Condition[] = [
  {
    id: "1",
    name: "GERD (Acid Reflux)",
    description:
      "Gastroesophageal reflux disease (GERD) is a chronic condition where stomach acid frequently flows back into the esophagus, causing irritation and inflammation.",
    overview:
      "GERD occurs when the lower esophageal sphincter (LES) weakens or relaxes abnormally, allowing stomach acid to flow back into the esophagus. This chronic condition can lead to complications like esophagitis, strictures, or Barrett's esophagus if left untreated. At our clinic, we use advanced diagnostic tools and evidence-based treatments to manage GERD effectively.",
    symptoms: [
      "Heartburn, especially after meals or when lying down",
      "Chest pain or discomfort",
      "Difficulty swallowing (dysphagia)",
      "Regurgitation of food or sour liquid",
      "Sensation of a lump in the throat",
      "Chronic cough or hoarseness",
    ],
    causes: [
      "Hiatal hernia",
      "Obesity",
      "Pregnancy",
      "Smoking",
      "Certain medications",
      "Delayed stomach emptying",
    ],
    diagnosis: [
      "Upper endoscopy (EGD) to visualize esophageal damage",
      "24-hour pH monitoring to measure acid reflux",
      "Esophageal manometry to assess muscle function",
      "Barium swallow X-ray for structural abnormalities",
      "Response trial with proton pump inhibitors",
    ],
    treatment: [
      "Lifestyle modifications (diet, weight management)",
      "Proton pump inhibitors (PPIs) to reduce acid production",
      "H2 receptor blockers for milder symptoms",
      "Antacids for immediate relief",
      "Surgery (fundoplication) in severe refractory cases",
    ],
    prevention: [
      "Maintain healthy weight",
      "Avoid trigger foods (spicy, fatty, acidic foods)",
      "Eat smaller, more frequent meals",
      "Don't lie down immediately after eating",
      "Elevate head of bed by 6-8 inches",
    ],
    whenToSeeDoctor: [
      "Heartburn occurring 2 or more times per week",
      "Difficulty or pain when swallowing",
      "Vomiting blood or material that looks like coffee grounds",
      "Unexplained weight loss",
      "Persistent nausea or vomiting",
      "Chest pain accompanied by shortness of breath",
    ],
    faqs: [
      {
        question: "How is GERD different from occasional heartburn?",
        answer:
          "Occasional heartburn happens 1-2 times per month and is usually triggered by specific foods. GERD is a chronic condition where symptoms occur 2+ times per week and can cause damage to the esophagus if untreated.",
      },
      {
        question: "Can GERD be cured permanently?",
        answer:
          "GERD is a chronic condition, but it can be managed effectively. With proper lifestyle changes, medications, and regular monitoring, most patients achieve excellent symptom control and prevent complications.",
      },
      {
        question: "What foods should I avoid with GERD?",
        answer:
          "Common trigger foods include spicy foods, fatty/fried foods, citrus fruits, tomatoes, chocolate, mint, garlic, onions, caffeine, alcohol, and carbonated beverages. Identifying personal triggers through a food diary is recommended.",
      },
    ],
    relatedServices: ["Gastroenterology Consultation", "Endoscopy"],
    slug: "gerd",
  },
  {
    id: "2",
    name: "Fatty Liver Disease",
    description:
      "Fatty liver disease occurs when fat builds up in the liver. It can lead to liver damage and other serious health problems if not managed properly.",
    overview:
      "Fatty liver disease is characterized by excess fat accumulation in liver cells. There are two main types: Non-Alcoholic Fatty Liver Disease (NAFLD), associated with metabolic syndrome, and Alcoholic Fatty Liver Disease (AFLD). Early detection and lifestyle intervention can reverse the condition before it progresses to cirrhosis or liver failure.",
    symptoms: [
      "Abdominal pain or discomfort, especially in the upper right area",
      "Fatigue and weakness",
      "Unexplained weight loss",
      "Swelling in the abdomen (ascites in advanced cases)",
      "Jaundice (yellowing of skin and eyes) in severe cases",
      "Enlarged liver detected on physical exam",
    ],
    causes: [
      "Alcohol consumption (AFLD)",
      "Obesity and metabolic syndrome",
      "Type 2 diabetes",
      "High triglycerides and cholesterol",
      "Sedentary lifestyle",
      "Rapid weight loss or malnutrition",
    ],
    diagnosis: [
      "Liver function tests (ALT, AST, ALP)",
      "Abdominal ultrasound for fat detection",
      "FibroScan to assess liver stiffness",
      "CT or MRI for detailed liver imaging",
      "Liver biopsy in uncertain or advanced cases",
    ],
    treatment: [
      "Weight loss of 7-10% body weight to reduce liver fat",
      "Alcohol cessation for AFLD",
      "Diabetes and cholesterol control",
      "Vitamin E supplements in selected patients",
      "Medications like pioglitazone or GLP-1 agonists",
      "Liver transplant in end-stage liver disease",
    ],
    prevention: [
      "Maintain healthy weight through diet and exercise",
      "Exercise regularly (150+ minutes per week)",
      "Limit or avoid alcohol consumption",
      "Control blood sugar and cholesterol levels",
      "Eat a balanced diet rich in fruits, vegetables, and whole grains",
    ],
    whenToSeeDoctor: [
      "Persistent abdominal pain or discomfort",
      "Unexplained weight loss or fatigue",
      "Yellowing of skin or eyes (jaundice)",
      "Dark urine or pale stools",
      "Swelling in legs or abdomen",
      "Family history of liver disease",
    ],
    faqs: [
      {
        question: "Can fatty liver disease be reversed?",
        answer:
          "Yes, early-stage fatty liver disease can often be reversed through sustained weight loss (7-10% of body weight), regular exercise, and dietary changes. This is why early detection and lifestyle intervention are crucial.",
      },
      {
        question: "Is fatty liver disease serious?",
        answer:
          "Fatty liver disease can progress from simple steatosis to steatohepatitis (NASH), fibrosis, cirrhosis, and even liver cancer if left untreated. However, with proper management, progression can be halted or reversed in most cases.",
      },
      {
        question: "What diet is best for fatty liver?",
        answer:
          "A Mediterranean-style diet rich in vegetables, fruits, whole grains, lean proteins, and healthy fats (olive oil, omega-3s) is most beneficial. Avoid processed foods, sugary beverages, saturated fats, and refined carbohydrates.",
      },
    ],
    relatedServices: ["Liver Function Tests", "Health Screening"],
    slug: "fatty-liver",
  },
  {
    id: "3",
    name: "Diabetes",
    description:
      "Diabetes is a chronic condition affecting how your body processes blood sugar (glucose), requiring careful lifelong management to prevent complications.",
    overview:
      "Diabetes mellitus is a group of metabolic disorders characterized by elevated blood glucose levels. Type 1 diabetes results from autoimmune destruction of insulin-producing cells, while Type 2 diabetes involves insulin resistance and relative insulin deficiency. Gestational diabetes develops during pregnancy. With modern treatment approaches, diabetes can be well-controlled, enabling patients to live healthy, active lives.",
    symptoms: [
      "Increased thirst and frequent urination",
      "Extreme hunger",
      "Unexplained weight loss",
      "Fatigue and weakness",
      "Blurred vision",
      "Slow-healing sores or frequent infections",
      "Tingling or numbness in hands or feet",
    ],
    causes: [
      "Insulin resistance (Type 2)",
      "Autoimmune destruction of beta cells (Type 1)",
      "Genetic predisposition",
      "Sedentary lifestyle",
      "Obesity",
      "Gestational hormones during pregnancy",
    ],
    diagnosis: [
      "Fasting blood glucose test (≥126 mg/dL indicates diabetes)",
      "HbA1c test (≥6.5% indicates diabetes)",
      "Oral glucose tolerance test (≥200 mg/dL at 2 hours)",
      "Random blood glucose test (≥200 mg/dL with symptoms)",
      "C-peptide test to assess insulin production",
    ],
    treatment: [
      "Insulin therapy for Type 1 and advanced Type 2",
      "Oral medications (metformin, SGLT2 inhibitors, etc.)",
      "GLP-1 receptor agonists for blood sugar and weight management",
      "Dietary changes and carbohydrate counting",
      "Regular physical activity",
      "Continuous blood glucose monitoring",
    ],
    prevention: [
      "Maintain healthy weight through diet and exercise",
      "Eat fiber-rich foods and limit processed carbohydrates",
      "Exercise regularly (150+ minutes per week)",
      "Avoid smoking and limit alcohol",
      "Regular health checkups for early detection",
      "Manage stress and get adequate sleep",
    ],
    whenToSeeDoctor: [
      "Frequent urination, especially at night",
      "Extreme thirst that doesn't quench with water",
      "Unexplained weight loss despite normal/increased eating",
      "Blurred vision or vision changes",
      "Slow-healing cuts or frequent infections",
      "Tingling, numbness, or pain in hands or feet",
    ],
    faqs: [
      {
        question: "Can Type 2 diabetes be reversed?",
        answer:
          "Type 2 diabetes can go into remission with significant lifestyle changes, particularly substantial weight loss through diet and exercise, or bariatric surgery in eligible patients. However, it requires sustained effort and medical supervision.",
      },
      {
        question: "What is the normal range for blood sugar?",
        answer:
          "Fasting blood sugar should be below 100 mg/dL. Post-meal (2 hours) should be below 140 mg/dL. HbA1c should be below 5.7% for normal, 5.7-6.4% for prediabetes, and 6.5% or above indicates diabetes.",
      },
      {
        question: "How often should I check my blood sugar?",
        answer:
          "This depends on your treatment plan. Insulin users typically check 4+ times daily. Those on oral medications may check less frequently. Your doctor will recommend a personalized monitoring schedule based on your needs.",
      },
    ],
    relatedServices: ["Diabetes Management", "Health Screening"],
    slug: "diabetes",
  },
  {
    id: "4",
    name: "IBS (Irritable Bowel Syndrome)",
    description:
      "IBS is a common disorder affecting the large intestine, causing cramping, abdominal pain, bloating, gas, diarrhea, and constipation.",
    overview:
      "Irritable Bowel Syndrome (IBS) is a functional gastrointestinal disorder characterized by chronic abdominal pain and altered bowel habits without structural damage. It affects the large intestine and is classified into IBS-C (constipation-predominant), IBS-D (diarrhea-predominant), and IBS-M (mixed). While IBS doesn't cause permanent intestinal damage, it significantly impacts quality of life and requires comprehensive management.",
    symptoms: [
      "Abdominal pain or cramping, often relieved by bowel movement",
      "Bloating and excessive gas",
      "Diarrhea, constipation, or alternating between both",
      "Mucus in stool",
      "Urgency to have a bowel movement",
      "Feeling of incomplete evacuation",
    ],
    causes: [
      "Abnormal muscle contractions in the intestine",
      "Nervous system abnormalities (brain-gut axis dysfunction)",
      "Severe gastrointestinal infection (post-infectious IBS)",
      "Changes in gut microbiome",
      "Early life stress or trauma",
      "Food sensitivities and intolerances",
    ],
    diagnosis: [
      "Rome IV criteria for symptom-based diagnosis",
      "Exclusion of other diseases (celiac, IBD, colon cancer)",
      "Blood tests to rule out anemia and inflammation",
      "Colonoscopy if red flags present",
      "Stool tests to rule out infection",
      "Breath tests for SIBO if indicated",
    ],
    treatment: [
      "Dietary fiber supplements for IBS-C",
      "Anti-diarrheal medications for IBS-D",
      "Laxatives for constipation management",
      "Antispasmodic agents for abdominal pain",
      "Low FODMAP diet elimination protocol",
      "Stress management and psychological therapy",
    ],
    prevention: [
      "Identify and avoid personal trigger foods",
      "Eat high-fiber diet gradually to avoid bloating",
      "Stay hydrated with adequate water intake",
      "Regular exercise to improve gut motility",
      "Stress reduction techniques (meditation, yoga)",
      "Regular meal patterns and mindful eating",
    ],
    whenToSeeDoctor: [
      "Persistent abdominal pain or cramping",
      "Blood in stool or black, tarry stools",
      "Unintentional weight loss",
      "Nighttime diarrhea or symptoms that wake you",
      "Family history of colon cancer or IBD",
      "Symptoms starting after age 50",
    ],
    faqs: [
      {
        question: "Is IBS a lifelong condition?",
        answer:
          "IBS is typically a chronic condition with periods of flare-ups and remission. While there's no permanent cure, most people can manage symptoms effectively through diet, lifestyle changes, and stress management.",
      },
      {
        question: "What is the low FODMAP diet?",
        answer:
          "The low FODMAP diet eliminates certain fermentable carbohydrates that can trigger IBS symptoms. It involves an elimination phase (2-6 weeks) followed by gradual reintroduction of foods to identify individual triggers. This should be done under dietitian supervision.",
      },
      {
        question: "Can stress worsen IBS symptoms?",
        answer:
          "Yes, stress is a major trigger for IBS symptoms due to the brain-gut connection. The enteric nervous system responds to emotional stress, worsening pain, bloating, and bowel irregularities. Stress management is a key part of IBS treatment.",
      },
    ],
    relatedServices: ["Gastroenterology Consultation", "Nutrition Counseling"],
    slug: "ibs",
  },
  {
    id: "5",
    name: "Hypertension",
    description:
      "High blood pressure (hypertension) is a common condition where the long-term force of blood against artery walls is too high, increasing cardiovascular risk.",
    overview:
      "Hypertension is often called the 'silent killer' because it typically has no noticeable symptoms but significantly increases the risk of heart attack, stroke, kidney disease, and other serious health problems. Blood pressure is considered high when consistently above 130/80 mmHg. Management involves lifestyle modifications and, when necessary, medications to bring blood pressure to target levels.",
    symptoms: [
      "Headaches (in severe cases)",
      "Shortness of breath",
      "Nosebleeds",
      "Dizziness or lightheadedness",
      "Often asymptomatic (no noticeable symptoms)",
      "Chest pain in severe hypertension",
    ],
    causes: [
      "Age-related vascular changes",
      "Family history and genetics",
      "Obesity and overweight",
      "Sedentary lifestyle",
      "High sodium/salt intake",
      "Chronic stress and sleep deprivation",
    ],
    diagnosis: [
      "Office blood pressure measurement (proper technique)",
      "24-hour ambulatory blood pressure monitoring",
      "Blood tests for kidney function and electrolytes",
      "ECG to check for heart strain",
      "Echocardiogram to assess heart structure",
      "Urinalysis for kidney damage markers",
    ],
    treatment: [
      "Lifestyle changes (diet, exercise, weight loss)",
      "ACE inhibitors to relax blood vessels",
      "Beta blockers to reduce heart rate and force",
      "Diuretics to reduce fluid retention",
      "Calcium channel blockers to relax vessels",
      "Combination therapy for resistant hypertension",
    ],
    prevention: [
      "Reduce sodium intake to less than 2,300 mg daily",
      "Exercise regularly (150+ minutes per week)",
      "Maintain healthy weight (BMI 18.5-24.9)",
      "Limit alcohol consumption",
      "Manage stress through relaxation techniques",
      "Get adequate sleep (7-9 hours nightly)",
    ],
    whenToSeeDoctor: [
      "Blood pressure consistently above 130/80 mmHg",
      "Headaches, dizziness, or vision changes",
      "Chest pain or pressure",
      "Shortness of breath with activity",
      "Nosebleeds or facial flushing",
      "Any concerns about cardiovascular risk",
    ],
    faqs: [
      {
        question: "What is considered normal blood pressure?",
        answer:
          "Normal blood pressure is below 120/80 mmHg. Elevated is 120-129/<80. Stage 1 hypertension is 130-139/80-89. Stage 2 is 140+/90+. Hypertensive crisis is above 180/120 and requires immediate medical attention.",
      },
      {
        question: "Can hypertension be cured?",
        answer:
          "Hypertension is typically a lifelong condition, but it can be effectively controlled. Some cases of secondary hypertension (caused by underlying conditions) can be cured by treating the root cause. Primary hypertension requires ongoing management.",
      },
      {
        question: "What lifestyle changes help lower blood pressure?",
        answer:
          "Key changes include: following the DASH diet (rich in fruits, vegetables, low-fat dairy), reducing sodium to under 2,300mg, regular aerobic exercise, maintaining healthy weight, limiting alcohol, quitting smoking, and managing stress.",
      },
    ],
    relatedServices: ["Health Screening", "General Medicine"],
    slug: "hypertension",
  },
  {
    id: "6",
    name: "Thyroid Disorders",
    description:
      "Thyroid disorders occur when the thyroid gland doesn't produce the right amount of hormones, affecting metabolism, energy, and overall health.",
    overview:
      "The thyroid gland produces hormones that regulate metabolism, energy, mood, and many bodily functions. Disorders include hypothyroidism (underactive thyroid), hyperthyroidism (overactive thyroid), thyroid nodules, and thyroid cancer. These conditions are more common in women and can affect people of all ages. Proper diagnosis and treatment are essential for maintaining hormonal balance and quality of life.",
    symptoms: [
      "Fatigue and low energy",
      "Weight changes (gain in hypothyroidism, loss in hyperthyroidism)",
      "Mood swings, depression, or anxiety",
      "Hair loss and dry skin",
      "Temperature sensitivity (feeling cold or hot)",
      "Changes in heart rate and bowel habits",
    ],
    causes: [
      "Autoimmune disease (Hashimoto's or Graves' disease)",
      "Thyroid inflammation (thyroiditis)",
      "Medications (e.g., lithium, amiodarone)",
      "Iodine imbalance (deficiency or excess)",
      "Genetic predisposition",
      "Radiation exposure to the neck",
    ],
    diagnosis: [
      "TSH (thyroid stimulating hormone) blood test",
      "Free T4 and Free T3 hormone levels",
      "Thyroid antibody tests (TPO, thyroglobulin)",
      "Thyroid ultrasound for nodules or enlargement",
      "Radioactive iodine uptake test",
      "Fine needle aspiration biopsy for nodules",
    ],
    treatment: [
      "Thyroid hormone replacement (levothyroxine) for hypothyroidism",
      "Anti-thyroid medications for hyperthyroidism",
      "Radioactive iodine therapy for overactive thyroid",
      "Surgery (thyroidectomy) for nodules or cancer",
      "Beta blockers for symptom control in hyperthyroidism",
      "Lifelong monitoring and dose adjustments",
    ],
    prevention: [
      "Regular thyroid screening, especially with risk factors",
      "Iodine-rich diet (iodized salt, seafood, dairy)",
      "Avoid smoking (increases risk of thyroid eye disease)",
      "Manage stress levels",
      "Regular medical checkups with thyroid function tests",
      "Protect neck from unnecessary radiation exposure",
    ],
    whenToSeeDoctor: [
      "Persistent fatigue or low energy unexplained by sleep",
      "Unexplained weight gain or loss",
      "Mood changes, depression, or anxiety",
      "Hair loss, dry skin, or brittle nails",
      "Feeling unusually cold or hot",
      "Palpitations, tremors, or irregular heartbeat",
    ],
    faqs: [
      {
        question: "What is the difference between hypothyroidism and hyperthyroidism?",
        answer:
          "Hypothyroidism means your thyroid is underactive and doesn't produce enough hormones, causing fatigue, weight gain, and cold sensitivity. Hyperthyroidism means your thyroid is overactive, producing excess hormones, causing weight loss, rapid heartbeat, and heat intolerance.",
      },
      {
        question: "Do I need to take thyroid medication forever?",
        answer:
          "For hypothyroidism, thyroid hormone replacement is typically lifelong since the thyroid gland cannot regenerate. For hyperthyroidism, treatment duration varies - some patients achieve remission, while others may need ongoing medication or definitive treatment like radioactive iodine.",
      },
      {
        question: "Can thyroid disorders affect pregnancy?",
        answer:
          "Yes, thyroid hormones are crucial for fetal development. Both hypothyroidism and hyperthyroidism during pregnancy can lead to complications including preterm birth, low birth weight, and preeclampsia. Proper thyroid management before and during pregnancy is essential.",
      },
    ],
    relatedServices: ["Health Screening", "General Medicine"],
    slug: "thyroid",
  },
];

export const services: Service[] = [
  {
    id: "1",
    name: "Gastroenterology Consultation",
    description:
      "Expert consultation for digestive system disorders including GERD, IBS, liver diseases, and colorectal issues.",
    icon: "Stomach",
    slug: "gastroenterology-consultation",
  },
  {
    id: "2",
    name: "Diabetes Management",
    description:
      "Comprehensive diabetes care including Type 1, Type 2, and gestational diabetes management.",
    icon: "HeartPulse",
    slug: "diabetes-management",
  },
  {
    id: "3",
    name: "Liver Function Tests",
    description:
      "Advanced liver function testing and interpretation for early detection of liver diseases.",
    icon: "Activity",
    slug: "liver-function-tests",
  },
  {
    id: "4",
    name: "Endoscopy",
    description:
      "Upper GI endoscopy and colonoscopy for diagnosis and treatment of gastrointestinal conditions.",
    icon: "Scan",
    slug: "endoscopy",
  },
  {
    id: "5",
    name: "Health Screening",
    description:
      "Comprehensive health checkup packages for early detection and prevention of diseases.",
    icon: "ClipboardList",
    slug: "health-screening",
  },
  {
    id: "6",
    name: "Nutrition Counseling",
    description:
      "Personalized dietary guidance for managing diabetes, digestive disorders, and liver diseases.",
    icon: "Apple",
    slug: "nutrition-counseling",
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Understanding Fatty Liver Disease: Causes, Symptoms, and Treatment",
    slug: "understanding-fatty-liver-disease",
    excerpt:
      "Fatty liver disease is becoming increasingly common. Learn about its causes, symptoms, and the latest treatment approaches.",
    content: `
# Understanding Fatty Liver Disease

Fatty liver disease is a condition where excess fat builds up in the liver. It's one of the most common liver disorders today, affecting millions worldwide.

## What is Fatty Liver Disease?

Fatty liver disease occurs when fat makes up at least 5-10% of the liver's weight. There are two main types:

### Alcoholic Fatty Liver Disease
Caused by heavy alcohol consumption, this type can lead to alcoholic hepatitis and cirrhosis.

### Non-Alcoholic Fatty Liver Disease (NAFLD)
This occurs in people who drink little or no alcohol and is often associated with obesity and metabolic syndrome.

## Symptoms

Early stages often have no symptoms. As the disease progresses, you may experience:
- Fatigue and weakness
- Abdominal pain, especially in the upper right area
- Unexplained weight loss
- Jaundice (yellowing of skin and eyes)

## Diagnosis

Diagnosis typically involves:
- Blood tests to check liver enzymes
- Imaging tests (ultrasound, CT, MRI)
- Liver biopsy in some cases

## Treatment and Management

The primary treatment for fatty liver disease involves lifestyle changes:
1. **Weight Loss**: Losing 7-10% of body weight can significantly reduce liver fat
2. **Dietary Changes**: Reduce saturated fats and sugars, increase fiber
3. **Exercise**: At least 150 minutes of moderate exercise per week
4. **Alcohol Cessation**: Complete avoidance of alcohol
5. **Medications**: In some cases, vitamin E or pioglitazone may be prescribed

## Prevention

- Maintain a healthy weight
- Eat a balanced diet rich in fruits, vegetables, and whole grains
- Exercise regularly
- Control blood sugar and cholesterol levels
- Limit alcohol consumption

When to See a Doctor

If you experience persistent abdominal pain, unexplained weight loss, or jaundice, consult a healthcare professional immediately.

Early detection and intervention can prevent progression to more serious liver conditions.
    `,
    category: "Digestive Health",
    image: "/placeholders/fatty-liver.jpg",
    author: "Dr. Md. Moniruzzaman Sarkar",
    publishedAt: "2024-12-15",
    readTime: "6 min read",
  },
  {
    id: "2",
    title: "Managing Diabetes: A Comprehensive Guide for Patients",
    slug: "managing-diabetes-comprehensive-guide",
    excerpt:
      "Learn effective strategies for managing diabetes, from dietary changes to medication management and lifestyle modifications.",
    content: `
# Managing Diabetes: A Comprehensive Guide

Diabetes is a chronic condition that affects how your body processes blood sugar. Proper management is crucial for preventing complications and maintaining quality of life.

## Understanding Diabetes

There are several types of diabetes:
- **Type 1 Diabetes**: Autoimmune condition where the body produces little or no insulin
- **Type 2 Diabetes**: Most common type, where the body doesn't use insulin effectively
- **Gestational Diabetes**: Develops during pregnancy
- **Prediabetes**: Blood sugar levels higher than normal but not yet diabetes

## The ABCDs of Diabetes Management

- **A (A1C)**: Keep below 7% for most adults
- **B (Blood Pressure)**: Target below 140/90 mmHg
- **C (Cholesterol)**: LDL below 100 mg/dL
- **D (Diabetes Medications)**: Take as prescribed
- **S (Smoking Cessation)**: Quit smoking

## Lifestyle Modifications

### Diet
- Focus on whole grains, lean proteins, and vegetables
- Limit processed foods and sugary drinks
- Monitor carbohydrate intake
- Eat regular, balanced meals

### Exercise
- Aim for 150 minutes of moderate activity per week
- Include both aerobic and strength training
- Check blood sugar before and after exercise

### Weight Management
- Maintain a healthy BMI
- Even 5-10% weight loss makes a significant difference

## Medication Management

Various medications help control blood sugar:
- Metformin (first-line treatment for Type 2)
- Insulin therapy
- SGLT2 inhibitors
- GLP-1 receptor agonists

## Monitoring

Regular monitoring includes:
- Daily blood glucose checks
- Quarterly A1C tests
- Annual eye exams
- Kidney function tests
- Foot examinations

## Complications to Watch For

Uncontrolled diabetes can lead to:
- Heart disease and stroke
- Kidney damage
- Nerve damage
- Eye damage
- Foot problems

Always consult your healthcare provider for personalized management strategies.
    `,
    category: "Diabetes",
    image: "/placeholders/diabetes.jpg",
    author: "Dr. Md. Moniruzzaman Sarkar",
    publishedAt: "2024-11-28",
    readTime: "8 min read",
  },
  {
    id: "3",
    title: "10 Foods That Naturally Support Digestive Health",
    slug: "foods-that-support-digestive-health",
    excerpt:
      "Discover the top 10 foods that can help improve your digestive health and reduce symptoms of common gut disorders.",
    content: `
# 10 Foods That Naturally Support Digestive Health

A healthy digestive system is essential for overall well-being. Here are 10 foods that can help keep your gut healthy.

## 1. Yogurt

Rich in probiotics, yogurt helps maintain a healthy balance of gut bacteria. Choose plain, unsweetened varieties for the best benefits.

## 2. Fiber-Rich Whole Grains

Whole grains like oats, quinoa, and brown rice provide fiber that feeds beneficial gut bacteria and promotes regular bowel movements.

## 3. Ginger

Ginger has anti-inflammatory properties and can help ease digestion, reduce bloating, and alleviate nausea.

## 4. Leafy Greens

Spinach, kale, and other leafy greens are rich in fiber and specific nutrients that feed beneficial gut bacteria.

## 5. Bananas

Bananas are gentle on the stomach and help restore normal bowel function. They're also rich in prebiotics.

## 6. Kimchi and Sauerkraut

These fermented foods are packed with probiotics and can help improve gut health and boost immunity.

## 7. Peppermint

Peppermint can help relieve symptoms of IBS, including bloating and stomach pain.

## 8. Avocado

Avocados are rich in fiber and healthy fats that support healthy digestion.

## 9. Chia Seeds

High in fiber, chia seeds promote healthy gut bacteria and help with regular bowel movements.

## 10. Bone Broth

Rich in collagen and amino acids, bone broth can help heal the gut lining and support overall digestive health.

## Tips for Better Digestion

- Eat slowly and chew thoroughly
- Stay hydrated
- Exercise regularly
- Manage stress
- Get enough sleep
    `,
    category: "Nutrition",
    image: "/placeholders/digestive-health.jpg",
    author: "Dr. Md. Moniruzzaman Sarkar",
    publishedAt: "2024-11-10",
    readTime: "5 min read",
  },
  {
    id: "4",
    title: "When to See a Doctor for Heartburn: Warning Signs You Shouldn't Ignore",
    slug: "when-to-see-doctor-for-heartburn",
    excerpt:
      "Occasional heartburn is common, but persistent symptoms may indicate GERD or other serious conditions. Know when to seek medical help.",
    content: `
# When to See a Doctor for Heartburn

Heartburn is a common condition, but persistent or severe symptoms can be a sign of something more serious. Here's what you need to know.

## What is Heartburn?

Heartburn is a burning sensation in your chest caused by stomach acid flowing back into your esophagus. Occasional heartburn is common and often triggered by certain foods or lying down after eating.

## Occasional vs. Chronic Heartburn

### Occasional Heartburn
- Happens 1-2 times per month
- Lasts a few hours
- Relieved by antacids
- Triggered by specific foods or activities

### Chronic Heartburn (GERD)
- Occurs 2+ times per week
- Lasts longer
- May require prescription medication
- Affects daily activities

## Warning Signs That Require Medical Attention

Seek immediate medical care if you experience:
- Severe chest pain or pressure
- Difficulty breathing
- Pain spreading to jaw or arm
- Vomiting blood or material that looks like coffee grounds
- Difficulty or pain when swallowing
- Unexplained weight loss
- Persistent nausea or vomiting

## Diagnosis

Your doctor may recommend:
- Upper endoscopy
- pH monitoring
- Esophageal manometry
- Barium swallow X-ray

## Treatment Options

Treatment depends on severity:
- Lifestyle changes (diet, weight management)
- Over-the-counter antacids
- H2 receptor blockers
- Proton pump inhibitors
- Surgery for severe cases

## Prevention Tips

- Avoid trigger foods (spicy, fatty, acidic foods)
- Eat smaller, more frequent meals
- Don't lie down after eating
- Elevate your head while sleeping
- Maintain a healthy weight
- Quit smoking

If you experience heartburn more than twice a week, it's important to see a doctor to rule out GERD or other serious conditions.
    `,
    category: "Digestive Health",
    image: "/placeholders/heartburn.jpg",
    author: "Dr. Md. Moniruzzaman Sarkar",
    publishedAt: "2024-10-20",
    readTime: "7 min read",
  },
  {
    id: "5",
    title: "The Connection Between Gut Health and Overall Wellness",
    slug: "gut-health-and-overall-wellness",
    excerpt:
      "Recent research shows strong links between gut health and overall health. Learn how your gut microbiome affects more than just digestion.",
    content: `
# The Connection Between Gut Health and Overall Wellness

The gut microbiome, consisting of trillions of bacteria and other microorganisms, plays a crucial role in your overall health.

## What is the Gut Microbiome?

Your gut microbiome is a complex community of bacteria, viruses, fungi, and other microorganisms living in your digestive tract.

## Gut Health and the Immune System

- 70-80% of immune cells are in the gut
- A healthy gut microbiome trains your immune system
- Dysbiosis can lead to autoimmune conditions

## Gut-Brain Connection

The gut and brain communicate through the vagus nerve and through chemical signals:
- Serotonin is primarily produced in the gut
- Gut bacteria produce neurotransmitters
- Stress can affect gut health and vice versa

## Signs of an Unhealthy Gut

- Digestive issues (bloating, gas, constipation)
- Fatigue
- Sleep disturbances
- Skin conditions (acne, eczema)
- Food intolerances
- Mood changes

## How to Improve Gut Health

1. **Eat a Diverse Diet**: Include many different types of foods
2. **Eat Fermented Foods**: Yogurt, kefir, kimchi, sauerkraut
3. **Prebiotic Foods**: Garlic, onions, asparagus, bananas
4. **Limit Artificial Sweeteners**: They can negatively affect gut bacteria
5. **Take Probiotics**: If recommended by your doctor
6. **Manage Stress**: Through meditation, exercise, or therapy

## When to See a Doctor

If you have persistent digestive issues, unexplained weight changes, or chronic fatigue, consult a gastroenterologist.

A healthy gut is the foundation of overall wellness.
    `,
    category: "Patient Education",
    image: "/placeholders/gut-health.jpg",
    author: "Dr. Md. Moniruzzaman Sarkar",
    publishedAt: "2024-09-15",
    readTime: "6 min read",
  },
  {
    id: "6",
    title: "Understanding Hepatitis: Types, Prevention, and Treatment",
    slug: "understanding-hepatitis",
    excerpt:
      "Hepatitis is inflammation of the liver. Learn about the different types, how they spread, and current treatment options.",
    content: `
# Understanding Hepatitis

Hepatitis is inflammation of the liver, which can be caused by various factors including viruses, alcohol, and medications.

## Types of Hepatitis

### Hepatitis A
- Spread through contaminated food and water
- Usually resolves on its own
- Vaccine available

### Hepatitis B
- Spread through blood and bodily fluids
- Can become chronic
- Vaccine available

### Hepatitis C
- Spread primarily through blood
- Often becomes chronic
- No vaccine available
- Highly curable with modern treatments

### Hepatitis D
- Only occurs in people with Hepatitis B
- Spread through blood and bodily fluids
- Vaccine available through Hepatitis B vaccine

### Hepatitis E
- Spread through contaminated water
- Usually acute and self-limiting
- No vaccine available in most countries

## Symptoms

- Jaundice (yellowing of skin and eyes)
- Dark urine
- Fatigue
- Abdominal pain
- Nausea and vomiting
- Loss of appetite

## Prevention

- Get vaccinated (Hep A and B)
- Practice safe sex
- Don't share needles
- Avoid alcohol if you have liver disease
- Practice good hygiene
- Be cautious with tattoos and piercings

## Treatment

Treatment depends on the type:
- Hepatitis A: Usually supportive care
- Hepatitis B: Antiviral medications
- Hepatitis C: Direct-acting antivirals (highly effective)
- Hepatitis D: Pegylated interferon

## When to See a Doctor

If you experience symptoms of hepatitis or believe you've been exposed, see a doctor immediately for testing and treatment.
    `,
    category: "Medicine",
    image: "/placeholders/hepatitis.jpg",
    author: "Dr. Md. Moniruzzaman Sarkar",
    publishedAt: "2024-08-05",
    readTime: "7 min read",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Ahmed Rahman",
    designation: "Software Engineer",
    content:
      "Dr. Moniruzzaman Sarkar is an excellent doctor. His diagnosis was accurate and his treatment plan was very effective. I highly recommend him for any gastrointestinal issues.",
    rating: 5,
    date: "2024-12-01",
  },
  {
    id: "2",
    name: "Fatima Begum",
    designation: "Teacher",
    content:
      "I was suffering from chronic GERD for years. After visiting Dr. Sarkar, my condition has improved significantly. His approach is very patient-friendly and professional.",
    rating: 5,
    date: "2024-11-15",
  },
  {
    id: "3",
    name: "Mohammad Karim",
    designation: "Businessman",
    content:
      "Dr. Sarkar managed my diabetes very well. His dietary advice and medication adjustments have helped me control my blood sugar effectively. Very satisfied with his care.",
    rating: 5,
    date: "2024-10-20",
  },
  {
    id: "4",
    name: "Nasreen Akter",
    designation: "Housewife",
    content:
      "The way Dr. Sarkar explains medical conditions is very clear and reassuring. He takes time to listen and answer all questions. A true professional.",
    rating: 5,
    date: "2024-09-10",
  },
  {
    id: "5",
    name: "Rafiq Islam",
    designation: "Retired Officer",
    content:
      "I have been a patient of Dr. Sarkar for 5 years. His expertise in liver diseases helped me recover from fatty liver. I'm grateful for his care and dedication.",
    rating: 5,
    date: "2024-08-25",
  },
];

export const faqs: Faq[] = [
  {
    id: "1",
    question: "What are the visiting hours of Dr. Moniruzzaman Sarkar?",
    answer:
      "Dr. Sarkar's visiting hours are Saturday to Thursday, 5:00 PM to 9:00 PM at his chamber in Government Medical College & Hospital. He also visits Popular Diagnostic Center on Sunday, Tuesday, and Thursday from 4:00 PM to 8:00 PM.",
    category: "Appointment",
  },
  {
    id: "2",
    question: "How can I book an appointment?",
    answer:
      "You can book an appointment by calling +8801700000000, sending a WhatsApp message, or using the online appointment form on this website. We recommend booking at least 2-3 days in advance.",
    category: "Appointment",
  },
  {
    id: "3",
    question: "What should I bring to my first consultation?",
    answer:
      "Please bring any previous medical reports, test results, a list of current medications, and your ID card. If you have referral letters from other doctors, please bring those as well.",
    category: "Consultation",
  },
  {
    id: "4",
    question: "Does Dr. Sarkar treat diabetes patients?",
    answer:
      "Yes, Dr. Sarkar is a certified Diabetologist from Yale University, USA, with extensive experience in managing all types of diabetes including Type 1, Type 2, and gestational diabetes.",
    category: "Treatment",
  },
  {
    id: "5",
    question: "Is endoscopy available at the chamber?",
    answer:
      "Yes, upper GI endoscopy and colonoscopy services are available. The procedures are performed with modern equipment ensuring patient comfort and accurate diagnosis.",
    category: "Services",
  },
  {
    id: "6",
    question: "What is the consultation fee?",
    answer:
      "The consultation fee varies depending on the type of consultation and chamber location. Please contact the chamber directly for current fee information.",
    category: "Fee",
  },
  {
    id: "7",
    question: "Does Dr. Sarkar accept insurance?",
    answer:
      "We accept most major insurance providers. Please contact our office with your insurance details to verify coverage before your visit.",
    category: "Insurance",
  },
  {
    id: "8",
    question: "Can I get a second opinion from Dr. Sarkar?",
    answer:
      "Absolutely. Dr. Sarkar is happy to review your previous medical reports and provide a second opinion. Please bring all relevant documents to your appointment.",
    category: "Consultation",
  },
];

export const galleryItems: GalleryItem[] = [
  {
    id: "1",
    title: "Chamber at Government Medical College",
    image: "/placeholders/chamber-1.jpg",
    category: "Chamber",
  },
  {
    id: "2",
    title: "Consultation Room",
    image: "/placeholders/chamber-2.jpg",
    category: "Chamber",
  },
  {
    id: "3",
    title: "Medical Conference 2024",
    image: "/placeholders/conference-1.jpg",
    category: "Conference",
  },
  {
    id: "4",
    title: "Award Ceremony",
    image: "/placeholders/award-1.jpg",
    category: "Awards",
  },
  {
    id: "5",
    title: "Teaching Session",
    image: "/placeholders/teaching-1.jpg",
    category: "Teaching",
  },
  {
    id: "6",
    title: "Medical Camp",
    image: "/placeholders/camp-1.jpg",
    category: "Camp",
  },
];

export const consultationProcess = [
  {
    id: "1",
    title: "Book Appointment",
    description:
      "Schedule your appointment online or by phone. Choose your preferred time and chamber location.",
    icon: "Calendar",
  },
  {
    id: "2",
    title: "Visit Chamber",
    description:
      "Arrive at the chamber with your medical reports and ID. Our staff will assist you with check-in.",
    icon: "MapPin",
  },
  {
    id: "3",
    title: "Consultation",
    description:
      "Dr. Sarkar will review your history, perform examination, and discuss your concerns in detail.",
    icon: "Stethoscope",
  },
  {
    id: "4",
    title: "Diagnosis",
    description:
      "Based on symptoms and tests, Dr. Sarkar will provide a clear diagnosis explaining your condition.",
    icon: "ClipboardList",
  },
  {
    id: "5",
    title: "Treatment Plan",
    description:
      "You'll receive a personalized treatment plan with medications, diet advice, and follow-up schedule.",
    icon: "FileText",
  },
  {
    id: "6",
    title: "Follow-up",
    description:
      "Regular follow-up visits ensure your progress and allow adjustments to your treatment plan.",
    icon: "RefreshCw",
  },
];

export const trustCards = [
  {
    id: "1",
    title: "Government Faculty",
    description:
      "Serving as Assistant Professor at Government Medical College & Hospital, bringing academic excellence to clinical practice.",
    icon: "GraduationCap",
  },
  {
    id: "2",
    title: "Evidence-Based Treatment",
    description:
      "All treatments are based on the latest medical research and international guidelines for optimal outcomes.",
    icon: "FileSearch",
  },
  {
    id: "3",
    title: "Modern Diagnosis",
    description:
      "Utilizing state-of-the-art diagnostic equipment and techniques for accurate and early diagnosis.",
    icon: "Microscope",
  },
  {
    id: "4",
    title: "Patient-Centered Care",
    description:
      "Every treatment plan is personalized to each patient's unique needs, preferences, and circumstances.",
    icon: "HeartHandshake",
  },
  {
    id: "5",
    title: "Advanced Gastroenterology",
    description:
      "Specialized training in gastroenterology from prestigious institutions including Yale University.",
    icon: "Activity",
  },
];

export { SITE_CONFIG } from "@/constants";
