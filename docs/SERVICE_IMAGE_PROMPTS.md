# Service Image Prompts (ChatGPT)

Use these prompts to generate realistic department photos.

## How to generate

1. In ChatGPT image mode, use prompt style:
   - "Create a photorealistic hospital department image..."
2. Export each image using the exact filename below.
3. Save files into `generated/service-photos/`.
4. Run:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\import-service-images.ps1
```

5. Deploy:

```powershell
vercel --prod --yes
```

## File naming map

- `general-consultation.png`
- `family-medicine.png`
- `pediatrics.png`
- `antenatal-care.png`
- `postnatal-care.png`
- `family-planning.png`
- `vaccination.png`
- `laboratory-services.png`
- `pharmacy.png`
- `hiv-testing-counselling.png`
- `diabetes-clinic.png`
- `hypertension-clinic.png`
- `minor-surgery.png`
- `wound-care.png`
- `emergency-care.png`
- `medical-checkups.png`
- `occupational-health.png`
- `nutrition-counselling.png`

## Prompt pack

### general-consultation
Create a photorealistic general consultation room in a modern Kenyan medical center, doctor speaking to a patient across a desk, clean white and teal design, natural daylight, professional healthcare atmosphere, ultra-detailed, 16:10.

### family-medicine
Create a photorealistic family medicine clinic scene with adults and a child being attended by a clinician, warm and clean interior, welcoming healthcare environment, realistic medical equipment, 16:10.

### pediatrics
Create a photorealistic pediatric consultation room, child-friendly decor, pediatric nurse and parent with child, clean colorful but professional setting, modern clinic quality, 16:10.

### antenatal-care
Create a photorealistic antenatal care room, pregnant mother in routine checkup with clinician, fetal monitoring tools visible, calm reassuring hospital environment, 16:10.

### postnatal-care
Create a photorealistic postnatal care scene with mother and newborn receiving follow-up care from nurse, clean maternity ward, soft lighting, compassionate atmosphere, 16:10.

### family-planning
Create a photorealistic private family planning counselling office in a hospital, clinician discussing options with adult patient, respectful confidential environment, modern medical setting, 16:10.

### vaccination
Create a photorealistic vaccination clinic setup, nurse preparing vaccine while reassuring patient, sterile procedure station, bright and clean healthcare interior, 16:10.

### laboratory-services
Create a photorealistic hospital laboratory interior with analyzers, microscopes, labeled samples, technicians in PPE, organized and sterile diagnostic workspace, 16:10.

### pharmacy
Create a photorealistic hospital pharmacy with dispensing counter, pharmacist handing medication to patient, organized medicine shelves, modern clinic branding, 16:10.

### hiv-testing-counselling
Create a photorealistic confidential HIV testing and counselling room, private consultation setup, empathetic clinician-patient interaction, clinical and respectful environment, 16:10.

### diabetes-clinic
Create a photorealistic diabetes clinic room with glucose monitoring tools, clinician reviewing patient chart and readings, clean modern healthcare setting, 16:10.

### hypertension-clinic
Create a photorealistic hypertension clinic consultation with blood pressure monitor in use, clinician explaining results, calm and professional room, 16:10.

### minor-surgery
Create a photorealistic minor surgery room in a private clinic, sterile instruments prepared, medical team in protective gear, bright procedure lighting, 16:10.

### wound-care
Create a photorealistic wound care treatment room, nurse changing sterile dressing on patient arm, clean supplies and antiseptic setup visible, 16:10.

### emergency-care
Create a photorealistic emergency treatment bay in a modern hospital, emergency clinician and nurse stabilizing patient, monitors and oxygen visible, urgent but professional scene, 16:10.

### medical-checkups
Create a photorealistic preventive health checkup station in a clinic, patient undergoing routine exam, digital vitals monitor and screening tools visible, 16:10.

### occupational-health
Create a photorealistic occupational health assessment room, clinician doing workplace fitness medical exam, clipboard and screening setup, clean clinic environment, 16:10.

### nutrition-counselling
Create a photorealistic nutrition counselling room in a clinic, dietitian discussing meal plan with patient, food guide visuals and laptop on desk, warm professional setting, 16:10.
