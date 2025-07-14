export interface ToxicityLimits {
  TOXICITY: ToxicityAttributeScore;
  SEVERE_TOXICITY: ToxicityAttributeScore;
  IDENTITY_ATTACK: ToxicityAttributeScore;
  INSULT: ToxicityAttributeScore;
  PROFANITY: ToxicityAttributeScore;
  THREAT: ToxicityAttributeScore;
  SEXUALLY_EXPLICIT: ToxicityAttributeScore;
  FLIRTATION: ToxicityAttributeScore;
}

export interface ToxicityScore {
  value: number;
  type: string;
}

export interface ToxicityAttributeScore {
  spanScores: Array<{
    begin: number;
    end: number;
    score: ToxicityScore;
  }>;
  summaryScore: ToxicityScore;
}

export interface ToxicityAnalysisResult {
  attributeScores: {
    [key: string]: ToxicityAttributeScore;
  };
}
