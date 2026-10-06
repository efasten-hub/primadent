# Bestandsaufnahme alte Website und Doctolib

Stand: 06.10.2026. Erhoben mit Chromium (JavaScript ausgeführt) von https://zahnarzt-adali.de/ (7 Seiten) und dem Doctolib-Profil. Die Rohtexte liegen unter `docs/alte-website/`.

## 1. Terminbuchung

- **Anbieter: Doctolib** (nicht Dr. Flex).
- **Profil-URL:** `https://www.doctolib.de/zahnarztpraxis/berlin/zahnarztpraxis-dr-adali`
- **Einbindung:** reiner Link, **kein Widget, kein iFrame, kein Doctolib-Script**. Auf allen Seiten außer Impressum und Datenschutz gibt es drei Varianten:
  1. Button „Termin online buchen“ (Magenta `#B22F68`, abgerundet) → Profil-URL ohne Parameter
  2. eine schwebende Leiste `nav.doctolib-widget` mit Doctolib-Logo (Bild von `www.doctolib.de/external_button/…`, also ein externer Request beim Laden)
  3. ein Link „Termin“ → Profil-URL **mit UTM-Parametern** (`utm_campaign=website-button&utm_source=online-booking&utm_medium=referral`)
- Für die neue Seite gilt `modus: "link"`, standardmäßig **ohne UTM** (laut Auftrag nur nach Freigabe).
- **Neupatienten:** laut Doctolib online buchbar.

## 2. Praxisdaten im Abgleich

| Feld | Alte Website | Doctolib | Bewertung |
|---|---|---|---|
| Name | „Zahnarztpraxis Dr. Adali“ | **„Praxisgemeinschaft Dr. Adali / Dr. Kleinert“** | ⚠️ **Abweichung**, für einheitliche Praxisdaten (NAP) klären [[PRÜFEN]] |
| Inhaber | Dr. med. dent. Ufuk Adali (Impressum) | Dr. Adali | ✓ Titel geklärt |
| Adresse | Schönhauser Allee 10–11, 10119 Berlin | Schönhauser Allee 10-11, 10119 Berlin | ✓ (nur Bindestrich) |
| Zusatz | Aufgang A / links im 2. OG | „2 Stockwerk **mit Aufzug**“ | ✓ Aufzug vorhanden |
| Parken | Tiefgarage | „Kostenlose Parkplätze in der Nähe“ | leichte Abweichung [[PRÜFEN]] |
| Telefon | 030 44 26 84 3 (+49 30 4426843) | n/a | ✓ |
| Fax | 030 44 05 40 60 | n/a | ✓ |
| E-Mail | kontakt@zahnarzt-adali.de | n/a | ✓ |
| Sprechzeiten | „Montag, Mittwoch und Freitag sowie nach Vereinbarung“ | Mo 9:00–19:30 · Di 12:00–19:30 · Mi 10:00–19:30 · Do 9:00–19:30 · Fr 9:00–16:00 | ⚠️ Doctolib zeigt die Zeiten der **Praxisgemeinschaft**. Welche gelten für Dr. Adali? [[PRÜFEN]] |
| Sprachen | n/a | **Deutsch und Englisch** | Spanisch und Türkisch in der Praxis? [[PRÜFEN]] |
| Abrechnung | n/a | gesetzlich und privat Versicherte sowie Selbstzahlende | ✓ für `kassen_und_privat` |

Dr. Kleinert: Dr. Thorsten Kleinert hat eine eigene Praxis an derselben Adresse (zahnarzt-kleinert.de). Es handelt sich offenbar um eine **Praxisgemeinschaft** (gemeinsame Räume, getrennte Praxen).

## 3. Fakten zu Dr. Adali (Seite „Über Dr. Adali“, aktualisiert am 02.06.2026)

- **Titel:** Dr. med. dent. Ufuk Adali, Berufsbezeichnung Zahnarzt (verliehen in Deutschland)
- **Staatsexamen** Zahnmedizin an der Charité – Universitätsmedizin Berlin, **2011**
- **bis 2026** leitender Oberarzt, Abteilung für Zahnärztliche Prothetik, Alterszahnmedizin und Funktionslehre, Charité (Direktor: Prof. Dr. Florian Beuer, MME). Beginn nicht angegeben [[PRÜFEN]].
- **seit 2026** Gastwissenschaftler in derselben Abteilung
- **Zahnärztekammer Berlin:**
  - 2021–2026 gewähltes Vorstandsmitglied (Referat „Aus- und Fortbildung Zahnmedizinische Fachangestellte“)
  - **seit 2026** Vorstandsmitglied (Referat „Fort- und Weiterbildung Zahnärztinnen und Zahnärzte“)
- **Qualifikationen:**
  - Spezialist für Prothetik (DGPro, Deutsche Gesellschaft für Prothetische Zahnmedizin und Biomaterialien)
  - Zertifizierter Implantologe (DGI, Deutsche Gesellschaft für Implantologie)
  - Mitglied der APW (Akademie Praxis und Wissenschaft der DGZMK)
  - **Praktikerpreis 2020 der DGKiZ** (Deutsche Gesellschaft für Kinderzahnmedizin)
- **Publikationen:** 15 peer-reviewte Artikel (2018–2025), 1 Buchkapitel (Elsevier 2024), redaktionelle Beiträge. ORCID 0000-0001-6557-2841. Vollständige Liste in `docs/alte-website/uber-dr-adali.txt`.
- **Referent (Auswahl):** Charité, Nobel Biocare, bredent, Philipp-Pfaff-Institut, APW
- **Zitat** der alten Seite: „Ich nehme mir Zeit – für Sie, Ihre Fragen und die beste Lösung. Ihre Situation ist individuell. Meine Therapie auch.“

⚠️ **„Seit 2011“:** Startseite und Footer der alten Seite sagen „bietet er seit 2011 moderne Zahnmedizin“ bzw. „Seit 2011 in Berlin“. 2011 ist das Jahr des Staatsexamens, nicht zwingend der Praxisgründung. `praxis_seit` bleibt [[PRÜFEN]].

⚠️ **Charité-Status:** Der GEO-Kernsatz „ehemals leitender Oberarzt“ ist korrekt (bis 2026).

## 4. Rechtliches (Impressum alte Seite)

- Kammer: Zahnärztekammer Berlin, Stallstraße 1, 10585 Berlin
- KZV: Kassenzahnärztliche Vereinigung Berlin, Georg-Wilhelm-Straße 16, 10711 Berlin
- Berufsrecht: ZHG, Berliner Heilberufekammergesetz, Berufsordnung der ZÄK Berlin, GOZ
- Berufshaftpflicht: Deutsche Ärzte Finanz, Colonia-Allee 10–20, 51067 Köln, Geltung Deutschland
- Verantwortlich nach § 18 Abs. 2 MStV: Dr. med. dent. Ufuk Adali
- **Veraltet:** „Angaben gemäß § 5 TMG“. Das TMG ist durch das Digitale-Dienste-Gesetz ersetzt, korrekt ist **§ 5 DDG** [[PRÜFEN juristisch]].
- Keine USt-ID angegeben.

## 5. Formulierungen mit HWG/BO-Prüfbedarf

| Fundstelle | Formulierung |
|---|---|
| Startseite, Leistungen | „eine der höchsten Qualifikationen auf diesem Fachgebiet“ |
| Startseite | „eine der renommiertesten Universitätskliniken Europas“ |
| Doctolib-Profil | „Spezialistenpraxis Dr. Adali“ |
| Leistungen | „Hygiene und Aufbereitung entsprechen höchsten Standards“ |
| Leistungen | „Feste Zähne an einem Tag“ |
| Prophylaxe | „beugen wir … wirksam vor“ |

## 6. Bilder der alten Seite (22 Dateien)

| Gruppe | Dateien (ID) | Bewertung | Entscheidung |
|---|---|---|---|
| Porträt Dr. Adali | 74b458e5 (1362×1545, Canon EOS 5D Mk II, 2018) | echtes Porträt, von der Praxis bestätigt | ✓ übernommen: `src/assets/fotos/dr-ufuk-adali-portraet.jpg` |
| „Die Praxis“-Galerie | 89e25972 (Keramikveneers), d3ee5ec8 (Implantat-Chirurgieset), f49f9807 (Instrumente) | **keine Raumfotos**, sondern Detailaufnahmen. Herkunft unklar. | übernommen als `praxis-detail-*.jpg` [[BILDRECHTE PRÜFEN]] |
| Logo | b7618cf4, ff45ac99 | Magenta-Logo mit schwarzer Vignette | nicht übernommen; das saubere Logo von der Praxis liegt vor |
| **Klinische Intraoralfotos** | 3fe1f75e, 6cb493ec, b7bea2bc, b90ac350, e9044b08, **f4fc41f8 (Kind)**, d9651616 (Endo), bb0f7fb0 (Implantatprothetik) | vermutlich **echte Patientenfälle** = Gesundheitsdaten | ⛔ **nicht übernommen**. Nur mit schriftlicher Einwilligung und rechtlicher Prüfung (HWG § 11). Nicht im Repository. |
| Stock-/Baukastenbilder | 43bd40f6, 43f69c3b, 5e1c098b, 735df6a3 („ALWAYS SMILE“), 77497767, 88af4b7d (OP, Türkis), ac9b72e6, c3dc635f (pinke Zahnbürste) | Lizenz unklar, teils Klischees laut Auftrag | ⛔ nicht übernommen, in Phase 3 durch neue Stockfotos ersetzt |

**Es gibt keine Fotos von Empfang, Wartebereich, Behandlungszimmer oder Hauseingang.** Laut Auftrag sollen dort echte Praxisfotos stehen. Bis zum Fotoshooting bleiben diese Positionen Platzhalterflächen („FOTO FOLGT“) bzw. neutrale Stock-Details ohne Praxisbezug.

## 7. Datenschutz-Altlasten der alten Seite

- Cookie-Banner mit Google-Diensten (Analytics-Opt-out-Link), Ecwid (Shop-Plugin), Google-Maps-Einbettung mit Einwilligung
- externes Doctolib-Logo beim Seitenaufruf
- Kontaktformular mit Pflichtfeld „Nachricht“
- Das alles entfällt auf der neuen Seite (siehe Phase 7).

## 8. Offene Fragen an die Praxis

1. **Praxisname für Google, Doctolib und Website:** „Zahnarztpraxis Dr. Adali“ oder „Praxisgemeinschaft Dr. Adali / Dr. Kleinert“? Für SEO und GEO muss er überall identisch sein.
2. **Sprechzeiten von Dr. Adali** (Wochentage und Uhrzeiten) im Unterschied zu den Zeiten der Praxisgemeinschaft.
3. **Sprachen:** Doctolib nennt Deutsch und Englisch. Spricht jemand in der Praxis Türkisch oder Spanisch?
4. **Seit wann** gibt es die eigene Praxis (Gründung oder Übernahme)?
5. **Klinische Fotos:** Liegen schriftliche Einwilligungen der Patienten vor? Sind es eigene Fälle?
6. **Detailfotos der Galerie:** eigene Aufnahmen oder Stock?
7. **Parken:** Tiefgarage (Website) oder „kostenlose Parkplätze in der Nähe“ (Doctolib)?
8. **Logo-Umfärbung** in Oxblood: freigegeben?
