# RPA Technology White Paper
## Recombinase Polymerase Amplification: Principles, Advantages, and Applications

**Document Version:** 1.0  
**Company:** Dangkang Bio (当康基因)  
**Date:** January 2025

---

## 1. Introduction

### 1.1 What is RPA?

Recombinase Polymerase Amplification (RPA) is a cutting-edge **isothermal nucleic acid amplification technology** that enables rapid, sensitive, and specific detection of DNA and RNA targets without the need for complex thermal cycling equipment. Unlike traditional Polymerase Chain Reaction (PCR), RPA operates at constant low temperatures (37-42°C), making it ideally suited for point-of-care diagnostics, field testing, and resource-limited settings.

RPA represents a paradigm shift in molecular diagnostics, combining the specificity of PCR with the simplicity and accessibility of isothermal amplification methods.

### 1.2 Historical Background

RPA technology was first developed in **2006** by Dr. Otto Piepenburg and colleagues at the University of Bristol. The technology was subsequently commercialized by **TwistDx Ltd** (later acquired by Alere, now part of Abbott). The original invention leveraged the natural DNA repair mechanisms found in bacteriophage T4, adapting recombination proteins for nucleic acid amplification purposes.

Since its introduction, RPA has gained widespread adoption across multiple industries including clinical diagnostics, veterinary testing, food safety, environmental monitoring, and agricultural biosecurity.

### 1.3 Core Principle

The fundamental principle of RPA relies on the coordinated action of three key enzyme components working together at a constant temperature of **37-42°C**:

- **Recombinase** (T4 UvsX) binds to oligonucleotide primers, forming nucleoprotein filaments
- **Single-stranded DNA binding proteins** (T4 gp32) stabilize displaced DNA strands
- **Strand-displacing DNA polymerase** (Bacillus subtilis DNA polymerase I) extends primers to synthesize new DNA strands

This elegant biochemical system enables exponential DNA amplification without thermal denaturation, fundamentally distinguishing RPA from PCR-based methods.

---

## 2. Technical Principles

### 2.1 The RPA Enzyme System

RPA employs a sophisticated multi-enzyme cocktail that mimics natural DNA recombination and repair processes:

#### 2.1.1 Recombinase (T4 UvsX)

The T4 bacteriophage UvsX protein is the key recombinase enzyme in RPA. This enzyme:
- Binds specifically to oligonucleotide primers (30-35 nucleotides in length)
- Forms nucleoprotein filaments capable of searching for homologous sequences
- Catalyzes strand invasion into double-stranded DNA targets
- Enables primer targeting without thermal denaturation

#### 2.1.2 Single-Stranded DNA Binding Protein (T4 gp32)

The gp32 protein from bacteriophage T4 plays a critical supporting role:
- Binds cooperatively to single-stranded DNA
- Prevents formation of secondary structures
- Stabilizes DNA strands displaced during strand invasion
- Enhances overall reaction efficiency and speed

#### 2.1.3 Strand-Displacing DNA Polymerase (Bsu)

The Bacillus subtilis DNA polymerase I (Bsu) provides DNA synthesis capability:
- Extends primers in the 5' to 3' direction
- Displaces competing DNA strands during synthesis
- Maintains activity at isothermal temperatures (37-42°C)
- Ensures exponential amplification kinetics

#### 2.1.4 Accessory Proteins

Additional components optimize reaction performance:
- **Crowding agents** (e.g., polyethylene glycol) increase effective concentrations
- **Buffer components** maintain optimal pH and ionic strength
- **Nucleotide triphosphates** provide building blocks for DNA synthesis
- **Magnesium ions** serve as essential cofactors for enzyme activity

### 2.2 Amplification Mechanism

The RPA reaction proceeds through a carefully orchestrated four-stage mechanism:

#### Stage 1: Nucleoprotein Filament Formation

```
Primer + Recombinase → Nucleoprotein Filament
```

Free primers in solution bind to UvsX recombinase, forming nucleoprotein filaments. Each filament contains one recombinase molecule bound to a single primer. The primer-binding domain of UvsX specifically recognizes and binds primers of 30-35 nucleotides.

#### Stage 2: Homology Search and Strand Invasion

```
Nucleoprotein Filament + dsDNA → D-loop Structure
```

The nucleoprotein filament actively scans double-stranded DNA molecules, searching for sequences homologous to the bound primer. Upon finding a match, the recombinase catalyzes strand invasion, displacing the non-complementary strand and forming a characteristic D-loop structure. This process occurs through homologous recombination mechanisms.

#### Stage 3: Strand Displacement

```
D-loop → Primer Extension Complex
```

Single-stranded DNA binding proteins (gp32) immediately coat the displaced non-template strand, preventing reannealing and stabilizing the opened duplex. The strand-displacing polymerase (Bsu) is recruited to the 3' hydroxyl end of the invaded primer.

#### Stage 4: Primer Extension and Amplification

```
Primer Extension Complex → New DNA Strands → Exponential Amplification
```

The DNA polymerase extends the primer in the 5' to 3' direction, synthesizing a new DNA strand complementary to the target sequence. Because the displaced strand is stabilized by SSB proteins, it becomes available as a template for additional primer binding, enabling **exponential amplification kinetics**.

The entire cycle repeats continuously at isothermal conditions, with doubling times of approximately 5-10 minutes under optimal conditions. This results in detectable product accumulation within 5-20 minutes.

### 2.3 Reaction Kinetics

RPA demonstrates excellent amplification efficiency:
- **Detection time:** 5-20 minutes (typically 10-15 minutes)
- **Amplification factor:** 10^10-10^12 copies per reaction
- **Endpoint detection:** Can achieve single molecule sensitivity
- **Reaction vessels:** Standard microcentrifuge tubes, lateral flow strips, or specialized cartridges

---

## 3. Key Advantages Over PCR and LAMP

RPA technology offers significant advantages compared to both conventional PCR and other isothermal methods like LAMP.

### 3.1 Temperature Requirements

| Parameter | RPA | PCR | LAMP |
|-----------|-----|-----|------|
| **Optimal Temperature** | 37-42°C | 95°C (denaturation) + 55-65°C (annealing) + 72°C (extension) | 60-65°C |
| **Equipment** | Simple incubator or body heat | Thermal cycler required | Water bath or heat block |
| **Power Requirement** | Minimal | High | Moderate |

RPA operates at temperatures achievable with simple equipment, body heat, or inexpensive battery-powered devices. This eliminates the need for expensive thermal cyclers and reliable electrical infrastructure.

### 3.2 Reaction Speed

| Method | Typical Time | Rapid Protocols |
|--------|-------------|-----------------|
| **RPA** | 5-20 minutes | 5-10 minutes (optimized conditions) |
| **PCR** | 1-2 hours | 30-45 minutes (fast enzymes) |
| **LAMP** | 30-60 minutes | 20-30 minutes |

The isothermal nature of RPA eliminates time-consuming temperature transitions, enabling faster results.

### 3.3 Equipment Portability

RPA enables true **point-of-care testing** through minimal equipment requirements:

**PCR Requirements:**
- Thermal cycler ($5,000-30,000)
- Gel electrophoresis apparatus
- UV transilluminator
- Refrigerated centrifuge
- Dedicated laboratory space

**LAMP Requirements:**
- Heat block or water bath
- Optional: Real-time turbidity monitor
- Gel electrophoresis for confirmation

**RPA Requirements:**
- Simple incubator or dry block heater (optional)
- Detection device (fluorescence reader, lateral flow strip reader, or naked eye)
- Portable battery-operated options available

### 3.4 Sensitivity and Specificity

RPA achieves **single copy detection sensitivity** comparable to PCR:

- **Analytical sensitivity:** 1-10 copies per reaction
- **Clinical sensitivity:** Typically >95% for target pathogens
- **Specificity:** High discrimination capability with properly designed primers

### 3.5 Lyophilized Reagent Stability

Dangkang Bio's lyophilized (freeze-dried) RPA reagents offer exceptional stability:

- **Room temperature storage:** Up to 12 months (depending on formulation)
- **Transportation:** No cold chain required
- **Shelf life:** Extended stability compared to liquid reagents
- **Convenience:** Ready-to-use format eliminates preparation steps

This characteristic is particularly valuable for:
- Resource-limited settings
- Field deployment
- Point-of-care testing
- Shipping to remote locations

### 3.6 Low Contamination Risk

RPA's low operating temperature significantly reduces contamination hazards:

- **No high-temperature denaturation:** Eliminates aerosol formation from boiling samples
- **Closed-tube detection:** Fluorescence detection without opening reaction tubes
- **Lateral flow format:** Complete isolation of amplification products
- **Visual readouts:** No need for post-amplification manipulation

### 3.7 Simple Primer Design

Unlike LAMP, which requires 4-6 primers and complex design rules, RPA primer design is straightforward:

- **Primer count:** 2 primers (forward and reverse), similar to PCR
- **Primer length:** 30-35 nucleotides (longer than PCR primers)
- **GC content:** 30-70% (no extreme requirements)
- **Design tools:** Available from Dangkang Bio or standard oligo synthesis suppliers

---

## 4. Detection Formats

Dangkang Bio offers RPA technology in multiple detection formats to suit various testing environments and requirements.

### 4.1 Real-Time Fluorescence Detection

**Principle:**
Real-time RPA uses fluorescent probes to monitor amplification in real-time, similar to qPCR.

**Probe Design:**
Exo probes (exonuclease-based) are commonly used:
- **Structure:** Oligonucleotide with 5' fluorophore and 3' quencher
- **THF modification:** A tetrahydrofuran (THF) residue serves as an abasic site
- **Mechanism:** Polymerase enzyme excises the THF-containing region, separating fluorophore from quencher
- **Result:** Fluorescence emission increases proportionally with amplification

**Advantages:**
- Quantitative or semi-quantitative results
- Real-time monitoring of amplification
- High sensitivity
- Closed-tube format
- Compatible with standard qPCR instruments or dedicated fluorescence readers

**Dangkang Bio Products:**
- Fluorescence RPA kits (DNA)
- RT-Fluorescence RPA kits (RNA)
- Isothermal fluorescence detector (ERCF8)

### 4.2 Lateral Flow Strip (LFS) Detection

**Principle:**
Lateral flow RPA combines amplification with immunochromatographic detection for simple, visual results.

**Components:**
- **Gold nanoparticle conjugates:** Anti-fluorescein antibodies bound to colloidal gold
- **Nitrocellulose membrane:** Contains test line (target capture) and control line (system validation)
- **Sample pad:** Application point for amplified product
- **Absorbent pad:** Drives fluid flow via capillary action

**Procedure:**
1. Complete RPA amplification (typically 10-15 minutes)
2. Add amplified product to sample pad (or use integrated cartridge)
3. Liquid migrates along strip, carrying gold conjugates
4. Amplified product (containing FAM label) binds to anti-FAM on gold particles
5. Complex accumulates at test line, producing visible purple/red line
6. Control line validates proper flow and conjugate function

**Advantages:**
- **Visual readout:** No instrumentation required
- **Rapid:** Total time <20 minutes from sample to result
- **Simple:** Minimal training required
- **Field-deployable:** Battery-operated or manual operation
- **Single-use:** No cross-contamination between tests

**Dangkang Bio Products:**
- Strip-type RPA kits (DNA and RNA versions)
- Ready-to-use lateral flow detection strips

### 4.3 End-Point Detection with Gel Electrophoresis

**Principle:**
Traditional detection by agarose gel electrophoresis following amplification.

**Advantages:**
- Compatible with existing laboratory equipment
- Multiple targets can be resolved on same gel
- Lower cost per test for high-volume testing
- Familiar methodology for molecular biology laboratories

**Considerations:**
- Requires opening reaction tubes (higher contamination risk)
- Additional time for electrophoresis (30-60 minutes)
- UV transilluminator required
- Less suitable for point-of-care settings

---

## 5. Dangkang Bio Product Portfolio

Dangkang Bio has developed a comprehensive portfolio of RPA-based products for diverse diagnostic applications.

### 5.1 RT-RPA Kits (Reverse Transcription RPA for RNA Targets)

**RT-Strip RPA Kit:**
- Lateral flow detection format
- RNA pathogen detection
- Lyophilized format for stability
- Includes all components except sample preparation

**RT-Basic RPA Kit:**
- Standard format for laboratory use
- Gel electrophoresis endpoint detection
- Cost-effective for high-volume screening
- Flexible protocol optimization

**RT-Fluorescence RPA Kit:**
- Real-time quantitative detection
- Compatible with standard qPCR instruments
- High sensitivity and specificity
- Closed-tube format minimizes contamination

### 5.2 RPA Kits (DNA Detection)

**Strip RPA Kit:**
- Lateral flow format for field testing
- Visual results in <20 minutes
- No instrumentation required
- Ideal for point-of-care applications

**Fluorescence RPA Kit:**
- Real-time detection capability
- Quantitative or semi-quantitative results
- High sensitivity (single copy detection)
- Compatible with isothermal fluorescence detector (ERCF8)

**Basic RPA Kit:**
- Standard format with gel electrophoresis detection
- Versatile protocol optimization
- Cost-effective for laboratory use
- Broad compatibility with existing workflows

### 5.3 CRISPR Cas Enzymes

Dangkang Bio provides high-quality Cas enzymes for next-generation CRISPR-based detection:

**LbuCas13a (Leptotrichia buccalis Cas13a):**
- RNA-targeting CRISPR protein
- Used in SHERLOCK detection platform
- Collateral RNase activity enables signal amplification
- Excellent specificity for pathogen detection

**LbCas12a (Lachnospiraceae bacterium Cas12a):**
- DNA-targeting CRISPR protein
- Used in DETECTR detection platform
- Trans-cleavage activity for signal generation
- Compatible with various detection formats

**Product Specifications:**
- Recombinant protein expression in E. coli
- High purity (>95% by SDS-PAGE)
- Activity-verified quality control
- Available in multiple规格 (microgram to gram quantities)
- Bulk pricing for reagent partnerships

### 5.4 Sample Preparation Products

**Magnetic Bead Nucleic Acid Extraction Kits:**
- Rapid DNA/RNA isolation from various sample types
- Manual and automated formats available
- Validated for downstream RPA and PCR applications
- Compatible with clinical, veterinary, food, and environmental samples

**Automated Nucleic Acid Extractor (ELSN16):**
- 16-well parallel processing
- Pre-programmed protocols for common sample types
- Walk-away operation
- Maintains high extraction quality
- Compact footprint for benchtop use

### 5.5 Detection Instruments

**Isothermal Fluorescence Detector (ERCF8):**
- 8-well format for simultaneous testing
- Real-time fluorescence monitoring
- Portable, battery-operated design
- Touchscreen interface
- Data storage and export capabilities
- Ideal for point-of-care and field testing

### 5.6 Ready-to-Use Detection Kits

Dangkang Bio offers validated detection kits for major animal diseases:

| Target Pathogen | Full Name | Application |
|-----------------|-----------|-------------|
| **ASF** | African Swine Fever Virus | Porcine disease diagnostics |
| **WSSV** | White Spot Syndrome Virus | Shrimp/aquaculture disease |
| **EHP** | Enterocytozoon hepatopenaei | Shrimp/aquaculture disease |
| **IHHNV** | Infectious Hypodermal and Hematopoietic Necrosis Virus | Shrimp/aquaculture disease |
| **PEDV** | Porcine Epidemic Diarrhea Virus | Porcine disease diagnostics |
| **PRRSV** | Porcine Reproductive and Respiratory Syndrome Virus | Porcine disease diagnostics |
| **CSFV** | Classical Swine Fever Virus | Porcine disease diagnostics |
| **AIV** | Avian Influenza Virus | Poultry disease diagnostics |
| **NDV** | Newcastle Disease Virus | Poultry disease diagnostics |

All kits include:
- Lyophilized RPA reagents
- Positive and negative controls
- Detection components (strips or probes as applicable)
- Detailed protocol documentation

---

## 6. Applications

### 6.1 Human and Animal Pathogen Detection

RPA technology enables rapid molecular detection of infectious disease agents:

**Animal Health:**
- Rapid screening at farm level
- Support for disease surveillance programs
- Quarantine and biosecurity applications
- Herd health management

**Human Diagnostics:**
- Point-of-care infectious disease testing
- Emergency department applications
- Resource-limited healthcare settings
- Travel medicine and border health

### 6.2 Food Safety Screening

Protect consumers and brands through rapid pathogen screening:

**Target Organisms:**
- *Salmonella* spp.
- *Listeria monocytogenes*
- *Escherichia coli* O157:H7
- *Campylobacter* spp.
- *Staphylococcus aureus*

**Applications:**
- Raw material testing
- Production line monitoring
- Finished product verification
- Recall response and outbreak investigation

### 6.3 Agricultural Disease Detection

Support crop and livestock health through rapid molecular diagnostics:

**Crop Diseases:**
- Seed certification
- Nursery screening
- Field diagnostics
- Quarantine enforcement

**Livestock Diseases:**
- Pre-import/export testing
- Herd screening programs
- Disease outbreak response
- Drug efficacy monitoring

### 6.4 Environmental Monitoring

Assess environmental health through sensitive nucleic acid detection:

**Water Quality:**
- Microbial source tracking
- Pathogen monitoring
- Compliance testing
- Recreational water safety

**Soil and Plant Environment:**
- Soil microbiome analysis
- Pathogen reservoir detection
- Biocontrol agent verification

### 6.5 Point-of-Care Diagnostics

Enable molecular testing outside traditional laboratory settings:

**Features Enabling Point-of-Care Use:**
- Minimal equipment requirements
- Short time-to-result
- Lyophilized reagent stability
- Simple interpretation (lateral flow)
- Battery-operated instruments

**Settings:**
- Physician offices and clinics
- Emergency departments
- Veterinary field practice
- Agricultural extension services
- Border inspection stations

### 6.6 Biosafety and Customs Inspection

Support national biosecurity through rapid screening capabilities:

**Applications:**
- Quarantine screening
- Import/export inspection
- Invasive species detection
- Bioterrorism preparedness
- Environmental biosecurity

### 6.7 GMO Detection

Screen for genetically modified organisms in agricultural products:

**Capabilities:**
- Detection of specific transgenic elements
- Quantification of GMO content
- Compliance verification
- Seed and grain testing

---

## 7. RPA-CRISPR Integration

### 7.1 The Next Generation of Molecular Diagnostics

The combination of isothermal amplification (RPA) with CRISPR-based detection represents the cutting edge of molecular diagnostics, offering unprecedented specificity and sensitivity.

### 7.2 CRISPR-Cas Systems for Detection

**Cas13a (SHERLOCK Platform):**
- Targets RNA sequences
- *Leptotrichia buccalis* origin
- Collateral RNase activity cleaves reporter molecules
- Enables ultra-sensitive detection (attomolar range)
- Multiple targets possible with different Cas13 proteins

**Cas12a (DETECTR Platform):**
- Targets DNA sequences
- *Lachnospiraceae bacterium* origin
- Trans-cleavage activity on reporter DNA
- High specificity for target recognition
- Simple one-pot reaction format

### 7.3 "Isothermal Amplification + Specific Recognition" Dual Assurance

The RPA-CRISPR combination provides two layers of target specificity:

**First Layer - RPA Amplification:**
- Primer binding provides initial target recognition
- Amplifies signal from minimal starting material
- Enables detection of single copy targets

**Second Layer - CRISPR Recognition:**
- Cas protein requires perfect or near-perfect match
- Additional discrimination beyond primer specificity
- Eliminates false positives from non-specific amplification

### 7.4 Dangkang Bio's Role in CRISPR Diagnostics

Dangkang Bio provides high-quality Cas enzymes to enable CRISPR-based detection:

**Product Advantages:**
- Recombinant protein production in E. coli
- Rigorous quality control testing
- Activity-verified performance
- Technical support for assay development
- Bulk supply for reagent partnerships

**Application Areas:**
- Research reagent supply
- Diagnostic kit development
- Custom assay development
- CRO services for assay validation

---

## 8. Technical Specifications

### 8.1 Reaction Parameters

| Parameter | Specification |
|-----------|---------------|
| **Reaction Temperature** | 37-42°C (optimal: 39-40°C) |
| **Reaction Time** | 5-20 minutes (typical: 10-15 minutes) |
| **Sample-to-Answer Time** | 20-45 minutes (including extraction) |
| **Detection Sensitivity** | Single copy level (1-10 copies) |
| **Reaction Volume** | 25-50 μL (standard formats) |

### 8.2 Primer Design Parameters

| Parameter | Specification |
|-----------|---------------|
| **Primer Length** | 30-35 nucleotides |
| **GC Content** | 30-70% |
| **Primer Tm** | 45-65°C (calculated) |
| **Primer Spacing** | 100-500 bp (target amplicon) |
| **Polarity** | Forward and reverse primers required |

### 8.3 Storage and Stability

| Format | Storage Temperature | Shelf Life |
|--------|-------------------|------------|
| Lyophilized reagents | 2-8°C (short-term) / -20°C (long-term) | 12 months (2-8°C) |
| Liquid reagents | -20°C | 6-12 months |
| Reconstituted reagents | 2-8°C | 24-48 hours |

### 8.4 Instrument Requirements

**For Fluorescence Detection:**
- Fluorescence reader or qPCR instrument
- Excitation: 470 nm, Emission: 520 nm (FAM channel)
- Optional: Isothermal fluorescence detector (ERCF8)

**For Lateral Flow Detection:**
- No instrument required (visual)
- Optional: Strip reader for documentation

**For Basic/Gel Detection:**
- Heat block or water bath (37-42°C)
- Agarose gel electrophoresis apparatus
- UV transilluminator

---

## 9. Conclusion

Recombinase Polymerase Amplification (RPA) represents a transformative technology in nucleic acid-based diagnostics. By operating at isothermal temperatures (37-42°C), RPA eliminates the need for complex thermal cycling equipment while maintaining the sensitivity and specificity of traditional PCR methods.

Dangkang Bio's comprehensive RPA product portfolio—from lyophilized kits to Cas enzymes, from manual reagents to automated instruments—provides complete solutions for:

- **Point-of-care testing** requiring minimal infrastructure
- **Field diagnostics** for animal health and agricultural applications
- **Food safety screening** throughout production chains
- **Biosecurity applications** at borders and inspection points
- **Next-generation diagnostics** through CRISPR integration

The combination of RPA's simplicity with CRISPR's specificity positions Dangkang Bio to address the evolving needs of molecular diagnostics across multiple industries and geographies.

---

**Document Control**

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | January 2025 | Dangkang Bio Technical Team | Initial release |

**Contact Information**

Dangkang Bio (当康基因)  
Technical Support: tech@dangkangbio.com  
Business Development: info@dangkangbio.com  
Website: www.dangkangbio.com

---

*This document is intended for professional audiences and may be subject to change without notice. Product availability and specifications vary by region. Please contact Dangkang Bio for region-specific product information and regulatory status.*
