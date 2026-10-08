import type { CollectionEntry } from "astro:content";
import type { Sprache } from "../config/site";

/** Props, die jede Seitenvorlage erhält. */
export interface VorlagenProps {
  id: string;
  sprache: Sprache;
  daten: CollectionEntry<"seiten">["data"];
}
