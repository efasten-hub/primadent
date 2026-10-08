/**
 * Übersetzungs- und URL-Helfer.
 *
 *  t(sprache, "termin.online_buchen")          → Oberflächentext aus src/i18n/<sprache>.json
 *  t(sprache, "termin.anrufen", { telefon })   → mit Platzhaltern
 *  sprachListe(sprache, ["de", "en", "tr"])    → „Deutsch, Englisch und Türkisch“
 *  seitenVerfuegbar()                          → welche Seite gibt es in welcher Sprache
 *  alternativen(id)                            → Sprachfassungen einer Seite (für Umschalter, hreflang)
 */
import { getCollection } from "astro:content";
import { site, type Sprache } from "../config/site";
import { routen, pfad } from "./routen";
import de from "./de.json";
import en from "./en.json";
import es from "./es.json";
import tr from "./tr.json";

const texte: Record<Sprache, unknown> = { de, en, es, tr };

export const SPRACHEN = site.sprachen.aktiv;
export const STANDARD = site.sprachen.standard;

/** Oberflächentext. Fehlt ein Schlüssel, wird der deutsche Text verwendet und eine Warnung ausgegeben. */
export function t(sprache: Sprache, schluessel: string, werte: Record<string, string | number> = {}): string {
  const hole = (obj: unknown) =>
    schluessel.split(".").reduce<unknown>((o, k) => (o && typeof o === "object" ? (o as Record<string, unknown>)[k] : undefined), obj);
  let text = hole(texte[sprache]);
  if (typeof text !== "string") {
    console.warn(`[i18n] Schlüssel „${schluessel}“ fehlt in ${sprache}.json`);
    text = hole(texte[STANDARD]);
  }
  if (typeof text !== "string") throw new Error(`[i18n] Schlüssel „${schluessel}“ fehlt auch in ${STANDARD}.json`);
  return (text as string).replace(/\{(\w+)\}/g, (_, k) => (k in werte ? String(werte[k]) : `{${k}}`));
}

/** Liste von Sprachnamen in der Zielsprache: „Deutsch, Englisch und Türkisch“. */
export function sprachListe(sprache: Sprache, codes: readonly Sprache[]): string {
  const namen = codes.map((c) => t(sprache, `sprachen.namen.${c}`));
  if (namen.length <= 1) return namen.join("");
  return `${namen.slice(0, -1).join(", ")} ${t(sprache, "sprachen.und")} ${namen.at(-1)}`;
}

/** Sprache aus einer URL ableiten (/en/… → en, sonst Deutsch). */
export function spracheAusPfad(pathname: string): Sprache {
  const erstes = pathname.split("/")[1] as Sprache;
  return SPRACHEN.includes(erstes) && erstes !== STANDARD ? erstes : STANDARD;
}

/** Ist eine Seite per Schalter in site.ts abgeschaltet? */
export function seiteAktiv(id: string): boolean {
  const schalter = routen[id]?.schalter;
  if (!schalter) return true;
  const wert = schalter.split(".").reduce<unknown>((o, k) => (o as Record<string, unknown>)?.[k], site);
  return wert !== false;
}

/**
 * Verfügbarkeit aller Seiten: id → Sprachen, in denen die Seite veröffentlicht ist.
 * Bedingungen: Sprache aktiv, Slug vorhanden, Schalter an, Inhalt mit „uebersetzt: true“.
 */
let cache: Map<string, Set<Sprache>> | null = null;
const titelCache = new Map<string, string>();
export async function seitenVerfuegbar(): Promise<Map<string, Set<Sprache>>> {
  if (cache) return cache;
  const eintraege = await getCollection("seiten");
  const karte = new Map<string, Set<Sprache>>();
  for (const e of eintraege) titelCache.set(e.id, e.data.titel);
  for (const e of eintraege) {
    const [sprache, ...rest] = e.id.split("/") as [Sprache, ...string[]];
    const id = rest.join("/");
    if (!routen[id]) throw new Error(`Inhalt src/content/${e.id}.md: Seiten-ID „${id}“ fehlt in src/i18n/routen.ts`);
    if (!SPRACHEN.includes(sprache) || !e.data.uebersetzt || !seiteAktiv(id)) continue;
    if (pfad(id, sprache, STANDARD) === null) continue;
    if (!karte.has(id)) karte.set(id, new Set());
    karte.get(id)!.add(sprache);
  }
  cache = karte;
  return karte;
}

export interface Alternative {
  sprache: Sprache;
  href: string;
  /** false → diese Sprachfassung fehlt; href zeigt auf die deutsche Fassung mit Hinweis. */
  vorhanden: boolean;
}

/** Sprachfassungen einer Seite für Umschalter und hreflang. */
export async function alternativen(id: string): Promise<Alternative[]> {
  const verfuegbar = (await seitenVerfuegbar()).get(id) ?? new Set<Sprache>();
  return SPRACHEN.map((sprache) => {
    if (verfuegbar.has(sprache)) return { sprache, href: pfad(id, sprache, STANDARD)!, vorhanden: true };
    // Fehlt die Übersetzung: deutsche Fassung mit Hinweis-Anker (per CSS :target sichtbar, ohne JS/Cookie).
    // Gibt es auch keine deutsche Fassung (z. B. Ratgeber nur für internationale Patienten): Startseite der Sprache.
    if (!verfuegbar.has(STANDARD)) return { sprache, href: pfad("startseite", sprache, STANDARD)!, vorhanden: false };
    return { sprache, href: `${pfad(id, STANDARD, STANDARD)}#uebersetzung-fehlt-${sprache}`, vorhanden: false };
  });
}

/** Link zu einer Seite in einer Sprache – mit Rückfall auf Deutsch bzw. Startseite der Sprache. */
export async function link(id: string, sprache: Sprache): Promise<string> {
  const verfuegbar = (await seitenVerfuegbar()).get(id);
  if (verfuegbar?.has(sprache)) return pfad(id, sprache, STANDARD)!;
  if (verfuegbar?.has(STANDARD)) return pfad(id, STANDARD, STANDARD)!;
  return pfad("startseite", sprache, STANDARD)!;
}

/** Doctolib-Link in der passenden Oberflächensprache (falls unterstützt), optional mit UTM. */
export function terminLink(sprache: Sprache): string {
  const tb = site.terminbuchung;
  const params = [tb.sprach_parameter[sprache], tb.utm].filter(Boolean).join("&");
  return params ? `${tb.profil_url}?${params}` : tb.profil_url;
}

/** Bietet der Buchungsanbieter eine Oberfläche in dieser Sprache? */
export function terminOberflaecheInSprache(sprache: Sprache): boolean {
  return sprache === "de" || Boolean(site.terminbuchung.sprach_parameter[sprache]);
}

/** Titel (H1) einer Seite in einer Sprache – z. B. für Linklisten. */
export async function seitenTitel(id: string, sprache: Sprache): Promise<string> {
  await seitenVerfuegbar();
  return titelCache.get(`${sprache}/${id}`) ?? titelCache.get(`${STANDARD}/${id}`) ?? id;
}

/**
 * Ziel aller „Online-Termin“-Links (Header, Hero, mobile Leiste, Footer) – an EINER Stelle entschieden:
 *  - modus "link":   direkt zu Doctolib (neues Fenster)
 *  - modus "widget": zum Zwei-Klick-Kalender auf der Kontaktseite
 *  - aktiv: false:   zum Anfrageformular
 */
export async function terminZiel(sprache: Sprache): Promise<{ href: string; extern: boolean; online: boolean }> {
  const tb = site.terminbuchung;
  const kontakt = await link("kontakt", sprache);
  if (!tb.aktiv) return { href: `${kontakt}#anfrage`, extern: false, online: false };
  if (tb.modus === "widget") return { href: `${kontakt}#online-kalender`, extern: false, online: true };
  return { href: terminLink(sprache), extern: true, online: true };
}
