import { addDoc, collection } from "firebase/firestore";
import { db } from "@/core/myFirebase";

export const RSVP_COLLECTION = "thiepMoi";

/** Writes the existing RSVP document schema to Firestore. */
export function createRsvp(rsvp) {
  return addDoc(collection(db, RSVP_COLLECTION), rsvp);
}
