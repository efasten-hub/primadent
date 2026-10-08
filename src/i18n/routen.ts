/**
 * ============================================================================
 *  ZENTRALE SLUG-ZUORDNUNG
 * ============================================================================
 *
 *  Jede Seite hat eine sprachneutrale ID und je Sprache einen eigenen Slug.
 *  Daraus entstehen die URLs, z. B.
 *    implantologie → /leistungen/implantologie
 *                    /en/services/dental-implants
 *                    /es/tratamientos/implantes-dentales
 *                    /tr/tedaviler/implant
 *
 *  Der Sprachumschalter, hreflang und die Sitemap lesen NUR diese Datei.
 *  So springt der Umschalter immer auf die passende Seite der anderen Sprache.
 *
 *  Regeln
 *  - Deutsch ohne Sprachpräfix, alle anderen Sprachen mit /en, /es, /tr.
 *  - Slugs: Kleinbuchstaben, Bindestriche, keine Umlaute/Sonderzeichen
 *    (ä → ae, ğ → g, ş → s, ı → i, ñ → n …).
 *  - slug: null  → Seite gibt es in dieser Sprache bewusst nicht.
 *  - Ob eine Seite tatsächlich erscheint, entscheidet zusätzlich der Inhalt:
 *    Es muss src/content/<sprache>/<id>.md mit „uebersetzt: true“ geben.
 * ============================================================================
 */

import type { Sprache } from "../config/site";

export type SeitenTyp =
  | "startseite"
  | "uebersicht"   // Leistungs- oder Ratgeber-Übersicht
  | "leistung"
  | "ratgeber"
  | "seite"        // Über, Praxis, FAQ, Für Zahnärzte …
  | "kontakt"
  | "recht"        // Impressum, Datenschutz, Barrierefreiheit
  | "intern";      // Bestätigungsseiten (noindex)

export interface Route {
  typ: SeitenTyp;
  /** Übergeordnete Seite (für verschachtelte URLs und Breadcrumbs). */
  eltern?: string;
  slug: Record<Sprache, string | null>;
  /** Nicht in Sitemap/Suchmaschinen (z. B. Bestätigungsseite). */
  noindex?: boolean;
  /** Schalter in site.ts, der die Seite steuert (z. B. "leistungen.implantologie"). */
  schalter?: string;
}

export const routen: Record<string, Route> = {
  // ---------------------------------------------------------------- Start
  startseite: { typ: "startseite", slug: { de: "", en: "", es: "", tr: "" } },

  // ---------------------------------------------------------------- Leistungen
  leistungen: { typ: "uebersicht", slug: { de: "leistungen", en: "services", es: "tratamientos", tr: "tedaviler" } },
  zahnersatz: {
    typ: "leistung", eltern: "leistungen", schalter: "leistungen.zahnersatz",
    slug: { de: "zahnersatz", en: "crowns-bridges-dentures", es: "protesis-dentales", tr: "protez-dis" },
  },
  implantologie: {
    typ: "leistung", eltern: "leistungen", schalter: "leistungen.implantologie",
    slug: { de: "implantologie", en: "dental-implants", es: "implantes-dentales", tr: "implant" },
  },
  adhaesivbruecke: {
    typ: "leistung", eltern: "leistungen", schalter: "leistungen.adhaesivbruecke",
    slug: { de: "klebebruecke", en: "resin-bonded-bridge", es: "puente-adhesivo", tr: "yapiskan-kopru" },
  },
  "implantat-alternativen": {
    typ: "leistung", eltern: "leistungen", schalter: "leistungen.implantat-alternativen",
    slug: { de: "implantat-alternativen", en: "implant-alternatives", es: "alternativas-al-implante", tr: "implant-alternatifleri" },
  },
  aesthetik: {
    typ: "leistung", eltern: "leistungen", schalter: "leistungen.aesthetik",
    slug: { de: "aesthetik", en: "cosmetic-dentistry", es: "estetica-dental", tr: "estetik-dis-hekimligi" },
  },
  "cmd-schienen": {
    typ: "leistung", eltern: "leistungen", schalter: "leistungen.cmd-schienen",
    slug: { de: "cmd-schienentherapie", en: "tmd-splint-therapy", es: "disfuncion-atm-ferulas", tr: "cmd-gece-plagi" },
  },
  endodontie: {
    typ: "leistung", eltern: "leistungen", schalter: "leistungen.endodontie",
    slug: { de: "wurzelkanalbehandlung", en: "root-canal-treatment", es: "endodoncia", tr: "kanal-tedavisi" },
  },
  parodontologie: {
    typ: "leistung", eltern: "leistungen", schalter: "leistungen.parodontologie",
    slug: { de: "parodontologie", en: "gum-disease-treatment", es: "periodoncia", tr: "dis-eti-tedavisi" },
  },
  fuellungen: {
    typ: "leistung", eltern: "leistungen", schalter: "leistungen.fuellungen",
    slug: { de: "zahnfarbene-fuellungen", en: "tooth-coloured-fillings", es: "empastes-esteticos", tr: "beyaz-dolgu" },
  },
  prophylaxe: {
    typ: "leistung", eltern: "leistungen", schalter: "leistungen.prophylaxe",
    slug: { de: "prophylaxe-zahnreinigung", en: "professional-teeth-cleaning", es: "limpieza-dental-profesional", tr: "profesyonel-dis-temizligi" },
  },
  oralchirurgie: {
    typ: "leistung", eltern: "leistungen", schalter: "leistungen.oralchirurgie",
    slug: { de: "oralchirurgie", en: "oral-surgery", es: "cirugia-oral", tr: "agiz-cerrahisi" },
  },
  "kinder-zahnersatz": {
    typ: "leistung", eltern: "leistungen", schalter: "leistungen.kinder-zahnersatz",
    slug: { de: "zahnersatz-kinder", en: "dental-prosthetics-children", es: "protesis-dental-infantil", tr: "cocuklarda-protez" },
  },
  "mih-syndrome": {
    typ: "leistung", eltern: "leistungen", schalter: "leistungen.mih-syndrome",
    slug: { de: "kreidezaehne-mih-syndrome", en: "mih-chalky-teeth-rare-conditions", es: "mih-dientes-de-tiza", tr: "mih-tebesir-dis" },
  },
  "labor-digital": {
    typ: "leistung", eltern: "leistungen", schalter: "leistungen.labor-digital",
    slug: { de: "dentallabor-digital", en: "in-house-dental-lab", es: "laboratorio-dental-propio", tr: "dis-laboratuvari" },
  },

  // ---------------------------------------------------------------- Praxis
  "ueber-dr-adali": { typ: "seite", slug: { de: "ueber-dr-adali", en: "about-dr-adali", es: "sobre-el-dr-adali", tr: "dr-adali-hakkinda" } },
  "praxis-team": { typ: "seite", slug: { de: "praxis-team", en: "practice-team", es: "clinica-equipo", tr: "klinik-ekip" } },
  "fuer-zahnaerzte": {
    typ: "seite", schalter: "schalter.fuer_zahnaerzte",
    slug: { de: "fuer-zahnaerzte", en: "for-dentists", es: null, tr: null },
  },

  // ---------------------------------------------------------------- Ratgeber
  ratgeber: { typ: "uebersicht", slug: { de: "ratgeber", en: "guide", es: "guia", tr: "rehber" } },
  "implantat-oder-klebebruecke": {
    typ: "ratgeber", eltern: "ratgeber",
    slug: { de: "implantat-oder-klebebruecke", en: "implant-or-resin-bonded-bridge", es: "implante-o-puente-adhesivo", tr: "implant-mi-yapiskan-kopru-mu" },
  },
  "kosten-zahnersatz": {
    typ: "ratgeber", eltern: "ratgeber",
    slug: { de: "kosten-zahnersatz", en: "cost-of-dental-prosthetics", es: "coste-protesis-dental", tr: "protez-maliyeti" },
  },
  "mih-kinder": {
    typ: "ratgeber", eltern: "ratgeber",
    slug: { de: "kreidezaehne-mih-kinder", en: "mih-chalky-teeth-children", es: "mih-en-ninos", tr: "cocuklarda-mih" },
  },
  "knirschen-schiene": {
    typ: "ratgeber", eltern: "ratgeber",
    slug: { de: "zaehneknirschen-schiene", en: "teeth-grinding-splint", es: "bruxismo-ferula", tr: "dis-gicirdatma-plak" },
  },
  sofortimplantate: {
    typ: "ratgeber", eltern: "ratgeber",
    slug: { de: "feste-zaehne-an-einem-tag", en: "teeth-in-a-day", es: "dientes-fijos-en-un-dia", tr: "tek-gunde-sabit-dis" },
  },
  "deutsches-system": {
    typ: "ratgeber", eltern: "ratgeber",
    slug: { de: null, en: "dentist-berlin-german-system", es: "dentista-berlin-sistema-aleman", tr: "berlinde-dis-hekimi-alman-sistemi" },
  },

  // ---------------------------------------------------------------- Service
  faq: { typ: "seite", slug: { de: "faq", en: "faq", es: "preguntas-frecuentes", tr: "sss" } },
  kontakt: { typ: "kontakt", slug: { de: "termin-kontakt", en: "appointment-contact", es: "cita-contacto", tr: "randevu-iletisim" } },
  "anfrage-gesendet": {
    typ: "intern", noindex: true,
    slug: { de: "anfrage-gesendet", en: "request-sent", es: "solicitud-enviada", tr: "talep-gonderildi" },
  },

  // ---------------------------------------------------------------- Rechtliches
  impressum: { typ: "recht", slug: { de: "impressum", en: "legal-notice", es: "aviso-legal", tr: "kunye" } },
  datenschutz: { typ: "recht", slug: { de: "datenschutz", en: "privacy-policy", es: "politica-de-privacidad", tr: "gizlilik-politikasi" } },
  barrierefreiheit: { typ: "recht", slug: { de: "barrierefreiheit", en: "accessibility", es: null, tr: null } },
};

/** URL-Pfad einer Seite in einer Sprache – ohne Prüfung, ob der Inhalt existiert. null = kein Slug. */
export function pfad(id: string, sprache: Sprache, standard: Sprache = "de"): string | null {
  const r = routen[id];
  if (!r) throw new Error(`Unbekannte Seiten-ID „${id}“ – bitte in src/i18n/routen.ts eintragen.`);
  const eigen = r.slug[sprache];
  if (eigen === null) return null;
  const teile: string[] = [];
  if (r.eltern) {
    const elternPfad = pfad(r.eltern, sprache, standard);
    if (elternPfad === null) return null;
    teile.push(elternPfad.replace(/^\/|\/$/g, ""));
  } else if (sprache !== standard) {
    teile.push(sprache);
  }
  if (eigen) teile.push(eigen);
  const p = "/" + teile.filter(Boolean).join("/");
  return p === "/" ? "/" : p + "/";
}
