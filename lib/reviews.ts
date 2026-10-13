// REVIEWS GO HERE once the Google Business Profile has real ones.
//
// Rules:
//  - Only paste real reviews, word for word, with the reviewer's name as shown on Google.
//  - Never add placeholder or sample reviews, even obviously fake ones. They get forgotten and shipped.
//  - Do NOT add Review / aggregateRating schema for these. Third-party reviews marked up
//    as first-party risk a Google manual action.
//
// While this array is empty, the reviews section does not render at all.
export type Review = { quote: string; name: string; source: "Google"; url?: string };

export const REVIEWS: Review[] = [];
